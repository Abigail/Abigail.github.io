# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>

# include "moves.h"
# include "parse.h"

# define SIZE    ((long long) 1024 * 1024 * 1024)
# define BILLION ((long long) 1000 * 1000 * 1000)
# define MILLION             (1000 * 1000)
# define STEPS   BILLION
# define HEATMAP_ROW_SIZE 10
# define HEATMAP_COL_SIZE 10
# define HEATMAP_NONE      0
# define HEATMAP_ABS       1
# define HEATMAP_PERC      2

typedef long long unsigned value_t;
typedef int                rowcol_t;
typedef bool            ** board_t;
typedef step_t          ** heatmap_t;

/*
 * A struct defining a "move part". A move part describes one direction
 * a particular piece can move in. So, a Knight or a Queen will have 
 * eight move parts, a Rook four, and a Pawn one.
 */
typedef struct move_part {
    int dr;
    int dc;
    int min;
    int max;
} move_part;


value_t spiral_square (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);
    rowcol_t max     = abs_col > abs_row ? abs_col : abs_row;
    value_t  base    = (2 * (value_t) max - 1) *
                       (2 * (value_t) max - 1);

    value_t result = row ==   max ? base + 7 * max + col
                   : col == - max ? base + 5 * max + row
                   : row == - max ? base + 3 * max - col
                   :                base + 1 * max - row;

    return result;
}


value_t spiral_diamond (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);
    value_t  ring    = (value_t) abs_row + abs_col;
    if (ring == 0) {
        return 1;
    }

    value_t p_max   = ring * ring + (ring - 1) * (ring - 1);
    value_t max     = ring * ring + (ring + 1) * (ring + 1);
    value_t size    = max - p_max;
    value_t e_size  = size / 4;

    value_t result = row >  0 && col <= 0 ? max - 0 * e_size - abs_col
                   : row <= 0 && col <  0 ? max - 1 * e_size - abs_row
                   : row <  0 && col >= 0 ? max - 2 * e_size - abs_col
                   : row >= 0 && col >  0 ? max - 3 * e_size - abs_row
                   :                       -1;

    return result;
}


value_t wedge_folded (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);

    /*
     * This ought not to happen
     */
    if (row > 0)           {return 0;}
    if (abs_col > abs_row) {return 0;}

    value_t result = ((value_t) row - 1) * ((value_t) row - 1);
    if (result % 2 == 1) {
        result += row - col;
    }
    else {
        result += row + col;
    }

    return result;
}

value_t wedge_flat (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);

    /*
     * This ought not to happen
     */
    if (row > 0)           {return 0;}
    if (abs_col > abs_row) {return 0;}

    value_t result = ((value_t) row - 1) * ((value_t) row - 1) +
                                row -                 col;

    return result;
}


/*
 * Commify a number
 */
char * f (step_t steps) {
    static char result [64];
    char * result_p = result;
    size_t tail;

    snprintf (result, sizeof (result), "%llu", steps);
    while (* result_p) {
        result_p ++;
    }

    tail = result + sizeof (result) - result_p;

    while (result_p - result > 3) {
        result_p -= 3;
        memmove (result_p + 1, result_p, tail);
        * result_p = ',';
        tail += 4;
    }

    return result;
}

/*
 * Function acting on the board
 */
board_t board      = (board_t) NULL;
int     board_size =              0;
value_t max_value  =              0;

void init_field (int index) {
    if ((board [index] = (bool *) malloc (SIZE * sizeof (bool))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (size_t i = 0; i < SIZE; i ++) {
        board [index] [i] = false;
    }
}

void inc_board () {
    if ((board = (board_t) realloc (board, (board_size + 1) * sizeof (bool *)))
              == NULL) {
        perror ("Realloc failed");
        exit (1);
    }
    init_field (board_size);
    board_size ++;
}

void set_value (value_t value) {
    while (value / SIZE >= board_size) {
        inc_board ();
    }
    board [value / SIZE] [value % SIZE] = true;
    if (value > max_value) {
        max_value = value;
    }
}

bool has_value (value_t value) {
    return value / SIZE >= board_size ? false
                                      : board [value / SIZE] [value % SIZE];
}



/*
 * Functions dealing with the heat map
 */
heatmap_t heatmap      = (heatmap_t) NULL;
int heatmap_rows       = 0;   /* Size of heatmap */
int heatmap_cols       = 0;
int heatmap_row_offset = 0;   /* Offset to go from external coordinates */
int heatmap_col_offset = 0;   /* to internal coordinates                */
int min_heatmap_row    = 0;   /* min/max values in the heat map         */
int max_heatmap_row    = 0;   /* In outside coordinates                 */
int min_heatmap_col    = 0;
int max_heatmap_col    = 0;

void init_heatmap (int max_rows, int max_cols) {
    heatmap_rows       = max_rows * 2 + 3;
    heatmap_cols       = max_cols * 2 + 3;
    heatmap_row_offset = max_rows     + 1;
    heatmap_col_offset = max_cols     + 1;

    if ((heatmap = (heatmap_t) malloc (heatmap_rows *
            sizeof (step_t *))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (int row = 0; row < heatmap_rows; row ++) {
        if ((heatmap [row] = (step_t *) malloc (heatmap_cols *
                      sizeof (step_t))) == NULL) {
            perror ("Malloc failed");
            exit (1);
        }
        for (int col = 0; col < heatmap_cols; col ++) {
            heatmap [row] [col] = 0;
        }
    }
}


void print_heatmap (int show_heatmap) {
    printf ("\n");
    /*
     * Find the maximum value to be printed, and the total number
     * of steps.
     */
    step_t max_value   = 0;
    step_t total_steps = 0;
    for (int row = max_heatmap_row; row >= min_heatmap_row; row --) {
        for (int col = min_heatmap_col; col <= max_heatmap_col; col ++) {
            step_t value = heatmap [row + heatmap_row_offset]
                                   [col + heatmap_col_offset];
            if (value > max_value) {
                max_value = value;
            }
            total_steps += value;
        }
    }

    /*
     * Create format strings to print the values and the spaces/star
     */
    char * temp = (char *) NULL;
    if ((temp = (char *) malloc (32 * sizeof (char))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    int size = sprintf (temp, "%llu", show_heatmap == HEATMAP_PERC ? 100
                                                                   : max_value);

    char * i_format = (char *) NULL;
    char * s_format = (char *) NULL;

    if ((i_format = (char *) malloc ((size + 7) * sizeof (char))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    if ((s_format = (char *) malloc ((size + 6) * sizeof (char))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }

    sprintf (i_format, "| %%%dlu ", size);
    sprintf (s_format, "| %%%ds ",  size);

    /*
     * Line out the center dot
     */
    char * center = (char *) NULL;
    if ((center = (char *) malloc ((size + 1) * sizeof (char))) == NULL) {
        perror ("Malloc");
        exit (1);
    }
    for (int i = 0; i < size; i ++) {
        center [i] = ' ';
    }
    center [size / 2] = '*';

    /*
     * Now that we have the size of each column, and we know the number
     * of columns, we can create a dividing line. 
     */
    char * line = (char *) NULL;
    int width = 1 + (max_heatmap_col - min_heatmap_col + 1) * (size + 3);
    if ((line = (char *) malloc ((width + 1) * sizeof (char))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (int c = 0; c < width; c ++) {
        line [c] = '-';
    }
    line [width] = '\0';
    for (int col = 0; col < max_heatmap_col - min_heatmap_col + 2; col ++) {
        line [col * (size + 3)] = '+';
    }

    for (int row = max_heatmap_row; row >= min_heatmap_row; row --) {
        printf ("%s\n", line);
        for (int col = min_heatmap_col; col <= max_heatmap_col; col ++) {
            if (row == 0 && col == 0) {
                printf ("| %s ", center);
            }
            else {
                step_t value = heatmap [row + heatmap_row_offset]
                                       [col + heatmap_col_offset];
                if (value) {
                    printf (i_format,
                           show_heatmap == HEATMAP_PERC
                                         ? 100 * value / total_steps
                                         :       value);
                }
                else {
                    printf (s_format, " ");
                }
            }
        }
        printf ("|\n");
    }
    printf ("%s\n", line);
}


void record_move (int dr, int dc) {
    if (dr < -HEATMAP_ROW_SIZE) {dr = -HEATMAP_ROW_SIZE - 1;}
    if (dr >  HEATMAP_ROW_SIZE) {dr =  HEATMAP_ROW_SIZE + 1;}
    if (dc < -HEATMAP_ROW_SIZE) {dc = -HEATMAP_ROW_SIZE - 1;}
    if (dc >  HEATMAP_ROW_SIZE) {dc =  HEATMAP_ROW_SIZE + 1;}
    if (dr < min_heatmap_row) {min_heatmap_row = dr;}
    if (dr > max_heatmap_row) {max_heatmap_row = dr;}
    if (dc < min_heatmap_col) {min_heatmap_col = dc;}
    if (dc > max_heatmap_col) {max_heatmap_col = dc;}

    int row = dr + heatmap_row_offset;
    int col = dc + heatmap_col_offset;

    heatmap [row] [col] ++;
}


int main (int argc, char ** argv) {
    /*
     * Parse options, if any
     */
    value_t (* to_value) (rowcol_t, rowcol_t) = &spiral_square;
    char * board_type  = "spiral square";
    int ch;
    step_t max_steps   = BILLION;
    bool debug         = false;
    int show_heatmap   = HEATMAP_NONE;

    while ((ch = getopt (argc, argv, "b:m:M:dhH")) != -1) {
        bool match = false;
        if (ch == 'b') {
            if (!strcmp (optarg, "spiral_square") ||
                !strcmp (optarg, "s_sq")) {
                to_value   = &spiral_square;
                board_type = "spiral square";
                match      = true;
            }
            if (!strcmp (optarg, "spiral_diamond") ||
                !strcmp (optarg, "s_d")) {
                to_value   = &spiral_diamond;
                board_type = "spiral diamond";
                match      = true;
            }
            if (!strcmp (optarg, "wedge_folded") ||
                !strcmp (optarg, "w_fo")) {
                to_value   = &wedge_folded;
                board_type = "wedge folded";
                match      = true;
            }
            if (!strcmp (optarg, "wedge_flat") ||
                !strcmp (optarg, "w_fl")) {
                to_value   = &wedge_flat;
                board_type = "wedge flat";
                match      = true;
            }
            if (!match) {
                printf ("Do not know what to do with board type %s\n",
                                board_type);
                exit (1);
            }
        }
        if (ch == 'm') {
            max_steps = atol (optarg);
        }
        if (ch == 'M') {
            max_steps = BILLION * atol (optarg);
        }
        if (ch == 'd') {
            debug = true;
        }
        if (ch == 'h' || ch == 'H') {
            show_heatmap = ch == 'h' ? HEATMAP_ABS : HEATMAP_PERC;
        }
    }

    /*
     * Initialize the heatmap
     */
    if (show_heatmap) {
        init_heatmap (HEATMAP_ROW_SIZE, HEATMAP_COL_SIZE);
    }

    /*
     * We start at the origin, value 1
     */
    set_value (1);

    /*
     * Current position and value of the piece; we start at the origin.
     */
    rowcol_t row                 = 0;
    rowcol_t col                 = 0;
    value_t  value               = to_value (row, col);
    bool     out_of_bounds       = false;
    value_t  out_of_bounds_value = 0;
    rowcol_t out_of_bounds_row   = 0;
    rowcol_t out_of_bounds_col   = 0;
    step_t   steps               = 0;

    move_part * move_list        = (move_part *) NULL;
    size_t nr_of_moves           = 0;
    move_t move;

    if (optind < argc) {
        move = parse_betza (argv [optind]);
    }
    else {
        exit (0);  /* Nothing to do */
    }

    if (debug) {
        dump_move (move);
    }

    while (1) {
        /*
         * Repeat until we get trapped, or are moving out of bounds
         */
        rowcol_t best_row;
        rowcol_t best_col;
        value_t  best_value = 0;
        bool     found      = false;

        for (int i = 0; i < move . size; i ++) {
            move_part_t this = move . list [i];

            value_t  move_best = 0;  /* Best value within this move     */
            rowcol_t move_row  = 0;
            rowcol_t move_col  = 0;
            value_t  prev_val  = 0;  /* Previous value within this move */

            /*
             * Slide along this move. A step (or leap) is just a slide
             * with a max of 1. We stop the slide if at least one of the
             * following conditions is true:
             *
             *  - We exceed the max step size (max reach)
             *  - The value is 0 or less (out of bounds)
             *  - Value equals or exceeds SIZE (too far away)
             *  - We reach a visited square (move is blocked)
             *  - The value of a square is higher than the value
             *    of the previous square (too far away from center;
             *    we cannot improve).
             */

            for (int slide  = this . min;
                     slide <= this . max || this . max == 0;
                     slide ++) {

                rowcol_t new_row = row + slide * this . dr;
                rowcol_t new_col = col + slide * this . dc;
                value_t value    = to_value (new_row, new_col);

                if (value <= 0) {
                    break;   /* Out of bounds (some spirals only) */
                }

                /*
                if (value >= size_mult * SIZE) {
                    if (debug) {
                        out_of_bounds_value = value;
                        out_of_bounds_row   = new_row;
                        out_of_bounds_col   = new_col;
                    }
                    out_of_bounds = true;
                    break;
                }
                */

                if (has_value (value)) {
                    break;   /* Square has been visited */
                }

                if (prev_val > 0 && value > prev_val) {
                    break;   /* Cannot improve */
                }

                if (move_best == 0 || value < move_best) {
                    move_best = value;
                    move_row  = new_row;
                    move_col  = new_col;
                }

                prev_val = value;
            }

            if (out_of_bounds) {
                break;
            }

            /*
             * Improve the best score if:
             *    - We found a possible square (move_best > 0)
             *    - We improved on the best score (move_best < best)
             *         + Or we did not have a best score yet
             */
            if (move_best && (best_value == 0 || move_best < best_value)) {
                best_value = move_best;
                best_row   = move_row;
                best_col   = move_col;
                found      = true;
            }
        }

        if (out_of_bounds) {
            printf ("\nRan out of bounds on step %llu\n", steps);
            if (debug) {
                printf ("Tried to jump to point (%d, %d) value %llu = %lluG\n",
                         out_of_bounds_row, out_of_bounds_col,
                         out_of_bounds_value, out_of_bounds_value / SIZE);
            }
            break;
        }

        if (found) {
            steps ++;
            if (show_heatmap) {
                record_move (row - best_row, col - best_col);
            }
            row      = best_row;
            col      = best_col;
            set_value (best_value);
            /* printf ("Step %d moves to [%d, %d] (val = %d)\n",
             * steps, row, col, (int) best_value);
             */
        }
        else {
            printf ("\nTrapped on step %s (%d, %d)\n", f (steps), row, col);
            break;
        }

        if (max_steps && steps >= max_steps) {
            printf ("\nTerminating search after %s steps\n",
                       f (max_steps));
            break;
        }

        if (steps > 0 && steps % MILLION == 0) {
            printf (" %3dM steps, max_value = %4dM\r",
                                 (int) (steps     / MILLION),
                                 (int) (max_value / MILLION));
            fflush (NULL);
        }
    }

    if (show_heatmap) {
        print_heatmap (show_heatmap);
    }

    return 1;
}

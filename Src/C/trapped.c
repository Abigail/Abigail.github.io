# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>

# include "moves.h"
# include "parse.h"
# include "trapped.h"
# include "heatmap.h"
# include "layout.h"

# define SIZE    ((long long) 1024 * 1024 * 1024)
# define BILLION ((long long) 1000 * 1000 * 1000)
# define MILLION             (1000 * 1000)
# define STEPS   BILLION

typedef bool            ** board_t;


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

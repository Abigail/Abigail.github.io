# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>

# define SIZE  ((long long) 1024 * 1024 * 1024)
# define STEPS ((long long) 1000 * 1000 * 1000)

typedef long value_t;
typedef int  rowcol_t;
typedef long step_t;

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

/*
 * Return an empty move_part struct, initialized with some defaults.
 */
move_part new_move_part () {
    move_part out;

    out . dr  = 0;
    out . dc  = 0;
    out . min = 1;
    out . max = 1;

    return out;
}


value_t spiral_square (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);
    rowcol_t max     = abs_col > abs_row ? abs_col : abs_row;
    rowcol_t base    = (2 * max - 1) * (2 * max - 1);

    value_t result = row ==   max ? base + 7 * max + col
                   : col == - max ? base + 5 * max + row
                   : row == - max ? base + 3 * max - col
                   :                base + 1 * max - row;

    return result;
}


value_t spiral_diamond (rowcol_t row, rowcol_t col) {
    rowcol_t abs_row = abs (row);
    rowcol_t abs_col = abs (col);
    rowcol_t ring    = abs_row + abs_col;
    if (ring == 0) {
        return 1;
    }

    rowcol_t p_max   = ring * ring + (ring - 1) * (ring - 1);
    rowcol_t max     = ring * ring + (ring + 1) * (ring + 1);
    rowcol_t size    = max - p_max;
    rowcol_t e_size  = size / 4;

    value_t result = row >  0 & col <= 0 ? max - 0 * e_size - abs_col
                   : row <= 0 & col <  0 ? max - 1 * e_size - abs_row
                   : row <  0 & col >= 0 ? max - 2 * e_size - abs_col
                   : row >= 0 & col >  0 ? max - 3 * e_size - abs_row
                   :                      -1;

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

    value_t result = (row - 1) * (row - 1);
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

    value_t result = (row - 1) * (row - 1) +
                      row -       col;

    return result;
}


/*
 * Add a single move (a leap) to a list of move parts
 */
move_part * add_move (move_part * move_list, size_t * n, int d_row, int d_col) {
    size_t m = * n + 1;
    if ((move_list = (move_part *) realloc (move_list, m * sizeof (move_part)))
                   == NULL) {
        perror ("Realloc failed");
        exit (1);
    }

    move_part new = new_move_part ();
    new . dr = d_row;
    new . dc = d_col;

    move_list [* n] = new;

    * n = m;

    return move_list;
}


/*
 * Add a full set of leaper move parts to a list of move parts:
 * full rotational symmetry.
 */
move_part * add_leaper_moves (move_part * move_list, size_t * n,
                             int d_row, int d_col,
                             int steps) {

    size_t m = * n + ((d_row == 0 || d_col == 0 ||
                       abs (d_row) == abs (d_col)) ? 4 : 8);
    if ((move_list = (move_part *) realloc (move_list, m * sizeof (move_part)))
                   == NULL) {
        perror ("Realloc failed");
        exit (1);
    }

    /*
     * Handle the case of an orthogonal leaper
     */
    if (d_row == 0 || d_col == 0) {
        int d = d_row + d_col;
        for (size_t i = 0; i < 4; i ++) {
            move_part new = new_move_part ();
            new . max = steps;
            switch (i) {
                case (0): new . dr =   d; break;
                case (1): new . dr = - d; break;
                case (2): new . dc =   d; break;
                case (3): new . dc = - d; break;
            }
            move_list [* n + i] = new;
        }
    }
    else {
        for (size_t i = 0; i < 4; i ++) {
            move_part new = new_move_part ();
            new . max = steps;
            switch (i) {
                case (0): new . dr =   d_row; new . dc =   d_col; break;
                case (1): new . dr = - d_row; new . dc =   d_col; break;
                case (2): new . dr = - d_row; new . dc = - d_col; break;
                case (3): new . dr =   d_row; new . dc = - d_col; break;
            }
            move_list [* n + i] = new;
        }
        if (m - * n == 8) {
            for (size_t i = 4; i < 8; i ++) {
                move_part new = new_move_part ();
                new . max = steps;
                switch (i) {
                    case (4): new . dc =   d_row; new . dr =   d_col; break;
                    case (5): new . dc = - d_row; new . dr =   d_col; break;
                    case (6): new . dc = - d_row; new . dr = - d_col; break;
                    case (7): new . dc =   d_row; new . dr = - d_col; break;
                }
                move_list [* n + i] = new;
            }
        }
    }

    * n = m;

    return move_list;;
}



int main (int argc, char ** argv) {
    /*
     * Parse options, if any
     */
    value_t (* to_value) (rowcol_t, rowcol_t) = &spiral_square;
    char * board_type = "spiral square";
    int ch;
    int max_steps = 1;
    int size_mult = 1;
    bool debug    = false;

    while ((ch = getopt (argc, argv, "b:m:s:d")) != -1) {
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
        if (ch == 's') {
            size_mult = atol (optarg);
        }
        if (ch == 'd') {
            debug = true;
        }
    }

    bool ** board;
    /*
     * Initialize the board to size_mult billion booleans.
     */
    if ((board = (bool **) malloc (size_mult * sizeof (bool *))) == NULL) {
        perror ("Failed to malloc the board");
        exit (1);
    }
    for (size_t i = 0; i < size_mult; i ++) {
        if ((board [i] = (bool *) malloc (SIZE * sizeof (bool))) == NULL) {
            perror ("Failed to malloc the board");
            exit (1);
        }
    }

    /*
     * Initialize the board
     */
    for (size_t i = 0; i < size_mult; i ++) {
        for (size_t j = 0; j < SIZE; j ++) {
            board [i] [j] = false;
        }
    }
    board [0] [1] = true;

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

    for (int i = optind; i < argc; i ++) {
        int dr    = 0;
        int dc    = 0;
        int steps = 1;
        switch (* argv [i]) {
            case 'W': dr = 1; dc = 0;            break;  /* Wazir       */
            case 'F': dr = 1; dc = 1;            break;  /* Ferz        */
            case 'D': dr = 2; dc = 0;            break;  /* Dabbaba     */
            case 'N': dr = 2; dc = 1;            break;  /* Knight      */
            case 'A': dr = 2; dc = 2;            break;  /* Alfil       */
            case 'H': dr = 3; dc = 0;            break;  /* Threeleaper */
            case 'C': dr = 3; dc = 1;            break;  /* Camel       */
            case 'Z': dr = 3; dc = 2;            break;  /* Zebra       */
            case 'T': dr = 3; dc = 3;            break;  /* Tripper     */

            case 'B': dr = 1; dc = 1; steps = 0; break;  /* Bishop      */
            case 'R': dr = 1; dc = 0; steps = 0; break;  /* Rook        */
        }
        if (dr > 0 || dc > 0) {
            if (* (argv [i] + 1)) {
                steps = atoi (argv [i] + 1);
            }
            move_list = add_leaper_moves (move_list, &nr_of_moves,
                                                     dr, dc, steps);
            continue;
        }
        if (!strcmp (argv [i], "p")) { /* pawn moves */
            move_list = add_move (move_list, &nr_of_moves, -1, 0);
            continue;
        }

        if (i < argc - 1) {
            move_list  = add_leaper_moves (move_list, &nr_of_moves,
                                           atoi (argv [i]),
                                           atoi (argv [i + 1]),
                                           1);
            i ++;
        }
    }

    if (debug) {
        for (int i = 0; i < nr_of_moves; i ++) {
            move_part this = move_list [i];
            printf ("Move %2d: dr = %2d; dc = %2d; min = %2d; max = %2d\n",
                     i, this . dr, this . dc, this . min, this . max);
        }
    }

    while (1) {
        /*
         * Repeat until we get trapped, or are moving out of bounds
         */
        rowcol_t best_row;
        rowcol_t best_col;
        value_t  best_value = 0;
        bool     found      = false;

        for (int i = 0; i < nr_of_moves; i ++) {
            move_part this = move_list [i];

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

                if (value >= size_mult * SIZE) {
                    if (debug) {
                        out_of_bounds_value = value;
                        out_of_bounds_row   = new_row;
                        out_of_bounds_col   = new_col;
                    }
                    out_of_bounds = true;
                    break;   /* Too far way */
                }

                if (board [value / SIZE] [value % SIZE]) {
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
            printf ("\nRan out of bounds on step %ld\n", steps);
            if (debug) {
                printf ("Tried to jump to point (%d, %d) value %lu = %lluG\n",
                         out_of_bounds_row, out_of_bounds_col,
                         out_of_bounds_value, out_of_bounds_value / SIZE);
            }
            break;
        }

        if (found) {
            steps ++;
            row                                           = best_row;
            col                                           = best_col;
            board [best_value / SIZE] [best_value % SIZE] = true;
            /* printf ("Step %d moves to [%d, %d] (val = %d)\n",
             * steps, row, col, (int) best_value);
             */
        }
        else {
            printf ("\nTrapped on step %ld (%d, %d)\n", steps, row, col);
            break;
        }

        if (max_steps && steps >= max_steps * STEPS) {
            printf ("\nTerminating search after %lld steps\n",
                       max_steps * STEPS);
            break;
        }

        if (steps > 0 && steps % 1000000 == 0) {
            printf (" %3dM steps\r", (int) (steps / 1000000));
            fflush (NULL);
        }
    }

    return 1;
}

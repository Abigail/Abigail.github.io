# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>

# define SIZE 16 * 1024 * 1024

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

size_t spiral_to_value (int row, int col) {
    int abs_row = abs (row);
    int abs_col = abs (col);
    int max     = abs_col > abs_row ? abs_col : abs_row;
    int base    = (2 * max - 1) * (2 * max - 1);

    int result = row ==   max ? base + 7 * max + col
               : col == - max ? base + 5 * max + row
               : row == - max ? base + 3 * max - col
               :                base + 1 * max - row;

    return (size_t) result;
}


size_t folded_wedge_to_value (int row, int col) {
    int abs_row = abs (row);
    int abs_col = abs (col);

    /*
     * This ought not to happen
     */
    if (row > 0)           {return 0;}
    if (abs_col > abs_row) {return 0;}

    int value = (row - 1) * (row - 1);
    if (value % 2 == 1) {
        value += row - col;
    }
    else {
        value += row + col;
    }

    return (size_t) value;
}

size_t flat_wedge_to_value (int row, int col) {
    int abs_row = abs (row);
    int abs_col = abs (col);

    /*
     * This ought not to happen
     */
    if (row > 0)           {return 0;}
    if (abs_col > abs_row) {return 0;}

    int value = (row - 1) * (row - 1) + row - col;

    return (size_t) value;
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
                             int d_row, int d_col) {

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
    size_t (* to_value) (int, int) = &spiral_to_value;
    int ch;
    while ((ch = getopt (argc, argv, "b:")) != -1) {
        char * board_type = optarg;
        bool   match      = false;
        if (!strcmp (board_type, "spiral")) {
            to_value = &spiral_to_value;
            match    = true;
        }
        if (!strcmp (board_type, "folded_wedge")) {
            to_value = &folded_wedge_to_value;
            match    = true;
        }
        if (!strcmp (board_type, "flat_wedge")) {
            to_value = &flat_wedge_to_value;
            match    = true;
        }
        if (!match) {
            printf ("Do not know what to do with board type %s\n", board_type);
            exit (1);
        }
    }
    bool * board;
    /*
     * Initialize the board to a million booleans.
     */
    if ((board = (bool *) malloc (SIZE * sizeof (bool))) == NULL) {
        perror ("Failed to malloc the board");
        exit (1);
    }
    /*
     * Initialize the board
     */
    for (size_t i = 0; i < SIZE; i ++) {
        board [i] = false;
    }
    board [1] = true;

    /*
     * Current position and value of the piece; we start at the origin.
     */
    int row               = 0;
    int col               = 0;
    size_t value          = to_value (row, col);
    bool out_of_bounds    = false;
    int steps             = 0;

    move_part * move_list = (move_part *) NULL;
    size_t nr_of_moves    = 0;

    for (int i = 1; i < argc; i ++) {
        if (strlen (argv [i]) == 1) {
            int dr = 0;
            int dc = 0;
            switch (argv [i] [0]) {
                case 'W': dr = 1; dc = 0; break;  /* Wazir       */
                case 'F': dr = 1; dc = 1; break;  /* Ferz        */
                case 'D': dr = 2; dc = 0; break;  /* Dabbaba     */
                case 'N': dr = 2; dc = 1; break;  /* Knight      */
                case 'A': dr = 2; dc = 2; break;  /* Alfil       */
                case 'H': dr = 3; dc = 0; break;  /* Threeleaper */
                case 'C': dr = 3; dc = 1; break;  /* Camel       */
                case 'Z': dr = 3; dc = 2; break;  /* Zebra       */
                case 'T': dr = 3; dc = 3; break;  /* Tripper     */
            }
            if (dr > 0 || dc > 0) {
                move_list = add_leaper_moves (move_list, &nr_of_moves, dr, dc);
                continue;
            }
            if (!strcmp (argv [i], "p")) { /* pawn moves */
                move_list = add_move (move_list, &nr_of_moves, -1, 0);
                continue;
            }
        }
        if (i < argc - 1) {
            move_list  = add_leaper_moves (move_list, &nr_of_moves,
                                           atoi (argv [i]),
                                           atoi (argv [i + 1]));
            i ++;
        }
    }


    while (1) {
        /*
         * Repeat until we get trapped, or are moving out of bounds
         */
        int best_row;
        int best_col;
        size_t best_value;
        bool found = false;

        for (int i = 0; i < nr_of_moves; i ++) {
            int try_row = row + move_list [i] . dr;
            int try_col = col + move_list [i] . dc;
            size_t try_value = to_value (try_row, try_col);

            if (try_value >= SIZE) {
                printf ("Ran out of bounds on step %d\n", steps);
                out_of_bounds = true;
                break;
            }

            if (try_value > 0) {
                if (!board [try_value]) {
                    if (!found || try_value < best_value) {
                        found      = true;
                        best_row   = try_row;
                        best_col   = try_col;
                        best_value = try_value;
                    }
                }
            }
        }

        if (out_of_bounds) {
            break;
        }

        if (found) {
            steps ++;
            row                = best_row;
            col                = best_col;
            board [best_value] = true;
            /* printf ("Step %d moves to [%d, %d] (val = %d)\n",
             * steps, row, col, (int) best_value);
             */
        }
        else {
            printf ("Trapped on step %d (%d, %d)\n", steps, row, col);
            break;
        }
    }

    return 1;
}

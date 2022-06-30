# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>

# define SIZE 16 * 1024 * 1024

# define D_ROW  0
# define D_COL  1

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


int ** add_leaper_moves (int ** move_list, size_t * n, int d_row, int d_col) {
    size_t m = * n + ((d_row == 0 || d_col == 0 ||
                       abs (d_row) == abs (d_col)) ? 4 : 8);
    if ((move_list = (int **) realloc (move_list, m * sizeof (int *)))
                   == NULL) {
        perror ("Realloc failed");
        exit (1);
    }

    if (d_row == 0 || d_col == 0) {
        int d = d_row + d_col;
        for (size_t i = 0; i < 4; i ++) {
            move_list [* n + i] = (int *) malloc (2 * sizeof (int));
            if (move_list [* n + i] == NULL) {
                perror ("Malloc failed");
                exit (1);
            }
            switch (i) {
                case (0): move_list [* n + i] [D_ROW] =   d;
                          move_list [* n + i] [D_COL] =   0;
                          break;
                case (1): move_list [* n + i] [D_ROW] = - d;
                          move_list [* n + i] [D_COL] =   0;
                          break;
                case (2): move_list [* n + i] [D_ROW] =   0;
                          move_list [* n + i] [D_COL] =   d;
                          break;
                case (3): move_list [* n + i] [D_ROW] =   0;
                          move_list [* n + i] [D_COL] = - d;
                          break;
            }
        }
    }
    else {
        for (size_t i = 0; i < 4; i ++) {
            move_list [* n + i] = (int *) malloc (2 * sizeof (int));
            if (move_list [* n + i] == NULL) {
                perror ("Malloc failed");
                exit (1);
            }
            switch (i) {
                case (0): move_list [* n + i] [D_ROW] =   d_row;
                          move_list [* n + i] [D_COL] =   d_col;
                          break;
                case (1): move_list [* n + i] [D_ROW] = - d_row;
                          move_list [* n + i] [D_COL] =   d_col;
                          break;
                case (2): move_list [* n + i] [D_ROW] = - d_row;
                          move_list [* n + i] [D_COL] = - d_col;
                          break;
                case (3): move_list [* n + i] [D_ROW] =   d_row;
                          move_list [* n + i] [D_COL] = - d_col;
                          break;
            }
        }
        if (m - * n == 8) {
            for (size_t i = 4; i < 8; i ++) {
                move_list [* n + i] = (int *) malloc (2 * sizeof (int));
                if (move_list [* n + i] == NULL) {
                    perror ("Malloc failed");
                    exit (1);
                }
                switch (i) {
                    case (4): move_list [* n + i] [D_ROW] =   d_col;
                              move_list [* n + i] [D_COL] =   d_row;
                              break;
                    case (5): move_list [* n + i] [D_ROW] = - d_col;
                              move_list [* n + i] [D_COL] =   d_row;
                              break;
                    case (6): move_list [* n + i] [D_ROW] = - d_col;
                              move_list [* n + i] [D_COL] = - d_row;
                              break;
                    case (7): move_list [* n + i] [D_ROW] =   d_col;
                              move_list [* n + i] [D_COL] = - d_row;
                              break;
                }
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
    int row            = 0;
    int col            = 0;
    size_t value       = to_value (row, col);
    bool out_of_bounds = false;
    int steps          = 0;

    int ** move_list   = (int **) NULL;
    size_t nr_of_moves = 0;

    for (int i = 1; i < argc; i ++) {
        if (strlen (argv [i]) == 1) {
            int dr = 0;
            int dc = 0;
            switch (argv [i] [0]) {
                case 'W': dr = 1; dc = 0; break;
                case 'F': dr = 1; dc = 1; break;
                case 'D': dr = 2; dc = 0; break;
                case 'K': dr = 2; dc = 1; break;
                case 'A': dr = 2; dc = 2; break;
                case 'H': dr = 3; dc = 0; break;
                case 'C': dr = 3; dc = 1; break;
                case 'Z': dr = 3; dc = 2; break;
                case 'T': dr = 3; dc = 3; break;
            }
            if (dr > 0 || dc > 0) {
                move_list = add_leaper_moves (move_list, &nr_of_moves, dr, dc);
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
            int try_row = row + move_list [i] [D_ROW];
            int try_col = col + move_list [i] [D_COL];
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

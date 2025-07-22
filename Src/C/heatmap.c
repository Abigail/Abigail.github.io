# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <math.h>

# include "heatmap.h"

/*
 * Functions dealing with the heat map
 */
heatmap_t heatmap                 = (heatmap_t) NULL;
short unsigned heatmap_rows       = 0;   /* Size of heatmap */
short unsigned heatmap_cols       = 0;
short          heatmap_row_offset = 0;   /* Offset to go from external     */
short          heatmap_col_offset = 0;   /* to internal coordinates        */
short          min_heatmap_row    = 0;   /* min/max values in the heat map */
short          max_heatmap_row    = 0;   /* In outside coordinates         */
short          min_heatmap_col    = 0;
short          max_heatmap_col    = 0;
short unsigned heatmap_max_rows   = 0;
short unsigned heatmap_max_cols   = 0;

distances_t distance_map;

void print_distances (distances_t, int);

/*
 * void init_heatmap (unsigned short max_rows, unsigned short max_cols) 
 *
 * Initilize the heatmap
 *
 * Input: short unsigned max_rows: maximum rows from center to top/bottom
 *        short unsigned max_cols: maximum cols from center to right/left
 *
 * Out
 *
 */

void init_heatmap (short unsigned max_rows, short unsigned max_cols) {
    heatmap_max_rows   = max_rows;
    heatmap_max_cols   = max_cols;
    heatmap_rows       = max_rows * 2 + 3;
    heatmap_cols       = max_cols * 2 + 3;
    heatmap_row_offset = max_rows     + 1;
    heatmap_col_offset = max_cols     + 1;

    if ((heatmap = (heatmap_t) malloc (heatmap_rows * sizeof (step_t *)))
                == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (short unsigned row = 0; row < heatmap_rows; row ++) {
        if ((heatmap [row] = (step_t *) malloc (heatmap_cols *
                      sizeof (step_t))) == NULL) {
            perror ("Malloc failed");
            exit (1);
        }
        for (short unsigned col = 0; col < heatmap_cols; col ++) {
            heatmap [row] [col] = 0;
        }
    }

    distance_map . n = 1;
    if ((distance_map . distances =
        (distance_t) malloc (distance_map . n * sizeof (step_t))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (size_t i = 0; i < distance_map . n; i ++) {
        distance_map . distances [i] = 0;
    }
}

/*
 * void print_heatmap (int unsigned show_heatmap)
 *
 * Show the heatmap, either in raw numbers, or percentages.
 *
 * Input: int show_heatmap: One of HEATMAP_NONE, HEATMAP_ABS, or HEATMAP_PERC
 *
 */
void print_heatmap (int unsigned show_heatmap,
                    int unsigned show_div,
                    bool         show_distances,
                    int argc, char ** argv) {
    printf ("\n");

    bool show_percentage =  show_heatmap & HEATMAP_PERC;
    bool show_absolute   = !show_percentage;
    bool show_compact    =  show_heatmap & HEATMAP_COMPACT;

    /*
     * Find the maximum value to be printed, and the total number
     * of steps.
     */
    step_t max_value    = 0;
    step_t total_steps  = 0;
    for (int row = min_heatmap_row; row <= max_heatmap_row; row ++) {
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
    int size = sprintf (temp, "%llu", show_percentage ? 100
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

    sprintf (i_format, show_compact ? "%%lu " : "| %%%dlu ", size);
    sprintf (s_format, show_compact ? "%%s "  : "| %%%ds ",  size);

    /*
     * Line out the center dot
     */
    char * center = (char *) NULL;
    if (show_compact) {
        center = "*";
    }
    else {
        if ((center = (char *) malloc ((size + 1) * sizeof (char))) == NULL) {
            perror ("Malloc");
            exit (1);
        }
        for (int i = 0; i < size; i ++) {
            center [i] = ' ';
        }
        center [size / 2] = '*';
    }

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

    /*
     * Print the heatmap
     */
    if (show_div) {
        printf ("<div class = 'heatmap %s'>\n",
                  show_div == HEATMAP_DIV_RIGHT ? "right" : "left");
        printf ("%% ");
        for (int i = 0; i < argc; i ++) {
            printf ("%s ", argv [i]);
        }
        printf ("\n");
        printf ("%% Box: [%d%s, %d%s] [%d%s, %d%s]\n",
                    min_heatmap_row,
                    min_heatmap_row == -heatmap_row_offset ? "*" : "",
                    max_heatmap_row,
                    max_heatmap_row ==  heatmap_row_offset ? "*" : "",
                    min_heatmap_col,
                    min_heatmap_col == -heatmap_col_offset ? "*" : "",
                    max_heatmap_col,
                    max_heatmap_col ==  heatmap_col_offset ? "*" : ""
        );
    }
    for (int row = min_heatmap_row; row <= max_heatmap_row; row ++) {
        if (!show_compact) {
            printf ("%s\n", line);
        }
        for (int col = min_heatmap_col; col <= max_heatmap_col; col ++) {
            if (row == 0 && col == 0) {
                printf (show_compact ? "%s " : "| %s ", center);
            }
            else {
                step_t value = heatmap [row + heatmap_row_offset]
                                       [col + heatmap_col_offset];
                if (value) {
                    printf (i_format,
                            show_percentage ? 100 * value / total_steps
                                            :       value);
                }
                else {
                    printf (s_format, show_compact || show_div ? "." : " ");
                }
            }
        }
        if (!show_compact) {
            printf ("|");
        }
        printf ("\n");
    }
    if (!show_compact) {
        printf ("%s\n", line);
    }
    if (show_div) {
        printf ("</div>\n");
    }

    /*
     * Print the distances
     */
    if (show_distances) {
        print_distances (distance_map, show_div);
    }

    free (line);
    free (temp);
    free (s_format);
    free (i_format);
    free (center);
}


/*
 * void print_distances (distances_t distance_map)
 *
 * Print the distances
 *
 */
void print_distances (distances_t distance_map, int show_div) {
    printf ("\n");
    if (show_div) {
        printf ("<div class = 'distances'>\n");
    }

    /*
     * Calculate the size strings
     */
    int length = 2;   /* Leading '|' and trailing NUL */
    for (int i = 0; i < distance_map . n; i ++) {
        step_t steps = distance_map . distances [i];
        if (steps) {
            step_t max   = (step_t) i > steps ? (step_t) i : steps;
            length      += 4 + (max ? (int) log10 (max) : 0);
        }
    }

    char ** table = (char **) NULL;
    if ((table = malloc (3 * sizeof (char *))) == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    for (int i = 0; i < 3; i ++) {
        if ((table [i] = malloc (length * sizeof (char))) == NULL) {
            perror ("Malloc failed");
            exit (1);
        }
    }

    /*
     * Initial character of each string
     */
    table [0] [0]                                 = '+';
    table [1] [0] = table [2] [0]                 = '|';
    table [0] [1] = table [1] [1] = table [2] [1] =  0;

    int pointer = 1;

    for (int i = 0; i <  distance_map . n; i ++) {
        step_t steps = distance_map . distances [i];
        if (!steps) {
            continue;
        }
        step_t max   = (step_t) i > steps ? (step_t) i : steps;
        int width    = 1 + (max ? (int) log10 (max) : 0);
        for (int j = 0; j < width + 2; j ++) {
            table [0] [pointer ++] = '-';
        }
        table [0] [pointer ++] = '+';
        table [0] [pointer]    = 0;
        sprintf (table [1], "%s %*d |",   table [1], width, i);
        sprintf (table [2], "%s %*llu |", table [2], width, steps);
    }
    printf ("%s\n", table [0]);
    printf ("%s\n", table [1]);
    printf ("%s\n", table [0]);
    printf ("%s\n", table [2]);
    printf ("%s\n", table [0]);

    if (show_div) {
        printf ("</div>\n");
    }

    for (int j = 0; j < 3; j ++) {
        free (table [j]);
    }
    free (table);
}

/*
 * void record_move (int dr, int dc)
 *
 * Record the "current" jump in the heatmap.
 *
 * Input: int dr:  Number of rows jumped
 *        int dc:  Number of cols jumped
 * 
 */
void record_move (int dr, int dc) {
    int dist = dr * dr + dc * dc;
    /*
     * Make sure the move is inside
     */
    if (dr < -heatmap_max_rows) {dr = -heatmap_max_rows - 1;}
    if (dr >  heatmap_max_rows) {dr =  heatmap_max_rows + 1;}
    if (dc < -heatmap_max_cols) {dc = -heatmap_max_cols - 1;}
    if (dc >  heatmap_max_cols) {dc =  heatmap_max_cols + 1;}

    /*
     * Adjust min/max values
     */
    if (dr < min_heatmap_row) {min_heatmap_row = dr;}
    if (dr > max_heatmap_row) {max_heatmap_row = dr;}
    if (dc < min_heatmap_col) {min_heatmap_col = dc;}
    if (dc > max_heatmap_col) {max_heatmap_col = dc;}

    int row = dr + heatmap_row_offset;
    int col = dc + heatmap_col_offset;

    heatmap [row] [col] ++;

    if (dist >= distance_map . n) {
        int old = distance_map . n;
        distance_map . n = dist + 1;
        if ((distance_map . distances = 
             realloc (distance_map . distances,
                      distance_map . n * sizeof (step_t))) == NULL) {
            perror ("Realloc failed");
            exit (1);
        }
        for (int i = old; i <= dist; i ++) {
            distance_map . distances [i] = 0;
        }
    }
    distance_map . distances [dist] ++;
}

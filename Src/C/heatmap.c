# include <stdlib.h>
# include <stdio.h>

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
}

/*
 * void print_heatmap (int show_heatmap)
 *
 * Show the heatmap, either in raw numbers, or percentages.
 *
 * Input: int show_heatmap: One of HEATMAP_NONE, HEATMAP_ABS, or HEATMAP_PERC
 *
 */
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

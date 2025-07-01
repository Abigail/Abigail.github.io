# include <stdlib.h>
# include <stdio.h>

# include "trapped.h"
# include "layout.h"


/*
 * value_t spiral_square (rowcol_t row, rowcol_t col)
 *
 * Given a row and a column, return the value. This is for the
 * following layout:
 *
 *         c  -2  -1   0   1   2
 *       r
 *      -2    17  16  15  14  13
 *      -1    18   5   4   3  12
 *       0    19   6   1   2  11
 *       1    20   7   8   9  10
 *       2    21  22  23  24  25
 *
 * Input: rowcol_r row, rowcol_t col: row/col of point we need the value of
 *
 * Out:   Value belonging to the point
 *
 */
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



/*
 * value_t spiral_diamond (rowcol_t row, rowcol_t col)
 *
 * Given a row and a column, return the value. This is for the
 * following layout:
 *
 *         c  -2  -1   0   1   2
 *       r
 *      -2    35  20   9  18  31
 *      -1    21  10   3   8  17
 *       0    11   4   1   2   7
 *       1    23  12   5   6  15
 *       2    39  24  13  14  27
 *
 * Input: rowcol_r row, rowcol_t col: row/col of point we need the value of
 *
 * Out:   Value belonging to the point
 *
 */

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

/*
 * value_t wedge_folded (rowcol_t row, rowcol_t col)
 *
 * Given a row and a column, return the value. This is for the
 * following layout:
 *
 *         c  -4  -3  -2  -1   0   1   2   3   4
 *       r
 *      -4    25  24  23  22  21  20  19  18  17
 *      -3        10  11  12  13  14  15  16
 *      -2             9   8   7   6   5
 *      -1                 2   3   4
 *       0                     1
 *
 * Input: rowcol_r row, rowcol_t col: row/col of point we need the value of
 *
 * Out:   Value belonging to the point
 *
 */
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

/*
 * value_t wedge_flat   (rowcol_t row, rowcol_t col)
 *
 * Given a row and a column, return the value. This is for the
 * following layout:
 *
 *         c  -4  -3  -2  -1   0   1   2   3   4
 *       r
 *      -4    17  18  19  20  21  22  23  24  25
 *      -3        10  11  12  13  14  15  16
 *      -2             5   6   7   8   9
 *      -1                 2   3   4
 *       0                     1
 *
 * Input: rowcol_r row, rowcol_t col: row/col of point we need the value of
 *
 * Out:   Value belonging to the point
 *
 */
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

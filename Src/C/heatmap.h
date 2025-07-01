# ifndef __HEATMAP_H__

# define __HEATMAP_H__ 1

# include "trapped.h"

# define HEATMAP_ROW_SIZE 10
# define HEATMAP_COL_SIZE 10
# define HEATMAP_NONE      0
# define HEATMAP_ABS       1
# define HEATMAP_PERC      2

typedef step_t ** heatmap_t;

extern void init_heatmap (short unsigned, short unsigned);
extern void print_heatmap (int);
extern void record_move (int, int);


# endif

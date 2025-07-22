# ifndef __HEATMAP_H__

# define __HEATMAP_H__ 1

# include "trapped.h"

# define HEATMAP_ROW_SIZE ((short unsigned) 10)
# define HEATMAP_COL_SIZE ((short unsigned) 10)
# define HEATMAP_NONE      0
# define HEATMAP_ABS      (1 << 0)
# define HEATMAP_PERC     (1 << 1)
# define HEATMAP_COMPACT  (1 << 2)
# define HEATMAP_TYPE     (HEATMAP_ABS | HEATMAP_PERC)

# define HEATMAP_DIV_NONE  0
# define HEATMAP_DIV_RIGHT 1
# define HEATMAP_DIV_LEFT  2

typedef step_t ** heatmap_t;
typedef step_t *  distance_t;

typedef struct distances_t {
    step_t * distances;
    size_t   n;
} distances_t;

extern void init_heatmap  (short unsigned, short unsigned);
extern void print_heatmap (int   unsigned,   int unsigned, bool, int, char **);
extern void record_move   (int,  int);


# endif

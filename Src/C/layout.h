# ifndef __LAYOUT_H__

# define __LAYOUT_H__ 1

extern value_t (* layout (char *)) (rowcol_t, rowcol_t);
extern value_t spiral_square       (rowcol_t, rowcol_t);
extern value_t spiral_diamond      (rowcol_t, rowcol_t);
extern value_t wedge_folded        (rowcol_t, rowcol_t);
extern value_t wedge_flat          (rowcol_t, rowcol_t);

# endif

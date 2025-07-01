# ifndef __MOVES_H__

# define __MOVES_H__ 1

typedef long long unsigned step_t;

typedef struct move_part_t {
    int dr;      /* Delta-rows                */
    int dc;      /* Delta-columns             */
    step_t min;  /* Minimum steps to be taken */
    step_t max;  /* Maximum steps allowed     */
} move_part_t;

typedef struct move_t {
    move_part_t * list;   /* List of move parts   */
    size_t size;          /* Number of move parts */
} move_t;


extern move_part_t   new_move_part (int, int, step_t, step_t);
extern move_t        new_move ();
extern move_t        inc_move (move_t, move_part_t);
extern move_part_t * mirror_move_parts (move_part_t);
extern void          dump_move (move_t);

# endif

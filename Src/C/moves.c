# include <stdlib.h>
# include <stdio.h>
# include "moves.h"

/*
 * Functions related to moves. 
 * Moves are stored as lists of move parts, where a move
 * part is a step of slide in a single direction.
 */

/*
 * move_part_t (int dr, int dc, step_t max, step_t min)
 *
 * Create a new move part given the parameters.
 *
 * Input: int dr:     number of rows moved
 *        int dc:     number of cols moved
 *        step_t max: maximum number of squares moved
 *        step_t min: minimum number of squares moved
 *
 */
move_part_t new_move_part (int dr, int dc, step_t max,
                                           step_t min) {
    move_part_t new_move_part;
    new_move_part . dr  = dr;
    new_move_part . dc  = dc;
    new_move_part . max = max;
    new_move_part . min = min || 1;

    return (new_move_part);
}


move_t new_move () {
    move_t new;
    new . list = (move_part_t *) NULL;
    new . size = 0;
    return (new);
}

/*
 * move_t inc_move (move_t move, move_part new)
 *
 * Given a move struct, and a new move part, add the move part
 * to the move struct
 *
 * Input: move_t move:   Existing move struct
 *        move_part new: New move part to add
 *
 * Out:   Modified struct
 *
 */
move_t inc_move (move_t move, move_part_t new) {
    if ((move . list = realloc (move . list,
                               (move . size + 1) * sizeof (move_part_t)))
                                    == NULL) {
        perror ("Realloc failed");
        exit (1);
    }
    move . list [move . size ++] = new;
    return (move);
}


/*
 * move_part_t new_move_part_from (move_part_t part, int dr, int dc)
 *
 * Create a copy of a move part, with new dr/dc filled in.
 *
 * Input: move_part_t part: Move part to be copied
 *        int dr:           dr to substitute
 *        int dc:           dc to substitute
 *
 * Out: New move part
 *
 */
 
move_part_t new_move_part_from (move_part_t part, int dr, int dc) {
    move_part_t new_part;
    new_part . dr  = dr;
    new_part . dc  = dc;
    new_part . min = part . min;
    new_part . max = part . max;
    return (new_part);
}

/*
 * move_part_t * mirror_moves (move_part_t part)
 *
 * Given a move_part, return a list of move parts which are mirror
 * images of the original. Orthogonal and diagonal moves lead to
 * four mirror images. Oblique movers have eight mirrors.
 *
 * Input: move_part_t part: Starting move part.
 *
 * Out:   List with all mirrorred moves; list is terminated
 *        with a move where dr == dc == 0.
 */
move_part_t * mirror_move_parts (move_part_t part) {
    move_part_t * move_parts = (move_part_t *) NULL;

    int dr   = abs (part . dr);
    int dc   = abs (part . dc);

    short unsigned i = (dr == 0) || (dc == 0) || (dr == dc) ? 4 : 8;

    if ((move_parts = (move_part_t *) malloc ((i + 1) * sizeof (move_part_t)))
                   == NULL) {
        perror ("Malloc failed");
        exit (1);
    }
    i = 0;
    if ((dr == 0) || (dc == 0)     /* Orthogonal mover */
                  || (dr == dc)) { /* Diagonal   mover */
        move_parts [i ++] = new_move_part_from (part,   dr,   dc);
        move_parts [i ++] = new_move_part_from (part, - dr, - dc);
        move_parts [i ++] = new_move_part_from (part, - dc,   dr);
        move_parts [i ++] = new_move_part_from (part,   dc, - dr);
    }
    else {  /* Oblique mover */
        move_parts [i ++] = new_move_part_from (part,   dr,   dc);
        move_parts [i ++] = new_move_part_from (part,   dr, - dc);
        move_parts [i ++] = new_move_part_from (part, - dr,   dc);
        move_parts [i ++] = new_move_part_from (part, - dr, - dc);
        move_parts [i ++] = new_move_part_from (part, - dc, - dr);
        move_parts [i ++] = new_move_part_from (part, - dc,   dr);
        move_parts [i ++] = new_move_part_from (part,   dc, - dr);
        move_parts [i ++] = new_move_part_from (part,   dc,   dr);
    }
    /* Add a sentinel */
    move_parts [i] = new_move_part_from (part, 0, 0);

    return (move_parts);
}


/*
 * void dump_move (move_t move);
 *
 * Prints out the move part of a move
 *
 * Input: move_t move: The move struct
 *
 */
void dump_move (move_t move) {
    for (size_t i = 0; i < move . size; i ++) {
        move_part_t part = move . list [i];
        printf ("dr = %d; dc = %d; max = %llu; min = %llu\n",
                 part . dr, part . dc, part . max, part . min);
    }
}
                 

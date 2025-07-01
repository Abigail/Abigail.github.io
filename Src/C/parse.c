# include <stdlib.h>
# include <stdio.h>
# include <stdbool.h>
# include <unistd.h>
# include <string.h>
# include <ctype.h>

# include "moves.h"
# include "parse.h"

# define ORTHOGONAL 1
# define DIAGONAL   2
# define OBLIQUE    3

/* Wazir */
# define NORTH               (1 <<  0)
# define WEST                (1 <<  1)
# define SOUTH               (1 <<  2)
# define EAST                (1 <<  3)

/* Ferz */
# define NORTH_WEST          (1 <<  4)
# define SOUTH_WEST          (1 <<  5)
# define SOUTH_EAST          (1 <<  6)
# define NORTH_EAST          (1 <<  7)

/* Knight, and other leapers */
# define NORTH_NORTH_WEST    (1 <<  8)
# define WEST_NORTH_WEST     (1 <<  9)
# define WEST_SOUTH_WEST     (1 << 10)
# define SOUTH_SOUTH_WEST    (1 << 11)
# define SOUTH_SOUTH_EAST    (1 << 12)
# define EAST_SOUTH_EAST     (1 << 13)
# define EAST_NORTH_EAST     (1 << 14)
# define NORTH_NORTH_EAST    (1 << 15)

# define NO_FILTER           ((int) ~0)

/*
 * void parse_piece ()
 *
 * Parse a single, capital, letter as a piece, and set
 * its corresponding dr, dc, and steps values
 *
 * Input:
 *   char piece:  The piece examined. Can be any of the basic
 *                leapers, or the Rook or Bishop.
 *   int * dr:    The rows travelled by the piece's move
 *   int * dc:    The columns travelled by the piece's move
 *   int * steps: The maximum number of steps the piece may take;
 *                '0' signals an unlimited number of steps.
 */
void parse_piece (char piece, int * dr, int * dc, step_t * steps) {
    * steps = 1;
    switch (piece) {
        case 'W': * dr = 1; * dc = 0;  break;  /* Wazir       */
        case 'F': * dr = 1; * dc = 1;  break;  /* Ferz        */
        case 'D': * dr = 2; * dc = 0;  break;  /* Dabbaba     */
        case 'N': * dr = 2; * dc = 1;  break;  /* Knight      */
        case 'A': * dr = 2; * dc = 2;  break;  /* Alfil       */
        case 'H': * dr = 3; * dc = 0;  break;  /* Threeleaper */
        case 'C': * dr = 3; * dc = 1;  break;  /* Camel       */
        case 'Z': * dr = 3; * dc = 2;  break;  /* Zebra       */
        case 'G': * dr = 3; * dc = 3;  break;  /* Tripper     */

        case 'B': * dr = 1; * dc = 1; * steps = 0; break;  /* Bishop      */
        case 'R': * dr = 1; * dc = 0; * steps = 0; break;  /* Rook        */

        default:
            fprintf (stderr, "Failed to parse piece '%c'", piece);
            exit (1);
    }
}

/*
 * parse_modifiers_orthogonal ()
 *
 * Parse the modifiers for when we have a pieces which moves
 * orthogonally (like a Wazir).
 *
 * Modiers for a diagonal leaper:
 *
 *                         f, v
 *    
 *                  l, s    *    r, s
 *    
 *                         b, v
 *
 * Input: char * modifiers: The set of modifiers
 *
 * Out:   Allowed movement mask
 *
 */


int parse_modifiers_orthogonal (char * modifiers) {
    int mask = 0;
    char * scan = modifiers;
    while (* scan) {
        switch (* scan ++) {
            case 'f': mask |= NORTH;         break;
            case 'l': mask |= WEST;          break;
            case 'b': mask |= SOUTH;         break;
            case 'r': mask |= EAST;          break;
            case 'v': mask |= NORTH | SOUTH; break;
            case 's': mask |= WEST  | EAST;  break;
            default:
                fprintf (stderr, "Failed to process modifier '%s'", modifiers);
                exit (1);
        }
    }
    return (mask);
}


/*
 * Parse the modifier string for a diagonal leaper, and return a mask
 * 
 * Modiers for a diagonal leaper:
 *
 *                 f, fl,       f, fr,
 *                 l, lf        r, rf
 *                          *
 *                 b, bl,       b, br,
 *                 l, lb        r, rb
 *
 * Input: char * modifiers: string with modifiers
 *
 * Out:   Allowed movement mask
 */

int parse_modifiers_diagonal (char * modifiers) {
    int mask = 0;
    char * scan = modifiers;
    while (* scan) {
        char first  = *  scan;
        char second = * (scan + 1);  /* May be NUL */
        int skip = 2;
        switch (first) {
            case 'f':
                switch (second) {
                    case 'l':   /* fl == lf */
                        mask |= NORTH_WEST;
                        break;
                    case 'r':   /* fr == rf */
                        mask |= NORTH_EAST;
                        break;
                    default:    /* f  */
                        mask |= NORTH_WEST | NORTH_EAST;
                        skip  = 1;
                        break;
                };
                break;
            case 'l':
                switch (second) {
                    case 'f':   /* lf == fl */
                        mask |= NORTH_WEST;
                        break;
                    case 'b':   /* lb == bl */
                        mask |= SOUTH_WEST;
                        break;
                    default:    /* l  */
                        mask |= NORTH_WEST | SOUTH_WEST;
                        skip  = 1;
                        break;
                };
                break;
            case 'b':
                switch (second) {
                    case 'r':   /* br == rb */
                        mask |= SOUTH_EAST;
                        break;
                    case 'l':   /* bl == lb */
                        mask |= SOUTH_WEST;
                        break;
                    default:    /* b  */
                        mask |= SOUTH_WEST | SOUTH_EAST;
                        skip  = 1;
                        break;
                };
                break;
            case 'r':
                switch (second) {
                    case 'b':   /* rb == br */
                        mask |= SOUTH_EAST;
                        break;
                    case 'f':   /* rf == fr */
                        mask |= NORTH_EAST;
                        break;
                    default:    /* r  */
                        mask |=  SOUTH_EAST | NORTH_EAST;
                        skip  = 1;
                        break;
                };
                break;

            default:
                fprintf (stderr, "Failed to process modifier '%s'", modifiers);
                exit (1);
        }
        scan += skip;
    }
    return (mask);
}



/*
 * Parse the modifier string for an oblique leaper, and return a mask
 * 
 * Modiers for a oblique leaper:
 *
 *                 f, fh,      f, fh,
 *             lv, lh, lf      rv, rh, rf
 *
 *      fs, fh, fl,                   fs, fh, fr
 *           l, lh,                    r, rh
 *                          *
 *      bs, bh, bl,                   bs, bh, br
 *           l, lh,                    r, rh
 * 
 *                  b, bh,      b, bh,
 *             lv, lh, lb      rv, rh, rb
 *
 * See also: https://www.gnu.org/software/xboard/whats_new/rules/Betza.html
 *
 * Input: char * modifiers: string with modifiers
 *
 * Out:   Allowed movement mask
 */

int parse_modifiers_oblique (char * modifiers) {
    int mask = 0;
    char * scan = modifiers;
    while (* scan) {
        char first  = *  scan;
        char second = * (scan + 1);  /* May be NUL */
        int skip = 2;
        switch (first) {
            case 'f':
                switch (second) {
                    case 'h':  /* fh */
                        mask |= NORTH_NORTH_WEST
                             |  WEST_NORTH_WEST
                             |  EAST_NORTH_EAST
                             |  NORTH_NORTH_EAST;
                        break;
                    case 's':  /* fs */
                        mask |= WEST_NORTH_WEST
                             |  EAST_NORTH_EAST;
                        break;
                     case 'l': /* fl */
                        mask |= WEST_NORTH_WEST;
                        break;
                     case 'r': /* fr */
                        mask |= EAST_NORTH_EAST;
                        break;
                     default:  /* f  */
                        mask |= NORTH_NORTH_WEST
                             |  NORTH_NORTH_EAST;
                        skip = 1;
                        break;
                };
                break;
            case 'b':
                switch (second) {
                    case 'h':  /* bh */
                        mask |= SOUTH_SOUTH_WEST
                             |  WEST_SOUTH_WEST
                             |  EAST_SOUTH_EAST
                             |  SOUTH_SOUTH_EAST;
                        break;
                    case 's':  /* bs */
                        mask |= WEST_SOUTH_WEST
                             |  EAST_SOUTH_EAST;
                        break;
                     case 'l': /* bl */
                        mask |= WEST_SOUTH_WEST;
                        break;
                     case 'r': /* br */
                        mask |= EAST_SOUTH_EAST;
                        break;
                     default:  /* b  */
                        mask |= SOUTH_SOUTH_WEST
                             |  SOUTH_SOUTH_EAST;
                        skip = 1;
                        break;
                };
                break;
            case 'l':
                switch (second) {
                    case 'h':  /* lh */
                        mask |= NORTH_NORTH_WEST
                             |  WEST_NORTH_WEST
                             |  WEST_SOUTH_WEST
                             |  SOUTH_SOUTH_WEST;
                        break;
                    case 'v':  /* lv */
                        mask |= NORTH_NORTH_WEST
                             |  SOUTH_SOUTH_WEST;
                        break;
                     case 'f': /* lf */
                        mask |= NORTH_NORTH_WEST;
                        break;
                     case 'b': /* lb */
                        mask |= WEST_SOUTH_WEST;
                        break;
                     default:  /* l  */
                        mask |= WEST_NORTH_WEST 
                             |  WEST_SOUTH_WEST;
                        skip = 1;
                        break;
                };
                break;
            case 'r':
                switch (second) {
                    case 'h':  /* rh */
                        mask |= NORTH_NORTH_EAST
                             |  EAST_NORTH_EAST
                             |  EAST_SOUTH_EAST
                             |  SOUTH_SOUTH_EAST;
                        break;
                    case 'v':  /* rv */
                        mask |= NORTH_NORTH_EAST
                             |  SOUTH_SOUTH_EAST;
                        break;
                     case 'f': /* rf */
                        mask |= NORTH_NORTH_EAST;
                        break;
                     case 'b': /* rb */
                        mask |= EAST_SOUTH_EAST;
                        break;
                     default:  /* r  */
                        mask |= EAST_NORTH_EAST 
                             |  EAST_SOUTH_EAST;
                        skip = 1;
                        break;
                };
                break;
            default:
                fprintf (stderr, "Failed to parse '%s'\n", modifiers);
        }
        scan += skip;
    }
    return (mask);
}


/*
 * Process a parsed move, and add it to the move list.
 *
 * Input: move_t  move:      move struct to add to
 *        int dr, int dc:    number of rows/columns the piece moves
 *        step_t steps:      maximum number of steps to take
 *        step_t min_steps:  the minimum number of steps to take;
 *                           this is currently unused
 *        char * modifiers:  betza modifier string
 */
move_t process_move (move_t move,
                     int dr, int dc, step_t steps, step_t min_steps,
                     char * modifiers) {
    /*
     * Determine what kind of move this is
     */
    char unsigned move_type = 0 == dc ||  0 == dr  ? ORTHOGONAL
                            : abs (dc) == abs (dr) ? DIAGONAL
                            :                        OBLIQUE;

    int (* parse_modifiers) (char *) = 
           move_type == ORTHOGONAL ? &parse_modifiers_orthogonal
         : move_type == DIAGONAL   ? &parse_modifiers_diagonal
         : move_type == OBLIQUE    ? &parse_modifiers_oblique
         :                           &parse_modifiers_oblique;

    int filter_mask = parse_modifiers (modifiers);
    if (!filter_mask) {
        filter_mask = NO_FILTER;
    }

    move_part_t move_part = new_move_part (dr, dc, steps, min_steps);
    move_part_t * list = mirror_move_parts (move_part);
    for (int i = 0; i < 9; i ++) {
        move_part_t part = list [i];
        int dr = part . dr;
        int dc = part . dc;
        if (dr == 0 && dc == 0) {
            break;
        }

        bool pass = false;
         
        if (move_type == ORTHOGONAL) {
            pass = (dr < 0 && (filter_mask & NORTH)) ||
                   (dr > 0 && (filter_mask & SOUTH)) ||
                   (dc < 0 && (filter_mask & WEST))  ||
                   (dc > 0 && (filter_mask & EAST));
        }
        if (move_type == DIAGONAL) {
            pass = (dr < 0 && dc < 0 && (filter_mask & NORTH_WEST)) ||
                   (dr < 0 && dc > 0 && (filter_mask & NORTH_EAST)) ||
                   (dr > 0 && dc < 0 && (filter_mask & SOUTH_WEST)) ||
                   (dr > 0 && dc > 0 && (filter_mask & SOUTH_EAST));
        }
        if (move_type == OBLIQUE) {
            pass = (dr < 0 && dc < 0 && dr <   dc
                           && (filter_mask & NORTH_NORTH_WEST)) ||
                   (dr < 0 && dc < 0 && dr >   dc
                           && (filter_mask & WEST_NORTH_WEST))  ||
                   (dr > 0 && dc < 0 && dr < - dc
                           && (filter_mask & WEST_SOUTH_WEST))  ||
                   (dr > 0 && dc < 0 && dr > - dc
                           && (filter_mask & SOUTH_SOUTH_WEST)) ||
                   (dr > 0 && dc > 0 && dr >   dc
                           && (filter_mask & SOUTH_SOUTH_EAST)) ||
                   (dr > 0 && dc > 0 && dr <   dc
                           && (filter_mask & EAST_SOUTH_EAST))  ||
                   (dr < 0 && dc > 0 && dr > - dc
                           && (filter_mask & EAST_NORTH_EAST))  ||
                   (dr < 0 && dc > 0 && dr < - dc
                           && (filter_mask & NORTH_NORTH_EAST));
        }

        if (pass) {
            move = inc_move (move, part);
        }
    }

    free (list);

    return (move);
}
            

/*
 * move_t parse_betza (char * betza)
 *
 * Given a string in betza format, return the move that belongs
 * to it. A "move" is a struct which consists of list of move parts
 * and a counter.
 *
 * Input: char * betza: String to parse
 *
 * Out: move
 *
 */

move_t parse_betza (char * betza) {
    char * start = betza;  /* Start of a sub move */
    move_t move = new_move ();
    while (* start) {
        int unsigned i =  0;
        int dc         =  0;
        int dr         =  0;
        step_t steps   =  1;
        char * prefix  = (char *) NULL;
        char piece     =  0;
        while (* start && islower (* start)) {i ++; start ++;}
        if ((prefix = (char *) malloc ((i + 1) * sizeof (char))) == NULL) {
            perror ("Malloc failed");
            exit (1);
        }
        strncpy (prefix, start - i, i);
        prefix [i] = '\0';
        /* Next character must be an upper case character, or (dd,dd) */
        if (isupper (* start)) {
            piece = * start ++;
            parse_piece (piece, &dr, &dc, &steps);
            if (* start && * start == piece) {
                start ++;
                steps = 0;
            }
        }
        else {
            if (* start == '(') {
                char * end = (char *) NULL;
                dr = (int) strtol (++ start, &end, 10);
                start = end;
                while (* start && (* start == ',' || isspace (* start))) {
                    start ++;
                }
                dc = (int) strtol (start, &end, 10);
                start = end;
                if (* start && * start == ')') {
                    start ++;
                }
                else {
                    fprintf (stderr, "Failed to parse %s\n", betza);
                    exit (1);
                }
            }
            else {
                fprintf (stderr, "Failed to parse %s\n", betza);
                exit (1);
            }
        }
        char * end = (char *) NULL;
        int repeat = (int) strtol (start, &end, 10);
        if (start != end) {
            steps = repeat;
        }
        start = end;

        move = process_move (move, dc, dr, steps, 1, prefix);
        free (prefix);

    }
    return (move);
}


/*

int main (int argc, char ** argv) {
    if (argc < 2) {
        exit (0);
    }
    dump_move (parse_betza (argv [1]));
}

*/

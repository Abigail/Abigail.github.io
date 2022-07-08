//
// Chess pieces go here
//

//
// Return a move representing a step
//
function step (dr, dc, args = {}) {
    return {dr: dr, dc: dc, max: 1}
}

//
// Return a move representing a slide
//
function slide (dr, dc, args = {}) {
    return {dr: dr, dc: dc, max: 0}
}

////////////////////////////////////////////////////////////////////////////////
//
// Take a string in Betza notation, return a move list
//
////////////////////////////////////////////////////////////////////////////////

//
// Some subpatterns
//
let leaper_class   = "[ACDFGHNWZ]"
let leaper_desc    = "[(][0-9]+,[0-9]+[)]"
let leaper_pat     = `(?:(${leaper_class})|${leaper_desc})`
let modifier_class = "[fbrlvshcmnjpgqzo]"

//
// Helper function
//
function abs (x) {return Math . abs (x)}

//
// Take the action of a single leaper, and turn this into a move list
//
// We will make use of the fact that set of letters used for the modifiers
// and the set of letters used for the leapers are disjoint.
//

//
// filter_movement
//
//    For a leaper moving orthogonally, we allow the following modifiers:
//
//                         f, v
//
//                  l, s    *    r, s
//
//                         b, v
//
//
//    For a leaper moving diagonally, we allow the following modifiers:
//
//                 f, fl,       f, fr,
//                 l, lf        r, rf
//                          *
//                 b, bl,       b, br,
//                 l, lb        r, rb
//
//
//
//    For a leaper moving in 8 directions, we allow the following modifiers:
//   (https://www.gnu.org/software/xboard/whats_new/rules/Betza.html)
//
//                  f, fh,      f, fh,
//             lv, lh, lf      rv, rh, rf
//
//      fs, fh, fl,                   fs, fh, fr
//           l, lh,                    r, rh
//                          *
//      bs, bh, bl,                   bs, bh, br
//           l, lh,                    r, rh
//
//                  b, bh,      b, bh,
//             lv, lh, lb      rv, rh, rb
//
//
//  This translate to:
//
//    - fh:     dr <  0
//    - fs:     dr <  0            && abs (dr) <= abs (dc)
//    - fl:     dr <  0 && dc <  0 && abs (dr) <= abs (dc)
//    - fr:     dr <  0 && dc >  0 && abs (dr) <= abs (dc)
//    - f:      dr <  0            && abs (dr) >= abs (dc)
//
//    - bh:     dr >  0
//    - bs:     dr >  0            && abs (dr) <= abs (dc)
//    - bl:     dr >  0 && dc <  0 && abs (dr) <= abs (dc)
//    - br:     dr >  0 && dc >  0 && abs (dr) <= abs (dc)
//    - b:      dr >  0            && abs (dr) >= abs (dc)
//
//    - lh:                dc <  0
//    - lv:                dc <  0 && abs (dr) >= abs (dc)
//    - lf:     dr <  0 && dc <  0 && abs (dr) >= abs (dc)
//    - lb:     dr >  0 && dc <  0 && abs (dr) >= abs (dc)
//    - l:                 dc <  0 && abs (dr) <= abs (dc)
//
//    - rh:                dc >  0
//    - rv:                dc >  0 && abs (dr) >= abs (dc)
//    - rf:     dr <  0 && dc >  0 && abs (dr) >= abs (dc)
//    - rb:     dr >  0 && dc >  0 && abs (dr) >= abs (dc)
//    - r:                 dc >  0 && abs (dr) <= abs (dc)
//
//    - v:                 dc == 0
//    - s:      dr == 0
//
function move_modifiers (moves, modifiers, ortho = false) {
    let out = []
    let mod_in = modifiers
    while (modifiers . length > 0) {
        let forward   = modifiers . match (/^f/)
        let backward  = modifiers . match (/^b/)
        let left      = modifiers . match (/^l/)
        let right     = modifiers . match (/^r/)
        let drs       = forward ? 1 : backward ? -1 : 0
        let dcs       = left    ? 1 : right    ? -1 : 0

        //
        // Diagonal and 8-directional leapers
        //
        if (!ortho) {
            //
            // f* and b* movements
            //
            if (modifiers . match (/^[fb]h/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr <  0
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]s/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr <  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]l/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 && move . dc  <  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]r/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 && move . dc  >  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^([fb])(?:\1)?/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 &&
                          abs (move . dr) >= abs (move . dc)
                ))
                if (modifiers . match (/^(?:ff|bb)/)) {
                    modifiers = modifiers . substring (2)
                }
                else {
                    modifiers = modifiers . substring (1)
                }
                continue
            }

            //
            // l* and r* movements
            //
            if (modifiers . match (/^[lr]h/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc <  0
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]v/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc <  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]f/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 && move . dr  <  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]b/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 && move . dr  >  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^([lr])(?:\1)?/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 &&
                          abs (move . dc) >= abs (move . dr)
                ))
                if (modifiers . match (/^(?:ll|rr)/)) {
                    modifiers = modifiers . substring (2)
                }
                else {
                    modifiers = modifiers . substring (1)
                }
                continue
            }
        }
        else {
            if (modifiers . match (/^f/)) {
                out = out . concat (moves . filter (move => move . dr <  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^b/)) {
                out = out . concat (moves . filter (move => move . dr >  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^s/)) {
                out = out . concat (moves . filter (move => move . dr == 0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^l/)) {
                out = out . concat (moves . filter (move => move . dc <  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^r/)) {
                out = out . concat (moves . filter (move => move . dc >  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^v/)) {
                out = out . concat (moves . filter (move => move . dc == 0))
                modifiers = modifiers . substring (1)
                continue
            }
        }
        break
    }

    if (out . length) {
        return out
    }
    return moves
}

function betza_leaper (betza) {
    let out = [];

    //
    // We cannot deal with:
    //    - capture moves   ("c" modifier)
    //    - jump            ("j"/"jj" modifiers)
    //    - grasshoppers    ("g" modifier)
    //    - wrapping around ("o" modifier)
    // So we return an empty set of moves.
    //
    if (betza . match (/[cjgo]/)) {return out}

    if (betza . match (/A/)) {out . push (... fold ({move: step (2, 2)}))} else
    if (betza . match (/C/)) {out . push (... fold ({move: step (3, 1)}))} else
    if (betza . match (/D/)) {out . push (... fold ({move: step (2, 0)}))} else
    if (betza . match (/F/)) {out . push (... fold ({move: step (1, 1)}))} else
    if (betza . match (/G/)) {out . push (... fold ({move: step (3, 3)}))} else
    if (betza . match (/H/)) {out . push (... fold ({move: step (3, 0)}))} else
    if (betza . match (/N/)) {out . push (... fold ({move: step (2, 1)}))} else
    if (betza . match (/W/)) {out . push (... fold ({move: step (1, 0)}))} else
    if (betza . match (/Z/)) {out . push (... fold ({move: step (3, 2)}))} else
    if (match = betza . match (/[(]([0-9]+),([0-9]+)[)]/)) {
        out . push (... fold ({move: step (+match [1], +match [2])}))
    }

    //
    // If the letter is doubled, turn the step into a slide
    //
    if (betza . match (new RegExp (`(${leaper_class})\\1`))) {
        out . forEach ((move) => {move . max = 0})
    }

    //
    // If we have a trailing number, repeat the step up to that often
    //
    if (amount = betza . match (/([0-9]+)$/)) {
        out . forEach ((move) => {move . max = + amount [1]})
    }

    let result = betza . match (new RegExp (`(?<modifier>${modifier_class}+)`))
    let ortho  = !!betza . match (/[WDH]|[(]0,[0-9]+[)]|[(][0-9]+,0[)]/)
    if (result) {
        return move_modifiers (out, result . groups . modifier, ortho)
    }

    return out
}


function betza (betza) {
    let moves = []

    betza . replaceAll ('B', 'FF')   // Bishop = Sliding Ferz
          . replaceAll ('J', 'Z')    // Old symbol for Zebra
          . replaceAll ('K', 'FW')   // King   = Ferz + Wazir
          . replaceAll ('L', 'C')    // Old symbol for Camel
          . replaceAll ('Q', 'FFWW') // Queen  = Sliding Ferz + Sliding Wazir
          . replaceAll ('R', 'WW')   // Rook   = Sliding Wazir

          . match (new RegExp (`${modifier_class}*` +
                              `(${leaper_pat})(?:\\1|[0-9]+)?`, 'g'))
          . forEach  ((leaper) => moves . push (... betza_leaper (leaper)))

    return moves
}


//
// Reflect a move in all directions (8 or 4)
//
function fold (args = {}) {
    let move = args . move
    let out  = [move]
    let dr   = move . dr
    let dc   = move . dc

    if (dr) {
        let copy = {... move}; copy . dr = -dr; copy . dc =  dc;
        out . push (copy)
    }

    if (dc) {
        let copy = {... move}; copy . dr =  dr; copy . dc = -dc;
        out . push (copy)
    }

    if (dr && dc) {
        let copy = {... move}; copy . dr = -dr; copy . dc = -dc;
        out . push (copy)
    }

    if (Math . abs (move . dr) != Math . abs (move . dc)) {
        let n = out . length // We're pushing on out, so we need to
                             // capture the length before pushing
        for (let i = 0; i < n; i ++) {
            let dr = out [i] . dr
            let dc = out [i] . dc
            let copy   = {... out [i]}; copy . dr = dc; copy . dc = dr
            out . push (copy)
        }
    }
    return out
}



class Piece {
    constructor (args = {}) {
        if (args . key) {
            this . piece_name = args . name + "-" + args ["modifiers"]
            this . betza      = args . modifiers + args . key
        }
        else {
            this . piece_name = args . piece_name
            let piece_info = window . pieces [this . piece_name]
            //
            // If we have a "parent", first copy all the info
            // from the parent.
            //
            if (piece_info . parent) {
                let parent = new Piece ({piece_name: piece_info . parent})
                for (const prop in parent) {
                    if (!this [prop]) {
                        this [prop] = parent [prop]
                    }
                }
            }
            for (const prop in piece_info) {
                this [prop] = piece_info [prop]
            }
        }
    }
    moves (args = {}) {
        if (!this . move_list && this . betza) {
            this . move_list = betza (this . betza)
        }
        return this . move_list
    }

    name (args = {}) {
        if (!this . _name) {
            this . _name = title_case (this . piece_name)
        }
        return this . _name
    }

    //
    // For use in the index.
    //
    index_name (args = {}) {
        if (!this . _index_name) {
            this . _index_name = this . name ()
        }
        return this . _index_name 
    }


    file (args = {}) {
        if (!this . _file) {
            if (this . parent) {
                this . _file = this . parent + ".html?piece=" +
                               this . piece_name
            }
            else {
                this . _file = this . piece_name + ".html"
            }
        }

        return this . _file
    }
}


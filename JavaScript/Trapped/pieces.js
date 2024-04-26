//
// Chess pieces go here
//

let LEAPER_DESTINATIONS = {
    'A':  [2, 2],     // Alfil
    'C':  [3, 1],     // Camel
    'D':  [2, 0],     // Dabbada
    'F':  [1, 1],     // Ferz
    'G':  [3, 3],     // Tripper
    'H':  [3, 0],     // Threeleaper
    'N':  [2, 1],     // Knight
    'W':  [1, 0],     // Wazir
    'Z':  [3, 2],     // Zebra
}

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

//
// Handle "crooked" sliders. For now, just the Bishop and Rook
//
function crooked (betza) {
    let out = []

    //
    // This is called if there is a 'z' modifier.
    // We can only crook moves which are:
    //    - Do not contain other modifiers
    //    - Is a Bishop or a Rook
    //
    let match = betza . match (/^([a-z]+)([A-Z]|[(][0-9]+,[0-9]+[)])(\2|0)$/)
    if (!match) {
        return out
    }
    let modifiers = match [1]
    let leaper    = match [2]
    if (modifiers != 'z') {
        return out
    }

    let [dr, dc] = [0, 0]

    if (LEAPER_DESTINATIONS [leaper]) {
        [dr, dc] = LEAPER_DESTINATIONS [leaper]
    }
    else if (match = leaper . match (/([0-9]+),([0-9]+)/)) {
         dr = match [1]
         dc = match [2]
    }
    else {
        return out
    }


    console . log (`dr = ${dr}, dc = ${dc}`)

    //
    // Get the first moves; this will be 4 moves for diagonal and
    // orthogonal leapers, and eight moves for knights and friends
    //
    let first_moves = fold ({move: step (dr, dc)}) .
                       map ((move) => [move . dr, move . dc])

    if (Math . abs (dr) == Math . abs (dc)) {
        //
        // Diagonal rider
        //
        move_sets = first_moves . flatMap ((move) => {
            let [dr, dc] = [... move]
            return [[move, [ dr, -dc]],   // Mirror x == 0
                    [move, [-dr,  dc]]]   // Mirror y == 0
        })
    }
    else if (dr == 0 || dc == 0) {
        //
        // Orthogonal rider
        //
        move_sets = first_moves . flatMap ((move) => {
            let [dr, dc] = [... move]
            return [[move, [ dc,  dr]],   // Mirror x ==  y
                    [move, [-dc, -dr]]]   // Mirror x == -y
        })
    }
    else {
        //
        // Knight like
        //
        move_sets = first_moves . flatMap ((move) => {
            let [dr, dc] = [... move]
            let  orthogonal_move
            let  diagonal_move
            if (Math . abs (dr) > Math . abs (dc)) {
                // Mirror y == 0
                orthogonal_move = [ dr, -dc]
            }
            else {
                // Mirror x == 0
                orthogonal_move = [-dr,  dc]
            }
            if (Math . sign (dr) == Math . sign (dc)) {
                // Mirror x == y
                diagonal_move   = [ dc,  dr]
            }
            else {
                // Mirror x == -y
                diagonal_move   = [-dc, -dr]
            }
            return [[move, diagonal_move],
                    [move, orthogonal_move]]
        })
    }

    move_sets . forEach ((set) => {
        out . push (
            function (n, a = {}) {
                let info   = {}
                let values = a . values
                //
                // Determine whether we should stop
                //
                if (values . length >= 2) {
                    info ["prev_value"] = values [values . length - 2]
                }
                else {
                    info ["prev_value"] = -1
                }
                let [dr, dc] = [0, 0]
                for (let i = 0; i < n; i ++) {
                    let step = set [i % 2]
                    dr += step [0]
                    dc += step [1]
                }
                return [dr, dc, info]
            }
        )
    })

    return out
}


//
// Given a leaper, turn it into its corresponding rose
//
function rose (betza) {
    let out = []

    //
    // This is called if there is a 'q' modifier.
    // We can only rosify moves which are:
    //    - Do not contain other modifiers
    //    - Single leaps, not sliders
    //
    let match = betza . match (/^([a-z]+)([A-Z]+|[(][0-9]+,[0-9]+[)])$/);
    if (!match) {
        return out
    }
    let modifiers = match [1]
    let leaper    = match [2]
    if (modifiers != 'q') {
        return out
    }
    let row = 0
    let col = 0
    if (LEAPER_DESTINATIONS [leaper]) {
        row = LEAPER_DESTINATIONS [leaper] [0]
        col = LEAPER_DESTINATIONS [leaper] [1]
    }
    else {
        if (match = leaper . match (/[(]([0-9]+),([0-9]+)[)]/)) {
            row = +match [1]
            col = +match [2]
        }
    }
    if (row == 0 && col == 0) {
        return out  // Cannot parse, or a slider
    }

    let set = []
    row = Math . abs (row)
    col = Math . abs (col)
    if (row && col && row != col) {
        set = [[ row,  col], [ col,  row], [-col,  row], [-row,  col],
               [-row, -col], [-col, -row], [ col, -row], [ row, -col]]
    }
    else {
        //
        // Either the row and col are equal, or one of them is 0.
        // In either case, we get the same pattern. 
        //
        if (row == 0) {
            row = col
        }
        if (col == 0) {
            col = row
        }
        set = [[ row,  col], [ row, 0], [ row, -col], [0, -col],
               [-row, -col], [-row, 0], [-row,  col], [0,  col]]
    }

    [-1, 1] . forEach ((direction) => {
        [... set . keys ()] . forEach ((start) => {
            out . push (
                function (n, a = {}) {
                    if (n >= set . length) {
                        return [0, 0, {stop: 1}]
                    }
                    let row = 0
                    let col = 0
                    let indices = []
                    for (let i = 0; i < n; i ++) {
                        let index = direction * i + start
                        while (index < 0) {
                            index += set . length
                        }
                        while (index >= set . length) {
                            index -= set . length
                        }
                        indices . push (index)
                        let jump = set [index]
                        row += jump [0]
                        col += jump [1]
                    }
                    return [row, col, {curls: 1}]
                }
            )
        })
    })

    return out;
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

    if (betza . match (/q/)) {
        return rose (betza)
    }

    if (betza . match (/z/)) {
        return crooked (betza)
    }

    //
    // Hard code t[WF] and t[FW]
    //
    if (betza == "t[WF]") { // Moa
        return [
            {dr: -1, dc:  2, us: [[-1,  1]], max: 1},
            {dr: -1, dc: -2, us: [[-1, -1]], max: 1},
            {dr:  1, dc:  2, us: [[ 1,  1]], max: 1},
            {dr:  1, dc: -2, us: [[ 1, -1]], max: 1},
            {dr: -2, dc: -1, us: [[-1, -1]], max: 1},
            {dr: -2, dc: -1, us: [[-1, -1]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  1]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  1]], max: 1},
        ]
    }
    if (betza == "t[FW]") { // Mao
        return [
            {dr: -1, dc:  2, us: [[ 0,  1]], max: 1},
            {dr: -1, dc: -2, us: [[ 0, -1]], max: 1},
            {dr:  1, dc:  2, us: [[ 0,  1]], max: 1},
            {dr:  1, dc: -2, us: [[ 0, -1]], max: 1},
            {dr: -2, dc: -1, us: [[-1,  0]], max: 1},
            {dr: -2, dc: -1, us: [[-1,  0]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  0]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  0]], max: 1},
        ]
    }
    if (betza == "t[FWW]" || betza == "t[FR]") { // Octopus
        return [
            {dr: -1, dc:  0, or: -1, oc:  1},
            {dr:  0, dc:  1, or: -1, oc:  1},
            {dr: -1, dc:  0, or: -1, oc: -1},
            {dr:  0, dc: -1, or: -1, oc: -1},
            {dr:  1, dc:  0, or:  1, oc:  1},
            {dr:  0, dc:  1, or:  1, oc:  1},
            {dr:  1, dc:  0, or:  1, oc: -1},
            {dr:  0, dc: -1, or:  1, oc: -1},
        ]
    }
    if (betza == "t[WFF]" || betza == "t[WB]") { // Spider
        return [
            {dr: -1, dc:  1, or: -1, oc:  0},
            {dr: -1, dc: -1, or: -1, oc:  0},
            {dr:  1, dc:  1, or:  1, oc:  0},
            {dr:  1, dc: -1, or:  1, oc:  0},
            {dr: -1, dc: -1, or:  0, oc: -1},
            {dr: -1, dc: -1, or:  0, oc: -1},
            {dr:  1, dc:  1, or:  0, oc:  1},
            {dr:  1, dc:  1, or:  0, oc:  1},
        ]
    }

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

          . match (new RegExp (`(?:${modifier_class}*` +
                                 `(${leaper_pat})(?:\\1|[0-9]+)?)|` +
                                 "t\\[(?:WF|WFF|WB|FW|FWW|FR)\\]", 'g'))
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
                    if (!this [prop] && prop . charAt (0) != "_") {
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
        let step = args . step || 1

        if (!this . move_lists) {
            if (this . move_list) {
                this . move_lists = [this . move_list]
            }
            else if (this . betza) {
                this . move_lists = [betza (this . betza)]
            }
            else if (this . betza_list) {
                this . move_lists = this . betza_list . map (b => betza (b))
            }
        }

        return this . move_lists [(step - 1) % this . move_lists . length]
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


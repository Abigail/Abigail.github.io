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
let modifier_class = "[fbrlvs]"

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
function betza_leaper (betza) {
    let out = [];

    if (betza . match (/A/)) {out . push (... fold ({move: step (2, 2)}))} else
    if (betza . match (/C/)) {out . push (... fold ({move: step (3, 1)}))} else
    if (betza . match (/D/)) {out . push (... fold ({move: step (2, 0)}))} else
    if (betza . match (/F/)) {out . push (... fold ({move: step (1, 1)}))} else
    if (betza . match (/G/)) {out . push (... fold ({move: step (3, 3)}))} else
    if (betza . match (/H/)) {out . push (... fold ({move: step (3, 0)}))} else
    if (betza . match (/N/)) {out . push (... fold ({move: step (2, 1)}))} else
    if (betza . match (/W/)) {out . push (... fold ({move: step (1, 0)}))} else
    if (betza . match (/Z/)) {out . push (... fold ({move: step (3, 2)}))}

    //
    // If the letter is doubled, turn the step into a slide
    //
    if (betza . match (new RegExp (`(${leaper_class})\\1`))) {
        out . forEach ((move) => {move . max = 0})
    }

    //
    // Filter moves:
    //
    //    'f':   forward, dr < 0
    //    'ff':  really forward, dr < 0 && abs (dr) > abs (dc)
    //    'b':   backward, dr > 0
    //    'bb':  really backward, dr > 0 && abs (dr) > abs (dc)
    //
    // This really needs work, as this is not just filtering.
    // But for now, this will do.
    //
    if (betza . match (/f/)) {out = out . filter (move => move . dr < 0)}
    if (betza . match (/b/)) {out = out . filter (move => move . dr > 0)}

    if (betza . match (/ff|bb/)) {
         out = out . filter (move => abs (move . dr) > abs (move . dc))
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
                              `(${leaper_class})(?:\\1|[0-9]+)?`, 'g'))
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


let pieces = {
    //
    // Chess pieces
    //
    "king":          {betza:  "K", prefix: "&#x2654;"},
    "queen":         {betza:  "Q", prefix: "&#x2655;"},
    "rook":          {betza:  "R", prefix: "&#x2656;"},
    "bishop":        {betza:  "B", prefix: "&#x2657;"},
    "knight":        {betza:  "N", prefix: "&#x2658;"},
    "pawn":          {betza: "fW", prefix: "&#x2659;"},
    //
    // Compound pieces
    //    Knighted pieces
    //
    "archbishop":    {betza: "BN"},
    "chancellor":    {betza: "RN"},
    "amazon":        {betza: "QN"},
    //
    //    Crowned pieces
    //
    "dragon_king":   {betza: "RK"},
    "dragon_horse":  {betza: "BK"},
    //
    // Basic leapers
    //
    "wazir":         {betza: "W"},
    "ferz":          {betza: "F"},
    "dabbaba":       {betza: "D"},
    "alfil":         {betza: "A"},
    "threeleaper":   {betza: "H"},
    "camel":         {betza: "C", prefix: "&#x1F42B;"},
    "zebra":         {betza: "Z", prefix: "&#x1F993;"},
    "tripper":       {betza: "G"},
    //
    // Shogi
    //
    "king_general":  {betza:  "K", prefix: "&#x738b;&#x5c07;"},

    //
    // Hunter-Falcon chess
    //
    "hunter":        {betza: "fWbF"},
    "falcon":        {betza: "fFbW"},
}

class Piece {
    constructor (args = {}) {
        this . piece_name = args . piece_name
        let piece_info = pieces [this . piece_name]
        for (const prop in piece_info) {
            this [prop] = piece_info [prop]
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

    full_name (args = {}) {
        if (!this . _full_name) {
            this . _full_name = ""
            if (this . prefix) {
                this . _full_name += this . prefix + " "
            }
            this . _full_name += this . name ()
        }
        return this . _full_name
    }
}


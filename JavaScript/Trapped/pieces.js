//
// Chess pieces go here
//

//
// Return a move representing a step
//
function step (dr, dc, args = {}) {
    return {type: "step", dr: dr, dc: dc}
}

//
// Return a move representing a slide
//
function slide (dr, dc, args = {}) {
    return {type: "slide", dr: dr, dc: dc}
}

//
// Take a string in Betza notation, return a move list
//
// For now, we just handle the capital letters.
//
function betza_atom (betza) {
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
    if (betza . match (/([ACDFGHNWZ])\1/)) {
        out . forEach ((move) => {move . type = "slide"})
    }

    console . log (out)

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

          . match (/([ACDFGHNWZ])\1?[0-9]*/g)
          . forEach  ((atom) => moves . push (... betza_atom (atom)))

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
        this . move_list = []
        if (args . move_list) {
            this . move_list = args . move_list
        }
    }
    moves (args = {}) {
        return this . move_list
    }
}

//
// Chess pieces
//
class Knight extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("N")
        this . full_name = "&#x2658; Knight"
    }
}


class King extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("K")
        this . full_name = "&#x2654; King"
    }
}


class Queen extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("Q")
        this . full_name = "&#x2655; Queen"
    }
}


class Rook extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("R")
        this . full_name = "&#x2656; Rook"
    }
}


class Bishop extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("B")
        this . full_name = "&#x2657; Bishop"
    }
}


class Pawn extends Piece {
    constructor (args = {}) {
        super (args)
        this . full_name = "&#x2659; Pawn"
    }
    moves (args = {}) {
        if (args . step == 1) {
            return [step (-1, 0), step (-2, 0)]
        }
        return [step (-1, 0)]
    }
}

//
// Knighted pieces
//
class Archbishop extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("BN")
    }
}
class Chancellor extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("RN")
    }
}
class Amazon extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("QN")
    }
}

//
// Crowned pieces
//
class Dragon_king extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("RK")
    }
}
class Dragon_horse extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = betza ("BK")
    }
}

//
// Pieces from Hunter-Falcon chess
//
class Hunter extends Piece {
    moves (args = {}) {
        return [slide (-1, 0), slide (1, -1), slide (1, 1)]
    }
}

class Falcon extends Piece {
    moves (args = {}) {
        return [slide (1, 0), slide (-1, -1), slide (-1, 1)]
    }
}

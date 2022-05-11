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
        this . move_list = fold ({move: step (1, 2)})
        this . full_name = "&#x2658; Knight"
    }
}


class King extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = fold ({move: step (1, 0)})
        this . full_name = "&#x2654; King"
    }
}


class Queen extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = [... fold ({move: slide (1, 1)}),
                            ... fold ({move: slide (1, 0)})]
        this . full_name = "&#x2655; Queen"
    }
}


class Rook extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = fold ({move: slide (1, 0)})
        this . full_name = "&#x2656; Rook"
    }
}


class Bishop extends Piece {
    constructor (args = {}) {
        super (args)
        this . move_list = fold ({move: slide (1, 1)})
        this . full_name = "&#x2657; Bishop"
    }
}


class Pawn extends Piece {
    constructor (args = {}) {
        super (args)
        this . full_name = "&#x2658; Pawn"
    }
    moves (args = {}) {
        if (args . step == 1) {
            return [step (-1, 0), step (-2, 0)]
        }
        return [step (-1, 0)]
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

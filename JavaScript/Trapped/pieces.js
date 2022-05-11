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


class Knight extends Piece {
    constructor (args = {}) {
        args . move_list = fold ({move: step (1, 2)})
        super (args)
    }
}


class King extends Piece {
    constructor (args = {}) {
        args . move_list = fold ({move: step (1, 0)})
        super (args)
    }
}


class Bishop extends Piece {
    constructor (args = {}) {
        args . move_list = fold ({move: slide (1, 1)})
        super (args)
    }
}

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

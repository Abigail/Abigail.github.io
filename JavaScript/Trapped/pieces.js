//
// Chess pieces go here
//
class Piece {
}


class Knight extends Piece {
    //
    // Return a list of moves
    //
    moves (args = {}) {
        return [{type: "step", dr:  2, dc:  1},
                {type: "step", dr:  2, dc: -1},
                {type: "step", dr: -2, dc:  1},
                {type: "step", dr: -2, dc: -1},
                {type: "step", dr:  1, dc:  2},
                {type: "step", dr:  1, dc: -2},
                {type: "step", dr: -1, dc:  2},
                {type: "step", dr: -1, dc: -2},]
    }
}


class King extends Piece {
    //
    // Return a list of moves
    //
    moves (args = {}) {
        return [{type: "step", dr:  1, dc:  0},
                {type: "step", dr: -1, dc:  0},
                {type: "step", dr:  0, dc:  1},
                {type: "step", dr:  0, dc: -1},]
    }
}


class Bishop extends Piece {
    //
    // Return a list of moves
    //
    moves (args = {}) {
        return [{type: "slide", dr:  1, dc:  1},
                {type: "slide", dr: -1, dc:  1},
                {type: "slide", dr:  1, dc: -1},
                {type: "slide", dr: -1, dc: -1},]
    }
}

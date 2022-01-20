$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    sudoku . draw ()
    if (true) {
        sudoku . draw_clues ({clues: {"R3C5":  7,
                                      "R4C9":  8,
                                      "R8C2":  4,
                                      "R9C9":  9}})
    }
    else {
        sudoku . draw_clues ({clues: [[1, 2, 3, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0],
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0]]})
    }
})

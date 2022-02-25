$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 4})

    sudoku . set_clues ({clues: [[0, 0, 1, 0],
                                 [0, 2, 0, 0],
                                 [3, 0, 0, 1],
                                 [0, 0, 4, 0]]})

    sudoku . draw ()
    sudoku . draw_clues ()
})

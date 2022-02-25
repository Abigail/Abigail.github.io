$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 6})

    sudoku . set_clues ({clues: [[5, 4, 0, 0, 0, 0],
                                 [6, 0, 0, 0, 0, 0],
                                 [4, 0, 0, 6, 0, 0],
                                 [0, 0, 1, 0, 0, 4],
                                 [0, 0, 0, 0, 0, 1],
                                 [0, 0, 0, 0, 3, 2]]})

    sudoku . set_solution ({solution: [[5, 4, 3, 1, 2, 6],
                                       [6, 1, 2, 3, 4, 5],
                                       [4, 2, 5, 6, 1, 3],
                                       [3, 6, 1, 2, 5, 4],
                                       [2, 3, 4, 5, 6, 1],
                                       [1, 5, 6, 4, 3, 2]]})

    sudoku . draw ()
    sudoku . draw_clues ()
    add_todo (() => sudoku . draw_solution ({delay: 100}))
})

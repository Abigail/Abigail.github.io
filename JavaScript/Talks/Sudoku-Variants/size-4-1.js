$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 4})

    sudoku . set_clues ({clues: [[0, 0, 1, 0],
                                 [0, 2, 0, 0],
                                 [3, 0, 0, 1],
                                 [0, 0, 4, 0]]})

    sudoku . set_solution ({solution: [[4, 3, 1, 2],
                                       [1, 2, 3, 4],
                                       [3, 4, 2, 1],
                                       [2, 1, 4, 3]]})

    sudoku . draw ()
    sudoku . draw_clues ()
    add_todo (() => sudoku . draw_solution ({delay: 100}))
})

$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_renban   ({renban:  ["R1C1", "R9C9"]})
      . set_renban   ({renban:  ["R1C4", "R6C9"]})
      . set_renban   ({renban:  ["R1C7", "R3C9"]})
      . set_renban   ({renban:  ["R4C1", "R9C6"]})
      . set_renban   ({renban:  ["R7C1", "R9C3"]})
      . set_clues    ({clues:    `. 7 .  . . 8  . . .
                                  2 . 6  . . .  9 . .
                                  . 4 .  3 . .  . 1 .

                                  . . 9  . 8 .  . . 2
                                  . . .  9 . 4  . . .
                                  6 . .  . 1 .  5 . .

                                  . 9 .  . . 1  . 2 .
                                  . . 2  . . .  8 . 1
                                  . . .  8 . .  . 5 .` })
      . set_solution ({solution: `1 7 5  2 9 8  6 3 4
                                  2 3 6  1 4 7  9 8 5
                                  9 4 8  3 6 5  2 1 7

                                  7 5 9  6 8 3  1 4 2
                                  3 2 1  9 5 4  7 6 8
                                  6 8 4  7 1 2  5 9 3

                                  8 9 3  5 7 1  4 2 6
                                  5 6 2  4 3 9  8 7 1
                                  4 1 7  8 2 6  3 5 9`})
      . draw ({delay: 50})

      add_todo (() => unhide ())
      add_todo (() => sudoku . draw_solution ({delay: 50}))
})

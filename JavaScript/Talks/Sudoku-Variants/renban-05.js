$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_renban   ({renban:  ["R1C7", "R1C8", "R3C8", "R3C9"]})
      . set_renban   ({renban:  ["R2C6", "R2C7", "R4C7", "R4C8"]})
      . set_renban   ({renban:  ["R3C5", "R3C6", "R5C6", "R5C7"]})
      . set_renban   ({renban:  ["R4C4", "R4C5", "R6C5", "R6C6"]})
      . set_renban   ({renban:  ["R5C3", "R5C4", "R7C4", "R7C5"]})
      . set_renban   ({renban:  ["R6C2", "R6C3", "R8C3", "R8C4"]})
      . set_renban   ({renban:  ["R7C1", "R7C2", "R9C2", "R9C3"]})
      . set_clues    ({clues:    `3 . .  . . 7  . . .
                                  . 7 .  . 1 .  . . .
                                  . . .  9 . .  . . .

                                  . . 1  . . .  . . 9
                                  . 2 .  . . .  . 8 .
                                  9 . .  . . .  7 . .

                                  . . .  . . 4  . . .
                                  . . .  . 3 .  . 7 .
                                  . . .  2 . .  . . 6` })
      . set_solution ({solution: `3 4 9  6 2 7  8 5 1
                                  2 7 6  8 1 5  3 9 4
                                  5 1 8  9 4 3  2 6 7

                                  8 3 1  7 5 2  6 4 9
                                  6 2 7  4 9 1  5 8 3
                                  9 5 4  3 8 6  7 1 2

                                  7 9 3  5 6 4  1 2 8
                                  4 6 2  1 3 8  9 7 5
                                  1 8 5  2 7 9  4 3 6` })
      . draw ({delay: 50})

      add_todo (() => unhide ())
      add_todo (() => sudoku . draw_solution ({delay: 50}))
})

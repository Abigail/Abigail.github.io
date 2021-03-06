$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9, nrc: 1})

    sudoku . draw ()

    sudoku . set_clues ({clues:
             `2 . 5  . . .  . . .
              . . .  . . 8  . . .
              . . .  . . 7  4 . .

              . . .  . . .  . 9 .
              . . 1  . . .  5 . 4
              5 . 8  . . .  3 . .

              8 . 6  . 9 .  . 4 .
              7 3 .  . 4 .  . . .
              . 4 .  . . .  . 2 .`})

    sudoku . set_solution ({solution:
             `2 7 5  3 6 4  8 1 9
              9 1 4  2 5 8  6 3 7
              6 8 3  9 1 7  4 5 2

              4 6 7  5 3 1  2 9 8
              3 2 1  8 7 9  5 6 4
              5 9 8  4 2 6  3 7 1

              8 5 6  7 9 2  1 4 3
              7 3 2  1 4 5  9 8 6
              1 4 9  6 8 3  7 2 5`})

    add_todo (() => sudoku . draw_clues    ({delay: 75}))
    add_todo (() => sudoku . draw_solution ({delay: 75}))
})

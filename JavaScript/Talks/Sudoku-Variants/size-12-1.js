$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 12})

    let A = "A"
    let B = "B"
    let C = "C"

    sudoku . set_clues ({clues:
             `. . . 8  . 3 C .  . 1 . 2
              . . A 5  . . 2 1  . . 3 .
              2 1 . C  6 . . 4  . . . A
 
              . 2 . .  9 6 . .  7 . A 5
              . . . .  C 2 . .  3 . . .
              A . . .  . . . .  6 . . 8

              7 5 2 A  . . . B  4 . . .
              . 9 . 6  . 5 8 .  . . . B
              8 . B .  4 A . .  . 9 . .

              . 8 . B  2 . 7 6  . 3 . C
              . A . .  . . . C  9 . 2 .
              C . . .  . . . 9  1 B 6 4`})


    sudoku . set_solution ({solution: 
             `9 7 6 8  A 3 C 5  B 1 4 2
              4 B A 5  8 9 2 1  C 7 3 6
              2 1 3 C  6 7 B 4  8 5 9 A

              B 2 1 3  9 6 4 8  7 C A 5
              5 6 8 7  C 2 1 A  3 4 B 9
              A 4 C 9  7 B 5 3  6 2 1 8

              7 5 2 A  3 C 9 B  4 6 8 1
              3 9 4 6  1 5 8 7  2 A C B
              8 C B 1  4 A 6 2  5 9 7 3

              1 8 9 B  2 4 7 6  A 3 5 C
              6 A 5 4  B 1 3 C  9 8 2 7
              C 3 7 2  5 8 A 9  1 B 6 4`})

    sudoku . draw ()
    add_todo (() => sudoku . draw_solution ({delay: 50}))
})

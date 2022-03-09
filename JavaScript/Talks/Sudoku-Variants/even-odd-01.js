$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_clues    ({clues:    `. . o  . . 3  . . 9
                                  . o .  o . .  . 8 .
                                  o . 1  . o .  7 . .

                                  . o .  o . 6  . . .
                                  9 . o  . 5 .  e . 8
                                  . . .  4 . e  . e .

                                  . . 3  . e .  6 . e
                                  . 2 .  . . e  . e .
                                  1 . .  7 . .  e . .`})
      . set_solution ({solution: `4 7 5  8 6 3  2 1 9
                                  6 9 2  5 1 7  3 8 4
                                  3 8 1  2 9 4  7 5 6
                                   
                                  2 1 4  9 8 6  5 3 7
                                  9 6 7  3 5 1  4 2 8
                                  5 3 8  4 7 2  9 6 1

                                  8 5 3  1 4 9  6 7 2
                                  7 2 9  6 3 8  1 4 5
                                  1 4 6  7 2 5  8 9 3`})
      . draw ({delay: 50})

      add_todo (() => sudoku . draw_solution ({delay: 50}))
})

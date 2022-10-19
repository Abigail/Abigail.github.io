$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_german_whisper ({german_whisper: ["R6C3", "R5C2", "R4C3", "R3C4",
                                              "R2C5", "R1C6", "R1C7", "R2C8",
                                              "R3C8", "R4C7", "R5C6", "R6C6",
                                              "R7C6", "R8C5", "R7C4"]})
      . set_german_whisper ({german_whisper: ["R5C8", "R6C9", "R7C8", "R7C7",
                                              "R8C7", "R9C6"]})
      . set_german_whisper ({german_whisper: ["R8C1", "R7C1", "R7C2", "R8C3",
                                              "R9C3", "R9C2"]})
      . set_german_whisper ({german_whisper: ["R4C5", "R4C6", "R3C7"]})

      . set_clues    ({clues:    `. . .  . 1 .  . . .
                                  . 5 .  . . .  . . .
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  6 . .  . . .  . . 9
                                  . . .  . . .  . . .

                                  . . 3  . . .  . . .
                                  . . .  . . .  . 3 .
                                  . . .  . 3 .  . . .` })

      . set_solution ({solution: `7 9 6  4 1 3  8 5 2
                                  3 5 2  6 8 9  4 1 7
                                  1 8 4  2 7 5  6 9 3

                                  2 4 7  5 9 1  3 8 6
                                  6 1 5  3 4 8  2 7 9
                                  8 3 9  7 6 2  5 4 1

                                  9 2 3  8 5 7  1 6 4
                                  4 7 8  1 2 6  9 3 5
                                  5 6 1  9 3 4  7 2 8`})


      . draw ()

//    add_todo (() => unhide ())
      add_todo (() => sudoku . draw_solution ({delay: 50}))

})

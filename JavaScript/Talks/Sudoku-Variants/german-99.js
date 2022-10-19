$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_german_whisper ({german_whisper: ["R2C3", "R1C2", "R2C1", "R3C2",
                                              "R4C3", "R5C2", "R4C1"]})
      . set_german_whisper ({german_whisper: ["R2C4", "R3C4", "R4C4", "R5C5",
                                              "R4C6", "R3C6", "R2C6"]})
      . set_german_whisper ({german_whisper: ["R2C9", "R1C8", "R2C7", "R3C8",
                                              "R4C9", "R5C8", "R4C7"]})
      . set_german_whisper ({german_whisper: ["R7C2", "R7C3", "R8C3", "R8C2",
                                              "R9C2", "R9C3"]})
      . set_german_whisper ({german_whisper: ["R7C5", "R7C6", "R8C6", "R9C6"]})
      . set_german_whisper ({german_whisper: ["R7C9", "R8C9", "R9C9"]})

      . set_clues    ({clues:    `. . 4  9 . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  . . .  3 . .  . . 5
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  2 . .  . . .  . . .
                                  . . .  . 8 .  . . .` })


      . draw ({delay: 50})

})

$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_renban ({renban: ["R2C1", "R1C1", "R1C2"]})
      . set_renban ({renban: ["R1C3", "R2C3", "R3C3", "R4C4"]})
      . set_renban ({renban: ["R2C4", "R1C5"]})
      . set_renban ({renban: ["R2C5", "R1C6", "R2C6"]})
      . set_renban ({renban: ["R1C7", "R2C7", "R3C7", "R4C6", "R5C7", "R6C7"]})
      . set_renban ({renban: ["R1C8", "R2C8"]})
      . set_renban ({renban: ["R4C1", "R4C2"]})
      . set_renban ({renban: ["R5C1", "R6C2", "R7C1", "R8C2"]})
      . set_renban ({renban: ["R5C4", "R5C3", "R6C3", "R7C3"]})
      . set_renban ({renban: ["R5C5", "R5C6"]})
      . set_renban ({renban: ["R6C4", "R6C5", "R6C6", "R7C7", "R8C8", "R7C8"]})
      . set_renban ({renban: ["R4C8", "R4C9"]})
      . set_renban ({renban: ["R5C9", "R6C8", "R7C9"]})
      . set_renban ({renban: ["R8C3", "R9C3"]})
      . set_renban ({renban: ["R7C4", "R8C5", "R9C6"]})
      . set_renban ({renban: ["R8C9", "R9C9"]})

      . set_clues    ({clues:    `. . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . o .  . . .

                                  . . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  2 7 .  . . .` })

      . draw ({delay: 50})
})

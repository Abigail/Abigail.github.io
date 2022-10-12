$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_quadruple ({cell: "R1C6", values: [2]})
      . set_quadruple ({cell: "R1C8", values: [1, 2, 3]})
      . set_quadruple ({cell: "R2C2", values: [1, 2, 8, 9]})
      . set_quadruple ({cell: "R2C3", values: [3, 4]})
      . set_quadruple ({cell: "R2C4", values: [4, 5, 6]})
      . set_quadruple ({cell: "R2C8", values: [4, 5, 6]})
      . set_quadruple ({cell: "R3C8", values: [6, 7, 8]})
      . set_quadruple ({cell: "R4C3", values: [1, 6]})
      . set_quadruple ({cell: "R4C4", values: [2, 4]})
      . set_quadruple ({cell: "R5C5", values: [3, 7]})
      . set_quadruple ({cell: "R5C6", values: [1, 5]})
      . set_quadruple ({cell: "R6C1", values: [2, 5]})
      . set_quadruple ({cell: "R7C1", values: [4, 6, 8]})
      . set_quadruple ({cell: "R7C5", values: [5, 6]})
      . set_quadruple ({cell: "R7C6", values: [3, 4]})
      . set_quadruple ({cell: "R7C7", values: [8, 9]})
      . set_quadruple ({cell: "R8C1", values: [3, 7]})
      . set_quadruple ({cell: "R8C3", values: [1, 7]})
      . set_clues    ({clues:    `. . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . . .  . . .

                                  . . .  . . .  . . .
                                  . . .  . . .  . . .
                                  . . .  . . .  . . .` })
      . draw ()

  //  add_todo (() => unhide ())
  //  add_todo (() => sudoku . draw_solution ({delay: 50}))
})

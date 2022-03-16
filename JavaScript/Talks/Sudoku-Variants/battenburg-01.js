$(document) . ready (function () {
    $("li") . addClass ("hidden")
    let sudoku = new Sudoku ({size: 9})
      . set_clues    ({clues:    `3 . 5  . . .  7 . 6
                                  . . .  2 . 7  . . .
                                  1 . .  . . .  . . 8

                                  . 6 .  . . .  . 1 .
                                  . . .  . 4 .  . . .
                                  . 5 .  . . .  . 4 .
                                   
                                  7 . .  . . .  . . 5
                                  . . .  7 . 3  . . .
                                  2 . 8  . . .  9 . 7`})

      . set_battenburgs      ({battenburgs:      ["R2C2", "R2C7", "R7C2",
                                                  "R7C4", "R7C5", "R7C7"]})
      . set_anti_battenburgs ({anti_battenburgs: ["R1C1", "R1C8", "R2C3",
                                                  "R2C6", "R3C2", "R3C7",
                                                  "R4C1", "R5C8", "R8C1",
                                                  "R8C8"]})

      . set_solution ({solution: `3 2 5  1 8 4  7 9 6
                                  6 8 9  2 3 7  4 5 1
                                  1 7 4  6 5 9  3 2 8

                                  4 6 2  9 7 8  5 1 3
                                  8 1 3  5 4 2  6 7 9
                                  9 5 7  3 6 1  8 4 2

                                  7 4 1  8 9 6  2 3 5
                                  5 9 6  7 2 3  1 8 4
                                  2 3 8  4 1 5  9 6 7`})
      . draw ()

      add_todo (() => unhide (), 1)
      add_todo (() => {$("div.image") . css ({visibility: "visible"})})
      add_todo (() => unhide (), 1)
      add_todo (() => sudoku . draw_solution ({delay: 20}))
})

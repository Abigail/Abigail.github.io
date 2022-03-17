$(document) . ready (function () {
    let sudoku = new Sudoku ({size:        11,
                              no_boundary:  1})
      . set_clues ({clues:  `1 1 .  1 1 .  1 1 .  1 1
                             1 1 .  1 2 .  2 1 .  2 2
                             . . .  . . .  . . .  . .

                             1 2 .  1 2 .  1 2 .  1 2
                             1 1 .  1 2 .  2 1 .  2 2
                             . . .  . . .  . . .  . .

                             2 1 .  2 1 .  2 1 .  2 1
                             1 1 .  1 2 .  2 1 .  2 2
                             . . .  . . .  . . .  . .

                             2 2 .  2 2 .  2 2 .  2 2
                             1 1 .  1 2 .  2 1 .  2 2`})
      . draw ()

    add_todo (() => {
        sudoku . set_battenburgs ({battenburgs: ["R7C4", "R4C7"]})
               . set_anti_battenburgs (
                    {anti_battenburgs: [ "R1C1",  "R1C4",  "R1C7",  "R1C10",
                                         "R4C1",  "R4C4",           "R4C10",
                                         "R7C1",           "R7C7",  "R7C10",
                                        "R10C1", "R10C4", "R10C7", "R10C10"]})
               . draw_battenburgs ()})

})

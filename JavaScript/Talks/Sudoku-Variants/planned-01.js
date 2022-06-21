$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . draw        ()
      . draw_houses ({set: ["R1C1", "R1C4", "R1C7",
                            "R4C1", "R4C4", "R4C7",
                            "R7C1", "R7C4", "R7C7",], class: "set-1,house"})
      . draw_houses ({set: ["R1C2", "R1C5", "R1C8",
                            "R4C2", "R4C5", "R4C8",
                            "R7C2", "R7C5", "R7C8",], class: "set-2,house"})
      . draw_houses ({set: ["R1C3", "R1C6", "R1C9",
                            "R4C3", "R4C6", "R4C9",
                            "R7C3", "R7C6", "R7C9",], class: "set-3,house"})

      . draw_houses ({set: ["R2C1", "R2C4", "R2C7",
                            "R5C1", "R5C4", "R5C7",
                            "R8C1", "R8C4", "R8C7",], class: "set-4,house"})
      . draw_houses ({set: ["R2C2", "R2C5", "R2C8",
                            "R5C2", "R5C5", "R5C8",
                            "R8C2", "R8C5", "R8C8",], class: "set-5,house"})
      . draw_houses ({set: ["R2C3", "R2C6", "R2C9",
                            "R5C3", "R5C6", "R5C9",
                            "R8C3", "R8C6", "R8C9",], class: "set-6,house"})

      . draw_houses ({set: ["R3C1", "R3C4", "R3C7",
                            "R6C1", "R6C4", "R6C7",
                            "R9C1", "R9C4", "R9C7",], class: "set-7,house"})
      . draw_houses ({set: ["R3C2", "R3C5", "R3C8",
                            "R6C2", "R6C5", "R6C8",
                            "R9C2", "R9C5", "R9C8",], class: "set-8,house"})
      . draw_houses ({set: ["R3C3", "R3C6", "R3C9",
                            "R6C3", "R6C6", "R6C9",
                            "R9C3", "R9C6", "R9C9",], class: "set-9,house"})
                           
})

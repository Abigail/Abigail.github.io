$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . draw        ()
      . draw_houses ({set: ["R2C3", "R2C5", "R3C6", "R5C6",
                            "R6C5", "R6C3", "R5C2", "R3C2",]})
      . place_text  ({row: 4, col: 4, text: "\u2735", class: "star", dy: 0.3})
})

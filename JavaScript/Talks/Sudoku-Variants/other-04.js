$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . draw        ()
      . draw_houses ({set: ["R3C3", "R3C4", "R3C5", "R4C5",
                            "R5C5", "R5C4", "R5C3", "R4C3",]})
      . place_text  ({row: 4, col: 4, text: "\u2735", class: "star", dy: 0.3})
})

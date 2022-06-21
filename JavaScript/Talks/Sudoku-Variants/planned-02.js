$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9})
      . set_thermo  ({thermo: ["R8C3", "R6C3", "R4C5"]})
      . draw        ()
})

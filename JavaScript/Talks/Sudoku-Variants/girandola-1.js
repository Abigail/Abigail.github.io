$(document) . ready (function () {
    let sudoku = new Sudoku ({size: 9, girandola: 1})

    sudoku . draw ()

    add_todo (() => {$("div.image") . css ({visibility: "visible"})})

})

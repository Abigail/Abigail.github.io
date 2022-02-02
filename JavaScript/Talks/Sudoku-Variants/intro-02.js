$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    $("li") . addClass ("hidden")

    sudoku . draw ()

    add_todo (() => {unhide ()})

    // Rows
    add_todo (() => {
        unhide ()
        sudoku . show_house ("R3")
    })

    // Columns
    add_todo (() => {
        unhide ()
        sudoku . clear_houses ()
        sudoku . show_house ("C7")})

    // Boxes
    add_todo (() => {
        unhide ()
        sudoku . clear_houses ()
        sudoku . show_house ("B2")
    })

    // Cell
    add_todo (() => {
        unhide ()
        sudoku . clear_houses ()
        sudoku . show_house ("#R5C5")
    })
    
})



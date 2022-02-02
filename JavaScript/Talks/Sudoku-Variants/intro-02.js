$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    $("li") . addClass ("hidden")

    sudoku . draw ()

    add_todo (() => {unhide ()})

    // Rows
    add_todo (() => {
        unhide ()
        sudoku . draw_row_names ()
        sudoku . highlight_house ({selector: ".R3"})
    })

    // Columns
    add_todo (() => {
        unhide ()
        sudoku . clear_highlights ()
        sudoku . draw_col_names ()
        sudoku . highlight_house ({selector: ".C7"})
    })

    // Boxes
    add_todo (() => {
        unhide ()
        sudoku . clear_highlights ()
        sudoku . highlight_house ({selector: ".B2"})
    })

    // Cell
    add_todo (() => {
        unhide ()
        sudoku . clear_highlights ()
        sudoku . highlight_house ({selector: "#R5C5"})
    })
    
})



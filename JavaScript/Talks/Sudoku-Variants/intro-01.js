$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    sudoku . draw ()
    sudoku . set_clues ({clues: [[5, 3, 0, 0, 7, 0, 0, 0, 0],
                                 [6, 0, 0, 1, 9, 5, 0, 0, 0],
                                 [0, 9, 8, 0, 0, 0, 0, 6, 0],
                                 [8, 0, 0, 0, 6, 0, 0, 0, 3],
                                 [4, 0, 0, 8, 0, 3, 0, 0, 1],
                                 [7, 0, 0, 0, 2, 0, 0, 0, 6],
                                 [0, 6, 0, 0, 0, 0, 2, 8, 0],
                                 [0, 0, 0, 4, 1, 9, 0, 0, 5],
                                 [0, 0, 0, 0, 8, 0, 0, 7, 9]]})
    sudoku . set_solution ({solution: [[0, 0, 4, 6, 0, 8, 9, 1, 2],
                                       [0, 7, 2, 0, 0, 0, 3, 4, 8],
                                       [1, 0, 0, 3, 4, 2, 5, 0, 7],
                                       [0, 5, 9, 7, 0, 1, 4, 2, 0],
                                       [0, 2, 6, 0, 5, 0, 7, 9, 0],
                                       [0, 1, 3, 9, 0, 4, 8, 5, 0],
                                       [9, 0, 1, 5, 3, 7, 0, 0, 4],
                                       [2, 8, 7, 0, 0, 0, 6, 3, 0],
                                       [3, 4, 5, 2, 0, 6, 1, 0, 0]]})

    $("li") . addClass ("hidden")
    unhide ()

    add_todo (() => {
        sudoku . draw_clues ()
        unhide ()
    })
    add_todo (() => {unhide ()})

    //
    // ... rows
    //
    add_todo (() => {
        unhide ()
        show_house ("R")
    })

    //
    // ... columns
    //
    add_todo (() => {
        unhide ()
        show_house ("C")
    })

    //
    // ... boxes
    //
    add_todo (() => {
        unhide ()
        show_house ("B")
    })

    add_todo (() => {
        clear_houses ()
        sudoku . draw_solution ()
    })
})


//
// Handle highligthing houses
//
let timeout_id
let name = "highlight"

function clear_houses () {
    clearTimeout (timeout_id)
    $("." + name) . removeClass (name)
}

function show_house (type) {
    clear_houses ()
    let house_name = type + (1 + Math . floor (Math . random () * 9))

    $("." + house_name) . addClass (name)

    timeout_id = setTimeout (show_house, 2000, type)
}

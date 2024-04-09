$(document) . ready (function () {
    let board = new Chess_Board ({size: 8})
    let place_row = 4
    let place_col = 5

    board . draw ()
    board . place_text ({row: place_row, col: place_col, text: "bullet"})

    add_todo (() => {
        for (let row = 1; row <= 8; row ++) {
            if (row != place_row) {
                board . place_text ({row: row, col: place_col, text: "x"})
            }
        }
    })

    add_todo (() => {
        for (let col = 1; col <= 8; col ++) {
            if (col != place_col) {
                board . place_text ({row: place_row, col: col, text: "x"})
            }
        }
    })

    add_todo (() => {
        board . place_text ({row: place_row - 1,
                             col: place_col - 1, text: "x"})
        board . place_text ({row: place_row + 1,
                             col: place_col - 1, text: "x"})
        board . place_text ({row: place_row - 1,
                             col: place_col + 1, text: "x"})
        board . place_text ({row: place_row + 1,
                             col: place_col + 1, text: "x"})
    })

})

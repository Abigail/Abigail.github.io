$(document) . ready (function () {
    let board = new Chess_Board ({size: 8})
    let place_row = 4
    let place_col = 4

    board . draw ()
    board . place_text ({row: place_row, col: place_col, text: "Q"})

    add_todo (() => {
        for (let row = 1; row <= 8; row ++) {
            for (let col = 1; col <= 8; col ++) {
                if (row             == place_row ||
                    col             == place_col ||
                    row - place_row == col - place_col ||
                    row - place_row == place_col - col) {
                    if (row != place_row || col != place_col) {
                        board . place_text ({row: row,
                                             col: col, text: "x"})
                    }
                }
            }
        }
    })
})

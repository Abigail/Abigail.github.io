$(document) . ready (function () {
    let board = new Chess_Board ({size: 8})

    board . draw ()

    add_todo (() => {
        unhide ()
    })

    add_todo (() => {
        board . place_text ({row: 4, col: 1, text: "x"})
        board . place_text ({row: 3, col: 2, text: "x"})
        board . place_text ({row: 2, col: 3, text: "x"})
        board . place_text ({row: 1, col: 4, text: "x"})
    })

    add_todo (() => {
        board . place_text ({row: 3, col: 1, text: "o"})
        board . place_text ({row: 4, col: 2, text: "o"})
        board . place_text ({row: 5, col: 3, text: "o"})
        board . place_text ({row: 6, col: 4, text: "o"})
        board . place_text ({row: 7, col: 5, text: "o"})
        board . place_text ({row: 8, col: 6, text: "o"})
    })
})

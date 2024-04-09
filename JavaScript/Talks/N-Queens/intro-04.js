$(document) . ready (function () {
    let board = new Chess_Board ({size: 8})

    board . draw ()

    let list = [[1, 6],
                [2, 4],
                [3, 7],
                [4, 1],
                [5, 8],
                [6, 2],
                [7, 5],
                [8, 3]]

     list . forEach ((l) => {
        console . log (l)
        let [row, col] = l
        board . place_text ({row: row, col: col, text: "Q"})
     })

})

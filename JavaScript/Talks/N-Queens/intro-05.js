$(document) . ready (function () {
    let board = new Chess_Board ({size: 8})

    board . draw ()

    let list = [[1, 5],
                [2, 2],
                [3, 4],
                [4, 7],
                [5, 3],
                [6, 8],
                [7, 6],
                [8, 1]]

     list . forEach ((l) => {
        console . log (l)
        let [row, col] = l
        board . place_text ({row: row, col: col, text: "Q"})
     })

})

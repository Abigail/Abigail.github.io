$(document) . ready (function () {
    let board = new Chess_Board ({size: 10})

    board . draw ()

    let list = [ [1,  5],
                 [2, 10],
                 [3,  4],
                 [4,  9],
                 [5,  3],
                 [6,  8],
                 [7,  2],
                 [8,  7],
                 [9,  1],
                [10,  6]]

     list . forEach ((l) => {
        console . log (l)
        let [row, col] = l
        board . place_text ({row: row, col: col, text: "Q"})
     })

})

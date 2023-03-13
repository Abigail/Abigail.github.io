//
// Display chess board for divs of class "chess-board"
//

window . addEventListener ("load", all_chess_boards)

//
// Perform long division. The dividend may exceed the maximum 
// integer value. Replace the text of the element with the
// long division.
//
function chess_board (element) {
    let position = $(element)  . html  ()
    let board    = position . split  ("\n")                      .
                              filter (line => line . length > 0) .
                              map    (row  => row  . split (/\s+/))

    let table = "<table class = 'chess-board'>"
    board . forEach (row => {
        table += "<tr>"
        row . forEach (cell => {
            table += "<td>" + cell + "</td>"
        })
        table += "</tr>"
    })
    table += "</table>"

    $(element) . html (table)

}

//
// Process all divs of class "chess-board"
//
function all_chess_boards () {
    $("div.chess-board") . each ((i, e) => {chess_board (e)})
}

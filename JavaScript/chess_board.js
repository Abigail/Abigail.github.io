//
// Display chess board for divs of class "chess-board"
//

window . addEventListener ("load", all_chess_boards)

//
// Map a character (or short string) to a chess piece
//
function char_to_piece (char) {
    if (char == "K") {return "&#x2654;"}
    if (char == "Q") {return "&#x2655;"}
    if (char == "R") {return "&#x2656;"}
    if (char == "B") {return "&#x2657;"}
    if (char == "N") {return "&#x2658;"}
    if (char == "P") {return "&#x2659;"}
    if (char == "k") {return "&#x265A;"}
    if (char == "q") {return "&#x265B;"}
    if (char == "r") {return "&#x265C;"}
    if (char == "b") {return "&#x265D;"}
    if (char == "n") {return "&#x265E;"}
    if (char == "p") {return "&#x265F;"}
    //
    // Default
    //
    return "&nbsp;"
}

//
// Create a chess board diagram
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
            table += "<td><span class = 'chess-piece'>" +
                      char_to_piece (cell) + "</span></td>"
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

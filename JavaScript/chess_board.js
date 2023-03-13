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
    let size = $(element) . attr ("data-size")
    let fen  = $(element) . attr ("data-fen")
    let [position, active_color, castling, en_passant,
         half_move_clock, fullmove_number] = fen . split (" ")
    console.log ("Doing fen: " + fen)
    console.log ("Doing position: " + position)
}

//
// Process all divs of class "chess-board"
//
function all_chess_boards () {
    $("div.chess-board") . each ((i, e) => {chess_board (e)})
}

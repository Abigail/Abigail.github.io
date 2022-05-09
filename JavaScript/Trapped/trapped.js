$(window) . on ("load", () => {
    $("div.trapped") . each ((i, e) => {
        set_up (e)
    })
})

function set_up (element) {
    let piece    = $(element) . data ("piece")
    let board_id = "board-" + piece
    let info_id  = "info-"  + piece
    $(element) . html (`<div class = 'board' id = '${board_id}'></div>` +
                       `<div class = 'info'  id = '${info_id}' ></div>`)
    let trapped = new Trapped ({piece: piece})
        trapped . create_board ()
}



class Trapped {
    //
    // Construct a board to display the movement of a chess piece
    //
    constructor (args = {}) {
        this . piece  = args . piece
        this . add_to = "div#board-" + this . piece
        this . id     = "svg-"       + this . piece
        this . size   =  5         // For an 11 x 11 grid

        return this
    }

    create_board (args = {}) {
        let size          = this . size
        let viewbox_min_x = - (size + .5)
        let viewbox_min_y = - (size + .5)
        let viewbox_max_x =   (size + .5)
        let viewbox_max_y =   (size + .5)

        console . log (this . add_to)
        console . log ($(this . add_to))

        let board = SVG () . addTo   (this . add_to)
                           . id      (this . id)
                           . size    ('100%', '100%')
                           . viewbox (viewbox_min_x, viewbox_min_y,
                                      viewbox_max_x - viewbox_min_x,
                                      viewbox_max_y - viewbox_min_y)
                           . attr    ({preserveAspectRatio: "xMaxYMin meet"})

         this . board = board

         this . make_dots ()

         return this
    }

    make_dots (args = {}) {
        let board = this . board
        for (let row = - this . size; row <= this . size; row ++) {
            for (let col = - this . size; col <= this . size; col ++) {
                board . circle   (0.1)
                      . cx       (col)
                      . cy       (row)
                      . addClass ("small-dot")
                      . id       (`dot-${row}-${col}`)
            }
        }
    }
}

$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    $("div.movement") . each ((i, e) => {
        new Movement ({element: e, piece: file})
    })
})


let MOV_SIZE   = 50     // Height/width of square

class Movement {

    constructor (args = {}) {
        let element = args . element
        if (!element) {
            return
        }

        //
        // Find the size of board. It ought to be a rectangle
        //
        let description = $(element)  . text ()
        $(element) . html ("")
        let board_info  = description . split  ("\n")
                                      . filter ((line) => line . match (/\S/))
                                      . map    ((line) => line . split (" "))

        this . rows = board_info     . length
        this . cols = board_info [0] . length

        this . create_board ({addTo: element})
        this . create_grid  ()

        board_info . forEach ((line, row) => {
            line . forEach ((field, col) => {
                if (field == "S") {
                    this . place_piece ({row: row, col: col,
                                         piece: args . piece})
                }
                if (field == '*') {
                    this . place_destination ({row: row, col: col})
                }
            })
        })

    }

    cell_to_coord (row, col) {
        //
        // Coordinates of the middle of the cell
        //
        return [this . inner_left + (col + .5) * MOV_SIZE,
                this . inner_top  + (row + .5) * MOV_SIZE]
    }

    //
    // Initialize the movement board
    //
    create_board (args = {}) {
        let rows  = this . rows
        let cols  = this . cols
        let h     = rows * MOV_SIZE
        let w     = cols * MOV_SIZE

        this . inner_height =  h    // In pixels
        this . inner_width  =  w    // In pixels
        this . inner_top    = -h / 2
        this . inner_left   = -w / 2
        this . inner_bottom =  h / 2
        this . inner_right  =  w / 2

        let board = SVG () . addTo   ("div.movement")
                           . size    ( w, h)
                           . viewbox (-w / 2, -h / 2, w, h)

        this . board = board
        return this
    }

    //
    // Create the grid
    //
    create_grid (args = {}) {
        let board = this . board
        let cols  = this . cols
        let rows  = this . rows

        //
        // Create outer edge
        //
        board . rect (cols * MOV_SIZE, rows * MOV_SIZE)
              . stroke ({color: '#000', width: 4})
              . fill   ({color: '#fff', opacity: 0})
              . center (0, 0)

        //
        // Create vertical lines
        //
        for (let c = 0; c < this . cols - 1; c ++) {
            let x_min = this  . inner_left + (c + 1) * MOV_SIZE
            let x_max = this  . inner_left + (c + 1) * MOV_SIZE
            let y_min = this  . inner_top
            let y_max = this  . inner_bottom
            let line  = board . line (x_min, y_min, x_max, y_max)
                              . stroke ({color: '#000', width: 2})
        }

        //
        // Create horizontal lines
        //
        for (let r = 0; r < this . rows - 1; r ++) {
            let x_min = this  . inner_left
            let x_max = this  . inner_right
            let y_min = this  . inner_top + (r + 1) * MOV_SIZE
            let y_max = this  . inner_top + (r + 1) * MOV_SIZE
            let line  = board . line (x_min, y_min, x_max, y_max)
                              . stroke ({color: '#000', width: 2})
        }

        return this
    }


    //
    // Place the piece of which we show the movement
    //
    place_piece (args = {}) {
        let row   = args . row
        let col   = args . col
        let piece = args . piece

        let group = this . board . group ()

        let info  = PIECE_SVG [piece]

        group . svg (info . svg)
        group . center (... this . cell_to_coord (row, col))
        if (info . scale) {
            group . scale (info . scale)
        }

        return this
    }

    place_destination (args = {}) {
        let row   = args . row
        let col   = args . col

        this . board . circle (35)
                     . fill   ('black')
                     . center (... this . cell_to_coord (row, col))
    }
}

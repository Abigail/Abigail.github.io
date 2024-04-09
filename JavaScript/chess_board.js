//
// Displaying a chess board
//

class Chess_Board {
    constructor (args = {}) {
        this . size        = args . size || 8
        this . square_size = 100
        this . margin      = this . square_size
        this . id          = "chess"
        this . add_to      = args . add_to || 'div.svg-box'

        return this
    }

    //
    // Create the initial SVG image
    //
    create_board (args = {}) {
        let square_size = this . square_size
        let width       = this . size
        let height      = this . size

        //
        // Calculate the parameters for the viewbox.
        //
        let viewbox_min_x  =  0
        let viewbox_min_y  =  0
        let viewbox_width  =  (width  +  2) * square_size
        let viewbox_height =  (height +  2) * square_size
                
        //
        // Create the (empty) SVG image, and place it in
        // the relevant container.
        //
        let board = SVG () . addTo   (this . add_to)
                           . id      (this . id)
                           . size    ('100%', '100%')
                           . viewbox (viewbox_min_x, viewbox_min_y,
                                      viewbox_width, viewbox_height)
                           . attr    ({preserveAspectRatio: "xMaxYMin meet"})

        this . board = board

        return this
    }

    draw (args = {}) {
        this . create_board (args)

        let size        = this . size
        let square_size = this . square_size
        let board       = this . board
        //
        // Create the squares
        //
        for (let row = 1; row <= size; row ++) {
            for (let col = 1; col <= size; col ++) {
                let id_name  = row + "-" + col
                let odd_even = (row + col) % 2 ? "even" : "odd"
                let field    = board . rect     (square_size,  square_size)
                                     . cx       ((col + 0.5) * square_size)
                                     . cy       ((row + 0.5) * square_size)
                                     . id       (id_name)
                                     . addClass (odd_even)
            }
        }
    }

    //
    // Place a text on the grid, given row and column.
    // Return the SVG object.
    // If row == 0, or col == 0, or row == size + 1 or col == size + 1,
    // the text is placed in the margin.
    //
    place_text (args = {}) {
        let row   = args ["row"]
        let col   = args ["col"]
        let text  = args ["text"]
        let type  = args ["type"] || ""
        let dy    = args ["dy"]   || 0.2

        let off_x = 0
        let off_y = 0

        let square_size = this . square_size

        if (text == "Q") {
            text = "\u2655"
        }
        if (text == "x") {
            text = "\u2716"
        }
        if (text == "o") {
            text = "\u03BF"
        }
        if (text == "bullet") {
            text = "\u29BF";
        }

        let plain = this . board
                         . plain (text)
                         . attr  ({x: (off_x + col + 0.5)      * square_size,
                                   y: (off_y + row + 0.5 + dy) * square_size,
                                   "text-anchor": "middle"})

        if (args ["class"]) {
            plain . addClass (args ["class"])
        }
        return (plain)
    }

}

//
// Displaying Sudokus and variants
//

class Sudoku {
    //
    // Construct a sudoku puzzle. We take the following options:
    //
    //   - size:    Size of the board. Defaults to 9 for a 9 x 9 board.
    //   - add_to   Class or ID of HTML element to add the SVG image to.
    //
    constructor (args = {}) {
        this . size      = args . size   || 9
        this . add_to    = args . add_to || 'div.svg-box'
        this . rect_size = 100
        this . id        = "sudoku"
    }

    //
    // Create the initial SVG image
    //
    create_sudoku (args = {}) {
        let rect_size = this . rect_size
        let width     = this . size
        let height    = this . size

        //
        // Calculate the parameters for the viewbox.
        //
   //   let viewbox_min_x  =           -.5  * rect_size;
   //   let viewbox_min_y  =           -.5  * rect_size;
   //   let viewbox_width  =  (width  +  1) * rect_size;
   //   let viewbox_height =  (height +  1) * rect_size;

        let viewbox_min_x  =  0
        let viewbox_min_y  =  0
        let viewbox_width  =  (width  +  1) * rect_size
        let viewbox_height =  (height +  1) * rect_size
                
        //
        // Create the (empty) SVG image, and place it in
        // the relevant container.
        //
        let sudoku = SVG () . addTo   (this . add_to)
                            . id      (this . id)
                            . size    ('100%', '100%')
                            . viewbox (viewbox_min_x, viewbox_min_y,
                                       viewbox_width, viewbox_height)
                                       // xMaxYMin meet ?
                         // . attr    ({preserveAspectRatio: "xMidYMid meet"})
                            . attr    ({preserveAspectRatio: "xMaxYMin meet"})

        this . sudoku = sudoku
        console . log ("Created sudoku")
    }

    //
    // Draw the empty board
    //
    draw (args = {}) {
        this . create_sudoku (args)

        let sudoku    = this . sudoku
        let rect_size = this . rect_size
        let size      = this . size

        //
        // Create the squares
        //
        let x, y
        for (x = 1; x <= size; x ++) {
            for (y = 1; y <= size; y ++) {
                let id     = "R" + x . toString () + "C" + y . toString ()
                let square = sudoku . rect     (rect_size, rect_size)
                                    . cx       (x * rect_size)
                                    . cy       (y * rect_size)
                                    . id       (id)
                                    . fill     ("#fff")
                                    . stroke   ({color: "#000", width: 2})
                                    . addClass ("sudoku-square")
            }
        }
    }
}


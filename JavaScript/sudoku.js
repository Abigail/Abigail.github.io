//
// Displaying Sudokus and variants
//

//
// Helper functions
//

//
// Return type of object
//
function find_type (obj) {
    if (obj == null) {
        return (obj + '') . toLowerCase ()
    }
    let deep_type = Object . prototype . toString . call (obj)
                           . slice (8, -1) . toLowerCase ()
    if (deep_type === 'generatorfunction') {
        return 'function'
    }
    return deep_type . match
        (/^(array|bigint|date|error|function|generator|regexp|symbol)$/)
        ? deep_type
        : (typeof obj === 'object' || typeof obj === 'function')
                        ? 'object'
                        : typeof obj
}

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
        this . margin    =  50  // rect_size / 2
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
                            . attr    ({preserveAspectRatio: "xMaxYMin meet"})

        this . sudoku = sudoku
    }

    //
    // Draw the empty board
    //
    draw (args = {}) {
        this . create_sudoku (args)

        let sudoku    = this . sudoku
        let rect_size = this . rect_size
        let margin    = this . margin
        let size      = this . size
        let box_size  = Math . sqrt (size)

        //
        // Create the squares
        //
        for (let row = 1; row <= size; row ++) {
            for (let col = 1; col <= size; col ++) {
                let id_name     = Sudoku . coord_to_id (row, col)
                let house = box_size * Math . floor ((row - 1) / box_size) +
                                       Math . floor ((col - 1) / box_size) + 1
                let row_class   = `R${row}`
                let col_class   = `C${col}`
                let house_class = `H${house}`
                let rect = sudoku . rect     (rect_size, rect_size)
                                  . cx       (col * rect_size)
                                  . cy       (row * rect_size)
                                  . id       (id_name)
                                  . addClass (row_class)
                                  . addClass (col_class)
                                  . addClass (house_class)
            }
        }
        
        //
        // Create the grid lines
        //

        let x_min = margin
        let y_min = margin
        let x_max = margin + size * rect_size
        let y_max = margin + size * rect_size

        let border = sudoku . path (`M ${x_min} ${y_min} H ${x_max} ` +
                                             `V ${y_max} H ${x_min} Z`)
                            . addClass ("border")

        //
        // Vertical lines
        //
        let c = 1
        for (let x = x_min; x <= x_max; x += rect_size) {
            if (x == x_min || x == x_max) {
                continue
            }
            let line = sudoku . line (x, y_min, x, y_max)
            if (c % box_size == 0) {
                line . addClass ("boundary")
            }
            c ++
        }

        //
        // Horizontal lines
        //
        c = 1
        for (let y = y_min; y <= y_max; y += rect_size) {
            if (y == y_min || y == y_max) {
                continue
            }
            let line = sudoku . line (x_min, y, x_max, y)
            if (c % box_size == 0) {
                line . addClass ("boundary")
            }
            c ++
        }
    }


    //
    // Given a pair of coordinates (1-based), return the row/column id
    //
    static coord_to_id (row, col) {
        return "R" + row . toString () + "C" + col . toString ()
    }

    //
    // Given an id, return the row/column (1-based)
    //
    static id_to_coord (id) {
        return [... id . matchAll (/[0-9]+/g)] . map (x => + x)
    }


    //
    // Given a set of clues in some form, normalize them
    //
    set_clues (clues) {
        if (!clues) {
            return
        }

        let clue_type = find_type (clues);
        let out  = {}

        if (clue_type === 'array') {
            //
            // For now, assume an array of number. '0' means no clue.
            //
            for (let x = 0; x < this . size; x ++) {
                for (let y = 0; y < this . size; y ++) {
                    let val = clues [x] [y]
                    if (val > 0) {
                        let id   = Sudoku . coord_to_id (x + 1, y + 1);
                        out [id] = val
                    }
                }
            }
        }

        if (clue_type === 'object') {
            //
            // Assume it's of the form {RxCy => val}, with val > 0.
            //
            out = clues
        }

        this . clues = out
    }


    draw_clues (args = {}) {
        this . set_clues (args ["clues"])
        let clues     = this . clues
        let rect_size = this . rect_size
        if (!clues) {
            return
        }

        for (const id in clues) {
            let val        = clues [id]
            let [row, col] = Sudoku . id_to_coord (id)
            let plain      = this . sudoku
                                  . plain (val . toString ())
                                  . attr  ({x: (col)       * rect_size,
                                            y: (row + 0.2) * rect_size,
                                           "text-anchor": "middle"})
                                  . addClass ("clue")
        }
    }
}


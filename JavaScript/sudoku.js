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

const HL_CLASS     = "highlight"
const RENBAN_CLASS = "renban"
const NRC          = ["R2C2", "R2C3", "R2C4",    "R2C6", "R2C7", "R2C8",
                      "R3C2", "R3C3", "R3C4",    "R3C6", "R3C7", "R3C8",
                      "R4C2", "R4C3", "R4C4",    "R4C6", "R4C7", "R4C8",
                      "R6C2", "R6C3", "R6C4",    "R6C6", "R6C7", "R6C8",
                      "R7C2", "R7C3", "R7C4",    "R7C6", "R7C7", "R7C8",
                      "R8C2", "R8C3", "R8C4",    "R8C6", "R8C7", "R8C8"]
const ASTERISK     = ["R3C3", "R2C5", "R3C7",
                      "R5C2", "R5C5", "R5C8",
                      "R7C3", "R8C5", "R7C7"]
const GIRANDOLA    = ["R1C1", "R2C5", "R1C9",
                      "R5C2", "R5C5", "R5C8",
                      "R9C1", "R8C5", "R9C9"]
const CENTER_DOT   = ["R2C2", "R2C5", "R2C8",
                      "R5C2", "R5C5", "R5C8",
                      "R8C2", "R8C5", "R8C8"]

class Sudoku {
    //
    // Some constants to be used inside the class
    //

    //
    // Construct a sudoku puzzle. We take the following options:
    //
    //   - size:    Size of the board. Defaults to 9 for a 9 x 9 board.
    //   - add_to   Class or ID of HTML element to add the SVG image to.
    //
    constructor (args = {}) {
        this . size       = args . size   || 9
        this . add_to     = args . add_to || 'div.svg-box'
        this . rect_size  = 100
        this . margin     = this . rect_size
        this . id         = "sudoku"
        this . nrc        = args . nrc
        this . girandola  = args . girandola
        this . asterisk   = args . asterisk
        this . center_dot = args . center_dot

        return this
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
        let viewbox_width  =  (width  +  2) * rect_size
        let viewbox_height =  (height +  2) * rect_size
                
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

        return this
    }

    draw_houses (args = {}) {
        let set = args ["set"]
        if (!set) {
            return
        }
        let rect_size  = this . rect_size
        let house_size = rect_size * 0.7
        let class_name = args ["class"] || "house"
        set . forEach ((id) => {
            let [row, col] =  Sudoku . id_to_coord (id)
            let rect = this . sudoku . rect       (house_size, house_size)
                                     . cx         ((col + 0.5) * rect_size)
                                     . cy         ((row + 0.5) * rect_size)
                                     . id         (id)
                                     . addClass   (class_name)
        })

        return this
    }

    //
    // Draw the empty board
    //
    draw (args = {}) {
        this . create_sudoku (args)

        let sudoku     = this . sudoku
        let rect_size  = this . rect_size
        let margin     = this . margin
        let size       = this . size
        let box_width  = Math . ceil  (Math . sqrt (size))
        let box_height = Math . floor (Math . sqrt (size))

        //
        // Create the squares
        //
        for (let row = 1; row <= size; row ++) {
            for (let col = 1; col <= size; col ++) {
                let id_name     = Sudoku . coord_to_id (row, col)
                let box = box_height * Math . floor ((row - 1) / box_height) +
                                       Math . floor ((col - 1) / box_width) + 1
                let row_class = `R${row}`
                let col_class = `C${col}`
                let box_class = `B${box}`
                let rect = sudoku . rect     (rect_size, rect_size)
                                  . cx       ((col + 0.5) * rect_size)
                                  . cy       ((row + 0.5) * rect_size)
                                  . id       (id_name)
                                  . addClass (row_class)
                                  . addClass (col_class)
                                  . addClass (box_class)
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
            if (c % box_width == 0) {
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
            if (c % box_height == 0) {
                line . addClass ("boundary")
            }
            c ++
        }

        //
        // Add houses
        //
        if (this . nrc) {
            this . draw_houses ({... args, set: NRC})
        }
        if (this . girandola) {
            this . draw_houses ({... args, set: GIRANDOLA})
        }
        if (this . asterisk) {
            this . draw_houses ({... args, set: ASTERISK})
        }
        if (this . center_dot) {
            this . draw_houses ({... args, set: CENTER_DOT})
        }

        //
        // Draw the clues
        //
        this . draw_clues (args)

        //
        // Draw renban lines (noop if no renban lines have been set)
        //
        this . draw_renban (args)

        return this
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
    // Given a set with coordinates and values, normalize them into
    // an object mapping "RxCy" to values.
    //
    normalize_set (set) {
        let set_type = find_type (set);
        let out  = {}

        if (set_type === 'array') {
            //
            // For now, assume an array of number. '0' means no clue.
            //
            for (let x = 0; x < this . size; x ++) {
                for (let y = 0; y < this . size; y ++) {
                    let val = set [x] [y] . toString ()
                    if (val != "0" && val != ".") {
                        let id   = Sudoku . coord_to_id (x + 1, y + 1);
                        out [id] = val
                    }
                }
            }
        }

        if (set_type === 'string') {
            let rows = set . split ("\n")
                           . filter (row => row . match (/\S/))
            for (let r = 0; r < rows . length; r ++) {
                let cols = rows [r] . split ("")
                                    . filter (cell => cell . match (/\S/))
                for (let c = 0; c < cols . length; c ++) {
                    let val = cols [c] . toString ()
                    if (val != "0" && val != ".") {
                        let id = Sudoku . coord_to_id (r + 1, c + 1)
                        out [id] = val
                    }
                }
            }
        }

        if (set_type === 'object') {
            //
            // Assume it's of the form {RxCy => val};
            // filter out values which are 0 or ".", and make sure
            // we all have strings.
            //
            for (id in set) {
                let val = set [id] . toString ()
                if (val != "0" && val != ".") {
                    out [id] = val
                }
            }
        }

        return out
    }

    //
    // Given a set of clues in some form, normalize them
    //
    set_clues (args = {}) {
        let clues = args ["clues"]

        if (!clues) {
            return
        }

        this . clues = this . normalize_set (clues)

        return this
    }

    //
    // Return true if the given cell is a clue
    //
    is_clue (args = {}) {
        let cell = args ["cell"];
        return cell && cell in this . clues
    }


    //
    // Set a set of solutions
    //
    set_solution (args = {}) {
        let solution = args ["solution"]

        if (!solution) {
            return this
        }

        this . solution = this . normalize_set (solution)
        //
        // Remove any element which is a clue
        //
        for (const cell in this . solution) {
            if (this . is_clue ({cell: cell})) {
                delete this . solution [cell]
            }
        }

        return this
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
        let dy    = args ["dy"] || 0.2

        let rect_size = this . rect_size

        let plain = this . sudoku
                         . plain (text)
                         . attr  ({x: (col + 0.5)      * rect_size,
                                   y: (row + 0.5 + dy) * rect_size,
                                   "text-anchor": "middle"})

        return (plain)
    }


    //
    // Draw a set of numbers
    //
    draw_set (args = {}) {
        let set        = args ["set"]
        let class_name = args ["class"]
        let delay      = args ["delay"] || 0

        if (!set) {
            return this
        }

        let rect_size = this . rect_size

        let d = delay
        for (const id in set) {
            let val        = set [id]
            let [row, col] = Sudoku . id_to_coord (id)
            setTimeout (() => {
                this . place_text ({row:  row,
                                    col:  col,
                                    text: val . toString ()})
                     . addClass (class_name)
            }, d)
            d += delay
        }

        return this
    }

    //
    // Draw the clues
    //
    draw_clues (args = {}) {
        this . set_clues (args)
        this . draw_set  ({... args,
                           set:    this . clues,
                           class: "clue"})
        return this
    }

    //
    // Draw the solution
    //
    draw_solution (args = {}) {
        this . set_solution (args)
        this . draw_set     ({... args,
                              set: this . solution,
                              class: "solution"})
        return this
    }


    //
    // Draw the row names in the left margin
    //
    draw_row_names (args = {}) {
        for (let row = 1; row <= this . size; row ++) {
            this . place_text ({text: "R" + row . toString (),
                                row: row,
                                col: 0})
                 . addClass ("row-number")
        }
        return this
    }

    //
    // Draw the column names in the top margin
    //
    draw_col_names (args = {}) {
        for (let col = 1; col <= this . size; col ++) {
            this . place_text ({text: "C" + col . toString (),
                                col: col,
                                row: 0})
                 . addClass ("col-number")
        }
        return this
    }

    //
    // Draw both the row and column names in the margin
    //
    draw_row_col_names (args = {}) {
        this . draw_row_names ()
        this . draw_col_names ()
        return this
    }

    //
    // Draw a cell number, based on a row and column
    //
    draw_cell_number (args = {}) {
        let row = args ["row"]
        let col = args ["col"]
        let id  = Sudoku . coord_to_id (row, col)
        this . place_text ({text: id,
                            row: row,
                            col: col,
                            dy: 0.12})
             . addClass ("cell-number")
    }

    //
    // Draw all cell numbers
    //
    draw_cell_numbers (args = {}) {
        for (let row = 1; row <= this . size; row ++) {
            for (let col = 1; col <= this . size; col ++) {
                this . draw_cell_number ({row: row, col: col})
            }
        }
        return this
    }


    //
    // Unhighlight any of the houses, and stop the loop
    //
    clear_highlights () {
        clearTimeout (this . highlight_timeout_id)
        $("." + HL_CLASS) . removeClass (HL_CLASS)
        return this
    }

    //
    // Highlight houses of a specific type, switching to a 
    // different house of the same type every 2 seconds
    //
    highlight_houses (args = {}) {
        let type        = args ["type"]
        let previous_id = args ["previous_id"] ||    0
        let delay       = args ["delay"]       || 2000

        this . clear_highlights ()

        let next_id = previous_id
        while (next_id == previous_id) {
            next_id = 1 + Math . floor (Math . random () * 9)
        }
        let house_name = type + next_id

        $("." + house_name) . addClass (HL_CLASS)

        let sudoku = this

        this . highlight_timeout_id =
               setTimeout (() => {sudoku . highlight_houses
                    ({
                        type:        type,
                        previous_id: next_id
                    })},
                    delay)
        return this
    }

    //
    // Highlight a given house or cell (based on a CSS selector)
    // Does *NOT* clear existing highlights.
    //
    highlight_house (args = {}) {
        let selector = args ["selector"]
        let first = selector . substring (0, 1)
        if (first != "#" && first != ".") {
            selector = "." + selector
        }
        $(selector) . addClass (HL_CLASS)
        return this
    }

    //
    // Set a renban line
    //
    set_renban (args = {}) {
        if (args ["renban"]) {
            if (!this . renbans) {
                this . renbans = []
            }
            this . renbans . push (args ["renban"])
        }
        return this
    }


    //
    // Draw a polyline
    //
    draw_polyline (args = {}) {
        let rect_size = this . rect_size
        let coords = args ["polyline"] . map ((cell)  => {
            let [r, c] =  Sudoku . id_to_coord (cell)
            r = (r + 0.5) * rect_size
            c = (c + 0.5) * rect_size
            return [c, r]
        })
        let polyline = this . sudoku . polyline (coords)
        if (args ["class"]) {
            polyline . addClass (args ["class"])
        }
        return this
    }

    //
    // Draw renban lines
    //
    draw_renban (args = {}) {
        if (this . renbans) {
            this . renbans . forEach ((renban) => {
                this . draw_polyline ({polyline: renban,
                                       class:    RENBAN_CLASS})
            })
        }
        return this
    }
}


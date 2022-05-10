//
// Fill the "trapped" divs
//
$(window) . on ("load", () => {
    $("div.trapped") . each ((i, e) => {
        set_up (e)
    })
})

//
// States a board can be in
//
const START   = 0
const RUNNING = 1
const PAUSED  = 2
const TRAPPED = 3

//
// Helper functions to find ids of various elements based on
// the name of the chess piece
//
function make_id   (type, piece_name) {return `${type}-${piece_name}`}
function board_id  (piece_name)       {return make_id ("board",  piece_name)}
function info_id   (piece_name)       {return make_id ("info",   piece_name)}
function button_id (piece_name)       {return make_id ("button", piece_name)}
function svg_id    (piece_name)       {return make_id ("svg",    piece_name)}

//
// Create the two responsive divs inside any "trapped" divs.
//
function set_up (element) {
    let piece_name  = $(element) . data ("pieceName")
    $(element) . html (
        `<div class = 'board' id = '${board_id (piece_name)}'></div>` +
        `<div class = 'info'  id = '${info_id  (piece_name)}' ></div>`
    )

    window [piece_name] = {}
    set_up_info (piece_name)

}

//
// Populate the right div with some form elements.
//
function set_up_info (piece_name) {
    let info = $("div#" + info_id (piece_name))
    let info_table =
        `<table class = 'info_table'>` +
            `<tr><td>Step</td><td id = 'steps-${piece_name}'></td></tr>`       +
            `<tr><td>Max</td><td id = 'max-${piece_name}'></td></tr>`          +
            `<tr><td>Bounding box</td><td id = 'box-${piece_name}'></td></tr>` +
        `</table><p>`
    info . html (info_table +
                 `<button type = 'button' id = '${button_id (piece_name)}' ` +
                 `onclick = 'toggle ("${piece_name}")'>Run</button><br>`)
}

//
// Create the SVG image when the "Run" button is clicked, and start
// moving the piece
//
function toggle (piece_name) {
    let info   = window [piece_name] 
    let button = $(`#${button_id (piece_name)}`)

    if (info . running) {
        info . running = false
        $(button) . html ("Run")
    }
    else {
        let board_id  = "board-"  + piece_name
        $(`div#${board_id}`) . empty ()
        info . running = true

        let trapped = new Spiral ({piece_name: piece_name})
            trapped . create_board ()
                    . place ()
                    . move  ()

        $(button) . html ("Stop")

        info . trapped = trapped
    }
}


class Trapped {
    //
    // Construct a board to display the movement of a chess piece
    //
    constructor (args = {}) {
        this . piece_name  = args . piece_name
        this . add_to      = "div#" + board_id (this . piece_name)
        this . id          =          svg_id   (this . piece_name)
        this . size        =  5    // For an 11 x 11 grid

        this . visited     = {}    // Values piece has been
        this . min_row     = 0     // Bounding box where pieces has been
        this . min_col     = 0
        this . max_row     = 0
        this . max_col     = 0
        this . max_value   = 0

        this . steps       = 0

        this . piece       = new Knight

        return this
    }

    create_board (args = {}) {
        let size          = this . size
        let viewbox_min_x = - (size + .5)
        let viewbox_min_y = - (size + .5)
        let viewbox_max_x =   (size + .5)
        let viewbox_max_y =   (size + .5)

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

    //
    // Set the viewport given the current size
    //
    set_viewport () {
        let size          = this . size
        let viewbox_min_x = - (size + .5)
        let viewbox_min_y = - (size + .5)
        let viewbox_max_x =   (size + .5)
        let viewbox_max_y =   (size + .5)
        this . board . viewbox (viewbox_min_x, viewbox_min_y,
                                viewbox_max_x - viewbox_min_x,
                                viewbox_max_y - viewbox_min_y)
        return this
    }


    //
    // Make a tiny dot give some coordinates
    //
    make_dot (row, col) {
        this . board . circle   (0.1)
                     . cx       (col)
                     . cy       (row)
                     . addClass ("unvisited-dot")
                     . id       (`dot-${row}-${col}`)
    }

    visit_dot (row, col) {
        $(`#dot-${row}-${col}`) . removeClass ("unvisited-dot")
        $(`#dot-${row}-${col}`) .    addClass (  "visited-dot")
    }

    //
    // Create the initial set of dots
    //
    make_dots (args = {}) {
        let board = this . board
        for (let row = - this . size; row <= this . size; row ++) {
            for (let col = - this . size; col <= this . size; col ++) {
                this . make_dot (row, col)
            }
        }
    }

    //
    // Scale the board: add a new set of dots, and adjust the viewport
    //
    scale (args = {}) {
        let delta = args . delta || 1
        let size  = this . size + delta
        let board = this . board;

        //
        // Top rows
        //
        for (let row = - size; row < - size + delta; row ++) {
            for (let col = - size; col <= size; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Bottom rows
        //
        for (let row = size; row > size - delta; row --) {
            for (let col = - size; col <= size; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Left columns
        //
        for (let row = - size + delta; row <= size - delta; row ++) {
            for (let col = - size; col < - size + delta; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Right columns
        //
        for (let row = - size + delta; row <= size - delta; row ++) {
            for (let col = size; col > size - delta; col --) {
                this . make_dot (row, col)
            }
        }
        this . size = size
        this . set_viewport ()
    }

    //
    // Update the info fields
    //
    update_info () {
        let piece_name = this . piece_name
        $(`#steps-${piece_name}`) . html (this . steps)
        $(`#max-${piece_name}`)   . html (this . max_value)
        $(`#box-${piece_name}`)   . html (
            `${this . max_row - this . min_row + 1} x ` +
            `${this . max_col - this . min_col + 1}`
        )
    }

    //
    // Place the piece on the given value (defaults to 1)
    //
    place (args = {}) {
        let value      = args . value || 1
        let [row, col] = this . to_coordinates (value)
        while (Math . abs (row) > this . size ||
               Math . abs (col) > this . size) {
            this . scale ()
        }
        this . visit_dot (row, col)
        this . current = value
        this . visited [value] = 1

        //
        // Update statistics
        //
        if (value > this . max_value) {this . max_value = value}
        if (row   < this . min_row)   {this . min_row = row}
        if (row   > this . max_row)   {this . max_row = row}
        if (col   < this . min_col)   {this . min_col = col}
        if (col   > this . max_col)   {this . max_col = col}

        return this
    }

    //
    // Move a piece, and kick off the next move (if any)
    //
    move () {
        let moves      = this . piece . moves ()
        let [row, col] = this . to_coordinates (this . current)
        let best       = 0
        let info       = window [this . piece_name]
        moves . forEach ((move) => {
            if (move . type == "step") {
                let new_row = row + move . dr
                let new_col = col + move . dc
                let target  = this . to_value (new_row, new_col)
                if (!(target in this . visited)) {
                    if (best == 0 || target < best) {
                        best = target
                    }
                }
            }
        })

        if (best > 0) {
            let [new_row, new_col] = this . to_coordinates (best)
            this . board . line (col, row, new_col, new_row)
            this . place ({value: best})
            this . steps = this . steps + 1
            if (this . steps < 6000 && info . running) {
                setTimeout (() => {this . move ()}, 750 / this . size)
            }
        }

        this . update_info ()

        return this
    }
}



//
// Various Spirals. Main thing is to provide mappings from
// coordinates to values, and from values to coordinates
//

class Spiral extends Trapped {
    to_value (row, col) {
        let abs_col = Math . abs (col);
        let abs_row = Math . abs (row);
        let max     = abs_col > abs_row ? abs_col : abs_row;
        let base    = Math . pow (2 * max - 1, 2);
      
        return row ==  max ? base + 7 * max + col
             : col == -max ? base + 5 * max + row
             : row == -max ? base + 3 * max - col
             :               base + 1 * max - row;
    } 

    //
    // Takes value, return its row and column
    //
    to_coordinates (value) { 
        let base = Math . ceil  (Math . sqrt (value));
        let ring = Math . floor (base / 2);
        let left = value - Math . pow (2 * ring - 1, 2);

        let col, row;

        if (left <= 2 * ring) {
            col =     ring;
            row =     ring - left;
        }
        else if (left <= 4 * ring) {
            col = 3 * ring - left;
            row =   - ring;
        }
        else if (left <= 6 * ring) {
            col =    - ring;
            row = -5 * ring + left;
        }
        else if (left <= 8 * ring) {
            col = -7 * ring + left;
            row =      ring;
        }

        return [row, col];
    }
}



//
// Chess pieces go here
//
class Piece {
}


class Knight extends Piece {
    //
    // Return a list of moves
    //
    moves () {
        return [{type: "step", dr:  2, dc:  1},
                {type: "step", dr:  2, dc: -1},
                {type: "step", dr: -2, dc:  1},
                {type: "step", dr: -2, dc: -1},
                {type: "step", dr:  1, dc:  2},
                {type: "step", dr:  1, dc: -2},
                {type: "step", dr: -1, dc:  2},
                {type: "step", dr: -1, dc: -2},]
    }
}


class King extends Piece {
    //
    // Return a list of moves
    //
    moves () {
        return [{type: "step", dr:  1, dc:  0},
                {type: "step", dr: -1, dc:  0},
                {type: "step", dr:  0, dc:  1},
                {type: "step", dr:  0, dc: -1},]
    }
}

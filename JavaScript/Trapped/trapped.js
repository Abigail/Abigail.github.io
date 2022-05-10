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
const START   =   0
const RUNNING =   1
const PAUSED  =   2
const TRAPPED =   3
const DEAD    = 999

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
    let info    = $("div#" + info_id (piece_name))
    let id1     = `button-start-${piece_name}`
    let id2     = `button-pause-${piece_name}`
    let button1 = `<button type = 'button' id = '${id1}' ` +
                  `class = 'run start' `                   +
                  `onclick = 'toggle ("${piece_name}", 1)'>Start</button><br>`
    let button2 = `<button type = 'button' id = '${id2}' ` +
                  `class = 'run pause' `                   +
                  `disabled = 'disabled' `                 +
                  `onclick = 'toggle ("${piece_name}", 2)'>Pause</button><br>`

    let info_table = `
        <table class = 'info_table'>
             <tr><td>Step</td>
                 <td colspan = 2 id = 'steps-${piece_name}'></td></tr>
             <tr><td>Max value</td>
                 <td colspan = 2 id = 'max-${piece_name}'></td></tr>
             <tr><td>Bounding box</td>
                 <td colspan = 2 id = 'box-${piece_name}'></td></tr>
             <tr><td>Colour scheme</td>
                 <td colspan = 2>
                    <select id = 'colour-${piece_name}'>
                        <option value = 'none'>None</option>
                        <option value = 'mono' selected>Monochrome</option>
                        <option value = 'rainbow'>Directional</option>
                   </select></td>
                 </td>
             <tr><td>Speed</td>
                 <td><button type = 'button' class = 'speed' 
                      onclick = 'speed ("-", "${piece_name}")'>-</button></td>
                 <td><button type = 'button' class = 'speed' 
                      onclick = 'speed ("+", "${piece_name}")'>+</button></td>
            </tr>
             <tr><td>Stop on step</td>
                 <td colspan = 2><input type = 'text'
                                        id = 'stop-step-${piece_name}'
                                        onchange = 'stop ("${piece_name}")'</td>
            </tr>
             <tr><td>Stop on value</td>
                 <td colspan = 2><input type = 'text'
                                        id = 'stop-value-${piece_name}'
                                        onchange = 'stop ("${piece_name}")'</td>
            </tr>
             <tr><td>Stop on box size</td>
                 <td colspan = 2><input type = 'text'
                                        id = 'stop-box-${piece_name}'
                                        onchange = 'stop ("${piece_name}")'</td>
            </tr>
             <tr><td colspan = 3>${button1}</td></tr>
             <tr><td colspan = 3>${button2}</td></tr>
         </table><p>
    `
    info . html (info_table)
}

//
// Create the SVG image when the "Run" button is clicked, and start
// moving the piece
//
function toggle (piece_name, type) {
    let info   = window [piece_name] 

    if (type == 1) {
        //
        // Kill any existing animation
        //
        if (info . trapped) {
            info . trapped . set_dead ()
        }

        let board_id  = "board-"  + piece_name
        $(`div#${board_id}`) . empty () // Gets rid of any existing SVG

        let trapped = new Spiral ({
            piece_name: piece_name,
            colour_scheme: $(`#colour-${piece_name}`) . val ()
        })
        info . trapped = trapped

        trapped . create_board ()
                . place        ()
                . set_running  ()

        stop (piece_name)

        return
    }

    let trapped = info . trapped

    if (trapped . state == RUNNING) {
        trapped . set_paused ()
    }
    else {
        if (trapped . state == PAUSED) {
            trapped . set_running ()
        }
    }
}


//
// Increment or decrement the speed of the animation.
// Has not effect when the animation has not started
//
function speed (what, piece_name) {
    let info = window [piece_name]
    if (info . trapped) {
        info . trapped . set_speed (what)
    }
}

//
// Called when changing a stopping criterium
//
function stop (piece_name) {
    let info = window [piece_name]
    if (info . trapped) {
        info . trapped . set_stop ({
            step:  $(`#stop-step-${piece_name}`)  . val (),
            value: $(`#stop-value-${piece_name}`) . val (),
            box:   $(`#stop-box-${piece_name}`)   . val ()
        })
    }
}

function uc_first (str) {
    return str . charAt (0) . toUpperCase () + str . slice (1)
}


class Trapped {
    //
    // Construct a board to display the movement of a chess piece
    //
    constructor (args = {}) {
        this . piece_name    = args . piece_name
        this . colour_scheme = args . colour_scheme

        this . add_to        = "div#" + board_id (this . piece_name)
        this . id            =          svg_id   (this . piece_name)
        this . size          =  5    // For an 11 x 11 grid

        this . visited       = {}    // Values piece has been
        this . min_row       = 0     // Bounding box where pieces has been
        this . min_col       = 0
        this . max_row       = 0
        this . max_col       = 0
        this . max_value     = 0

        this . steps         = 0
        this . speed         = 750   // Time between moves is speed / size

        this . stop_step     = 0
        this . stop_value    = 0
        this . stop_box      = 0

        //
        // Get the piece from the piece_name
        //
        let class_name       = uc_first (this . piece_name)
        this . piece         = eval (`new ${class_name} ()`)

        this . state         = START

        return this
    }

    //
    // Set stopping criteria
    //
    set_stop (args = {}) {
        this . stop_step  = 0
        this . stop_value = 0
        this . stop_box   = 0

        if (args . step && !isNaN (args . step)) {
            this . stop_step = + args . step
        }
        if (args . value && !isNaN (args . value)) {
            this . stop_value = + args . value
        }
        if (args . box && !isNaN (args . box)) {
            this . stop_box = + args . box
        }
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
                     . addClass (`dot-${row}-${col}`)
    }

    //
    // Turn a dot into a visited dot
    //
    visit_dot (row, col) {
        let svg_id = this . id
        $(`#${svg_id} .dot-${row}-${col}`) . removeClass ("unvisited-dot")
        $(`#${svg_id} .dot-${row}-${col}`) .    addClass (  "visited-dot")
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
        let step_val   = this . steps
        if (this . state == TRAPPED) {
            step_val += "<span class = 'trapped'>Trapped!</span>"
        }
        $(`#steps-${piece_name}`) . html (step_val)
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
    // Create a line (if any) between the previous and next positions
    //
    new_line (row, col, new_row, new_col) {
        if (this . colour_scheme == "none") {
            return
        }
        let line = this . board . line (col, row, new_col, new_row)
        if (this . colour_scheme == "mono") {
            line . stroke ({color: "green"})
            return
        }
        if (this . colour_scheme == "rainbow") {
            //
            // Find the angle (0 - 360) the line makes
            //
            let angle = 180 +
                        180 * Math . atan2 (new_row - row, new_col - col) /
                              Math . PI
            if (angle >= 360) {
                angle = 0
            }

            //
            // Just a test for now
            //
            let red    =  0
            let green  =  0
            let blue   =  0
            if (  0 <= angle && angle <  60) {  // Green increasing
                red   = 255
                green = 255 *      (angle -   0) / 60
                blue  =   0
            }
            if ( 60 <= angle && angle < 120) {  //   Red decreasing
                red   = 255 * (1 - (angle -  60) / 60)
                green = 255
                blue  =   0
            }
            if (120 <= angle && angle < 180) {  // Blue increasing
                red   =   0
                green = 255
                blue  = 255 *      (angle - 120) / 60
            }
            if (180 <= angle && angle < 240) {  // Green decreasing
                red   =   0
                green = 255 * (1 - (angle - 180) / 60)
                blue  = 255
            }
            if (240 <= angle && angle < 300) {  //   Red increasing
                red   = 255 *      (angle - 240) / 60
                green =   0
                blue  = 255
            }
            if (300 <= angle && angle < 360) {  //  Blue decreasing
                red   = 255
                green =   0
                blue  = 255 * (1 - (angle - 300) / 60)
            }

            red   = Math . floor (red)
            green = Math . floor (green)
            blue  = Math . floor (blue)

            let colour = `rgb(${red},${green},${blue})`
            line . stroke ({color: colour})
        }
    }

    //
    // Return true if we may continue
    //
    may_continue () {
        let info = window [this . piece_name]
        if (this . state != RUNNING) {return false}

        let out = true

        if (this . stop_step &&
            this . stop_step < this . steps) {out = false}
        if (this . stop_value &&
            this . stop_value < this . max_value) {out = false}
        if (this . stop_box) {
            if (this . stop_box < this . max_row - this . min_row + 1) {
                out = false
            }
            if (this . stop_box < this . max_col - this . min_col + 1) {
                out = false
            }
        }
        if (!out) {
            this . set_paused ()
        }
        return out
    }



    //
    // Move a piece, and kick off the next move (if any)
    //
    move () {
        if (this . state == DEAD) {
            return
        }
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
            if (move . type == "slide") {
                //
                // We now have multiple options for a single "move".
                // Starting at 'step' size of 1, we find the best
                // sub value until one of the following things happen:
                //   - We find a position which is occupied
                //   - The value increases
                //
                let sub_best = 0
                let prev_val = 0
                let step     = 0
                while (true) {
                    step ++
                    let new_row = row + step * move . dr
                    let new_col = col + step * move . dc
                    let value   = this . to_value (new_row, new_col)
                    if (value in  this . visited) {
                        break
                    }
                    if (prev_val && value > prev_val) {
                        break
                    }
                    if (sub_best == 0 || value < sub_best) {
                        sub_best = value
                    }
                    prev_val = value
                }
                if (best == 0 || sub_best < best) {
                    if (sub_best > 0) {
                        best = sub_best
                    }
                }
            }
        })

        if (best > 0) {
            let [new_row, new_col] = this . to_coordinates (best)
            this . new_line (row, col, new_row, new_col)
            this . place ({value: best})
            this . steps = this . steps + 1
            if (this . may_continue ()) {
                setTimeout (() => {this . move ()}, this . speed / this . size)
            }
        }
        else {
            this . set_trapped ()
        }

        this . update_info ()

        return this
    }

    //
    // Increment or decrement the speed of the animation
    //
    set_speed (what) {
        if (what == '-') {this . speed *= 1.1}
        if (what == '+') {this . speed /= 1.1}
    }

    //
    // Toggle states
    //
    set_state (state) {
        let piece_name = this . piece_name
        let button1    = $(`#button-start-${piece_name}`)
        let button2    = $(`#button-pause-${piece_name}`)

        this . state   = state

        if (state == RUNNING) {
            button1 . html ("Restart")
            button2 . html ("Pause")
            button2 . prop ("disabled", false)
            this    . move ()
        }

        if (state == PAUSED) {
            button2 . html ("Continue")
            button2 . prop ("disabled", false)
        }

        if (state == TRAPPED) {
            button2 . prop ("disabled", true)
        }

        if (state == START) {
            button1 . html ("Start")
            button2 . html ("Pause")
            button2 . prop ("disabled", true)
        }
    }

    set_running () {if (this . state == START)   {this . set_state (RUNNING)}
                    if (this . state == PAUSED)  {this . set_state (RUNNING)}}
    set_paused  () {if (this . state == RUNNING) {this . set_state (PAUSED)}}
    set_trapped () {if (this . state == RUNNING) {this . set_state (TRAPPED)}}
    set_dead    ()                               {this . set_state (DEAD)}

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


class Bishop extends Piece {
    //
    // Return a list of moves
    //
    moves () {
        return [{type: "slide", dr:  1, dc:  1},
                {type: "slide", dr: -1, dc:  1},
                {type: "slide", dr:  1, dc: -1},
                {type: "slide", dr: -1, dc: -1},]
    }
}

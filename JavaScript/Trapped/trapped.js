//
// Fill the "trapped" divs
//
$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    let url_params = new URLSearchParams (window.location.search)
    let piece_name = url_params . get ('piece') || file
    let piece      = new Piece ({piece_name: piece_name})

    $("div.trapped") . each ((i, e) => {
        set_up (e, piece)
    })

    let text = $("body") . html ()
        text = text . replaceAll (/%%PIECE%%/g,
                    `<span class = "piece">${piece . name ()}</span>`)
    $("body") . html (text)
    $("title") . html (piece . name ())
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
function make_id   (type, name) {return `${type}-${name}`}
function board_id  (name)       {return make_id ("board",  name)}
function info_id   (name)       {return make_id ("info",   name)}
function button_id (name)       {return make_id ("button", name)}
function svg_id    (name)       {return make_id ("svg",    name)}

//
// Create the two responsive divs inside any "trapped" divs.
//
function set_up (element, piece) {
    let piece_name = piece . piece_name

    $(element) . html (
        `<div class = 'board' id = '${board_id (piece_name)}'></div>` +
        `<div class = 'info'  id = '${info_id  (piece_name)}' ></div>`
    )

    window [piece_name] = {}
    window [piece_name] . piece = piece

    set_up_info (piece_name, piece)
    init_trapped ({piece: piece, name: piece_name})
}

//
// Create an animation, but do not start it yet
//
function init_trapped (args = {}) {
    let name   = args . name
    let info   = window [name]
    let spiral = args . spiral || info . spiral || "spiral"

    let piece = args . piece || info . piece

    if (info . trapped) {
        info . trapped . set_dead ()    // Make sure we do not continue

        let board_id  = "board-"  + name
        $(`div#${board_id}`) . empty () // Gets rid of any existing SVG
    }

    let c_args = {
        name:          name,
        piece:         piece,
        colour_scheme: $(`#colour-${name}`) . val ()
    }

    let trapped

    if (spiral == "spiral")       {trapped = new Spiral       (c_args)} else
    if (spiral == "wedge_flat")   {trapped = new Wedge_Flat   (c_args)} else
    if (spiral == "wedge_folded") {trapped = new Wedge_Folded (c_args)}

    trapped . create_board ()
            . place        ()
            . set_start    ()

    window [name] . trapped = trapped
    window [name] . spiral  = spiral

    stop (name)
}

//
// Populate the right div with some form elements.
//
let radio_info = {
    spiral:       {name: "Spiral"},
    wedge_folded: {name: "Wedge (Folded)"},
    wedge_flat:   {name: "Wedge (Flat)"},
}
function set_up_info (name, piece) {
    let div     = $("div#" + info_id (name))
    let info    = window [name]
    let id1     = `button-start-${name}`
    let id2     = `button-pause-${name}`
    let button1 = `<button type = 'button' id = '${id1}' `    +
                  `class = 'run start' `                      +
                  `onclick = 'start ("${name}")'>`            +
                  `Start</button><br>`
    let button2 = `<button type = 'button' id = '${id2}' `    +
                  `class = 'run pause' `                      +
                  `disabled = 'disabled' `                    +
                  `onclick = 'pause ("${name}")'>`            +
                  `Pause</button><br>`

    let radio_spiral = ""
    let spiral_types = ["spiral", "wedge_folded", "wedge_flat"]

    spiral_types . forEach ((type, index) => {
        let spiral_name = radio_info [type] ["name"]
        let checked     = ""
        if (index == 0) {
            checked = "checked = 'checked'"
        }
        else {
            radio_spiral += "<tr>"
        }
        radio_spiral +=
            `<td colspan = 3>
                 <input type     = "radio" name = "spiral" value = "${type}"
                        class    = "spiral-${name}"
                        id       = "input_${type}-${name}" ${checked}
                        onchange = "init_trapped ({spiral: '${type}',
                                                   name:   '${name}'})">
                 <label for = "input_${type}-${name}">${spiral_name}</label>
             </td></tr>`
    })


    let info_table = `
        <table class = 'info_table'>
             <tr><th colspan = 4 id = 'title-${name}' class = 'title'>
                 ${piece . name ()}</th></tr>
             <tr><td>Step</td>
                 <td colspan = 3 id = 'steps-${name}'></td></tr>
             <tr><td>Max value</td>
                 <td colspan = 3 id = 'max-${name}'></td></tr>
             <tr><td>Bounding box</td>
                 <td colspan = 3 id = 'box-${name}'></td></tr>
             <tr><td>Density</td>
                 <td colspan = 3 id = 'density-${name}'></td></tr>
             <tr><td rowspan = 3>Spiral type</td>
                 ${radio_spiral}

             <tr><td>Colour scheme</td>
                 <td colspan = 3>
                    <select id = 'colour-${name}'>
                        <option value = 'none'>None</option>
                        <option value = 'mono' selected>Monochrome</option>
                        <option value = 'rainbow'>Directional</option>
                   </select></td>
                 </td>
             <tr><td>Speed</td>
                 <td class = 'minus'><button type = 'button' class = 'speed' 
                      onclick = 'speed ("-", "${name}")'>-</button></td>
                 <td class = 'plus'><button type = 'button' class = 'speed' 
                      onclick = 'speed ("+", "${name}")'>+</button>
                 <td class = 'max'><button type = 'button' class = 'speed' 
                      onclick = 'speed ("M", "${name}")'>Max</button>
                      </td>
            </tr>
             <tr><td>Stop on step</td>
                 <td colspan = 3><input type = 'text'
                                        id = 'stop-step-${name}'
                                        class = 'stop'
                                        onchange = 'stop ("${name}")'</td>
            </tr>
             <tr><td>Stop on value</td>
                 <td colspan = 3><input type = 'text'
                                        id = 'stop-value-${name}'
                                        class = 'stop'
                                        onchange = 'stop ("${name}")'</td>
            </tr>
             <tr><td>Stop on box size</td>
                 <td colspan = 3><input type = 'text'
                                        id = 'stop-box-${name}'
                                        class = 'stop'
                                        onchange = 'stop ("${name}")'</td>
            </tr>
             <tr><td colspan = 4>${button1}</td></tr>
             <tr><td colspan = 4>${button2}</td></tr>
         </table><p>
    `

    div . html (info_table)
}


//
// pause/unpause ()
//
function pause (name) {
    let info = window [name]
    if (!info . trapped) {
        return
    }
    let trapped = info . trapped
    if (trapped . state == RUNNING) {
        trapped . set_paused ()
        return
    }
    if (trapped . state == PAUSED) {
        trapped . set_running ()
        return
    }
}

//
// Start/Reset animation
//
function start (name) {
    let info    = window [name] 

    let trapped = info . trapped

    if (trapped . state == START) {
        trapped . colour_scheme = $(`#colour-${name}`) . val ()
        trapped . set_running ()
    }
    else {
        init_trapped ({name: name})
    }
}


//
// Increment or decrement the speed of the animation.
// Has no effect when the animation has not started
//
function speed (what, name) {
    let info = window [name]
    if (info . trapped) {
        info . trapped . set_speed (what)
    }
}

//
// Called when changing a stopping criterium
//
function stop (name) {
    let info = window [name]
    if (info . trapped) {
        info . trapped . set_stop ({
            step:  $(`#stop-step-${name}`)  . val (),
            value: $(`#stop-value-${name}`) . val (),
            box:   $(`#stop-box-${name}`)   . val ()
        })
    }
}

//
// Upper case the first letter of a string
//
function uc_first (str) {
    return str . charAt (0) . toUpperCase () + str . slice (1)
}

//
// Replace each underscore with a space, and upper case each letter
// of each word in the string
//
function title_case (str) {
    return str . split (/[_\s]+/)
               . map ((word) => uc_first (word))
               . join (' ')
}


//
// Map an angle to a colour
//
function rainbow (angle) {
    let red    =  0
    let green  =  0
    let blue   =  0
    if (  0 <= angle && angle < 120) {  // red -> green
        red   = 255 * (1 - (angle -   0) / 120)
        green = 255 *      (angle -   0) / 120
        blue  =   0
    }
    if (120 <= angle && angle < 240) {  // green -> blue
        red   =   0
        green = 255 * (1 - (angle - 120) / 120)
        blue  = 255 *      (angle - 120) / 120
    }
    if (240 <= angle && angle < 360) {  // blue -> red
        red   = 255 *      (angle - 240) / 120
        green =   0
        blue  = 255 * (1 - (angle - 240) / 120)
    }

    red   = Math . floor (red)
    green = Math . floor (green)
    blue  = Math . floor (blue)

    return [red, green, blue]
}

function rainbow1 (angle, zero = 0) {
    let red    =  0
    let green  =  0
    let blue   =  0
    if (  0 <= angle && angle <  60) {  // Green increasing
        red   = 255
        green = 255 *      (angle -   0) / 60
        blue  = zero
    }
    if ( 60 <= angle && angle < 120) {  //   Red decreasing
        red   = 255 * (1 - (angle -  60) / 60)
        green = 255
        blue  = zero
    }
    if (120 <= angle && angle < 180) {  // Blue increasing
        red   = zero
        green = 255
        blue  = 255 *      (angle - 120) / 60
    }
    if (180 <= angle && angle < 240) {  // Green decreasing
        red   = zero
        green = 255 * (1 - (angle - 180) / 60)
        blue  = 255
    }
    if (240 <= angle && angle < 300) {  //   Red increasing
        red   = 255 *      (angle - 240) / 60
        green = zero
        blue  = 255
    }
    if (300 <= angle && angle < 360) {  //  Blue decreasing
        red   = 255
        green = zero
        blue  = 255 * (1 - (angle - 300) / 60)
    }

    red   = Math . floor (red)
    green = Math . floor (green)
    blue  = Math . floor (blue)

    return [red, green, blue]
}


class Trapped {
    //
    // Construct a board to display the movement of a chess piece
    //
    constructor (args = {}) {
        this . name          = args . name
        this . colour_scheme = args . colour_scheme
        this . piece         = args . piece

        this . add_to        = "div#" + board_id (this . name)
        this . id            =          svg_id   (this . name)
        this . size          =  5    // For an 11 x 11 grid

        this . visited       = {}    // Values piece has been
        this . max_value     = 0     // Max value reached

        this . min_row       = 0     // )
        this . min_col       = 0     // ) Bounding box where pieces has been
        this . max_row       = 0     // )
        this . max_col       = 0     // )

        this . vb_min_row    = 0     // )
        this . vb_min_col    = 0     // ) Min/Max row/col in current viewbox
        this . vb_max_row    = 0     // )
        this . vb_max_col    = 0     // )

        this . steps         = 0
        this . speed         = 750   // Time between moves is speed / size
        this . max_speed     = false

        this . stop_step     = 0
        this . stop_value    = 0
        this . stop_box      = 0

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

        this . set_viewbox_row_col ()

        let size          = this . size
        let viewbox_min_x = this . vb_min_col - .5
        let viewbox_min_y = this . vb_min_row - .5
        let viewbox_max_x = this . vb_max_col + .5
        let viewbox_max_y = this . vb_max_row + .5

        let board = SVG () . addTo   (this . add_to)
                           . id      (this . id)
                           . size    ('100%', '100%')
                           . viewbox (viewbox_min_x, viewbox_min_y,
                                      viewbox_max_x - viewbox_min_x,
                                      viewbox_max_y - viewbox_min_y)
                           . attr    ({preserveAspectRatio: "xMaxYMin meet"})

         this . board = board

         this . make_dots ()

         this . set_title ()

         return this
    }

    //
    // Set the title (name of piece) in the title field
    //
    set_title () {
        let title = this . piece . name ()

        $(`#title-${this . name}`) . html (title)
    }

    //
    // Set the viewport given the current size
    //
    set_viewport () {
        let viewbox_min_x = this . vb_min_col - .5
        let viewbox_min_y = this . vb_min_row - .5
        let viewbox_max_x = this . vb_max_col + .5
        let viewbox_max_y = this . vb_max_row + .5
        this . board . viewbox (viewbox_min_x, viewbox_min_y,
                                viewbox_max_x - viewbox_min_x,
                                viewbox_max_y - viewbox_min_y)
        return this
    }


    //
    // Make a tiny dot give some coordinates
    //
    make_dot (row, col) {
        if (this . in_range (row, col)) {
            this . board . circle   (0.1)
                         . cx       (col)
                         . cy       (row)
                         . addClass ("unvisited-dot")
                         . addClass (`dot-${row}-${col}`)
        }
    }

    //
    // Turn a dot into the current one. Any current dots become a visited one
    //
    visit_dot (row, col) {
        let svg_id = this . id
        $(`#${svg_id} .current-dot`)       .    addClass (  "visited-dot")
        $(`#${svg_id} .current-dot`)       . removeClass (  "current-dot")
        $(`#${svg_id} .dot-${row}-${col}`) . removeClass ("unvisited-dot")
        $(`#${svg_id} .dot-${row}-${col}`) .    addClass (  "current-dot")
    }

    //
    // Create the initial set of dots
    //
    make_dots (args = {}) {
        let board = this . board
        for (let row  = this . vb_min_row;
                 row <= this . vb_max_row;
                 row ++) {
            for (let col  = this . vb_min_col;
                     col <= this . vb_max_col;
                     col ++) {
                this . make_dot (row, col)
            }
        }
    }

    //
    // Scale the board: add a new set of dots, and adjust the viewport
    //
    scale (args = {}) {
        let delta = args . delta || 1

        //
        // Save the old values of the viewbox boundaries
        //
        let old_vb_min_row = this . vb_min_row
        let old_vb_max_row = this . vb_max_row
        let old_vb_min_col = this . vb_min_col
        let old_vb_max_col = this . vb_max_col

        //
        // Calculate new viewbox boundary
        //
        this . zoom (args)


        //
        // Get the new values of the viewbox boundaries
        //
        let new_vb_min_row = this . vb_min_row
        let new_vb_max_row = this . vb_max_row
        let new_vb_min_col = this . vb_min_col
        let new_vb_max_col = this . vb_max_col

        let size  = this . size + delta
        let board = this . board;

        //
        // Top rows
        //
        for (let row = new_vb_min_row; row < old_vb_min_row; row ++) {
            for (let col = new_vb_min_col; col <= new_vb_max_col; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Bottom rows
        //
        for (let row = old_vb_max_row + 1; row <= new_vb_max_row; row ++) {
            for (let col = new_vb_min_col; col <= new_vb_max_col; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Left columns
        //
        for (let row = old_vb_min_row; row <= old_vb_max_row; row ++) {
            for (let col = new_vb_min_col; col < old_vb_min_col; col ++) {
                this . make_dot (row, col)
            }
        }

        //
        // Right columns
        //
        for (let row = old_vb_min_row; row <= old_vb_max_row; row ++) {
            for (let col = old_vb_max_col + 1; col <= new_vb_max_col; col ++) {
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
        let name      = this . name
        let step_val  = this . steps
        if (this . state == TRAPPED) {
            step_val += "<span class = 'trapped'>Trapped!</span>"
        }
        $(`#steps-${name}`) . html (step_val)
        $(`#max-${name}`)   . html (this . max_value)
        $(`#box-${name}`)   . html (
            `${this . max_row - this . min_row + 1} x ` +
            `${this . max_col - this . min_col + 1}`
        )

        let area = (this . max_row - this . min_row + 1) *
                   (this . max_col - this . min_col + 1)

        $(`#density-${name}`) . html (
            `${(100 * this . steps / area) . toFixed (2)} %`
        )
    }

    //
    // Clear the info fields
    //
    clear_info () {
        let name = this . name
        $(`#steps-${name}`)   . html ("")
        $(`#max-${name}`)     . html ("")
        $(`#box-${name}`)     . html ("")
        $(`#density-${name}`) . html ("")
    }

    //
    // Place the piece on the given value (defaults to 1)
    //
    place (args = {}) {
        let value      = args . value || 1
        let [row, col] = this . to_coordinates (value)
        //
        // If we want to visit a square which is outside
        // of the viewing box, adjust the viewbox box.
        //
        while (row < this . vb_min_row || row > this . vb_max_row ||
               col < this . vb_min_col || col > this . vb_max_col) {
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
            let angle = 180 * Math . atan2 (new_row - row, new_col - col) /
                              Math . PI
            while (angle <  360) {
                angle += 360
            }
            while (angle >= 360) {
                angle -= 360
            }

            let [red, green, blue] = rainbow1 (angle)

            let colour = `rgb(${red},${green},${blue})`
            line . stroke ({color: colour})
        }
    }

    //
    // Return true if we may continue
    //
    may_continue () {
        let info = window [this . name]
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
        let moves      = this . piece . moves ({step: this . steps + 1})
        let [row, col] = this . to_coordinates (this . current)
        let best       = 0
        let info       = window [this . name]
        moves . forEach ((move) => {
            let dr        = move . dr
            let dc        = move . dc
            let or        = move . or       || 0  // Offset
            let oc        = move . oc       || 0  // Offset
            let ur        = move . ur       || 0
            let uc        = move . uc       || 0
            let max       = move . max      || 0
            let min       = move . min      || ((or || oc) ? 0 : 1)
            let min_land  = move . min_land || 0

            let move_best = 0    // Best value within this move
            let prev_val  = 0    // Previous value within this move

            //
            // "Slide" along this move. (A step (or leap) is just
            // a slide with a max of 1. We stop the slide under
            // if at least one of the conditions is true:
            //
            //    - We exceed the max step size (max reach)
            //    - We reach a visited square (move is blocked)
            //    - The value of square is higher than the value
            //      of the previous square (too far away from center;
            //      we cannot improve)
            //
            //  Explaination of move properties:
            //
            //    - dr/dc     The row (dr) and column (dc) difference 
            //                on each "slide" step. They should not both
            //                be 0.
            //    - or/oc:    Row (or)/Column (oc) offset from origin. This
            //                is added to each step in the slide. Defaults to 0.
            //    - ur/uc:    Row (ur)/Column (uc) offset from origin
            //                which must be unoccupied.
            //    - max:      Maximum number of slide steps which can be taken.
            //                0, the default, mean there is no limit.
            //    - min:      Minimum number of slide steps which must be taken.
            //                Defaults to 1, unless one of or/oc isn't 0.
            //    - min_land: The minimum number of slide moves which must
            //                be taken before the piece can land. This is
            //                different from min, and useful for pieces 
            //                which must slide a minimum number of squares,
            //                but those squares must be unoccupied.
            //                The Wagon for instance, will have min = 1,
            //                but min_land = 2, meaning the first square
            //                it slides over must be unoccupied, but it
            //                cannot land on it.
            //
            for (let step = min; max == 0 || step <= max; step ++) {
                let new_row = row + step * move . dr + or
                let new_col = col + step * move . dc + oc
                let value   = this . to_value (new_row, new_col)

                if (value <= 0) {
                    break    // Out of bounds (only on some "spirals")
                }

                if (value in this . visited) {
                    break    // Square is occupied
                }

                if (ur || uc) {
                    let u_value = this . to_value (row + ur, col + uc)
                    if (u_value in this . visited) {
                        //
                        // Move is blocked
                        //
                        break
                    }
                }

                if (min_land > step) {
                    continue // May not land on this square
                }

                if (prev_val && value > prev_val) {
                    break    // Values start increasing, we cannot do better
                }

                if (move_best == 0 || value < move_best) {
                    move_best = value  // Found a better square
                }
                
                prev_val = value
            }

            //
            // Improve the best score if:
            //     - We found a possible square (move_best > 0)
            //     - We improved on the best score (move_best < best)
            //         + Or we did not have a best score yet (best == 0)
            //
            if (move_best && (best == 0 || move_best < best)) {
                best = move_best
            }
        })

        if (best > 0) {
            let [new_row, new_col] = this . to_coordinates (best)
            this . new_line (row, col, new_row, new_col)
            this . place ({value: best})
            this . steps = this . steps + 1
            if (this . may_continue ()) {
                if (this . max_speed) {
                    //
                    // Give animation a change to display progress
                    //
                    if (Math . random () < 1 / 1000) {
                        setTimeout (() => {this . move ()}, 1)
                    }
                    else {
                        this . move ()
                    }
                }
                else {
                    setTimeout (() => {this . move ()},
                                       this . speed / this . size)
                }
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
        if (what == '-') {this . speed    *= 1.1}
        if (what == '+') {this . speed    /= 1.1}
        if (what == 'M') {this . max_speed = true}
    }

    //
    // Toggle states
    //
    set_state (state) {
        let name = this . name
        let button_start  = $(`#button-start-${name}`)
        let button_pause  = $(`#button-pause-${name}`)
        let colour_select = $(`#colour-${name}`)
        let spiral_select = $(`.spiral-${name}`)

        this . state   = state

        if (state == RUNNING) {
            button_start  . html ("Reset")
            button_pause  . html ("Pause")
            button_pause  . prop ("disabled", false)
            this    . move ()
        }

        if (state == PAUSED) {
            button_pause  . html ("Continue")
            button_pause  . prop ("disabled", false)
        }

        if (state == TRAPPED) {
            button_pause  . prop ("disabled", true)
        }

        if (state == START) {
            button_start  . html ("Start")
            button_pause  . html ("Pause")
            button_pause  . prop ("disabled", true)
            colour_select . prop ("disabled", false)
            spiral_select . prop ("disabled", false)
            this . clear_info ()
        }
        else {
            colour_select . prop ("disabled", true)
            spiral_select . prop ("disabled", true)
        }
    }

    set_running () {if (this . state == START)   {this . set_state (RUNNING)}
                    if (this . state == PAUSED)  {this . set_state (RUNNING)}}
    set_paused  () {if (this . state == RUNNING) {this . set_state (PAUSED)}}
    set_trapped () {if (this . state == RUNNING) {this . set_state (TRAPPED)}}
    set_start   ()                               {this . set_state (START)}
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

    //
    // The Spiral covers the entire plane, so we're always in range
    //
    in_range (row, col) {
        return true
    }

    //
    // set_viewbox_row_col
    //
    set_viewbox_row_col () {
        let size = this . size;
        this . vb_min_row = - size;
        this . vb_max_row =   size;
        this . vb_min_col = - size;
        this . vb_max_col =   size;
    }


    zoom (args = {}) {
        let delta = args . delta || 1
        this . vb_min_row -= delta
        this . vb_max_row += delta
        this . vb_min_col -= delta
        this . vb_max_col += delta
    }
}


class Wedge_Folded extends Trapped {
    //       -3 -2 -1  0  1  2  3
    //
    //  -3:  10 11 12 13 14 15 16
    //  -2:      9  8  7  6  5
    //  -1:         2  3  4
    //   0:            1
    //
    to_value (row, col) {
        if (row > 0)                             {return 0}
        if (Math . abs (col) > Math . abs (row)) {return 0}
        let value = (row - 1) ** 2   // Max value in row
        if (value % 2 == 1) {
            //  Odd row, with numbers going left to right
            value += row - col
        }
        else {
            // Even row, with numbers going right to left
            value += row + col
        }

        return value
    }

    to_coordinates (value) {
        let row = 0
        let col = 0

        let sqrt = Math . floor (Math . sqrt (value - 1))
        let sq   = (1 + sqrt) ** 2
        let diff = sq - value
        row      = - sqrt
        if (sq % 2 == 0) {col = sqrt - diff}
        else             {col = diff - sqrt}

        return [row, col]
    }

    in_range (row, col) {
        return row <= 0 && Math . abs (col) <= Math . abs (row)
    }


    set_viewbox_row_col () {
        let size = this . size;
        this . vb_min_row = - (2 * size);
        this . vb_max_row =           0;
        this . vb_min_col = -      size;
        this . vb_max_col =        size;
    }


    zoom (args = {}) {
        let delta = args . delta || 1
        this . vb_min_row -= 2 * delta
        this . vb_min_col -=     delta
        this . vb_max_col +=     delta
    }
}

class Wedge_Flat extends Wedge_Folded {
    //       -3 -2 -1  0  1  2  3
    //
    //  -3:  10 11 12 13 14 15 16
    //  -2:      5  6  7  8  9
    //  -1:         2  3  4
    //   0:            1
    //
    to_value (row, col) {
        if (row > 0)                             {return 0}
        if (Math . abs (col) > Math . abs (row)) {return 0}
        let value = (row - 1) ** 2 + row - col

        return value
    }

    to_coordinates (value) {
        let row = 0
        let col = 0

        let sqrt = Math . floor (Math . sqrt (value - 1))
        let sq   = (1 + sqrt) ** 2
        row      =            - sqrt
        col      = sq - value - sqrt

        return [row, col]
    }
}


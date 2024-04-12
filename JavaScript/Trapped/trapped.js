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

    window . piece = piece

    $("div.trapped") . each ((i, e) => {
        set_up ({element: e, piece: piece})
    })

    let text = $("body") . html ()
        text = text . replaceAll (/%%PIECE%%/g,
                    `<span class = "piece">${piece . name ()}</span>`)
    $("body")  . html (text)
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
// Populate the right div with some form elements.
//
let radio_info = {
    spiral_square:  {name: "Spiral (Square)"},
    spiral_diamond: {name: "Spiral (Diamond)"},
    wedge_folded:   {name: "Wedge (Folded)"},
    wedge_flat:     {name: "Wedge (Flat)"},
}

//
// Create the two responsive divs inside any "trapped" divs.
//
function set_up (args = {}) {
    let element    = args  . element
    let piece      = args  . piece
    let piece_name = piece . name ()

    $(element) . html (
        `<div class = 'board' id = 'board'></div>` +
        `<div class = 'info'  id = 'info' ></div>`
    )

    set_up_info  ({piece: piece})
    init_trapped ({piece: piece})
}

//
// Create an animation, but do not start it yet
//
function init_trapped (args = {}) {
    let scheme  = args   . scheme || window . scheme_name || "spiral_square"
    let piece   = args   . piece  || window . piece
    let name    = piece  . name ()
    let trapped = window . trapped

    if (trapped) {
        trapped . set_dead ()     // Make sure we do not continue

        $("div#board") . empty () // Gets rid of any existing SVG
    }

    let c_args = {
        name:          name,
        piece:         piece,
        colour_scheme: $(`#colour`) . val ()
    }

    //
    // There has to be a better way
    //
    if (scheme == "spiral_square")  {trapped = new Spiral_Square  (c_args)} else
    if (scheme == "spiral_diamond") {trapped = new Spiral_Diamond (c_args)} else
    if (scheme == "wedge_flat")     {trapped = new Wedge_Flat     (c_args)} else
    if (scheme == "wedge_folded")   {trapped = new Wedge_Folded   (c_args)}

    trapped . create_board ()
            . place        ()
            . set_start    ()

    window . trapped     = trapped
    window . scheme_name = scheme

    stop ()
}

function set_up_info (args = {}) {
    let piece   = args  . piece
    let name    = piece . name ()

    let div     = $("div#info")
    let button1 = `<button type     = 'button' `       +
                          `id       = 'button-start' ` +
                          `class    = 'run start' `    +
                          `onclick  = 'start ()'>Start</button><br>`
    let button2 = `<button type     = 'button' `       +
                          `id       = 'button-pause' ` +
                          `class    = 'run pause' `    +
                          `disabled = 'disabled' `     +
                          `onclick  = 'pause ()'>Pause</button><br>`

    let radio_scheme = ""
    let scheme_types = ["spiral_square", "spiral_diamond",
                        "wedge_folded",  "wedge_flat"]

    scheme_types . forEach ((type, index) => {
        let scheme_name = radio_info [type] ["name"]
        let checked     = ""
        if (index == 0) {
            checked = "checked = 'checked'"
        }
        else {
            radio_scheme += "<tr>"
        }
        radio_scheme +=
            `<td colspan = 3>
                 <input type     = "radio"
                        name     = "scheme"
                        value    = "${type}"
                        class    = "scheme"
                        id       = "input_${type}"
                        ${checked}
                        onchange = "init_trapped ({scheme: '${type}'})">
                 <label for = "input_${type}">${scheme_name}</label>
             </td></tr>`
    })


    let info_table = `
        <table class = 'info_table'>
             <tr><th colspan = 4
                     id      = 'title'
                     class   = 'title'>${piece . name ()}</th></tr>

             <tr><td>Step</td>
                 <td colspan = 3
                     id      = 'steps'></td></tr>

             <tr><td>Max value</td>
                 <td colspan = 3
                     id      = 'max'></td></tr>

             <tr><td>Bounding box</td>
                 <td colspan = 3
                     id      = 'box'></td></tr>

             <tr><td rowspan = 4>Spiral type</td>
                 ${radio_scheme}

             <tr><td>Colour scheme</td>
                 <td colspan = 3>
                    <select id = 'colour'>
                        <option value = 'none'>         None       </option>
                        <option value = 'mono' selected>Monochrome </option>
                        <option value = 'rainbow'>      Directional</option>
                   </select></td>
                 </td>

             <tr><td>Speed</td>
                 <td class = 'minus'>
                     <button type    = 'button'
                             class   = 'speed' 
                             onclick = 'speed ("-")'>-</button></td>

                 <td class = 'plus'>
                     <button type   = 'button'
                             class   = 'speed' 
                             onclick = 'speed ("+")'>+</button></td>

                 <td class = 'max'>
                     <button type    = 'button'
                             class   = 'speed' 
                             onclick = 'speed ("M")'>Max</button></td></tr>

             <tr><td>Stop on step</td>
                 <td colspan = 3><input type     = 'text'
                                        id       = 'stop-step'
                                        class    = 'stop'
                                        onchange = 'stop ()'</td>
            </tr>
             <tr><td>Stop on value</td>
                 <td colspan = 3><input type     = 'text'
                                        id       = 'stop-value'
                                        class    = 'stop'
                                        onchange = 'stop ()'</td>
            </tr>
             <tr><td>Stop on box size</td>
                 <td colspan = 3><input type     = 'text'
                                        id       = 'stop-box'
                                        class    = 'stop'
                                        onchange = 'stop ()'</td>
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
function pause () {
    let trapped = window . trapped
    if (!trapped) {
        return
    }
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
function start () {
    let trapped = window . trapped

    if (!trapped) {
        return
    }

    if (trapped . state == START) {
        trapped . colour_scheme = $(`#colour`) . val ()
        trapped . set_running ()
    }
    else {
        //
        // Resetting
        //
        init_trapped ({piece: window . piece})
    }
}


//
// Increment or decrement the speed of the animation.
// Has no effect when the animation has not started
//
function speed (what) {
    let trapped = window . trapped
    if (trapped) {
        trapped . set_speed (what)
    }
}

//
// Called when changing a stopping criterium
//
function stop () {
    let trapped = window . trapped
    if (trapped) {
        trapped . set_stop ({
            step:  $(`#stop-step`)  . val (),
            value: $(`#stop-value`) . val (),
            box:   $(`#stop-box`)   . val ()
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

        this . add_to        = "div#board"
        this . id            = "svg"
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

         return this
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
        $(`#steps`) . html (step_val)
        $(`#max`)   . html (this . max_value)
        $(`#box`)   . html (
            `${this . max_row - this . min_row + 1} x ` +
            `${this . max_col - this . min_col + 1}`
        )

        let area = (this . max_row - this . min_row + 1) *
                   (this . max_col - this . min_col + 1)
    }

    //
    // Clear the info fields
    //
    clear_info () {
        $("#steps") . html ("")
        $("#max")   . html ("")
        $("#box")   . html ("")
    }

    //
    // Place the piece on the given value (defaults to 1)
    //
    place (args = {}) {
        let [row, col, value] = [0, 0, 1]
        if ("row" in args && "col" in args) {
            row   = args . row
            col   = args . col
            value = this . to_value (row, col)
        }
        //
        // If we want to visit a square which is outside
        // of the viewing box, adjust the viewbox box.
        //
        while (row < this . vb_min_row || row > this . vb_max_row ||
               col < this . vb_min_col || col > this . vb_max_col) {
            this . scale ()
        }
        this . visit_dot (row, col)
        this . current_row     = row
        this . current_col     = col
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
        let row        = this . current_row
        let col        = this . current_col
        let best       = 0
        let best_row   = 0
        let best_col   = 0
        moves . forEach ((move) => {
            let move_best     = 0    // Best value within this move
            let move_best_row = 0    // Best row within this move
            let move_best_col = 0    // Best col within this move
            let prev_val      = 0    // Previous value within this move

            if (typeof move === "function") {
                for (let step = 1; ; step ++) {
                    let [dr, dc, info] = move (step);

                    if (info . stop) {
                        //
                        // For limited slides (or just single steps/jumps
                        // we return "stop" if the maximum number of steps
                        // has been exceeded.
                        //
                        break;
                    }

                    if (info . skip) {
                        //
                        // Just in case we return targets which we do
                        // not want to futher inspect. 
                        //
                        continue;
                    }

                    let  new_row = row + dr
                    let  new_col = col + dc
                    let  value   = this . to_value (new_row, new_col);

                    if (value <= 0) {
                        //
                        // Out of bounds; this can only happen for
                        // some boards (wedges)
                        //
                        break;
                    }
                    
                    if (value in this . visited) {
                        //
                        // Todo: handle "free" jumps
                        //
                        break; // Square has been visited before
                    }

                    if (prev_val && value > prev_val && !info . curls) {
                        //
                        // Values start increasing, we cannot do better
                        // Curling pieces may curl inwards and get better
                        // values, so we continue; they ought to have
                        // limited possibilities, so we don't break then.
                        //
                        break;
                    }

                    if (info . not_a_target) {
                        //
                        // This is a square which needs to be on the
                        // board, and not occupied, but the piece
                        // cannot actually land here. For instance,
                        // the Mao and Moa make Knight moves, but may
                        // not jump over a piece.
                        //
                        continue;
                    }

                    //
                    // The square is a possible target. Update the best
                    // value for this move.
                    //
                    if (move_best == 0 || value < move_best) {
                        move_best     = value // We found a better square
                        move_best_row = new_row
                        move_best_col = new_col
                    }

                    //
                    // Update the previous value
                    //
                    prev_val = value

                    //
                    // And continue
                    //
                }
            }
            else {
                let dr        = move . dr
                let dc        = move . dc
                let or        = move . or        || 0  // Offset
                let oc        = move . oc        || 0  // Offset
                let us        = move . us        || []
                let max       = move . max       || 0
                let min       = move . min       || ((or || oc) ? 0 : 1)
                let min_land  = move . min_land  || 0
                let max_jumps = move . max_jumps || 0

                //
                // "Slide" along this move. (A step (or leap) is just
                // a slide with a max of 1. We stop the slide under
                // if at least one of the conditions is true:
                //
                //    - We exceed the max step size (max reach)
                //    - We reach a visited square (move is blocked)
                //      and max_jumps <= 0
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
                //                is added to each step in the slide.
                //                Defaults to 0.
                //    - us:       List of row/columns which must be unoccupied.
                //    - max:      Maximum number of slide steps which can be
                //                taken. 0, the default, mean there is no limit.
                //    - min:      Minimum number of slide steps which must
                //                be taken. Defaults to 1, unless one of
                //                or/oc isn't 0.
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

                    //
                    // If the value has been visited before, we cannot visit
                    // it, unless we have some free jumps.
                    //
                    if (value in this . visited) {
                        if (max_jumps > 0) {
                            max_jumps = max_jumps - 1
                            continue
                        }
                        else {
                            break
                        }
                        break    // Square is occupied
                    }

                    //
                    // Check whether the move is blocked
                    //
                    let blocked = false
                    us . forEach ((coord) => {
                        let [r, c] = coord
                        let value  = this . to_value (row + r, col + c)
                        if (value in this . visited) {
                            blocked = true
                        }
                    })
                    if (blocked) {
                        break
                    }

                    if (min_land > step) {
                        continue // May not land on this square
                    }

                    if (prev_val && value > prev_val) {
                        break    // Values start increasing, we cannot do better
                    }

                    if (move_best == 0 || value < move_best) {
                        move_best     = value  // Found a better square
                        move_best_row = new_row
                        move_best_col = new_col
                    }
                
                    prev_val = value
                }
            }

            //
            // Improve the best score if:
            //     - We found a possible square (move_best > 0)
            //     - We improved on the best score (move_best < best)
            //         + Or we did not have a best score yet (best == 0)
            //
            if (move_best && (best == 0 || move_best < best)) {
                best     = move_best
                best_row = move_best_row
                best_col = move_best_col
            }
        })

        if (best > 0) {
            this . new_line (row, col, best_row, best_col)
            this . place ({row: best_row, col: best_col})
            this . steps = this . steps + 1

            let dr = best_row - row
            let dc = best_col - col
            if (!this . moves_done) {
                this . moves_done = {}
            }
            if (!this . moves_done [dr]) {
                this . moves_done [dr] = {}
            }
            if (!this . moves_done [dr] [dc]) {
                this . moves_done [dr] [dc] = 0
            }
            this . moves_done [dr] [dc] ++

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

   //   if (!this . may_continue ()) {
   //       console . log (this . moves_done)
   //   }

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
        let button_start  = $(`#button-start`)
        let button_pause  = $(`#button-pause`)
        let colour_select = $(`#colour`)
        let scheme_select = $(`.scheme`)

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
            scheme_select . prop ("disabled", false)
            this . clear_info ()
        }
        else {
            colour_select . prop ("disabled", true)
            scheme_select . prop ("disabled", true)
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

class Spiral_Square extends Trapped {
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


class Spiral_Diamond extends Spiral_Square {
    //
    //         -4  -3  -2  -1   0   1   2   3   4
    //
    // -4:                     33
    // -3:                 34  19  32
    // -2:             35  20  09  18  31
    // -1:         36  21  10  03  08  17  30
    //  0:     37  22  11  04  01  02  07  16  29
    //  1:         38  23  12  05  06  15  28
    //  2:             39  24  13  14  27
    //  3:                 40  25  26
    //  4:                     41
    //
    to_value (row, col) {
        let abs_row = Math . abs (row)
        let abs_col = Math . abs (col)
        let ring = abs_row + abs_col
        if (ring == 0) {
            return 1
        }

        let p_max  = ring ** 2 + (ring - 1) ** 2
        let max    = ring ** 2 + (ring + 1) ** 2  // Max value in ring
        let size   = max - p_max                  // Number of squares in ring
        let e_size = size / 4                     // Squares on an edge

        return row >  0 && col <= 0 ?  max - 0 * e_size - abs_col
             : row <= 0 && col <  0 ?  max - 1 * e_size - abs_row
             : row <  0 && col >= 0 ?  max - 2 * e_size - abs_col
             : row >= 0 && col >  0 ?  max - 3 * e_size - abs_row
             :                        -1
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
}


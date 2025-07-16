$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\?.*/,    "")
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    $("div.escape-loop") . each ((i, e) => {
        new Escape_Loop ({element: e, index: i})
    })
})


class Escape_Loop {

    constructor (args = {}) {
        let element = args . element
        if (!element) {
            return
        }
        this . index = args . index
        let fig_id   = `figure_${this . index}`

        //
        // Get the piece, layout and sub layout
        //
        this . piece     = $($("h1") [0])                     . text ()
        this . layout    = $($(element) . prevAll ("h3") [0]) . text ()
        this . sublayout = $($(element) . prevAll ("h4") [0]) . text ()

        //
        // Find the size of board. It ought to be a rectangle
        //
        let description = $(element) . text ()
        $(element) . html ("")

        //
        // Add a figure
        //
        $(element) . append (`<figure id = '${fig_id}' class = 'escape-loop'>` +
                             `</figure>`)

        let figure = $(`#${fig_id}`) [0]

        //
        // Get the coordinates of the loop
        //
        let coordinates = [... description . matchAll (/-?[0-9]+/g)] .
                          map (match => + match [0])

        let [r_min, r_max, c_min, c_max] = [0, 0, 0, 0]
        let [row, col] = [coordinates . shift (), coordinates . shift ()]
        let paths      = [[], [], []]
        for (let j = 0; j < 3; j ++) {
            paths [j] = [col, row]
            for (let i = 0; i < coordinates . length; i += 2) {
                row += coordinates [i]
                col += coordinates [i + 1]
                if (row < r_min) {r_min = row}
                if (row > r_max) {r_max = row}
                if (col < c_min) {c_min = col}
                if (col > c_max) {c_max = col}
                paths [j] . push (col, row)
            }
        }

        //
        // Set the minimum and maximum row and column
        //
        this . r_min = r_min
        this . r_max = r_max
        this . c_min = c_min
        this . c_max = c_max

        this . create_board ({addTo: figure})
        this . make_dots    ()

        this . draw_loop (paths [0], 'escape-loop before')
        this . draw_loop (paths [1], 'escape-loop main')
        this . draw_loop (paths [2], 'escape-loop after')

        for (let i = 0; i < paths [1] . length; i ++) {
            let [c, r] = [paths [1] [i], paths [1] [i + 1]]
            let class_name = this . dot_class (r, c)
            $("." + class_name) . removeClass ("unvisited-dot")
                                .    addClass   ("visited-dot")
        }

        let caption = `Escape pattern for the ${this . piece}<br>` +
                      `on the ${this . sublayout} ${this . layout}`

        $(figure) . append (`<figcaption>${caption}</figcaption>`)
    }

    //
    // Return a class name given a row and column
    //
    dot_class (row, col) {
        return `rc-${this . index}-${row}-${col}`
    }

    //
    // Given a path, draw the line, and add the class
    //
    draw_loop (path, class_name) {
        this . board . polyline (path)
                     . fill     ('none')
                     . addClass (class_name)
    }

    //
    // Set the viewport given the current size
    //
    set_viewport () {
        this . viewbox_min_x = this . c_min - .5
        this . viewbox_min_y = this . r_min - .5
        this . viewbox_max_x = this . c_max + .5
        this . viewbox_max_y = this . r_max + .5

        return this
    }

    //
    // Initialize the loop board
    //
    create_board (args = {}) {
        let rows  = this . r_max - this . r_min + 1
        let cols  = this . c_max - this . c_min + 1
        let h     = rows * MOV_SIZE
        let w     = cols * MOV_SIZE

        this . set_viewport ()

        let board = SVG () . addTo   (args . addTo)
                           . size    (w, h)
                           . viewbox (this . viewbox_min_x,
                                      this . viewbox_min_y,
                                      this . viewbox_max_x -
                                      this . viewbox_min_x,
                                      this . viewbox_max_y -
                                      this . viewbox_min_y)

        this . board = board
        return this
    }


    //
    // Make a tiny dot give some coordinates
    //
    make_dot (row, col) {
        if (this . layout == "Wedge" &&
            Math . abs (col) > Math . abs (row)) {return}

        this . board . circle   (0.1)
                     . cx       (col)
                     . cy       (row)
                     . addClass ("unvisited-dot")
                     . addClass (this . dot_class (row, col))
    }


    //
    // Create the initial set of dots
    //
    make_dots (args = {}) {
        let board = this . board
        for (let row  = this . r_min; row <= this . r_max; row ++) {
            for (let col  = this . c_min; col <= this . c_max; col ++) {
                this . make_dot (row, col)
            }
        }
    }
}

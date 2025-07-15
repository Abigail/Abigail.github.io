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
        let index  = args . index
        let fig_id = `figure_${index}`

        this . layout = $($(element) . prevAll ("h3") [0]) . text ()
        let piece = $($("h1") [0]) . text ()

        //
        // Find the size of board. It ought to be a rectangle
        //
        let description = $(element) . text ()
        $(element) . html ("")

        //
        // Add a figure and a caption
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

        this . r_min = r_min
        this . r_max = r_max
        this . c_min = c_min
        this . c_max = c_max

        this . create_board ({addTo: figure})
        this . make_dots    ()

        this . draw_loop (paths [0], 'escape-loop before')
        this . draw_loop (paths [1], 'escape-loop main')
        this . draw_loop (paths [2], 'escape-loop after')

        $(figure) . append (`<figcaption>Escape pattern ` +
                            `for the ${piece}</figcaption>`)
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

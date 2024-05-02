$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    $("div.movement") . each ((i, e) => {
        new Movement ({element: e, piece: file})
    })
})


let MOV_SIZE = 30     // Height/width of square
let SCALE    = {
    antelope:    450,
    lioness:     200,
    okapi:       200,
    stag:       1000,
    zebu:       1800,
}
let TRANSFORM = {
    //
    // Beats me why any of these are necessary
    //
    antelope:  {translate: [-MOV_SIZE * 7.40, 0]},
    caliph:    {translate: [ MOV_SIZE * 0.20, 0]},
    dabbaba:   {translate: [ MOV_SIZE * 0.22, 0]},
    lioness:   {translate: [-MOV_SIZE * 3.50, 0]},
}

class Movement {

    constructor (args = {}) {
        let element = args . element
        if (!element) {
            return
        }

        //
        // Find the size of board. It ought to be a rectangle
        //
        let description = $(element)  . text ()
        $(element) . html ("")
        let board_info  = description . split  ("\n")
                                      . filter ((line) => line . match (/\S/))
                                      . map    ((line) => line . split (" "))

        this . rows = board_info     . length
        this . cols = board_info [0] . length

        this . create_board ({addTo: element})
        this . create_grid  ()

        let start        = []
        let destinations = []
        let arrows       = []

        board_info . forEach ((line, row) => {
            line . forEach ((field, col) => {
                if (field == "S") {
                    start = {row: row, col: col}
                }
                if (field == '*') {
                    destinations . push ({row: row, col: col})
                }
                if (field == 'A') {
                    arrows . push ({row: row, col: col})
                }
            })
        })

        arrows . forEach ((square) => {
            this . draw_arrow ({from: start, to: square})
        })

        this . place_piece ({start: start, piece: args . piece})

        destinations . forEach ((square) => {
            this . place_destination ({square: square})
        })
    }

    cell_to_coord (row, col) {
        //
        // Coordinates of the middle of the cell
        //
        return [this . inner_left + (col + .5) * MOV_SIZE,
                this . inner_top  + (row + .5) * MOV_SIZE]
    }

    //
    // Initialize the movement board
    //
    create_board (args = {}) {
        let rows  = this . rows
        let cols  = this . cols
        let h     = rows * MOV_SIZE
        let w     = cols * MOV_SIZE

        this . inner_height =  h    // In pixels
        this . inner_width  =  w    // In pixels
        this . inner_top    = -h / 2
        this . inner_left   = -w / 2
        this . inner_bottom =  h / 2
        this . inner_right  =  w / 2

        let board = SVG () . addTo   ("div.movement")
                           . size    ( w, h)
                           . viewbox (-w / 2, -h / 2, w, h)

        this . board = board
        return this
    }

    //
    // Create the grid
    //
    create_grid (args = {}) {
        let board = this . board
        let cols  = this . cols
        let rows  = this . rows

        //
        // Create outer edge
        //
        board . rect (cols * MOV_SIZE, rows * MOV_SIZE)
              . stroke ({color: '#000', width: 4})
              . fill   ({color: '#fff', opacity: 0})
              . center (0, 0)

        //
        // Create vertical lines
        //
        for (let c = 0; c < this . cols - 1; c ++) {
            let x_min = this  . inner_left + (c + 1) * MOV_SIZE
            let x_max = this  . inner_left + (c + 1) * MOV_SIZE
            let y_min = this  . inner_top
            let y_max = this  . inner_bottom
            let line  = board . line (x_min, y_min, x_max, y_max)
                              . stroke ({color: '#000', width: 2})
        }

        //
        // Create horizontal lines
        //
        for (let r = 0; r < this . rows - 1; r ++) {
            let x_min = this  . inner_left
            let x_max = this  . inner_right
            let y_min = this  . inner_top + (r + 1) * MOV_SIZE
            let y_max = this  . inner_top + (r + 1) * MOV_SIZE
            let line  = board . line (x_min, y_min, x_max, y_max)
                              . stroke ({color: '#000', width: 2})
        }

        return this
    }


    //
    // Place the piece of which we show the movement
    //
    place_piece (args = {}) {
        let row   = args . start . row
        let col   = args . start . col
        let piece = args . piece

        let div   = $("div.drawing")

        if (div . length) {
            let group = this . board . group ()

            let scale_factor = SCALE [piece] || 2048
            let scale        = MOV_SIZE * .9 / scale_factor

            let svg   = $("div.drawing") . html ()
                                         . replace (/<\?[^?]*?\?>/,    "")
                                         . replace (/.*<\/metadata>/s, "")
                                         . replace ("<!--",            "")
                                         . replace ("-->",             "")
                                         . replace ("</svg>",          "")

            group . svg    (svg)
                  . center (... this . cell_to_coord (row, col))
                  . scale  (scale)

            if (TRANSFORM [piece]) {
                TRANSFORM [piece] . scale = scale
                group . transform (TRANSFORM [piece])
            }
        }
        else {
            this . board . rect   (MOV_SIZE * .65, MOV_SIZE * .65)
                         . css    ({fill:         "white",
                                    stroke:       "black",
                                   "stroke-width": 2})
                         . center (0, 0)
        }

        return this
    }

    //
    // Given the coordinates of a square, mark the square as a
    // valid destination
    //
    place_destination (args = {}) {
        let row   = args . square . row
        let col   = args . square . col

        this . board . circle (MOV_SIZE * .50)
                     . fill   ('black')
                     . center (... this . cell_to_coord (row, col))

        return this
    }

    //
    // Given from and to squares, draw an arrow between them. 
    // Arrow should start in the middle of the from square,
    // and end 3/4 away from the start square in the to square.
    //
    draw_arrow (args = {}) {
        let from = args . from
        let to   = args . to

        let [x_from, y_from] = this . cell_to_coord (from . row, from . col)
        let [x_to,   y_to]   = this . cell_to_coord (to   . row, to   . col)

        let line = this . board . line   (x_from, y_from, x_to, y_to)
                                . stroke ({width:   1,
                                           opacity: 0.5,
                                           color:  'black',
                                           linecap: 'round',})

        //
        // This needs to be badly improved
        //
        let angle = 0
        if      (to . row < from . row) {
            if      (to . col < from . col) {angle = -135}
            else if (to . col > from . col) {angle = - 45}
            else                            {angle = - 90}
        }
        else if (to . row > from . row) {
            if      (to . col < from . col) {angle =  135}
            else if (to . col > from . col) {angle =   45}
            else                            {angle =   90}
        }
        else {
            if      (to . col < from . col) {angle =  180}
            else                            {angle =    0}
        }

        //
        // Draw an arrow head
        //
        let head = this . board . polygon ('5,0  0,-10  20,0  0,10')
                        . fill    ({color:  'black',
                                    opacity: 0.5,})
                        . stroke  ({color:  'black',
                                    opacity: 0.5})
                        . cx      (0)
                        . cy      (0)
                        . transform ({rotate:     angle,
                                      scale:     .8,
                                      translate: [x_to, y_to]})

        return this
    }
}

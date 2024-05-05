$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\?.*/,    "")
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    $("div.movement") . each ((i, e) => {
        new Movement ({element: e, piece: file})
    })
})


let MOV_SIZE  = 30    // Height/width of square
let TRANSFORM = {     // [Scale, Translate X, Translate Y]
    antelope:            [  450,     - 7.40],
    caliph:              [    0,       0.20],
    dabbaba:             [    0,       0.22],
    dragon_horse:        [   50],
    dragon_king:         [   50],
    elephant:            [   40,     - 0.87],
    falcon:              [  800,     -13.30],
    gold_general:        [   50],
    hawk:                [  900,     -14.05],
    lance:               [   50],
    lioness:             [  200,     - 3.50],
    narwhal:             [  800,     -13.50],
    okapi:               [  200],
    silver_general:      [   50],
    shogi_knight:        [   50],
    stag:                [ 1000],
    zebu:                [ 1800],
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

        let pieces       = []
        let destinations = []
        let initials     = []
        let arrows       = []
        let lines        = []

        let by_line = description . split  ("\n")
                                  . filter ((line) => line . match (/\S/))

        by_line . filter ((line) => line . match (/^Line:/))
                . forEach ((line) => {
            let coordinates = line . replace (/Line:\s*/, "")
                                   . split (/\s+/)
                                   . map ((x) => x . split (/,/) .
                                                 map ((x) => +x))
            lines . push (coordinates)
        })

        let board_info  = by_line . filter ((line) => !line . match (/[:]/))
                                  . map    ((line) =>  line . split (" "))

        this . rows = board_info     . length
        this . cols = board_info [0] . length

        this . create_board ({addTo: element})
        this . create_grid  ()

        board_info . forEach ((line, row) => {
            line . forEach ((field, col) => {
                if (field == "S") {
                    pieces . push ({row: row, col: col})
                }
                if (field == '*') {
                    destinations . push ({row: row, col: col})
                }
                if (field == 'i') {
                    initials . push ({row: row, col: col})
                }
                if (field == 'A') {
                    arrows . push ({row: row, col: col})
                }
            })
        })

        arrows . forEach ((square) => {
            this . draw_arrow ({from: start, to: square})
        })

        lines . forEach ((coordinates) => {
            this . draw_line (coordinates)
        })

        pieces . forEach ((square) => {
            this . place_piece ({square: square, piece: args . piece})
        })

        destinations . forEach ((square) => {
            this . place_destination ({square: square})
        })
        initials . forEach ((square) => {
            this . place_destination ({square: square, initial: 1})
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
        let row   = args . square . row
        let col   = args . square . col
        let piece = args . piece

        let div   = $("div.drawing")

        if (div . length) {
            let group = this . board . group ()

            let svg   = $("div.drawing") . html ()
                                         . replace (/<\?[^?]*?\?>/,    "")
                                         . replace (/.*<\/metadata>/s, "")
                                         . replace ("<!--",            "")
                                         . replace ("-->",             "")
                                         . replace ("</svg>",          "")

            group . svg    (svg)
                  . center (... this . cell_to_coord (row, col))

            let transform_in  = TRANSFORM [piece] ? TRANSFORM [piece] : [0]
            let transform_out = {}
            transform_out . scale = MOV_SIZE * .9 / (transform_in [0] || 2048)
            if (transform_in . length > 1) {
                transform_out . translateX = MOV_SIZE * transform_in [1]
            }
            if (transform_in . length > 2) {
                transform_out . translateY = MOV_SIZE * transform_in [2]
            }
            group . transform (transform_out)
        }
        else {
            this . board . rect   (MOV_SIZE * .65, MOV_SIZE * .65)
                         . css    ({fill:         "white",
                                    stroke:       "black",
                                   "stroke-width": 2})
                         . center (... this . cell_to_coord (row, col))
        }

        return this
    }

    //
    // Given the coordinates of a square, mark the square as a
    // valid destination
    //
    place_destination (args = {}) {
        let row     = args . square . row
        let col     = args . square . col
        let initial = args . initial

        if (initial) {
            let stroke_width = MOV_SIZE / 8
            this . board . circle (MOV_SIZE * .50 - stroke_width)
                         . stroke ({color: 'black',
                                    width:  stroke_width,})
                         . fill ('none')
                         . center (... this . cell_to_coord (row, col))
        }
        else {
            this . board . circle (MOV_SIZE * .50)
                         . fill   ('black')
                         . center (... this . cell_to_coord (row, col))
        }

    //  if (initial) {
    //      this . board . circle (MOV_SIZE * .25)
    //                   . fill   ('red')
    //                   . center (... this . cell_to_coord (row, col))
    //  }

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

    //
    // Given an array of coordinates, draw line between them.
    //
    draw_line (coordinates) {
        this . board . polyline (coordinates . map ((point) =>
                                         this . cell_to_coord (... point)))
                     . stroke ({width:   1,
                                opacity: 0.5,
                                color:  'black',
                                linecap: 'round',})
        return this
    }
}

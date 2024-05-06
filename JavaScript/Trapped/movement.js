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
    alfilrider:          [    0,       0.17],
    caliph:              [    0,       0.20],
    dabbaba:             [    0,       0.22],
    dragon_horse:        [   50],
    dragon_king:         [   50],
    elephant:            [   40,     - 0.87],
    elephant_janggi:     [   40,     - 0.87],
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
        let unoccupied   = []
        let initials     = []
        let arrows       = []
        let lines        = []
        let lines2       = []
        let shogi        = 0

        let by_line = description . split  ("\n")
                                  . filter ((line) => line . match (/\S/))

        by_line . filter ((line) => line . match (/:/))
                . forEach ((line) => {
            if (line . match (/^Line:/)) {
                let coordinates = line . replace (/Line:\s*/, "")
                                       . split (/\s+/)
                                       . map ((x) => x . split (/,/) .
                                                     map ((x) => +x))
                lines . push (coordinates)
            }
            else if (line . match (/^Shogi:/)) {
                shogi = 1
            }
        })

        let board_info  = by_line . filter ((line) => !line . match (/[:]/))
                                  . map    ((line) =>  line . split (" "))

        this . rows = board_info     . length
        this . cols = board_info [0] . length

        this . create_board ({addTo: element})
        this . create_grid  ()

        board_info . forEach ((line, row) => {
            line . forEach ((field, col) => {
                let square = [row, col]
                if (field == '*' ||
                    field == 'L') {destinations . push (square)}
                if (field == "S") {pieces       . push (square)}
                if (field == 'i') {initials     . push (square)}
                if (field == 'u') {unoccupied   . push (square)}
                if (field == 'A') {arrows       . push (square)}
                if (field == 'L') {lines2       . push (square)}
            })
        })

        arrows . forEach ((square) => {
            this . draw_arrow ([pieces [0], square])
        })

        lines . forEach ((coordinates) => {
            this . draw_line (coordinates)
        })
        lines2 . forEach ((square) => {
            this . draw_line ([pieces [0], square])
        })

        pieces . forEach ((square) => {
            this . place_piece ({square: square,
                                 piece:  args . piece,
                                 shogi:  shogi})
        })

        destinations . forEach ((square) => {
            this . place_destination ({square: square})
        })
        initials . forEach ((square) => {
            this . place_destination ({square: square, initial: 1})
        })
        unoccupied . forEach ((square) => {
            this . place_destination ({square: square, unoccupied: 1})
        })
    }


    //
    // Coordinates of the middle of the cell
    //
    square_to_coord (square) {
        let row = square [0]
        let col = square [1]
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
        let square = args . square
        let piece  = args . piece
        let shogi  = args . shogi

        let div    = $("div.drawing")

        if (div . length) {
            let group = this . board . group ()

            let svg   = $("div.drawing") . html ()
                                         . replace (/<\?[^?]*?\?>/,    "")
                                         . replace (/.*<\/metadata>/s, "")
                                         . replace ("<!--",            "")
                                         . replace ("-->",             "")
                                         . replace ("</svg>",          "")

            group . svg    (svg)
                  . center (... this . square_to_coord (square))

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
        else if (shogi) {
            this . board . polygon   ('4,5 -4,5, -2,-3 0,-5 2,-3')
                         . css       ({fill:         "white",
                                       stroke:       "black",
                                      "stroke-width": .5})
                         . center    (... this . square_to_coord (square))
                         . transform ({scale: MOV_SIZE * .9 / 12})
        }
        else {
            this . board . rect   (MOV_SIZE * .65, MOV_SIZE * .65)
                         . css    ({fill:         "white",
                                    stroke:       "black",
                                   "stroke-width": 2})
                         . center (... this . square_to_coord (square))
        }

        return this
    }

    //
    // Given the coordinates of a square, mark the square as a
    // valid destination
    //
    place_destination (args = {}) {
        let square     = args . square
        let initial    = args . initial
        let unoccupied = args . unoccupied

        if (initial) {
            let stroke_width = MOV_SIZE / 8
            this . board . circle (MOV_SIZE * .50 - stroke_width)
                         . stroke ({color: 'black',
                                    width:  stroke_width,})
                         . fill ('none')
                         . center (... this . square_to_coord (square))
        }
        else if (unoccupied) {
            let stroke_width = MOV_SIZE / 20
            this . board . circle (MOV_SIZE * .50 - stroke_width)
                         . stroke ({color: 'black',
                                    width: stroke_width,
                                    dasharray: '5 2 5 2 5 2',})
                         . fill ('none')
                         . center (... this . square_to_coord (square))
        }
        else {
            this . board . circle (MOV_SIZE * .50)
                         . fill   ('black')
                         . center (... this . square_to_coord (square))
        }

        return this
    }

    //
    // Given a sequence of squares, draw an arrow between them,
    // starting/ending in the middle of the first/last square,
    // and passing through the midpoint of every other square.
    // Then draw an arrow head on the end of the arrow.
    //
    draw_arrow (coordinates) {
        let from = coordinates [coordinates . length - 2]
        let to   = coordinates [coordinates . length - 1]

        //
        // First draw the line
        //
        this . draw_line (coordinates)

        let [x_from, y_from] = this . square_to_coord (from)
        let [x_to,   y_to]   = this . square_to_coord (to)

        //
        // This needs to be badly improved
        //
        let angle = 0
        if      (to [0] < from [0]) {
            if      (to [1] < from [1]) {angle = -135}
            else if (to [1] > from [1]) {angle = - 45}
            else                        {angle = - 90}
        }
        else if (to [0] > from [0]) {
            if      (to [1] < from [1]) {angle =  135}
            else if (to [1] > from [1]) {angle =   45}
            else                        {angle =   90}
        }
        else {
            if      (to [1] < from [1]) {angle =  180}
            else                        {angle =    0}
        }

        //
        // Draw an arrow head
        //
        let head = this . board . polygon ('5,0  0,-10  20,0  0,10')
                        . fill    ({color:  'black', opacity: 0.5})
                        . stroke  ({color:  'black', opacity: 0.5})
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
                                        this . square_to_coord (point)))
                     . stroke ({width:    1,
                                opacity:  0.5,
                                color:   'black',
                                linecap: 'round',})
                     . fill ('none')
        return this
    }
}

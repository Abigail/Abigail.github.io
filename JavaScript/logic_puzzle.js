class LogicPuzzle {
    static EMPTY = "&nbsp;"
    static parse (data) {
        let out = []
        let row =  0
        let col =  0
        for (const line of data . matchAll (/([^\n]+)/g)) {
            row += 1
            col  = 0
            out [row] = [" "]
            for (const char of line [0] . matchAll (/(\S)/g)) {
                col += 1
                out [row] [col] = char [0]
            }
            out [row] [col + 1] = " "
        }
        out [0]       = []
        out [row + 1] = []
        for (let x = 0; x <= col + 1; x ++) {
            out [0] [x]       = " "
            out [row + 1] [x] = " "
        }
        return [out, row, col]
    }

    static parse_playback (list) {
        let out = []
        for (const tokens of list .
                             matchAll (/R([0-9]+)C([0-9]+)\s*=\s*(\S+)/g)) {
            let [match, row, col, content] = tokens
            out . push ([+row + 1, +col + 1, content])
        }
        return out
    }

    constructor (args = {}) {
        let element
        if (args . id) {
            element = $(`div#${args . id}`)
        }
        if (!element && args . class) {
            element = $(`div#${args . class}`)
        }

        if (!element) {
            return
        }

        this . element     = element
        this . puzzle_type = $(element) . data ("type")

        //
        // Get the (raw) content of the div, and wipe its content
        //
        let description = $(element)  . text ()
        $(element) . html ("")

        let pattern = /%%\s*(\S+)\s*\n((?:[^%]+|%(?!%))+)/g;
        for (const match of description . matchAll (pattern)) {
            let type    = match [1]
            let content = match [2]
            if (type == "clues")    {
                [this . clues,    this . rows, this . cols] =
                 LogicPuzzle . parse (content)
            }
            if (type == "groups")   {
                [this . groups,   this . rows, this . cols] =
                 LogicPuzzle . parse (content)
            }
            if (type == "solution") {
                [this . solution, this . rows, this . cols] =
                 LogicPuzzle . parse (content)
            }
            if (type == "playback") {
                 this . playback_list = LogicPuzzle . parse_playback (content)
            }
        }
    }

    //
    // Build the initial table
    //
    build () {
        let groups   = this . groups
        let clues    = this . clues
        let solution = this . solution
        let out = `<table class = 'logic_puzzle ${this . puzzle_type}'>\n`
        for (let row = 1; row <= this . rows; row ++) {
            out += `  <tr class = 'row-${row}'>\n`
            for (let col = 1; col <= this . cols; col ++) {
                let classes = `cell-${row}-${col}`
                if (groups) {
                    if (groups [row] [col] != groups [row - 1] [col]) {
                        classes += ' tb'
                    }
                    if (groups [row] [col] != groups [row + 1] [col]) {
                        classes += ' bb'
                    }
                    if (groups [row] [col] != groups [row] [col - 1]) {
                        classes += ' lb'
                    }
                    if (groups [row] [col] != groups [row] [col + 1]) {
                        classes += ' rb'
                    }
                }
                else {
                    if (row == 1)           {classes += ' tb'}
                    if (row == this . rows) {classes += ' bb'}
                    if (col == 1)           {classes += ' lb'}
                    if (col == this . cols) {classes += ' rb'}
                }

                //
                // Determine the content:
                //    -  If there is a clue, use that.
                //    -  Else, if there is a solution, use that,
                //             after a possible translation.
                //    -  Else, the cell remains empty.
                //

                let class_name   = 'empty';
                let content = LogicPuzzle . EMPTY
                if (solution             &&
                    solution [row] [col] &&
                    solution [row] [col] != ".") {
                    content    = this . translate ("solution",
                                                    solution [row] [col])
                    class_name = 'solution'
                }
                if (clues                &&
                    clues    [row] [col] &&
                    clues    [row] [col] != ".") {
                    content    = this . translate ("clue", clues [row] [col])
                    class_name = 'clue'
                }
                let span = `<span class = ${class_name}>${content}</span>`

                out += `    <td class = '${classes} ${class_name}'>` +
                             `${span}</td>\n`
            }
            out += `  </tr>\n`
        }
        out += `</table>`

        $(this . element) . html (out)

        return this
    }

    //
    // For some puzzles, the solution will show fancy characters.
    // BY default, there is no translation.
    //
    translate (type, content) {
        let puzzle_type =   this . puzzle_type
        if (puzzle_type == "star-battle") {return "&#x2735;"}
        if (puzzle_type == "light-up")    {
            if (type == "solution") {return "&#x1F4A1;"}
            if (type == "clue") {
                if (content == "*") {return ""}
                return content
            }
        }
        return content
    }

    //
    // Return true if the cell is a clue
    //
    is_clue (row, col) {
        let clues = this . clues
        return clues [row] [col] != "."
    }

    //
    // Return the class name of a cell with the given coordinates
    //
    cell_class (row, col) {
        return `cell-${row}-${col}`
    }

    //
    // Set content of a cell
    //
    set_content (row, col, content = "") {
        let cell_class = this . cell_class (row, col)
        if (content == "") {
            content = LogicPuzzle . EMPTY
        }
        let class_name = 'empty'
        if (content != LogicPuzzle . EMPTY) {
            class_name = 'solution'
        } 
        $(`td.${cell_class}`) . html (content)
        $(`td.${cell_class}`) . addClass (class_name)
        return this
    }

    //
    // Return true if the cell is empty
    // This is a bit of a hack, may want to improve it.
    //
    is_empty (row, col) {
        let cell_class = this . cell_class (row, col)
        let content = $(`td.${cell_class}`) . text ()
        return content == "\u{A0}"
    }

    reveal (args = {}) {
        let delay = args . delay || 50
        $(this . element) . find ("span.solution") . each ((i, span) => {
            setTimeout (() => {
                $(span) . css ({visibility: "visible"})
            }, delay * i)
        })
    }

    //
    // Playback the solution
    //
    playback (args = {}) {
        let playback = this . playback_list
        let delay    = args . delay || 10
        let stack    = []
        let i        = -1
        for (const info of playback) {
            i ++
            let [row, col, content] = info

            setTimeout (() => {
                //
                // If the current cell isn't empty,
                // clear cells from the stack
                //
                if (!this . is_empty (row, col)) {
                    while (stack . length) {
                        let [sr, sc] = stack . pop ()
                        this . set_content (sr, sc, "")
                        if (sr == row && sc == col) {
                            break
                        }
                    }
                }
                this . set_content (row, col, content)
                stack . push ([row, col])
            }, i * delay)
        }
    }
}

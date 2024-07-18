$(window) . on ("load", () => {
    $("div.logic_puzzle") . each ((i, e) => {
        let puzzle = new LogicPuzzle ({element: e})
        puzzle . build ()
    })
})


class LogicPuzzle {
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

    constructor (args = {}) {
        let element = args . element
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
        }
    }

    //
    // Build the initial table
    //
    build () {
        let groups   = this . groups
        let clues    = this . clues
        let solution = this . solution
        console . log (clues)
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
                let content = "&nbsp;";
                if (solution             &&
                    solution [row] [col] &&
                    solution [row] [col] != ".") {
                    content    = this . translate (solution [row] [col])
                    class_name = 'solution'
                }
                if (clues                &&
                    clues    [row] [col] &&
                    clues    [row] [col] != ".") {
                    content    = clues [row] [col]
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
    }

    //
    // For some puzzles, the solution will show fancy characters.
    // BY default, there is no translation.
    //
    translate (solution) {
        let puzzle_type =   this . puzzle_type
        if (puzzle_type == "star-battle") {return "&#x2735;"}
        if (puzzle_type == "light-up")    {return "<small>&#x1F4A1;</small>"}
        return solution
    }
}

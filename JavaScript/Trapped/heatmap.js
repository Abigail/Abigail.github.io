$(window) . on ("load", () => {
    let file       = location . href . replace (/^.*\//,   "") 
                                     . replace (/\?.*/,    "")
                                     . replace (/\.html$/, "")
    if (file == "index") {
        return
    }

    $("div.heatmap") . each ((i, e) => {
        make_heatmap ({element: e, piece: file})
    })
})


function index_to_th (index, type, info) {
    let [min_row, max_row, min_col, max_col] = info
    if (type == "rows") {
        if (min_row && index <= min_row) {return `< ${min_row + 1}`}
        if (max_row && index >= max_row) {return `> ${max_row - 1}`}
    }
    if (type == "cols") {
        if (min_col && index <= min_col) {return `< ${min_col + 1}`}
        if (max_col && index >= max_col) {return `> ${max_col - 1}`}
    }

    return index
}

function pretty_total (total) {
    return total . toString () 
                 . replace (/000000000$/, "G")
                 . replace (   /000000$/, "M")
                 . replace (      /000$/, "k")
}

function make_heatmap (args = {}) {
    let element = args . element
    if (!element) {
        return
    }

    //
    // Get the content of the element
    //
    let description = $(element)  . text ()
    $(element) . html ("")

    let min_row    = 0
    let max_row    = 0
    let min_col    = 0
    let max_col    = 0
    let has_border = false
    let min_row_b  = false
    let max_row_b  = false
    let min_col_b  = false
    let max_col_b  = false

    const pattern = new RegExp (
        /^%\s*Box:\s*\[(-?\d+)(\*?),\s*(-?\d+)(\*?)\],?/ . source +
                 /\s*\[(-?\d+)(\*?),\s*(-?\d+)(\*?)\]/   . source, 'm')
    const match = description . match (pattern)
    if (match) {
        min_row   = +match [1]
        max_row   = +match [3]
        min_col   = +match [5]
        max_col   = +match [7]
        if (match [2] == "*") {min_row_b = min_row}
        if (match [4] == "*") {max_row_b = max_row}
        if (match [6] == "*") {min_col_b = min_col}
        if (match [8] == "*") {max_col_b = max_col}
        has_border = true
    }

    let minmax_b = [min_row_b, max_row_b, min_col_b, max_col_b];

    let board = description . replaceAll (/[-+|]+/g,     "")
                            . replaceAll (/^\s*%.*\n/gm, "")
                            . replaceAll (/^\s+/gm,      "")
                            . replaceAll (/ +\n/g,     "\n")
                            . split      (/\n+/)
                            . filter     ((line) => line . match (/\S/))
                            . map        ((line) => line . split (/\s+/))

    //
    // Find the max and total
    //
    let max_value = 0
    let total     = 0
    board . forEach ((row) => {
        row . forEach ((field) => {
            if (field != "." && field != "*") {
                let value = + field
                if (value > max_value) {max_value = value}
                total += value
            }
        })
    })

    let table = "<figure class = 'heatmap'><table class = 'heatmap'>"
    if (has_border) {
        table += "<tr><th></th>";
        for (let i = min_col; i <= max_col; i ++) {
            table += `<th>${index_to_th (i, "cols", minmax_b)}</th>`
        }
    }
    board . forEach ((row, row_index) => {
        table += "<tr>"
        let real_row = min_row + row_index
        if (has_border) {
            //
            // Flip the sign of the row difference, so positive is "up"
            //
            table += `<th>${index_to_th (-(real_row), "rows", minmax_b)}</th>`
        }
        row . forEach ((field, col_index) => {
            let real_col = min_col + col_index
            if (field == "*") {
                table += "<td style = 'text-align: center'>&#x2735;</td>"
            }
            else if (field == ".") {
                table += "<td></td>"
            }
            else {
                let value    = + field
                let perc     = Math . round (100 * value / total)
                let col_perc = 100 - (100 * value / max_value) / 2
                let color    = `hsl(0, 100%, ${col_perc}%)`
                let content  = `${perc}%`
                if (perc < 1 || value < 100) {
                    content  = value
                }

                if (min_row_b && min_row_b == real_row ||
                    max_row_b && max_row_b == real_row ||
                    min_col_b && min_col_b == real_col ||
                    max_col_b && max_col_b == real_col) {
                    color = 'orange'
                }

                table += `<td style = 'background-color: ${color}'>` +
                         `${content}</td>`
            }
        })
        table += "</tr>"
    })
    table += "</table>"
    table += `<figcaption>Heatmap after ${pretty_total (total)} ` +
             `moves</figcaption></fig>`
    $(element) . html (table)
}

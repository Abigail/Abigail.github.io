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


function index_to_th (index) {
    if (index < -10) {return "< -10"}
    if (index >  10) {return "> 10"}
    return index
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

    const match = description . match (
        /^%\s*Box:\s*\[(-?\d+),\s*(-?\d+)\],?\s*\[(-?\d+),\s*(-?\d+)\]/m)
    if (match) {
        min_row = +match [1]
        max_row = +match [2]
        min_col = +match [3]
        max_col = +match [4]
        has_border = true
    }

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
            table += `<th>${index_to_th (i)}</th>`
        }
    }
    board . forEach ((row, row_index) => {
        table += "<tr>"
        if (has_border) {
            //
            // Flip the sign of the row difference, so positive is "up"
            //
            table += `<th>${index_to_th (-(min_row + row_index))}</th>`
        }
        row . forEach ((field) => {
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
                let hsl      = `hsl(0, 100%, ${col_perc}%)`
                let content  = `${perc}%`
                if (perc < 1 || value < 100) {
                    content  = value
                }
                table += `<td style = 'background-color: ${hsl}'>` +
                         `${content}</td>`
            }
        })
        table += "</tr>"
    })
    table += "</table>"
    table += `<figcaption>Heatmap after ${total} moves</figcaption></fig>`
    $(element) . html (table)
}

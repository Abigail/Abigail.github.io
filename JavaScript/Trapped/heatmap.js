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

    let board = description . replaceAll (/[-+|]+/g, "")
                            . replaceAll (/ +\n/g, "\n")
                            . split   (/\n+/)
                            . filter  ((line) => line . match (/\S/))
                            . map     ((line) => line . split (/\s+/))

    console . log (board)
    
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

    console . log (`max = ${max}; total = ${total}`)

    let table = "<table class = 'heatmap'>"
    board . forEach ((row) => {
        table += "<tr>"
        row . forEach ((field) => {
            if (field == "*") {
                table += "<td style = 'text-align: center'>*</td>"
            }
            else if (field == ".") {
                table += "<td></td>"
            }
            else {
                let value    = + field
                let perc     = Math . round (100 * value / total)
                let col_perc = 100 - (100 * value / max_value) / 2
                let hsl      = `hsl(0, 100%, ${col_perc}%)`
                table += `<td style = 'background-color: ${hsl}'>${perc}%</td>`
            }
        })
        table += "</tr>"
    })
    table += "</table>"
    $(element) . html (table)
}

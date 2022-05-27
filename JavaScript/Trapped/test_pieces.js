//
// Kick off the page
//
$(window) . on ("load", () => {
    let div = $("#pieces")
    set_up_test (div)
})


function set_up_test (div) {
    let table  = "<table id = 'test_piece_table'>\n"
        table += "<tr><th>Name</th><th colspan = 4>Move</th></tr>\n"
        table += "<tr><th></th><th>#</th>" +
                     "<th>dr</th><th>dc</th><th>max</th></tr>\n"
    let pieces = window . pieces
    for (const name in pieces) {
        let piece = new Piece ({piece_name: name})
        let moves = piece . moves ()
            moves . sort ((a, b) => {
                        let a_dc   = a . dc  ?? 0
                        let a_dr   = a . dr  ?? 0
                        let a_max  = a . max ?? 0
                        let b_dc   = b . dc  ?? 0
                        let b_dr   = b . dr  ?? 0
                        let b_max  = b . max ?? 0
                        if (a_dr < b_dr) {return -1} else
                        if (a_dr > b_dr) {return  1} else
                        if (a_dc < b_dc) {return -1} else
                        if (a_dc > b_dc) {return  1} else
                                          return a_max - b_max
        })
        let num   = moves . length
        table += "<tr>"
        table += `<th rowspan = '${num}' class = "name">` +
                 `${piece . name ()}</th>`
        moves . forEach ((move, i) => {
            if (i > 0) {
                table += "<tr>"
            }
            table += `<td class = "c">  ${i + 1}           </td>`
            table += `<td class = "dr"> ${move . dr  ?? ""}</td>`
            table += `<td class = "dc"> ${move . dc  ?? ""}</td>`
            table += `<td class = "max">${move . max ?? ""}</td>`
            table += "</tr>"
        })
    }
    table += "</table>"

    div . html (table)
}

//
// Kick off the page
//
let movement_knight = ["f", "fh", "fs", "fl", "fr", "ff",
                       "b", "bh", "bs", "bl", "br", "bb",
                      ];

$(window) . on ("load", () => {
    let div = $("#pieces")
    set_up_test ({element: div, pieces: window . pieces})
    let div2 = $("#knight")
    set_up_test ({element: div2, movements: movement_knight, test: "N"})
})


function set_up_test (args = {}) {
    let table  = "<table class = 'test_piece_table'>\n"
        table += "<tr><th>Name</th><th colspan = 4>Move</th></tr>\n"
        table += "<tr><th></th><th>#</th>" +
                     "<th>dr</th><th>dc</th><th>max</th></tr>\n"

    let piece_list = []
    if (args . pieces) {
        for (const name in pieces) {
            piece_list . push (new Piece ({piece_name: name}))
        }
    }
    else {
        piece_list = args . movements . map ((movement) => {
            return new Piece ({"test-N": 1, modifiers: movement})
        })
        console . log (piece_list)
    }

    piece_list . forEach ((piece) => {
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
    })
    table += "</table>"

    args . element . html (table)
}

//
// Kick off the page
//
let movement_knight = [
       "f", "fh", "fs", "fl", "fr", "ff",
       "b", "bh", "bs", "bl", "br", "bb",
       "l", "lh", "lv", "lf", "lb", "ll",
       "r", "rh", "rv", "rf", "rb", "rr",
];
let movement_ferz = [
       "f", "fl", "fr",
       "b", "bl", "br",
       "l", "lf", "lb",
       "r", "rf", "rb",
];
let movement_wazir = [
       "f", "b", "l", "r", "v", "s"
];


$(window) . on ("load", () => {
    let div = $("#pieces")
    $("#pieces") . html (set_up_test ({pieces: window . pieces}))
    $("#knight") . html (set_up_test ({movements: movement_knight,
                                       key:      "N",
                                       name:     "Knight",
                                       no_end:    true, }) +
                         set_up_test ({movements: movement_ferz,
                                       key:      "F",
                                       name:     "Ferz",
                                       no_start:  true,
                                       no_end:    true})  +
                         set_up_test ({movements: movement_wazir,
                                       key:      "W",
                                       name:     "Wazir",
                                       no_start:  true,}))
})


function set_up_test (args = {}) {
    let table = "";

    if (!args . no_start) {
        table  = "<table class = 'test_piece_table'>\n"
        table += "<tr><th>Name</th><th colspan = 4>Move</th></tr>\n"
        table += "<tr><th></th><th>#</th>" +
                     "<th>dr</th><th>dc</th><th>max</th></tr>\n"
    }

    let piece_list = []
    if (args . pieces) {
        for (const name in pieces) {
            piece_list . push (new Piece ({piece_name: name}))
        }
    }
    else {
        piece_list = args . movements . map ((movement) => {
            return new Piece ({name:      args . name,
                               key:       args . key,
                               modifiers: movement})
        })
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

    if (!args . no_end) {
        table += "</table>"
    }

    return table
}

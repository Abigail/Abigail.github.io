//
// Handle the box sets
//

$(window) . on ("load", () => {
    $("div.boxset") . each ((i, e) => {
        set_up_boxset (e)
    })
})


function set_up_boxset (div) {
    let set_info = window . set_info
    let name     = $(div) . data ("piece")
    let piece    = new Piece ({piece_name: name})
    let sets     = piece . sets

    if (!sets) {
        return
    }

    let this_file  = window . location . href . match (/[^\/]*\.html/) [0]

    let table = "<table class = 'boxset'>"
    sets . forEach ((setname) => {
        let info   = set_info [setname]
        let pieces = info . pieces

        table += `<tr><th>${info . name || title_case (setname)}</th><td>`
        pieces . forEach ((piece_name, index) => {
            let name = ""
            let file = ""
            let piece = {}
            if (piece_name . match (/^!!/)) {
                name = piece_name . replace (/^!!/, "")
            }
            else {
                piece = new Piece ({piece_name: piece_name})
                file  = piece . file () . match (/[^\/]*\.html/) [0]
                name  = piece . name () . replaceAll (/\s+/g, "&nbsp;")

                if (piece . obsolete &&
                    piece . obsolete [setname]) {
                    name = `<strike>${name}</strike>`
                }
            }

            if (index > 0) {
                table += " &#xB7; "
            }

            table += `<span class = 'piece_name'>`
            if (file == "") {
                table += name
            }
            else if (this_file == file) {
                table += `<span class = 'self'>${name}</span>`
            }
            else {
                table += `<a href = '${piece . file ()}'>${name}</a>`
            }
            table += "</span>"
        })
        table += "</td></tr>\n"
    })
    table += "</table>"

    $(div) . html (table)
}



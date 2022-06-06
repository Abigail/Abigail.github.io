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
    let sets = $(div) . data ("sets") . split (/,\s*/)

    let this_file  = window . location . href . match (/[^\/]*\.html/) [0]

    let table = "<table class = 'boxset'>"
    sets . forEach ((setname) => {
        let info   = set_info [setname]
        let pieces = info . pieces

        table += `<tr><th>${info . name || title_case (setname)}</th><td>`
        pieces . forEach ((piece_name) => {
            let piece = new Piece ({piece_name: piece_name})
            let file  = piece . file () . match (/[^\/]*\.html/) [0]
            let name  = piece . name () . replaceAll (/\s+/g, "&nbsp;")

            table += `<span class = 'piece_name'>`
            if (this_file == file) {
                table += `<span class = 'self'>${name}</span>`
            }
            else {
                table += `<a href = '${piece . file ()}'>${name}</a>`
            }
            table += "</span> "
        })
        table += "</td></tr>\n"
    })
    table += "</table>"

    $(div) . html (table)
}



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

    let table = "<table class = 'boxset'>"
    sets . forEach ((setname) => {
        let info   = set_info [setname]
        let pieces = info . pieces

        table += `<tr><th>${title_case (setname)}</th><td>`
        pieces . forEach ((piece_name) => {
            let piece = new Piece ({piece_name: piece_name})
            table += `<span class = 'piece_name'>` +
                     `<a href = '${piece . file ()}'>` +
                     `${piece . name ()}</a></span> `
        })
        table += "</td></tr>"
    })
    table += "</table>"

    $(div) . html (table)
}



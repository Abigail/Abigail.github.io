$(document) . ready (() => {
    $("td.col-2,td.col-3,td.col-4") . each ((i, e) => {
        if ($(e) . text () . match (/^\s*T\//)) {
            $(e) . addClass ("trapped")
        } else
        if ($(e) . text () . match (/^\s*F\*/)) {
            $(e) . addClass ("interesting-fill")
        } else
        if ($(e) . text () . match (/^\s*F\b/)) {
            $(e) . addClass ("fill")
        } else
        if ($(e) . text () . match (/^\s*E\*/)) {
            $(e) . addClass ("interesting-escape")
        } else
        if ($(e) . text () . match (/^\s*E/)) {
            $(e) . addClass ("escape")
        } else 
        if ($(e) . text () . match (/^\s*(?:W|FC)/)) {
            $(e) . addClass ("boring")
        } else {
            $(e) . addClass ("unknown")
        }
    })

    make_index_table ()
})

//
// Map the content of the index table to a class
//
function css_class (content) {
    if (content . match (/^\s*T\//))         {return "trapped"}
    if (content . match (/^\s*F\*\//))       {return "interesting-fill"}
    if (content . match (/^\s*F\b/))         {return "fill"}
    if (content . match (/^\s*E\*\//))       {return "interesting-escape"}
    if (content . match (/^\s*E\b/))         {return "escape"}
    if (content . match (/^\s*(?:W|FC)\b/))  {return "boring"}
    if (content . match (/^\?/))             {return "unknown"}

    return ""
}

function linkify (args = {}) {
    let name = args . name || ""
    let href = args . href || ""

    //
    // If name has one or more [...](...) sections, use that
    // as links. Else, use the href
    //
    name = name . replaceAll (/\[([^\]]+)\]\(([^)]+)\)/g,
                              "<a href = '$2'>$1</a>")
    if (!name . match (/<a href =/)) {
        name = `<a href = '${href}'>${name}</a>`
    }

    name = name . replace (/\/\//, "</td><td class = 'piece-name'>")

    return name
}

let chess_pieces = {
    king: 1, queen: 1, rook: 1, bishop: 1, knight: 1, pawn: 1,
}

function make_index_table () {
    let div = $("div.index")

    let table  = "<table class = 'index'>"
        table += "<tr><th rowspan = 2 colspan = 2>Piece</th>"  +
                     "<th rowspan = 2>From</th>"   +
                     "<th rowspan = 2>Spiral</th>" +
                     "<th colspan = 2>Wedge</th>"  + 
                 "</tr>\n" 
        table += "<tr><th>Folded</th>" +
                     "<th>Flat</th></tr>\n"

    for (const set_name in set_info) {
        let set = set_info [set_name]
        let pieces = set . pieces
        if (set . chess_variant) {
            pieces = pieces . filter ((piece_name) => {
                return !chess_pieces [piece_name]
            })
        }

        pieces . forEach ((piece_name, i) => {
            let piece = new Piece ({piece_name: piece_name})
            let name  = piece . index_name_in_set ({set_name: set_name})
            let cs    = name . match (/\/\//) ? 1 : 2

            table += `<tr><td class = 'piece-name' colspan = '${cs}'>` +
                     linkify ({name: name,
                               href: piece . file ()})                 +
                      "</td>"
            if (i == 0) {
                let sname = set . name || title_case (set_name)
                if (set . href) {
                    sname = `<a href = '${set . href}'>${sname}</a>`
                }
                table += `<td rowspan = '${pieces . length}'>` +
                         `${sname}</td>`
            }
            if (piece . results) {
                piece . results . forEach ((content) => {
                    let class_name = css_class (content)
                    table += `<td class = '${class_name}'>${content}</td>`
                })
            }
            table += "</tr>\n"
        })
    }

    table += "</table>"

    $(div) . html (table)
}

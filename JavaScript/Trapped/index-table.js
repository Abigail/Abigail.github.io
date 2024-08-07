$(document) . ready (() => {
    make_index_table ()
})

//
// Map the content of the index table to a class
//
function css_class (content) {
    if (content . match (/^\s*T\//))            {return "trapped"}
    if (content . match (/^\s*F\*\//))          {return "interesting-fill"}
    if (content . match (/^\s*F\b/))            {return "fill"}
    if (content . match (/^\s*E\*\//))          {return "interesting-escape"}
    if (content . match (/^\s*E\b/))            {return "escape"}
    if (content . match (/^\s*(?:W|BM|FC)\b/))  {return "boring"}
    if (content . match (/^\?/))                {return "unknown"}

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
        table += "<tr><th colspan = 2>Piece</th>"  +
                     "<th colspan = 2>Spiral</th>" +
                     "<th colspan = 2>Wedge</th>"  + 
                 "</tr>\n" 
        table += "<tr><th>Name</th>"    +
                     "<th>Betza</th>"   +
                     "<th>Square</th>"  +
                     "<th>Diamond</th>" +
                     "<th>Folded</th>"  +
                     "<th>Flat</th></tr>\n"

    Object . keys (pieces) . map ((piece_name) => {
        return new Piece ({piece_name: piece_name})
    }) . sort ((p1, p2) => {
        let name1 = p1 . index_name ()
        let name2 = p2 . index_name ()
        if (name1 < name2) {return -1}
        if (name1 > name2) {return  1}
                            return  0
    }) . forEach ((piece) => {
        if (piece . parent) {
            return
        }
        let name  = piece . index_name ();

        table += `<tr><td class = 'piece-name'>`               +
                 linkify ({name: name, href: piece . file ()}) + "</td>"

        let betza = piece . betza || ""
        table += `<td class = "betza">${betza}</td>`

        if (piece . results) {
            ["spiral_square",
             "spiral_diamond",
             "wedge_folded",
             "wedge_flat"] . forEach ((name) => {
                let content = piece . results [name]
                if (content) {
                    let class_name = css_class (content)
                    table += `<td class = '${class_name}'>${content}</td>`
                }
                else {
                    table += `<td></td>`
                }
            })
        }
        table += "</tr>";
    })


    table += "</table>"

    $(div) . html (table)

    //
    // Typeset the Math again
    //
    MathJax . typeset ()
}


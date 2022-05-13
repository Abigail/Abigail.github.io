//
//
//

let dir   = "Trapped";

let pages = [
    ["king",         "King"],
    ["queen",        "Queen"],
    ["rook",         "Rook"],
    ["knight",       "Knight"],
    ["bishop",       "Bishop"],
    ["pawn",         "Pawn"],
    ["wazir",        "Wazir"],
    ["ferz",         "Ferz"],
    ["dabbada",      "Dabbada"],
    ["alfil",        "Alfil"],
    ["threeleaper",  "Threeleaper"],
    ["camel",        "Camel"],
    ["zebra",        "Zebra"],
    ["tripper",      "Tripper"],
    ["archbishop",   "Archbishop"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

//
//
//

let dir   = "Trapped";

let pages = [
    ["king",   "King"],
    ["queen",  "Queen"],
    ["rook",   "Rook"],
    ["knight", "Knight"],
    ["bishop", "Bishop"],
    ["pawn",   "Pawn"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

//
//
//

let dir   = "Trapped";

let pages = [[dir + "/" + "index.html", "Index"]]
for (const piece_name in window . pieces) {
    let piece = new Piece ({piece_name: piece_name})
    if (!piece . parent) {
        pages . push ([dir + "/" + piece . file (), piece . name ()])
    }
}

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

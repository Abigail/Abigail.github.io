//
//
//

let dir   = "Feature-Compare"

let pages = [
    ["booleans", "Booleans"],
]

pages . forEach (_ => _ [0] = dir + "/" + _ [0] + ".html")

window . pages = pages
window . dir   = dir
window . type  = "FC"

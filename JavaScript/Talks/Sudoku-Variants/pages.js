let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",    "Introduction"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})


window . pages = pages
window . dir   = dir

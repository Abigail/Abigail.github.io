let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro",    "Introduction"],
    ["test1",    "Test"],
    ["test2",    "Test"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})


window . pages = pages
window . dir   = dir

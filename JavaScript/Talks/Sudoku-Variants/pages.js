let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",    "Sudoku Introduction"],
    ["intro-02",    "Sudoku Naming"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

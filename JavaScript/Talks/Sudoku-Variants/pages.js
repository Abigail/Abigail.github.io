let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",         "Sudoku Introduction"],
    ["intro-02",         "Sudoku Naming"],
    ["intro-04",         "Sudoku by Regexp"],
    ["intro-05",         "Sudoku by Regexp"],
    ["intro-06",         "Regexp Limitations"],
    ["construction-01",  "Constructing a pattern"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

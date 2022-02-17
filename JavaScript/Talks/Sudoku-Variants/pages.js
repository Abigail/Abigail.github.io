let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",         "Sudoku Introduction"],
    ["intro-02",         "Sudoku Naming"],
    ["intro-04",         "Sudoku by Regexp"],
    ["intro-05",         "Sudoku by Regexp"],
    ["intro-06",         "Regexp Limitations"],
    ["construction-01",  "Constructing a pattern"],
    ["construction-02",  "Constructing a pattern"],
    ["construction-03",  "Constructing a pattern: Cell is a clue"],
    ["construction-04",  "Constructing a pattern: Cell is blank"],
    ["construction-05",  "Constructing a pattern"],
    ["construction-06",  "Constructing a pattern: Cells"],
    ["construction-07",  "Constructing a pattern: Cells"],
    ["construction-08",  "Constructing a pattern: Constraints"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

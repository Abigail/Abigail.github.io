let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",          "Sudoku Introduction"],
    ["intro-02",          "Sudoku Naming"],
    ["intro-04",          "Sudoku by Regexp"],
    ["intro-05",          "Sudoku by Regexp"],
    ["intro-06",          "Regexp Limitations"],
    ["statements-01",     "Statements"],
    ["statements-02",     "Statements"],
    ["statements-03",     "Statements: Cell is a clue"],
    ["statements-04",     "Statements: Cell is blank"],
    ["construction-05",   "Statements: Cells"],
    ["construction-06",   "Statements: Cells"],
    ["construction-07",   "Statements: Cells"],
    ["construction-08",   "House Constraints"],
    ["construction-09",   "Rephrase Constraints"],
    ["construction-10",   "DeBruijn Sequence"],
    ["construction-11",   "Assembling the pieces"],
    ["construction-12",   "Assembling the pieces"],
    ["construction-13",   "Example"],
    ["construction-14",   "All statements assembled"],
    ["construction-15",   "Statistics"],
    ["regexp-sudoku-00",  "Regexp::Sudoku"],
    ["regexp-sudoku-01",  "Regexp::Sudoku"],
    ["regexp-sudoku-02",  "Regexp::Sudoku"],
    ["regexp-sudoku-03",  "Regexp::Sudoku"],
    ["regexp-sudoku-04",  "Regexp::Sudoku"],
    ["size-4-1",          "Variant: Size 4 x 4"],
    ["size-4-2",          "Variant: Size 4 x 4"],
    ["size-4-3",          "Variant: Size 4 x 4"],
    ["size-6-1",          "Variant: Size 6 x 6"],
    ["size-6-2",          "Variant: Size 6 x 6"],
    ["size-12-1",         "Variant: Size 12 x 12"],
    ["size-12-2",         "Variant: Size 12 x 12"],
    ["nrc-1",             "Variant: NRC"],
    ["nrc-2",             "Variant: NRC"],
    ["nrc-3",             "Variant: NRC"],
    ["girandola-1",       "Variant: Girandola"],
    ["center-dot-01",     "Variant: Center Dot"],
    ["asterisk-1",        "Variant: Asterisk"],
    ["renban-01",         "Variant: Renban"],
    ["renban-03",         "Variant: Renban"],
    ["renban-05",         "Variant: Renban"],
    ["renban-06",         "Variant: Renban"],
    ["even-odd-01",       "Variant: Even/Odd"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

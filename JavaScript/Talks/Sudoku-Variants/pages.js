let dir = "Talks/Sudoku-Variants"

let pages = [
    ["intro-01",          "Sudoku Introduction"],
    ["intro-02",          "Sudoku Naming"],
    ["intro-04",          "Sudoku by Regexp"],
    ["intro-05",          "Sudoku by Regexp"],
    ["intro-06",          "Regexp Limitations"],
    ["construction-01",   "Constructing a pattern"],
    ["construction-02",   "Constructing a pattern"],
    ["construction-03",   "Constructing a pattern: Cell is a clue"],
    ["construction-04",   "Constructing a pattern: Cell is blank"],
    ["construction-05",   "Constructing a pattern"],
    ["construction-06",   "Constructing a pattern: Cells"],
    ["construction-07",   "Constructing a pattern: Cells"],
    ["construction-08",   "Constructing a pattern: Constraints"],
    ["construction-09",   "Constructing a pattern: Rephrase constraints"],
    ["construction-10",   "Constructing a pattern: DeBruijn Sequence"],
    ["construction-11",   "Constructing a pattern: Assembling the pieces"],
    ["construction-12",   "Constructing a pattern: Assembling the pieces"],
    ["construction-13",   "Constructing a pattern: Example"],
    ["construction-14",   "Constructing a pattern: Result"],
    ["construction-15",   "Constructing a pattern: Statistics"],
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
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

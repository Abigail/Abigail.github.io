//
//
//

let dir   = "AdventOfCode/2021";

let pages = [
    ["day-01", "Sonar Sweep"],
    ["day-02", "Dive!"],
    ["day-02", "Binary Diagnostic"],
]

pages . forEach (entry => {
    let number = entry [0] . substr (4, 5)
    entry [0]  = dir + "/" + entry [0] + ".html"
    entry [1]  = `Day ${number}: ` + entry [1]
})

window . pages = pages
window . dir   = dir
window . type  = "ADV"

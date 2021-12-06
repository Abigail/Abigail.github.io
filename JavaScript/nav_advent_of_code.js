//
//
//

let dir   = "AdventOfCode/2021";

let pages = [
    ["day-01", "Sonar Sweep"],
    ["day-02", "Dive!"],
    ["day-03", "Binary Diagnostic"],
    ["day-04", "Giant Squid"],
    ["day-05", "Hydrothermal Venture"],
    ["day-06", "Lanternfish"],
]

pages . forEach (entry => {
    let number = entry [0] . substr (4, 5)
    entry [0]  = dir + "/" + entry [0] + ".html"
    entry [1]  = `Day ${number}: ` + entry [1]
})

window . pages = pages
window . dir   = dir
window . type  = "ADV"

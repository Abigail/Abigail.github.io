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
    ["day-07", "The Treachery of Whales"],
    ["day-08", "Seven Segment Search"],
    ["day-09", "Smoke Basin"],
    ["day-10", "Syntax Scoring"],
    ["day-11", "Dumbo Octopus"],
    ["day-12", "Passage Pathing"],
    ["day-13", "Transparent Origami"],
    ["day-14", "Extended Polymerization"],
    ["day-15", "Chiton"],
]

pages . forEach (entry => {
    let number = entry [0] . substr (4, 5)
    entry [0]  = dir + "/" + entry [0] + ".html"
    entry [1]  = `Day ${number}: ` + entry [1]
})

window . pages = pages
window . dir   = dir
window . type  = "ADV"

//
//
//

let dir   = "AdventOfCode/2023";

let pages = [
    ["day-01", "Trebuchet?!"],
    ["day-02", "Cube Conundrum"],
    ["day-04", "Scratchcards"],
    ["day-06", "Wait For It"],
    ["day-07", "Camel Cards"],
    ["day-09", "Mirage Maintenance"],
]

pages . forEach (entry => {
    let number = entry [0] . substr (4, 5)
    entry [0]  = dir + "/" + entry [0] + ".html"
    entry [1]  = `Day ${number}: ` + entry [1]
})

window . pages = pages
window . dir   = dir
window . type  = "ADV"

//
//
//

let dir   = "AdventOfCode/2022";

let pages = [
    ["day-01", "Calorie Counting"],
    ["day-02", "Rock Paper Scissors"],
    ["day-03", "Rucksack Reorganization"],
]

pages . forEach (entry => {
    let number = entry [0] . substr (4, 5)
    entry [0]  = dir + "/" + entry [0] + ".html"
    entry [1]  = `Day ${number}: ` + entry [1]
})

window . pages = pages
window . dir   = dir
window . type  = "ADV"

//
//
//

let dir   = "AdventOfCode/2021";

let pages = [
    ["day-01", "Sonar Sweep"],
]

pages . forEach (_ => _ [0] = dir + "/" + _ [0] + ".html")

window . pages = pages
window . dir   = dir
window . type  = "ADV"

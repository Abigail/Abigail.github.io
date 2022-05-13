//
//
//

let dir   = "Trapped";

let pages = [
    ["king",         "King (F/100%)"],
    ["queen",        "Queen (F/100%)"],
    ["rook",         "Rook (F/100%)"],
    ["bishop",       "Bishop (F */31.25%)"],
    ["knight",       "Knight (T/2015)"],
    ["pawn",         "Pawn (E)"],
    ["wazir",        "Wazir (F/100%)"],
    ["ferz",         "Ferz (F/50%)"],
    ["dabbaba",      "Dabbaba (F/25%)"],
    ["alfil",        "Alfil (F/11.1%)"],
    ["threeleaper",  "Threeleaper (F/11.1%)"],
    ["camel",        "Camel (T/3722)"],
    ["zebra",        "Zebra (T/4633)"],
    ["tripper",      "Tripper (F/6.25%)"],
    ["archbishop",   "Archbishop (T/6386)"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

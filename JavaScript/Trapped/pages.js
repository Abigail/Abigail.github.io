//
//
//

let dir   = "Trapped";

let pages = [
    //
    // Regular Chess
    //
    ["king",              "King"],
    ["queen",             "Queen"],
    ["rook",              "Rook"],
    ["bishop",            "Bishop"],
    ["knight",            "Knight"],
    ["pawn",              "Pawn"],
    //
    // Basic Leapers
    //
    ["wazir",             "Wazir"],
    ["ferz",              "Ferz"],
    ["dabbaba",           "Dabbaba"],
    ["alfil",             "Alfil"],
    ["threeleaper",       "Threeleaper"],
    ["camel",             "Camel"],
    ["zebra",             "Zebra"],
    ["tripper",           "Tripper"],
    //
    // Compound Pieces
    //
    ["archbishop",        "Archbishop"],
    //
    // Shogi
    //
    ["dragon_king",       "Dragon King"],
    ["dragon_horse",      "Dragon Horse"],
    ["gold_general",      "Gold General"],
    ["silver_general",    "Silver General"],
    ["katsura_horse",     "Katsura Horse"],
    ["incense_chariot",   "Incense Chariot"],

    //
    // Hunter-Falcon chess
    //
    ["hunter",            "Hunter"],
    ["falcon",            "Falcon"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

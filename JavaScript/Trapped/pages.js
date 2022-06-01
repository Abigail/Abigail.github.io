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
    ["fourleaper",        "Fourleaper"],
    ["giraffe",           "Giraffe"],
    ["stag",              "Stag"],
    ["antelope",          "Antelope"],
    ["commuter",          "Commuter"],
    ["flamingo",          "Flamingo"],

    //
    // Combined leapers
    //
    ["squirrel",          "Squirrel"],
    ["caliph",            "Caliph"],
    ["hawk",              "Hawk"],
    ["champion",          "Champion"],
    ["wizard",            "Wizard"],
    ["gnu",               "Gnu"],
    ["bison",             "Bison"],
    ["okapi",             "Okapi"],
    ["zebu",              "Zebu"],
    ["root_25_leaper",    "Root 25 Leaper"],
    ["root_50_leaper",    "Root 50 Leaper"],

    //
    // Riders
    //
    ["dabbabarider",      "Dabbabarider"],
    ["knightrider",       "Knightrider"],
    ["alfilrider",        "Alfilrider"],
    ["threeleaperrider",  "Threeleaperrider"],
    ["camelrider",        "Camelrider"],
    ["zebrarider",        "Zebrarider"],
    ["tripperrider",      "Tripperrider"],
    
    //
    // Knighted Pieces
    //
    ["archbishop",        "Archbishop"],
    ["chancellor",        "Chancellor"],
    ["amazon",            "Amazon"],

    // 
    // Pawned pieces
    //
    ["dragon",            "Dragon"],
    ["gryphon",           "Gryphon"],

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

    //
    // Shogi variants
    //
    ["blind_monkey",      "Blind Monkey"],
    ["flying_cock",       "Flying Cock"],

    //
    // Fairy Chess
    //
    ["frog",              "Frog"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

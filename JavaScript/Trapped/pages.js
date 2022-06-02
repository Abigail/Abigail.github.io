//
//
//

let dir   = "Trapped";

let pages = [
    //
    // Regular Chess
    //
    ["king"],
    ["queen"],
    ["rook"],
    ["bishop"],
    ["knight"],
    ["pawn"],
    //
    // Basic Leapers
    //
    ["wazir"],
    ["ferz"],
    ["dabbaba"],
    ["alfil"],
    ["threeleaper"],
    ["camel"],
    ["zebra"],
    ["tripper"],
    ["fourleaper"],
    ["giraffe"],
    ["stag"],
    ["antelope"],
    ["commuter"],
    ["flamingo"],

    //
    // Combined leapers
    //
    ["squirrel"],
    ["caliph"],
    ["hawk"],
    ["champion"],
    ["wizard"],
    ["gnu"],
    ["bison"],
    ["okapi"],
    ["zebu"],
    ["root_25_leaper"],
    ["root_50_leaper"],

    //
    // Riders
    //
    ["dabbabarider"],
    ["knightrider"],
    ["alfilrider"],
    ["threeleaperrider"],
    ["camelrider"],
    ["zebrarider"],
    ["tripperrider"],
    
    //
    // Knighted Pieces
    //
    ["archbishop"],
    ["chancellor"],
    ["amazon"],

    // 
    // Pawned pieces
    //
    ["dragon"],
    ["gryphon"],

    //
    // Shogi
    //
    ["dragon_king"],
    ["dragon_horse"],
    ["gold_general"],
    ["silver_general"],
    ["katsura_horse"],
    ["incense_chariot"],

    //
    // Hunter-Falcon chess
    //
    ["hunter"],
    ["falcon"],

    //
    // Chess variants
    //
    ["abbot"],

    //
    // Shogi variants
    //
    ["blind_monkey"],
    ["flying_cock"],

    //
    // Fairy Chess
    //
    ["frog"],
]

pages . forEach (entry => {
    if (entry . length == 1) {
        entry . push (title_case (entry [0]))
    }
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir
window . type  = "Trapped"

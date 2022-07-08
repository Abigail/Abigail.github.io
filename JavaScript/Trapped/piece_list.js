let pieces = {
    //
    // Chess pieces
    //
    king: {
        betza:  "K",
        results: ["W", "FC", "F/100%"],
    },
    queen: {
        betza:  "Q",
        results: ["W", "FC", "F/100%"]
    },
    rook: {
        betza:  "R",
        results: ["W", "T/6", "E"],
    },
    bishop: {
        betza:  "B",
        results: ["F/31.25%", "E", "E"],
     },
    knight: {
        betza:  "N",
        results: ["T/2015", "T/50", "E*"],
    },
    pawn: {
        betza:    "fW",
        results: ["E", "E", "E"],
    },


    //
    // Basic leapers
    //
    wazir: {        // (1, 0)-leaper
        betza:    "W",
        results: ["W", "T/6", "E"],
    },
    ferz: {         // (1, 1)-leaper
        betza:    "F",
        results: ["F/50%", "E", "E"],
    },
    dabbaba: {      // (2, 0)-leaper
        betza:    "D",
        results: ["F/25%", "E", "E"],
    },
    alfil: {        // (2, 2)-leaper
        betza:    "A",
        results: ["F/12.5%", "E", "E"],
    },
    threeleaper: {  // (3, 0)-leaper
        betza:    "H",
        results: ["F/11.1", "T/6", "E"],
    },
    camel: {        // (3, 1)-leaper
        betza:    "C",
        results: ["T/3722", "T/342", "T/2401"],
    },
    zebra: {        // (3, 2)-leaper
        betza:    "Z",
        results: ["T/4633", "T/80", "T/286"],
    },
    tripper:   {    // (3, 3)-leaper
        betza:    "G",
        results: ["F/5.56%", "E", "E"],
    },
    fourleaper: {   // (4, 0)-leaper
        betza:    "(0,4)",
        results: ["F/6.25%", "E", "E"],
    },
    giraffe: {      // (4, 1)-leaper
        betza:    "(1,4)",
        results: ["T/13102", "T/114", "T/94"],
    },
    stag: {         // (4, 2)-leaper
        betza:    "(2,4)",
        results: ["T/2015", "E*", "E*"],
    },
    antelope: {     // (4, 3)-leaper
        betza:    "(3,4)",
        results: ["T/1887", "T/128", "T/416"],
    },
    commuter: {     // (4, 4)-leaper
        betza:    "(4,4)",
        results: ["F/3.125%", "E", "E"],
     },
    flamingo: {     // (6, 1)-leaper
        betza:    "(1,6)",
        results: ["T/26966", "T/90", "T/260"],
    },

    //
    // Combined leapers (https://www.theproblemist.org/dloads/Glossary.pdf)
    //
    commoner: {
        parent: "king",
    },
    lioness: {
        betza: "WFDNA",
        results: ["W", "FC", "F/100%"],
    },
    centaur: {
        betza:    "WFN",
        results: ["W", "FC", "F/100%"],
    },
    war_machine: {
        betza:   "WD",
        results: ["W", "F/100%", "F/100%"],
    },
    champion: {
        betza:    "WAD",
        results: ["W", "F/100%", "F/100%"],
    },
    marquis: {
        betza:    "WN",
        results: ["W", "F/100%", "F/100%"],
    },
    caliph: {
        betza:    "WA",
        results: ["W", "F*/100%", "E"],
    },
    scirocco_frog: {
        betza:    "KGH",
        results: ["W", "FC", "F/100%"],
        _name:    "Frog",
        obsolete: {
            scirocco: 1,
        },
    },
    goat: {
        betza:    "FD",
        results: ["F/50%", "F/50%", "F/50%"],
    },
    fad: {
        betza:    "FDA",
        results: ["F/50%", "F/50%", "F/50%"],
        _name:    "FAD",
    },
    priest: {
        betza:    "FN",
        results: ["T/1050", "F*/100%", "F/100%"],
    },
    modern_elephant: {
        betza:    "FA",
        results: ["F*/50%", "E", "E"],
    },
    tadpole: {
        betza: "FH",
        results: ["?/1,066,282,804", "T/8,619,774", "T/4,637,261"],
    },
    wizard: {
        betza:    "FC",
        results: ["?/6,986,937", "F*/50%", "F/50%"],
    },
    squirrel: {
        betza:    "DNA",
        results: ["?/14,106,875", "F*/100%", "?/16,744,468"],
    },
    alibaba: {
        betza:    "AD",
        results: ["F/50%", "F/50%", "F/50%"],
    },
    hawk: {
        betza:    "ADGH",
        results: ["F*/100%", "F*/100%", "F*/100%"],
    },
    gnu: {
        betza:    "NC",
        results: ["?/1,067,426,464", "?/1,056,869,405", "F*/100%"],
    },
    okapi: {
        betza:    "NZ",
        results: ["T/947,668", "?/16,637,381", "E*"],
    },
    bison: {
        betza:    "CZ",
        results: ["T/844,094", "?/16,641,162", "?/12,266,550"],
    },
    zebu:  {
        betza:    "C(1,4)",
        results: ["?/16,421,113", "?/16,471,455", "?/11,122,547"],
    },
    root_25_leaper: {
        betza:    "(3,4)(5,0)",
        results: ["T/800,494", "T/644,454", "T/80,152"],
     },
    root_50_leaper: {
        betza:    "(5,5)(7,1)",
        results: ["?/7,751,614", "T/84,355", "?/7,104,702"],
    },


    //
    // Riders
    //
    wazirrider: {
        parent: "rook",
    },
    ferzrider: {
        parent: "bishop",
    },
    dabbabarider: {
        betza:    "DD",
        results: ["F/25%", "E", "E"],
    },
    knightrider: {
        betza:    "NN",
        results: ["T/509", "T/60", "T/22"],
    },
    alfilrider: {
        betza:    "AA",
        results: ["F*/7.8125%", "E", "E"],
    },
    threeleaperrider: {
        betza:    "HH",
        results: ["F/11.1&#x0305;%", "E", "E"],
    },
    camelrider: {
        betza:    "CC",
        results: ["T/1697", "T/90", "T/482"],
    },
    zebrarider: {
        betza:    "ZZ",
        results: ["T/266", "T/72", "T/57"],
    },
    tripperrider: {
        betza:    "GG",
        results: ["F*/3.472&#x0305;%", "E", "E"],
    },

    //
    // Compound pieces
    //    Knighted pieces
    //
    dragon: {
        betza:  "NfW",
        results: ["T/94,632", "T/42", "F*/100%"],
    },
    archbishop:    {
        betza:    "BN",
        results: ["T/6386", "F*/100%", "F*/100%"],
    },
    princess: {parent: "archbishop"},
    cardinal: {parent: "archbishop"},
    chancellor: {
        betza:    "RN",
        results: ["W", "F/100%", "F/100%"],
    },
    empress:  {parent: "chancellor"},
    amazon: {
        betza: "QN",
        results: ["W", "FC", "F/100%"],
    },

    //
    //     Crowned pieces
    //
    dragon_king: {
        betza:   "FR",
        results: ["W", "FC", "F/100%"],
    },
    dragon_horse: {
        betza:    "WB",
        results: ["W", "FC", "F/100%"],
    },



    //
    //     Pawned pieces
    //
    gryphon: {
        betza:  "BfW",
        results: ["T/47", "E", "E"],
    },



    //
    // Chess variants
    //
    //   - Hunter-Falcon chess
    //
    falcon: {
        betza:    "fBbR",
        results: ["F*/25%", "E", "E"],
    },
    hunter: {
        betza:    "fRbB",
        results: ["T/146", "E", "E"],
    },

    //
    //   -  Overkill Ecumenical Chess
    //
    ace: {
        parent: "amazon",
    },
    acme: {
        betza:    "QC",
        results: ["W", "FC", "F/100%"],
    },
    acropolis: {
        betza:    "RNC",
        results: ["W", "F*/100%", "F*/100%"],
    },
    actor: {
        betza:    "BNC",
        results: ["T/3,700,894", "F*/100%", "F*/100%"],
    },
    actress: {
        betza:    "QNC",
        results: ["W", "FC", "F/100%"],
    },
    oec_caliph: {
        betza:    "BC",
        _name:    "Caliph",
        results: ["T/1563", "F*/50%", "F*/50%"],
    },
    canvasser: {
        betza:    "RC",
        results: ["W", "F*/100%", "F*/100%"],
    },
    marshal: {
        parent: "chancellor",
    },


    //
    //   - Typhoon Chess, Scirocco Chess
    //
    abbot: {
        betza:    "F4N",
        results: ["T/6334", "F*/100%", "F*/100%"],
    },
    firzan: {
        parent: "ferz",
    },
    chariot: {
        betza:    "R4",
        results: ["W", "T/6", "E"],
    },
    octopus: {
        betza:      "t[FR]",
        results:   ["E*", "T/7", "E"],
        move_list: [
            {dr: -1, dc:  0, or: -1, oc:  1},
            {dr:  0, dc:  1, or: -1, oc:  1},
            {dr: -1, dc:  0, or: -1, oc: -1},
            {dr:  0, dc: -1, or: -1, oc: -1},
            {dr:  1, dc:  0, or:  1, oc:  1},
            {dr:  0, dc:  1, or:  1, oc:  1},
            {dr:  1, dc:  0, or:  1, oc: -1},
            {dr:  0, dc: -1, or:  1, oc: -1},
        ]
    },
    zig: {
        parent: "war_machine",
    },
    zag: {
        parent: "modern_elephant",
    },
    wildebeest: {
        parent: "gnu",
    },
    genie: {
        betza:    "W3F3",
        results: ["W", "FC", "F*/100%"],
    },
    dervish: {
        parent:   "alibaba",
    },
    harpy: {
        parent:   "genie",
    },
    duke: {
        betza:    "W4N",
        results: ["W", "F/100%", "F/100%"],
    },
    emperor: {
        parent:  "champion",
    },
    guard: {
        parent:  "wazir",
    },
    stork: {
        parent:  "alfil",
    },
    scirocco: {
        parent:  "dragon_horse",
    },
    vulture: {
        parent:  "dragon_horse",
    },
    wagon: {
        results: ["F/25%", "E", "E"],
        move_list: [
            {dr: -1, dc:  0, min_land: 2},
            {dr:  1, dc:  0, min_land: 2},
            {dr:  0, dc: -1, min_land: 2},
            {dr:  0, dc:  1, min_land: 2},
        ],
    },
    spider: {
        betza: "t[WB]",
        results: ["W", "T/10", "E"],
        move_list: [
            {dr: -1, dc:  1, or: -1, oc:  0},
            {dr: -1, dc: -1, or: -1, oc:  0},
            {dr:  1, dc:  1, or:  1, oc:  0},
            {dr:  1, dc: -1, or:  1, oc:  0},
            {dr: -1, dc: -1, or:  0, oc: -1},
            {dr: -1, dc: -1, or:  0, oc: -1},
            {dr:  1, dc:  1, or:  0, oc:  1},
            {dr:  1, dc:  1, or:  0, oc:  1},
        ],
    },

    //
    // Typhoon
    //
    banner: {
        betza:    "fsW",
        results: ["F/25%", "F/100%", "E"],
    },
    beaver: {
        betza:    "fFfWsW4bW0",
        results: ["W", "FC", "F*/100%"],
    },
    bishops_dog: {
        betza:    "F3",
        results: ["T/129", "E", "E"],
        _name:    "Bishop's Dog",
    },
    blind_tiger: {
        betza:    "FbsW",
        results: ["F*/100%", "FC", "F/100%"],
    },
    cicada: {
        parent: "king",
    },
    copper_general: {
        betza:    "fFvW",
        results: ["E*", "E", "E"],
    },
    cuckoo: {
        betza:    "sWfD",
        results: ["F/12.5%", "E", "E"],
    },
    dayrider: {
        betza:    "WFAADD",
        results: ["W", "FC", "F/100%"],
    },
    diving_osprey: {
        betza:    "W4fFA",
        results: ["W", "FC", "F/100%"],
    },
    dragon_kite: {
        parent:   "dragon_king",
    },
    elephant_prince: {
        parent:   "king",
    },
    ferocious_leopard: {
        betza:    "FvW",
        results: ["F/100%", "E", "E"],
    },
    fire_horse: {
        betza:    "fRbhN",
        results: ["T/45", "E*", "E*"],
    },
    flying_ox: {
        betza:    "BvR",
        results: ["T/540", "E", "E"],
    },
    free_boar: {
        betza:    "BsR",
        results: ["T/251", "FC", "F/100%"],
    },
    fu: {
        parent:   "pawn",
    },
    ghost_warrior: {
        betza:    "bFfR",
        results: ["F*/25%", "E", "E"]
    },
    horned_owl: {
        betza:    "F4DfW",
        results: ["?/1,056,723,023", "F/50%", "F*/100%"],
    },
    hummingbird: {
        betza:    "sbWfD",
        results: ["T/172", "E", "E"],
    },
    ibis: {
        parent:   "dragon_king",
    },
    lantern: {
        betza:    "fF",
        results: ["E", "E", "E"],
    },
    longleaper: {
        parent:   "queen",
    },
    missionary: {
        betza:    "F2",
        results: ["F/40.625%", "E", "E"],
    },
    otter: {
        betza:    "FfWsW4",
        results: ["T/321", "FC", "F/100%"],
    },
    overtaker: {
        parent:   "king",
    },
    parrot: {
        parent:   "war_machine",
    },
    raven: {
        parent:   "modern_elephant",
    },
    salamander: {
        parent:   "king",
    },
    sorcerer: {
        betza:    "W2F2",
        results: ["W", "FC", "F/100%"],
    },
    tiger_prince: {
        parent:   "king",
    },
    typhoon: {
        parent:   "genie",
    },
    undertaker: {
        parent:   "king",
    },

    //
    // Fairy Chess
    //
    frog: {
        betza: "FH",
        results: ["?", "F*/100%", "F*/100%"],
    },




    //
    // Shogi
    //
    "gold_general": {
        betza:  "WfF",
        results: ["W", "FC", "F/100%"],
     },
    "silver_general": {
        betza:  "FfW",
        results: ["F*/100%", "E", "E"],
     },
    "shogi_knight": {
        betza:  "fN",
        _name:  "Knight",
        results: ["E", "E", "E"],
     },
    "lance": {
        betza:  "fR",
        results: ["E", "E", "E"],
     },


    //
    // Shogi variants
    //
    //   -  Tori Shogi
    //
    "phoenix": {
        parent: "king",
    },
    "eagle": {
        betza:  "fBbRfsWbB2",
        results: ["W", "FC", "F/100%"],
     },
    "tori_falcon": {
        parent: "drunk_elephant",
        _name:  "Falcon",
        results: ["F*/100%", "FC", "F/100%"],
     },
    "crane": {
        betza:  "FvW",
        results: ["F*/100%", "E*", "F/100%"],
     },
    "pheasant": {
        betza:  "fDbF",
        results: ["E", "E", "E"],
     },
    "left_quail": {
        betza:  "fRbrBblF",
        results: ["T/146", "E", "E"],
     },
    "right_quail": {
        betza:  "fRblBbrF",
        results: ["F*/25%", "E", "E"],
     },
    "swallow": {
        parent: "pawn",
     },
    "goose": {
        betza:  "fAbD",
        results: ["E*", "E", "E"],
     },

    //
    //   -  Dobutsu Shogi
    //
    dobutsu_lion: {
        parent: "king",
        _name: "Lion",
    },
    dobutsu_giraffe: {
        parent: "wazir",
        _name: "Giraffe",
    },
    dobutsu_elephant: {
        parent: "ferz",
        _name: "Elephant",
    },
    dobutsu_chick: {
        parent: "pawn",
        _name: "Chick",
    },
    dobutsu_hen: {
        parent: "gold_general",
        _name: "Hen",
    },

    //
    //   - Whale Shogi
    //
    white_whale: {
        parent: "king",
    },
    blue_whale: {
        parent:   "copper_general",
    },
    grey_whale: {
        parent:   "hunter",
    },
    humpback: {
        betza:    "bWF",
        results: ["E*", "", ""],
    },
    killer_whale: {
        parent:   "dragon_king",
    },
    narwhal: {
        parent:   "hummingbird",
    },
    porpoise: {
        betza:    "sW",
        results: ["E", "", ""],
    },
    dolphin: {
        parent:   "pawn",
    },


    //
    //   -  Other Shogi variants
    //
    "blind_monkey": {
        betza:    "FsW",
        results: ["F*/100%", "FC", "F/100%"],
     },
    "flying_cock": {
        betza:    "fFsW",
        results: ["E*", "FC", "F*/100%"],
     },
    "drunk_elephant": {
        betza: "FfsW",
        results: ["F*/100%", "FC", "F/100%"],
     },

}

//
// General order of pieces:
//   - Royal pieces first
//   - Main (regular) chess pieces, except pawn
//   - Basic Leapers
//   - Other (non-pawn) pieces either in alphabetical order, or
//     in order of strenght, or in order of mobility
//   - Pawn and pawn like pieces
//   - Obsolete pieces, if any, last.
//

let set_info = {
    chess: {
        pieces: ["king", "queen", "rook", "bishop", "knight", "pawn"],
    },

    //
    // Basic building blocks
    //
    basic_leapers: {
        pieces: ["wazir",       "ferz",
                 "dabbaba",     "knight",  "alfil",
                 "threeleaper", "camel",   "zebra", "tripper",
                 "fourleaper",  "giraffe", "stag",  "antelope", "commuter",
                 "flamingo"],
    },
    combined_leapers: {
        pieces: ["king", "lioness", "centaur", "scirocco_frog",
                 "war_machine", "champion",
                 "marquis", "caliph", "goat", "fad", "priest",
                 "modern_elephant",
                 "wizard", "tadpole", "squirrel", "alibaba", "hawk",
                 "gnu", "okapi", "bison", "zebu",
                 "root_25_leaper", "root_50_leaper"]
    },
    riders: {
        pieces: ["wazirrider", "ferzrider",
                 "dabbabarider", "knightrider", "alfilrider",
                 "threeleaperrider", "camelrider",
                                     "zebrarider", "tripperrider",]
    },


    //
    // Compound pieces
    //
    knighted_pieces: {
        pieces: ["dragon", "priest", "archbishop", "duke",
                 "chancellor", "amazon", "gnu", "okapi"],
    },
    crowned_pieces: {
        pieces: ["dragon_king", "dragon_horse"],
    },
    pawned_pieces: {
        pieces: ["dragon", "gryphon"],
    },


    //
    // Chess variants
    //
    falcon_hunter_chess: {
        href: "https://en.wikipedia.org/wiki/Falcon-hunter_chess",
        name: "Falcon-Hunter Chess",
        pieces: ["king", "queen", "rook", "falcon", "hunter",
                 "bishop", "knight", "pawn"],
        chess_variant: 1,
    },
    omega_chess: {
        href:    "https://en.wikipedia.org/wiki/Omega_Chess",
        pieces: ["king", "queen", "rook", "champion", "wizard",
                 "bishop", "knight", "pawn"],
        chess_variant: 1,
    },
    overkill_ecumenical_chess: {
        href:    "https://www.chessvariants.com/rules/" +
                 "overkill-ecumenical-chess",
        pieces: ["king", "ace", "acme", "acropolis", "actor", "actress",
                 "oec_caliph", "canvasser", "cardinal", "gnu",
                 "marshal", "queen", "pawn"],
        chess_variant: 1,
    },
    scirocco: {
        href: "https://www.chessvariants.com/rules/scirocco",
        pieces: ["king", "emperor", "queen", "rook", "bishop",
                 "knight", "wazir", "firzan", "dabbaba", "alfil",
                 "camel", "zebra", 

                 "abbot", "chariot", "commoner", "dervish", "duke",
                 "genie", "goat", "guard", "harpy", "lioness",
                 "marquis", "octopus", "priest",
                 "scirocco", "spider", "squirrel", "stork",
                 "tadpole", "vulture", "wagon", "wildebeest",
                 "zag", "zig",
                 
                 "pawn",  "scirocco_frog",],
        chess_variant: 1,
    },
    typhoon: {
        href: "https://www.chessvariants.com/rules/typhoon-revised",
        pieces: ["king", "emperor", "queen", "rook", "bishop",
                 "knight", "wazir", "firzan", "dabbaba", "alfil",
                 "camel", "zebra", 
            
                 "abbot", "banner", "beaver", "bishops_dog", "blind_tiger",
                 "centaur", "chariot", "cicada", "copper_general", "cuckoo",
                 "dayrider", "diving_osprey", "dragon_kite", "drunk_elephant",
                 "duke", "elephant_prince", "ferocious_leopard", "fire_horse",
                 "flying_ox", "free_boar", "genie", "ghost_warrior", "goat",
                 "gold_general", "guard", "harpy", "horned_owl", "hummingbird",
                 "ibis", "lantern", "lioness", "longleaper", "marquis",
                 "missionary", "knightrider", "octopus", "otter", "overtaker",
                 "parrot", "priest", "raven", "salamander", "scirocco",
                 "sorcerer", "spider", "squirrel", "stork", "tadpole",
                 "tiger_prince", "typhoon", "undertaker", "vulture", "wagon",
                 "wildebeest", "zag", "zig",

                 "fu", "pawn",
                 ],
        chess_variant: 1,
    },

    //
    // Shogi and shogi variants
    //
    shogi: {
        name:    "Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Shogi",
        pieces: ["king", "rook", "dragon_king", "bishop", "dragon_horse",
                 "gold_general", "silver_general", "shogi_knight",
                 "lance", "pawn"],
    },
    tori_shogi: {
        name:    "Tori Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Tori_Shogi",
        pieces: ["phoenix", "eagle", "tori_falcon", "crane", "pheasant",
                 "left_quail", "right_quail", "swallow", "goose"],
        shogi_variant: 1,
    },
    dobutsu_shogi: {
        name: "D&#x14d;butsu Sh&#x14d;gi",
        href: "https://en.wikipedia.org/wiki/D%C5%8Dbutsu_sh%C5%8Dgi",
        pieces: ["dobutsu_lion", "dobutsu_giraffe", "dobutsu_elephant",
                 "dobutsu_chick", "dobutsu_hen"],
    },
    whale_shogi: {
        name: "Whale Sh&#x14d;gi",
        href: "https://www.chessvariants.com/shogivariants.dir/whale.html",
        pieces: ["white_whale",
                 "blue_whale", "grey_whale", "humpback", "killer_whale",
                 "narwhal", "porpoise",
                 "dolphin",],
    },

    shogi_variants: {
        name:    "Sh&#x14d;gi variants",
        pieces: ["blind_monkey", "flying_cock", "drunk_elephant"],
        shogi_variant: 1,
    },
}

//
// For each piece in a set, add the set to its "sets" property.
// For pieces with a parent, add the set to the parent.
//
for (set in set_info) {
    let seen = {}
    set_info [set] . pieces . forEach ((piece_name) => {
        let piece = pieces [piece_name]
        if (piece . parent) {
            piece = pieces [piece_name = piece . parent]
        }
        if (seen [piece_name]) {
            return
        }
        seen [piece_name] = 1
        if (!piece . sets) {
            piece . sets = []
        }
        piece . sets . push (set)
    })
}


window . pieces   = pieces
window . set_info = set_info

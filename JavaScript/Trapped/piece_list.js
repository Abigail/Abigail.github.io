let pieces = {
    //
    // Chess pieces
    //
    "king": {
        betza:  "K",
        prefix: "&#x2654;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            combined_leapers: "[King](king.html) // " +
                              "[Wazir](wazir.html) + [Ferz](ferz.html)",
            shogi: "[King](king.html) // &#x738b;&#x5c07;/&#x7389;&#x5c07;",
            tori_shogi: "[Phoenix](king.html?piece=phoenix) // &#x9d6c; (King)",
        }
     },
    "queen": {
        betza:  "Q",
        prefix: "&#x2655;",
        results: ["W", "FC", "F/100%"]
     },
    "rook": {
        betza:  "R",
        prefix: "&#x2656;",
        results: ["W", "T/6", "E"],
        index_names: {
            riders: "[Wazirrider](rook.html?piece=wazirrider) // " +
                    "(1, 0) - rider (Rook)",
            shogi:  "[Rook](rook.html) // &#x98db;&#x8eca;",
        },
     },
    "bishop": {
        betza:  "B",
        prefix: "&#x2657;",
        results: ["F/31.25%", "E", "E"],
        index_names: {
            riders: "[Ferzrider](bishop.html?piece=ferzrider) // " +
                    "(1, 1) - rider (Bishop)",
            shogi:  "[Bishop](bishop.html) // &#x89d2;&#x884c;",
        },
     },
    "knight": {
        betza:  "N",
        prefix: "&#x2658;",
        results: ["T/2015", "T/50", "E*"],
        index_names: {
            basic_leapers: "[Knight](knight.html) // (2, 1) - leaper",
        },
     },
    "pawn": {
        betza:    "fW",
        prefix:   "&#x2659;",
        results: ["E", "E", "E"],
        index_names: {
            shogi: "[Pawn](pawn.html) // &#x6b69;&#x5175;",
            tori_shogi: "[Swallow](pawn.html?piece=swallow) // &#x9d70; (Pawn)",
        }
     },


    //
    // Basic leapers
    //
    "wazir": {        // (1, 0)-leaper
        betza:    "W",
        results: ["W", "T/6", "E"],
        index_names: {
            basic_leapers: "[Wazir](wazir.html) // (1, 0) - leaper",
        },
     },
    "ferz": {         // (1, 1)-leaper
        betza:    "F",
        results: ["F/50%", "E", "E"],
        index_names: {
            basic_leapers: "[Ferz](ferz.html) // (1, 1) - leaper",
        },
     },
    "dabbaba": {      // (2, 0)-leaper
        betza:    "D",
        results: ["F/25%", "E", "E"],
        index_names: {
            basic_leapers: "[Dabbaba](dabbaba.html) // (2, 0) - leaper",
        },
     },
    alfil: {        // (2, 2)-leaper
        betza:    "A",
        results: ["F/12.5%", "E", "E"],
        index_names: {
            basic_leapers: "[Alfil](alfil.html) // (2, 2) - leaper",
        },
    },
    threeleaper: {  // (3, 0)-leaper
        betza:    "H",
        results: ["F/11.1", "T/6", "E"],
        index_names: {
            basic_leapers: "[Threeleaper](threeleaper.html) // (3, 0) - leaper",
        },
    },
    camel: {        // (3, 1)-leaper
        betza:    "C",
        prefix:   "&#x1F42B;",
        results: ["T/3722", "T/342", "T/2401"],
        index_names: {
            basic_leapers: "[Camel](camel.html) // (3, 1) - leaper",
        },
    },
    zebra: {        // (3, 2)-leaper
        betza:    "Z",
        prefix:   "&#x1F993;",
        results: ["T/4633", "T/80", "T/286"],
        index_names: {
            basic_leapers: "[Zebra](zebra.html) // (3, 2) - leaper",
        },
    },
    tripper:   {    // (3, 3)-leaper
        betza:    "G",
        results: ["F/5.56%", "E", "E"],
        index_names: {
            basic_leapers: "[Tripper](tripper.html) // (3, 3) - leaper",
        },
    },
    fourleaper: {   // (4, 0)-leaper
        betza:    "(0,4)",
        results: ["F/6.25%", "E", "E"],
        index_names: {
            basic_leapers: "[Fourleaper](fourleaper.html) // (4, 4) - leaper",
        },
    },
    giraffe: {      // (4, 1)-leaper
        betza:    "(1,4)",
        results: ["T/13102", "T/114", "T/94"],
        index_names: {
            basic_leapers: "[Giraffe](giraffe.html) // (4, 1) - leaper",
        },
     },
    "stag": {         // (4, 2)-leaper
        betza:    "(2,4)",
        results: ["T/2015", "E*", "E*"],
        index_names: {
            basic_leapers: "[Stag](stag.html) // (4, 2) - leaper",
        },
     },
    "antelope": {     // (4, 3)-leaper
        betza:    "(3,4)",
        results: ["T/1887", "T/128", "T/416"],
        index_names: {
            basic_leapers: "[Antelope](antelope.html) // (4, 3) - leaper",
        },
     },
    "commuter": {     // (4, 4)-leaper
        betza:    "(4,4)",
        results: ["F/3.125%", "E", "E"],
        index_names: {
            basic_leapers: "[Commuter](commuter.html) // (4, 4) - leaper",
        },
     },
    "flamingo": {     // (6, 1)-leaper
        betza:    "(1,6)",
        results: ["?", "T/90", "T/260"],
        index_names: {
            basic_leapers: "[Flamingo](flamingo.html) // (6, 1) - leaper",
        },
     },

    //
    // Combined leapers (https://www.theproblemist.org/dloads/Glossary.pdf)
    //
    commoner: {
        parent: "king",
        prefix: "",
    },
    lioness: {
        betza: "WFDNA",
        results: ["W", "FC", "F/100%"],
        index_names: {
            combined_leapers: "[Lioness](lioness.html) // " +
                              "[Wazir](wazir.html) + "      +
                              "[Ferz](ferz.html) + "        +
                              "[Dabbaba](dabbaba.html) + "  +
                              "[Knight](knight.html) + "    +
                              "[Alfil](alfil.html)",
        },
    },
    centaur: {
        betza:    "WFN",
        results: ["W", "FC", "F/100%"],
        index_names: {
            combined_leapers: "[Centaur](centaur.html) // " +
                              "[Wazir](wazir.html) + "      +
                              "[Ferz](ferz.html) + "        +
                              "[Knight](knight.html)"
        },
    },
    war_machine: {
        betza:   "WD",
        results: ["W", "F/100%", "F/100%"],
        index_names: {
            combined_leapers: "[War Machine](war_machine.html) // " +
                              "[Wazir](wazir.html) + "        +
                              "[Dabbaba](dabbaba.html)"
        }
    },
    champion: {
        betza:    "WAD",
        results: ["W", "F/100%", "F/100%"],
        index_names: {
            combined_leapers: "[Champion](champion.html) // " +
                              "[Wazir](wazir.html) + "        +
                              "[Dabbaba](dabbaba.html) + "    +
                              "[Alfil](alfil.html)"
        }
    },
    marquis: {
        betza:    "WN",
        results: ["W", "F/100%", "F/100%"],
        index_names: {
            combined_leapers: "[Marquis](marquis.html) // " +
                              "[Wazir](wazir.html) + "    +
                              "[Knight](knight.html)"
        }
    },
    caliph: {
        betza:    "WA",
        results: ["W", "F*/100%", "E"],
        index_names: {
            combined_leapers: "[Caliph](caliph.html) // " +
                              "[Wazir](wazir.html) + "    +
                              "[Alfil](alfil.html)"
        }
    },
    scirocco_frog: {
        betza:    "KGH",
        results: ["W", "FC", "F/100%"],
        _name:    "Frog",
        index_names: {
            combined_leapers: "[Frog](scirocco_frog.html) // "     +
                              "[Wazir](wazir.html) + "             +
                              "[Ferz](ferz.html) + "               +
                              "[Threeleaper](threeleaper.html) + " +
                              "[Tripper](tripper.html)",
        },
        obsolete: {
            scirocco: 1,
        },
    },
    goat: {
        betza:    "FD",
        results: ["F/50%", "F/50%", "F/50%"],
        index_names: {
            combined_leapers: "[Goat](goat.html) // " +
                              "[Ferz](ferz.html) + "  +
                              "[Dabbaba](dabbaba.html)",
        },
    },
    fad: {
        betza:    "FDA",
        results: ["F/50%", "F/50%", "F/50%"],
        _name:    "FAD",
        index_names: {
            combined_leapers: "[FAD](fad.html) // "        +
                              "[Ferz](ferz.html) + "       +
                              "[Dabbaba](dabbaba.html) + " +
                              "[Alfil](alfil.html)"
        },
    },
    priest: {
        betza:    "FN",
        results: ["T/1050", "F*/100%", "F/100%"],
        index_names: {
            combined_leapers: "[Priest](priest.html) // " +
                              "[Ferz](ferz.html) + "      +
                              "[Knight](knight.html)",
            knighted_pieces:  "[Priest](priest.html) // " +
                              "[Knight](knight.html) + "  +
                              "[Ferz](ferz.html)",
        }
     },
     modern_elephant: {
        betza:    "FA",
        results: ["F*/50%", "E", "E"],
        index_names: {
            combined_leapers: "[Modern Elephant](modern_elephant.html) // " +
                              "[Ferz](ferz.html) + "                        +
                              "[Alfil](alfil.html)",
        },
     },
     wizard: {
        betza:    "FC",
        results: ["?", "F*/50%", "F/50%"],
        index_names: {
            combined_leapers: "[Wizard](wizard.html) // " +
                              "[Ferz](ferz.html) + "      +
                              "[Camel](camel.html)"
        },
    },
    tadpole: {
        betza: "FH",
        results: ["?", "?", "?"],
        index_names: {
            combined_leapers: "[Tadpole](tadpole.html) // " +
                              "[Ferz](ferz.html) + "      +
                              "[Threeleaper](threeleaper.html)"
        },
    },
    squirrel: {
        betza:    "DNA",
        results: ["?", "F*/100%", "?"],
        index_names: {
            combined_leapers: "[Squirrel](squirrel.html) // " +
                              "[Dabbaba](dabbaba.html) + "    +
                              "[Knight](knight.html) + "      +
                              "[Alfil](alfil.html)"
        }
    },
    "alibaba": {
        betza:    "AD",
        results: ["F/50%", "F/50%", "F/50%"],
        index_names: {
            combined_leapers: "[Alibaba](alibaba.html) // " +
                              "[Dabbaba](dabbaba.html) + "  +
                              "[Alfil](alfil.html)"
        }
     },
    "hawk": {
        betza:    "ADGH",
        results: ["F*/100%", "F*/100%", "F*/100%"],
        index_names: {
            combined_leapers: "[Hawk](hawk.html) // "              +
                              "[Dabbaba](dabbaba.html) + "         +
                              "[Alfil](alfil.html) + "             +
                              "[Threeleaper](threeleaper.html) + " +
                              "[Tripper](tripper.html)"
        }
     },
    "gnu": {
        betza:    "NC",
        results: ["?", "?", "F*/100%"],
        index_names: {
            combined_leapers: "[Gnu](gnu.html) // "      +
                              "[Knight](knight.html) + " +
                              "[Camel](camel.html)",
            knighted_pieces:  "[Gnu](gnu.html) // " +
                              "[Knight](knight.html) + [Camel](camel.html)",
        }
     },
    "okapi": {
        betza:    "NZ",
        results: ["?", "?", "E*"],
        index_names: {
            combined_leapers: "[Okapi](okapi.html) // "  +
                              "[Knight](knight.html) + " +
                              "[Zebra](zebra.html)",
            knighted_pieces:  "[Okapi](okapi.html) // " +
                              "[Knight](knight.html) + [Zebra](zebra.html)",
        }
     },
    "bison": {
        betza:    "CZ",
        results: ["?", "?", "?"],
        index_names: {
            combined_leapers: "[Bison](bison.html) // " +
                              "[Camel](camel.html) + "  +
                              "[Zebra](zebra.html)"
        }
     },
    "zebu":  {
        betza:    "C(1,4)",
        results: ["?", "?", "?"],
        index_names: {
            combined_leapers: "[Zebu](zebu.html) // "  +
                              "[Camel](camel.html) + " +
                              "[Giraffe](giraffe.html)"
        }
     },
    "root_25_leaper": {
        betza:    "(3,4)(5,0)",
        results: ["?", "?", "?"],
     },
    "root_50_leaper": {
        betza:    "(5,5)(7,1)",
        results: ["?", "?", "?"],
     },


    //
    // Riders
    //
    "wazirrider": {
        parent: "rook",
     },
    "ferzrider": {
        parent: "bishop",
     },
    "dabbabarider": {
        betza:    "DD",
        results: ["F/25%", "E", "E"],
        index_names: {
            riders: "[Dabbabarider](dabbabarider.html) // (2, 0) - rider",
        },
     },
    "knightrider": {
        betza:    "NN",
        results: ["T/509", "T/60", "T/22"],
        index_names: {
            riders: "[Knightrider](knightrider.html) // (2, 1) - rider",
        },
     },
    "alfilrider": {
        betza:    "AA",
        results: ["F*/7.8125%", "E", "E"],
        index_names: {
            riders: "[Alfilrider](alfilrider.html) // (2, 2) - rider",
        },
     },
    "threeleaperrider": {
        betza:    "HH",
        results: ["F/11.1&#x0305;%", "E", "E"],
        index_names: {
            riders: "[Threeleaperrider](threeleaperrider.html) // " +
                    "(3, 0) - rider",
        },
     },
    "camelrider": {
        betza:    "CC",
        results: ["T/1697", "T/90", "T/482"],
        index_names: {
            riders: "[Camelrider](camelrider.html) // (3, 1) - rider",
        },
     },
    "zebrarider": {
        betza:    "ZZ",
        results: ["T/266", "T/72", "T/57"],
        index_names: {
            riders: "[Zebrarider](zebrarider.html) // (3, 2) - rider",
        },
     },
    "tripperrider": {
        betza:    "GG",
        results: ["F*/3.472&#x0305;%", "E", "E"],
        index_names: {
            riders: "[Tripperrider](tripperrider.html) // (3, 3) - rider",
        },
     },

    //
    // Compound pieces
    //    Knighted pieces
    //
    "dragon": {
        betza:  "NfW",
        results: ["?", "T/42", "F*/100%"],
        index_names: {
            knighted_pieces: "[Dragon](dragon.html) // " +
                             "[Knight](knight.html) + [Pawn](pawn.html)",
            pawned_pieces:   "[Dragon](dragon.html) // " +
                             "[Pawn](pawn.html) + [Knight](knight.html)",
        },
     },
    "archbishop":    {
        betza:    "BN",
        results: ["T/6386", "F*/100%", "F*/100%"],
        index_names: {
            "knighted_pieces": "[Archbishop/Princess](archbishop.html) // " +
                               "[Knight](knight.html) + [Bishop](bishop.html)",
        },
     },
    "princess": {parent: "archbishop"},
    "cardinal": {parent: "archbishop"},
    "chancellor": {
        betza:    "RN",
        results: ["W", "F/100%", "F/100%"],
        index_names: {
            "knighted_pieces": "[Chancellor/Empress](chancellor.html) // " +
                               "[Knight](knight.html) + [Rook](rook.html)",
        },
     },
    "empress":  {parent: "chancellor"},
    "amazon": {
        betza: "QN",
        results: ["W", "FC", "F/100%"],
        index_names: {
            "knighted_pieces": "[Amazon](amazon.html) // " +
                               "[Knight](knight.html) + [Queen](queen.html)",
        },
     },

     //
     //     Crowned pieces
     //
    "dragon_king": {
        betza:   "FR",
        prefix:  "&#x9f8d;&#x738b;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            crowned_pieces: "[Dragon King](dragon_king.html) // " +
                            "[King](king.html) + [Rook](rook.html)",
            shogi:          "[Dragon King](dragon_king.html) // " +
                            "&#x9f8d;&#x738b; (Promoted Rook)",
        },
     },
    "dragon_horse": {
        betza:    "WB",
        prefix:   "&#x9f8d;&#x99ac;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            crowned_pieces: "[Dragon Horse](dragon_horse.html) // " +
                            "[King](king.html) + [Knight](knight.html)",
            shogi:          "[Dragon Horse](dragon_horse.html) // " +
                            "&#x9f8d;&#x99ac; (Promoted Bishop)",
        },
     },



    //
    //     Pawned pieces
    //
    "gryphon": {
        betza:  "BfW",
        results: ["T/47", "E", "E"],
        index_names: {
            pawned_pieces: "[Gryphon](gryphon.html) // " +
                           "[Pawn](pawn.html) + [Bishop](bishop.html)",
        },
     },



    //
    // Chess variants
    //
    //   - Hunter-Falcon chess
    //
    "falcon": {
        betza:    "fBbR",
        results: ["F*/25%", "E", "E"],
     },
    "hunter": {
        betza:    "fRbB",
        results: ["T/146", "E", "E"],
     },

    //
    //   -  Overkill Ecumenical Chess
    //
    "ace": {
        parent: "amazon",
     },
    "acme": {
        betza:    "QC",
        results: ["W", "FC", "F/100%"],
     },
    "acropolis": {
        betza:    "RNC",
        results: ["W", "F*/100%", "F*/100%"],
     },
    "actor": {
        betza:    "BNC",
        results: ["?", "F*/100%", "F*/100%"],
     },
    "actress": {
        betza:    "QNC",
        results: ["W", "FC", "F/100%"],
     },
    "oec_caliph": {
        betza:    "BC",
        _name:    "Caliph",
        results: ["T/1563", "F*/50%", "F*/50%"],
     },
    "canvasser": {
        betza:    "RC",
        results: ["W", "F*/100%", "F*/100%"],
     },
    "marshal": {
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
        index_names: {
            "knighted_pieces": "[Duke](duke.html) // "     +
                               "[Knight](knight.html) + "  +
                               "[Chariot](chariot.html)",
        },
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
        prefix:  "",
    },
    vulture: {
        parent:  "queen",
        prefix:  "",
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
        results: ["F*/100%", "", ""],
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
        results: ["12.5%", "E", "E"],
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

    //
    // Fairy Chess
    //
    "frog": {
        betza: "FH",
        results: ["?", "F*/100%", "F*/100%"],
    },




    //
    // Shogi
    //
    "gold_general": {
        betza:  "WfF",
        prefix: "&#x91d1;&#x5c07;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            shogi: "[Gold General](gold_general.html) // &#x91d1;&#x5c07;",
        },
     },
    "silver_general": {
        betza:  "FfW",
        prefix: "&#x9280;&#x5c07;",
        results: ["F*/100%", "E", "E"],
        index_names: {
            shogi: "[Silver General](silver_general.html) // " +
                   "&#x91d1;&#x5c07;",
        },
     },
    "shogi_knight": {
        betza:  "fN",
        prefix: "&#x6842;&#x99ac;",
        _name:  "Knight",
        results: ["E", "E", "E"],
        index_names: {
            shogi: "[Knight](shogi_knight.html) // &#x6842;&#x99ac;",
        },
     },
    "lance": {
        betza:  "fR",
        prefix: "&#x9999;&#x8eca;",
        results: ["E", "E", "E"],
        index_names: {
            shogi: "[Lance](lance.html) // &#x9999;&#x8eca;",
        },
     },


    //
    // Shogi variants
    //
    //   -  Tori Shogi
    //
    "phoenix": {
        parent: "king",
        prefix: "&#x9d6c;",
    },
    "eagle": {
        betza:  "fBbRfsWbB2",
        prefix: "&#x9d70;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            tori_shogi: "[Eagle](eagle.html) // &#x9d70;",
        },
     },
    "tori_falcon": {
        parent: "drunk_elephant",
        prefix: "&#x9df9;",
        _name:  "Falcon",
        results: ["F*/100%", "FC", "F/100%"],
        index_names: {
            tori_shogi: "[Falcon](tori_falcon.html) // &#x9df9;",
        },
     },
    "crane": {
        betza:  "FvW",
        prefix: "&#x9db4;",
        results: ["F*/100%", "E*", "F/100%"],
        index_names: {
            tori_shogi: "[Crone](crane.html) // &#x9db4;",
        },
     },
    "pheasant": {
        betza:  "fDbF",
        prefix: "&#x96c9;",
        results: ["E", "E", "E"],
        index_names: {
            tori_shogi: "[Pheasant](pheasant.html) // &#x96c9;",
        },
     },
    "left_quail": {
        betza:  "fRbrBblF",
        prefix: "&#x9d89;",
        results: ["T/146", "E", "E"],
        index_names: {
            tori_shogi: "[Left Quail](left_quail.html) // &#x9d89;",
        },
     },
    "right_quail": {
        betza:  "fRblBbrF",
        prefix: "&#x9d89;",
        results: ["F*/25%", "E", "E"],
        index_names: {
            tori_shogi: "[Right Quail](right_quail.html) // &#x9d89;",
        },
     },
    "swallow": {
        parent: "pawn",
        prefix: "&#x71d5;",
     },
    "goose": {
        betza:  "fAbD",
        prefix: "&#x9d08;",
        results: ["E*", "E", "E"],
        index_names: {
            tori_shogi: "[Goose](goose.html) // &#x9d08;",
        },
     },

    //
    //   -  Dobutsu Shogi
    //
    dobutsu_lion: {
        parent: "king",
        prefix: "",
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
        prefix: "",
        _name: "Chick",
    },
    dobutsu_hen: {
        parent: "gold_general",
        prefix: "",
        _name: "Hen",
    },

    //
    //   -  Other Shogi variants
    //
    "blind_monkey": {
        betza:    "FsW",
        prefix:   "&#x76f2;&#x733f;",
        results: ["F*/100%", "FC", "F/100%"],
        index_names: {
            shogi_variants: "[Blind Monkey](blind_monkey.html) // " +
                            "&#x76f2;&#x733f;",
        },
     },
    "flying_cock": {
        betza:    "fFsW",
        prefix:   "&#x9d8f;&#x98db;",
        results: ["E*", "FC", "F*/100%"],
        index_names: {
            shogi_variants: "[Flying Cock](flying_cock.html) // " +
                            "&#x9d8f;&#x98db;",
        },
     },
    "drunk_elephant": {
        betza: "FfsW",
        results: ["F*/100%", "FC", "F/100%"],
        index_names: {
            shogi_variants: "[Drunk Elephant](drunk_elephant.html)",
        },
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
                 "duke",
                 "marquis",
                 ],
        chess_variant: 1,
    },
    fairy_chess: {
        pieces: ["frog"],
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

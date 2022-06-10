//
// Chess pieces go here
//

//
// Return a move representing a step
//
function step (dr, dc, args = {}) {
    return {dr: dr, dc: dc, max: 1}
}

//
// Return a move representing a slide
//
function slide (dr, dc, args = {}) {
    return {dr: dr, dc: dc, max: 0}
}

////////////////////////////////////////////////////////////////////////////////
//
// Take a string in Betza notation, return a move list
//
////////////////////////////////////////////////////////////////////////////////

//
// Some subpatterns
//
let leaper_class   = "[ACDFGHNWZ]"
let leaper_desc    = "[(][0-9]+,[0-9]+[)]"
let leaper_pat     = `(?:(${leaper_class})|${leaper_desc})`
let modifier_class = "[fbrlvshcmnjpgqzo]"

//
// Helper function
//
function abs (x) {return Math . abs (x)}

//
// Take the action of a single leaper, and turn this into a move list
//
// We will make use of the fact that set of letters used for the modifiers
// and the set of letters used for the leapers are disjoint.
//

//
// filter_movement
//
//    For a leaper moving orthogonally, we allow the following modifiers:
//
//                         f, v
//
//                  l, s    *    r, s
//
//                         b, v
//
//
//    For a leaper moving diagonally, we allow the following modifiers:
//
//                 f, fl,       f, fr,
//                 l, lf        r, rf
//                          *
//                 b, bl,       b, br,
//                 l, lb        r, rb
//
//
//
//    For a leaper moving in 8 directions, we allow the following modifiers:
//   (https://www.gnu.org/software/xboard/whats_new/rules/Betza.html)
//
//                  f, fh,      f, fh,
//             lv, lh, lf      rv, rh, rf
//
//      fs, fh, fl,                   fs, fh, fr
//           l, lh,                    r, rh
//                          *
//      bs, bh, bl,                   bs, bh, br
//           l, lh,                    r, rh
//
//                  b, bh,      b, bh,
//             lv, lh, lb      rv, rh, rb
//
//
//  This translate to:
//
//    - fh:     dr <  0
//    - fs:     dr <  0            && abs (dr) <= abs (dc)
//    - fl:     dr <  0 && dc <  0 && abs (dr) <= abs (dc)
//    - fr:     dr <  0 && dc >  0 && abs (dr) <= abs (dc)
//    - f:      dr <  0            && abs (dr) >= abs (dc)
//
//    - bh:     dr >  0
//    - bs:     dr >  0            && abs (dr) <= abs (dc)
//    - bl:     dr >  0 && dc <  0 && abs (dr) <= abs (dc)
//    - br:     dr >  0 && dc >  0 && abs (dr) <= abs (dc)
//    - b:      dr >  0            && abs (dr) >= abs (dc)
//
//    - lh:                dc <  0
//    - lv:                dc <  0 && abs (dr) >= abs (dc)
//    - lf:     dr <  0 && dc <  0 && abs (dr) >= abs (dc)
//    - lb:     dr >  0 && dc <  0 && abs (dr) >= abs (dc)
//    - l:                 dc <  0 && abs (dr) <= abs (dc)
//
//    - rh:                dc >  0
//    - rv:                dc >  0 && abs (dr) >= abs (dc)
//    - rf:     dr <  0 && dc >  0 && abs (dr) >= abs (dc)
//    - rb:     dr >  0 && dc >  0 && abs (dr) >= abs (dc)
//    - r:                 dc >  0 && abs (dr) <= abs (dc)
//
//    - v:                 dc == 0
//    - s:      dr == 0
//
function move_modifiers (moves, modifiers, ortho = false) {
    let out = []
    let mod_in = modifiers
    while (modifiers . length > 0) {
        let forward   = modifiers . match (/^f/)
        let backward  = modifiers . match (/^b/)
        let left      = modifiers . match (/^l/)
        let right     = modifiers . match (/^r/)
        let drs       = forward ? 1 : backward ? -1 : 0
        let dcs       = left    ? 1 : right    ? -1 : 0

        //
        // Diagonal and 8-directional leapers
        //
        if (!ortho) {
            //
            // f* and b* movements
            //
            if (modifiers . match (/^[fb]h/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr <  0
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]s/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr <  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]l/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 && move . dc  <  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[fb]r/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 && move . dc  >  0 &&
                          abs (move . dr) <= abs (move . dc)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^([fb])(?:\1)?/)) {
                out = out . concat (moves . filter (move =>
                         drs * move . dr  <  0 &&
                          abs (move . dr) >= abs (move . dc)
                ))
                if (modifiers . match (/^(?:ff|bb)/)) {
                    modifiers = modifiers . substring (2)
                }
                else {
                    modifiers = modifiers . substring (1)
                }
                continue
            }

            //
            // l* and r* movements
            //
            if (modifiers . match (/^[lr]h/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc <  0
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]v/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc <  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]f/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 && move . dr  <  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^[lr]b/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 && move . dr  >  0 &&
                          abs (move . dc) <= abs (move . dr)
                ))
                modifiers = modifiers . substring (2)
                continue
            }
            if (modifiers . match (/^([lr])(?:\1)?/)) {
                out = out . concat (moves . filter (move =>
                         dcs * move . dc  <  0 &&
                          abs (move . dc) >= abs (move . dr)
                ))
                if (modifiers . match (/^(?:ll|rr)/)) {
                    modifiers = modifiers . substring (2)
                }
                else {
                    modifiers = modifiers . substring (1)
                }
                continue
            }
        }
        else {
            if (modifiers . match (/^f/)) {
                out = out . concat (moves . filter (move => move . dr <  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^b/)) {
                out = out . concat (moves . filter (move => move . dr >  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^s/)) {
                out = out . concat (moves . filter (move => move . dr == 0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^l/)) {
                out = out . concat (moves . filter (move => move . dc <  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^r/)) {
                out = out . concat (moves . filter (move => move . dc >  0))
                modifiers = modifiers . substring (1)
                continue
            }
            if (modifiers . match (/^v/)) {
                out = out . concat (moves . filter (move => move . dc == 0))
                modifiers = modifiers . substring (1)
                continue
            }
        }
        break
    }

    if (out . length) {
        return out
    }
    return moves
}

function betza_leaper (betza) {
    let out = [];

    //
    // We cannot deal with:
    //    - capture moves   ("c" modifier)
    //    - jump            ("j"/"jj" modifiers)
    //    - grasshoppers    ("g" modifier)
    //    - wrapping around ("o" modifier)
    // So we return an empty set of moves.
    //
    if (betza . match (/[cjgo]/)) {return out}

    if (betza . match (/A/)) {out . push (... fold ({move: step (2, 2)}))} else
    if (betza . match (/C/)) {out . push (... fold ({move: step (3, 1)}))} else
    if (betza . match (/D/)) {out . push (... fold ({move: step (2, 0)}))} else
    if (betza . match (/F/)) {out . push (... fold ({move: step (1, 1)}))} else
    if (betza . match (/G/)) {out . push (... fold ({move: step (3, 3)}))} else
    if (betza . match (/H/)) {out . push (... fold ({move: step (3, 0)}))} else
    if (betza . match (/N/)) {out . push (... fold ({move: step (2, 1)}))} else
    if (betza . match (/W/)) {out . push (... fold ({move: step (1, 0)}))} else
    if (betza . match (/Z/)) {out . push (... fold ({move: step (3, 2)}))} else
    if (match = betza . match (/[(]([0-9]+),([0-9]+)[)]/)) {
        out . push (... fold ({move: step (+match [1], +match [2])}))
    }

    //
    // If the letter is doubled, turn the step into a slide
    //
    if (betza . match (new RegExp (`(${leaper_class})\\1`))) {
        out . forEach ((move) => {move . max = 0})
    }

    //
    // If we have a trailing number, repeat the step up to that often
    //
    if (amount = betza . match (/([0-9]+)$/)) {
        out . forEach ((move) => {move . max = + amount [1]})
    }

    let result = betza . match (new RegExp (`(?<modifier>${modifier_class}+)`))
    let ortho  = !!betza . match (/[WDH]|[(]0,[0-9]+[)]|[(][0-9]+,0[)]/)
    if (result) {
        return move_modifiers (out, result . groups . modifier, ortho)
    }

    return out
}


function betza (betza) {
    let moves = []

    betza . replaceAll ('B', 'FF')   // Bishop = Sliding Ferz
          . replaceAll ('J', 'Z')    // Old symbol for Zebra
          . replaceAll ('K', 'FW')   // King   = Ferz + Wazir
          . replaceAll ('L', 'C')    // Old symbol for Camel
          . replaceAll ('Q', 'FFWW') // Queen  = Sliding Ferz + Sliding Wazir
          . replaceAll ('R', 'WW')   // Rook   = Sliding Wazir

          . match (new RegExp (`${modifier_class}*` +
                              `(${leaper_pat})(?:\\1|[0-9]+)?`, 'g'))
          . forEach  ((leaper) => moves . push (... betza_leaper (leaper)))

    return moves
}


//
// Reflect a move in all directions (8 or 4)
//
function fold (args = {}) {
    let move = args . move
    let out  = [move]
    let dr   = move . dr
    let dc   = move . dc

    if (dr) {
        let copy = {... move}; copy . dr = -dr; copy . dc =  dc;
        out . push (copy)
    }

    if (dc) {
        let copy = {... move}; copy . dr =  dr; copy . dc = -dc;
        out . push (copy)
    }

    if (dr && dc) {
        let copy = {... move}; copy . dr = -dr; copy . dc = -dc;
        out . push (copy)
    }

    if (Math . abs (move . dr) != Math . abs (move . dc)) {
        let n = out . length // We're pushing on out, so we need to
                             // capture the length before pushing
        for (let i = 0; i < n; i ++) {
            let dr = out [i] . dr
            let dc = out [i] . dc
            let copy   = {... out [i]}; copy . dr = dc; copy . dc = dr
            out . push (copy)
        }
    }
    return out
}


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
                              "[Wazir](wazir.html) + [Ferz](ferz.html)"
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
                    "(1, 0) - rider (Rook)"
        },
     },
    "bishop": {
        betza:  "B",
        prefix: "&#x2657;",
        results: ["F/31.25%", "E", "E"],
        index_names: {
            riders: "[Ferzrider](bishop.html?piece=ferzrider) // " +
                    "(1, 1) - rider (Bishop)"
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
        betza: "fW",
        prefix: "&#x2659;",
        results: ["E", "E", "E"]
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
    "alfil": {        // (2, 2)-leaper
        betza:    "A",
        results: ["F/12.5%", "E", "E"],
        index_names: {
            basic_leapers: "[Alfil](alfil.html) // (2, 2) - leaper",
        },
     },
    "threeleaper": {  // (3, 0)-leaper
        betza:    "H",
        results: ["F/11.1", "T/6", "E"],
        index_names: {
            basic_leapers: "[Threeleaper](threeleaper.html) // (3, 0) - leaper",
        },
     },
    "camel": {        // (3, 1)-leaper
        betza:    "C",
        prefix:   "&#x1F42B;",
        results: ["T/3722", "T/342", "T/2401"],
        index_names: {
            basic_leapers: "[Camel](camel.html) // (3, 1) - leaper",
        },
     },
    "zebra": {        // (3, 2)-leaper
        betza:    "Z",
        prefix:   "&#x1F993;",
        results: ["T/4633", "T/80", "T/286"],
        index_names: {
            basic_leapers: "[Zebra](zebra.html) // (3, 2) - leaper",
        },
     },
    "tripper":   {    // (3, 3)-leaper
        betza:    "G",
        results: ["F/5.56%", "E", "E"],
        index_names: {
            basic_leapers: "[Tripper](tripper.html) // (3, 3) - leaper",
        },
     },
    "fourleaper": {   // (4, 0)-leaper
        betza:    "(0,4)",
        results: ["F/6.25%", "E", ""],
        index_names: {
            basic_leapers: "[Fourleaper](fourleaper.html) // (4, 4) - leaper",
        },
     },
    "giraffe": {      // (4, 1)-leaper
        betza:    "(1,4)",
        results: ["T/13102", "T/114", ""],
        index_names: {
            basic_leapers: "[Giraffe](giraffe.html) // (4, 1) - leaper",
        },
     },
    "stag": {         // (4, 2)-leaper
        betza:    "(2,4)",
        results: ["T/2015", "E*", ""],
        index_names: {
            basic_leapers: "[Stag](stag.html) // (4, 2) - leaper",
        },
     },
    "antelope": {     // (4, 3)-leaper
        betza:    "(3,4)",
        results: ["T/1887", "T/128", ""],
        index_names: {
            basic_leapers: "[Antelope](antelope.html) // (4, 3) - leaper",
        },
     },
    "commuter": {     // (4, 4)-leaper
        betza:    "(4,4)",
        results: ["F/3.125%", "E", ""],
        index_names: {
            basic_leapers: "[Commuter](commuter.html) // (4, 4) - leaper",
        },
     },
    "flamingo": {     // (6, 1)-leaper
        betza:    "(1,6)",
        results: ["?", "T/90", ""],
        index_names: {
            basic_leapers: "[Flamingo](flamingo.html) // (6, 1) - leaper",
        },
     },

    //
    // Combined leapers (https://www.theproblemist.org/dloads/Glossary.pdf)
    //
    "alibaba": {
        betza:    "AD",
        results: ["F/50%", "F/50%", "F/50%"],
        index_names: {
            combined_leapers: "[Alibaba](alibaba.html) // " +
                              "[Dabbaba](dabbaba.html) + "  +
                              "[Alfil](alfil.html)"
        }
     },
    "squirrel": {
        betza:    "DNA",
        results: ["?", "F*/100%", ""],
        index_names: {
            combined_leapers: "[Squirrel](squirrel.html) // " +
                              "[Wazir](wazir.html) + "        +
                              "[Ferz](ferz.html) + "          +
                              "[Dabbaba](dabbaba.html)"
        }
     },
    "hawk": {
        betza:    "ADGH",
        results: ["F*/100%", "F*/100%", ""],
        index_names: {
            combined_leapers: "[Hawk](hawk.html) // "              +
                              "[Dabbaba](dabbaba.html) + "         +
                              "[Alfil](alfil.html) + "             +
                              "[Threeleaper](threeleaper.html) + " +
                              "[Tripper](tripper.html)"
        }
     },
    "champion": {
        betza:    "WAD",
        results: ["W", "F/100%", "F/100%"],
        index_names: {
            combined_leapers: "[Champion](champion.html) // " +
                              "[Wazir](wazir.html) + "        +
                              "[Dabbaba](dabbaba.html) + "    +
                              "[Alfil](alfil.html)"
        }
     },
    "wizard": {
        betza:    "FC",
        results: ["?", "F*/50%", "F/50%"],
        index_names: {
            combined_leapers: "[Wizard](wizard.html) // " +
                              "[Ferz](ferz.html) + "      +
                              "[Camel](camel.html)"
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
    "caliph": {
        betza:    "WA",
        results: ["W", "F*/100%", "E"],
        index_names: {
            combined_leapers: "[Caliph](caliph.html) // " +
                              "[Wazir](wazir.html) + "    +
                              "[Alfil](alfil.html)"
        }
     },
    "bison": {
        betza:    "CZ",
        results: ["?", "?", ""],
        index_names: {
            combined_leapers: "[Bison](bison.html) // " +
                              "[Camel](camel.html) + "  +
                              "[Zebra](zebra.html)"
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
    "zebu":  {
        betza:    "C(1,4)",
        results: ["?", "?", ""],
        index_names: {
            combined_leapers: "[Zebu](zebu.html) // "  +
                              "[Camel](camel.html) + " +
                              "[Giraffe](giraffe.html)"
        }
     },
    "root_25_leaper": {
        betza:    "(3,4)(5,0)",
        results: ["?", "?", ""],
     },
    "root_50_leaper": {
        betza:    "(5,5)(7,1)",
        results: ["?", "?", ""],
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
    //     Pawned pieces
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
    "gryphon": {
        betza:  "BfW",
        results: ["T/47", "E", "E"],
        index_names: {
            pawned_pieces: "[Gryphon](gryphon.html) // " +
                           "[Pawn](pawn.html) + [Bishop](bishop.html)",
        },
     },



    //
    // Shogi
    //
    "dragon_king": {
        betza:   "FR",
        prefix:  "&#x9f8d;&#x738b;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            crowned_pieces: "[Dragon King](dragon_king.html) // " +
                            "[King](king.html) + [Rook](rook.html)",
        },
     },
    "dragon_horse": {
        betza:  "WB",
        prefix: "&#x9f8d;&#x99ac;",
        results: ["W", "FC", "F/100%"],
        index_names: {
            crowned_pieces: "[Dragon Horse](dragon_king.html) // " +
                            "[King](king.html) + [Knight](knight.html)",
        },
     },
    "gold_general":     {betza:  "WfF", prefix: "&#x91d1;&#x5c07;"},
    "silver_general":   {betza:  "FfW", prefix: "&#x9280;&#x5c07;"},
    "shogi_knight":     {betza:  "fN",  prefix: "&#x6842;&#x99ac;",
                                        _name:  "Knight"},
    "lance":            {betza:  "fR",  prefix: "&#x9999;&#x8eca;"},

    //
    // Fairy Chess
    //
    "frog":             {betza: "FH"},

    //
    // Chess variants
    //
    "abbot":            {betza: "F4N"},    // Typhoon Chess, Scirocco Chess

    //
    //   - Hunter-Falcon chess
    //
    "hunter":           {betza: "fRbB"},
    "falcon":           {betza: "fBbR"},

    //
    //   -  Overkill Ecumenical Chess
    //
    "ace":              {parent: "amazon"},
    "acme":             {betza: "QC"},
    "acropolis":        {betza: "RNC"},
    "actor":            {betza: "BNC"},
    "actress":          {betza: "QNC"},
    "oec_caliph":       {betza: "BC", _name: "Caliph"},
    "canvasser":        {betza: "RC"},
    "marshal":          {parent: "chancellor"},

    //
    // Shogi variants
    //
    "blind_monkey":     {betza: "FsW",  prefix: "&#x76f2;&#x733f;"},
    "flying_cock":      {betza: "fFsW", prefix: "&#x9d8f;&#x98db;"},
    "drunk_elephant":   {betza: "FfsW"},


    //
    //   -  Tori Shogi
    //
    "phoenix":          {parent: "king",            prefix: "&#x9d6c;"},
    "eagle":            {betza:  "fBbRfsWbB2",      prefix: "&#x9d70;"},
    "tori_falcon":      {parent: "drunk_elephant",  prefix: "&#x9df9;",
                         _name:  "Falcon"},
    "crane":            {betza:  "FvW",             prefix: "&#x9db4;"},
    "pheasant":         {betza:  "fDbF",            prefix: "&#x96c9;"},
    "left_quail":       {betza:  "fRbrBblF",        prefix: "&#x9d89;"},
    "right_quail":      {betza:  "fRblBbrF",        prefix: "&#x9d89;"},
    "swallow":          {parent: "pawn",            prefix: "&#x71d5;"},
    "goose":            {betza:  "fAbD",            prefix: "&#x9d08;"},
}

let set_info = {
    chess: {
        pieces: ["king", "queen", "rook", "bishop", "knight", "pawn"],
    },
    basic_leapers: {
        pieces: ["wazir",       "ferz",
                 "dabbaba",     "knight",  "alfil",
                 "threeleaper", "camel",   "zebra", "tripper",
                 "fourleaper",  "giraffe", "stag",  "antelope", "commuter",
                 "flamingo"],
    },
    combined_leapers: {
        pieces: ["king", "squirrel", "champion", "caliph", "wizard",
                 "alibaba", "hawk",
                 "gnu", "okapi", "bison", "zebu",
                 "root_25_leaper", "root_50_leaper"]
    },
    riders: {
        pieces: ["wazirrider", "ferzrider",
                 "dabbabarider", "knightrider", "alfilrider",
                 "threeleaperrider", "camelrider",
                                     "zebrarider", "tripperrider",]
    },


    knighted_pieces: {
        pieces: ["dragon", "archbishop", "chancellor",
                 "amazon", "gnu", "okapi"],
    },
    crowned_pieces: {
        pieces: ["dragon_king", "dragon_horse"],
    },
    pawned_pieces: {
        pieces: ["dragon", "gryphon"],
    },


    omega_chess: {
        pieces: ["king", "queen", "rook", "champion", "wizard",
                 "bishop", "knight", "pawn"],
    },
    overkill_ecumenical_chess: {
        pieces: ["king", "ace", "acme", "acropolis", "actor", "actress",
                 "oec_caliph", "canvasser", "cardinal", "gnu",
                 "marshal", "queen", "pawn"],
    },
    shogi: {
        name:   "Sh&#x14d;gi",
        pieces: ["king", "rook", "dragon_king", "bishop", "dragon_horse",
                 "gold_general", "silver_general", "shogi_knight",
                 "lance", "pawn"],
    },
    tori_shogi: {
        name:   "Tori Sh&#x14d;gi",
        pieces: ["phoenix", "eagle", "tori_falcon", "crane", "pheasant",
                 "left_quail", "right_quail", "swallow", "goose"],
    },
}

//
// For each piece in a set, add the set to its "sets" property.
// For pieces with a parent, add the set to the parent.
//
for (set in set_info) {
    set_info [set] . pieces . forEach ((piece_name) => {
        let piece = pieces [piece_name]
        if (piece . parent) {
            piece = pieces [piece . parent]
        }
        if (!piece . sets) {
            piece . sets = []
        }
        piece . sets . push (set)
    })
}

console . log (pieces ["king"])

window . pieces   = pieces
window . set_info = set_info

class Piece {
    constructor (args = {}) {
        if (args . key) {
            this . piece_name = args . name + "-" + args ["modifiers"]
            this . betza      = args . modifiers + args . key
        }
        else {
            this . piece_name = args . piece_name
            let piece_info = pieces [this . piece_name]
            //
            // If we have a "parent", first copy all the info
            // from the parent.
            //
            if (piece_info . parent) {
                let parent = new Piece ({piece_name: piece_info . parent})
                for (const prop in parent) {
                    if (!this [prop]) {
                        this [prop] = parent [prop]
                    }
                }
            }
            for (const prop in piece_info) {
                this [prop] = piece_info [prop]
            }
        }
    }
    moves (args = {}) {
        if (!this . move_list && this . betza) {
            this . move_list = betza (this . betza)
        }
        return this . move_list
    }

    name (args = {}) {
        if (!this . _name) {
            this . _name = title_case (this . piece_name)
        }
        return this . _name
    }

    //
    // For use in the index.
    //
    index_name_in_set (args = {}) {
        if (this . index_names &&
            this . index_names [args . set_name]) {
            return this . index_names [args . set_name]
        }

        return this . name ()
    }


    full_name (args = {}) {
        if (!this . _full_name) {
            this . _full_name = ""
            if (this . prefix) {
                this . _full_name += this . prefix + " "
            }
            this . _full_name += this . name ()
        }
        return this . _full_name
    }

    file (args = {}) {
        if (!this . _file) {
            if (this . parent) {
                this . _file = this . parent + ".html?piece=" +
                               this . piece_name
            }
            else {
                this . _file = this . piece_name + ".html"
            }
        }

        return this . _file
    }
}


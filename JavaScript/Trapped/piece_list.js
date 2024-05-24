//
// Function to typeset fractions of square roots
//

function sqrt (x, y = 1, z = 1) {
    let formula = `\\sqrt{${x}}`
    if (z != 1) {
        formula = `${z} ${formula}`
    }
    if (y != 1) {
        formula = `\\frac{${formula}}{${y}}`
    }
    return `E = \\(${formula}\\)`
}

function frac (x, y = 1) {
    if (y == 1) {
        return `E = \\(${x}\\)`
    }
    return `E = \\(\\frac{${x}}{${y}}\\)`
}


let pieces = {
    //
    // A pieces
    //
    abbot: {
        betza:    "F4N",
        results: {
            spiral_square:  "T/6,334",
            spiral_diamond: "T/48,675,360",
            wedge_folded:   "F*/100%",
            wedge_flat:     "F*/100%",
        },
    },

    ace: {
        parent: "amazon",
    },

    acme: {
        betza:    "QC",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    acropolis: {
        betza:    "RNC",
        results: {
            spiral_square:  "W",
            spiral_diamond: "T/4,487,928",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "F*/100%",
        },
    },

    actor: {
        betza:    "BNC",
        results: {
            spiral_square:  "T/3,700,894",
            spiral_diamond: "?/1G",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "F*/100%",
        },
    },

    actress: {
        betza:    "QNC",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    adjudant: {
        parent: "archbishop",
    },

    advancer: {
        parent: "queen",
    },

    advisor: {
        parent: "ferz",
    },

    alfil: {        // (2, 2)-leaper
        betza:    "A",
        results: {
            spiral_square:  "F/12.5%",
            spiral_diamond: "F/12.5%",
            wedge_folded:    sqrt (2, 1, 2),
            wedge_flat:      sqrt (2, 1, 2),
        },
    },

    alfilrider: {
        betza:    "AA",
        results: {
            spiral_square:  "F*/7.8125%",
            spiral_diamond: "F/12.5%",
            wedge_folded:    sqrt (2, 1, 2),
            wedge_flat:      sqrt (2, 1, 2),
        },
    },

    alibaba: {
        betza:    "DA",
        results: {
            spiral_square:  "F/25%",
            spiral_diamond: "F/25%",
            wedge_folded:   "F/25%", 
            wedge_flat:     "F/25%",
        },
    },

    amazon: {
        betza: "QN",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    amazon_rider: {
        betza: "W0F0N0",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    angry_boar: {
        betza: "fF2fsW",
        results: {
            spiral_square:  "F/25%",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    antelope: {     // (4, 3)-leaper
        betza:    "(3,4)",
        results: {
            spiral_square:  "T/1,887",
            spiral_diamond: "T/101,249",
            wedge_folded:   "T/128", 
            wedge_flat:     "T/416",
        },
    },

    antelope_rose: {
        betza:    "q(3,4)",
        results: {
            spiral_square:  "?/10k",
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k", 
            wedge_flat:     "?/10k",
        },
    },

    archbishop:    {
        betza:    "BN",
        results: {
            spiral_square:  "T/6,386",
            spiral_diamond: "T/318,714",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "F*/100%",
        },
        _index_name: "Archbishop (Bishop + Knight)",
    },

    archbishop_rbn: {
        parent: "amazon",
        _name: "Archbishop",
        _index_name: "Archbishop (Queen + Knight)",
    },

    //
    // B pieces
    //
    banner: {
        betza:    "fsW",
        results: {
            spiral_square:  "F/25%",
            spiral_diamond: "E = 1",
            wedge_folded:   "F/100%", 
            wedge_flat:      sqrt (2, 2),
        },
    },

    baras: {
        parent: "dragon_king",
    },

    barc: {
        betza: "fsbN",
        results: {
            spiral_square:  "T/154", 
            spiral_diamond: "T/325",
        },
    },

    baron: {
        parent: "archbishop",
    },

    barron: {
        betza: "t[FW]t[WF]B",
        results: {
            spiral_square:  "T/160", 
            spiral_diamond: "T/45", 
            wedge_folded:   "T/19",
            wedge_flat:     "T/105",
        },
    },

    bd: {
        parent: "bede",
        _name:  "BD",
    },

    bears_eyes: {
        parent: "king",
        _name: "Bear's Eyes",
    },

    beast_cadet: {
        betza: "F2fsW2",
        results: {
            spiral_square:  "T/323", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    beast_officer: {
        betza: "F3sW2fW3",
        results: {
            spiral_square:  "T/260",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    beaver: {
        betza:    "fFfWsW4bW0",
        results: {
            spiral_square:  "W", 
            spiral_diamond: frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F*/100%",
        },
    },

    bede: {
        betza: "DB",
        results: {
            spiral_square:  "F/50%", 
            spiral_diamond: "F/50%", 
            wedge_folded:   "F/50%",
            wedge_flat:     "F/50%",
        },
    },

    bers: {
        parent: "queen",
    },

    bishop: {
        betza:  "B",
        results: {
            spiral_square:  "F/31.25%", 
            spiral_diamond: "F/50%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
        _index_name: "Bishop (Chess)",
    },

    bishop_makruk: {
        parent: "silver_general",
        _name: "Bishop",
        _index_name: "Bishop (Makruk)",
    },

    bishops_dog: {
        betza:    "F3",
        results: {
            spiral_square:  "T/129", 
            spiral_diamond: "F/50%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
        _name:    "Bishop's Dog",
    },

    bison: {
        betza:    "CZ",
        results: {
            spiral_square:  "T/844,094", 
            spiral_diamond: "?/1G",
            wedge_folded:   "?/1G",
            wedge_flat:     "?/1G",
        },
    },

    blind_bear: {
        parent: "blind_monkey",
    },

    blind_dog: {
        betza: "bsWfF",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    blind_monkey: {
        betza:    "sWF",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    blind_tiger: {
        betza:    "sbWF",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    blue_whale: {
        parent:   "copper_general",
    },

    bowman: {
        betza: "t[FW]t[WF]",
        results: {
            spiral_square:  "T/78", 
            spiral_diamond: "T/55", 
            wedge_folded:   "T/10",
            wedge_flat:     "T/10",
        },
    },

    boy_scout: {
        betza: "zB",
        results: {
            spiral_square:  "F/50%", 
            spiral_diamond: "F/50%",
            wedge_folded:   "F/50%",
            wedge_flat:     "F/50%",
        },
    },

    buddist_devil: {
        betza: "fF3bsW",
        results: {
            spiral_square:  "T/337",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    buffalo: {
        betza:    "NCZ",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "?/1G",
            wedge_folded:   "?/1G",
            wedge_flat:     "?/1G",
        },
    },

    //
    // C pieces
    //
    caliph: {
        betza:    "WA",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "?/1G",
            wedge_folded:   "F*/100%", 
            wedge_flat:      sqrt (2, 2),
        },
        _index_name: "Caliph (Wazir + Alfil)",
    },

    oec_caliph: {
        betza:       "BC",
        _name:       "Caliph",
        _index_name: "Caliph (Bishop + Camel)",
        results:    {
            spiral_square:  "T/1,563", 
            spiral_diamond: "F/50%",
            wedge_folded:   "F*/50%", 
            wedge_flat:     "F*/50%",
        },
    },

    camel: {        // (3, 1)-leaper
        betza:    "C",
        results: {
            spiral_square:  "T/3,722", 
            spiral_diamond: "T/2,015",
            wedge_folded:   "T/342", 
            wedge_flat:     "T/2,401",
        },
    },

    camelrider: {
        betza:    "CC",
        results: {
            spiral_square:  "T/1,697", 
            spiral_diamond: "T/509",
            wedge_folded:   "T/90", 
            wedge_flat:     "T/482",
        },
    },

    camel_rose: {
        betza:    "qC",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k", 
            wedge_flat:     "?/10k",
        },
    },

    cannon: {
        parent: "rook",
    },

    cannon_pawn: {
        parent: "king",
    },

    canvasser: {
        betza:    "RC",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "?/1G",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "F*/100%",
        },
    },

    captive_cadet: {
        betza:  "F3fsW3",
        results: {
            spiral_square:  "T/420", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    captive_officer: {
        betza:  "F3fsW2",
        results: {
            spiral_square:  "T/333",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    cardinal: {
        parent: "archbishop",
        _index_name: "Cardinal (Bishop + Knight)",
    },

    cardinal_bwh: {
        betza: "BWH",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _name: "Cardinal",
        _index_name: "Cardinal (Bishop + Wazir + Threeleaper)",
    },

    carpenter: {
        betza:  "DN",
        results: {
            spiral_square:  "T/253,925,075",
            spiral_diamond: "?/1G",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%",
        },
    },

    castle: {
        parent: "squirrel",
    },

    cat_sword: {
        parent: "ferz",
    },

    cavalier: {
        move_list: [
            ((n, a = {}) => [-n,  1, {not_a_target: n == 1}]),
            ((n, a = {}) => [-n, -1, {not_a_target: n == 1}]),
            ((n, a = {}) => [ n,  1, {not_a_target: n == 1}]),
            ((n, a = {}) => [ n, -1, {not_a_target: n == 1}]),
            ((n, a = {}) => [-1,  n, {not_a_target: n == 1}]),
            ((n, a = {}) => [-1, -n, {not_a_target: n == 1}]),
            ((n, a = {}) => [ 1,  n, {not_a_target: n == 1}]),
            ((n, a = {}) => [ 1, -n, {not_a_target: n == 1}]),
        ],
        results: {
            spiral_square:  "T/102",
            spiral_diamond: "T/56",
            wedge_folded:   "T/12", 
            wedge_flat:      sqrt (2, 2),
        }
    },

    cavalier_mao: {
        _name:  "Cavalier",
        parent: "mao",
    },

    centaur: {
        betza:    "WFN",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Centaur (King + Knight)",
    },

    centaur_bn: {
        parent: "archbishop",
        _name:  "Centaur",
        _index_name: "Centaur (Bishop + Knight)",
    },

    chameleon_dickins: {
        betza_list: ["N", "B", "R", "BR"],
        results: {
            spiral_square:  "T/62", 
            spiral_diamond: "T/98",
            wedge_folded:   "T/16",
            wedge_flat:      sqrt (2, 4),
        },
        _name: "Chameleon",
        _index_name: "Chameleon (Fairy I)",
    },

    chameleon_fairy: {
        betza_list: ["BR", "N", "B", "R"],
        results: {
            spiral_square:  "T/415", 
            spiral_diamond: "T/190",
            wedge_folded:   "T/73",
            wedge_flat:     sqrt (2, 4),
        },
        _name: "Chameleon",
        _index_name: "Chameleon (Fairy II)",
    },

    chameleon_rococo: {
        parent: "queen",
        _name: "Chameleon",
        _index_name: "Chameleon (Rococo)",
    },

    champion: {
        betza:    "WDA",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F*/100%",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Champion (Wazir + Alfil + Dabbaba)",
    },

    champion_nr: {
        parent: "chancellor",
        _name:  "Champion",
        _index_name: "Champion (Rook + Knight)",
    },

    chancellor: {
        betza:    "RN",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "T/1,563",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%",
        },
    },

    chariot: {
        betza:    "W4",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "T/112",
            wedge_folded:   "T/6", 
            wedge_flat:      sqrt (2, 2),
        },
    },

    chariot_xiangqi: {
        parent: "rook",
        _name: "Chariot",
        _index_name: "Chariot (Janggi/Xiangqi)",
    },

    dobutsu_chick: {
        parent: "pawn",
        _name: "Chick",
    },

    chicken_general: {
        betza:    "bFfW4",
        results: {
            spiral_square:  "T/44", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    chinese_cock: {
        parent: "blind_dog",
    },

    cicada: {
        parent: "king",
    },

    climbing_monkey: {
        parent: "copper_general",
    },

    cloud_eagle: {
        betza: "fbRfB3K",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    coiled_serpent: {
        betza: "vWbF",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "E = 1",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    commoner: {
        parent: "king",
    },

    commuter: {     // (4, 4)-leaper
        betza:    "(4,4)",
        results: {
            spiral_square:  "F/3.125%", 
            spiral_diamond: "F/3.125%", 
            wedge_folded:    sqrt (2, 1, 4),
            wedge_flat:      sqrt (2, 1, 4),
        },
    },

    copper_general: {
        betza:    "vWfF",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    counsellor: {
        betza: "RBt[WF]t[FW]",
        results: {
            spiral_square:   "W",
            spiral_diamond:  "BM",
            wedge_folded:    "FC",
            wedge_flat:      "F/100%",
        },
    },

    councillor: {
        parent: "centaur",
    },

    count: {
        parent: "archbishop",
    },

    crab: {
        betza: "fbsN",
        results: {
            spiral_square:  "T/382", 
            spiral_diamond: "T/315",
            wedge_folded:   "T/17",
            wedge_flat:      sqrt (2, 4),
        },
    },

    crane: {
        betza:  "vWF",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond: "F/100%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    crane_king: {
        parent: "king",
    },

    crooked_bishop: {
        parent: "boy_scout",
    },

    crooked_camelrider: {
        betza: "zCC",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "T/1093",
            wedge_flat:     "?/10k",
        },
    },

    crooked_girafferider: {
        betza: "z(1,4)0",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "T/1093",
            wedge_flat:     "?/10k",
        },
    },

    crooked_nightrider: {
        betza: "zNN",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k",
            wedge_flat:     "T/21",
        },
    },

    crooked_queen: {
        betza: "zRzB",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    crooked_zebrarider: {
        betza: "zZZ",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "T/358",
            wedge_flat:     "T/122",
        },
    },

    crown_prince: {
        parent: "chancellor",
    },

    crowned_knight: {
        parent: "centaur",
    },

    crusader: {
        parent: "archbishop",
    },

    cuckoo: {
        betza:    "sWfD",
        results: {
            spiral_square:  "F/12.5%", 
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3, 2),
            wedge_flat:      sqrt (2, 3, 2),
        },
    },

    //
    // D pieces
    //
    dabbaba: {      // (2, 0)-leaper
        betza:    "D",
        results: {
            spiral_square:  "F/25%", 
            spiral_diamond: "F/25%", 
            wedge_folded:    sqrt (2),
            wedge_flat:      sqrt (2),
        },
    },

    dabbabah: {
        parent: "chancellor",
    },

    dabbabarider: {
        betza:    "DD",
        results: {
            spiral_square:  "F/25%", 
            spiral_diamond: "F/25%",
            wedge_folded:    sqrt (2),
            wedge_flat:      sqrt (2),
        },
    },

    dark_spirit: {
        betza: "WfrFbF",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F/100%",
            wedge_folded:   "F/100%",
            wedge_flat:     "F/100%",
        },
    },

    dayrider: {
        betza:    "WFAADD",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    der: {
        parent: "rook",
    },

    dervish: {
        parent:   "alibaba",
    },

    deva: {
        betza: "WflFbF",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F/100%",
            wedge_folded:   "F/100%",
            wedge_flat:      sqrt (2, 2),
        },
    },

    diabolo: {
        parent: "blind_monkey",
    },

    diving_osprey: {
        betza:    "W4fFA",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F*/100%",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    dog: {
        parent: "sergeant",
    },

    dolphin: {
        parent:   "pawn",
    },

    donkey: {
        betza: "W2",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F/81.25%",
            wedge_folded:   "T/5",
            wedge_flat:      frac (2, 2),
        },
    },

    doughnut: {
        parent:   "carpenter",
    },

    dragon: {
        betza:  "NfW",
        results: {
            spiral_square:  "T/94,632", 
            spiral_diamond: "T/13,324",
            wedge_folded:   "T/42", 
            wedge_flat:     "F*/100%",
        },
        _index_name: "Dragon (Knight + Pawn)",
    },

    dragon_a2c: {
        betza:  "A2C",
        results: {
            spiral_square:  "T/14,582", 
            spiral_diamond: "T/149,823",
            wedge_folded:   "?/1G",
            wedge_flat:     "T/734,298,797",
        },
        _name: "Dragon",
        _index_name: "Dragon (Alfil + Camel)",
    },

    dragon_horse: {
        betza:    "WB",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    dragon_king: {
        betza:   "FR",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    dragon_kite: {
        parent:   "dragon_king",
    },

    drunk_elephant: {
        betza: "FfsW",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    drunken_ferz: {
        parent: "blind_monkey",
    },

    duke_cobra: {
        parent: "centaur",
        _name:  "Duke",
        _index_name: "Duke (Cobra Chess)",
    },

    duke_q: {
        parent: "queen",
        _name: "Duke",
        _index_name: "Duke (Quantum Chess)",
    },

    duke: {
        betza:    "W4N",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "T/1,563",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Duke (Scirocco)",
    },

    duke_renn: {
        _name: "Duke",
        _index_name: "Duke (Renn Chess)",
        move_list: [
            ((n, args = {}) => [- n,        n - 1,  {not_a_target: n == 1}]),
            ((n, args = {}) => [- n,      -(n - 1), {not_a_target: n == 1}]),
            ((n, args = {}) => [  n,        n - 1,  {not_a_target: n == 1}]),
            ((n, args = {}) => [  n,      -(n - 1), {not_a_target: n == 1}]),
            ((n, args = {}) => [  n - 1,  - n,      {not_a_target: n == 1}]),
            ((n, args = {}) => [  n - 1,    n,      {not_a_target: n == 1}]),
            ((n, args = {}) => [-(n - 1),   n,      {not_a_target: n == 1}]),
            ((n, args = {}) => [-(n - 1), - n,      {not_a_target: n == 1}]),
        ],
        results: {
            spiral_square:  "T/116",
            spiral_diamond: "T/114",
            wedge_folded:   "T/14", 
            wedge_flat:     "T/12",
        }
    },


    //
    // E pieces
    //
    eagle: {
        betza:  "fBbRfsWbB2",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    earl: {
        betza: "t[FW]t[WF]R",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "T/1,431", 
            wedge_folded:   "F/100%",
            wedge_flat:     "F/100%",
        },
    },

    earth_general: {
        parent: "go_between",
    },

    eastern_barbarian: {
        betza: "vW2fFsW",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F/50%",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    elder: {
        parent: "amazon"
    },

    elephant: {
        betza:    "F2",
        results: {
            spiral_square:  "F/40.625%", 
            spiral_diamond: "F/50%",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2),
        },
    },

    dobutsu_elephant: {
        parent: "ferz",
        _name: "Elephant",
        _index_name: "Elephant (D&#x14d;butsu Sh&#x14d;gi)",
    },

    elephant_janggi: {
        betza: "",
        results: {
            spiral_square:  "T/55", 
            spiral_diamond: "T/60",
            wedge_folded:   "T/47", 
            wedge_flat:     "T/18",
        },
        _name: "Elephant",
        _index_name: "Elephant (Janggi)",
        move_list: [
            {dr: -3, dc: -2, us: [[-1,  0], [-2, -1]], max: 1},
            {dr: -3, dc:  2, us: [[-1,  0], [-2,  1]], max: 1},
            {dr: -2, dc: -3, us: [[ 0, -1], [-1, -2]], max: 1},
            {dr: -2, dc:  3, us: [[ 0,  1], [-1,  2]], max: 1},
            {dr:  2, dc: -3, us: [[ 0, -1], [ 1, -2]], max: 1},
            {dr:  2, dc:  3, us: [[ 0,  1], [ 1,  2]], max: 1},
            {dr:  3, dc: -2, us: [[ 1,  0], [ 2, -1]], max: 1},
            {dr:  3, dc:  2, us: [[ 1,  0], [ 2,  1]], max: 1},
        ],
    },

    elephant_prince: {
        parent:   "king",
    },

    elephant_wolf: {
        parent:  "amazon_rider",
        _name: "Elephant",
        _index_name: "Elephant (Wolf Chess)",
    },

    emperor_scirocco: {
        parent:  "champion",
        _name:   "Emperor",
        _index_name: "Emperor (Scirocco)",
    },

    emperor: {
        betza: "W2F2N",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Emperor (Typhoon)",
    },

    empress:  {
        parent: "chancellor",
        _index_name: "Empress (Rook + Knight)",
    },

    empress_qn: {
        parent: "amazon",
        _name:  "Empress",
        _index_name: "Empress (Queen + Knight)",
    },

    enchanted_badger: {
        parent: "donkey",
    },

    equerry: {
        parent: "archbishop",
    },

    eques_rex: {
        parent: "centaur",
        _name:  "Eques Rex",
        _index_name: "Eques Rex",
    },

    evil_wolf: {
        betza: "fFfsW",
        results: {
            spiral_square:  "F/25%",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },


    //
    // F pieces
    //
    fad: {
        betza:    "FDA",
        results: {
            spiral_square:  "F/50%", 
            spiral_diamond: "F/50%",
            wedge_folded:   "F/50%", 
            wedge_flat:     "F/50%",
        },
        _name:    "FAD",
    },

    falcon: {
        betza:    "fBbR",
        _index_name: "Falcon (Falcon-Hunter Chess)",
        results: {
            spiral_square:  "F*/25%", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    tori_falcon: {
        parent: "drunk_elephant",
        _name:  "Falcon",
        _index_name: "Falcon (Tori Sh&#x14d;gi)",
    },

    ferese: {
        parent: "knight",
    },

    ferocious_leopard: {
        parent: "crane",
    },

    fers: {
        parent: "ferz",
    },

    ferz: {         // (1, 1)-leaper
        betza:    "F",
        results: {
            spiral_square:  "F/50%", 
            spiral_diamond: "F/50%", 
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    ferzrider: {
        parent: "bishop",
    },

    fierce_eagle: {
        betza: "F2fsW",
        results: {
            spiral_square:   "T/346",
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 4),
            wedge_flat:      sqrt (2, 4),
        },
    },

    fire_general: {
        betza:   "fFvW3",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "E = 1",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    fire_horse: {
        betza:    "fRbhN",
        results: {
            spiral_square:  "T/45", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 4),
            wedge_flat:      sqrt (2, 4),
        },
    },

    firzan: {
        parent: "ferz",
    },

    flamingo: {     // (6, 1)-leaper
        betza:    "(1,6)",
        results: {
            spiral_square:  "T/26,966", 
            spiral_diamond: "T/1810",
            wedge_folded:   "T/90", 
            wedge_flat:     "T/260",
        },
    },

    flying_cock: {
        betza:    "fFsW",
        results: {
            spiral_square:   sqrt (2, 4),
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F*/100%",
        },
    },

    flying_dragon: {
        parent: "oec_caliph",
    },

    flying_falcon: {
        betza: "fWB",
        results: {
            spiral_square:  "T/67", 
            spiral_diamond: "T/157",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2)
        },
    },

    flying_goose: {
        parent: "copper_general",
    },

    flying_horse: {
        parent: "elephant",
    },

    flying_ox: {
        betza:    "BvR",
        results: {
            spiral_square:  "T/540", 
            spiral_diamond:  frac (1, 10),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    flying_stag: {
        betza: "sWFvR",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    fragant_elephant: {
        parent: "sorcerer"
    },

    fort: {
        betza: "FWWG",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    fourleaper: {   // (4, 0)-leaper
        betza:    "(0,4)",
        results: {
            spiral_square:  "F/6.25%", 
            spiral_diamond: "F/6.25%", 
            wedge_folded:    sqrt (2, 1, 2),
            wedge_flat:      sqrt (2, 1, 2),
        },
    },

    fox: {
        parent: "archbishop",
    },

    fox_renn: {
        parent: "wazir",
        _name: "Fox",
        _index_name: "Fox (Wazir)",
    },

    free_boar: {
        betza:    "BsR",
        results: {
            spiral_square:  "T/251", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    frog: {
        betza: "FH",
        parent: "tadpole",
        _index_name: "Frog (Ferz + Threeleaper)",
    },

    frog_wfh: {
        betza: "WFH",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _name: "Frog",
        _index_name: "Frog (King + Threeleaper)",
    },

    scirocco_frog: {
        betza:    "KGH",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _name:    "Frog",
        _index_name: "Frog (Scirocco)",
        obsolete: {
            scirocco: 1,
        },
    },

    fu: {
        parent:   "pawn",
    },

    //
    // G pieces
    //
    general: {
        parent: "amazon"
    },

    general_camel: {
        parent: "camel",
        _name: "General",
        _index_name: "General (Camel)",
    },

    general_euro: {
        parent: "gold_general",
        _name: "General",
        _index_name: "General (EuroShogi)",
    },

    general_janggi: {
        parent: "king",
        _name: "General",
        _index_name: "General (Janggi)",
    },

    general_xiangqi: {
        parent: "wazir",
        _name:  "General",
        _index_name: "General (Xiangqi)",
    },

    general_yari: {
        parent: "king",
        _name:  "General",
        _index_name:  "General (Yari Sh&#x14d;gi)",
    },

    genie: {
        betza:    "W3F3",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F*/100%",
        },
    },

    ghost_warrior: {
        betza:    "bFfR",
        results: {
            spiral_square:  "F*/25%", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    ginkaku: {
        betza_list: ["fWF", "B"],
        results:    {
            spiral_square:  "T/80", 
            spiral_diamond: "T/84",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2),
        },
    },

    giraffe: {      // (4, 1)-leaper
        betza:    "(1,4)",
        results: {
            spiral_square:  "T/13,102", 
            spiral_diamond: "T/1,322",
            wedge_folded:   "T/114", 
            wedge_flat:     "T/94",
        },
        _index_name: "Giraffe ((4, 1) - leaper)",
    },

    giraffe_rose: {      // (4, 1)-leaper
        betza:    "q(1,4)",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k", 
            wedge_flat:     "?/10k",
        },
    },

    giraffe_dobutsu: {
        parent: "wazir",
        _name: "Giraffe",
        _index_name: "Giraffe (D&#x14d;butsu sh&#x14d;gi)",
    },

    giraffe_tgc: {
        parent: "amazon",
        _name:  "Giraffe",
        _index_name: "Giraffe (Turkish Great Chess)",
    },

    girl_scout: {
        betza: "zR",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F/100%",
            wedge_folded:   "F/100%",
            wedge_flat:     "F/100%",
        },
    },

    gliding_swallow: {
        parent: "rook",
    },

    gnu: {
        betza:    "NC",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "T/136,022,083",
            wedge_folded:   "?/1G",
            wedge_flat:     "F*/100%",
        },
    },

    go_between: {
        betza: "vW",
        _name: "Go-Between",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    goat: {
        betza:    "FD",
        results: {
            spiral_square:  "F/50%", 
            spiral_diamond: "F/50%",
            wedge_folded:   "F/50%", 
            wedge_flat:     "F/50%",
        },
    },

    gold_general: {
        betza:  "WfF",
        results: {
            spiral_square:  "W", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%"
        },
    },

    golden_bird: {
        parent: "gold_general",
    },

    goose: {
        betza:  "fAbD",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 1, 2),
            wedge_flat:      sqrt (2, 1, 2),
        },
    },

    grey_whale: {
        parent:   "hunter",
    },

    griffon: {
        parent: "octopus",
    },

    gryphon: {
        betza:  "BfW",
        results: {
            spiral_square:  "T/67", 
            spiral_diamond: "T/157",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2),
        },
    },

    guard: {
        parent:  "wazir",
        _index_name: "Guard (Wazir)",
    },

    guard_king: {
        parent: "king",
        _name: "Guard",
        _index_name: "Guard (Non-Royal King)",
    },

    guardian: {
        parent: "ferz",
    },

    guardian_of_the_gods: {
        betza: "W3",
        results: {
            spiral_square:  "W",
            spiral_diamond: "T/129",
            wedge_folded:   "T/6",
            wedge_flat:      sqrt (2, 2),
        },
        _name: "Guardian of the Gods",
    },

    //
    // H pieces
    //
    half_crooked_queen_I: {
        _name: "Half Crooked Queen \u{2160}",
        betza: "RzB",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    half_crooked_queen_II: {
        _name: "Half Crooked Queen \u{2161}",
        betza: "zRB",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    harpy: {
        parent:   "genie",
    },

    hawk: {
        betza:    "DAGH",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "?/1G",
            wedge_folded:   "?/1G",
            wedge_flat:     "?/1G",
        },
    },

    heavenly_horse: {
        betza: "fbN",
        results:    {
            spiral_square:  "F/25%", 
            spiral_diamond: "F/25%", 
            wedge_folded:    sqrt (2),
            wedge_flat:      sqrt (2),
        },
    },

    heavenly_tetrarch: {
        betza: "F4W4",
        results:    {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    dobutsu_hen: {
        parent: "gold_general",
        _name: "Hen",
    },

    hia: {
        parent: "sorcerer",
    },

    hifu: {
        betza_list: ["fW", "R"],
        results:    {
            spiral_square:   sqrt (2, 2),
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2, 2),
        },
    },

    horned_falcon: {
        betza: "fWfDBsbR",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    horned_owl: {
        betza:    "F4DfW",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "F/100%",
            wedge_folded:   "F/50%", 
            wedge_flat:     "F/100%"
        },
    },

    horse: {
        _index_name: "Horse (Mao)",
        parent: "mao",
    },

    horse_renn: {
        _index_name: "Horse (Knight)",
        _name: "Horse",
        parent: "knight",
    },

    horse_general: {
        betza:   "fFbWfW3",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "E = 1",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    hummingbird: {
        parent:   "narwhal",
    },

    humpback: {
        betza:    "bWF",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "F*/100%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    hunter: {
        betza:    "fRbB",
        results: {
            spiral_square:  "T/146", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    //
    // I pieces
    //
    ibis: {
        parent:   "dragon_king",
    },

    immobilizer: {
        parent: "queen",
    },

    iron_general: {
        parent: "sergeant",
    },

    //
    // J pieces
    //
    janus: {
        parent: "archbishop",
    },

    //
    // K pieces
    //
    killer_whale: {
        parent:   "dragon_king",
    },

    king: {
        betza:  "K",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM", 
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%"
        },
    },

    king_taikyoku: {
        parent: "sorcerer",
        _name: "King",
        _index_name: "King (Taikyoku)",
    },

    kinkei: {
        betza_list: ["WfF", "fN"],
        results: {
            spiral_square:   sqrt (2, 2),
            spiral_diamond:  frac (1, 2),
            wedge_folded:    frac (1, 2),
            wedge_flat:      sqrt (2, 2),
        },
    },

    kirin: {
        parent: "goat",
    },

    knight: {
        betza:  "N",
        results: {
            spiral_square:  "T/2,015", 
            spiral_diamond: "T/3,722",
            wedge_folded:   "T/50", 
            wedge_flat:      sqrt (2, 4),
        },
        _index_name: "Knight (Chess)",
    },

    knight_cavalry: {
        parent: "buffalo",
        _name: "Knight",
        _index_name: "Knight (Cavalry Chess)",
    },

    knight_king: {
        parent: "centaur",
    },

    knight_euro: {
        betza: "sWfN",
        _name: "Knight",
        _index_name: "Knight (EuroShogi)",
        results: {
            spiral_square:   sqrt (2, 2),
            spiral_diamond:  "E = 1",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2, 2),
        },
    },

    shogi_knight: {
        betza:  "fN",
        _name:  "Knight",
        _index_name: "Knight (Sh&#x14d;gi)",
        results: {
            spiral_square:   sqrt (5),
            spiral_diamond:  frac (2),
            wedge_folded:    sqrt (5),
            wedge_flat:      sqrt (5),
        },
    },

    kuu: {
        parent: "pawn",
        _name: "K&#x00FC;&#x00FC;",
    },

    kyoto: {
        betza_list: ["WfF", "fR"],
        results: {
            spiral_square:   sqrt (2, 2),
            spiral_diamond:  frac (1, 2),
            wedge_folded:    frac (1, 2),
            wedge_flat:      sqrt (2, 2),
        },
        _name: "Ky&#x014D;to",
    },

    //
    // L pieces
    //
    lance: {
        betza:  "fR",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    lantern: {
        betza:    "fF",
        results: {
            spiral_square:   sqrt (2),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      sqrt (2),
        },
    },

    left_general: {
        parent: "king",
    },

    left_quail: {
        betza:  "fRbrBblF",
        results: {
            spiral_square:  "T/146", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    leopard_king: {
        betza: "F5W5",
        results:    {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    liberated_horse: {
        betza: "bW2fW0",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    lion: {
        parent: "lioness",
        _index_name: "Lion (Chu&nbsp;Sh&#x014d;gi)",
    },

    dobutsu_lion: {
        parent: "king",
        _name: "Lion",
        _index_name: "Lion (D&#x14d;butsu sh&#x14d;gi)",
    },

    lioness: {
        betza: "WFDNA",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%"
        },
    },

    longleaper: {
        parent:   "queen",
    },

    //
    // M pieces
    //
    maharajah: {
        parent: "amazon",
    },

    mao: {
        betza: "t[WF]",
        results: {
            spiral_square:  "T/28", 
            spiral_diamond: "T/64", 
            wedge_folded:    sqrt (2, 3),
            wedge_flat:     "T/12"
        },
    },

    marquis: {
        betza:    "WN",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "?/1G",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%"
        },
        _index_name: "Marquis (Wazir + Knight)",
    },

    marquis_rn: {
        parent: "chancellor",
        _name: "Marquis",
        _index_name: "Marquis (Rook + Knight)",
    },

    marshal: {
        parent: "chancellor",
    },

    marshall: {
        parent: "chancellor",
    },

    medeq: {
        parent: "pawn",
    },

    mini_rose: {
        betza: "qK",
        results: {
            spiral_square:  "", 
            spiral_diamond: "",
            wedge_folded:   "", 
            wedge_flat:     "",
        },
        _name: "Mini-Rose",
    },

    minister: {
        parent: "archbishop",
    },

    missionary: {
        parent: "elephant",
    },

    moa: {
        betza: "t[FW]",
        results: {
            spiral_square:  "T/21", 
            spiral_diamond: "T/35", 
            wedge_folded:    sqrt (2),
            wedge_flat:      sqrt (2),
        },
    },

    modern_elephant: {
        betza:    "FA",
        results: {
            spiral_square:  "F*/50%", 
            spiral_diamond: "F/50%",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2),
        },
    },

    moonrider: {
        betza:    "NNZ",
        results: {
            spiral_square:  "T/26,637",
            spiral_diamond: "T/44,236",
            wedge_folded:   "?/1G",
            wedge_flat:     "T/21,401,163",
        },
    },

    mori: {
        parent: "knight",
    },

    mountain_general: {
        parent: "water_general",
    },

    mountain_stag: {
        betza: "fF3vWsW2bW4",
        results: {
            spiral_square:  "W",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    //
    // N pieces
    //
    narwhal: {
        betza:    "sbWfD",
        results: {
            spiral_square:  "T/172", 
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    nb: {
        parent: "archbishop",
        _name: "NB",
    },

    negus: {
        parent: "king",
    },

    neighbouring_king: {
        parent: "drunk_elephant",
    },

    nightrider: {
        betza:    "NN",
        results: {
            spiral_square:  "T/509", 
            spiral_diamond: "T/1,697",
            wedge_folded:   "T/60", 
            wedge_flat:     "T/22"
        },
    },

    nobleman: {
        parent: "chancellor",
    },

    northern_barbarian: {
        betza: "fFWsW2",
        results:   {
            spiral_square:  "W",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    noyan: {
        parent: "king",
    },

    noyon: {
        parent: "king",
    },

    //
    // O pieces
    //
    octopus: {
        betza:      "t[FR]",
        results:   {
            spiral_square:   sqrt (2, 20, 7),
            spiral_diamond: "T/52",
            wedge_folded:   "T/7", 
            wedge_flat:      sqrt (2),
        },
    },

    okapi: {
        betza:    "NZ",
        results: {
            spiral_square:  "T/947,668", 
            spiral_diamond: "?/1G",
            wedge_folded:   "?/1G",
            wedge_flat:      sqrt (2, 4),
        },
    },

    old_kite: {
        betza: "F2sW",
        results: {
            spiral_square:  "T/96",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    old_monkey: {
        parent: "humpback",
    },

    old_rat: {
        parent: "strutting_crow",
    },

    otter: {
        betza:    "FfWsW4",
        results: {
            spiral_square:  "T/321", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    overtaker: {
        parent:   "king",
    },

    oxcart: {
        parent: "lance",
    },

    ox_general: {
        parent: "horse_general"
    },

    //
    // P pieces
    //
    page: {
        parent: "centaur"
    },

    paladin: {
        parent: "archbishop",
    },

    parrot: {
        parent:   "war_machine",
    },

    pawn: {
        betza:    "fW",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    pheasant: {
        betza:  "fDbF",
        results: {
            spiral_square:   sqrt (2, 2),
            spiral_diamond: "F*/25%",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2, 2),
        },
    },

    phoenix_chu: {
        parent: "caliph",
        _name: "Phoenix",
        _index_name: "Phoenix (Chu&nbsp;Sh&#x014d;gi)",
    },

    phoenix_tori: {
        parent: "king",
        _name: "Phoenix",
        _index_name: "Phoenix (Tori&nbsp;Sh&#x014d;gi)",
    },

    pig_general: {
        betza: "fF4bW2",
        results: {
            spiral_square:  "T/36",
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    pikeman: {
        parent: "flying_ox",
    },

    plodding_ox: {
        parent: "king",
    },

    poisonous_snake: {
        betza: "fFfsW2bW",
        results: {
            spiral_square:  "W",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    porpoise: {
        betza:    "sW",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:   "", 
            wedge_flat:     "",
        },
    },

    prancing_stag: {
        parent: "northern_barbarian",
    },

    priest: {
        betza:    "FN",
        results: {
            spiral_square:  "T/1,050", 
            spiral_diamond: "F/100%",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "F/100%",
        },
    },

    prince: {
        parent: "king",
    },

    prince_amazon: {
        parent: "amazon",
        _name: "Prince",
        _index_name: "Prince (Amazon)",
    },

    princess: {
        parent: "archbishop"
    },

    promoted_bishop: {
        parent: "dragon_horse",
    },

    promoted_knight_euro: {
        parent: "gold_general",
        _name: "Promoted Knight",
        _index_name: "Promoted Knight (EuroShogi)",
    },

    promoted_rook: {
        parent: "dragon_king",
    },

    promoted_pawn_euro: {
        parent: "gold_general",
        _name: "Promoted Pawn",
        _index_name: "Promoted Pawn (EuroShogi)",
    },

    pup_general: {
        parent: "chicken_general",
    },

    //
    // Q pieces
    //
    queen: {
        betza:  "Q",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Queen (Chess)",
    },

    queen_jump: {
        betza:  "",
        move_list: [
            {dr: -1, dc: -1, max_jumps: 1},
            {dr: -1, dc:  0, max_jumps: 1},
            {dr: -1, dc:  1, max_jumps: 1},
            {dr:  0, dc: -1, max_jumps: 1},
            {dr:  0, dc:  1, max_jumps: 1},
            {dr:  1, dc: -1, max_jumps: 1},
            {dr:  1, dc:  0, max_jumps: 1},
            {dr:  1, dc:  1, max_jumps: 1},
        ],
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
        _index_name: "Queen (Jumping)",
        _name:       "Queen",
    },

    queen_makruk: {
        parent: "ferz",
        _name: "Queen",
        _index_name: "Queen (Makruk)",
    },

    //
    // R pieces
    //
    raven: {
        parent:   "modern_elephant",
    },

    raiding_falcon: {
        betza: "sWfFvR",
        results: {
            spiral_square:  "W",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    reclining_dragon: {
        parent: "wazir",
    },

    reverse_chariot: {
        betza: "vR",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    right_general: {
        parent: "king",
    },

    right_quail: {
        betza:  "fRblBbrF",
        results: {
            spiral_square:  "F*/25%", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    river_general: {
        parent: "horse_general"
    },

    roaming_bear: {
        parent: "drunk_elephant",
    },

    roc: {
        betza: "D0t[FR]",
        results:   {
            spiral_square:  "F/50%",
            spiral_diamond: "F/100%",
            wedge_folded:   "F/50%",
            wedge_flat:     "F/50%",
        },
    },

    rook: {
        betza:  "R",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F/62.5%",
            wedge_folded:   "T/6", 
            wedge_flat:      sqrt (2, 2),
        },
    },

    root_25_leaper: {
        betza:    "(3,4)(5,0)",
        results: {
            spiral_square:  "T/800,494", 
            spiral_diamond: "T/69,275,961",
            wedge_folded:   "T/644,454", 
            wedge_flat:     "T/80,152",
        },
    },

    root_50_leaper: {
        betza:    "(5,5)(7,1)",
        results: {
            spiral_square:  "T/69,275,961",
            spiral_diamond: "T/800,494",
            wedge_folded:   "T/84,355", 
            wedge_flat:     "T/915,395,734",
        },
    },

    rose: {
        betza:    "qN",
        results: {
            spiral_square:  "?/10k",
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k",
            wedge_flat:     "T/39",
        },
    },

    running_bird: {
        betza: "FsWfW2",
        results: {
            spiral_square:  "F*/100%",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    running_rabbit: {
        betza:   "bWFfR",
        results: {
            spiral_square:  "F*/100%",
            spiral_diamond: "F/100%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    rushing_boar: {
        parent: "drunk_elephant",
    },

    //
    // S pieces
    //
    saba: {
        parent: "alfil",
    },

    salamander: {
        parent:   "king",
    },

    scirocco: {
        parent:  "dragon_horse",
    },

    sergeant: {
        betza: "fWfF",
        results: {
            spiral_square:   sqrt (2),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      sqrt (2),
        },
    },

    side_mover: {
        betza: "vWsR",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F*/87.5%",
            wedge_folded:   "T/6",
            wedge_flat:      sqrt (2, 2),
        },
        _name: "Swallow's Wings",
    },

    silver_general: {
        betza:  "FfW",
        results: {
            spiral_square:  "F*/100%", 
            spiral_diamond: "F/100%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    soaring_eagle: {
        betza: "fFfAbBR",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    soldier: {
        parent: "pawn",
        _index_name: "Soldier (Xiangqi)",
    },

    soldier_janggi: {
        parent: "banner",
        _name: "Soldier",
        _index_name: "Soldier (Janggi)",
    },

    sorcerer: {
        betza:    "W2F2",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "BM",
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    southern_barbarian: {
        parent: "northern_barbarian",
    },

    sparrow_pawn: {
        parent: "pawn",
    },

    spearman: {
        betza_list: ["vR", "frblB", "flbrB"],
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "T/18",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    spider: {
        betza: "t[WB]",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F*/100%",
            wedge_folded:   "T/10",
            wedge_flat:      sqrt (2, 2),
        },
    },

    spider_interdependent: {
        parent: "alibaba",
        _name:  "Spider",
        _index_name: "Spider (Interdependent Chess)",
    },

    squire: {
        betza: "WFDA",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    squire_knight: {
        _name:  "Squire",
        _index_name: "Squire (Knight)",
        parent: "knight",
    },

    squirrel: {
        betza:    "DNA",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "F*/100%",
            wedge_folded:   "F*/100%", 
            wedge_flat:     "?/1G",
        },
    },

    stag: {         // (4, 2)-leaper
        betza:    "(2,4)",
        results: {
            spiral_square:  "T/2,015", 
            spiral_diamond: "T/3,722",
            wedge_folded:    sqrt (2, 2),
            wedge_flat:      sqrt (2, 2),
        },
    },

    stag_rose: {
        betza:    "q(2,4)",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "F*/50%",
            wedge_flat:     "F*/50%",
        },
    },

    steward: {
        parent: "wazir",
    },

    stone_general: {
        parent: "lantern",
    },

    stork: {
        parent:  "alfil",
    },

    strutting_crow: {
        betza: "fWbF",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond:  frac (1, 2),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    swallow: {
        parent: "pawn",
    },

    swallows_wings: {
        parent: "side_mover",
    },

    swapper: {
        parent: "queen",
    },

    sword_general: {
        betza: "fF3fW3bW",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "E = 1",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    sword_soldier: {
        parent: "tile_general",
    },

    swooping_owl: {
        parent: "strutting_crow",
    },

    //
    // T pieces
    //
    tadpole: {
        betza: "FH",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "T/50,279",
            wedge_folded:   "T/8,619,774", 
            wedge_flat:     "T/4,637,261",
        },
    },

    teme: {
        parent: "bishop",
    },

    tenacious_falcon: {
        betza: "sWvRB",
        results: {
            spiral_square:  "W",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    tereg: {
        parent: "rook",
    },

    terge: {
        parent: "rook",
    },

    terror: {
        parent: "amazon",
    },

    threeleaper: {  // (3, 0)-leaper
        betza:    "H",
        results: {
            spiral_square:  "F/11.1&#x0305;%", 
            spiral_diamond: "F/11.1&#x0305;%",
            wedge_folded:   "T/6", 
            wedge_flat:      sqrt (2, 2, 3),
        },
    },

    threeleaperrider: {
        betza:    "HH",
        results: {
            spiral_square:  "F/11.1&#x0305;%", 
            spiral_diamond: "F/6.94&#x0305;%",
            wedge_folded:   "T/6", 
            wedge_flat:      sqrt (2, 2, 3),
        },
    },

    tiger_kung_fu: {
        parent: "centaur",
        _name:  "Tiger",
        _index_name: "Tiger (Kung Fu Chess)",
    },

    tiger_hunt: {
        parent: "amazon",
        _index_name: "Tiger (Tiger Hunt)",
    },

    tiger_prince: {
        parent:   "king",
    },

    tile_general: {
        betza:  "bWfF",
        results: {
            spiral_square:  sqrt (2, 3),
            spiral_diamond: frac (1, 2),
            wedge_folded:   sqrt (2, 3),
            wedge_flat:     sqrt (2),
        },
    },

    treacherous_fox: {
        betza: "vWFvDA",
        results: {
            spiral_square:  "F*/100%",
            spiral_diamond: "F*/100%",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    tripper:   {    // (3, 3)-leaper
        betza:    "G",
        results: {
            spiral_square:  "F/5.55&#x0305;%", 
            spiral_diamond: "F/5.55&#x0305;%",
            wedge_folded:    sqrt (2, 3, 2),
            wedge_flat:      sqrt (2, 1, 3),
        },
    },

    tokin: {
        parent: "gold_general",
    },

    tripperrider: {
        betza:    "GG",
        results: {
            spiral_square:  "F*/3.472&#x0305;%", 
            spiral_diamond: "F/5.55&#x0305;%",
            wedge_folded:    sqrt (2, 3, 2),
            wedge_flat:      sqrt (2, 1, 3),
        },
    },

    turtle_dove: {
        betza: "fF5sbW",
        results: {
            spiral_square:  "T/337",
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    typhoon: {
        parent:   "genie",
    },

    //
    // U pieces
    //
    undertaker: {
        parent:   "king",
    },

    //
    // V pieces
    //
    valiant_knight: {
        parent: "buffalo",
    },

    venomous_wolf: {
        parent: "king",
    },

    vertical_mover: {
        betza: "sWvR",
        results: {
            spiral_square:  "W",
            spiral_diamond: "F/75%",
            wedge_folded:   "T/6",
            wedge_flat:      sqrt (2),
        },
    },

    viscount: {
        parent: "archbishop",
    },

    violent_bear: {
        betza: "fF2bFsW",
        results: {
            spiral_square:  "T/93",
            spiral_diamond: "BM",
            wedge_folded:   "FC",
            wedge_flat:     "F/100%",
        },
    },

    violent_stag: {
        parent: "silver_general",
    },

    violent_wolf: {
        parent: "gold_general"
    },

    vizir: {
        parent: "archbishop",
    },

    vulture: {
        parent:  "dragon_horse",
    },

    //
    // W pieces
    //
    wagon: {
        results: {
            spiral_square:  "F/25%", 
            spiral_diamond: "T/32",
            wedge_folded:    sqrt (2),
            wedge_flat:      sqrt (2),
        },
        move_list: [
            ((n, a = {}) => [-n,  0, {not_a_target: n == 1}]),
            ((n, a = {}) => [ n,  0, {not_a_target: n == 1}]),
            ((n, a = {}) => [ 0, -n, {not_a_target: n == 1}]),
            ((n, a = {}) => [ 0,  n, {not_a_target: n == 1}]),
        ],
    },

    war_machine: {
        betza:   "WD",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F/100%",
            wedge_folded:   "F/100%", 
            wedge_flat:     "F/100%",
        },
        _index_name: "War Machine (Wazir + Dabbaba)",
    },

    war_machine_nr: {
        parent: "chancellor",
        _name: "War Machine",
        _index_name: "War Machine (Rook + Knight)",
    },

    water_general: {
        betza: "fF3vW",
        results: {
            spiral_square:   sqrt (2, 3),
            spiral_diamond: "E = 1",
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    wazir: {        // (1, 0)-leaper
        betza:    "W",
        results: {
            spiral_square:  "W", 
            spiral_diamond: "F/100%",
            wedge_folded:   "T/6", 
            wedge_flat:      sqrt (2, 2),
        },
    },

    wazirrider: {
        parent: "rook",
    },

    western_barbarian: {
        parent: "eastern_barbarian",
    },

    whale: {
        betza: "vRbB",
        results: {
            spiral_square:  "F*/25%",
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2, 3),
        },
    },

    wide_knight: {
        betza: "lrN",
        results: {
            spiral_square:  "F/25%",
            spiral_diamond: "F/25%",
        }
    },

    white_elephant: {
        parent: "sorcerer",
    },

    white_horse: {
        betza: "vRfB",
        results: {
            spiral_square:  "F*/25%",
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    white_whale: {
        parent: "king",
    },

    wildebeest: {
        parent: "gnu",
    },

    wind_general: {
        parent: "horse_general"
    },

    withdrawer: {
        parent: "queen",
    },

    wizard: {
        betza:    "FC",
        results: {
            spiral_square:  "T/777,996,934",
            spiral_diamond: "F/50%",
            wedge_folded:   "F*/50%", 
            wedge_flat:     "F/50%",
        },
    },

    wolf: {
        parent: "chancellor",
    },

    wood_general: {
        betza: "fF2",
        results: {
            spiral_square:   sqrt (2),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      sqrt (2),
        },
    },

    woody_rook: {
        parent: "war_machine",
    },

    wrestler: {
        parent: "bishops_dog",
    },

    //
    // Y pieces
    //

    yaksha: {
        betza: "fFbWsW3",
        results: {
            spiral_square:   "T/51",
            spiral_diamond:   sqrt (2, 2),
            wedge_folded:    "FC",
            wedge_flat:       sqrt (2, 11, 2),
        },
    },

    yari_bishop: {
        betza: "fFfR",
        results: {
            spiral_square:   sqrt (2),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      sqrt (2),
        },
    },

    yari_gold: {
        betza: "WfFbR",
        results: {
            spiral_square:  "W", 
            spiral_diamond:  frac (1, 2),
            wedge_folded:   "FC", 
            wedge_flat:     "F/100%",
        },
    },

    yari_knight: {
        betza: "fNfR",
        results: {
            spiral_square:   frac (1),
            spiral_diamond:  frac (1),
            wedge_folded:    frac (1),
            wedge_flat:      frac (1),
        },
    },

    yari_rook: {
        betza: "frlR",
        results: {
            spiral_square:   sqrt (2, 5),
            spiral_diamond:  frac (1),
            wedge_folded:   "F*/50%", 
            wedge_flat:      sqrt (2, 2),
        },
    },

    yari_silver: {
        betza: "fWfFbR",
        results: {
            spiral_square:  "F*/25%", 
            spiral_diamond:  frac (1),
            wedge_folded:    sqrt (2, 3),
            wedge_flat:      sqrt (2),
        },
    },

    //
    // Z pieces
    //
    zag: {
        parent: "modern_elephant",
    },

    zebra: {        // (3, 2)-leaper
        betza:    "Z",
        results: {
            spiral_square:  "T/4,633", 
            spiral_diamond: "T/14,569",
            wedge_folded:   "T/80", 
            wedge_flat:     "T/286",
        },
    },

    zebrarider: {
        betza:    "ZZ",
        results: {
            spiral_square:  "T/266", 
            spiral_diamond: "T/1,613",
            wedge_folded:   "T/72", 
            wedge_flat:     "T/57",
        },
    },

    zebra_rose: {
        betza:    "qZ",
        results: {
            spiral_square:  "?/10k", 
            spiral_diamond: "?/10k",
            wedge_folded:   "?/10k", 
            wedge_flat:     "T/86",
        },
    },

    zebu:  {
        betza:    "C(1,4)",
        results: {
            spiral_square:  "?/1G",
            spiral_diamond: "T/46,359",
            wedge_folded:   "?/1G",
            wedge_flat:     "?/1G",
        },
    },

    zig: {
        parent: "war_machine",
    },
}

//
// General order of pieces:
//   - Royal pieces first
//   - Main (regular) chess pieces, except pawn
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
                 "dabbabarider", "nightrider", "alfilrider",
                 "threeleaperrider", "camelrider",
                 "zebrarider", "tripperrider",]
    },

    crooked_riders: {
        pieces: ["crooked_queen", "girl_scout", "boy_scout",
                 "crooked_nightrider", "crooked_camelrider",
                 "crooked_zebrarider", "crooked_girafferider",
                 "half_crooked_queen_I", "half_crooked_queen_II"]
    },

    roses: {
        pieces: ["rose", "camel_rose", "zebra_rose", "giraffe_rose",
                 "stag_rose", "antelope_rose"]
    },


    //
    // Chess variants
    //
    cagliostro: {
        href: "https://www.chessvariants.com/large.dir/cagliostro.html",
        name: "Cagliostro's Chess",
        pieces: ["king", "queen", "rook", "bishop", "knight",
                 "archbishop", "chancellor", "general", "pawn"],
    },

    falcon_hunter_chess: {
        href: "https://en.wikipedia.org/wiki/Falcon-hunter_chess",
        name: "Falcon-Hunter Chess",
        pieces: ["king", "queen", "rook", "bishop", "knight",
                 "falcon", "hunter", "pawn"],
    },

    ganymede_chess: {
        href: "https://www.chessvariants.com/large.dir/ganymede.html",
        pieces: ["king", "queen", "rook", "bishop", "knight",
                 "cardinal_bwh", "dragon_a2c", "empress_qn",
                 "flying_dragon", "fort", "frog_wfh", "gnu",
                 "griffon", "moonrider", "mini_rose", "nightrider", "pikeman",
                 "roc", "spearman", "!!Wall",
                 "pawn",
        ],
    },

    grand_cavalier_chess: {
        href: "https://www.chessvariants.com/large.dir/grandcavalier.html",
        pieces: ["eques_rex", "queen", "cannon", "cavalier_mao", "marshall",
                 "nightrider", "paladin"],
    },

    interdependent_chess: {
        href:    "https://www.chessvariants.com/42.dir/interdependent/",
        pieces: ["king", "!!Conservative", "guardian", "knight",
                 "spider_interdependent", "steward", "!!Universalist",],
    },

    omega_chess: {
        href:    "https://en.wikipedia.org/wiki/Omega_Chess",
        pieces: ["king", "queen", "rook", "bishop", "knight",
                 "champion", "wizard", "pawn"],
    },

    overkill_ecumenical_chess: {
        href:    "https://www.chessvariants.com/rules/" +
                 "overkill-ecumenical-chess",
        pieces: ["king", "queen", "ace", "acme", "acropolis", "actor",
                 "actress", "oec_caliph", "canvasser", "cardinal", "gnu",
                 "marshal", "pawn"],
    },

    quantum_chess: {
        href:    "https://web.archive.org/web/" +
                         "20090602051546/http://www.quantumchess.com/",
        pieces: ["king", "rook", "bishop", "knight",
                 "archbishop_rbn", "barron", "bowman", "counsellor",
                 "crown_prince", "duke_q", "earl", "marquis", "princess",
                 "queen_jump", "squire_knight", "viscount" ],
    },

    renniassance_chess: {
        href:    "https://www.chessvariants.com/large.dir/renaiss.html",
        pieces: ["king", "queen", "rook", "bishop", "horse_renn",
                 "archbishop", "castle", "cavalier", "duke_renn",
                 "fox_renn", "general_camel", "guard_king", "nobleman",
                 "page", "prince_amazon", "squire", "pawn"],
    },

    rococo: {
        href: "https://www.chessvariants.com/other.dir/rococo.html",
        pieces: ["king", "advancer", "chameleon_rococo", "immobilizer",
                 "longleaper", "swapper", "withdrawer", "cannon_pawn"],
    },

    scirocco: {
        href: "https://www.chessvariants.com/rules/scirocco",
        pieces: ["king", "emperor_scirocco", "queen", "rook", "bishop",
                 "knight", "wazir", "firzan", "dabbaba", "alfil",
                 "camel", "zebra", 

                 "abbot", "chariot", "commoner", "dervish", "duke",
                 "genie", "goat", "guard", "harpy", "lioness",
                 "marquis", "octopus", "priest",
                 "scirocco", "spider", "squirrel", "stork",
                 "tadpole", "vulture", "wagon", "wildebeest",
                 "zag", "zig",
                 
                 "pawn",  "scirocco_frog",],
    },

    typhoon: {
        href: "https://www.chessvariants.com/rules/typhoon-revised",
        pieces: ["king", "emperor", "queen", "rook", "bishop",
                 "knight", "wazir", "firzan", "dabbaba", "alfil",
                 "camel", "zebra", 
            
                 "abbot", "banner", "beaver", "bishops_dog", "blind_tiger",
                 "centaur", "chariot", "cicada", "copper_general", "cuckoo",
                 "dayrider", "dervish", "diving_osprey", "dragon_kite",
                 "drunk_elephant",
                 "duke", "elephant_prince", "ferocious_leopard", "fire_horse",
                 "flying_ox", "free_boar", "genie", "ghost_warrior", "goat",
                 "gold_general", "guard", "harpy", "horned_owl", "hummingbird",
                 "ibis", "immobilizer", "lantern", "lioness", "longleaper",
                 "marquis",
                 "missionary", "nightrider", "octopus", "otter", "overtaker",
                 "parrot", "priest", "raven", "salamander", "scirocco",
                 "sorcerer", "spider", "squirrel", "stork", "tadpole",
                 "tiger_prince", "typhoon", "undertaker", "vulture", "wagon",
                 "wildebeest", "zag", "zig",

                 "fu", "pawn",
                 ],
    },

    wildebeest_chess: {
        href: "https://en.wikipedia.org/wiki/Wildebeest_chess",
        pieces: ["king", "queen", "rook", "bishop", "knight",
                 "camel", "wildebeest", "pawn"],
    },

    wolf_chess: {
        href: "https://en.wikipedia.org/wiki/Wolf_chess",
        pieces: ["king", "queen", "rook", "bishop", "nightrider", "wolf",
                 "fox", "elephant_wolf", "sergeant", "pawn"],
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

    dobutsu_shogi: {
        name: "D&#x14d;butsu Sh&#x14d;gi",
        href: "https://en.wikipedia.org/wiki/D%C5%8Dbutsu_sh%C5%8Dgi",
        pieces: ["dobutsu_lion", "giraffe_dobutsu", "dobutsu_elephant",
                 "dobutsu_chick", "dobutsu_hen"],
    },

    micro_shogi: {
        href: "https://en.wikipedia.org/wiki/Micro_shogi",
        name: "Micro Sh&#x14d;gi",
        pieces: ["king", "rook", "bishop", "gold_general", "silver_general",
                 "shogi_knight", "lance", "tokin", "pawn"],
    },

    kyoto_shogi: {
        href: "https://en.wikipedia.org/wiki/Kyoto_shogi",
        name: "Ky&#x014D;to Sh&#x014D;gi",
        pieces: ["king", "hifu", "ginkaku", "kinkei", "kyoto"],
    },

    whale_shogi: {
        name: "Whale Sh&#x14d;gi",
        href: "https://www.chessvariants.com/shogivariants.dir/whale.html",
        pieces: ["white_whale",
                 "blue_whale", "grey_whale", "humpback", "killer_whale",
                 "narwhal", "porpoise",
                 "dolphin",],
    },

    tori_shogi: {
        name:    "Tori Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Tori_Shogi",
        pieces: ["phoenix_tori", "eagle", "tori_falcon", "crane", "pheasant",
                 "left_quail", "right_quail", "swallow", "goose"],
    },

    yari_shogi: {
        name:    "Yari Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Yari_shogi",
        pieces: ["general_yari", "rook", "yari_rook", "yari_bishop",
                 "yari_gold", "yari_knight", "yari_silver", "pawn"],
    },

    euro_shogi: {
        name:    "EuroShogi",
        href:    "https://en.wikipedia.org/wiki/EuroShogi",
        pieces: ["king", "rook", "promoted_rook", "bishop", "promoted_bishop",
                 "general_euro", "knight_euro", "promoted_knight_euro",
                 "pawn", "promoted_pawn_euro"]
    },

    wa_shogi: {
        name:    "Wa Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Wa_shogi",
        pieces: ["crane_king", "gliding_swallow",
                 "bears_eyes", "blind_dog", "climbing_monkey", "cloud_eagle",
                 "flying_cock", "flying_falcon", "flying_goose", "golden_bird",
                 "heavenly_horse", "liberated_horse", "oxcart", "plodding_ox",
                 "raiding_falcon", "roaming_bear", "running_rabbit",
                 "strutting_crow", "swallows_wings", "swooping_owl",
                 "tenacious_falcon", "treacherous_fox", "violent_stag",
                 "violent_wolf", "sparrow_pawn"],
    },

    chu_shogi: {
        name:    "Chu Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Chu_shogi",
        pieces: ["king", "prince", "queen", "rook", "bishop",
                 "blind_tiger", "copper_general", "dragon_horse",
                 "dragon_king", "drunk_elephant", "ferocious_leopard",
                 "flying_ox", "flying_stag", "free_boar", "go_between",
                 "gold_general", "horned_falcon", "kirin", "lance",
                 "lion", "phoenix_chu", "reverse_chariot", "side_mover",
                 "silver_general", "soaring_eagle", "vertical_mover",
                 "whale", "white_horse", "pawn"],
    },

    taikyoku_shogi: {
        name:    "Taikyoku Sh&#x14d;gi",
        href:    "https://en.wikipedia.org/wiki/Taikyoku_shogi",
        pieces: ["angry_boar", "bears_eyes", "beast_cadet", "beast_officer",
                 "blind_bear", "blind_dog", "blind_monkey", "blind_tiger",
                 "buddist_devil", "captive_cadet", "captive_officer",
                 "cat_sword", "chicken_general",
                 "chinese_cock", "climbing_monkey",
                 "coiled_serpent", "copper_general", "dark_spirit",
                 "deva", "dog", "donkey", "drunk_elephant",
                 "earth_general", "eastern_barbarian",
                 "enchanted_badger", "evil_wolf",
                 "ferocious_leopard", "fierce_eagle", "fire_general",
                 "flying_cock", "flying_goose", "flying_horse",
                 "fragant_elephant", "go_between",
                 "gold_general", "guardian_of_the_gods", "heavenly_tetrarch",
                 "horse_general",
                 "iron_general", "king_taikyoku", "left_general",
                 "leopard_king", "mountain_general", "mountain_stag",
                 "old_kite",
                 "old_monkey", "old_rat", "ox_general", "prince",
                 "neighbouring_king", "northern_barbarian", "poisonous_snake",
                 "pig_general", "prancing_stag", "pup_general",
                 "reclining_dragon", "right_general", "river_general",
                 "running_bird", "rushing_boar",
                 "silver_general", "southern_barbarian", "stone_general",
                 "strutting_crow", "sword_general", "sword_soldier",
                 "swooping_owl", "tile_general", "turtle_dove", "violent_stag",
                 "venomous_wolf", "violent_bear", "violent_wolf",
                 "water_general",
                 "western_barbarian", "white_elephant", "wind_general",
                 "wood_general", "wrestler", "yaksha",
                 "pawn"],
    },

    xiangqi: {
        href:  "https://en.wikipedia.org/wiki/Xiangqi",
        full_name: "Xiangqi (&#x8C61;&#x68CB;)",
        pieces: ["general_xiangqi", "advisor", "elephant", "horse",
                 "chariot_xiangqi", "cannon", "soldier"],
    },

    janggi: {
        href:  "https://en.wikipedia.org/wiki/Janggi",
        pieces: ["general_janggi", "guard_king", "horse",
                 "elephant_janggi", "chariot_xiangqi",
                 "!!Cannon", "soldier_janggi"],
    },

    makruk: {
        href:  "https://en.wikipedia.org/wiki/Makruk",
        pieces: ["king", "rook", "bishop_makruk", "knight",
                 "queen_makruk", "pawn"],
    },

    senterej: {
        href:  "https://en.wikipedia.org/wiki/Senterej",
        pieces: ["negus", "fers", "saba", "ferese", "der", "medeq"],
    },

    shatar: {
        href:  "https://www.chessvariants.com/oriental.dir/shatar.html",
        pieces: ["noyan", "baras", "terge", "teme", "mori", "kuu"],
    },

    hiashatar: {
        href: "https://en.wikipedia.org/wiki/Hiashatar",
        pieces: ["noyon", "bers", "hia", "tereg", "teme", "mori", "fu"],
    },
}

//
// For each piece in a set, add the set to its "sets" property.
// For pieces with a parent, add the set to the parent.
//
for (set in set_info) {
    let seen = {}
    set_info [set] . pieces . forEach ((piece_name) => {
        if (piece_name . match (/^!!/)) {
            return
        }
        let piece = pieces [piece_name]
        if (!piece) {
            alert (`No piece for ${piece_name}`)
            return
        }
        if (piece . parent) {
            piece = pieces [piece_name = piece . parent]
        }
        if (!piece) {
            alert (`No piece for ${piece_name}`)
            return
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

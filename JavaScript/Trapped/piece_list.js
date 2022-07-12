let pieces = {
    //
    // A pieces
    //
    abbot: {
        betza:    "F4N",
        results: ["T/6334", "F*/100%", "F*/100%"],
    },

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

    adjudant: {
        parent: "archbishop",
    },

    advisor: {
        parent: "ferz",
    },

    alfil: {        // (2, 2)-leaper
        betza:    "A",
        results: ["F/12.5%", "E", "E"],
    },

    alfilrider: {
        betza:    "AA",
        results: ["F*/7.8125%", "E", "E"],
    },

    alibaba: {
        betza:    "AD",
        results: ["F/50%", "F/50%", "F/50%"],
    },

    amazon: {
        betza: "QN",
        results: ["W", "FC", "F/100%"],
    },

    antelope: {     // (4, 3)-leaper
        betza:    "(3,4)",
        results: ["T/1,887", "T/128", "T/416"],
    },

    archbishop:    {
        betza:    "BN",
        results: ["T/6,386", "F*/100%", "F*/100%"],
    },

    //
    // B pieces
    //
    banner: {
        betza:    "fsW",
        results: ["F/25%", "F/100%", "E"],
    },

    baron: {
        parent: "archbishop",
    },

    beaver: {
        betza:    "fFfWsW4bW0",
        results: ["W", "FC", "F*/100%"],
    },

    bishop: {
        betza:  "B",
        results: ["F/31.25%", "E", "E"],
        _index_name: "Bishop (Chess)",
    },

    bishop_makruk: {
        parent: "silver_general",
        _name: "Bishop",
        _index_name: "Bishop (Makruk)",
    },

    bishops_dog: {
        betza:    "F3",
        results: ["T/129", "E", "E"],
        _name:    "Bishop's Dog",
    },

    bison: {
        betza:    "CZ",
        results: ["T/844,094", "?/1,071,081,527", "?/784,352,068"],
    },

    blind_bear: {
        parent: "blind_monkey",
    },

    blind_monkey: {
        betza:    "FsW",
        results: ["F*/100%", "FC", "F/100%"],
    },

    blind_tiger: {
        betza:    "FbsW",
        results: ["F*/100%", "FC", "F/100%"],
    },

    blue_whale: {
        parent:   "copper_general",
    },

    //
    // C pieces
    //
    caliph: {
        betza:    "WA",
        results: ["W", "F*/100%", "E"],
        _index_name: "Caliph (Wazir + Alfil)",
    },

    oec_caliph: {
        betza:       "BC",
        _name:       "Caliph",
        _index_name: "Caliph (Bison + Camel)",
        results:    ["T/1,563", "F*/50%", "F*/50%"],
    },

    camel: {        // (3, 1)-leaper
        betza:    "C",
        results: ["T/3,722", "T/342", "T/2,401"],
    },

    camelrider: {
        betza:    "CC",
        results: ["T/1,697", "T/90", "T/482"],
    },

    cannon: {
        parent: "rook",
    },

    canvasser: {
        betza:    "RC",
        results: ["W", "F*/100%", "F*/100%"],
    },

    cardinal: {
        parent: "archbishop"
    },

    cavalier: {
        parent: "mao",
    },

    centaur: {
        betza:    "WFN",
        results: ["W", "FC", "F/100%"],
        _index_name: "Centaur (King + Knight)",
    },

    centaur_bn: {
        parent: "archbishop",
        _name:  "Centaur",
        _index_name: "Centaur (Bishop + Knight)",
    },

    champion: {
        betza:    "WAD",
        results: ["W", "F/100%", "F/100%"],
        _index_name: "Champion (Wazir + Alfil + Dabbaba)",
    },

    champion_nr: {
        parent: "chancellor",
        _name:  "Champion",
        _index_name: "Champion (Rook + Knight)",
    },

    chancellor: {
        betza:    "RN",
        results: ["W", "F/100%", "F/100%"],
    },

    chariot: {
        betza:    "R4",
        results: ["W", "T/6", "E"],
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

    cicada: {
        parent: "king",
    },

    commoner: {
        parent: "king",
    },

    commuter: {     // (4, 4)-leaper
        betza:    "(4,4)",
        results: ["F/3.125%", "E", "E"],
    },

    copper_general: {
        betza:    "fFvW",
        results: ["E*", "E", "E"],
    },

    count: {
        parent: "archbishop",
    },

    crane: {
        betza:  "FvW",
        results: ["F*/100%", "E*", "F/100%"],
    },

    crusader: {
        parent: "archbishop",
    },

    cuckoo: {
        betza:    "sWfD",
        results: ["F/12.5%", "E", "E"],
    },

    //
    // D pieces
    //
    dabbaba: {      // (2, 0)-leaper
        betza:    "D",
        results: ["F/25%", "E", "E"],
    },

    dabbabah: {
        parent: "chancellor",
    },

    dabbabarider: {
        betza:    "DD",
        results: ["F/25%", "E", "E"],
    },

    dayrider: {
        betza:    "WFAADD",
        results: ["W", "FC", "F/100%"],
    },

    dervish: {
        parent:   "alibaba",
    },

    diabolo: {
        parent: "blind_monkey",
    },

    diving_osprey: {
        betza:    "W4fFA",
        results: ["W", "FC", "F/100%"],
    },

    dolphin: {
        parent:   "pawn",
    },

    dragon: {
        betza:  "NfW",
        results: ["T/94,632", "T/42", "F*/100%"],
    },

    dragon_horse: {
        betza:    "WB",
        results: ["W", "FC", "F/100%"],
    },

    dragon_king: {
        betza:   "FR",
        results: ["W", "FC", "F/100%"],
    },

    dragon_kite: {
        parent:   "dragon_king",
    },

    drunk_elephant: {
        betza: "FfsW",
        results: ["F*/100%", "FC", "F/100%"],
    },

    drunken_ferz: {
        parent: "blind_monkey",
    },

    duke: {
        betza:    "W4N",
        results: ["W", "F/100%", "F/100%"],
    },

    //
    // E pieces
    //
    eagle: {
        betza:  "fBbRfsWbB2",
        results: ["W", "FC", "F/100%"],
    },

    elder: {
        parent: "amazon"
    },

    dobutsu_elephant: {
        parent: "ferz",
        _name: "Elephant",
        _index_name: "Elephant (D&#x14d;butsu Sh&#x14d;gi)",
    },

    elephant_janggi: {
        betza: "",
        results: ["T/55", "T/47", "T/18"],
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

    elephant_xiangqi: {
        parent: "missionary",
        _name:       "Elephant",
        _index_name: "Elephant (Xiangqi)",
    },

    elephant_prince: {
        parent:   "king",
    },

    emperor_scirocco: {
        parent:  "champion",
        _name:   "Emperor",
        _index_name: "Emperor (Scirocco)",
    },

    emperor_typhoon: {
        betza: "W2F2Q",
        _name: "Emperor",
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

    equerry: {
        parent: "archbishop",
    },

    eques_rex: {
        parent: "centaur",
        _name:  "Eques Rex",
        _index_name: "Eques Rex",
    },

    //
    // F pieces
    //
    fad: {
        betza:    "FDA",
        results: ["F/50%", "F/50%", "F/50%"],
        _name:    "FAD",
    },

    falcon: {
        betza:    "fBbR",
        results: ["F*/25%", "E", "E"],
    },

    tori_falcon: {
        parent: "drunk_elephant",
        _name:  "Falcon",
        _index_name: "Falcon (Tori Sh&#x14d;gi)",
        results: ["F*/100%", "FC", "F/100%"],
    },

    ferocious_leopard: {
        betza:    "FvW",
        results: ["F/100%", "E", "E"],
    },

    ferz: {         // (1, 1)-leaper
        betza:    "F",
        results: ["F/50%", "E", "E"],
    },

    ferzrider: {
        parent: "bishop",
    },

    fire_horse: {
        betza:    "fRbhN",
        results: ["T/45", "E*", "E*"],
    },

    firzan: {
        parent: "ferz",
    },

    flamingo: {     // (6, 1)-leaper
        betza:    "(1,6)",
        results: ["T/26,966", "T/90", "T/260"],
    },

    flying_cock: {
        betza:    "fFsW",
        results: ["E*", "FC", "F*/100%"],
    },

    flying_ox: {
        betza:    "BvR",
        results: ["T/540", "E", "E"],
    },

    fourleaper: {   // (4, 0)-leaper
        betza:    "(0,4)",
        results: ["F/6.25%", "E", "E"],
    },

    fox: {
        parent: "archbishop",
    },

    free_boar: {
        betza:    "BsR",
        results: ["T/251", "FC", "F/100%"],
    },

    frog: {
        betza: "FH",
        results: ["?/1,066,282,804", "F*/100%", "F*/100%"],
        _index_name: "Frog (Ferz + Threeleaper)",
    },

    scirocco_frog: {
        betza:    "KGH",
        results: ["W", "FC", "F/100%"],
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

    general_xiangqi: {
        parent: "wazir",
        _name:  "General",
        _index_name: "General (Xiangqi)",
    },

    general_janggi: {
        parent: "king",
        _name: "General",
        _index_name: "General (Janggi)",
    },

    genie: {
        betza:    "W3F3",
        results: ["W", "FC", "F*/100%"],
    },

    ghost_warrior: {
        betza:    "bFfR",
        results: ["F*/25%", "E", "E"]
    },

    giraffe: {      // (4, 1)-leaper
        betza:    "(1,4)",
        results: ["T/13,102", "T/114", "T/94"],
        _index_name: "Giraffe ((4, 1) - leaper)",
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

    gnu: {
        betza:    "NC",
        results: ["?/1,067,426,464", "?/1,056,869,405", "F*/100%"],
    },

    goat: {
        betza:    "FD",
        results: ["F/50%", "F/50%", "F/50%"],
    },

    gold_general: {
        betza:  "WfF",
        results: ["W", "FC", "F/100%"],
    },

    goose: {
        betza:  "fAbD",
        results: ["E*", "E", "E"],
    },

    grey_whale: {
        parent:   "hunter",
    },

    gryphon: {
        betza:  "BfW",
        results: ["T/47", "E", "E"],
    },

    guard: {
        parent:  "wazir",
        _index_name: "Guard (Wazir)",
    },

    guard_janggi: {
        parent: "king",
        _name: "Guard",
        _index_name: "Guard (Janggi)",
    },

    //
    // H pieces
    //
    harpy: {
        parent:   "genie",
    },

    hawk: {
        betza:    "ADGH",
        results: ["F*/100%", "F*/100%", "F*/100%"],
    },

    dobutsu_hen: {
        parent: "gold_general",
        _name: "Hen",
    },

    horned_owl: {
        betza:    "F4DfW",
        results: ["?/1,056,723,023", "F/50%", "F*/100%"],
    },

    horse: {
        parent: "mao",
    },

    hummingbird: {
        betza:    "sbWfD",
        results: ["T/172", "E", "E"],
    },

    humpback: {
        betza:    "bWF",
        results: ["E*", "E", "E"],
    },

    hunter: {
        betza:    "fRbB",
        results: ["T/146", "E", "E"],
    },

    //
    // I pieces
    //
    ibis: {
        parent:   "dragon_king",
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
        results: ["W", "FC", "F/100%"],
    },

    knight: {
        betza:  "N",
        results: ["T/2,015", "T/50", "E*"],
        _index_name: "Knight (Chess)",
    },

    shogi_knight: {
        betza:  "fN",
        _name:  "Knight",
        _index_name: "Knight (Sh&#x14d;gi)",
        results: ["E", "E", "E"],
    },

    knightrider: {
        betza:    "NN",
        results: ["T/509", "T/60", "T/22"],
    },

    //
    // L pieces
    //
    lance: {
        betza:  "fR",
        results: ["E", "E", "E"],
    },

    lantern: {
        betza:    "fF",
        results: ["E", "E", "E"],
    },

    left_quail: {
        betza:  "fRbrBblF",
        results: ["T/146", "E", "E"],
    },

    dobutsu_lion: {
        parent: "king",
        _name: "Lion",
    },

    lioness: {
        betza: "WFDNA",
        results: ["W", "FC", "F/100%"],
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
        results: ["T/28", "E*", "T/12"],
        move_list: [
            {dr: -1, dc:  2, us: [[ 0,  1]], max: 1},
            {dr: -1, dc: -2, us: [[ 0, -1]], max: 1},
            {dr:  1, dc:  2, us: [[ 0,  1]], max: 1},
            {dr:  1, dc: -2, us: [[ 0, -1]], max: 1},
            {dr: -2, dc: -1, us: [[-1,  0]], max: 1},
            {dr: -2, dc: -1, us: [[-1,  0]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  0]], max: 1},
            {dr:  2, dc:  1, us: [[ 1,  0]], max: 1},
        ],
    },

    marquis: {
        betza:    "WN",
        results: ["W", "F/100%", "F/100%"],
    },

    marshal: {
        parent: "chancellor",
    },

    marshall: {
        parent: "chancellor",
    },

    minister: {
        parent: "archbishop",
    },

    missionary: {
        betza:    "F2",
        results: ["F/40.625%", "E", "E"],
    },

    modern_elephant: {
        betza:    "FA",
        results: ["F*/50%", "E", "E"],
    },

    //
    // N pieces
    //
    narwhal: {
        parent:   "hummingbird",
    },

    nb: {
        parent: "archbishop",
        _name: "NB",
    },

    //
    // O pieces
    //
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

    okapi: {
        betza:    "NZ",
        results: ["T/947,668", "?/16,637,381", "E*"],
    },

    otter: {
        betza:    "FfWsW4",
        results: ["T/321", "FC", "F/100%"],
    },

    overtaker: {
        parent:   "king",
    },

    //
    // P pieces
    //
    paladin: {
        parent: "archbishop",
    },

    parrot: {
        parent:   "war_machine",
    },

    pawn: {
        betza:    "fW",
        results: ["E", "E", "E"],
    },

    pheasant: {
        betza:  "fDbF",
        results: ["E", "E", "E"],
    },

    phoenix: {
        parent: "king",
    },

    porpoise: {
        betza:    "sW",
        results: ["E", "", ""],
    },

    priest: {
        betza:    "FN",
        results: ["T/1,050", "F*/100%", "F/100%"],
    },

    princess: {
        parent: "archbishop"
    },

    //
    // Q pieces
    //
    queen: {
        betza:  "Q",
        results: ["W", "FC", "F/100%"],
        _index_name: "Queen (Chess)",
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

    right_quail: {
        betza:  "fRblBbrF",
        results: ["F*/25%", "E", "E"],
    },

    rook: {
        betza:  "R",
        results: ["W", "T/6", "E"],
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
    // S pieces
    //
    salamander: {
        parent:   "king",
    },

    scirocco: {
        parent:  "dragon_horse",
    },

    sorcerer: {
        betza:    "W2F2",
        results: ["W", "FC", "F/100%"],
    },

    silver_general: {
        betza:  "FfW",
        results: ["F*/100%", "E", "E"],
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

    squirrel: {
        betza:    "DNA",
        results: ["?/14,106,875", "F*/100%", "?/16,744,468"],
    },

    stag: {         // (4, 2)-leaper
        betza:    "(2,4)",
        results: ["T/2,015", "E*", "E*"],
    },

    stork: {
        parent:  "alfil",
    },

    swallow: {
        parent: "pawn",
    },

    //
    // T pieces
    //
    tadpole: {
        betza: "FH",
        results: ["?/1,066,282,804", "T/8,619,774", "T/4,637,261"],
    },

    terror: {
        parent: "amazon",
    },

    threeleaper: {  // (3, 0)-leaper
        betza:    "H",
        results: ["F/11.1", "T/6", "E"],
    },

    threeleaperrider: {
        betza:    "HH",
        results: ["F/11.1&#x0305;%", "E", "E"],
    },

    tiger: {
        parent: "amazon",
    },

    tiger_prince: {
        parent:   "king",
    },

    tripper:   {    // (3, 3)-leaper
        betza:    "G",
        results: ["F/5.56%", "E", "E"],
    },

    tripperrider: {
        betza:    "GG",
        results: ["F*/3.472&#x0305;%", "E", "E"],
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
        results: ["F/25%", "E", "E"],
        move_list: [
            {dr: -1, dc:  0, min_land: 2},
            {dr:  1, dc:  0, min_land: 2},
            {dr:  0, dc: -1, min_land: 2},
            {dr:  0, dc:  1, min_land: 2},
        ],
    },

    war_machine: {
        betza:   "WD",
        results: ["W", "F/100%", "F/100%"],
        _index_name: "War Machine (Wazir + Dabbaba)",
    },

    war_machine_nr: {
        parent: "chancellor",
        _name: "War Machine",
        _index_name: "War Machine (Rook + Knight)",
    },

    wazir: {        // (1, 0)-leaper
        betza:    "W",
        results: ["W", "T/6", "E"],
    },

    wazirrider: {
        parent: "rook",
    },

    white_whale: {
        parent: "king",
    },

    wildebeest: {
        parent: "gnu",
    },

    wizard: {
        betza:    "FC",
        results: ["?/6,986,937", "F*/50%", "F/50%"],
    },

    //
    // Z pieces
    //
    zag: {
        parent: "modern_elephant",
    },

    zebra: {        // (3, 2)-leaper
        betza:    "Z",
        results: ["T/4,633", "T/80", "T/286"],
    },

    zebrarider: {
        betza:    "ZZ",
        results: ["T/266", "T/72", "T/57"],
    },

    zebu:  {
        betza:    "C(1,4)",
        results: ["?/16,421,113", "?/16,471,455", "?/11,122,547"],
    },

    zig: {
        parent: "war_machine",
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
        chess_variant: 1,
    },
    typhoon: {
        href: "https://www.chessvariants.com/rules/typhoon-revised",
        pieces: ["king", "emperor_typhoon", "queen", "rook", "bishop",
                 "knight", "wazir", "firzan", "dabbaba", "alfil",
                 "camel", "zebra", 
            
                 "abbot", "banner", "beaver", "bishops_dog", "blind_tiger",
                 "centaur", "chariot", "cicada", "copper_general", "cuckoo",
                 "dayrider", "dervish", "diving_osprey", "dragon_kite",
                 "drunk_elephant",
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
    grand_cavalier_chess: {
        href: "https://www.chessvariants.com/large.dir/grandcavalier.html",
        pieces: ["eques_rex", "queen", "marshall", "paladin", "cannon",
                 "knightrider", "cavalier"],
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
        pieces: ["dobutsu_lion", "giraffe_dobutsu", "dobutsu_elephant",
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

    xiangqi: {
        href:  "https://en.wikipedia.org/wiki/Xiangqi",
        pieces: ["general_xiangqi", "advisor", "elephant_xiangqi", "horse",
                 "chariot_xiangqi", "cannon", "soldier"],
    },

    janggi: {
        href:  "https://en.wikipedia.org/wiki/Janggi",
        pieces: ["general_janggi", "guard_janggi", "horse",
                 "elephant_janggi", "chariot_xiangqi",
                 "!!Cannon", "soldier_janggi"],
    },

    makruk: {
        href:  "https://en.wikipedia.org/wiki/Makruk",
        pieces: ["queen_makruk", "bishop_makruk", "pawn"],
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

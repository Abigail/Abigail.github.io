class Championship {
    static all_championships = {}

    constructor (args) {
        this . __event = new Event (args . gender, args . type)
        this . __year  = args . year
        this . __rink  = Rink . rink (args . rink)
        if (args . result) {
            this . __result = args . results . map (
                                     skater => Skater . skater (skater))
        }

        if (!all_championships [args . gender]) {
            all_championships [args . gender] = {}
        }
        if (!all_championships [args . gender] [args . type]) {
            all_championships [args . gender] [args . type] = {}
        }
        all_championships [args . gender] [args . type] [args . year] = this
    }

    init () {
        new Championship ({year:     1960,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "davos",
                           result: ["stenin", "kouprianoff", "kuhnert"],})
        new Championship ({year:     1961,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "gothenburg",
                           result: ["grift", "kosichkin", "liebrechts"],})
        new Championship ({year:     1962,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "moscow",
                           result: ["kosichkin", "grift", "nilsson_ivar"],})
        new Championship ({year:     1963,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "karuizawa",
                           result: ["nilsson_johnny", "johannesen", "aaness"],})
        new Championship ({year:     1964,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "helsinki",
                           result: ["johannesen", "kosichkin", "liebrechts"],})
        new Championship ({year:     1965,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "bislett",
                           result: ["moe", "launonen", "schenk"],})
        new Championship ({year:     1966,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "gothenburg",
                           result: ["verkerk", "schenk", "nilsson_johnny"],})
        new Championship ({year:     1967,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "bislett",
                           result: ["verkerk", "schenk", "maier"],})
        new Championship ({year:     1968,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "gothenburg",
                           result: ["maier", "thomassen", "schenk"],})
        new Championship ({year:     1969,
                           gender:   Event . MEN,
                           type:     Event . ALLROUND,
                           rink:    "deventer",
                           result: ["fornaess", "claeson", "verkerk"],})
    }
}


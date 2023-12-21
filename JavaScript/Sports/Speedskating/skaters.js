class Skater {
    #name
    #nationality

    static GERMAN_REUNIFICATION_DATE = "1990-10-03"

    static skaters = {}

    constructor (name, nationality) {
        this . #name        = name
        this . #nationality = nationality
    }

    name (date = 0) {
        return this . #name
    }

    nationality (date = 0) {
        if (typeof (this . #nationality) === "object") {
            // For now, assume array
            let nat = "???"
            for (let i = 0; i < this . #nationality . length; i += 2) {
                if (this . #nationality [i] < date) {
                    nat = this . #nationality [i + 1]
                }
            }
            return nat
        }
        //
        // Special case GDR & FRG
        //
        if ((this . #nationality == "GDR" || this . #nationality == "FRG") &&
             date >= Skater . GERMAN_REUNIFICATION_DATE) {
            return "GER"
        }

        return this . #nationality
    }

    static add_skater (key, name, nationality) {
        Skater . skaters [key] = new Skater (name, nationality)
    }

    static skater (key) {
        return Skater . skaters [key] || new Skater (key, "")
    }
}


Skater . add_skater ("andersen",       "Hjalmar Andersen",               "NOR")
Skater . add_skater ("antson",         "Ants Antson",                    "URS")

Skater . add_skater ("backman",        "Kjell B\u{E4}ckman",             "NOR")
Skater . add_skater ("ballangrud",     "Ivar Ballangrud",                "NOR")
Skater . add_skater ("baranov",        "Aleksandr Baranov",              "URS")
Skater . add_skater ("beulenkamp",     "Jelmer Beulenkamp",              "NED")
Skater . add_skater ("bloemen",        "Ted-Jan Bloemen",                "CAN")
Skater . add_skater ("bols",           "Jan Bols",                       "NED")
Skater . add_skater ("borjes",         "Hasse B\u{F6}rjes",              "SWE")
Skater . add_skater ("bos_jan",        "Jan Bos",                        "NED")
Skater . add_skater ("bos_thomas",     "Thomas Bos",                     "NED")
Skater . add_skater ("bouchard",       "Sylvain Bouchard",               "CAN")
Skater . add_skater ("boucher",        "Ga\u{E9}tan Boucher",            "CAN")
Skater . add_skater ("boutiette",      "KC Boutiette",                   "CAN")
Skater . add_skater ("bozhyev",        "Oleg Bozhyev",                   "URS")

Skater . add_skater ("carlsen",        "Armand Carlsen",                 "NOR")
Skater . add_skater ("chaykin",        "Valetin Chaykin",                "URS")

Skater . add_skater ("davis",          "Shani Davis",                    "USA")

Skater . add_skater ("eden",           "Jaap Eden",                      "NOR")
Skater . add_skater ("efskind",        "Lasse Efskind",                  "NOR")
Skater . add_skater ("elm",            "Steven Elm",                     "CAN")
Skater . add_skater ("engnestangen",   "Hans Engnestangen",              "NOR")
Skater . add_skater ("ericson",        "Frithiof Ericson",               "SWE")
Skater . add_skater ("eriksen",        "Ivar Eriksen",                   "NOR")
Skater . add_skater ("ervik",          "Eskil Ervik",                    "NOR")

Skater . add_skater ("fabris",         "Enrico Fabris",                  "ITA")
Skater . add_skater ("fish",           "Graeme Fish",                    "CAN")
Skater . add_skater ("fornaess",       "Dag Forn\u{E6}ss",               "NOR")
Skater . add_skater ("fredriksen",     "Oskar Fredriksen",               "NOR")

Skater . add_skater ("grishin",        "Yevgeny Grishin",                "URS")
Skater . add_skater ("grunden",        "Oscar Grund\u{E9}n",             "SWE")
Skater . add_skater ("gulyayev_boris", "Boris Gulyayev",                 "URS")
Skater . add_skater ("gulyayev_nikolay","Nikolay Gulyayev",              "URS")
Skater . add_skater ("gundersen",      "Rudolf Gundersen",               "NOR")
Skater . add_skater ("gustafson",      "Thomas Gustafson",               "SWE")
Skater . add_skater ("guttormsen",     "Per Willy Guttormsen",           "NOR")

Skater . add_skater ("halvorsen",      "Einar Halvorsen",                "NOR")
Skater . add_skater ("hedrick",        "Chad Hedrick",                   "USA")
Skater . add_skater ("heiden_eric",    "Eric Heiden",                    "USA")
Skater . add_skater ("heiden_siem",    "Siem Heiden",                    "NED")
Skater . add_skater ("helden",         "Hans van Helden",                "NED")
Skater . add_skater ("hoffmann",       "Andr\u{E9} Hoffmann",            "GDR")
Skater . add_skater ("horii",          "Manabu Horii",                   "JPN")
Skater . add_skater ("huiskes",        "Anton Huiskes",                  "NED")

Skater . add_skater ("ireland",        "Mike Ireland",                   "CAN")

Skater . add_skater ("jansen",         "Dan Jansen",                     "USA")
Skater . add_skater ("jarvinen",       "Juhani J\u{E4}rvinen",           "FIN")
Skater . add_skater ("johannesen",     "Knut Johannesen",                "NOR")
Skater . add_skater ("jong",           "Bob de Jong",                    "NED")

Skater . add_skater ("kang-seok",      "Lee Kang-Seok",                  "KOR")
Skater . add_skater ("karlstad",       "Geir Karlstad",                  "NOR")
Skater . add_skater ("kato",           "Joji Kato",                      "JPN")
Skater . add_skater ("keller",         "Erhard Keller",                  "FRG")
Skater . add_skater ("kleine",         "Piet Kleine",                    "NED")
Skater . add_skater ("kondakov",       "Yury Kondakov",                  "URS")
Skater . add_skater ("koskela",        "Pekka Koskela",                  "FIN")
Skater . add_skater ("koss",           "Johann Olav Koss",               "NOR")
Skater . add_skater ("kramer",         "Sven Kramer",                    "NED")
Skater . add_skater ("kulikov",        "Yevgeny Kulikov",                "URS")
Skater . add_skater ("kulizhnikov",    "Pavel Kulizhnikov",              "RUS")
Skater . add_skater ("kyou-hyuk",      "Lee Kyou-Hyuk",                  "KOR")

Skater . add_skater ("larsen",         "Roald Larsen",                   "NOR")
Skater . add_skater ("leeuwangh",      "Jakko Jan Leeuwangh",            "NED")
Skater . add_skater ("liebrechts",     "Rudie Liebrechts",               "NED")
Skater . add_skater ("linkovesi",      "Leo Linkovesi",                  "FIN")
Skater . add_skater ("lyoshkin",       "Viktor Lyoshkin",                "URS")

Skater . add_skater ("maier",          "Fred Anton Maier",               "NOR")
Skater . add_skater ("malkov",         "Igor Malkov",                    "URS")
Skater . add_skater ("mamonov",        "Nikolay Mamonov",                "URS")
Skater . add_skater ("mathiesen",      "Charles Mathiesen",              "NOR")
Skater . add_skater ("mathisen",       "Oscar Mahisen",                  "NOR")
Skater . add_skater ("marshall",       "Neal Marshall",                  "CAN")
Skater . add_skater ("mauseth",        "Wilhelm Mauseth",                "NOR")
Skater . add_skater ("mey",            "Uwe-Jens Mey",                   "GDR")
Skater . add_skater ("miyabe",         "Yasunori Miyabe",                "JPN")
Skater . add_skater ("morrison",       "Denny Morrison",                 "CAN")
Skater . add_skater ("mikhaylov",      "Yury Mikhaylov",                 "URS")
Skater . add_skater ("muratov",        "Valery Muratov",                 "URS")

Skater . add_skater ("naess",          "Alfred N\u{E6}ss",               "NOR")
Skater . add_skater ("nielsen",        "Halfan Nielsen",                 "NOR")
Skater . add_skater ("nilsson",        "Johnny Nilsson",                 "NOR")
Skater . add_skater ("noake",          "Hiroyuki Noake",                 "JPN")
Skater . add_skater ("nuis",           "Kjeld Nuis",                     "NED")

Skater . add_skater ("ogloblin",       "Dmitry Ogloblin",                "URS")
Skater . add_skater ("ostlund",        "Peter \u{D8}stlund",             "NOR")
Skater . add_skater ("overland",       "Kevin Overland",                 "CAN")

Skater . add_skater ("pajor",          "Korn\u{E9}i Pajor",              "HUN")
Skater . add_skater ("parra",          "Derek Parra",                    "USA")
Skater . add_skater ("pegov",          "Pagel Pegov",                    "URS")
Skater . add_skater ("poel",           "Niels van der Poel",             "SWE")
Skater . add_skater ("postma",         "Ids Postma",                     "NED")
Skater . add_skater ("potts",          "Allan Potts",                    "USA")

Skater . add_skater ("ritsma",         "Rintje Ritsma",                  "NED")
Skater . add_skater ("romme",          "Gianni Romme",                   "NED")

Skater . add_skater ("safronov",       "Aleksandr Safronov",             "URS")
Skater . add_skater ("schenk",         "Ard Schenk",                     "NED")
Skater . add_skater ("scott",          "Kevin Scott",                    "CAN")
Skater . add_skater ("sergeyev",       "Yury Sergeyev",                  "URS")
Skater . add_skater ("seyffarth",      "\u{C5}ke Seyffarth",             "SWE")
Skater . add_skater ("shasherin",      "Viktor Shasherin",               "URS")
Skater . add_skater ("shilkov",        "Boris Shilkov",                  "URS")
Skater . add_skater ("shimizu",        "Hiroyasu Shimizu",               "JPN")
Skater . add_skater ("sondral",        "\u{C5}dne S\u{F8}ndr\u{E5}l",    "NOR")
Skater . add_skater ("staksrud",       "Michael Staksrud",               "NOR")
Skater . add_skater ("stensen",        "Sten Stensen",                   "NOR")
Skater . add_skater ("stenshjemmet",   "Kay Arne Stenshjemmet",          "NOR")
Skater . add_skater ("stiepl",         "Max Stiepl",                     "AUT")
Skater . add_skater ("storholt",       "Jan Egil Storholt",              "NOR")
Skater . add_skater ("strom_harald",   "Harald Str\u{F8}m",              "NOR")
Skater . add_skater ("strom_kristian", "Kristian Str\u{F8}m",            "NOR")
Skater . add_skater ("strunnikov",     "Nikolay Strunnikov",             "RUS")
Skater . add_skater ("suzuki",         "Keiichi Suzuki",                 "JPN")

Skater . add_skater ("thomassen",      "Magne Thomassen",                "NOR")
Skater . add_skater ("thometz",        "Nick Thometz",                   "USA")
Skater . add_skater ("thunberg",       "Clas Thunberg",                  "FIN")

Skater . add_skater ("uytdehaage",     "Jochem Uytdehaage",              "NED")

Skater . add_skater ("varlamov",       "Viktor Varlamov",                "URS")
Skater . add_skater ("velde",          "Gerard van Velde",               "NED")
Skater . add_skater ("veldkamp",       "Bart Veldkamp",                  "BEL")
Skater . add_skater ("verheijen",      "Carl Verheijen",                 "NED")
Skater . add_skater ("verkerk",        "Kees Verkerk",                   "NED")
Skater . add_skater ("vikander",       "Johan Vikander",                 "FIN")
Skater . add_skater ("visser",         "Leo Visser",                     "NED")

Skater . add_skater ("wennemars",      "Erben Wennemars",                "NED")
Skater . add_skater ("wotherspoon",    "Jeremy Wotherspoon",             "CAN")

Skater . add_skater ("yuskov",         "Denis Yuskov",                   "RUS")

Skater . add_skater ("zhelezovsky",    "Igor Zhelezovsky",               "URS")

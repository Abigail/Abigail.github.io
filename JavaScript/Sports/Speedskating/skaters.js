class Skater {
    #name
    #nationality

    static skaters = {}

    constructor (name, nationality) {
        this . #name        = name
        this . #nationality = nationality
    }

    name (date = 0) {
        return this . #name
    }

    nationality (date = 0) {
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
Skater . add_skater ("baranov",        "Aleksandr Baranov",              "USR")
Skater . add_skater ("beulenkamp",     "Jelmer Beulenkamp",              "NED")
Skater . add_skater ("bloemen",        "Ted-Jan Bloemen",                "CAN")
Skater . add_skater ("bols",           "Jan Bols",                       "NED")
Skater . add_skater ("bos",            "Thomas Bos",                     "NED")
Skater . add_skater ("carlsen",        "Armand Carlsen",                 "NOR")
Skater . add_skater ("eden",           "Jaap Eden",                      "NOR")
Skater . add_skater ("elm",            "Steven Elm",                     "CAN")
Skater . add_skater ("ericson",        "Frithiof Ericson",               "SWE")
Skater . add_skater ("eriksen",        "Ivar Eriksen",                   "NOR")
Skater . add_skater ("ervik",          "Eskil Ervik",                    "NOR")
Skater . add_skater ("fabris",         "Enrico Fabris",                  "ITA")
Skater . add_skater ("fish",           "Graeme Fish",                    "CAN")
Skater . add_skater ("fornaess",       "Dag Forn\u{E6}ss",               "NOR")
Skater . add_skater ("fredriksen",     "Oskar Fredriksen",               "NOR")
Skater . add_skater ("gustafson",      "Thomas Gustafson",               "SWE")
Skater . add_skater ("guttormsen",     "Per Willy Guttormsen",           "NOR")
Skater . add_skater ("halvorsen",      "Einar Halvorsen",                "NOR")
Skater . add_skater ("hedrick",        "Chad Hedrick",                   "USA")
Skater . add_skater ("heiden_eric",    "Eric Heiden",                    "USA")
Skater . add_skater ("heiden_siem",    "Siem Heiden",                    "NED")
Skater . add_skater ("helden",         "Hans van Helden",                "NED")
Skater . add_skater ("hoffmann",       "Andr\u{E9} Hoffmann",            "GDR")
Skater . add_skater ("huiskes",        "Anton Huiskes",                  "NED")
Skater . add_skater ("johannesen",     "Knut Johannesen",                "NOR")
Skater . add_skater ("jong",           "Bob de Jong",                    "NED")
Skater . add_skater ("karlstad",       "Geir Karlstad",                  "NOR")
Skater . add_skater ("kleine",         "Piet Kleine",                    "NED")
Skater . add_skater ("kondakov",       "Yury Kondakov",                  "URS")
Skater . add_skater ("koss",           "Johann Olav Koss",               "NOR")
Skater . add_skater ("kramer",         "Sven Kramer",                    "NED")
Skater . add_skater ("liebrechts",     "Rudie Liebrechts",               "NED")
Skater . add_skater ("lyoshkin",       "Viktor Lyoshkin",                "USR")
Skater . add_skater ("maier",          "Fred Anton Maier",               "NOR")
Skater . add_skater ("malkov",         "Igor Malkov",                    "USR")
Skater . add_skater ("mamonov",        "Nikolay Mamonov",                "USR")
Skater . add_skater ("mathiesen",      "Charles Mathiesen",              "NOR")
Skater . add_skater ("mathisen",       "Oscar Mahisen",                  "NOR")
Skater . add_skater ("nielsen",        "Halfan Nielsen",                 "NOR")
Skater . add_skater ("nilsson",        "Johnny Nilsson",                 "NOR")
Skater . add_skater ("ogloblin",       "Dmitry Ogloblin",                "USR")
Skater . add_skater ("ostlund",        "Peter \u{D8}stlund",             "NOR")
Skater . add_skater ("pajor",          "Korn\u{E9}i Pajor",              "HUN")
Skater . add_skater ("poel",           "Niels van der Poel",             "SWE")
Skater . add_skater ("romme",          "Gianni Romme",                   "NED")
Skater . add_skater ("schenk",         "Ard Schenk",                     "NED")
Skater . add_skater ("seyffarth",      "\u{C5}ke Seyffarth",             "SWE")
Skater . add_skater ("shasherin",      "Viktor Shasherin",               "URS")
Skater . add_skater ("shilkov",        "Boris Shilkov",                  "USR")
Skater . add_skater ("staksrud",       "Michael Staksrud",               "NOR")
Skater . add_skater ("stensen",        "Sten Stensen",                   "NOR")
Skater . add_skater ("stenshjemmet",   "Kay Arne Stenshjemmet",          "NOR")
Skater . add_skater ("stiepl",         "Max Stiepl",                     "AUT")
Skater . add_skater ("strom_harald",   "Harald Str\u{F8}m",              "NOR")
Skater . add_skater ("strom_kristian", "Kristian Str\u{F8}m",            "NOR")
Skater . add_skater ("strunnikov",     "Nikolay Strunnikov",             "RUS")
Skater . add_skater ("thunberg",       "Clas Thunberg",                  "FIN")
Skater . add_skater ("uytdehaage",     "Jochem Uytdehaage",              "NED")
Skater . add_skater ("varlamov",       "Viktor Varlamov",                "USR")
Skater . add_skater ("veldkamp",       "Bart Veldkamp",                  "BEL")
Skater . add_skater ("verheijen",      "Carl Verheijen",                 "NED")
Skater . add_skater ("verkerk",        "Kees Verkerk",                   "NED")
Skater . add_skater ("visser",         "Leo Visser",                     "NED")

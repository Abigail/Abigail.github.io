let skaters = {}

function add_skater (key, name, nation) {
    skaters [key]          = {}
    skaters [key] . name   = name;
    skaters [key] . nation = nation;
}

add_skater ("andersen",    "Hjalmar Andersen",     "NOR")
add_skater ("backman",     "Kjell B\u{E4}ckman",   "NOR")
add_skater ("ballangrud",  "Ivar Ballangrud",      "NOR")
add_skater ("bloemen",     "Ted-Jan Bloemen",      "CAN")
add_skater ("carlsen",     "Armand Carlsen",       "NOR")
add_skater ("eden",        "Jaap Eden",            "NOR")
add_skater ("ericson",     "Frithiof Ericson",     "SWE")
add_skater ("fish",        "Graeme Fish",          "CAN")
add_skater ("gustafson",   "Thomas Gustafson",     "SWE")
add_skater ("guttormsen",  "Per Willy Guttormsen", "NOR")
add_skater ("hedrick",     "Chad Hedrick",         "USA")
add_skater ("heiden",      "Eric Heiden",          "USA")
add_skater ("johannesen",  "Knut Johannesen",      "NOR")
add_skater ("karlstad",    "Geir Karlstad",        "NOR")
add_skater ("kleine",      "Piet Kleine",          "NED")
add_skater ("koss",        "Johann Olav Koss",     "NOR")
add_skater ("kramer",      "Sven Kramer",          "NED")
add_skater ("lyoshkin",    "Viktor Lyoshkin",      "USR")
add_skater ("maier",       "Fred Anton Maier",     "NOR")
add_skater ("malkov",      "Igor Malkov",          "USR")
add_skater ("mathiesen",   "Charles Mathiesen",    "NOR")
add_skater ("mathisen",    "Oscar Mahisen",        "NOR")
add_skater ("nielsen",     "Halfan Nielsen",       "NOR")
add_skater ("nilsson",     "Johnny Nilsson",       "NOR")
add_skater ("ogloblin",    "Dmitry Ogloblin",      "USR")
add_skater ("ostlund",     "Peter \u{D8}stlund",   "NOR")
add_skater ("poel",        "Niels van der Poel",   "SWE")
add_skater ("romme",       "Gianni Romme",         "NED")
add_skater ("schenk",      "Ard Schenk",           "NED")
add_skater ("stensen",     "Sten Stensen",         "NOR")
add_skater ("uytdehaage",  "Jochem Uytdehaage",    "NED")
add_skater ("varlamov",    "Viktor Varlamov",      "USR")
add_skater ("verheijen",   "Carl Verheijen",       "NED")
add_skater ("verkerk",     "Kees Verkerk",         "NED")

window . skaters = skaters

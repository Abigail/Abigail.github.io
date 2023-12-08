let skaters = {}

function add_skater (key, name, nation) {
    console . log ("add_skater (" + key + ", " + name + ", " + nation + ")")
    skaters [key]          = {}
    skaters [key] . name   = name;
    skaters [key] . nation = nation;
}

add_skater ("anderson",    "Hjalmar Andersen",     "Norway")
add_skater ("backman",     "Kjell B\u{E4}ckman",   "Norway")
add_skater ("ballangrud",  "Ivar Ballangrud",      "Norway")
add_skater ("bloemen",     "Ted-Jan Bloemen",      "Canada")
add_skater ("carlsen",     "Armand Carlsen",       "Norway")
add_skater ("eden",        "Jaap Eden",            "Norway")
add_skater ("ericson",     "Frithiof Ericson",     "Sweden")
add_skater ("fish",        "Graeme Fish",          "Canada")
add_skater ("gustafson",   "Thomas Gustafson",     "Sweden")
add_skater ("guttormsen",  "Per Willy Guttormsen", "Norway"
add_skater ("hedrick",     "Chad Hedrick",         "USA")
add_skater ("heiden",      "Eric Heiden",          "USA")
add_skater ("johannesen",  "Knut Johannesen",      "Norway")
add_skater ("karlstad",    "Geir Karlstad",        "Norway")
add_skater ("kleine",      "Piet Kleine",          "The Netherlands")
add_skater ("koss",        "Johann Olav Koss",     "Norway")
add_skater ("kramer",      "Sven Kramer",          "The Netherlands")
add_skater ("lyoshkin",    "Viktor Lyoshkin",      "Soviet Union")
add_skater ("maier",       "Fred Anton Maier",     "Norway")
add_skater ("malkov",      "Igor Malkov",          "Soviet Union")
add_skater ("mathiesen",   "Charles Mathiesen",    "Norway")
add_skater ("mathisen",    "Oscar Mahisen",        "Norway")
add_skater ("nielsen",     "Halfan Nielsen",       "Norway")
add_skater ("nilsson",     "Johnny Nilsson",       "Norway")
add_skater ("ogloblin",    "Dmitry Ogloblin",      "Soviet Union")
add_skater ("ostlund",     "Peter \u{D8}stlund",   "Norway")
add_skater ("poel",        "Niels van der Poel",   "Sweden")
add_skater ("romme",       "Gianni Romme",         "The Netherlands")
add_skater ("schenk",      "Ard Schenk",           "The Netherlands")
add_skater ("stensen",     "Sten Stensen",         "Norway")
add_skater ("uytdehaage",  "Jochem Uytdehaage",    "The Netherlands")
add_skater ("varlamov",    "Viktor Varlamov",      "Soviet Union")
add_skater ("verheijen",   "Carl Verheijen",       "The Netherlands")
add_skater ("verkerk",     "Kees Verkerk",         "The Netherlands")

window . skaters = skaters

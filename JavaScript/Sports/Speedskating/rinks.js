let rinks = {}

let NATURAL       = 1    //  Outdoor - Natural
let ARTIFICIAL    = 2    //  Outdoor - Artificial
let INDOOR        = 3    //  Indoor  - Artificial

let HIGH_COLOUR   = '#832A0D'  // Smokey topaz
let MIDDLE_COLOUR = '#DAA06D'  // Buff
let LOW_COLOUR    = '#EDC9AF'  // Desert sand
// let LOW_COLOUR    = '#F5DEB3'  // Wheat

function add_rink (key, name, city, country, type, height) {
    rinks [key] = {
        name:     name,
        city:     city,
        country:  country,
        type:     type,
        height:   height,
    }
}

add_rink ("museumplein",     "Museumplein",
          "Amsterdam",       "NED",      NATURAL,       0)

add_rink ("neglingeviken",   "Saltsj\u{F6}banen",
          "Neglingeviken",   "NOR",      NATURAL,       8)

add_rink ("hamar mjosen",    "Mj\u{F8}sen",
          "Hamar",           "NOR",      NATURAL,     123)

add_rink ("davos",           "Eisstadion",
          "Davos",           "SUI",      NATURAL,    1560)

add_rink ("kristiana",       "Gamie Frogner Stadion",
          "Oslo",            "NOR",      NATURAL,      42)

add_rink ("trondheim",       "\u{D8}ya Stadion",
          "Trondheim",       "NOR",      NATURAL,       5)

add_rink ("hamar stadion",   "Hamar Stadion",
          "Hamar",           "NOR",      NATURAL,     113)

add_rink ("gjovik",          "Gj\u{F8}vik Stadion",
          "Gj\u{F8}vik",     "NOR",      NATURAL,     149)

add_rink ("squaw valley",    "Olympic Skating Ring",
          "Squaw Valley",    "USA",      ARTIFICIAL, 1876)

add_rink ("karuizawa",       "Skating Center",
          "Karuizawa",       "JPN",      ARTIFICIAL,  980)

add_rink ("bislett",         "Bislett Stadium",
          "Oslo",            "NOR",      NATURAL,      37)

add_rink ("inzell",          "Ludwig Schwabl Stadion",
          "Inzell",          "GER",      ARTIFICIAL,  690)

add_rink ("horten",          "Lystlunden Gressbane",
          "Horten",          "NOR",      NATURAL,       2)

add_rink ("goteborg",        "Nya Ullevi",
          "G\u{F6}teborg",   "SWE",      ARTIFICIAL,   10)

add_rink ("medeo",           "Kompleks Medeo",
          "Medeo",           "KAZ",      ARTIFICIAL, 1691)

add_rink ("lake placid",     "James B. Sheffield Olympic Skating Rink",
          "Lake Placid",     "USA",      ARTIFICIAL,  568)

add_rink ("thialf",          "Thialf",
          "Heerenveen",      "NED",      INDOOR,        0)

add_rink ("calgary",         "Olympic Oval",
          "Calgary",         "CAN",      INDOOR,     1034)

add_rink ("hamar",           "Olympia Hall",
          "Hamar",           "NOR",      INDOOR,      125)

add_rink ("nagano",          "M-Wave",
          "Nagano",          "JPN",      INDOOR,      342)

add_rink ("salt lake city",  "Utah Olympic Oval",
          "Salt Lake City",  "USA",      INDOOR,     1423)

add_rink ("beijing",         "National Speed Skating Oval",
          "Beijing",         "CHN",      INDOOR,        0)



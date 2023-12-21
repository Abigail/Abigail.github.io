class Rink {
    #name
    #city
    #country
    #type
    #elevation

    static NO_RINK_COLOUR = 'red'
    static HIGH_COLOUR    = '#832A0D'  // Smokey topaz
    static MIDDLE_COLOUR  = '#DAA06D'  // Buff
    static LOW_COLOUR     = '#EDC9AF'  // Desert sand

    static NATURAL        = 1    //  Outdoor - Natural
    static ARTIFICIAL     = 2    //  Outdoor - Artificial
    static INDOOR         = 3    //  Indoor  - Artificial

    static rinks = {}

    constructor (name, city, country, type, elevation) {
        this . #name       = name
        this . #city       = city
        this . #country    = country
        this . #type       = type
        this . #elevation  = elevation
    }

    //
    // Simple getters
    //
    name      () {return this . #name}
    city      () {return this . #city}
    country   () {return this . #country}
    elevation () {return this . #elevation}

    //
    // Types
    //
    is_natural    () {return this . #type      == Rink . NATURAL}
    is_artificial () {return this . #type      == Rink . ARTIFICIAL}
    is_indoor     () {return this . #type      == Rink . INDOOR}
    is_sea_level  () {return this . #elevation <= 200}
    is_high_land  () {return this . #elevation >= 500}

    //
    // Derived values
    //
    point_colour () {
        return this . city          () == ""  ? Rink . NO_RINK_COLOUR
             : this . is_sea_level  ()        ? Rink . LOW_COLOUR
             : this . is_high_land  ()        ? Rink . HIGH_COLOUR
             :                                  Rink . MIDDLE_COLOUR
    }

    point_style () {
        return this . city          () == ""  ? 'star'
             : this . is_natural    ()        ? 'rect' 
             : this . is_artificial ()        ? 'triangle'
             : this . is_indoor     ()        ? 'circle'
             :                                  'star'
    }

    //
    // Given a key, return the corresponding object.
    // If no rink with the given key exists, return 
    // an object with the name set to the key, and
    // anything else to "" or 0.
    //
    static rink (rink_key) {
        return Rink . rinks [rink_key] || new Rink (rink_key, "", "", 0, 0)
    }

    static add_rink (rink_key, name, city, country, type, elevation) {
        Rink . rinks [rink_key] =
                  new Rink (name, city, country, type, elevation)
    }
}


Rink . add_rink ("beijing",         "National Speed Skating Oval",
                 "Beijing",         "CHN",      Rink . INDOOR,       49)

Rink . add_rink ("berlin",          "Sportforum Hohensch\u{F6}nhausen",
                 "Berlin",          "GER",      Rink . INDOOR,       34)

Rink . add_rink ("bislett",         "Bislett Stadium",
                 "Oslo",            "NOR",      Rink . NATURAL,      37)

Rink . add_rink ("calgary",         "Olympic Oval",
                 "Calgary",         "CAN",      Rink . INDOOR,     1034)

Rink . add_rink ("cortina",         "Pista Fiames",
                 "Cortina d'Ampezzo", "ITA",    Rink . NATURAL,    1401)

Rink . add_rink ("davos",           "Eisstadion",
                 "Davos",           "SUI",      Rink . NATURAL,    1560)

Rink . add_rink ("deventer",        "IJsselstadion",
                 "Deventer",        "NED",      Rink . ARTIFICIAL,    5)

Rink . add_rink ("frogner",         "Frogner Stadion",
                 "Oslo",            "NOR",      Rink . NATURAL,      42)

Rink . add_rink ("gamle",           "Gamle Frogner Stadion",
                 "Oslo",            "NOR",      Rink . NATURAL,      42)

Rink . add_rink ("gjovik",          "Gj\u{F8}vik Stadion",
                 "Gj\u{F8}vik",     "NOR",      Rink . NATURAL,     149)

Rink . add_rink ("grenoble",        "Parc Paul Mistral",
                 "Grenoble",        "FRA",      Rink . ARTIFICIAL,  220)

Rink . add_rink ("goteborg",        "Nya Ullevi",
                 "G\u{F6}teborg",   "SWE",      Rink . ARTIFICIAL,   10)

Rink . add_rink ("hamar",           "Olympia Hall",
                 "Hamar",           "NOR",      Rink . INDOOR,      125)

Rink . add_rink ("hamar mjosen",    "Mj\u{F8}sen",
                 "Hamar",           "NOR",      Rink . NATURAL,     123)

Rink . add_rink ("hamar stadion",   "Hamar Stadion",
                 "Hamar",           "NOR",      Rink . NATURAL,     113)

Rink . add_rink ("horten",          "Lystlunden Gressbane",
                 "Horten",          "NOR",      Rink . NATURAL,       2)

Rink . add_rink ("inzell",          "Ludwig Schwabl Stadion",
                 "Inzell",          "GER",      Rink . ARTIFICIAL,  690)

Rink . add_rink ("karuizawa",       "Skating Center",
                 "Karuizawa",       "JPN",      Rink . ARTIFICIAL,  980)

Rink . add_rink ("lake placid",     "James B. Sheffield Olympic Skating Rink",
                 "Lake Placid",     "USA",      Rink . ARTIFICIAL,  568)

Rink . add_rink ("medeo",           "Kompleks Medeo",
                 "Medeo",           "KAZ",      Rink . ARTIFICIAL, 1691)

Rink . add_rink ("misurina",        "Lagua Misurina",
                 "Misurina",        "ITA",      Rink . NATURAL,    1756)

Rink . add_rink ("museumplein",     "Museumplein",
                 "Amsterdam",       "NED",      Rink . NATURAL,       0)

Rink . add_rink ("nagano",          "M-Wave",
                 "Nagano",          "JPN",      Rink . INDOOR,      342)

Rink . add_rink ("neglingeviken",   "Saltsj\u{F6}banen",
                 "Neglingeviken",   "NOR",      Rink . NATURAL,       8)

Rink . add_rink ("notodden",        "Notodden Sportsplass",
                 "Notodden",        "NOR",      Rink . NATURAL,     103)

Rink . add_rink ("paterswolde",     "Paterswoldsche Meer",
                 "Paterswolde",     "NED",      Rink . NATURAL,       0)
                 
Rink . add_rink ("salt lake city",  "Utah Olympic Oval",
                 "Salt Lake City",  "USA",      Rink . INDOOR,     1423)

Rink . add_rink ("savalen",         "Idrettsplass",
                 "Savalen",         "NOR",      Rink . NATURAL,     724)

Rink . add_rink ("squaw valley",    "Olympic Skating Ring",
                 "Squaw Valley",    "USA",      Rink . ARTIFICIAL, 1876)

Rink . add_rink ("st. moritz",      "Badrutss Park",
                 "St. Moritz",      "SUI",      Rink . NATURAL,    1856)

Rink . add_rink ("thialf",          "Thialf",
                 "Heerenveen",      "NED",      Rink . INDOOR,        0)

Rink . add_rink ("tolga",           "Tolga Idrettsplass",
                 "Tolga",           "NOR",      Rink . NATURAL,     543)

Rink . add_rink ("tonsberg",        "T\u{F8}nsberg Stadion",
                 "T\u{F8}nsberg",   "NOR",      Rink . NATURAL,      66)

Rink . add_rink ("trondheim_kal",   "Kalvskindet",
                 "Trondheim",       "NOR",      Rink . NATURAL,       0)

Rink . add_rink ("trondheim_oya",   "\u{D8}ya Stadion",
                 "Trondheim",       "NOR",      Rink . NATURAL,       5)



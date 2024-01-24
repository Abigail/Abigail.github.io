class Rink {
    // #name
    // #city
    // #country
    // #type
    // #elevation

    static NO_RINK_COLOUR = 'red'
    static HIGH_COLOUR    = '#832A0D'  // Smokey topaz
    static MIDDLE_COLOUR  = '#DAA06D'  // Buff
    static LOW_COLOUR     = '#EDC9AF'  // Desert sand

    static NATURAL        = 1    //  Outdoor - Natural
    static ARTIFICIAL     = 2    //  Outdoor - Artificial
    static INDOOR         = 3    //  Indoor  - Artificial

    static rinks = {}

    constructor (key, name, city, country, type, elevation) {
        this . __key        = key
        this . __name       = name
        this . __city       = city
        this . __country    = country
        this . __type       = type
        this . __elevation  = elevation
    }

    //
    // Simple getters
    //
    key       ()     {return                this . __key}
    name      ()     {return                this . __name}
    city      ()     {return                this . __city}
    country   (date) {return value_by_date (this . __country, date)}
    elevation ()     {return                this . __elevation}
    type      (date) {return value_by_date (this . __type, date)}

    is_natural       (date) {return this . type (date) == Rink . NATURAL}
    is_artificial    (date) {return this . type (date) == Rink . ARTIFICIAL}
    is_indoor        (date) {return this . type (date) == Rink . INDOOR}
    is_lowland       ()     {return this . __elevation <   300}
    is_high_altitude ()     {return this . __elevation >  1000}

    //
    // Derived values
    //
    point_colour () {
        return this . city             () == ""  ? Rink . NO_RINK_COLOUR
             : this . is_lowland       ()        ? Rink . LOW_COLOUR
             : this . is_high_altitude ()        ? Rink . HIGH_COLOUR
             :                                     Rink . MIDDLE_COLOUR
    }

    point_style (date) {
        return this . city          () == ""  ? 'star'
             : this . is_natural    (date)    ? 'rect' 
             : this . is_artificial (date)    ? 'triangle'
             : this . is_indoor     (date)    ? 'circle'
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

    static add_rink (key, name, city, country, type, elevation) {
        Rink . rinks [key] =
                  new Rink (key, name, city, country, type, elevation)
    }

    static init () {
        Rink . add_rink ("alkmaar",         "IJsstadion De Meent",
                         "Alkmaar",         "NED",      Rink . ARTIFICIAL,    0)

        Rink . add_rink ("beijing",         "National Speed Skating Oval",
                         "Beijing",         "CHN",      Rink . INDOOR,       49)

        Rink . add_rink ("berlin",          "Sportforum Hohensch\u{F6}nhausen",
                         "Berlin",          "GER",      Rink . INDOOR,       34)

        Rink . add_rink ("bislett",         "Bislett Stadium",
                         "Oslo",            "NOR",      Rink . NATURAL,      37)

        Rink . add_rink ("brandbu",         "Rosendalbanen",
                         "Brandbu",         "NOR",      Rink . NATURAL,     178)

        Rink . add_rink ("calgary",         "Olympic Oval",
                         "Calgary",         "CAN",      Rink . INDOOR,     1034)

        Rink . add_rink ("cortina",         "Pista Fiames",
                         "Cortina d'Ampezzo", "ITA",    Rink . NATURAL,    1401)

        Rink . add_rink ("davos",           "Eisstadion",
                         "Davos",           "SUI",      Rink . NATURAL,    1560)

        Rink . add_rink ("deventer",        "IJsselstadion",
                         "Deventer",        "NED",      Rink . ARTIFICIAL,    5)

        Rink . add_rink ("eskilstuna",      "Isstadion",
                         "Eskilstuna",      "SWE",      Rink . ARTIFICIAL,   16)

        Rink . add_rink ("engelberg",       "Eisbahn",
                         "Engelberg",       "SUI",      Rink . NATURAL,    1138)

        Rink . add_rink ("frogner",         "Frogner Stadion",
                         "Oslo",            "NOR",      Rink . NATURAL,      42)

        Rink . add_rink ("gamle",           "Gamle Frogner Stadion",
                         "Oslo",            "NOR",      Rink . NATURAL,      42)

        Rink . add_rink ("geithus",         "Farumo Stadion",
                         "Geithus",         "NOR",      Rink . ARTIFICIAL,  116)

        Rink . add_rink ("gjovik",          "Gj\u{F8}vik Stadion",
                         "Gj\u{F8}vik",     "NOR",      Rink . NATURAL,     149)

        Rink . add_rink ("grenoble",        "Parc Paul Mistral",
                         "Grenoble",        "FRA",      Rink . ARTIFICIAL,  220)

        Rink . add_rink ("groningen",       "IJsstadion Stadspark",
                         "Groningen",       "NED",      Rink . ARTIFICIAL,    1)

        Rink . add_rink ("goteborg",        "Nya Ullevi",
                         "G\u{F6}teborg",   "SWE",      Rink . ARTIFICIAL,   10)

        Rink . add_rink ("haarlem",         "Kennemerland",
                         "Haarlem",         "NED",      Rink . ARTIFICIAL,    0)

        Rink . add_rink ("hamar",           "Olympia Hall",
                         "Hamar",           "NOR",      Rink . INDOOR,      125)

        Rink . add_rink ("hamar mjosen",    "Mj\u{F8}sen",
                         "Hamar",           "NOR",      Rink . NATURAL,     123)

        Rink . add_rink ("hamar stadion",   "Hamar Stadion",
                         "Hamar",           "NOR",      Rink . NATURAL,     113)

        Rink . add_rink ("helsinki",        "T\u{F6}\u{F6}l\u{F6}n " +
                                            "Pallokentt\u{E4}",
                         "Helsinki",        "FIN",      Rink . NATURAL,      10)

        Rink . add_rink ("horten",          "Lystlunden Gressbane",
                         "Horten",          "NOR",      Rink . NATURAL,       2)

        Rink . add_rink ("inzell",          "Ludwig Schwabl Stadion",
                         "Inzell",          "FRG",      Rink . ARTIFICIAL,  690)

        Rink . add_rink ("jaap eden",       "Jaap Edenbaan",
                         "Amsterdam",       "NED",      Rink . ARTIFICIAL,    0)

        Rink . add_rink ("karuizawa",       "Skating Center",
                         "Karuizawa",       "JPN",      Rink . ARTIFICIAL,  980)

        Rink . add_rink ("kvarnsveden",     "Idrottsplatsen",
                         "Kvarnsveden",     "SWE",      Rink . NATURAL,     165)

        Rink . add_rink ("kirov",           "Dinamo",
                         "Kirov",           "URS",      Rink . NATURAL,     166)

        Rink . add_rink ("kongsberg",       "Idr\u{E6}tsplassen",
                         "Kongsberg",       "NOR",      Rink . NATURAL,     233)

        // Chemnitz after 1990
        Rink . add_rink ("kuchwald",        "K\u{F6}chwald",
                         "Karl-Marx-Stadt", "GDR",      Rink . ARTIFICIAL,  410)

        Rink . add_rink ("lake placid",     "James B. Sheffield " +
                                            "Olympic Skating Rink",
                         "Lake Placid",     "USA",      Rink . ARTIFICIAL,  568)

        Rink . add_rink ("madonna",         "Pista Olimpica",
                         "Madonna di Campiglio", "ITA", Rink . NATURAL,    1450)

        Rink . add_rink ("medeo",           "Kompleks Medeo",
                         "Medeo",          ["1951-02-05", "URS",
                                            "1991-12-26", "KAZ",],
                                           ["1951-02-05", Rink . NATURAL,
                                            "1972-08-00", Rink . ARTIFICIAL],
                                                                           1691)

        Rink . add_rink ("misurina",        "Lagua Misurina",
                         "Misurina",        "ITA",      Rink . NATURAL,    1756)

        Rink . add_rink ("moscow",          "Dinamo",
                         "Moscow",          "URS",      Rink . NATURAL,     167)

        Rink . add_rink ("museumplein",     "Museumplein",
                         "Amsterdam",       "NED",      Rink . NATURAL,       0)

        Rink . add_rink ("nagano",          "M-Wave",
                         "Nagano",          "JPN",      Rink . INDOOR,      342)

        Rink . add_rink ("neglingeviken",   "Saltsj\u{F6}banen",
                         "Neglingeviken",   "NOR",      Rink . NATURAL,       8)

        Rink . add_rink ("notodden",        "Notodden Sportsplass",
                         "Notodden",        "NOR",      Rink . NATURAL,     103)

        Rink . add_rink ("obihiro",         "Meiji Hokkaido-Tokachi Oval",
                         "Obihiro",         "JPN",      Rink . INDOOR,       79)

        Rink . add_rink ("paterswolde",     "Paterswoldsche Meer",
                         "Paterswolde",     "NED",      Rink . NATURAL,       0)
                         
        Rink . add_rink ("salt lake city",  "Utah Olympic Oval",
                         "Salt Lake City",  "USA",      Rink . INDOOR,     1423)

        Rink . add_rink ("sarajevo",        "Zetra",
                         "Sarajevo",        "YUG",      Rink . ARTIFICIAL,  564)

        Rink . add_rink ("savalen",         "Idrettsplass",
                         "Savalen",         "NOR",      Rink . NATURAL,     724)

        Rink . add_rink ("squaw valley",    "Olympic Skating Ring",
                         "Squaw Valley",    "USA",      Rink . ARTIFICIAL, 1876)

        Rink . add_rink ("st. moritz",      "Badrutss Park",
                         "St. Moritz",      "SUI",      Rink . NATURAL,    1856)

        Rink . add_rink ("stockholm",       "Stockholm Stadion",
                         "Stockholm",       "SWE",      Rink . NATURAL,      25)

        Rink . add_rink ("sverdlovsk",      "Tsentrainyu",
                         "Sverdlovsk",      "URS",      Rink . NATURAL,     292)

        Rink . add_rink ("thialf",          "Thialf",
                         "Heerenveen",      "NED",
                                         ["1967-10-14", Rink . ARTIFICIAL,
                                          "1986-10-00", Rink . INDOOR], 0)

        Rink . add_rink ("tolga",           "Tolga Idrettsplass",
                         "Tolga",           "NOR",      Rink . NATURAL,     543)

        Rink . add_rink ("tonsberg",        "T\u{F8}nsberg Stadion",
                         "T\u{F8}nsberg",   "NOR",      Rink . NATURAL,      66)

        Rink . add_rink ("trondheim_kal",   "Kalvskindet",
                         "Trondheim",       "NOR",      Rink . NATURAL,       0)

        Rink . add_rink ("trondheim_oya",   "\u{D8}ya Stadion",
                         "Trondheim",       "NOR",      Rink . NATURAL,       5)

        Rink . add_rink ("vienna",          "WEV-Eisbahn",
                         "Vienna",          "AUT",      Rink . NATURAL,     172)

        Rink . add_rink ("warsaw",          "Tor Polonii",
                         "Warsaw",          "POL",      Rink . NATURAL,     188)

        Rink . add_rink ("zakopane",        "Toporowy Staw Nizni",
                         "Zakopane",        "POL",      Rink . NATURAL,    1110)
    }
}

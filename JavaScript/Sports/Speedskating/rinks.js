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
    city      (date) {return value_by_date (this . __city,    date)}
    country   (date) {return value_by_date (this . __country, date)}
    elevation ()     {return                this . __elevation}
    type      (date) {return value_by_date (this . __type,    date)}

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

    static add_rink (args) {
        const key       = args . key
        const name      = args . name
        const city      = args . city
        const country   = args . country
        const type      = args . type
        const elevation = args . elevation
        Rink . rinks [key] =
                  new Rink (key, name, city, country, type, elevation)
    }

    static init () {
        Rink . add_rink ({key:      "alkmaar",
                          name:     "IJsstadion De Meent",
                          city:     "Alkmaar",
                          country:  "NED",
                          type:      Rink . ARTIFICIAL,
                          elevation: 0})

        Rink . add_rink ({key:      "beijing", 
                          name:     "National Speed Skating Oval",
                          city:     "Beijing",
                          country:  "CHN",
                          type:      Rink . INDOOR,
                          elevation: 49})

        Rink . add_rink ({key:      "berlin", 
                          name:     "Sportforum Hohensch\u{F6}nhausen",
                          city:     "Berlin",
                          country:  "GER",
                          type:      Rink . INDOOR,
                          elevation: 34})

        Rink . add_rink ({key:      "bislett", 
                          name:     "Bislett Stadium",
                          city:     "Oslo",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 37})

        Rink . add_rink ({key:      "brandbu",
                          name:     "Rosendalbanen",
                          city:     "Brandbu",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 178})

        Rink . add_rink ({key:      "calgary",
                          name:     "Olympic Oval",
                          city:     "Calgary",
                          country:  "CAN",
                          type:      Rink . INDOOR,
                          elevation: 1034})

        Rink . add_rink ({key:      "cortina",
                          name:     "Pista Fiames",
                          city:     "Cortina d'Ampezzo",
                          country:  "ITA",
                          type:      Rink . NATURAL,
                          elevation: 1401})

        Rink . add_rink ({key:      "davos",
                          name:     "Eisstadion",
                          city:     "Davos",
                          country:  "SUI",
                          type:      Rink . NATURAL,
                          elevation: 1560})

        Rink . add_rink ({key:      "deventer",
                          name:     "IJsselstadion",
                          city:     "Deventer",
                          country:  "NED",
                          type:      Rink . ARTIFICIAL,
                          elevation: 5})

        Rink . add_rink ({key:      "eskilstuna",
                          name:     "Isstadion",
                          city:     "Eskilstuna",
                          country:  "SWE",
                          type:      Rink . ARTIFICIAL,
                          elevation: 16})

        Rink . add_rink ({key:      "engelberg",
                          name:     "Eisbahn",
                          city:     "Engelberg",
                          country:  "SUI",
                          type:      Rink . NATURAL,
                          elevation: 1138})

        Rink . add_rink ({key:      "frogner",
                          name:     "Frogner Stadion",
                          city:     "Oslo",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 42})

        Rink . add_rink ({key:      "gamle",
                          name:     "Gamle Frogner Stadion",
                          city:     "Oslo",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 42})

        Rink . add_rink ({key:      "geithus",
                          name:     "Farumo Stadion",
                          city:     "Geithus",
                          country:  "NOR",
                          type:      Rink . ARTIFICIAL,
                          elevation: 116})

        Rink . add_rink ({key:      "gjovik",
                          name:     "Gj\u{F8}vik Stadion",
                          city:     "Gj\u{F8}vik",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 149})

        Rink . add_rink ({key:      "grenoble",
                          name:     "Parc Paul Mistral",
                          city:     "Grenoble",
                          country:  "FRA",
                          type:      Rink . ARTIFICIAL,
                          elevation: 220})

        Rink . add_rink ({key:      "groningen",
                          name:     "IJsstadion Stadspark",
                          city:     "Groningen",
                          country:  "NED",
                          type:      Rink . ARTIFICIAL,
                          elevation: 1})

        Rink . add_rink ({key:      "goteborg",
                          name:     "Nya Ullevi",
                          city:     "G\u{F6}teborg",
                          country:  "SWE",
                          type:      Rink . ARTIFICIAL,
                          elevation: 10})

        Rink . add_rink ({key:      "haarlem",
                          name:     "Kennemerland",
                          city:     "Haarlem",
                          country:  "NED",
                          type:      Rink . ARTIFICIAL,
                          elevation: 0})

        Rink . add_rink ({key:      "hamar",
                          name:     "Olympia Hall",
                          city:     "Hamar",
                          country:  "NOR",
                          type:      Rink . INDOOR,
                          elevation: 125})

        Rink . add_rink ({key:      "hamar mjosen",
                          name:     "Mj\u{F8}sen",
                          city:     "Hamar",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 123})

        Rink . add_rink ({key:      "hamar stadion",
                          name:     "Hamar Stadion",
                          city:     "Hamar",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 113})

        Rink . add_rink ({key:      "helsinki",
                          name:     "T\u{F6}\u{F6}l\u{F6}n Pallokentt\u{E4}",
                          city:     "Helsinki",
                          country:  "FIN",
                          type:      Rink . NATURAL,
                          elevation: 10})

        Rink . add_rink ({key:      "horten",
                          name:     "Lystlunden Gressbane",
                          city:     "Horten",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 2})

        Rink . add_rink ({key:      "inzell",
                          name:     "Ludwig Schwabl Stadion",
                          city:     "Inzell",
                          country:  "FRG",
                          type:      Rink . ARTIFICIAL,
                          elevation: 690})

        Rink . add_rink ({key:      "jaap eden",
                          name:     "Jaap Edenbaan",
                          city:     "Amsterdam",
                          country:  "NED",
                          type:      Rink . ARTIFICIAL,
                          elevation: 0})

        Rink . add_rink ({key:      "karuizawa",
                          name:     "Skating Center",
                          city:     "Karuizawa",
                          country:  "JPN",
                          type:      Rink . ARTIFICIAL,
                          elevation: 980})

        Rink . add_rink ({key:      "kvarnsveden",
                          name:     "Idrottsplatsen",
                          city:     "Kvarnsveden",
                          country:  "SWE",
                          type:      Rink . NATURAL,
                          elevation: 165})

        Rink . add_rink ({key:      "kirov",
                          name:     "Dinamo",
                          city:     "Kirov",
                          country:  "URS",
                          type:      Rink . NATURAL,
                          elevation: 166})

        Rink . add_rink ({key:      "kongsberg",
                          name:     "Idr\u{E6}tsplassen",
                          city:     "Kongsberg",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 233})

        Rink . add_rink ({key:      "kuchwald",
                          name:     "K\u{FC}chwald",
                          city:    ["1974-00-00", "Karl-Marx-Stadt",
                                    "1990-06-01", "Chemnitz"],
                          country:  "GDR",
                          type:      Rink . ARTIFICIAL,
                          elevation: 410})

        Rink . add_rink ({key:      "lake placid",
                          name:     "James B. Sheffield Olympic Skating Rink",
                          city:     "Lake Placid",
                          country:  "USA",
                          type:      Rink . ARTIFICIAL,
                          elevation: 568})

        Rink . add_rink ({key:      "madonna",
                          name:     "Pista Olimpica",
                          city:     "Madonna di Campiglio",
                          country:  "ITA",
                          type:      Rink . NATURAL,
                          elevation: 1450})

        Rink . add_rink ({key:      "medeo",
                          name:     "Kompleks Medeo",
                          city:     "Medeo",
                          country:  ["1951-02-05", "URS",
                                     "1991-12-26", "KAZ",],
                          type:     ["1951-02-05", Rink . NATURAL,
                                     "1972-08-00", Rink . ARTIFICIAL],
                          elevation: 1691})

        Rink . add_rink ({key:      "misurina",
                          name:     "Lagua Misurina",
                          city:     "Misurina",
                          country:  "ITA",
                          type:      Rink . NATURAL,
                          elevation: 1756})

        Rink . add_rink ({key:      "moscow",
                          name:     "Dinamo",
                          city:     "Moscow",
                          country:  "URS",
                          type:      Rink . NATURAL,
                          elevation: 167})

        Rink . add_rink ({key:      "museumplein",
                          name:     "Museumplein",
                          city:     "Amsterdam",
                          country:  "NED",
                          type:      Rink . NATURAL,
                          elevation: 0})

        Rink . add_rink ({key:      "nagano",
                          name:     "M-Wave",
                          city:     "Nagano",
                          country:  "JPN",
                          type:      Rink . INDOOR,
                          elevation: 342})

        Rink . add_rink ({key:      "neglingeviken",
                          name:     "Saltsj\u{F6}banen",
                          city:     "Neglingeviken",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 8})

        Rink . add_rink ({key:      "notodden",
                          name:     "Notodden Sportsplass",
                          city:     "Notodden",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 103})

        Rink . add_rink ({key:      "obihiro",
                          name:     "Meiji Hokkaido-Tokachi Oval",
                          city:     "Obihiro",
                          country:  "JPN",
                          type:      Rink . INDOOR,
                          elevation: 79})

        Rink . add_rink ({key:      "paterswolde",
                          name:     "Paterswoldsche Meer",
                          city:     "Paterswolde",
                          country:  "NED",
                          type:      Rink . NATURAL,
                          elevation: 0})
                         
        Rink . add_rink ({key:      "salt lake city",
                          name:     "Utah Olympic Oval",
                          city:     "Salt Lake City",
                          country:  "USA",
                          type:      Rink . INDOOR,
                          elevation: 1423})

        Rink . add_rink ({key:      "sarajevo",
                          name:     "Zetra",
                          city:     "Sarajevo",
                          country:  "YUG",
                          type:      Rink . ARTIFICIAL,
                          elevation: 564})

        Rink . add_rink ({key:      "savalen",
                          name:     "Idrettsplass",
                          city:     "Savalen",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 724})

        Rink . add_rink ({key:      "squaw valley",
                          name:     "Olympic Skating Ring",
                          city:     "Squaw Valley",
                          country:  "USA",
                          type:      Rink . ARTIFICIAL,
                          elevation: 1876})

        Rink . add_rink ({key:      "st. moritz",
                          name:     "Badrutss Park",
                          city:     "St. Moritz",
                          country:  "SUI",
                          type:      Rink . NATURAL,
                          elevation: 1856})

        Rink . add_rink ({key:      "stockholm",
                          name:     "Stockholm Stadion",
                          city:     "Stockholm",
                          country:  "SWE",
                          type:      Rink . NATURAL,
                          elevation: 25})

        Rink . add_rink ({key:      "sverdlovsk",
                          name:     "Tsentrainyu",
                          city:     "Sverdlovsk",
                          country:  "URS",
                          type:      Rink . NATURAL,
                          elevation: 292})

        Rink . add_rink ({key:      "thialf",
                          name:     "Thialf",
                          city:     "Heerenveen",
                          country:  "NED",
                          type:    ["1967-10-14", Rink . ARTIFICIAL,
                                    "1986-10-00", Rink . INDOOR],
                          elevation: 0})

        Rink . add_rink ({key:      "tolga",
                          name:     "Tolga Idrettsplass",
                          city:     "Tolga",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 543})

        Rink . add_rink ({key:      "tonsberg",
                          name:     "T\u{F8}nsberg Stadion",
                          city:     "T\u{F8}nsberg",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 66})

        Rink . add_rink ({key:      "trondheim_kal",
                          name:     "Kalvskindet",
                          city:     "Trondheim",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 0})

        Rink . add_rink ({key:      "trondheim_oya",
                          name:     "\u{D8}ya Stadion",
                          city:     "Trondheim",
                          country:  "NOR",
                          type:      Rink . NATURAL,
                          elevation: 5})

        Rink . add_rink ({key:      "vienna",
                          name:     "WEV-Eisbahn",
                          city:     "Vienna",
                          country:  "AUT",
                          type:      Rink . NATURAL,
                          elevation: 172})

        Rink . add_rink ({key:      "warsaw",
                          name:     "Tor Polonii",
                          city:     "Warsaw",
                          country:  "POL",
                          type:      Rink . NATURAL,
                          elevation: 188})

        Rink . add_rink ({key:      "zakopane",
                          name:     "Toporowy Staw Nizni",
                          city:     "Zakopane",
                          country:  "POL",
                          type:      Rink . NATURAL,
                          elevation: 1110})
    }
}

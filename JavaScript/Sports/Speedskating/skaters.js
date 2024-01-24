function value_by_date (value, date = "0000-00-00") {
    if (typeof (value) === "object") {
        if (date == "now" || date == "today") {
            return value [value . length - 1]  // Most recent value
        }
        for (let i = value . length - 2; i >= 0; i -= 2) {
            if (value [i] < date) {
                return value [i + 1]
            }
        }
        return "???"
    }
    return value
}

class Skater {
    // #name
    // #nationality

    static GERMAN_REUNIFICATION_DATE = "1990-10-03"

    static skaters = {}

    constructor (key, name, nationality) {
        this . __key         = key
        this . __name        = name
        this . __nationality = nationality
    }

    name (date = 0) {
        return value_by_date (this . __name, date)
    }

    key () {
        return this . __key
    }

    nationality (date = 0) {
        const nat = value_by_date (this . __nationality, date)

        //
        // Special case GDR & FRG
        //
        if ((nat == "GDR" || nat == "FRG") &&
             date >= Skater . GERMAN_REUNIFICATION_DATE) {
            return "GER"
        }

        return nat
    }

    static add_skater (keys) {
        const key         = keys . key
        const name        = keys . name
        const nationality = keys . nationality
        Skater . skaters [key] = new Skater (key, name, nationality)
    }

    static skater (key) {
        return Skater  . skaters [key] ||
               Country . country (key) ||
               new Skater (key, "")
    }

    static init () {
        //
        // A
        //
        Skater . add_skater ({key:         "aaness",
                              name:        "Nils Aaness",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "akifyeva",
                              name:        "Olga Akifyeva",
                              nationality: "URS"})
        Skater . add_skater ({key:         "andersen",
                              name:        "Hjalmar Andersen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "anschutz",
                              name:        "Daniela Ansch\u{FC}tz",
                              nationality: "GER"})
        Skater . add_skater ({key:         "antson",
                              name:        "Ants Antson",
                              nationality: "URS"})
        Skater . add_skater ({key:         "artamonova",
                              name:        "Inga Artamonova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "averina",
                              name:        "Tatyana Averina",
                              nationality: "URS"})

        //
        // B
        //
        Skater . add_skater ({key:         "backman",
                              name:        "Kjell B\u{E4}ckman",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "ballangrud",
                              name:        "Ivar Ballangrud",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "baranov",
                              name:        "Aleksandr Baranov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "beune",
                              name:        "Joy Beune",
                              nationality: "NED"})
        Skater . add_skater ({key:         "beulenkamp",
                              name:        "Jelmer Beulenkamp",
                              nationality: "NED"})
        Skater . add_skater ({key:         "blair",
                              name:        "Bonnie Blair",
                              nationality: "USA"})
        Skater . add_skater ({key:         "blikken",
                              name:        "Undis Blikken",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "bloemen",
                              name:        "Ted-Jan Bloemen",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "blokhuijsen",
                              name:        "Jan Blokhuijsen",
                              nationality: "NED"})
        Skater . add_skater ({key:         "bols",
                              name:        "Jan Bols",
                              nationality: "NED"})
        Skater . add_skater ({key:         "borjes",
                              name:        "Hasse B\u{F6}rjes",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "bos_jan",
                              name:        "Jan Bos",
                              nationality: "NED"})
        Skater . add_skater ({key:         "bos_thomas",
                              name:        "Thomas Bos",
                              nationality: "NED"})
        Skater . add_skater ({key:         "bosker",
                              name:        "Marcel Bosker",
                              nationality: "NED"})
        Skater . add_skater ({key:         "bouchard",
                              name:        "Sylvain Bouchard",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "boucher",
                              name:        "Ga\u{E9}tan Boucher",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "boutiette",
                              name:        "KC Boutiette",
                              nationality: "USA"})
        Skater . add_skater ({key:         "bowe",
                              name:        "Brittany Bowe",
                              nationality: "USA"})
        Skater . add_skater ({key:         "bozhyev",
                              name:        "Oleg Bozhyev",
                              nationality: "URS"})
        Skater . add_skater ({key:         "breuer",
                              name:        "Christian Breuer",
                              nationality: "GER"})
        Skater . add_skater ({key:         "brom",
                              name:        "Ellie van den Brom",
                              nationality: "NED"})
        Skater . add_skater ({key:         "burka",
                              name:        "Sylvia Burka",
                              nationality: "CAN"})

        //
        // C
        //
        Skater . add_skater ({key:         "carlsen",
                              name:        "Armand Carlsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "chaykin",
                              name:        "Valetin Chaykin",
                              nationality: "URS"})
        Skater . add_skater ({key:         "claeson",
                              name:        "G\u{F6}ran Claeson",
                              nationality: "SWE"})

        //
        // D
        //
        Skater . add_skater ({key:         "dankers",
                              name:        "Arne Dankers",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "davis",
                              name:        "Shani Davis",
                              nationality: "USA"})
        Skater . add_skater ({key:         "dawson",
                              name:        "Casey Dawson",
                              nationality: "USA"})
        Skater . add_skater ({key:         "dietel",
                              name:        "Andreas Dietel",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "donker",
                              name:        "Gr\u{E9} Donker",
                              nationality: "NED"})

        //
        // E
        //
        Skater . add_skater ({key:         "eden",
                              name:        "Jaap Eden",
                              nationality: "NED"})
        Skater . add_skater ({key:         "efskind",
                              name:        "Lasse Efskind",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "eitrem",
                              name:        "Sander Eitrem",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "elm",
                              name:        "Steven Elm",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "engnestangen",
                              name:        "Hans Engnestangen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "enke",
                              name:       ["1961-06-20", "Karin Enke",
                                           "1981-07-00", "Karin Busch",
                                           "1982-07-00", "Karin Enke",
                                           "1984-07-00", "Karin Kania",
                                           "1988-07-00", "Karin Enke-Richter"],
                              nationality: "GDR"})
        Skater . add_skater ({key:         "ericson",
                              name:        "Frithiof Ericson",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "eriksen",
                              name:        "Ivar Eriksen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "ervik",
                              name:        "Eskil Ervik",
                              nationality: "NOR"})

        //
        // F
        //
        Skater . add_skater ({key:         "fabris",
                              name:        "Enrico Fabris",
                              nationality: "ITA"})
        Skater . add_skater ({key:         "falk-larssen",
                              name:        "Rolf Falk-Larssen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "farstad",
                              name:        "Sverre Farstad",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "fechina",
                              name:        "Lyudmila Fechina",
                              nationality: "URS"})
        Skater . add_skater ({key:         "fish",
                              name:        "Graeme Fish",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "fornaess",
                              name:        "Dag Forn\u{E6}ss",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "fredriksen",
                              name:        "Oskar Fredriksen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "friesinger",    
                              name:       ["1977-01-11", "Anni Friesinger",
                                           "2009-08-11", "Anni Friesinger-" +
                                                                     "Postma"],
                              nationality: "GER"})

        //
        // G
        //
        Skater . add_skater ({key:         "garbrecht",
                              name:       ["1968-12-11", "Monique Garbrecht",
                                           "2000-07-01", "Monique Garbrecht-" +
                                                                "Enfeldt"],
                              nationality: "GDR"})
        Skater . add_skater ({key:         "gennip",
                              name:        "Yvonne van Gennip",
                              nationality: "NED"})
        Skater . add_skater ({key:         "grishin",
                              name:        "Yevgeny Grishin",
                              nationality: "URS"})
        Skater . add_skater ({key:         "groves",
                              name:        "Kristina Groves",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "grunden",
                              name:        "Oscar Grund\u{E9}n",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "groothuis",
                              name:        "Stefan Groothuis",
                              nationality: "NED"})
        Skater . add_skater ({key:         "gulyayev_boris",
                              name:        "Boris Gulyayev",
                              nationality: "URS"})
        Skater . add_skater ({key:         "gulyayev_nikolay",
                              name:        "Nikolay Gulyayev",
                              nationality: "URS"})
        Skater . add_skater ({key:         "gundersen",
                              name:        "Rudolf Gundersen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "gustafson",
                              name:        "Thomas Gustafson",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "guttormsen",
                              name:        "Per Willy Guttormsen",
                              nationality: "NOR"})

        //
        // H
        //
        Skater . add_skater ({key:         "haase",
                              name:        "Helga Haase",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "halvorsen",
                              name:        "Einar Halvorsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "hedrick",
                              name:        "Chad Hedrick",
                              nationality: "USA"})
        Skater . add_skater ({key:         "heiden_eric",
                              name:        "Eric Heiden",
                              nationality: "USA"})
        Skater . add_skater ({key:         "heiden_siem",
                              name:        "Siem Heiden",
                              nationality: "NED"})
        Skater . add_skater ({key:         "helden",
                              name:        "Hans van Helden",
                              nationality: "NED"})
        Skater . add_skater ({key:         "henning",
                              name:        "Anne Henning",
                              nationality: "USA"})
        Skater . add_skater ({key:         "hoffmann",
                              name:        "Andr\u{E9} Hoffmann",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "horii",
                              name:        "Manabu Horii",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "hughes",
                              name:        "Clara Hughes",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "huiskes",
                              name:        "Anton Huiskes",
                              nationality: "NED"})
        Skater . add_skater ({key:         "hunyady",
                              name:        "Emese Hunyady",
                              nationality: "AUT"})

        //
        // I
        //
        Skater . add_skater ({key:         "ireland",
                              name:        "Mike Ireland",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "isakova",
                              name:        "Mariya Isakova",
                              nationality: "URS"})

        //
        // J
        //
        Skater . add_skater ({key:         "jansen",
                              name:        "Dan Jansen",
                              nationality: "USA"})
        Skater . add_skater ({key:         "jarvinen",
                              name:        "Juhani J\u{E4}rvinen",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "jensen",
                              name:        "Bj\u{F8}rg Eva Jensen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "jing",
                              name:        "Yu Jing",
                              nationality: "CHN"})
        Skater . add_skater ({key:         "johannesen",
                              name:        "Knut Johannesen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "jong",
                              name:        "Bob de Jong",
                              nationality: "NED"})

        //
        // K
        //
        Skater . add_skater ({key:         "kaiser",
                              name:       ["1938-05-20", "Stien Kaiser",
                                           "1971-03-31", "Stien Baas-Kaiser",],
                              nationality: "NED"})
        Skater . add_skater ({key:         "kang-seok",
                              name:        "Lee Kang-Seok",
                              nationality: "KOR"})
        Skater . add_skater ({key:         "karelina",
                              name:        "Tatyana Karelina",
                              nationality: "URS"})
        Skater . add_skater ({key:         "karlstad",
                              name:        "Geir Karlstad",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "kato",
                              name:        "Joji Kato",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "keller",
                              name:        "Erhard Keller",
                              nationality: "FRG"})
        Skater . add_skater ({key:         "kemkers",
                              name:        "Gerard Kemkers",
                              nationality: "NED"})
        Skater . add_skater ({key:         "keulen deelstra",
                              name:        "Atje Keulen-Deelstra",
                              nationality: "NED"})
        Skater . add_skater ({key:         "kikuchi",
                              name:        "Ayaka Kikuchi",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "klassen",
                              name:        "Cindy Klassen",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "kleine",
                              name:        "Piet Kleine",
                              nationality: "NED"})
        Skater . add_skater ({key:         "klein",
                              name:        "Kit Klein",
                              nationality: "USA"})
        Skater . add_skater ({key:         "kholshchevnikova",
                              name:        "Zoya Kholshchevnikova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "kodaira",
                              name:        "Nao Kodaira",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "kondakov",
                              name:        "Yury Kondakov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "kondakova",
                              name:        "Sofya Kondakova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "kongshaug",
                              name:        "Peder Kongshaug",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "kooiman",
                              name:        "Ineke Kooiman-van Homoet",
                              nationality: "NED"})
        Skater . add_skater ({key:         "kondakova",
                              name:        "Sofya Kondakova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "koskela",
                              name:        "Pekka Koskela",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "koss",
                              name:        "Johann Olav Koss",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "kramer",
                              name:        "Sven Kramer",
                              nationality: "NED"})
        Skater . add_skater ({key:         "kulikov",
                              name:        "Yevgeny Kulikov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "kulizhnikov",
                              name:        "Pavel Kulizhnikov",
                              nationality: "RUS"})
        Skater . add_skater ({key:         "kuznetsova",
                              name:        "Tamara Kuznetsova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "kyou-hyuk",
                              name:        "Lee Kyou-Hyuk",
                              nationality: "KOR"})

        //
        // L
        //
        Skater . add_skater ({key:         "landbeck",
                              name:        "Liselotte Landbeck",
                              nationality: "AUT"})
        Skater . add_skater ({key:         "larsen",
                              name:        "Roald Larsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "le may",
                              name:       ["1970-12-23", "Catriona Le May",
                                           "1996-07-00", "Catriona Le May " +
                                                                     "Doan"],
                              nationality: "CAN"})
        Skater . add_skater ({key:         "leeuwangh",
                              name:        "Jakko Jan Leeuwangh",
                              nationality: "NED"})
        Skater . add_skater ({key:         "lehman",
                              name:        "Emery Lehman",
                              nationality: "USA"})
        Skater . add_skater ({key:         "lesche",
                              name:        "Vern\u{E9} Lesche",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "lie",
                              name:        "Synn\u{F8}ve Lie",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "liebrechts",
                              name:        "Rudie Liebrechts",
                              nationality: "NED"})
        Skater . add_skater ({key:         "linkovesi",
                              name:        "Leo Linkovesi",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "lyoshkin",
                              name:        "Viktor Lyoshkin",
                              nationality: "URS"})

        //
        // M
        //
        Skater . add_skater ({key:         "maier",
                              name:        "Fred Anton Maier",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "malkov",
                              name:        "Igor Malkov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "mamonov",
                              name:        "Nikolay Mamonov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "mantia",
                              name:        "Joey Mantia",
                              nationality: "USA"})
        Skater . add_skater ({key:         "mathiesen",
                              name:        "Charles Mathiesen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "mathisen",
                              name:        "Oscar Mathisen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "marshall",
                              name:        "Neal Marshall",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "mauseth",
                              name:        "Wilhelm Mauseth",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "mey",
                              name:        "Uwe-Jens Mey",
                              nationality: "GDR"})
        Skater . add_skater ({key:          "mitscherlich",
                             name:        ["1960-12-01", "Andrea Mitscherlich",
                                           "1980-07-00", "Andrea Sch\u{F6}ne",
                                           "1986-07-00", "Andrea Ehrig"],
                              nationality: "GDR"})
        Skater . add_skater ({key:         "miyabe",
                              name:        "Yasunori Miyabe",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "morrison",
                              name:        "Denny Morrison",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "mikhaylov",
                              name:        "Yury Mikhaylov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "mulder_grietje",
                              name:        "Grietje Mulder",
                              nationality: "NED"})
        Skater . add_skater ({key:         "mulder_michel",
                              name:        "Michel Mulder",
                              nationality: "NED"})
        Skater . add_skater ({key:         "muratov",
                              name:        "Valery Muratov",
                              nationality: "URS"})

        //
        // N
        //
        Skater . add_skater ({key:         "naess",
                              name:        "Alfred N\u{E6}ss",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "nehringowa",
                              name:        "Zofia Nehringowa",
                              nationality: "POL"})
        Skater . add_skater ({key:         "nesbitt",
                              name:        "Christine Nesbitt",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "nielsen",
                              name:        "Halfan Nielsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "niemann",        
                              name:       ["1966-09-07", "Gunda Kleemann",
                                           "1991-07-00", "Gunda Niemann",
                                           "1997-07-11", "Gunda Niemann-" +
                                                               "Stirnemann"],
                              nationality: "GDR"})
        Skater . add_skater ({key:         "niemczyk",
                              name:        "El\u{17C}bieta Niemczyk",
                              nationality: "POL"})
        Skater . add_skater ({key:         "nilsen",
                              name:        "Laila Schou Nilsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "nilsson",
                              name:        "Johnny Nilsson",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "noake",
                              name:        "Hiroyuki Noake",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "nuis",
                              name:        "Kjeld Nuis",
                              nationality: "NED"})

        //
        // O
        //
        Skater . add_skater ({key:         "ogloblin",
                              name:        "Dmitry Ogloblin",
                              nationality: "URS"})
        Skater . add_skater ({key:         "ostlund",
                              name:        "Peter \u{D8}stlund",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "overland",
                              name:        "Kevin Overland",
                              nationality: "CAN"})

        //
        // P
        //
        Skater . add_skater ({key:         "pajor",
                              name:        "Korn\u{E9}i Pajor",
                              nationality: "HUN"})
        Skater . add_skater ({key:         "parra",
                              name:        "Derek Parra",
                              nationality: "USA"})
        Skater . add_skater ({key:         "pasveer",
                              name:        "Alida Pasveer",
                              nationality: "NED"})
        Skater . add_skater ({key:         "pechstein",
                              name:        "Claudia Pechstein",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "pederson",
                              name:        "Sverre Lunde Pederson",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "pegov",
                              name:        "Pagel Pegov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "petrusyova",
                              name:        "Natalya Petrusyova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "pflug",
                              name:        "Monika Pflug",
                              nationality: "FRG"})
        Skater . add_skater ({key:         "poel",
                              name:        "Niels van der Poel",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "postma",
                              name:        "Ids Postma",
                              nationality: "NED"})
        Skater . add_skater ({key:         "potts",
                              name:        "Allan Potts",
                              nationality: "USA"})

        //
        // Q
        //

        //
        // R
        //
        Skater . add_skater ({key:         "richardson",
                              name:       ["1989-03-20", "Heather Richardson",
                                           "2015-05-00", "Heather Richardson-" +
                                                                 "Bergsma",],
                              nationality: "USA"})
        Skater . add_skater ({key:         "ritsma",
                              name:        "Rintje Ritsma",
                              nationality: "NED"})
        Skater . add_skater ({key:         "roest",
                              name:        "Patrick Roest",
                              nationality: "NED"})
        Skater . add_skater ({key:         "romanova",
                              name:        "Galina Romanova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "romme",
                              name:        "Gianni Romme",
                              nationality: "NED"})
        Skater . add_skater ({key:         "rothenburger",
                              name:        "Christa Rothenburger",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "rylova",
                              name:        "Tamara Rylova",
                              nationality: "URS"})

        //
        // S
        //
        Skater . add_skater ({key:         "sablikova",
                              name:        "Martina S\u{E1}bl\u{ED}kov\u{E1}",
                              nationality: "CZE"})
        Skater . add_skater ({key:         "sadchikova",
                              name:        "Lyubov Sadchikova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "safronov",
                              name:        "Aleksandr Safronov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "sakunenko",
                              name:        "Dmitry Sakunenko",
                              nationality: "URS"})
        Skater . add_skater ({key:         "sato",
                              name:        "Ayano Sato",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "sang-hwa",
                              name:        "Lee Sang-hwa",
                              nationality: "KOR"})
        Skater . add_skater ({key:         "schenk",
                              name:        "Ard Schenk",
                              nationality: "NED"})
        Skater . add_skater ({key:         "schleiermacher",
                              name:        "Ruth Schleiermacher",
                              nationality: "GDR"})
        Skater . add_skater ({key:         "schonbrunn",
                              name:       ["1961-06-01", "Gabi Sch\u{F6}nbrunn",
                                           "1987-07-00", "Gabi Zange",],
                              nationality: "GDR"})
        Skater . add_skater ({key:         "schussler",
                              name:        "Brittany Schussler",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "schut",
                              name:        "Ans Schut",
                              nationality: "NED"})
        Skater . add_skater ({key:         "scott",
                              name:        "Kevin Scott",
                              nationality: "CAN"})
        Skater . add_skater ({key:         "selikhova",
                              name:        "Lidiya Selikhova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "sergeyev",
                              name:        "Yury Sergeyev",
                              nationality: "URS"})
        Skater . add_skater ({key:         "seyffarth",
                              name:        "\u{C5}ke Seyffarth",
                              nationality: "SWE"})
        Skater . add_skater ({key:         "shasherin",
                              name:        "Viktor Shasherin",
                              nationality: "URS"})
        Skater . add_skater ({key:         "shchegoleyeva",
                              name:        "Khalida Shchegoleyeva",
                              nationality: "URS"})
        Skater . add_skater ({key:         "shilkov",
                              name:        "Boris Shilkov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "shimizu",
                              name:        "Hiroyasu Shimizu",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "shirahata",
                              name:        "Keiji Shirahata",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "sidorova",
                              name:        "Tatyana Sidorova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "sighel",
                              name:        "Roberto Sighel",
                              nationality: "ITA"})
        Skater . add_skater ({key:         "skoblikova",
                              name:        "Lidiya Skoblikova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "sondral",
                              name:        "\u{C5}dne S\u{F8}ndr\u{E5}l",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "staksrud",
                              name:        "Michael Staksrud",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "stam",
                              name:        "Marieke Stam",
                              nationality: "NED"})
        Skater . add_skater ({key:         "statkevich",
                              name:        "Nina Statkevich",
                              nationality: "URS"})
        Skater . add_skater ({key:         "stensen",
                              name:        "Sten Stensen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "stenshjemmet",
                              name:        "Kay Arne Stenshjemmet",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "stepanskaya",
                              name:        "Galina Stepanskaya",
                              nationality: "URS"})
        Skater . add_skater ({key:         "stiansen",
                              name:        "Svein-Erik Stiansen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "stiepl",
                              name:        "Max Stiepl",
                              nationality: "AUT"})
        Skater . add_skater ({key:         "storholt",
                              name:        "Jan Egil Storholt",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "strom_harald",
                              name:        "Harald Str\u{F8}m",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "strom_kristian",
                              name:        "Kristian Str\u{F8}m",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "strunnikov",
                              name:        "Nikolay Strunnikov",
                              nationality: "RU1"})
        Skater . add_skater ({key:         "sundstrom",
                              name:        "Becky Sundstrom",
                              nationality: "USA"})
        Skater . add_skater ({key:         "suzuki",
                              name:        "Keiichi Suzuki",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "swider",
                              name:        "Nancy Swider",
                              nationality: "USA"})

        //
        // T
        //
        Skater . add_skater ({key:         "tabata",
                              name:        "Maki Tabata",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "takagi_miho",
                              name:        "Miho Takagi",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "takagi_nana",
                              name:        "Nana Takagi",
                              nationality: "JPN"})
        Skater . add_skater ({key:         "thomas",
                              name:        "Annemarie Thomas",
                              nationality: "NED"})
        Skater . add_skater ({key:         "thomassen",
                              name:        "Magne Thomassen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "thometz",
                              name:        "Nick Thometz",
                              nationality: "USA"})
        Skater . add_skater ({key:         "thorvaldsen",
                              name:        "Randi Thorvaldsen",
                              nationality: "NOR"})
        Skater . add_skater ({key:         "thunberg",
                              name:        "Clas Thunberg",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "timmer",
                              name:        "Marianne Timmer",
                              nationality: "NED"})
        Skater . add_skater ({key:         "titova",
                              name:        "Lyudmila Titova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "traub",
                              name:        "G\u{FC}nther Traub",
                              nationality: "FRG"})
        Skater . add_skater ({key:         "tuitert",
                              name:        "Mark Tuitert",
                              nationality: "NED"})

        //
        // U
        //
        Skater . add_skater ({key:         "uytdehaage",
                              name:        "Jochem Uytdehaage",
                              nationality: "NED"})

        //
        // V
        //
        Skater . add_skater ({key:         "varlamov",
                              name:        "Viktor Varlamov",
                              nationality: "URS"})
        Skater . add_skater ({key:         "velde",
                              name:        "Gerard van Velde",
                              nationality: "NED"})
        Skater . add_skater ({key:         "veldkamp",
                              name:        "Bart Veldkamp",
                              nationality: "BEL"})
        Skater . add_skater ({key:         "verbij",
                              name:        "Kai Verbij",
                              nationality: "NED"})
        Skater . add_skater ({key:         "verheijen",
                              name:        "Carl Verheijen",
                              nationality: "NED"})
        Skater . add_skater ({key:         "verkerk",
                              name:        "Kees Verkerk",
                              nationality: "NED"})
        Skater . add_skater ({key:         "verweij",
                              name:        "Koen Verweij",
                              nationality: "NED"})
        Skater . add_skater ({key:         "vikander",
                              name:        "Johan Vikander",
                              nationality: "FIN"})
        Skater . add_skater ({key:         "visser",
                              name:        "Leo Visser",
                              nationality: "NED"})
        Skater . add_skater ({key:         "volker",
                              name:        "Sabine V\u{F6}lker",
                              nationality: "GER"})
        Skater . add_skater ({key:         "vorobyeva",
                              name:        "Khalida Vorobyeva",
                              nationality: "URS"})
        Skater . add_skater ({key:         "voronina",
                              name:        "Natalya Voronina",
                              nationality: "RUS"})
        Skater . add_skater ({key:         "voronina artamonova",
                              name:        "Inga Voronina-Artamonova",
                              nationality: "URS"})
        Skater . add_skater ({key:         "de vries",
                              name:        "Douwe de Vries",
                              nationality: "NED"})

        //
        // W
        //
        Skater . add_skater ({key:         "wennemars",
                              name:        "Erben Wennemars",
                              nationality: "NED"})
        Skater . add_skater ({key:         "witty",
                              name:        "Chris Witty",
                              nationality: "USA"})
        Skater . add_skater ({key:         "wolf",
                              name:        "Jenny Wolf",
                              nationality: "GER"})
        Skater . add_skater ({key:         "wotherspoon",
                              name:        "Jeremy Wotherspoon",
                              nationality: "CAN"})

        //
        // X
        //

        //
        // Y
        //
        Skater . add_skater ({key:         "young",
                              name:        "Sheila Young",
                              nationality: "USA"})
        Skater . add_skater ({key:         "yuskov",
                              name:        "Denis Yuskov",
                              nationality: "RUS"})

        //
        // Z
        //
        Skater . add_skater ({key:         "zandstra",
                              name:        "Falko Zandstra",
                              nationality: "NED"})
        Skater . add_skater ({key:         "zhelezovsky",
                              name:        "Igor Zhelezovsky",
                              nationality: "URS"})
        Skater . add_skater ({key:         "zhukova",
                              name:        "Rimma Zhukova",
                              nationality: "URS"})
    }
}

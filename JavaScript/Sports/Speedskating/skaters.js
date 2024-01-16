function value_by_date (value, date) {
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

    constructor (name, nationality) {
        this . __name        = name
        this . __nationality = nationality
    }

    name (date = 0) {
        return value_by_date (this . __name, date)
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

    static add_skater (key, name, nationality) {
        Skater . skaters [key] = new Skater (name, nationality)
    }

    static skater (key) {
        return Skater  . skaters [key] ||
               Country . country (key) ||
               new Skater (key, "")
    }
}


Skater . add_skater ("aaness",               "Nils Aaness",              "NOR")
Skater . add_skater ("akifyeva",             "Olga Akifyeva",            "URS")
Skater . add_skater ("andersen",             "Hjalmar Andersen",         "NOR")
Skater . add_skater ("anschutz",             "Daniela Ansch\u{D6}tz",    "GER")
Skater . add_skater ("antson",               "Ants Antson",              "URS")
Skater . add_skater ("artamonova",           "Inga Artamonova",          "URS")
Skater . add_skater ("averina",              "Tatyana Averina",          "URS")

Skater . add_skater ("backman",              "Kjell B\u{E4}ckman",       "NOR")
Skater . add_skater ("ballangrud",           "Ivar Ballangrud",          "NOR")
Skater . add_skater ("baranov",              "Aleksandr Baranov",        "URS")
Skater . add_skater ("beune",                "Joy Beune",                "NED")
Skater . add_skater ("beulenkamp",           "Jelmer Beulenkamp",        "NED")
Skater . add_skater ("blair",                "Bonnie Blair",             "USA")
Skater . add_skater ("blikken",              "Undis Blikken",            "NOR")
Skater . add_skater ("bloemen",              "Ted-Jan Bloemen",          "CAN")
Skater . add_skater ("blokhuijsen",          "Jan Blokhuijsen",          "NED")
Skater . add_skater ("bols",                 "Jan Bols",                 "NED")
Skater . add_skater ("borjes",               "Hasse B\u{F6}rjes",        "SWE")
Skater . add_skater ("bos_jan",              "Jan Bos",                  "NED")
Skater . add_skater ("bos_thomas",           "Thomas Bos",               "NED")
Skater . add_skater ("bouchard",             "Sylvain Bouchard",         "CAN")
Skater . add_skater ("boucher",              "Ga\u{E9}tan Boucher",      "CAN")
Skater . add_skater ("boutiette",            "KC Boutiette",             "USA")
Skater . add_skater ("bowe",                 "Brittany Bowe",            "USA")
Skater . add_skater ("bozhyev",              "Oleg Bozhyev",             "URS")
Skater . add_skater ("breuer",               "Christian Breuer",         "GER")
Skater . add_skater ("brom",                 "Ellie van den Brom",       "NED")
Skater . add_skater ("burka",                "Sylvia Burka",             "CAN")

Skater . add_skater ("carlsen",              "Armand Carlsen",           "NOR")
Skater . add_skater ("chaykin",              "Valetin Chaykin",          "URS")
Skater . add_skater ("claeson",              "G\u{F6}ran Claeson",       "SWE")

Skater . add_skater ("dankers",              "Arne Dankers",             "CAN")
Skater . add_skater ("davis",                "Shani Davis",              "USA")
Skater . add_skater ("dawson",               "Casey Dawson",             "USA")
Skater . add_skater ("dietel",               "Andreas Dietel",           "GDR")
Skater . add_skater ("donker",               "Gr\u{E9} Donker",          "NED")

Skater . add_skater ("eden",                 "Jaap Eden",                "NED")
Skater . add_skater ("efskind",              "Lasse Efskind",            "NOR")
Skater . add_skater ("eitrem",               "Sander Eitrem",            "NOR")
Skater . add_skater ("elm",                  "Steven Elm",               "CAN")
Skater . add_skater ("engnestangen",         "Hans Engnestangen",        "NOR")
Skater . add_skater ("enke",  ["1961-06-20", "Karin Enke",
                               "1981-07-00", "Karin Busch",
                               "1982-07-00", "Karin Enke",
                               "1984-07-00", "Karin Kania",
                               "1988-07-00", "Karin Enke-Richter"],      "GDR")
Skater . add_skater ("ericson",              "Frithiof Ericson",         "SWE")
Skater . add_skater ("eriksen",              "Ivar Eriksen",             "NOR")
Skater . add_skater ("ervik",                "Eskil Ervik",              "NOR")

Skater . add_skater ("fabris",               "Enrico Fabris",            "ITA")
Skater . add_skater ("falk-larssen",         "Rolf Falk-Larssen",        "NOR")
Skater . add_skater ("farstad",              "Sverre Farstad",           "NOR")
Skater . add_skater ("fechina",              "Lyudmila Fechina",         "URS")
Skater . add_skater ("fish",                 "Graeme Fish",              "CAN")
Skater . add_skater ("fornaess",             "Dag Forn\u{E6}ss",         "NOR")
Skater . add_skater ("fredriksen",           "Oskar Fredriksen",         "NOR")
Skater . add_skater ("friesinger",    
                              ["1977-01-11", "Anni Friesinger",
                               "2009-08-11", "Anni Friesinger-Postma"],  "GER")

Skater . add_skater ("garbrecht",
                              ["1968-12-11", "Monique Garbrecht",
                               "2000-07-01", "Monique Garbrecht-Enfeldt",],
                                                                         "GDR")
Skater . add_skater ("gennip",               "Yvonne van Gennip",        "NED")
Skater . add_skater ("grishin",              "Yevgeny Grishin",          "URS")
Skater . add_skater ("groves",               "Kristina Groves",          "CAN")
Skater . add_skater ("grunden",              "Oscar Grund\u{E9}n",       "SWE")
Skater . add_skater ("groothuis",            "Stefan Groothuis",         "NED")
Skater . add_skater ("gulyayev_boris",       "Boris Gulyayev",           "URS")
Skater . add_skater ("gulyayev_nikolay",     "Nikolay Gulyayev",         "URS")
Skater . add_skater ("gundersen",            "Rudolf Gundersen",         "NOR")
Skater . add_skater ("gustafson",            "Thomas Gustafson",         "SWE")
Skater . add_skater ("guttormsen",           "Per Willy Guttormsen",     "NOR")

Skater . add_skater ("haase",                "Helga Haase",              "GDR")
Skater . add_skater ("halvorsen",            "Einar Halvorsen",          "NOR")
Skater . add_skater ("hedrick",              "Chad Hedrick",             "USA")
Skater . add_skater ("heiden_eric",          "Eric Heiden",              "USA")
Skater . add_skater ("heiden_siem",          "Siem Heiden",              "NED")
Skater . add_skater ("helden",               "Hans van Helden",          "NED")
Skater . add_skater ("henning",              "Anne Henning",             "USA")
Skater . add_skater ("hoffmann",             "Andr\u{E9} Hoffmann",      "GDR")
Skater . add_skater ("horii",                "Manabu Horii",             "JPN")
Skater . add_skater ("hughes",               "Clara Hughes",             "CAN")
Skater . add_skater ("huiskes",              "Anton Huiskes",            "NED")
Skater . add_skater ("hunyady",              "Emese Hunyady",            "AUT")

Skater . add_skater ("ireland",              "Mike Ireland",             "CAN")
Skater . add_skater ("isakova",              "Mariya Isakova",           "URS")

Skater . add_skater ("jansen",               "Dan Jansen",               "USA")
Skater . add_skater ("jarvinen",             "Juhani J\u{E4}rvinen",     "FIN")
Skater . add_skater ("jensen",               "Bj\u{F8}rg Eva Jensen",    "NOR")
Skater . add_skater ("jing",                 "Yu Jing",                  "CHN")
Skater . add_skater ("johannesen",           "Knut Johannesen",          "NOR")
Skater . add_skater ("jong",                 "Bob de Jong",              "NED")

Skater . add_skater ("kaiser",["1938-05-20", "Stien Kaiser",
                               "1971-03-31", "Stien Baas-Kaiser",],      "NED")
Skater . add_skater ("kang-seok",            "Lee Kang-Seok",            "KOR")
Skater . add_skater ("karelina",             "Tatyana Karelina",         "URS")
Skater . add_skater ("karlstad",             "Geir Karlstad",            "NOR")
Skater . add_skater ("kato",                 "Joji Kato",                "JPN")
Skater . add_skater ("keller",               "Erhard Keller",            "FRG")
Skater . add_skater ("kemkers",              "Gerard Kemkers",           "NED")
Skater . add_skater ("keulen deelstra",      "Atje Keulen-Deelstra",     "NED")
Skater . add_skater ("kikuchi",              "Ayaka Kikuchi",            "JPN")
Skater . add_skater ("klassen",              "Cindy Klassen",            "CAN")
Skater . add_skater ("kleine",               "Piet Kleine",              "NED")
Skater . add_skater ("klein",                "Kit Klein",                "USA")
Skater . add_skater ("kholshchevnikova",     "Zoya Kholshchevnikova",    "URS")
Skater . add_skater ("kodaira",              "Nao Kodaira",              "JPN")
Skater . add_skater ("kondakov",             "Yury Kondakov",            "URS")
Skater . add_skater ("kondakova",            "Sofya Kondakova",          "URS")
Skater . add_skater ("kongshaug",            "Peder Kongshaug",          "NOR")
Skater . add_skater ("kooiman",              "Ineke Kooiman-van Homoet", "NED")
Skater . add_skater ("kondakova",            "Sofya Kondakova",          "URS")
Skater . add_skater ("koskela",              "Pekka Koskela",            "FIN")
Skater . add_skater ("koss",                 "Johann Olav Koss",         "NOR")
Skater . add_skater ("kramer",               "Sven Kramer",              "NED")
Skater . add_skater ("kulikov",              "Yevgeny Kulikov",          "URS")
Skater . add_skater ("kulizhnikov",          "Pavel Kulizhnikov",        "RUS")
Skater . add_skater ("kuznetsova",           "Tamara Kuznetsova",        "URS")
Skater . add_skater ("kyou-hyuk",            "Lee Kyou-Hyuk",            "KOR")

Skater . add_skater ("landbeck",             "Liselotte Landbeck",       "AUT")
Skater . add_skater ("larsen",               "Roald Larsen",             "NOR")
Skater . add_skater ("le may",["1970-12-23", "Catriona Le May",
                               "1996-07-00", "Catriona Le May Doan"],    "CAN")
Skater . add_skater ("leeuwangh",            "Jakko Jan Leeuwangh",      "NED")
Skater . add_skater ("lehman",               "Emery Lehman",             "USA")
Skater . add_skater ("lesche",               "Vern\u{E9} Lesche",        "FIN")
Skater . add_skater ("lie",                  "Synn\u{F8}ve Lie",         "NOR")
Skater . add_skater ("liebrechts",           "Rudie Liebrechts",         "NED")
Skater . add_skater ("linkovesi",            "Leo Linkovesi",            "FIN")
Skater . add_skater ("lyoshkin",             "Viktor Lyoshkin",          "URS")

Skater . add_skater ("maier",                "Fred Anton Maier",         "NOR")
Skater . add_skater ("malkov",               "Igor Malkov",              "URS")
Skater . add_skater ("mamonov",              "Nikolay Mamonov",          "URS")
Skater . add_skater ("mantia",               "Joey Mantia",              "USA")
Skater . add_skater ("mathiesen",            "Charles Mathiesen",        "NOR")
Skater . add_skater ("mathisen",             "Oscar Mathisen",           "NOR")
Skater . add_skater ("marshall",             "Neal Marshall",            "CAN")
Skater . add_skater ("mauseth",              "Wilhelm Mauseth",          "NOR")
Skater . add_skater ("mey",                  "Uwe-Jens Mey",             "GDR")
Skater . add_skater ("mitscherlich",
                              ["1960-12-01", "Andrea Mitscherlich",
                               "1980-07-00", "Andrea Sch\u{F6}ne",
                               "1986-07-00", "Andrea Ehrig"],            "GDR")
Skater . add_skater ("miyabe",               "Yasunori Miyabe",          "JPN")
Skater . add_skater ("morrison",             "Denny Morrison",           "CAN")
Skater . add_skater ("mikhaylov",            "Yury Mikhaylov",           "URS")
Skater . add_skater ("mulder_grietje",       "Grietje Mulder",           "NED")
Skater . add_skater ("mulder_michel",        "Michel Mulder",            "NED")
Skater . add_skater ("muratov",              "Valery Muratov",           "URS")

Skater . add_skater ("naess",                "Alfred N\u{E6}ss",         "NOR")
Skater . add_skater ("nehringowa",           "Zofia Nehringowa",         "POL")
Skater . add_skater ("nesbitt",              "Christine Nesbitt",        "CAN")
Skater . add_skater ("nielsen",              "Halfan Nielsen",           "NOR")
Skater . add_skater ("niemann",        
                              ["1966-09-07", "Gunda Kleemann",
                               "1991-07-00", "Gunda Niemann",
                               "1997-07-11", "Gunda Niemann-Stirnemann"],"GDR")
Skater . add_skater ("niemczyk",             "El\u{17C}bieta Niemczyk",  "POL")
Skater . add_skater ("nilsen",               "Laila Schou Nilsen",       "NOR")
Skater . add_skater ("nilsson",              "Johnny Nilsson",           "NOR")
Skater . add_skater ("noake",                "Hiroyuki Noake",           "JPN")
Skater . add_skater ("nuis",                 "Kjeld Nuis",               "NED")

Skater . add_skater ("ogloblin",             "Dmitry Ogloblin",          "URS")
Skater . add_skater ("ostlund",              "Peter \u{D8}stlund",       "NOR")
Skater . add_skater ("overland",             "Kevin Overland",           "CAN")

Skater . add_skater ("pajor",                "Korn\u{E9}i Pajor",        "HUN")
Skater . add_skater ("parra",                "Derek Parra",              "USA")
Skater . add_skater ("pasveer",              "Alida Pasveer",            "NED")
Skater . add_skater ("pechstein",            "Claudia Pechstein",        "GDR")
Skater . add_skater ("pederson",             "Sverre Lunde Pederson",    "NOR")
Skater . add_skater ("pegov",                "Pagel Pegov",              "URS")
Skater . add_skater ("petrusyova",           "Natalya Petrusyova",       "URS")
Skater . add_skater ("pflug",                "Monika Pflug",             "FRG")
Skater . add_skater ("poel",                 "Niels van der Poel",       "SWE")
Skater . add_skater ("postma",               "Ids Postma",               "NED")
Skater . add_skater ("potts",                "Allan Potts",              "USA")

Skater . add_skater ("richardson",
                              ["1989-03-20", "Heather Richardson",
                               "2015-05-00", "Heather Richardson-Bergsma",],
                                                                         "USA")
Skater . add_skater ("ritsma",               "Rintje Ritsma",            "NED")
Skater . add_skater ("roest",                "Patrick Roest",            "NED")
Skater . add_skater ("romanova",             "Galina Romanova",          "URS")
Skater . add_skater ("romme",                "Gianni Romme",             "NED")
Skater . add_skater ("rothenburger",         "Christa Rothenburger",     "GDR")
Skater . add_skater ("rylova",               "Tamara Rylova",            "URS")

Skater . add_skater ("sablikova",    "Martina S\u{E1}bl\u{ED}kov\u{E1}", "CZE")
Skater . add_skater ("sadchikova",           "Lyubov Sadchikova",        "URS")
Skater . add_skater ("safronov",             "Aleksandr Safronov",       "URS")
Skater . add_skater ("sakunenko",            "Dmitry Sakunenko",         "URS")
Skater . add_skater ("sato",                 "Ayano Sato",               "JPN")
Skater . add_skater ("sang-hwa",             "Lee Sang-hwa",             "KOR")
Skater . add_skater ("schenk",               "Ard Schenk",               "NED")
Skater . add_skater ("schleiermacher",       "Ruth Schleiermacher",      "GDR")
Skater . add_skater ("schonbrunn",
                              ["1961-06-01", "Gabi Sch\u{F6}nbrunn",
                               "1987-07-00", "Gabi Zange",],             "GDR")
Skater . add_skater ("schussler",            "Brittany Schussler",       "CAN")
Skater . add_skater ("schut",                "Ans Schut",                "NED")
Skater . add_skater ("scott",                "Kevin Scott",              "CAN")
Skater . add_skater ("selikhova",            "Lidiya Selikhova",         "URS")
Skater . add_skater ("sergeyev",             "Yury Sergeyev",            "URS")
Skater . add_skater ("seyffarth",            "\u{C5}ke Seyffarth",       "SWE")
Skater . add_skater ("shasherin",            "Viktor Shasherin",         "URS")
Skater . add_skater ("shchegoleyeva",        "Khalida Shchegoleyeva",    "URS")
Skater . add_skater ("shilkov",              "Boris Shilkov",            "URS")
Skater . add_skater ("shimizu",              "Hiroyasu Shimizu",         "JPN")
Skater . add_skater ("shirahata",            "Keiji Shirahata",          "JPN")
Skater . add_skater ("sidorova",             "Tatyana Sidorova",         "URS")
Skater . add_skater ("sighel",               "Roberto Sighel",           "ITA")
Skater . add_skater ("skoblikova",           "Lidiya Skoblikova",        "URS")
Skater . add_skater ("sondral",           "\u{C5}dne S\u{F8}ndr\u{E5}l", "NOR")
Skater . add_skater ("staksrud",             "Michael Staksrud",         "NOR")
Skater . add_skater ("stam",                 "Marieke Stam",             "NED")
Skater . add_skater ("statkevich",           "Nina Statkevich",          "URS")
Skater . add_skater ("stensen",              "Sten Stensen",             "NOR")
Skater . add_skater ("stenshjemmet",         "Kay Arne Stenshjemmet",    "NOR")
Skater . add_skater ("stepanskaya",          "Galina Stepanskaya",       "URS")
Skater . add_skater ("stiansen",             "Svein-Erik Stiansen",      "NOR")
Skater . add_skater ("stiepl",               "Max Stiepl",               "AUT")
Skater . add_skater ("storholt",             "Jan Egil Storholt",        "NOR")
Skater . add_skater ("strom_harald",         "Harald Str\u{F8}m",        "NOR")
Skater . add_skater ("strom_kristian",       "Kristian Str\u{F8}m",      "NOR")
Skater . add_skater ("strunnikov",           "Nikolay Strunnikov",       "RU1")
Skater . add_skater ("sundstrom",            "Becky Sundstrom",          "USA")
Skater . add_skater ("suzuki",               "Keiichi Suzuki",           "JPN")
Skater . add_skater ("swider",               "Nancy Swider",             "USA")

Skater . add_skater ("tabata",               "Maki Tabata",              "JPN")
Skater . add_skater ("takagi miho",          "Miho Takagi",              "JPN")
Skater . add_skater ("takagi nana",          "Nana Takagi",              "JPN")
Skater . add_skater ("thomas",               "Annemarie Thomas",         "NED")
Skater . add_skater ("thomassen",            "Magne Thomassen",          "NOR")
Skater . add_skater ("thometz",              "Nick Thometz",             "USA")
Skater . add_skater ("thorvaldsen",          "Randi Thorvaldsen",        "NOR")
Skater . add_skater ("thunberg",             "Clas Thunberg",            "FIN")
Skater . add_skater ("timmer",               "Marianne Timmer",          "NED")
Skater . add_skater ("titova",               "Lyudmila Titova",          "URS")
Skater . add_skater ("traub",                "G\u{FC}nther Traub",       "FRG")
Skater . add_skater ("tuitert",              "Mark Tuitert",             "NED")

Skater . add_skater ("uytdehaage",           "Jochem Uytdehaage",        "NED")

Skater . add_skater ("varlamov",             "Viktor Varlamov",          "URS")
Skater . add_skater ("velde",                "Gerard van Velde",         "NED")
Skater . add_skater ("veldkamp",             "Bart Veldkamp",            "BEL")
Skater . add_skater ("verbij",               "Kai Verbij",               "NED")
Skater . add_skater ("verheijen",            "Carl Verheijen",           "NED")
Skater . add_skater ("verkerk",              "Kees Verkerk",             "NED")
Skater . add_skater ("vikander",             "Johan Vikander",           "FIN")
Skater . add_skater ("visser",               "Leo Visser",               "NED")
Skater . add_skater ("volker",               "Sabine V\u{F6}lker",       "GER")
Skater . add_skater ("vorobyeva",            "Khalida Vorobyeva",        "URS")
Skater . add_skater ("voronina",             "Natalya Voronina",         "RUS")
Skater . add_skater ("voronina artamonova",  "Inga Voronina-Artamonova", "URS")
Skater . add_skater ("vries",                "Douwe de Vries",           "NED")

Skater . add_skater ("wennemars",            "Erben Wennemars",          "NED")
Skater . add_skater ("witty",                "Chris Witty",              "USA")
Skater . add_skater ("wolf",                 "Jenny Wolf",               "GER")
Skater . add_skater ("wotherspoon",          "Jeremy Wotherspoon",       "CAN")

Skater . add_skater ("young",                "Sheila Young",             "USA")
Skater . add_skater ("yuskov",               "Denis Yuskov",             "RUS")

Skater . add_skater ("zandstra",             "Falko Zandstra",           "NED")
Skater . add_skater ("zhelezovsky",          "Igor Zhelezovsky",         "URS")
Skater . add_skater ("zhukova",              "Rimma Zhukova",            "URS")

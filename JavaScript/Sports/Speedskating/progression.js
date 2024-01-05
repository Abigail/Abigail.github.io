let __progression = []

const M     = "men"
const W     = "women"

const BIG   = -1
const SMALL = -2
const MINI  = -3
const SPR   = -4
const D500  = -5

const genders   = [M, W]
const distances = [500, 1000, 1500, 3000, 5000, 10000,
                   BIG, SMALL, MINI, SPR, D500]

function add_record (gender, distance, skater, time, date, rink, city,
                     extra = {}) {
    const [year, month, mday] = date . split ("-") . map (x => +x)
    let new_entry = {
        gender:    gender,
        distance:  distance,
        skater:    skater,
        time:      time,
        date:      date,
        year:      year,
        month:     month,
        mday:      mday,
        season:    month >= 8 ? year - 1 : year,
        rink:      rink,
    }
    Object . keys (extra) . forEach ((key) => {
        new_entry [key] = extra [key]
    })
    __progression . push (new_entry)
}

//
// Return the progression list based on filters:
//
//
function progression (filters) {
    let result = __progression
    Object . keys (filters)
           . forEach ((key) => {
        if (filters [key]) {
            if (key == "season") {
                result = result . filter (item => item [key] >= filters [key])
            }
            else {
                result = result . filter (item => item [key] == filters [key])
            }
        }
    })
    return result
}
           
//
// Men   500m
//
add_record (M,   500, "grunden",     "0:50.8",  "1891-02-28", "neglingeviken")
add_record (M,   500, "halvorsen",   "0:50.2",  "1892-02-28", "hamar mjosen")
add_record (M,   500, "naess",       "0:49.4",  "1893-02-05", "hamar mjosen")
add_record (M,   500, "halvorsen",   "0:48.0",  "1893-02-26", "hamar mjosen")
add_record (M,   500, "fredriksen",  "0:47.8",  "1894-01-21", "gamle")

add_record (M,   500, "halvorsen",   "0:47.0",  "1894-02-24", "hamar mjosen")
add_record (M,   500, "mauseth",     "0:46.8",  "1895-02-03", "trondheim_kal")
add_record (M,   500, "ostlund",     "0:46.6",  "1897-02-07", "trondheim_kal")
add_record (M,   500, "ostlund",     "0:45.2",  "1900-02-10", "davos")
add_record (M,   500, "gundersen",   "0:44.8",  "1906-01-27", "davos")

add_record (M,   500, "vikander",    "0:44.4",  "1908-02-09", "davos")
add_record (M,   500, "mathisen",    "0:44.2",  "1912-02-17", "gamle")
add_record (M,   500, "mathisen",    "0:44.0",  "1913-03-16", "hamar mjosen")
add_record (M,   500, "mathisen",    "0:43.7",  "1914-01-10", "gamle")
add_record (M,   500, "mathisen",    "0:43.4",  "1914-01-17", "davos")

add_record (M,   500, "larsen",      "0:43.1",  "1928-02-04", "davos")
add_record (M,   500, "thunberg",    "0:42.8",  "1929-01-19", "davos")
add_record (M,   500, "thunberg",    "0:42.6",  "1931-01-13", "st. moritz")
add_record (M,   500, "engnestangen","0:42.5",  "1933-01-21", "davos")
add_record (M,   500, "potts",       "0:42.4",  "1936-01-18", "bislett")

add_record (M,   500, "engnestangen","0:42.3",  "1937-01-30", "davos")
add_record (M,   500, "engnestangen","0:41.8",  "1938-02-05", "davos")
add_record (M,   500, "sergeyev",    "0:41.7",  "1952-01-06", "medeo")
add_record (M,   500, "sergeyev",    "0:41.2",  "1952-01-19", "medeo")
add_record (M,   500, "sergeyev",    "0:40.9",  "1953-01-25", "medeo")

add_record (M,   500, "sergeyev",    "0:40.8",  "1955-01-19", "medeo")
add_record (M,   500, "grishin",     "0:40.2",  "1956-01-22", "misurina")
add_record (M,   500, "grishin",     "0:40.2",  "1956-01-28", "misurina")
add_record (M,   500, "grishin",     "0:39.6",  "1963-01-27", "medeo")
add_record (M,   500, "grishin",     "0:39.5",  "1963-01-28", "medeo")

add_record (M,   500, "keller",      "0:39.2",  "1968-01-28", "inzell")
add_record (M,   500, "suzuki",      "0:39.2",  "1969-03-01", "inzell")
add_record (M,   500, "muratov",     "0:39.09", "1970-01-09", "medeo")
add_record (M,   500, "gulyayev_boris","0:39.03","1970-01-13","medeo")
add_record (M,   500, "borjes",      "0:38.9",  "1970-01-18", "davos")

add_record (M,   500, "muratov",     "0:38.99", "1970-01-24", "medeo")
add_record (M,   500, "borjes",      "0:38.87", "1970-01-25", "medeo")
add_record (M,   500, "muratov",     "0:38.73", "1970-01-29", "medeo")
add_record (M,   500, "suzuki",      "0:38.71", "1970-03-07", "inzell")
add_record (M,   500, "borjes",      "0:38.46", "1970-03-08", "inzell")

add_record (M,   500, "keller",      "0:38.42", "1971-03-14", "inzell")
add_record (M,   500, "keller",      "0:38.30", "1972-01-02", "inzell")
add_record (M,   500, "linkovesi",   "0:38.0",  "1972-01-08", "davos")
add_record (M,   500, "keller",      "0:38.0",  "1972-03-04", "inzell")
add_record (M,   500, "efskind",     "0:38.0",  "1973-01-13", "davos")

add_record (M,   500, "kulikov",     "0:37.99", "1975-03-15", "medeo")
add_record (M,   500, "kulikov",     "0:37.97", "1975-03-16", "medeo")
add_record (M,   500, "muratov",     "0:37.85", "1975-03-18", "medeo")
add_record (M,   500, "kulikov",     "0:37.20", "1975-03-28", "medeo")
add_record (M,   500, "kulikov",     "0:37.00", "1975-03-29", "medeo")

add_record (M,   500, "kulikov",     "0:36.91", "1981-03-28", "medeo")
add_record (M,   500, "pegov",       "0:36.68", "1983-03-25", "medeo")
add_record (M,   500, "pegov",       "0:36.57", "1983-03-26", "medeo")
add_record (M,   500, "thometz",     "0:36.55", "1987-03-19", "thialf")
add_record (M,   500, "mey",         "0:36.45", "1988-02-14", "calgary")

add_record (M,   500, "mey",         "0:36.43", "1992-01-19", "davos")
add_record (M,   500, "jansen",      "0:36.41", "1992-01-25", "davos")
add_record (M,   500, "jansen",      "0:36.41", "1993-03-19", "calgary")
add_record (M,   500, "jansen",      "0:36.02", "1993-03-20", "calgary")
add_record (M,   500, "jansen",      "0:35.92", "1993-12-04", "hamar")

add_record (M,   500, "jansen",      "0:35.76", "1994-01-30", "calgary")
add_record (M,   500, "shimizu",     "0:35.39", "1996-03-02", "calgary")
add_record (M,   500, "shimizu",     "0:35.36", "1998-03-28", "calgary")
add_record (M,   500, "shimizu",     "0:34.82", "1998-03-28", "calgary")
add_record (M,   500, "wotherspoon", "0:34.76", "1999-02-20", "calgary")

add_record (M,   500, "wotherspoon", "0:34.63", "2000-01-29", "calgary")
add_record (M,   500, "shimizu",     "0:34.32", "2001-03-10", "salt lake city")
add_record (M,   500, "kato",        "0:34.30", "2005-11-19", "salt lake city")
add_record (M,   500, "kang-seok",   "0:34.25", "2007-03-09", "salt lake city")
add_record (M,   500, "wotherspoon", "0:34.03", "2007-11-09", "salt lake city")

add_record (M,   500, "kulizhnikov", "0:34.00", "2015-11-15", "calgary")
add_record (M,   500, "kulizhnikov", "0:33.98", "2015-11-20", "salt lake city")
add_record (M,   500, "kulizhnikov", "0:33.61", "2019-03-09", "salt lake city")

//
// Men  1000m
//
add_record (M,  1000, "ostlund",     "1:38.0",  "1899-01-16", "davos")
add_record (M,  1000, "ostlund",     "1:34.0",  "1900-02-10", "davos")
add_record (M,  1000, "mathisen",    "1:31.8",  "1909-01-30", "davos")
add_record (M,  1000, "thunberg",    "1:28.4",  "1930-01-11", "davos")
add_record (M,  1000, "grishin",     "1:22.8",  "1955-01-12", "medeo")
add_record (M,  1000, "schenk",      "1:20.6",  "1967-02-28", "inzell")
add_record (M,  1000, "schenk",      "1:20.6",  "1968-02-05", "davos")
add_record (M,  1000, "eriksen",     "1:20.5",  "1968-03-09", "inzell")
add_record (M,  1000, "eriksen",     "1:20.3",  "1969-02-08", "inzell")
add_record (M,  1000, "eriksen",     "1:19.5",  "1969-03-01", "inzell")
add_record (M,  1000, "muratov",     "1:19.2",  "1970-01-24", "medeo")
add_record (M,  1000, "eriksen",     "1:19.2",  "1971-01-15", "davos")
add_record (M,  1000, "schenk",      "1:18.8",  "1971-02-20", "inzell")
add_record (M,  1000, "keller",      "1:18.5",  "1972-03-04", "inzell")
add_record (M,  1000, "efskind",     "1:17.6",  "1973-01-13", "davos")
add_record (M,  1000, "safronov",    "1:17.23", "1974-04-11", "medeo")
add_record (M,  1000, "muratov",     "1:16.92", "1975-03-17", "medeo")
add_record (M,  1000, "kulikov",     "1:15.70", "1976-03-20", "medeo")
add_record (M,  1000, "kulikov",     "1:15.33", "1977-03-19", "medeo")
add_record (M,  1000, "heiden_eric", "1:14.99", "1978-03-12", "savalen")
add_record (M,  1000, "heiden_eric", "1:14.99", "1979-02-17", "inzell")
add_record (M,  1000, "heiden_eric", "1:13.60", "1980-01-13", "davos")
add_record (M,  1000, "boucher",     "1:13.39", "1981-01-31", "davos")
add_record (M,  1000, "pegov",       "1:12.58", "1983-03-25", "medeo")
add_record (M,  1000, "zhelezovsky", "1:12.58", "1989-02-25", "thialf")
add_record (M,  1000, "scott",       "1:12.54", "1993-12-17", "calgary")
add_record (M,  1000, "jansen",      "1:12.43", "1994-02-18", "hamar")
add_record (M,  1000, "miyabe",      "1:12.37", "1994-03-26", "calgary")
add_record (M,  1000, "bouchard",    "1:12.27", "1995-12-22", "calgary")
add_record (M,  1000, "overland",    "1:12.19", "1995-12-23", "calgary")
add_record (M,  1000, "horii",       "1:11.67", "1996-03-01", "calgary")
add_record (M,  1000, "horii",       "1:10.63", "1997-11-22", "calgary")
add_record (M,  1000, "kyou-hyuk",   "1:10.42", "1997-11-23", "calgary")
add_record (M,  1000, "wotherspoon", "1:10.16", "1997-12-29", "calgary")
add_record (M,  1000, "bouchard",    "1:09.60", "1998-03-29", "calgary")
add_record (M,  1000, "wotherspoon", "1:09.09", "1999-01-15", "calgary")
add_record (M,  1000, "wotherspoon", "1:08.66", "1999-02-20", "calgary")
add_record (M,  1000, "bos_jan",     "1:08.55", "1999-02-21", "calgary")
add_record (M,  1000, "wotherspoon", "1:08.49", "2000-01-12", "calgary")
add_record (M,  1000, "wotherspoon", "1:08.35", "2000-03-18", "calgary")
add_record (M,  1000, "ireland",     "1:08.34", "2001-03-03", "calgary")
add_record (M,  1000, "wotherspoon", "1:08.28", "2001-03-11", "salt lake city")
add_record (M,  1000, "wotherspoon", "1:07.72", "2001-12-01", "salt lake city")
add_record (M,  1000, "velde",       "1:07.18", "2002-02-16", "salt lake city")
add_record (M,  1000, "davis",       "1:07.03", "2005-11-20", "salt lake city")
add_record (M,  1000, "koskela",     "1:07.00", "2007-11-10", "salt lake city")
add_record (M,  1000, "davis",       "1:06.42", "2009-03-07", "salt lake city")
add_record (M,  1000, "nuis",        "1:06.18", "2019-03-09", "salt lake city")
add_record (M,  1000, "kulizhnikov", "1:05.69", "2020-02-15", "salt lake city")

//
// Men  1500m
//
add_record (M,  1500, "eden",        "2:35.0",  "1893-01-11", "paterswolde")
add_record (M,  1500, "ostlund",     "2:32.6",  "1893-02-25", "hamar mjosen")
add_record (M,  1500, "ostlund",     "2:31.4",  "1894-02-24", "hamar mjosen")
add_record (M,  1500, "halvorsen",   "2:29.6",  "1894-02-24", "hamar mjosen")
add_record (M,  1500, "ostlund",     "2:28.8",  "1894-02-25", "hamar mjosen")
add_record (M,  1500, "eden",        "2:25.4",  "1895-02-23", "hamar mjosen")
add_record (M,  1500, "ostlund",     "2:23.6",  "1898-02-07", "davos")
add_record (M,  1500, "ostlund",     "2:22.6",  "1900-02-11", "davos")
add_record (M,  1500, "mathisen",    "2:20.8",  "1908-02-09", "davos")
add_record (M,  1500, "mathisen",    "2:20.6",  "1910-01-10", "davos")
add_record (M,  1500, "mathisen",    "2:19.4",  "1914-01-11", "frogner")
add_record (M,  1500, "mathisen",    "2:17.4",  "1914-01-18", "davos")
add_record (M,  1500, "staksrud",    "2:14.9",  "1937-01-31", "davos")
add_record (M,  1500, "engnestangen","2:13.8",  "1939-01-29", "davos")
add_record (M,  1500, "chaykin",     "2:12.9",  "1952-01-20", "medeo")
add_record (M,  1500, "grishin",     "2:09.8",  "1955-01-10", "medeo")
add_record (M,  1500, "mikhaylov",   "2:09.1",  "1956-01-20", "davos")
add_record (M,  1500, "mikhaylov",   "2:08.6",  "1956-01-30", "misurina")
add_record (M,  1500, "jarvinen",    "2:06.3",  "1959-03-01", "squaw valley")
add_record (M,  1500, "schenk",      "2:06.2",  "1966-01-26", "davos")
add_record (M,  1500, "schenk",      "2:05.3",  "1966-01-30", "inzell")
add_record (M,  1500, "verkerk",     "2:03.9",  "1967-02-26", "inzell")
add_record (M,  1500, "thomassen",   "2:02.5",  "1968-02-05", "davos")
add_record (M,  1500, "verkerk",     "2:02.0",  "1969-02-09", "davos")
add_record (M,  1500, "verkerk",     "2:01.9",  "1970-03-08", "inzell")
add_record (M,  1500, "schenk",      "1:58.7",  "1971-01-16", "davos")
add_record (M,  1500, "helden",      "1:55.61", "1976-03-13", "inzell")
add_record (M,  1500, "storholt",    "1:55.18", "1977-03-23", "medeo")
add_record (M,  1500, "heiden_eric", "1:54.79", "1980-01-19", "davos")
add_record (M,  1500, "zhelezovsky", "1:54.26", "1983-03-26", "medeo")
add_record (M,  1500, "bozhyev",     "1:53.26", "1984-03-24", "medeo")
add_record (M,  1500, "gulyayev_nikolay","1:52.70","1987-02-15","thialf")
add_record (M,  1500, "zhelezovsky", "1:52.50", "1987-12-05", "calgary")
add_record (M,  1500, "hoffmann",    "1:52.06", "1988-02-20", "calgary")
add_record (M,  1500, "ritsma",      "1:51.60", "1994-01-08", "hamar")
add_record (M,  1500, "koss",        "1:51.29", "1994-02-16", "hamar")
add_record (M,  1500, "noake",       "1:50.61", "1996-03-02", "calgary")
add_record (M,  1500, "boutiette",   "1:50.09", "1997-03-15", "calgary")
add_record (M,  1500, "marshall",    "1:50.05", "1997-03-16", "calgary")
add_record (M,  1500, "postma",      "1:49.81", "1997-11-29", "berlin")
add_record (M,  1500, "overland",    "1:49.07", "1997-11-29", "calgary")
add_record (M,  1500, "ritsma",      "1:48.88", "1997-12-20", "thialf")
add_record (M,  1500, "sondral",     "1:47.87", "1998-02-12", "nagano")
add_record (M,  1500, "sondral",     "1:46.43", "1998-03-28", "calgary")
add_record (M,  1500, "leeuwangh",   "1:45.56", "2000-01-29", "calgary")
add_record (M,  1500, "kyou-hyuk",   "1:45.20", "2001-03-16", "calgary")
add_record (M,  1500, "parra",       "1:43.95", "2002-02-19", "salt lake city")
add_record (M,  1500, "davis",       "1:43.33", "2005-01-09", "salt lake city")
add_record (M,  1500, "hedrick",     "1:42.78", "2005-11-18", "salt lake city")
add_record (M,  1500, "davis",       "1:42.68", "2006-03-19", "calgary")
add_record (M,  1500, "davis",       "1:42.32", "2007-03-04", "calgary")
add_record (M,  1500, "wennemars",   "1:42.32", "2007-11-09", "salt lake city")
add_record (M,  1500, "morrison",    "1:42.01", "2008-03-14", "calgary")
add_record (M,  1500, "davis",       "1:41.80", "2009-03-06", "salt lake city")
add_record (M,  1500, "davis",       "1:41.04", "2009-12-11", "salt lake city")
add_record (M,  1500, "yuskov",      "1:41.02", "2017-12-09", "salt lake city")
add_record (M,  1500, "nuis",        "1:40.17", "2019-03-10", "salt lake city")

//
// Men  3000m
//
add_record (M,  3000, "thunberg",    "5:19.2",  "1932-01-08", "davos")
add_record (M,  3000, "staksrud",    "4:59.1",  "1933-02-25", "hamar stadion")
add_record (M,  3000, "ballangrud",  "4:49.6",  "1935-01-29", "davos")
add_record (M,  3000, "seyffarth",   "4:45.6",  "1942-02-03", "davos")
add_record (M,  3000, "huiskes",     "4:40.2",  "1953-01-24", "davos")
add_record (M,  3000, "johannesen",  "4:33.9",  "1963-01-12", "tonsberg")
add_record (M,  3000, "eriksen",     "4:33.0",  "1963-02-28", "bislett")
add_record (M,  3000, "nilsson",     "4:27.6",  "1963-03-23", "tolga")
add_record (M,  3000, "antson",      "4:27.3",  "1964-02-11", "bislett")
add_record (M,  3000, "liebrechts",  "4:26.8",  "1965-02-25", "bislett")
add_record (M,  3000, "schenk",      "4:26.2",  "1966-01-29", "inzell")
add_record (M,  3000, "schenk",      "4:18.4",  "1967-02-25", "inzell")
add_record (M,  3000, "maier",       "4:17.5",  "1968-03-07", "inzell")
add_record (M,  3000, "fornaess",    "4:17.4",  "1969-01-28", "cortina")
add_record (M,  3000, "bols",        "4:16.4",  "1970-01-27", "cortina")
add_record (M,  3000, "schenk",      "4:12.6",  "1971-01-25", "davos")
add_record (M,  3000, "schenk",      "4:08.3",  "1972-03-02", "inzell")
add_record (M,  3000, "heiden_eric", "4:07.01", "1978-03-02", "inzell")
add_record (M,  3000, "heiden_eric", "4:06.91", "1979-03-18", "savalen")
add_record (M,  3000, "ogloblin",    "4:04.06", "1979-03-28", "medeo")
add_record (M,  3000, "hoffmann",    "4:03.31", "1985-01-12", "davos")
add_record (M,  3000, "shasherin",   "4:03.22", "1986-01-18", "davos")
add_record (M,  3000, "visser",      "3:59.27", "1987-03-19", "thialf")
add_record (M,  3000, "koss",        "3:57.52", "1990-03-13", "thialf")
add_record (M,  3000, "bos_thomas",  "3:56.16", "1992-04-03", "calgary")
add_record (M,  3000, "jong",        "3:53.06", "1996-03-08", "calgary")
add_record (M,  3000, "beulenkamp",  "3:52.67", "1998-02-25", "thialf")
add_record (M,  3000, "veldkamp",    "3:48.91", "1998-03-20", "calgary")
add_record (M,  3000, "elm",         "3:45.23", "1999-03-19", "calgary")
add_record (M,  3000, "elm",         "3:43.76", "2000-03-17", "calgary")
add_record (M,  3000, "romme",       "3:42.75", "2000-08-11", "calgary")
add_record (M,  3000, "hedrick",     "3:39.02", "2005-03-10", "calgary")
add_record (M,  3000, "ervik",       "3:37.28", "2005-11-05", "calgary")

//
// Men  5000m
//
add_record (M,  5000, "fredriksen",  "9:29.8",  "1890-03-02", "neglingeviken")
add_record (M,  5000, "halvorsen",   "9:10.2",  "1892-02-28", "hamar mjosen")
add_record (M,  5000, "halvorsen",   "9:07.2",  "1893-02-26", "hamar mjosen")
add_record (M,  5000, "eden",        "8:37.6",  "1894-02-25", "hamar mjosen")
add_record (M,  5000, "strunnikov",  "8:37.2",  "1911-02-04", "gamle")
add_record (M,  5000, "mathisen",    "8:36.6",  "1914-01-17", "davos")
add_record (M,  5000, "mathisen",    "8:36.3",  "1916-01-23", "frogner")
add_record (M,  5000, "strom_kristian",
                                     "8:33.7",  "1917-02-04", "trondheim_oya")
add_record (M,  5000, "strom_harald","8:27.7",  "1921-02-21", "frogner")
add_record (M,  5000, "strom_harald","8:26.5",  "1922-02-18", "frogner")
add_record (M,  5000, "ballangrud",  "8:24.2",  "1929-01-19", "davos")
add_record (M,  5000, "ballangrud",  "8:21.6",  "1930-01-11", "davos")
add_record (M,  5000, "heiden_siem", "8:19.2",  "1933-01-22", "davos")
add_record (M,  5000, "stiepl",      "8:18.9",  "1934-02-03", "hamar stadion")
add_record (M,  5000, "ballangrud",  "8:17.2",  "1936-01-18", "bislett")
add_record (M,  5000, "seyffarth",   "8:13.7",  "1941-02-03", "davos")
add_record (M,  5000, "pajor",       "8:13.5",  "1949-02-05", "davos")
add_record (M,  5000, "andersen",    "8:07.3",  "1951-01-13", "trondheim_oya")
add_record (M,  5000, "mamonov",     "8:03.7",  "1952-01-23", "medeo")
add_record (M,  5000, "shilkov",     "7:45.6",  "1955-01-09", "medeo")
add_record (M,  5000, "johannesen",  "7:37.8",  "1963-01-26", "bislett")
add_record (M,  5000, "nilsson",     "7:34.3",  "1963-02-23", "karuizawa")
add_record (M,  5000, "nilsson",     "7:33.2",  "1965-02-13", "bislett")
add_record (M,  5000, "maier",       "7:28.1",  "1965-03-04", "notodden")
add_record (M,  5000, "verkerk",     "7:26.6",  "1967-02-26", "inzell")
add_record (M,  5000, "maier",       "7:26.2",  "1968-01-07", "deventer")
add_record (M,  5000, "maier",       "7:22.4",  "1968-02-15", "grenoble")
add_record (M,  5000, "maier",       "7:16.7",  "1968-03-09", "inzell")
add_record (M,  5000, "verkerk",     "7:13.2",  "1969-03-01", "inzell")
add_record (M,  5000, "schenk",      "7:12.0",  "1971-03-13", "inzell")
add_record (M,  5000, "schenk",      "7:09.8",  "1972-03-04", "inzell")
add_record (M,  5000, "kondakov",    "7:08.92", "1975-03-24", "medeo")
add_record (M,  5000, "helden",      "7:07.82", "1976-01-30", "davos")
add_record (M,  5000, "kleine",      "7:04.86", "1976-03-05", "inzell")
add_record (M,  5000, "kleine",      "7:02.38", "1976-03-12", "inzell")
add_record (M,  5000, "stenshjemmet","6:56.9",  "1977-03-19", "medeo")
add_record (M,  5000, "baranov",     "6:54.66", "1982-03-18", "medeo")
add_record (M,  5000, "shasherin",   "6:49.15", "1984-03-23", "medeo")
add_record (M,  5000, "visser",      "6:47.01", "1987-02-14", "thialf")
add_record (M,  5000, "karlstad",    "6:45.44", "1987-11-22", "thialf")
add_record (M,  5000, "karlstad",    "6:43.59", "1987-12-04", "calgary")
add_record (M,  5000, "koss",        "6:41.73", "1991-02-09", "thialf")
add_record (M,  5000, "koss",        "6:38.77", "1993-01-22", "thialf")
add_record (M,  5000, "koss",        "6:36.57", "1993-03-13", "thialf")
add_record (M,  5000, "koss",        "6:35.53", "1993-12-04", "hamar")
add_record (M,  5000, "koss",        "6:34.96", "1994-02-13", "hamar")
add_record (M,  5000, "romme",       "6:30.63", "1997-12-07", "thialf")
add_record (M,  5000, "romme",       "6:22.20", "1998-02-08", "nagano")
add_record (M,  5000, "romme",       "6:21.49", "1998-03-27", "calgary")
add_record (M,  5000, "romme",       "6:18.72", "2000-01-30", "calgary")
add_record (M,  5000, "uytdehaage",  "6:14.66", "2002-02-09", "salt lake city")
add_record (M,  5000, "hedrick",     "6:09.68", "2005-11-13", "calgary")
add_record (M,  5000, "kramer",      "6:08.78", "2005-11-19", "salt lake city")
add_record (M,  5000, "kramer",      "6:07.48", "2007-03-03", "calgary")
add_record (M,  5000, "fabris",      "6:07.40", "2007-11-10", "salt lake city")
add_record (M,  5000, "kramer",      "6:03.32", "2007-11-17", "calgary")
add_record (M,  5000, "bloemen",     "6:01.86", "2017-12-10", "salt lake city")
add_record (M,  5000, "poel",        "6:01.56", "2021-12-03", "salt lake city")

//
// Men 10000m
//
add_record (M, 10000, "fredriksen", "20:21.4",  "1893-01-14", "museumplein")
add_record (M, 10000, "nielsen",    "19:47.4",  "1893-02-13", "neglingeviken")
add_record (M, 10000, "ericson",    "19:22.8",  "1894-01-07", "neglingeviken")
add_record (M, 10000, "eden",       "19:12.4",  "1894-02-10", "neglingeviken")
add_record (M, 10000, "eden",       "17:56.0",  "1895-02-23", "hamar mjosen")
add_record (M, 10000, "ostlund",    "17:50.6",  "1900-02-11", "davos")
add_record (M, 10000, "mathisen",   "17:46.3",  "1912-02-18", "gamle")
add_record (M, 10000, "mathisen",   "17:36.4",  "1913-01-25", "trondheim_oya")
add_record (M, 10000, "mathisen",   "17:22.6",  "1913-02-01", "gamle")
add_record (M, 10000, "carlsen",    "17:17.4",  "1928-02-05", "davos")
add_record (M, 10000, "ballangrud", "17:14.4",  "1938-02-06", "davos")
add_record (M, 10000, "mathiesen",  "17:01.5",  "1940-03-03", "hamar stadion")
add_record (M, 10000, "andersen",   "16:57.4",  "1949-02-06", "davos")
add_record (M, 10000, "andersen",   "16:51.4",  "1952-01-27", "gjovik")
add_record (M, 10000, "andersen",   "16:32.6",  "1952-02-10", "hamar stadion")
add_record (M, 10000, "johannesen", "15:46.6",  "1960-02-27", "squaw valley")
add_record (M, 10000, "nilsson",    "15:33.0",  "1963-02-24", "karuizawa")
add_record (M, 10000, "maier",      "15:32.2",  "1966-02-06", "bislett")
add_record (M, 10000, "maier",      "15:31.8",  "1967-02-28", "inzell")
add_record (M, 10000, "maier",      "15:29.5",  "1968-01-21", "horten")
add_record (M, 10000, "maier",      "15:20.3",  "1968-01-28", "bislett")
add_record (M, 10000, "guttormsen", "15:16.1",  "1969-03-10", "inzell")
add_record (M, 10000, "verkerk",    "15:03.6",  "1969-01-26", "inzell")
add_record (M, 10000, "schenk",     "15:01.6",  "1971-02-14", "goteborg")
add_record (M, 10000, "schenk",     "14:55.9",  "1971-03-14", "inzell")
add_record (M, 10000, "varlamov",   "14:52.73", "1975-03-25", "medeo")
add_record (M, 10000, "stensen",    "14:50.31", "1976-01-25", "bislett")
add_record (M, 10000, "kleine",     "14:43.92", "1976-03-13", "inzell")
add_record (M, 10000, "stensen",    "14:38.08", "1976-03-21", "medeo")
add_record (M, 10000, "lyoshkin",   "14:34.33", "1977-04-03", "medeo")
add_record (M, 10000, "heiden_eric","14:28.13", "1980-02-23", "lake placid")
add_record (M, 10000, "ogloblin",   "14:26.71", "1980-03-29", "medeo")
add_record (M, 10000, "gustafson",  "14:23.59", "1982-01-31", "bislett")
add_record (M, 10000, "malkov",     "14:21.51", "1984-03-24", "medeo")
add_record (M, 10000, "karlstad",   "14:12.14", "1986-02-16", "inzell")
add_record (M, 10000, "karlstad",   "14:03.92", "1987-02-15", "thialf")
add_record (M, 10000, "karlstad",   "13:48.51", "1987-12-06", "calgary")
add_record (M, 10000, "gustafson",  "13:48.20", "1988-02-21", "calgary")
add_record (M, 10000, "koss",       "13:43.54", "1991-02-10", "thialf")
add_record (M, 10000, "koss",       "13:30.55", "1994-02-20", "hamar")
add_record (M, 10000, "romme",      "13:15.33", "1998-02-17", "nagano")
add_record (M, 10000, "romme",      "13:08.71", "1998-03-29", "calgary")
add_record (M, 10000, "romme",      "13:03.40", "2000-11-16", "thialf")
add_record (M, 10000, "uytdehaage", "12:58.92", "2002-02-22", "salt lake city")
add_record (M, 10000, "verheijen",  "12:57.92", "2005-12-04", "thialf");
add_record (M, 10000, "hedrick",    "12:55.11", "2005-12-31", "salt lake city")
add_record (M, 10000, "kramer",     "12:51.60", "2006-03-19", "calgary")
add_record (M, 10000, "kramer",     "12:49.88", "2007-02-11", "thialf")
add_record (M, 10000, "kramer",     "12:41.69", "2007-03-10", "salt lake city")
add_record (M, 10000, "bloemen",    "12:36.30", "2015-11-21", "salt lake city")
add_record (M, 10000, "fish",       "12:33.86", "2020-02-14", "salt lake city")
add_record (M, 10000, "poel",       "12:32.95", "2021-02-14", "thialf")
add_record (M, 10000, "poel",       "12:30.74", "2022-02-11", "beijing")


//
// Men big combination
//
add_record (M,   BIG, "farstad",     "188.958", "1949-02-06", "davos")
add_record (M,   BIG, "sakunenko",   "184.638", "1955-01-10", "medeo")
add_record (M,   BIG, "traub",       "184.490", "1963-01-20", "madonna")
add_record (M,   BIG, "johannesen",  "183.055", "1963-01-20", "hamar")
add_record (M,   BIG, "aaness",      "180.560", "1963-01-27", "bislett")

add_record (M,   BIG, "nilsson",     "178.447", "1963-02-24", "karuizawa")
add_record (M,   BIG, "maier",       "178.253", "1966-02-06", "bislett")
add_record (M,   BIG, "verkerk",     "178.058", "1967-02-12", "bislett")
add_record (M,   BIG, "stiansen",    "176.982", "1968-01-14", "madonna")
add_record (M,   BIG, "traub",       "176.717", "1968-01-21", "inzell")

add_record (M,   BIG, "maier",       "176.340", "1968-02-25", "goteborg")
add_record (M,   BIG, "verkerk",     "172.058", "1968-03-10", "inzell")
add_record (M,   BIG, "claeson",     "171.758", "1969-03-02", "inzell")
add_record (M,   BIG, "bols",        "171.512", "1970-03-08", "inzell")
add_record (M,   BIG, "schenk",      "171.317", "1971-01-10", "bislett")

add_record (M,   BIG, "schenk",      "171.130", "1971-02-14", "goteborg")
add_record (M,   BIG, "schenk",      "168.248", "1971-03-14", "inzell")
add_record (M,   BIG, "schenk",      "167.420", "1972-03-05", "inzell")
add_record (M,   BIG, "kleine",      "165.884", "1976-03-13", "inzell")
add_record (M,   BIG, "storholt",    "163.221", "1977-03-20", "medeo")

add_record (M,   BIG, "heiden_eric", "162.973", "1979-02-11", "bislett")
add_record (M,   BIG, "shasherin",   "161.550", "1983-03-26", "medeo")
add_record (M,   BIG, "shasherin",   "160.807", "1984-03-24", "medeo")
add_record (M,   BIG, "gulyayev_nikolay",
                                     "159.356", "1987-02-15", "thialf")
add_record (M,   BIG, "koss",        "157.396", "1991-02-10", "thialf")

add_record (M,   BIG, "sighel",      "157.150", "1992-03-22", "calgary")
add_record (M,   BIG, "zandstra",    "156.882", "1993-01-23", "thialf")
add_record (M,   BIG, "ritsma",      "156.201", "1994-01-09", "hamar",
                                                              {weekend: 3})
add_record (M,   BIG, "shirahata",   "155.966", "1998-01-03", "nagano")
add_record (M,   BIG, "postma",      "153.367", "1998-03-15", "thialf",
                                                              {weekend: 3})

add_record (M,   BIG, "ritsma",      "152.651", "1999-02-07", "hamar")
add_record (M,   BIG, "uytdehaage",  "152.482", "2002-03-17", "thialf",
                                                              {weekend: 3})
add_record (M,   BIG, "tuitert",     "151.691", "2004-01-11", "thialf",
                                                              {weekend: 3})
add_record (M,   BIG, "hedrick",     "150.478", "2004-02-08", "hamar")
add_record (M,   BIG, "davis",       "149.359", "2005-01-09", "salt lake city")

add_record (M,   BIG, "hedrick",     "148.799", "2006-01-22", "calgary")
add_record (M,   BIG, "davis",       "145.742", "2006-03-19", "calgary")
add_record (M,   BIG, "roest",       "145.561", "2019-03-02", "calgary")



//
// Women   500m
//
add_record (W,   500, "nehringowa",  "1:02.0",  "1931-02-15", "warsaw")
add_record (W,   500, "landbeck",    "0:58.7",  "1932-01-09", "davos")
add_record (W,   500, "lie",         "0:56.0",  "1932-03-20", "brandbu")
add_record (W,   500, "landbeck",    "0:51.5",  "1933-01-20", "davos")
add_record (W,   500, "landbeck",    "0:51.3",  "1934-01-13", "davos")

add_record (W,   500, "lie",         "0:50.3",  "1934-02-12", "frogner")
add_record (W,   500, "nilsen",      "0:49.3",  "1935-02-27", "frogner")
add_record (W,   500, "nilsen",      "0:46.4",  "1937-01-30", "davos")
add_record (W,   500, "rylova",      "0:45.6",  "1955-01-11", "medeo")
add_record (W,   500, "voronina artamonova","0:44.9","1962-01-27","medeo")

add_record (W,   500, "sidorova",    "0:44.7",  "1968-02-03", "davos")
add_record (W,   500, "schleiermacher","0:44.6","1969-02-04", "davos")
add_record (W,   500, "sidorova",    "0:43.29", "1970-01-09", "medeo")
add_record (W,   500, "sidorova",    "0:43.22", "1970-01-17", "medeo")
add_record (W,   500, "henning",     "0:42.91", "1971-02-20", "inzell")

add_record (W,   500, "henning",     "0:42.75", "1971-02-21", "inzell")
add_record (W,   500, "henning",     "0:42.5",  "1972-01-07", "davos")
add_record (W,   500, "young",       "0:41.8",  "1973-01-19", "davos")
add_record (W,   500, "averina",     "0:41.70", "1975-03-11", "medeo")
add_record (W,   500, "sadchikova",  "0:41.69", "1975-03-21", "medeo")

add_record (W,   500, "averina",     "0:41.06", "1975-03-29", "medeo")
add_record (W,   500, "young",       "0:40.91", "1976-01-26", "davos")
add_record (W,   500, "young",       "0:40.68", "1976-03-13", "inzell")
add_record (W,   500, "rothenburger","0:40.28", "1981-03-27", "medeo")
add_record (W,   500, "rothenburger","0:40.18", "1981-03-28", "medeo")

add_record (W,   500, "rothenburger","0:39.69", "1983-03-25", "medeo")
add_record (W,   500, "enke",        "0:39.52", "1986-03-21", "medeo")
add_record (W,   500, "blair",       "0:39.43", "1987-03-19", "thialf")
add_record (W,   500, "rothenburger","0:39.39", "1987-12-06", "calgary")
add_record (W,   500, "blair",       "0:39.10", "1988-02-22", "calgary")

add_record (W,   500, "blair",       "0:38.99", "1994-03-26", "calgary")
add_record (W,   500, "blair",       "0:38.69", "1995-02-02", "calgary")
add_record (W,   500, "le may",      "0:37.90", "1997-11-22", "calgary")
add_record (W,   500, "le may",      "0:37.90", "1997-11-23", "calgary")
add_record (W,   500, "le may",      "0:37.71", "1997-12-28", "calgary")

add_record (W,   500, "le may",      "0:37.55", "1997-12-29", "calgary")
add_record (W,   500, "le may",      "0:37.40", "2001-01-06", "calgary")
add_record (W,   500, "le may",      "0:37.29", "2001-03-09", "salt lake city")
add_record (W,   500, "le may",      "0:37.22", "2001-12-09", "calgary")
add_record (W,   500, "wolf",        "0:37.04", "2007-03-10", "salt lake city")

add_record (W,   500, "wolf",        "0:37.02", "2007-11-16", "calgary")
add_record (W,   500, "wolf",        "0:37.00", "2009-12-11", "salt lake city")
add_record (W,   500, "jing",        "0:36.94", "2012-01-29", "calgary")
add_record (W,   500, "sang-hwa",    "0:36.80", "2013-01-20", "calgary")
add_record (W,   500, "sang-hwa",    "0:36.74", "2013-11-09", "calgary")

add_record (W,   500, "sang-hwa",    "0:36.57", "2013-11-15", "salt lake city")
add_record (W,   500, "sang-hwa",    "0:36.36", "2013-11-16", "salt lake city")



//
// Women  1000m
//
add_record (W,  1000, "nehringowa",  "2:26.4",  "1929-01-26", "warsaw")
add_record (W,  1000, "landbeck",    "2:08.8",  "1932-01-10", "davos")
add_record (W,  1000, "nehringowa",  "2:03.4",  "1932-01-17", "engelberg")
add_record (W,  1000, "lie",         "1:51.2",  "1932-03-20", "brandbu")
add_record (W,  1000, "landbeck",    "1:48.5",  "1933-01-22", "davos")

add_record (W,  1000, "lie",         "1:48.1",  "1934-01-14", "davos")
add_record (W,  1000, "lesche",      "1:45.7",  "1934-02-11", "frogner")
add_record (W,  1000, "klein",       "1:42.3",  "1935-03-01", "kongsberg")
add_record (W,  1000, "nilsen",      "1:38.8",  "1937-01-31", "davos")
add_record (W,  1000, "kondakova",   "1:36.8",  "1951-02-05", "medeo")

add_record (W,  1000, "zhukova",     "1:36.6",  "1952-01-22", "medeo")
add_record (W,  1000, "selikhova",   "1:36.4",  "1953-01-30", "medeo")
add_record (W,  1000, "rylova",      "1:33.4",  "1955-01-12", "medeo")
add_record (W,  1000, "skoblikova",  "1:31.8",  "1963-02-22", "karuizawa")
add_record (W,  1000, "kaiser",      "1:31.0",  "1968-03-03", "inzell")

add_record (W,  1000, "brom",        "1:30.0",  "1969-02-09", "davos")
add_record (W,  1000, "titova",      "1:29.5",  "1970-01-09", "medeo")
add_record (W,  1000, "fechina",     "1:29.0",  "1970-01-10", "medeo")
add_record (W,  1000, "kaiser",      "1:29.0",  "1971-01-16", "davos")
add_record (W,  1000, "titova",      "1:29.0",  "1971-02-20", "inzell")

add_record (W,  1000, "titova",      "1:27.7",  "1971-02-21", "inzell")
add_record (W,  1000, "henning",     "1:27.3",  "1972-01-08", "davos")
add_record (W,  1000, "averina",     "1:26.40", "1974-04-02", "medeo")
add_record (W,  1000, "averina",     "1:26.12", "1975-03-12", "medeo")
add_record (W,  1000, "averina",     "1:25.28", "1975-03-22", "medeo")

add_record (W,  1000, "averina",     "1:23.46", "1975-03-29", "medeo")
add_record (W,  1000, "petrusyova",  "1:23.01", "1980-03-27", "medeo")
add_record (W,  1000, "rothenburger","1:20.95", "1981-03-27", "medeo")
add_record (W,  1000, "petrusyova",  "1:20.81", "1980-03-28", "medeo")
add_record (W,  1000, "petrusyova",  "1:19.31", "1983-03-26", "medeo")

add_record (W,  1000, "enke",        "1:18.84", "1986-02-22", "karuizawa")
add_record (W,  1000, "enke",        "1:18.11", "1987-12-05", "calgary")
add_record (W,  1000, "rothenburger","1:17.65", "1988-02-26", "calgary")
add_record (W,  1000, "le may",      "1:16.07", "1997-11-22", "calgary")
add_record (W,  1000, "witty",       "1:15.43", "1997-11-23", "calgary")

add_record (W,  1000, "witty",       "1:14.96", "1998-03-28", "calgary")
add_record (W,  1000, "garbrecht",   "1:14.61", "1999-02-21", "calgary")
add_record (W,  1000, "witty",       "1:14.58", "2001-03-03", "calgary")
add_record (W,  1000, "garbrecht",   "1:14.13", "2001-03-10", "salt lake city")
add_record (W,  1000, "volker",      "1:14.06", "2001-12-02", "salt lake city")

add_record (W,  1000, "witty",       "1:13.83", "2002-02-17", "salt lake city")
add_record (W,  1000, "klassen",     "1:13.46", "2006-03-24", "calgary")
add_record (W,  1000, "klassen",     "1:13.11", "2006-03-25", "calgary")
add_record (W,  1000, "nesbitt",     "1:12.68", "2012-01-28", "calgary")
add_record (W,  1000, "bowe",        "1:12.58", "2013-11-17", "salt lake city")

add_record (W,  1000, "richardson",  "1:12.51", "2015-11-14", "calgary")
add_record (W,  1000, "bowe",        "1:12.18", "2015-11-22", "salt lake city")
add_record (W,  1000, "kodaira",     "1:12.09", "2017-12-09", "salt lake city")
add_record (W,  1000, "bowe",        "1:11.61", "2019-03-09", "salt lake city")

//
// Women  1500m
//
add_record (W,  1500, "nehringowa",  "3:28.0",  "1929-01-27", "warsaw")
add_record (W,  1500, "nehringowa",  "3:10.4",  "1932-01-10", "davos")
add_record (W,  1500, "lie",         "3:08.1",  "1932-03-07", "frogner")
add_record (W,  1500, "lesche",      "2:49.0",  "1933-02-26", "helsinki")
add_record (W,  1500, "blikken",     "2:40.0",  "1934-02-12", "frogner")

add_record (W,  1500, "nilsen",      "2:38.1",  "1937-01-23", "frogner")
add_record (W,  1500, "thorvaldsen", "2:37.5",  "1950-02-25", "gjovik")
add_record (W,  1500, "zhukova",     "2:36.7",  "1950-03-17", "kirov")
add_record (W,  1500, "isakova",     "2:29.5",  "1951-02-12", "medeo")
add_record (W,  1500, "shchegoleyeva","2:25.5", "1953-01-30", "medeo")

add_record (W,  1500, "skoblikova",  "2:25.2",  "1960-02-21", "squaw valley")
add_record (W,  1500, "voronina artamonova","2:19.0","1962-01-27","medeo")
add_record (W,  1500, "schut",       "2:18.5",  "1969-02-22", "inzell")
add_record (W,  1500, "statkevich",  "2:17.8",  "1970-01-17", "medeo")
add_record (W,  1500, "keulen deelstra","2:17.2","1970-03-14","inzell")

add_record (W,  1500, "kaiser",      "2:15.8",  "1971-01-15", "davos")
add_record (W,  1500, "averina",     "2:14.00", "1974-04-01", "medeo")
add_record (W,  1500, "averina",     "2:09.90", "1975-03-11", "medeo")
add_record (W,  1500, "vorobyeva",   "2:07.18", "1978-04-10", "medeo")
add_record (W,  1500, "petrusyova",  "2:06.01", "1981-01-03", "medeo")

add_record (W,  1500, "petrusyova",  "2:05.39", "1981-03-27", "medeo")
add_record (W,  1500, "petrusyova",  "2:04.04", "1983-03-25", "medeo")
add_record (W,  1500, "enke",        "2:03.42", "1984-02-09", "sarajevo")
add_record (W,  1500, "mitscherlich","2:03.34", "1984-03-24", "medeo")
add_record (W,  1500, "enke",        "2:02.23", "1986-03-06", "inzell")

add_record (W,  1500, "enke",        "1:59.30", "1986-03-22", "medeo")
add_record (W,  1500, "le may",      "1:57.87", "1997-11-29", "calgary")
add_record (W,  1500, "timmer",      "1:57.58", "1998-02-16", "nagano")
add_record (W,  1500, "friesinger",  "1:56.95", "1998-03-29", "calgary")
add_record (W,  1500, "thomas",      "1:55.50", "1999-03-20", "calgary")

add_record (W,  1500, "friesinger",  "1:54.38", "2001-03-04", "calgary")
add_record (W,  1500, "friesinger",  "1:54.02", "2002-02-20", "salt lake city")
add_record (W,  1500, "klassen",     "1:53.87", "2005-01-09", "salt lake city")
add_record (W,  1500, "klassen",     "1:53.77", "2005-10-28", "calgary")
add_record (W,  1500, "friesinger",  "1:53.22", "2005-11-06", "calgary")

add_record (W,  1500, "klassen",     "1:51.79", "2005-11-20", "salt lake city")
add_record (W,  1500, "bowe",        "1:51.59", "2015-11-15", "calgary")
add_record (W,  1500, "richardson",  "1:50.85", "2015-11-21", "salt lake city")
add_record (W,  1500, "takagi miho", "1:49.84", "2019-03-10", "salt lake city")

//
// Women  3000m
//
add_record (W,  3000, "nehringowa",  "6:52.8",  "1931-02-08", "warsaw")
add_record (W,  3000, "nehringowa",  "6:22.4",  "1935-02-09", "warsaw")
add_record (W,  3000, "klein",       "6:12.0",  "1936-02-01", "stockholm")
add_record (W,  3000, "nilsen",      "5:29.6",  "1937-01-30", "davos")
add_record (W,  3000, "kholshchevnikova","5:29.1","1949-01-30","moscow")

add_record (W,  3000, "karelina",    "5:26.7",  "1951-02-11", "medeo")
add_record (W,  3000, "akifyeva",    "5:22.2",  "1951-02-16", "medeo")
add_record (W,  3000, "zhukova",     "5:21.3",  "1952-01-08", "medeo")
add_record (W,  3000, "zhukova",     "5:13.8",  "1953-01-23", "medeo")
add_record (W,  3000, "voronina artamonova","5:06.0","1962-01-28","medeo")

add_record (W,  3000, "skoblikova",  "5:05.9",  "1967-01-15", "bislett")
add_record (W,  3000, "kaiser",      "5:04.8",  "1967-01-29", "davos")
add_record (W,  3000, "kaiser",      "4:56.8",  "1967-03-05", "inzell")
add_record (W,  3000, "kaiser",      "4:54.6",  "1968-02-03", "davos")
add_record (W,  3000, "schut",       "4:52.0",  "1969-02-02", "grenoble")

add_record (W,  3000, "schut",       "4:50.4",  "1969-02-09", "davos")
add_record (W,  3000, "schut",       "4:50.3",  "1969-02-23", "inzell")
add_record (W,  3000, "kaiser",      "4:46.5",  "1971-01-16", "davos")
add_record (W,  3000, "kuznetsova",  "4:44.69", "1975-01-12", "medeo")
add_record (W,  3000, "swider",      "4:40.85", "1976-03-13", "inzell")

add_record (W,  3000, "stepanskaya", "4:40.59", "1976-03-16", "medeo")
add_record (W,  3000, "stepanskaya", "4:31.00", "1976-03-23", "medeo")
add_record (W,  3000, "schonbrunn",  "4:21.70", "1981-03-28", "medeo")
add_record (W,  3000, "mitscherlich","4:20.91", "1984-03-23", "medeo")
add_record (W,  3000, "enke",        "4:18.02", "1986-03-21", "medeo")

add_record (W,  3000, "gennip",      "4:16.85", "1987-03-19", "thialf")
add_record (W,  3000, "schonbrunn",  "4:16.76", "1987-12-05", "calgary")
add_record (W,  3000, "gennip",      "4:11.94", "1988-02-23", "calgary")
add_record (W,  3000, "niemann",     "4:10.80", "1990-12-09", "calgary")
add_record (W,  3000, "niemann",     "4:09.32", "1994-03-25", "calgary")

add_record (W,  3000, "niemann",     "4:07.80", "1997-12-07", "thialf")
add_record (W,  3000, "pechstein",   "4:07.13", "1997-12-13", "hamar")
add_record (W,  3000, "niemann",     "4:05.08", "1998-03-14", "thialf")
add_record (W,  3000, "niemann",     "4:01.67", "1998-03-27", "calgary")
add_record (W,  3000, "niemann",     "4:00.51", "2000-01-30", "calgary")

add_record (W,  3000, "niemann",     "4:00.26", "2001-02-17", "hamar")
add_record (W,  3000, "pechstein",   "3:59.26", "2001-03-02", "calgary")
add_record (W,  3000, "pechstein",   "3:57.70", "2002-02-10", "salt lake city")
add_record (W,  3000, "klassen",     "3:55.75", "2005-11-12", "calgary")
add_record (W,  3000, "klassen",     "3:53.34", "2006-03-18", "calgary")

add_record (W,  3000, "sablikova",   "3:53.31", "2019-03-02", "calgary")
add_record (W,  3000, "sablikova",   "3:52.02", "2019-03-09", "salt lake city")

//
// Women  5000m
//
add_record (W,  5000, "nehringowa", "11:30.5",  "1931-02-15", "warsaw")
add_record (W,  5000, "nehringowa", "10:54.8",  "1935-02-10", "warsaw")
add_record (W,  5000, "lesche",     "10:15.3",  "1936-02-02", "stockholm")
add_record (W,  5000, "nilsen",      "9:28.3",  "1937-01-31", "davos")
add_record (W,  5000, "lesche",      "9:26.8",  "1949-02-13", "kongsberg")

add_record (W,  5000, "zhukova",     "9:22.3",  "1950-03-17", "kirov")
add_record (W,  5000, "karelina",    "9:10.7",  "1951-02-12", "medeo")
add_record (W,  5000, "zhukova",     "9:01.6",  "1953-01-24", "medeo")
add_record (W,  5000, "mitscherlich","7:40.97", "1983-01-23", "thialf")
add_record (W,  5000, "schonbrunn",  "7:39.44", "1984-01-15", "medeo")

add_record (W,  5000, "mitscherlich","7:34.52", "1984-03-24", "medeo")
add_record (W,  5000, "mitscherlich","7:32.82", "1985-02-10", "sarajevo")
add_record (W,  5000, "mitscherlich","7:31.45", "1986-01-12", "geithus")
add_record (W,  5000, "mitscherlich","7:20.99", "1986-03-22", "medeo")
add_record (W,  5000, "gennip",      "7:20.36", "1987-03-20", "thialf")

add_record (W,  5000, "gennip",      "7:14.13", "1988-02-28", "calgary")
add_record (W,  5000, "niemann",     "7:13.29", "1993-12-06", "hamar")
add_record (W,  5000, "niemann",     "7:03.26", "1994-03-26", "calgary")
add_record (W,  5000, "pechstein",   "6:59.61", "1998-02-20", "nagano")
add_record (W,  5000, "niemann",     "6:58.63", "1998-03-28", "calgary")

add_record (W,  5000, "niemann",     "6:57.24", "1999-02-07", "hamar")
add_record (W,  5000, "niemann",     "6:56.84", "2000-01-16", "hamar")
add_record (W,  5000, "niemann",     "6:55.34", "2000-11-15", "thialf")
add_record (W,  5000, "niemann",     "6:52.44", "2001-03-10", "salt lake city")
add_record (W,  5000, "pechstein",   "6:46.91", "2002-02-23", "salt lake city")

add_record (W,  5000, "sablikova",   "6:45.61", "2007-03-11", "salt lake city")
add_record (W,  5000, "sablikova",   "6:42.66", "2011-02-18", "salt lake city")
add_record (W,  5000, "sablikova",   "6:42.01", "2019-03-03", "calgary")
add_record (W,  5000, "voronina",    "6:39.02", "2020-02-15", "salt lake city")

//
// Women 10000m
//
add_record (W, 10000, "nehringowa", "23:48.5",  "1935-12-30", "vienna")
add_record (W, 10000, "niemczyk",   "22:46.4",  "1953-02-10", "zakopane")
add_record (W, 10000, "donker",     "21:52.1",  "1972-01-27", "jaap eden")
add_record (W, 10000, "pasveer",    "19:48.3",  "1980-03-04", "groningen")
add_record (W, 10000, "swider",     "17:37.35", "1980-03-16", "savalen")

add_record (W, 10000, "stam",       "17:20.0",  "1984-03-11", "alkmaar")
add_record (W, 10000, "kooiman",    "16:56.8",  "1984-03-16", "haarlem")
add_record (W, 10000, "jensen",     "16:49.82", "1985-03-07", "savalen")
add_record (W, 10000, "mitscherlich","16:49.82","1987-03-11", "kuchwald")
add_record (W, 10000, "mulder_grietje","15:56.81","1988-03-16","thialf")

add_record (W, 10000, "gennip",     "15:25.25", "1988-03-19", "thialf")
add_record (W, 10000, "niemann",    "14:22.60", "1994-03-27", "calgary")
add_record (W, 10000, "sablikova",  "14:08.28", "2006-03-23", "calgary")
add_record (W, 10000, "sablikova",  "13:48.33", "2007-03-15", "calgary")



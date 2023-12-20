let progression = {}

const M   = "men"
const W   = "women"

const sexes     = [M, W]
const distances = [500, 1000, 1500, 3000, 5000, 10000];

sexes . forEach ((sex) => {
    progression [sex] = {}
    distances . forEach ((distance) => {
        progression [sex] [distance] = []
    })
})


function add_record (sex, distance, skater, time, date, rink, city) {
    progression [sex] [distance] . push ({
        skater: skater,
        time:   time,
        date:   date,
        rink:   rink,
    })
}


//
// Men   500m
//
add_record (M,   500, "grunden",     "0:50.8",  "1891-02-28", "neglingeviken")
add_record (M,   500, "mey",         "0:36.45", "1988-02-14", "calgary")
add_record (M,   500, "mey",         "0:36.43", "1992-01-19", "davos")
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
                                     "8:33.7",  "1917-02-04", "trondheim")
add_record (M,  5000, "strom_harald","8:27.7",  "1921-02-21", "frogner")
add_record (M,  5000, "strom_harald","8:26.5",  "1922-02-18", "frogner")
add_record (M,  5000, "ballangrud",  "8:24.2",  "1929-01-19", "davos")
add_record (M,  5000, "ballangrud",  "8:21.6",  "1930-01-11", "davos")
add_record (M,  5000, "heiden_siem", "8:19.2",  "1933-01-22", "davos")
add_record (M,  5000, "stiepl",      "8:18.9",  "1934-02-03", "hamar stadion")
add_record (M,  5000, "ballangrud",  "8:17.2",  "1936-01-18", "bislett")
add_record (M,  5000, "seyffarth",   "8:13.7",  "1941-02-03", "davos")
add_record (M,  5000, "pajor",       "8:13.5",  "1949-02-05", "davos")
add_record (M,  5000, "andersen",    "8:07.3",  "1951-01-13", "trondheim")
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
add_record (M, 10000, "mathisen",   "17:36.4",  "1913-01-25", "trondheim")
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

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
// Men  5000m
//
add_record (M,  5000, "fredriksen",  "9:29.8",  "1890-03-02", "neglingeviken")
add_record (M,  5000, "halvorsen",   "9:10.2",  "1892-02-28", "hamar mjosen")
add_record (M,  5000, "halvorsen",   "9:07.2",  "1893-02-26", "hamar mjosen")
add_record (M,  5000, "eden",        "8:37.6",  "1894-02-25", "hamar mjosen")
add_record (M,  5000, "strunnikov",  "8:37.2",  "1911-02-04", "kristiana")
add_record (M,  5000, "mathisen",    "8:36.6",  "1914-01-17", "davos")
add_record (M,  5000, "mathisen",    "8:36.3",  "1916-01-23", "kristiana")
add_record (M,  5000, "strom_kristian",
                                     "8:33.7",  "1917-02-04", "trondheim")
add_record (M,  5000, "strom_harald","8:27.7",  "1921-02-21", "kristiana")
add_record (M,  5000, "strom_harald","8:26.5",  "1922-02-18", "kristiana")
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
add_record (M, 10000, "mathisen",   "17:46.3",  "1912-02-18", "kristiana")
add_record (M, 10000, "mathisen",   "17:36.4",  "1913-01-25", "trondheim")
add_record (M, 10000, "mathisen",   "17:22.6",  "1913-02-01", "kristiana")
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

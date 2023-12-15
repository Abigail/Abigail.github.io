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

add_record (M, 10000, "fredriksen", "20:21.4",  "1893-01-14", "museumplein")
add_record (M, 10000, "nielsen",    "19:47.4",  "1893-02-13", "neglingeviken")
add_record (M, 10000, "ericsson",   "19:22.8",  "1894-01-07", "neglingeviken")
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

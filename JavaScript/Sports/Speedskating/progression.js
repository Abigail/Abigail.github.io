let __progression = []

const W1  = {weekend: 1}
const W3  = {weekend: 3}

//
// time2sec
//
// Given a time (in mm:ss.ss format), and return the number of seconds
//
function time2sec (time) {
    if (!time) {
        return undefined
    }
    let [min, sec] = time . split (':') . map (x => +x)
    return 60 * min + sec
}


//
// date2value
//
// Given a date in YYYY-MM-DD, return the fractional year value.
// 
function date2value (yyyymmdd = 0) {
    const date = yyyymmdd ? new Date (yyyymmdd + "T12:00:00")  // Noon
                          : new Date ()
    const year = date . getFullYear ()
    const jan1 = new Date (year, 0, 1, 12, 0, 0)
    const diy  = Math . round ((date - jan1) / (1000 * 60 * 60 * 24))

    const is_leap = year % 400 == 0 ? 1
                  : year % 100 == 0 ? 0
                  : year %   4 == 0 ? 1 : 0

    return year + diy / (365 + is_leap)
}

function add_record (event, skater, time, date, rink, extra = {}) {
    const [year, month, mday] = date . split ("-") . map (x => +x)
    let new_entry = {
        event:       event,
        skater:      Skater . skater (skater),
        time:        time,
        date:        date,
        year:        year,
        month:       month,
        mday:        mday,
        season:      month >= 8 ? year - 1 : year,
        rink:        Rink . rink (rink),
        improvement: 0,
        x:           date2value (date),
        y:           time ? event . is_combination () ? +time
                                                      : time2sec (time)
                          : undefined,
    }
    Object . keys (extra) . forEach ((key) => {
        new_entry [key] = extra [key]
    })

    if (new_entry . members) {
        const names = new_entry . members
                                . map (member => Skater . skater (member))
        new_entry  . members = names
    }

    if (skater == "SUSPENDED") {
        new_entry . suspended = 1
    }

    if (__progression . length) {
        const last = __progression [__progression . length - 1]
        if (last . event . equal (new_entry . event)) {
            const improvement = last . y - new_entry . y
            if (improvement > 0) {
                //
                // To handle the Borjes/Muratov oddity, where Muratov
                // "equalled" Borjes 38.9 with 38.99
                //

                new_entry . improvement = improvement
                if (event . is_combination ()) {
                    //
                    // It's points
                    //
                    new_entry . precision = 3
                }
                else {
                    //
                    // Determine the precision. If both the old and new
                    // use hundreds of a second, use 2 decimals, else 1
                    //
                    const old_dot   = last      . time . indexOf (".")
                    const new_dot   = new_entry . time . indexOf (".")
                    const precision =
                        last      . time . length == old_dot + 3 &&
                        new_entry . time . length == new_dot + 3 ? 2 : 1;

                    new_entry . precision = precision
                //  new_entry . improvement = sec2time (improvement, precision)
                }
            }
        }
    }
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
            else if (key == "event") {
                result = result . filter (item => item [key] .
                                                         equal (filters [key]))
            }
            else if (key == "current") {
                result = result . filter (item => item [key] == 1)
            }
            else {
                result = result . filter (item => item [key] == filters [key])
            }
        }
    })
    return result
}

const m500    = new Event (Event . MEN,   Event . M500)
const m1000   = new Event (Event . MEN,   Event . M1000)
const m1500   = new Event (Event . MEN,   Event . M1500)
const m3000   = new Event (Event . MEN,   Event . M3000)
const m5000   = new Event (Event . MEN,   Event . M5000)
const m10000  = new Event (Event . MEN,   Event . M10000)
const mBIG    = new Event (Event . MEN,   Event . BIG)
const mSMALL  = new Event (Event . MEN,   Event . SMALL)
const mSPRINT = new Event (Event . MEN,   Event . SPRINT)
const mD500   = new Event (Event . MEN,   Event . D500)
const mTP     = new Event (Event . MEN,   Event . TEAM_PURSUIT)
const mTS     = new Event (Event . MEN,   Event . TEAM_SPRINT)

const w500    = new Event (Event . WOMEN, Event . M500)
const w1000   = new Event (Event . WOMEN, Event . M1000)
const w1500   = new Event (Event . WOMEN, Event . M1500)
const w3000   = new Event (Event . WOMEN, Event . M3000)
const w5000   = new Event (Event . WOMEN, Event . M5000)
const w10000  = new Event (Event . WOMEN, Event . M10000)
const wSMALL  = new Event (Event . WOMEN, Event . SMALL)
const wO_SML  = new Event (Event . WOMEN, Event . OLD_SMALL)
const wMINI   = new Event (Event . WOMEN, Event . MINI)
const wSPRINT = new Event (Event . WOMEN, Event . SPRINT)
const wD500   = new Event (Event . WOMEN, Event . D500)
const wTP     = new Event (Event . WOMEN, Event . TEAM_PURSUIT)
const wTS     = new Event (Event . WOMEN, Event . TEAM_SPRINT)

const RELAY   = new Event (Event . MIXED, Event . RELAY)


function init_progression () {
    //
    // Men   500m
    //
    add_record (m500, "grunden",     "0:50.8",  "1891-02-28", "neglingeviken")
    add_record (m500, "halvorsen",   "0:50.2",  "1892-02-28", "hamar mjosen")
    add_record (m500, "naess",       "0:49.4",  "1893-02-05", "hamar mjosen")
    add_record (m500, "halvorsen",   "0:48.0",  "1893-02-26", "hamar mjosen")
    add_record (m500, "fredriksen",  "0:47.8",  "1894-01-21", "gamle")

    add_record (m500, "halvorsen",   "0:47.0",  "1894-02-24", "hamar mjosen")
    add_record (m500, "mauseth",     "0:46.8",  "1895-02-03", "trondheim_kal")
    add_record (m500, "ostlund",     "0:46.6",  "1897-02-07", "trondheim_kal")
    add_record (m500, "ostlund",     "0:45.2",  "1900-02-10", "davos")
    add_record (m500, "gundersen",   "0:44.8",  "1906-01-27", "davos")

    add_record (m500, "vikander",    "0:44.4",  "1908-02-09", "davos")
    add_record (m500, "mathisen",    "0:44.2",  "1912-02-17", "gamle")
    add_record (m500, "mathisen",    "0:44.0",  "1913-03-16", "hamar mjosen")
    add_record (m500, "mathisen",    "0:43.7",  "1914-01-10", "gamle")
    add_record (m500, "mathisen",    "0:43.4",  "1914-01-17", "davos")

    add_record (m500, "larsen",      "0:43.1",  "1928-02-04", "davos")
    add_record (m500, "thunberg",    "0:42.8",  "1929-01-19", "davos")
    add_record (m500, "thunberg",    "0:42.6",  "1931-01-13", "st. moritz")
    add_record (m500, "engnestangen","0:42.5",  "1933-01-21", "davos")
    add_record (m500, "potts",       "0:42.4",  "1936-01-18", "bislett")

    add_record (m500, "engnestangen","0:42.3",  "1937-01-30", "davos")
    add_record (m500, "engnestangen","0:41.8",  "1938-02-05", "davos")
    add_record (m500, "sergeyev",    "0:41.7",  "1952-01-06", "medeo")
    add_record (m500, "sergeyev",    "0:41.2",  "1952-01-19", "medeo")
    add_record (m500, "sergeyev",    "0:40.9",  "1953-01-25", "medeo")

    add_record (m500, "sergeyev",    "0:40.8",  "1955-01-19", "medeo")
    add_record (m500, "grishin",     "0:40.2",  "1956-01-22", "misurina")
    add_record (m500, "grishin",     "0:40.2",  "1956-01-28", "misurina")
    add_record (m500, "grishin",     "0:39.6",  "1963-01-27", "medeo")
    add_record (m500, "grishin",     "0:39.5",  "1963-01-28", "medeo")

    add_record (m500, "keller",      "0:39.2",  "1968-01-28", "inzell")
    add_record (m500, "suzuki",      "0:39.2",  "1969-03-01", "inzell")
    add_record (m500, "muratov",     "0:39.09", "1970-01-09", "medeo")
    add_record (m500, "gulyayev_boris","0:39.03","1970-01-13","medeo")
    add_record (m500, "borjes",      "0:38.9",  "1970-01-18", "davos")

    add_record (m500, "muratov",     "0:38.99", "1970-01-24", "medeo")
    add_record (m500, "borjes",      "0:38.87", "1970-01-25", "medeo")
    add_record (m500, "muratov",     "0:38.73", "1970-01-29", "medeo")
    add_record (m500, "suzuki",      "0:38.71", "1970-03-07", "inzell")
    add_record (m500, "borjes",      "0:38.46", "1970-03-08", "inzell")

    add_record (m500, "keller",      "0:38.42", "1971-03-14", "inzell")
    add_record (m500, "keller",      "0:38.30", "1972-01-02", "inzell")
    add_record (m500, "linkovesi",   "0:38.0",  "1972-01-08", "davos")
    add_record (m500, "keller",      "0:38.0",  "1972-03-04", "inzell")
    add_record (m500, "efskind",     "0:38.0",  "1973-01-13", "davos")

    add_record (m500, "kulikov",     "0:37.99", "1975-03-15", "medeo")
    add_record (m500, "kulikov",     "0:37.97", "1975-03-16", "medeo")
    add_record (m500, "muratov",     "0:37.85", "1975-03-18", "medeo")
    add_record (m500, "kulikov",     "0:37.20", "1975-03-28", "medeo")
    add_record (m500, "kulikov",     "0:37.00", "1975-03-29", "medeo")

    add_record (m500, "kulikov",     "0:36.91", "1981-03-28", "medeo")
    add_record (m500, "pegov",       "0:36.68", "1983-03-25", "medeo")
    add_record (m500, "pegov",       "0:36.57", "1983-03-26", "medeo")
    add_record (m500, "thometz",     "0:36.55", "1987-03-19", "thialf")
    add_record (m500, "mey",         "0:36.45", "1988-02-14", "calgary")

    add_record (m500, "mey",         "0:36.43", "1992-01-19", "davos")
    add_record (m500, "jansen",      "0:36.41", "1992-01-25", "davos")
    add_record (m500, "jansen",      "0:36.41", "1993-03-19", "calgary")
    add_record (m500, "jansen",      "0:36.02", "1993-03-20", "calgary")
    add_record (m500, "jansen",      "0:35.92", "1993-12-04", "hamar")

    add_record (m500, "jansen",      "0:35.76", "1994-01-30", "calgary")
    add_record (m500, "shimizu",     "0:35.39", "1996-03-02", "calgary")
    add_record (m500, "shimizu",     "0:35.36", "1998-03-28", "calgary")
    add_record (m500, "shimizu",     "0:34.82", "1998-03-28", "calgary")
    add_record (m500, "wotherspoon", "0:34.76", "1999-02-20", "calgary")

    add_record (m500, "wotherspoon", "0:34.63", "2000-01-29", "calgary")
    add_record (m500, "shimizu",     "0:34.32", "2001-03-10", "salt lake city")
    add_record (m500, "kato",        "0:34.30", "2005-11-19", "salt lake city")
    add_record (m500, "kang-seok",   "0:34.25", "2007-03-09", "salt lake city")
    add_record (m500, "wotherspoon", "0:34.03", "2007-11-09", "salt lake city")

    add_record (m500, "kulizhnikov", "0:34.00", "2015-11-15", "calgary")
    add_record (m500, "kulizhnikov", "0:33.98", "2015-11-20", "salt lake city")
    add_record (m500, "kulizhnikov", "0:33.61", "2019-03-09", "salt lake city")

    //
    // Men  1000m
    //
    add_record (m1000, "ostlund",     "1:38.0",  "1899-01-16", "davos")
    add_record (m1000, "ostlund",     "1:34.0",  "1900-02-10", "davos")
    add_record (m1000, "mathisen",    "1:31.8",  "1909-01-30", "davos")
    add_record (m1000, "thunberg",    "1:28.4",  "1930-01-11", "davos")
    add_record (m1000, "grishin",     "1:22.8",  "1955-01-12", "medeo")
    add_record (m1000, "schenk",      "1:20.6",  "1967-02-28", "inzell")
    add_record (m1000, "schenk",      "1:20.6",  "1968-02-05", "davos")
    add_record (m1000, "eriksen",     "1:20.5",  "1968-03-09", "inzell")
    add_record (m1000, "eriksen",     "1:20.3",  "1969-02-08", "inzell")
    add_record (m1000, "eriksen",     "1:19.5",  "1969-03-01", "inzell")
    add_record (m1000, "muratov",     "1:19.2",  "1970-01-24", "medeo")
    add_record (m1000, "eriksen",     "1:19.2",  "1971-01-15", "davos")
    add_record (m1000, "schenk",      "1:18.8",  "1971-02-20", "inzell")
    add_record (m1000, "keller",      "1:18.5",  "1972-03-04", "inzell")
    add_record (m1000, "efskind",     "1:17.6",  "1973-01-13", "davos")
    add_record (m1000, "safronov",    "1:17.23", "1974-04-11", "medeo")
    add_record (m1000, "muratov",     "1:16.92", "1975-03-17", "medeo")
    add_record (m1000, "kulikov",     "1:15.70", "1976-03-20", "medeo")
    add_record (m1000, "kulikov",     "1:15.33", "1977-03-19", "medeo")
    add_record (m1000, "heiden_eric", "1:14.99", "1978-03-12", "savalen")
    add_record (m1000, "heiden_eric", "1:14.99", "1979-02-17", "inzell")
    add_record (m1000, "heiden_eric", "1:13.60", "1980-01-13", "davos")
    add_record (m1000, "boucher",     "1:13.39", "1981-01-31", "davos")
    add_record (m1000, "pegov",       "1:12.58", "1983-03-25", "medeo")
    add_record (m1000, "zhelezovsky", "1:12.58", "1989-02-25", "thialf")
    add_record (m1000, "scott",       "1:12.54", "1993-12-17", "calgary")
    add_record (m1000, "jansen",      "1:12.43", "1994-02-18", "hamar")
    add_record (m1000, "miyabe",      "1:12.37", "1994-03-26", "calgary")
    add_record (m1000, "bouchard",    "1:12.27", "1995-12-22", "calgary")
    add_record (m1000, "overland",    "1:12.19", "1995-12-23", "calgary")
    add_record (m1000, "horii",       "1:11.67", "1996-03-01", "calgary")
    add_record (m1000, "horii",       "1:10.63", "1997-11-22", "calgary")
    add_record (m1000, "kyou-hyuk",   "1:10.42", "1997-11-23", "calgary")
    add_record (m1000, "wotherspoon", "1:10.16", "1997-12-29", "calgary")
    add_record (m1000, "bouchard",    "1:09.60", "1998-03-29", "calgary")
    add_record (m1000, "wotherspoon", "1:09.09", "1999-01-15", "calgary")
    add_record (m1000, "wotherspoon", "1:08.66", "1999-02-20", "calgary")
    add_record (m1000, "bos_jan",     "1:08.55", "1999-02-21", "calgary")
    add_record (m1000, "wotherspoon", "1:08.49", "2000-01-12", "calgary")
    add_record (m1000, "wotherspoon", "1:08.35", "2000-03-18", "calgary")
    add_record (m1000, "ireland",     "1:08.34", "2001-03-03", "calgary")
    add_record (m1000, "wotherspoon", "1:08.28", "2001-03-11", "salt lake city")
    add_record (m1000, "wotherspoon", "1:07.72", "2001-12-01", "salt lake city")
    add_record (m1000, "velde",       "1:07.18", "2002-02-16", "salt lake city")
    add_record (m1000, "davis",       "1:07.03", "2005-11-20", "salt lake city")
    add_record (m1000, "koskela",     "1:07.00", "2007-11-10", "salt lake city")
    add_record (m1000, "davis",       "1:06.42", "2009-03-07", "salt lake city")
    add_record (m1000, "nuis",        "1:06.18", "2019-03-09", "salt lake city")
    add_record (m1000, "kulizhnikov", "1:05.69", "2020-02-15", "salt lake city")

    //
    // Men  1500m
    //
    add_record (m1500, "eden",        "2:35.0",  "1893-01-11", "paterswolde")
    add_record (m1500, "ostlund",     "2:32.6",  "1893-02-25", "hamar mjosen")
    add_record (m1500, "ostlund",     "2:31.4",  "1894-02-24", "hamar mjosen")
    add_record (m1500, "halvorsen",   "2:29.6",  "1894-02-24", "hamar mjosen")
    add_record (m1500, "ostlund",     "2:28.8",  "1894-02-25", "hamar mjosen")
    add_record (m1500, "eden",        "2:25.4",  "1895-02-23", "hamar mjosen")
    add_record (m1500, "ostlund",     "2:23.6",  "1898-02-07", "davos")
    add_record (m1500, "ostlund",     "2:22.6",  "1900-02-11", "davos")
    add_record (m1500, "mathisen",    "2:20.8",  "1908-02-09", "davos")
    add_record (m1500, "mathisen",    "2:20.6",  "1910-01-10", "davos")
    add_record (m1500, "mathisen",    "2:19.4",  "1914-01-11", "frogner")
    add_record (m1500, "mathisen",    "2:17.4",  "1914-01-18", "davos")
    add_record (m1500, "staksrud",    "2:14.9",  "1937-01-31", "davos")
    add_record (m1500, "engnestangen","2:13.8",  "1939-01-29", "davos")
    add_record (m1500, "chaykin",     "2:12.9",  "1952-01-20", "medeo")
    add_record (m1500, "grishin",     "2:09.8",  "1955-01-10", "medeo")
    add_record (m1500, "mikhaylov",   "2:09.1",  "1956-01-20", "davos")
    add_record (m1500, "mikhaylov",   "2:08.6",  "1956-01-30", "misurina")
    add_record (m1500, "jarvinen",    "2:06.3",  "1959-03-01", "squaw valley")
    add_record (m1500, "schenk",      "2:06.2",  "1966-01-26", "davos")
    add_record (m1500, "schenk",      "2:05.3",  "1966-01-30", "inzell")
    add_record (m1500, "verkerk",     "2:03.9",  "1967-02-26", "inzell")
    add_record (m1500, "thomassen",   "2:02.5",  "1968-02-05", "davos")
    add_record (m1500, "verkerk",     "2:02.0",  "1969-02-09", "davos")
    add_record (m1500, "verkerk",     "2:01.9",  "1970-03-08", "inzell")
    add_record (m1500, "schenk",      "1:58.7",  "1971-01-16", "davos")
    add_record (m1500, "helden",      "1:55.61", "1976-03-13", "inzell")
    add_record (m1500, "storholt",    "1:55.18", "1977-03-23", "medeo")
    add_record (m1500, "heiden_eric", "1:54.79", "1980-01-19", "davos")
    add_record (m1500, "zhelezovsky", "1:54.26", "1983-03-26", "medeo")
    add_record (m1500, "bozhyev",     "1:53.26", "1984-03-24", "medeo")
    add_record (m1500, "gulyayev_nikolay","1:52.70","1987-02-15","thialf")
    add_record (m1500, "zhelezovsky", "1:52.50", "1987-12-05", "calgary")
    add_record (m1500, "hoffmann",    "1:52.06", "1988-02-20", "calgary")
    add_record (m1500, "ritsma",      "1:51.60", "1994-01-08", "hamar")
    add_record (m1500, "koss",        "1:51.29", "1994-02-16", "hamar")
    add_record (m1500, "noake",       "1:50.61", "1996-03-02", "calgary")
    add_record (m1500, "boutiette",   "1:50.09", "1997-03-15", "calgary")
    add_record (m1500, "marshall",    "1:50.05", "1997-03-16", "calgary")
    add_record (m1500, "postma",      "1:49.81", "1997-11-29", "berlin")
    add_record (m1500, "overland",    "1:49.07", "1997-11-29", "calgary")
    add_record (m1500, "ritsma",      "1:48.88", "1997-12-20", "thialf")
    add_record (m1500, "sondral",     "1:47.87", "1998-02-12", "nagano")
    add_record (m1500, "sondral",     "1:46.43", "1998-03-28", "calgary")
    add_record (m1500, "leeuwangh",   "1:45.56", "2000-01-29", "calgary")
    add_record (m1500, "kyou-hyuk",   "1:45.20", "2001-03-16", "calgary")
    add_record (m1500, "parra",       "1:43.95", "2002-02-19", "salt lake city")
    add_record (m1500, "davis",       "1:43.33", "2005-01-09", "salt lake city")
    add_record (m1500, "hedrick",     "1:42.78", "2005-11-18", "salt lake city")
    add_record (m1500, "davis",       "1:42.68", "2006-03-19", "calgary")
    add_record (m1500, "davis",       "1:42.32", "2007-03-04", "calgary")
    add_record (m1500, "wennemars",   "1:42.32", "2007-11-09", "salt lake city")
    add_record (m1500, "morrison",    "1:42.01", "2008-03-14", "calgary")
    add_record (m1500, "davis",       "1:41.80", "2009-03-06", "salt lake city")
    add_record (m1500, "davis",       "1:41.04", "2009-12-11", "salt lake city")
    add_record (m1500, "yuskov",      "1:41.02", "2017-12-09", "salt lake city")
    add_record (m1500, "nuis",        "1:40.17", "2019-03-10", "salt lake city")

    //
    // Men  3000m
    //
    add_record (m3000, "thunberg",    "5:19.2",  "1932-01-08", "davos")
    add_record (m3000, "staksrud",    "4:59.1",  "1933-02-25", "hamar stadion")
    add_record (m3000, "ballangrud",  "4:49.6",  "1935-01-29", "davos")
    add_record (m3000, "seyffarth",   "4:45.6",  "1942-02-03", "davos")
    add_record (m3000, "huiskes",     "4:40.2",  "1953-01-24", "davos")
    add_record (m3000, "johannesen",  "4:33.9",  "1963-01-12", "tonsberg")
    add_record (m3000, "eriksen",     "4:33.0",  "1963-02-28", "bislett")
    add_record (m3000, "nilsson",     "4:27.6",  "1963-03-23", "tolga")
    add_record (m3000, "antson",      "4:27.3",  "1964-02-11", "bislett")
    add_record (m3000, "liebrechts",  "4:26.8",  "1965-02-25", "bislett")
    add_record (m3000, "schenk",      "4:26.2",  "1966-01-29", "inzell")
    add_record (m3000, "schenk",      "4:18.4",  "1967-02-25", "inzell")
    add_record (m3000, "maier",       "4:17.5",  "1968-03-07", "inzell")
    add_record (m3000, "fornaess",    "4:17.4",  "1969-01-28", "cortina")
    add_record (m3000, "bols",        "4:16.4",  "1970-01-27", "cortina")
    add_record (m3000, "schenk",      "4:12.6",  "1971-01-25", "davos")
    add_record (m3000, "schenk",      "4:08.3",  "1972-03-02", "inzell")
    add_record (m3000, "heiden_eric", "4:07.01", "1978-03-02", "inzell")
    add_record (m3000, "heiden_eric", "4:06.91", "1979-03-18", "savalen")
    add_record (m3000, "ogloblin",    "4:04.06", "1979-03-28", "medeo")
    add_record (m3000, "hoffmann",    "4:03.31", "1985-01-12", "davos")
    add_record (m3000, "shasherin",   "4:03.22", "1986-01-18", "davos")
    add_record (m3000, "visser",      "3:59.27", "1987-03-19", "thialf")
    add_record (m3000, "koss",        "3:57.52", "1990-03-13", "thialf")
    add_record (m3000, "bos_thomas",  "3:56.16", "1992-04-03", "calgary")
    add_record (m3000, "jong",        "3:53.06", "1996-03-08", "calgary")
    add_record (m3000, "beulenkamp",  "3:52.67", "1998-02-25", "thialf")
    add_record (m3000, "veldkamp",    "3:48.91", "1998-03-20", "calgary")
    add_record (m3000, "elm",         "3:45.23", "1999-03-19", "calgary")
    add_record (m3000, "elm",         "3:43.76", "2000-03-17", "calgary")
    add_record (m3000, "romme",       "3:42.75", "2000-08-11", "calgary")
    add_record (m3000, "hedrick",     "3:39.02", "2005-03-10", "calgary")
    add_record (m3000, "ervik",       "3:37.28", "2005-11-05", "calgary")

    //
    // Men  5000m
    //
    add_record (m5000, "fredriksen",  "9:29.8",  "1890-03-02", "neglingeviken")
    add_record (m5000, "halvorsen",   "9:10.2",  "1892-02-28", "hamar mjosen")
    add_record (m5000, "halvorsen",   "9:07.2",  "1893-02-26", "hamar mjosen")
    add_record (m5000, "eden",        "8:37.6",  "1894-02-25", "hamar mjosen")
    add_record (m5000, "strunnikov",  "8:37.2",  "1911-02-04", "gamle")
    add_record (m5000, "mathisen",    "8:36.6",  "1914-01-17", "davos")
    add_record (m5000, "mathisen",    "8:36.3",  "1916-01-23", "frogner")
    add_record (m5000, "strom_kristian",
                                      "8:33.7",  "1917-02-04", "trondheim_oya")
    add_record (m5000, "strom_harald","8:27.7",  "1921-02-21", "frogner")
    add_record (m5000, "strom_harald","8:26.5",  "1922-02-18", "frogner")
    add_record (m5000, "ballangrud",  "8:24.2",  "1929-01-19", "davos")
    add_record (m5000, "ballangrud",  "8:21.6",  "1930-01-11", "davos")
    add_record (m5000, "heiden_siem", "8:19.2",  "1933-01-22", "davos")
    add_record (m5000, "stiepl",      "8:18.9",  "1934-02-03", "hamar stadion")
    add_record (m5000, "ballangrud",  "8:17.2",  "1936-01-18", "bislett")
    add_record (m5000, "seyffarth",   "8:13.7",  "1941-02-03", "davos")
    add_record (m5000, "pajor",       "8:13.5",  "1949-02-05", "davos")
    add_record (m5000, "andersen",    "8:07.3",  "1951-01-13", "trondheim_oya")
    add_record (m5000, "mamonov",     "8:03.7",  "1952-01-23", "medeo")
    add_record (m5000, "shilkov",     "7:45.6",  "1955-01-09", "medeo")
    add_record (m5000, "johannesen",  "7:37.8",  "1963-01-26", "bislett")
    add_record (m5000, "nilsson",     "7:34.3",  "1963-02-23", "karuizawa")
    add_record (m5000, "nilsson",     "7:33.2",  "1965-02-13", "bislett")
    add_record (m5000, "maier",       "7:28.1",  "1965-03-04", "notodden")
    add_record (m5000, "verkerk",     "7:26.6",  "1967-02-26", "inzell")
    add_record (m5000, "maier",       "7:26.2",  "1968-01-07", "deventer")
    add_record (m5000, "maier",       "7:22.4",  "1968-02-15", "grenoble")
    add_record (m5000, "maier",       "7:16.7",  "1968-03-09", "inzell")
    add_record (m5000, "verkerk",     "7:13.2",  "1969-03-01", "inzell")
    add_record (m5000, "schenk",      "7:12.0",  "1971-03-13", "inzell")
    add_record (m5000, "schenk",      "7:09.8",  "1972-03-04", "inzell")
    add_record (m5000, "kondakov",    "7:08.92", "1975-03-24", "medeo")
    add_record (m5000, "helden",      "7:07.82", "1976-01-30", "davos")
    add_record (m5000, "kleine",      "7:04.86", "1976-03-05", "inzell")
    add_record (m5000, "kleine",      "7:02.38", "1976-03-12", "inzell")
    add_record (m5000, "stenshjemmet","6:56.9",  "1977-03-19", "medeo")
    add_record (m5000, "baranov",     "6:54.66", "1982-03-18", "medeo")
    add_record (m5000, "shasherin",   "6:49.15", "1984-03-23", "medeo")
    add_record (m5000, "visser",      "6:47.01", "1987-02-14", "thialf")
    add_record (m5000, "karlstad",    "6:45.44", "1987-11-22", "thialf")
    add_record (m5000, "karlstad",    "6:43.59", "1987-12-04", "calgary")
    add_record (m5000, "koss",        "6:41.73", "1991-02-09", "thialf")
    add_record (m5000, "koss",        "6:38.77", "1993-01-22", "thialf")
    add_record (m5000, "koss",        "6:36.57", "1993-03-13", "thialf")
    add_record (m5000, "koss",        "6:35.53", "1993-12-04", "hamar")
    add_record (m5000, "koss",        "6:34.96", "1994-02-13", "hamar")
    add_record (m5000, "romme",       "6:30.63", "1997-12-07", "thialf")
    add_record (m5000, "romme",       "6:22.20", "1998-02-08", "nagano")
    add_record (m5000, "romme",       "6:21.49", "1998-03-27", "calgary")
    add_record (m5000, "romme",       "6:18.72", "2000-01-30", "calgary")
    add_record (m5000, "uytdehaage",  "6:14.66", "2002-02-09", "salt lake city")
    add_record (m5000, "hedrick",     "6:09.68", "2005-11-13", "calgary")
    add_record (m5000, "kramer",      "6:08.78", "2005-11-19", "salt lake city")
    add_record (m5000, "kramer",      "6:07.48", "2007-03-03", "calgary")
    add_record (m5000, "fabris",      "6:07.40", "2007-11-10", "salt lake city")
    add_record (m5000, "kramer",      "6:03.32", "2007-11-17", "calgary")
    add_record (m5000, "bloemen",     "6:01.86", "2017-12-10", "salt lake city")
    add_record (m5000, "poel",        "6:01.56", "2021-12-03", "salt lake city")

    //
    // Men 10000m
    //
    add_record (m10000, "fredriksen", "20:21.4",  "1893-01-14", "museumplein")
    add_record (m10000, "nielsen",    "19:47.4",  "1893-02-13", "neglingeviken")
    add_record (m10000, "ericson",    "19:22.8",  "1894-01-07", "neglingeviken")
    add_record (m10000, "eden",       "19:12.4",  "1894-02-10", "neglingeviken")
    add_record (m10000, "eden",       "17:56.0",  "1895-02-23", "hamar mjosen")
    add_record (m10000, "ostlund",    "17:50.6",  "1900-02-11", "davos")
    add_record (m10000, "mathisen",   "17:46.3",  "1912-02-18", "gamle")
    add_record (m10000, "mathisen",   "17:36.4",  "1913-01-25", "trondheim_oya")
    add_record (m10000, "mathisen",   "17:22.6",  "1913-02-01", "gamle")
    add_record (m10000, "carlsen",    "17:17.4",  "1928-02-05", "davos")
    add_record (m10000, "ballangrud", "17:14.4",  "1938-02-06", "davos")
    add_record (m10000, "mathiesen",  "17:01.5",  "1940-03-03", "hamar stadion")
    add_record (m10000, "andersen",   "16:57.4",  "1949-02-06", "davos")
    add_record (m10000, "andersen",   "16:51.4",  "1952-01-27", "gjovik")
    add_record (m10000, "andersen",   "16:32.6",  "1952-02-10", "hamar stadion")
    add_record (m10000, "johannesen", "15:46.6",  "1960-02-27", "squaw valley")
    add_record (m10000, "nilsson",    "15:33.0",  "1963-02-24", "karuizawa")
    add_record (m10000, "maier",      "15:32.2",  "1966-02-06", "bislett")
    add_record (m10000, "maier",      "15:31.8",  "1967-02-28", "inzell")
    add_record (m10000, "maier",      "15:29.5",  "1968-01-21", "horten")
    add_record (m10000, "maier",      "15:20.3",  "1968-01-28", "bislett")
    add_record (m10000, "guttormsen", "15:16.1",  "1968-03-10", "inzell")
    add_record (m10000, "verkerk",    "15:03.6",  "1969-01-26", "inzell")
    add_record (m10000, "schenk",     "15:01.6",  "1971-02-14", "goteborg")
    add_record (m10000, "schenk",     "14:55.9",  "1971-03-14", "inzell")
    add_record (m10000, "varlamov",   "14:52.73", "1975-03-25", "medeo")
    add_record (m10000, "stensen",    "14:50.31", "1976-01-25", "bislett")
    add_record (m10000, "kleine",     "14:43.92", "1976-03-13", "inzell")
    add_record (m10000, "stensen",    "14:38.08", "1976-03-21", "medeo")
    add_record (m10000, "lyoshkin",   "14:34.33", "1977-04-03", "medeo")
    add_record (m10000, "heiden_eric","14:28.13", "1980-02-23", "lake placid")
    add_record (m10000, "ogloblin",   "14:26.71", "1980-03-29", "medeo")
    add_record (m10000, "gustafson",  "14:23.59", "1982-01-31", "bislett")
    add_record (m10000, "malkov",     "14:21.51", "1984-03-24", "medeo")
    add_record (m10000, "karlstad",   "14:12.14", "1986-02-16", "inzell")
    add_record (m10000, "karlstad",   "14:03.92", "1987-02-15", "thialf")
    add_record (m10000, "karlstad",   "13:48.51", "1987-12-06", "calgary")
    add_record (m10000, "gustafson",  "13:48.20", "1988-02-21", "calgary")
    add_record (m10000, "koss",       "13:43.54", "1991-02-10", "thialf")
    add_record (m10000, "koss",       "13:30.55", "1994-02-20", "hamar")
    add_record (m10000, "romme",      "13:15.33", "1998-02-17", "nagano")
    add_record (m10000, "romme",      "13:08.71", "1998-03-29", "calgary")
    add_record (m10000, "romme",      "13:03.40", "2000-11-16", "thialf")
    add_record (m10000, "uytdehaage", "12:58.92", "2002-02-22",
                                                               "salt lake city")
    add_record (m10000, "verheijen",  "12:57.92", "2005-12-04", "thialf");
    add_record (m10000, "hedrick",    "12:55.11", "2005-12-31",
                                                               "salt lake city")
    add_record (m10000, "kramer",     "12:51.60", "2006-03-19", "calgary")
    add_record (m10000, "kramer",     "12:49.88", "2007-02-11", "thialf")
    add_record (m10000, "kramer",     "12:41.69", "2007-03-10",
                                                               "salt lake city")
    add_record (m10000, "bloemen",    "12:36.30", "2015-11-21",
                                                               "salt lake city")
    add_record (m10000, "fish",       "12:33.86", "2020-02-14",
                                                               "salt lake city")
    add_record (m10000, "poel",       "12:32.95", "2021-02-14", "thialf")
    add_record (m10000, "poel",       "12:30.74", "2022-02-11", "beijing")


    //
    // Men big combination
    //
    add_record (mBIG, "farstad",     "188.958", "1949-02-06", "davos",
                      {times: ["0:41.8",  "8:15.4",  "2:13.9",  "17:39.7"]})
    add_record (mBIG, "sakunenko",   "184.638", "1955-01-10", "medeo",
                      {times: ["0:42.6",  "7:54.9",  "2:13.0",  "16:44.3"]})
    add_record (mBIG, "traub",       "184.490", "1963-01-20", "madonna",
                      {times: ["0:43.1",  "8:12.1",  "2:09.3",  "16:21.6"]})
    add_record (mBIG, "johannesen",  "183.055", "1963-01-20", "hamar",
                      {times: ["0:43.3",  "7:47.1",  "2:13.8",  "16:08.5"]})
    add_record (mBIG, "aaness",      "180.560", "1963-01-27", "bislett",
                      {times: ["0:41.6",  "7:42.8",  "2:10.8",  "16:21.6"]})

    add_record (mBIG, "nilsson",     "178.447", "1963-02-24", "karuizawa",
                      {times: ["0;43.0",  "7:34.3",  "2:10.1",  "15:33.0"]})
    add_record (mBIG, "maier",       "178.253", "1966-02-06", "bislett",
                      {times: ["0:43.6",  "7:33.1",  "2:08.2",  "15:32.2"]})
    add_record (mBIG, "verkerk",     "178.058", "1967-02-12", "bislett",
                      {times: ["0:42.1",  "7:30.4",  "2:10.0",  "15:51.7"]})
    add_record (mBIG, "stiansen",    "176.982", "1968-01-14", "madonna",
                      {times: ["0:41.8",  "7:27.6",  "2:07.7",  "15:57.1"]})
    add_record (mBIG, "traub",       "176.717", "1968-01-21", "inzell",
                      {times: ["0:41.7",  "7:40.2",  "2:07.7",  "15:42.6"]})

    add_record (mBIG, "maier",       "176.340", "1968-02-25", "goteborg",
                      {times: ["0:42.7",  "7.25.00", "2.08.40", "15.26.80"]})
    add_record (mBIG, "verkerk",     "172.058", "1968-03-10", "inzell",
                      {times: ["0:40.4",  "7.19.9",  "2.03.7",  "15.28.7"]})
    add_record (mBIG, "claeson",     "171.758", "1969-03-02", "inzell",
                      {times: ["0:40.2",  "7:17.0",  "2:05.2",  "15:22.5"]})
    add_record (mBIG, "bols",        "171.512", "1970-03-08", "inzell",
                      {times: ["0:40.51", "7:19.8",  "2:04.4",  "15:11.1"]})
    add_record (mBIG, "schenk",      "171.317", "1971-01-10", "bislett",
                      {times: ["0:40.29", "7:25.9",  "2:02.3",  "15:13.4"]})

    add_record (mBIG, "schenk",      "171.130", "1971-02-14", "goteborg",
                      {times: ["0:40.57", "7:18.8",  "2:04.8",  "15:01.6"]})
    add_record (mBIG, "schenk",      "168.248", "1971-03-14", "inzell",
                      {times: ["0:39.82", "7:12.0",  "2:01.3",  "14:55.9"]})
    add_record (mBIG, "schenk",      "167.420", "1972-03-05", "inzell",
                      {times: ["0:39.0",  "7:09.8",  "1:58.8",  "15:16.8"]})
    add_record (mBIG, "kleine",      "165.884", "1976-03-13", "inzell",
                      {times: ["0:40.69", "7:02.38", "1:56.28", "14:43.92"]})
    add_record (mBIG, "storholt",    "163.221", "1977-03-20", "medeo",
                      {times: ["0:38.07", "7:01.16", "1:55.18", "14:52.84"]})

    add_record (mBIG, "heiden_eric", "162.973", "1979-02-11", "bislett",
                      {times: ["0:38.22", "6:59.15", "1:56.05", "14:43.11"]})
    add_record (mBIG, "shasherin",   "161.550", "1983-03-26", "medeo",
                      {times: ["0:37.63", "6:55.43", "1:54.36", "14:45.14"]})
    add_record (mBIG, "shasherin",   "160.807", "1984-03-24", "medeo",
                      {times: ["0:38.04", "6:49.15", "1:53.80", "14:38.39"]})
    add_record (mBIG, "gulyayev_nikolay",
                                     "159.356", "1987-02-15", "thialf",
                      {times: ["0:37.24", "6:51.28", "1:52.70", "14:28.45"]})
    add_record (mBIG, "koss",        "157.396", "1991-02-10", "thialf",
                      {times: ["0:38.46", "6:41.73", "1:52.76", "13:43.54"]})

    add_record (mBIG, "sighel",      "157.150", "1992-03-22", "calgary",
                      {times: ["0:37.38", "6:43.91", "1:52.38", "13:58.39"]})
    add_record (mBIG, "zandstra",    "156.882", "1993-01-23", "thialf",
                      {times: ["0:37.90", "6:40.01", "1:52.90", "13:46.96"]})
    add_record (mBIG, "ritsma",      "156.201", "1994-01-09", "hamar",
                      {times: ["0:37.30", "6:39.46", "1:51.60", "13:55.11"],
                       weekend: 3})
    add_record (mBIG, "shirahata",   "155.966", "1998-01-03", "nagano",
                      {times: ["0:37.78", "6:37.80", "1:50.91", "13:48.72"]})
    add_record (mBIG, "postma",      "153.367", "1998-03-15", "thialf",
                      {times: ["0:36.48", "6:33.09", "1:48.85", "13:45.91"],
                       weekend: 3})

    add_record (mBIG, "ritsma",      "152.651", "1999-02-07", "hamar",
                      {times: ["0:36.51", "6:30.38", "1:48.69", "13:37.47"]})
    add_record (mBIG, "uytdehaage",  "152.482", "2002-03-17", "thialf",
                      {times: ["0:36.59", "6:30.27", "1:49.51", "13:27.25"],
                       weekend: 3})
    add_record (mBIG, "tuitert",     "151.691", "2004-01-11", "thialf",
                      {times: ["0:36.18", "6:27.63", "1:47.41", "13:38.91"],
                       weekend: 3})
    add_record (mBIG, "hedrick",     "150.478", "2004-02-08", "hamar",
                      {times: ["0:36.49", "6:20.69", "1:47.51", "13:21.67"]})
    add_record (mBIG, "davis",       "149.359", "2005-01-09", "salt lake city",
                      {times: ["0:35.85", "6:24.21", "1:43.33", "13:32.90"]})

    add_record (mBIG, "hedrick",     "148.799", "2006-01-22", "calgary",
                      {times: ["0:36.23", "6:16.93", "1:44.92", "13:18.06"]})
    add_record (mBIG, "davis",       "145.742", "2006-03-19", "calgary",
                      {times: ["0:35.17", "6:10.49", "1:42.68", "13:05.94"]})
    add_record (mBIG, "roest",       "145.561", "2019-03-02", "calgary",
                      {times: ["0:35.74", "6:08.27", "1:43.31", "12:51.17"]})


    //
    // Men small combination
    //
    add_record (mSMALL, "dietel",      "163.244", "1981-01-17", "davos",
                        {times: ["0:38.16", "4:07.28", "1:57.83", "7:25.95"]})
    add_record (mSMALL, "falk-larssen","162.734", "1982-01-17", "davos",
                        {times: ["0:38.70", "4:08.00", "1:58.10", "7:13.55"]})
    add_record (mSMALL, "falk-larssen","161.758", "1983-01-23", "davos",
                        {times: ["0:38.62", "4:09.60", "1:56.70", "7:06.38"]})
    add_record (mSMALL, "hoffmann",    "161.158", "1985-01-13", "davos",
                        {times: ["0:38.77", "4:03.31", "1:56.10", "7:11.37"]})
    add_record (mSMALL, "kemkers",     "160.454", "1990-03-17", "inzell",
                        {times: ["0:38.55", "4:02.57", "1:57.95", "7:01.60"]})

    add_record (mSMALL, "zandstra",    "159.753", "1991-02-17", "thialf",
                        {times: ["0:38.17", "4:04.58", "1:56.23", "7:00.77"]})
    add_record (mSMALL, "zandstra",    "156.059", "1991-03-01", "calgary",
                        {times: ["0:37.99", "3:57.64", "1:53.26", "6:47.10"],
                         weekend: 3})
    add_record (mSMALL, "boutiette",   "154.103", "1997-03-15", "calgary",
                        {times: ["0:37.41", "3:53.65", "1:50.09", "6:50.56"]})
    add_record (mSMALL, "verheijen",   "153.767", "1998-03-21", "calgary",
                        {times: ["0:38.46", "3:49.97", "1:50.93", "6:40.03"]})
    add_record (mSMALL, "wennemars",   "153.583", "1998-08-16", "calgary",
                        {times: ["0:37.22", "3:53.35", "1:49.22", "6:50.66"]})

    add_record (mSMALL, "elm",         "152.043", "1998-11-29", "calgary",
                        {times: ["0:37.85", "3:50.76", "1:49.06", "6:33.80"],
                         weekend: 3})
    add_record (mSMALL, "breuer",      "149.283", "1999-03-20", "calgary",
                        {times: ["0:35.68", "3:49.25", "1:47.62", "6:35.22"]})
    add_record (mSMALL, "wennemars",   "149.188", "1999-08-15", "calgary",
                        {times: ["0:35.73", "3:46.37", "1:47.22", "6:39.90"]})
    add_record (mSMALL, "uytdehaage",  "147.665", "2001-03-15", "calgary",
                        {times: ["0:36.93", "3:43.28", "1:46.32", "6:20.82"],
                         weekend: 3})
    add_record (mSMALL, "wennemars",   "146.365", "2005-08-13", "calgary",
                        {times: ["0:35.65", "3:41.84", "1:44.70", "6:28.42"]})



    //
    // Men sprint combination
    //
    add_record (mSPRINT, "borjes",      "163.300", "1971-12-12", "kongsberg",
                         {times: ["0:40.1",  "1:23.8",  "0:39.6",  "1:23.4"]})
    add_record (mSPRINT, "linkovesi",   "156.500", "1972-01-08", "davos",
                         {times: ["0:38.7",  "1:19.3",  "0:38.0",  "1:20.3"]})
    add_record (mSPRINT, "keller",      "155.800", "1972-03-05", "inzell",
                         {times: ["0:38.0",  "1:18.5",  "0:38.5",  "1:20.1"]})
    add_record (mSPRINT, "efskind",     "154.400", "1973-01-14", "davos",
                         {times: ["0:38.0",  "1:17.6",  "0:38.2",  "1:18.8"]})
    add_record (mSPRINT, "muratov",     "153.390", "1975-03-18", "medeo",
                         {times: ["0:37.98", "1:16.92", "0:37.85", "1:18.20"]})

    add_record (mSPRINT, "kulikov",     "153.250", "1975-03-29", "medeo",
                         {times: ["0:37.20", "1:19.12", "0:37.00", "1:18.98"]})
    add_record (mSPRINT, "kulikov",     "151.190", "1976-03-21", "medeo",
                         {times: ["0:37.24", "1:15.70", "0:38.10", "1:16.00"]})
    add_record (mSPRINT, "heiden_eric", "150.250", "1980-01-13", "davos",
                         {times: ["0:38.25", "1:15.14", "0:37.23", "1:13.60"]})
    add_record (mSPRINT, "boucher",     "148.785", "1981-01-31", "davos",
                         {times: ["0:37.88", "1:13.96", "0:37.23", "1:13.39"]})
    add_record (mSPRINT, "pegov",       "146.955", "1983-03-26", "medeo",
                         {times: ["0:36.68", "1:12.58", "0:36.57", "1:14.83"]})

    add_record (mSPRINT, "zhelezovsky", "145.945", "1989-02-26", "thialf",
                         {times: ["0:36.52", "1:12.58", "0:36.83", "1:12.61"]})
    add_record (mSPRINT, "jansen",      "145.580", "1993-03-20", "calgary",
                         {times: ["0:36.41", "1:13.14", "0:36.02", "1:13.16"]})
    add_record (mSPRINT, "jansen",      "144.815", "1994-01-30", "calgary",
                         {times: ["0:35.96", "1:13.04", "0:35.76", "1:13.15"]})
    add_record (mSPRINT, "miyabe",      "144.445", "1994-03-26", "calgary",
                         {times: ["0:35.86", "1:12.62", "0:36.09", "1:12.37"]})
    add_record (mSPRINT, "horii",       "143.425", "1996-03-03", "calgary",
                         {times: ["0:35.87", "1:11.67", "0:35.67", "1:12.10"]})

    add_record (mSPRINT, "wotherspoon", "141.995", "1997-11-23", "calgary",
                         {times: ["0:35.50", "1:10.76", "0:35.77", "1:10.69"]})
    add_record (mSPRINT, "wotherspoon", "140.050", "1999-01-16", "calgary",
                         {times: ["35:27", "1:09.09", "35:53", "1:09.41"]})
    add_record (mSPRINT, "wotherspoon", "138.310", "1999-02-21", "calgary",
                         {times: ["0:34.76", "1:08.66", "0:34.93", "1:08.58"]})
    add_record (mSPRINT, "wotherspoon", "137.285", "2002-12-02",
                                                               "salt lake city",
                         {times: ["0:34.85", "1:07.72", "0:34.66", "1:07.83"]})
    add_record (mSPRINT, "wotherspoon", "137.270", "2003-01-12",
                                                               "salt lake city",
                         {times: ["0:34.41", "1:07.89", "0:34.77", "1:08.29"]})

    add_record (mSPRINT, "wotherspoon", "137.230", "2003-01-19", "calgary",
                         {times: ["0:34.41", "1:08.41", "0:34.49", "1:08.25"]})
    add_record (mSPRINT, "groothuis",   "136.810", "2012-01-29", "calgary",
                         {times: ["0:34.84", "1:07.50", "0:34.74", "1:06.96"]})
    add_record (mSPRINT, "mulder_michel",
                                        "136.790", "2013-01-27",
                                                              "salt lake city",
                         {times: ["0:34.47", "1:07.49", "0:34.75", "1:07.65"]})
    add_record (mSPRINT, "verbij",      "136.065", "2017-02-26", "calgary",
                         {times: ["0:34.48", "1:06.73", "0:34.25", "1:07.94"]})



    //
    // Men   2x500m
    //
    add_record (mD500, "shimizu",      "68.960", "2001-03-10", "salt lake city",
                       {times: ["0:34.64", "0:34.32"]})
    add_record (mD500, "kang-seok",    "68.690", "2007-03-09", "salt lake city",
                       {times: ["0:34.44", "0:34.25"]})
    add_record (mD500, "wotherspoon",  "68.310", "2008-03-15", "calgary",
                       {times: ["0:34.26", "0:34.05"]})
                       // https://www.guinnessworldrecords.com/world-records/
                       // fastest-speed-skating-2-x-500-metres-(male)


    //
    // Men Team Pursuit
    //
    add_record (mTP,   "USA",         "3:48.56", "2004-11-13", "hamar",
                       {members: ["boutiette", "hedrick", "parra"]})
    add_record (mTP,   "NED",         "3:46.44", "2004-11-21", "berlin",
                       {members: ["verheijen", "wennemars", "tuitert"]})
    add_record (mTP,   "CAN",         "3:39.69", "2005-11-12", "calgary",
                       {members: ["elm", "dankers", "morrison"]})
    add_record (mTP,   "NED",         "3:37.80", "2007-03-11", "salt lake city",
                       {members: ["verheijen", "wennemars", "kramer"]})
    add_record (mTP,   "NED",         "3:37.17", "2013-11-09", "calgary",
                       {members: ["kramer", "blokhuijsen", "verweij"]})
    add_record (mTP,   "NED",         "3:35.60", "2013-11-16", "salt lake city",
                       {members: ["kramer", "blokhuijsen", "verweij"]})
    add_record (mTP,   "NED",         "3:34.68", "2020-02-16", "salt lake city",
                       {members: ["kramer", "de vries", "bosker"]})
    add_record (mTP,   "USA",         "3:34.47", "2021-12-05", "salt lake city",
                       {members: ["mantia", "lehman", "dawson"]})
    add_record (mTP,   "NOR",         "3:34.22", "2024-01-05", "thialf",
                       {members: ["eitrem", "kongshaug", "pederson"]})

    //
    // Men Team Sprint
    //
    add_record (mTS,   "CAN",         "1:17.31", "2017-12-01", "calgary")

    //
    // Women   500m
    //
    add_record (w500, "nehringowa",  "1:02.0",  "1931-02-15", "warsaw")
    add_record (w500, "landbeck",    "0:58.7",  "1932-01-09", "davos")
    add_record (w500, "lie",         "0:56.0",  "1932-03-20", "brandbu")
    add_record (w500, "landbeck",    "0:51.5",  "1933-01-20", "davos")
    add_record (w500, "landbeck",    "0:51.3",  "1934-01-13", "davos")

    add_record (w500, "lie",         "0:50.3",  "1934-02-12", "frogner")
    add_record (w500, "nilsen",      "0:49.3",  "1935-02-27", "frogner")
    add_record (w500, "nilsen",      "0:46.4",  "1937-01-30", "davos")
    add_record (w500, "rylova",      "0:45.6",  "1955-01-11", "medeo")
    add_record (w500, "voronina artamonova","0:44.9","1962-01-27","medeo")

    add_record (w500, "sidorova",    "0:44.7",  "1968-02-03", "davos")
    add_record (w500, "schleiermacher","0:44.6","1969-02-04", "davos")
    add_record (w500, "sidorova",    "0:43.29", "1970-01-09", "medeo")
    add_record (w500, "sidorova",    "0:43.22", "1970-01-17", "medeo")
    add_record (w500, "henning",     "0:42.91", "1971-02-20", "inzell")

    add_record (w500, "henning",     "0:42.75", "1971-02-21", "inzell")
    add_record (w500, "henning",     "0:42.5",  "1972-01-07", "davos")
    add_record (w500, "young",       "0:41.8",  "1973-01-19", "davos")
    add_record (w500, "averina",     "0:41.70", "1975-03-11", "medeo")
    add_record (w500, "sadchikova",  "0:41.69", "1975-03-21", "medeo")

    add_record (w500, "averina",     "0:41.06", "1975-03-29", "medeo")
    add_record (w500, "young",       "0:40.91", "1976-01-26", "davos")
    add_record (w500, "young",       "0:40.68", "1976-03-13", "inzell")
    add_record (w500, "rothenburger","0:40.28", "1981-03-27", "medeo")
    add_record (w500, "rothenburger","0:40.18", "1981-03-28", "medeo")

    add_record (w500, "rothenburger","0:39.69", "1983-03-25", "medeo")
    add_record (w500, "enke",        "0:39.52", "1986-03-21", "medeo")
    add_record (w500, "blair",       "0:39.43", "1987-03-19", "thialf")
    add_record (w500, "rothenburger","0:39.39", "1987-12-06", "calgary")
    add_record (w500, "blair",       "0:39.10", "1988-02-22", "calgary")

    add_record (w500, "blair",       "0:38.99", "1994-03-26", "calgary")
    add_record (w500, "blair",       "0:38.69", "1995-02-02", "calgary")
    add_record (w500, "le may",      "0:37.90", "1997-11-22", "calgary")
    add_record (w500, "le may",      "0:37.90", "1997-11-23", "calgary")
    add_record (w500, "le may",      "0:37.71", "1997-12-28", "calgary")

    add_record (w500, "le may",      "0:37.55", "1997-12-29", "calgary")
    add_record (w500, "le may",      "0:37.40", "2001-01-06", "calgary")
    add_record (w500, "le may",      "0:37.29", "2001-03-09", "salt lake city")
    add_record (w500, "le may",      "0:37.22", "2001-12-09", "calgary")
    add_record (w500, "wolf",        "0:37.04", "2007-03-10", "salt lake city")

    add_record (w500, "wolf",        "0:37.02", "2007-11-16", "calgary")
    add_record (w500, "wolf",        "0:37.00", "2009-12-11", "salt lake city")
    add_record (w500, "jing",        "0:36.94", "2012-01-29", "calgary")
    add_record (w500, "sang-hwa",    "0:36.80", "2013-01-20", "calgary")
    add_record (w500, "sang-hwa",    "0:36.74", "2013-11-09", "calgary")

    add_record (w500, "sang-hwa",    "0:36.57", "2013-11-15", "salt lake city")
    add_record (w500, "sang-hwa",    "0:36.36", "2013-11-16", "salt lake city")



    //
    // Women  1000m
    //
    add_record (w1000, "nehringowa",  "2:26.4",  "1929-01-26", "warsaw")
    add_record (w1000, "landbeck",    "2:08.8",  "1932-01-10", "davos")
    add_record (w1000, "nehringowa",  "2:03.4",  "1932-01-17", "engelberg")
    add_record (w1000, "lie",         "1:51.2",  "1932-03-20", "brandbu")
    add_record (w1000, "landbeck",    "1:48.5",  "1933-01-22", "davos")

    add_record (w1000, "lie",         "1:48.1",  "1934-01-14", "davos")
    add_record (w1000, "lesche",      "1:45.7",  "1934-02-11", "frogner")
    add_record (w1000, "klein",       "1:42.3",  "1935-03-01", "kongsberg")
    add_record (w1000, "nilsen",      "1:38.8",  "1937-01-31", "davos")
    add_record (w1000, "kondakova",   "1:36.8",  "1951-02-05", "medeo")

    add_record (w1000, "zhukova",     "1:36.6",  "1952-01-22", "medeo")
    add_record (w1000, "selikhova",   "1:36.4",  "1953-01-30", "medeo")
    add_record (w1000, "rylova",      "1:33.4",  "1955-01-12", "medeo")
    add_record (w1000, "skoblikova",  "1:31.8",  "1963-02-22", "karuizawa")
    add_record (w1000, "kaiser",      "1:31.0",  "1968-03-03", "inzell")

    add_record (w1000, "brom",        "1:30.0",  "1969-02-09", "davos")
    add_record (w1000, "titova",      "1:29.5",  "1970-01-09", "medeo")
    add_record (w1000, "fechina",     "1:29.0",  "1970-01-10", "medeo")
    add_record (w1000, "kaiser",      "1:29.0",  "1971-01-16", "davos")
    add_record (w1000, "titova",      "1:29.0",  "1971-02-20", "inzell")

    add_record (w1000, "titova",      "1:27.7",  "1971-02-21", "inzell")
    add_record (w1000, "henning",     "1:27.3",  "1972-01-08", "davos")
    add_record (w1000, "averina",     "1:26.40", "1974-04-02", "medeo")
    add_record (w1000, "averina",     "1:26.12", "1975-03-12", "medeo")
    add_record (w1000, "averina",     "1:25.28", "1975-03-22", "medeo")

    add_record (w1000, "averina",     "1:23.46", "1975-03-29", "medeo")
    add_record (w1000, "petrusyova",  "1:23.01", "1980-03-27", "medeo")
    add_record (w1000, "rothenburger","1:20.95", "1981-03-27", "medeo")
    add_record (w1000, "petrusyova",  "1:20.81", "1980-03-28", "medeo")
    add_record (w1000, "petrusyova",  "1:19.31", "1983-03-26", "medeo")

    add_record (w1000, "enke",        "1:18.84", "1986-02-22", "karuizawa")
    add_record (w1000, "enke",        "1:18.11", "1987-12-05", "calgary")
    add_record (w1000, "rothenburger","1:17.65", "1988-02-26", "calgary")
    add_record (w1000, "le may",      "1:16.07", "1997-11-22", "calgary")
    add_record (w1000, "witty",       "1:15.43", "1997-11-23", "calgary")

    add_record (w1000, "witty",       "1:14.96", "1998-03-28", "calgary")
    add_record (w1000, "garbrecht",   "1:14.61", "1999-02-21", "calgary")
    add_record (w1000, "witty",       "1:14.58", "2001-03-03", "calgary")
    add_record (w1000, "garbrecht",   "1:14.13", "2001-03-10", "salt lake city")
    add_record (w1000, "volker",      "1:14.06", "2001-12-02", "salt lake city")

    add_record (w1000, "witty",       "1:13.83", "2002-02-17", "salt lake city")
    add_record (w1000, "klassen",     "1:13.46", "2006-03-24", "calgary")
    add_record (w1000, "klassen",     "1:13.11", "2006-03-25", "calgary")
    add_record (w1000, "nesbitt",     "1:12.68", "2012-01-28", "calgary")
    add_record (w1000, "bowe",        "1:12.58", "2013-11-17", "salt lake city")

    add_record (w1000, "richardson",  "1:12.51", "2015-11-14", "calgary")
    add_record (w1000, "bowe",        "1:12.18", "2015-11-22", "salt lake city")
    add_record (w1000, "kodaira",     "1:12.09", "2017-12-09", "salt lake city")
    add_record (w1000, "bowe",        "1:11.61", "2019-03-09", "salt lake city")

    //
    // Women  1500m
    //
    add_record (w1500, "nehringowa",  "3:28.0",  "1929-01-27", "warsaw")
    add_record (w1500, "nehringowa",  "3:10.4",  "1932-01-10", "davos")
    add_record (w1500, "lie",         "3:08.1",  "1932-03-07", "frogner")
    add_record (w1500, "lesche",      "2:49.0",  "1933-02-26", "helsinki")
    add_record (w1500, "blikken",     "2:40.0",  "1934-02-12", "frogner")

    add_record (w1500, "nilsen",      "2:38.1",  "1937-01-23", "frogner")
    add_record (w1500, "thorvaldsen", "2:37.5",  "1950-02-25", "gjovik")
    add_record (w1500, "zhukova",     "2:36.7",  "1950-03-17", "kirov")
    add_record (w1500, "isakova",     "2:29.5",  "1951-02-12", "medeo")
    add_record (w1500, "shchegoleyeva","2:25.5", "1953-01-30", "medeo")

    add_record (w1500, "skoblikova",  "2:25.2",  "1960-02-21", "squaw valley")
    add_record (w1500, "voronina artamonova","2:19.0","1962-01-27","medeo")
    add_record (w1500, "schut",       "2:18.5",  "1969-02-22", "inzell")
    add_record (w1500, "statkevich",  "2:17.8",  "1970-01-17", "medeo")
    add_record (w1500, "keulen deelstra","2:17.2","1970-03-14","inzell")

    add_record (w1500, "kaiser",      "2:15.8",  "1971-01-15", "davos")
    add_record (w1500, "averina",     "2:14.00", "1974-04-01", "medeo")
    add_record (w1500, "averina",     "2:09.90", "1975-03-11", "medeo")
    add_record (w1500, "vorobyeva",   "2:07.18", "1978-04-10", "medeo")
    add_record (w1500, "petrusyova",  "2:06.01", "1981-01-03", "medeo")

    add_record (w1500, "petrusyova",  "2:05.39", "1981-03-27", "medeo")
    add_record (w1500, "petrusyova",  "2:04.04", "1983-03-25", "medeo")
    add_record (w1500, "enke",        "2:03.42", "1984-02-09", "sarajevo")
    add_record (w1500, "mitscherlich","2:03.34", "1984-03-24", "medeo")
    add_record (w1500, "enke",        "2:02.23", "1986-03-06", "inzell")

    add_record (w1500, "enke",        "1:59.30", "1986-03-22", "medeo")
    add_record (w1500, "le may",      "1:57.87", "1997-11-29", "calgary")
    add_record (w1500, "timmer",      "1:57.58", "1998-02-16", "nagano")
    add_record (w1500, "friesinger",  "1:56.95", "1998-03-29", "calgary")
    add_record (w1500, "thomas",      "1:55.50", "1999-03-20", "calgary")

    add_record (w1500, "friesinger",  "1:54.38", "2001-03-04", "calgary")
    add_record (w1500, "friesinger",  "1:54.02", "2002-02-20", "salt lake city")
    add_record (w1500, "klassen",     "1:53.87", "2005-01-09", "salt lake city")
    add_record (w1500, "klassen",     "1:53.77", "2005-10-28", "calgary")
    add_record (w1500, "friesinger",  "1:53.22", "2005-11-06", "calgary")

    add_record (w1500, "klassen",     "1:51.79", "2005-11-20", "salt lake city")
    add_record (w1500, "bowe",        "1:51.59", "2015-11-15", "calgary")
    add_record (w1500, "richardson",  "1:50.85", "2015-11-21", "salt lake city")
    add_record (w1500, "takagi_miho", "1:49.84", "2019-03-10", "salt lake city")

    //
    // Women  3000m
    //
    add_record (w3000, "nehringowa",  "6:52.8",  "1931-02-08", "warsaw")
    add_record (w3000, "nehringowa",  "6:22.4",  "1935-02-09", "warsaw")
    add_record (w3000, "klein",       "6:12.0",  "1936-02-01", "stockholm")
    add_record (w3000, "nilsen",      "5:29.6",  "1937-01-30", "davos")
    add_record (w3000, "kholshchevnikova","5:29.1","1949-01-30","moscow")

    add_record (w3000, "karelina",    "5:26.7",  "1951-02-11", "medeo")
    add_record (w3000, "akifyeva",    "5:22.2",  "1951-02-16", "medeo")
    add_record (w3000, "zhukova",     "5:21.3",  "1952-01-08", "medeo")
    add_record (w3000, "zhukova",     "5:13.8",  "1953-01-23", "medeo")
    add_record (w3000, "voronina artamonova","5:06.0","1962-01-28","medeo")

    add_record (w3000, "skoblikova",  "5:05.9",  "1967-01-15", "bislett")
    add_record (w3000, "kaiser",      "5:04.8",  "1967-01-29", "davos")
    add_record (w3000, "kaiser",      "4:56.8",  "1967-03-05", "inzell")
    add_record (w3000, "kaiser",      "4:54.6",  "1968-02-03", "davos")
    add_record (w3000, "schut",       "4:52.0",  "1969-02-02", "grenoble")

    add_record (w3000, "schut",       "4:50.4",  "1969-02-09", "davos")
    add_record (w3000, "schut",       "4:50.3",  "1969-02-23", "inzell")
    add_record (w3000, "kaiser",      "4:46.5",  "1971-01-16", "davos")
    add_record (w3000, "kuznetsova",  "4:44.69", "1975-01-12", "medeo")
    add_record (w3000, "swider",      "4:40.85", "1976-03-13", "inzell")

    add_record (w3000, "stepanskaya", "4:40.59", "1976-03-16", "medeo")
    add_record (w3000, "stepanskaya", "4:31.00", "1976-03-23", "medeo")
    add_record (w3000, "schonbrunn",  "4:21.70", "1981-03-28", "medeo")
    add_record (w3000, "mitscherlich","4:20.91", "1984-03-23", "medeo")
    add_record (w3000, "enke",        "4:18.02", "1986-03-21", "medeo")

    add_record (w3000, "gennip",      "4:16.85", "1987-03-19", "thialf")
    add_record (w3000, "schonbrunn",  "4:16.76", "1987-12-05", "calgary")
    add_record (w3000, "gennip",      "4:11.94", "1988-02-23", "calgary")
    add_record (w3000, "niemann",     "4:10.80", "1990-12-09", "calgary")
    add_record (w3000, "niemann",     "4:09.32", "1994-03-25", "calgary")

    add_record (w3000, "niemann",     "4:07.80", "1997-12-07", "thialf")
    add_record (w3000, "pechstein",   "4:07.13", "1997-12-13", "hamar")
    add_record (w3000, "niemann",     "4:05.08", "1998-03-14", "thialf")
    add_record (w3000, "niemann",     "4:01.67", "1998-03-27", "calgary")
    add_record (w3000, "niemann",     "4:00.51", "2000-01-30", "calgary")

    add_record (w3000, "niemann",     "4:00.26", "2001-02-17", "hamar")
    add_record (w3000, "pechstein",   "3:59.26", "2001-03-02", "calgary")
    add_record (w3000, "pechstein",   "3:57.70", "2002-02-10", "salt lake city")
    add_record (w3000, "klassen",     "3:55.75", "2005-11-12", "calgary")
    add_record (w3000, "klassen",     "3:53.34", "2006-03-18", "calgary")

    add_record (w3000, "sablikova",   "3:53.31", "2019-03-02", "calgary")
    add_record (w3000, "sablikova",   "3:52.02", "2019-03-09", "salt lake city")

    //
    // Women  5000m
    //
    add_record (w5000, "nehringowa", "11:30.5",  "1931-02-15", "warsaw")
    add_record (w5000, "nehringowa", "10:54.8",  "1935-02-10", "warsaw")
    add_record (w5000, "lesche",     "10:15.3",  "1936-02-02", "stockholm")
    add_record (w5000, "nilsen",      "9:28.3",  "1937-01-31", "davos")
    add_record (w5000, "lesche",      "9:26.8",  "1949-02-13", "kongsberg")

    add_record (w5000, "zhukova",     "9:22.3",  "1950-03-17", "kirov")
    add_record (w5000, "karelina",    "9:10.7",  "1951-02-12", "medeo")
    add_record (w5000, "zhukova",     "9:01.6",  "1953-01-24", "medeo")
    add_record (w5000, "SUSPENDED",   undefined, "1955-01-01", "",
               {suspended_message: "Record suspended from the ISU " +
                                   "Congress of 1955 till " +
                                  "the ISU Congress of 1982"})
    add_record (w5000, "mitscherlich","7:40.97", "1983-01-23", "thialf")
    add_record (w5000, "schonbrunn",  "7:39.44", "1984-01-15", "medeo")

    add_record (w5000, "mitscherlich","7:34.52", "1984-03-24", "medeo")
    add_record (w5000, "mitscherlich","7:32.82", "1985-02-10", "sarajevo")
    add_record (w5000, "mitscherlich","7:31.45", "1986-01-12", "geithus")
    add_record (w5000, "mitscherlich","7:20.99", "1986-03-22", "medeo")
    add_record (w5000, "gennip",      "7:20.36", "1987-03-20", "thialf")

    add_record (w5000, "gennip",      "7:14.13", "1988-02-28", "calgary")
    add_record (w5000, "niemann",     "7:13.29", "1993-12-06", "hamar")
    add_record (w5000, "niemann",     "7:03.26", "1994-03-26", "calgary")
    add_record (w5000, "pechstein",   "6:59.61", "1998-02-20", "nagano")
    add_record (w5000, "niemann",     "6:58.63", "1998-03-28", "calgary")

    add_record (w5000, "niemann",     "6:57.24", "1999-02-07", "hamar")
    add_record (w5000, "niemann",     "6:56.84", "2000-01-16", "hamar")
    add_record (w5000, "niemann",     "6:55.34", "2000-11-15", "thialf")
    add_record (w5000, "niemann",     "6:52.44", "2001-03-10", "salt lake city")
    add_record (w5000, "pechstein",   "6:46.91", "2002-02-23", "salt lake city")

    add_record (w5000, "sablikova",   "6:45.61", "2007-03-11", "salt lake city")
    add_record (w5000, "sablikova",   "6:42.66", "2011-02-18", "salt lake city")
    add_record (w5000, "sablikova",   "6:42.01", "2019-03-03", "calgary")
    add_record (w5000, "voronina",    "6:39.02", "2020-02-15", "salt lake city")

    //
    // Women 10000m
    //
    add_record (w10000, "nehringowa", "23:48.5",  "1935-12-30", "vienna")
    add_record (w10000, "SUSPENDED",   undefined, "1953-01-01", "",
               {suspended_message: "Record suspended from the ISU Congress " +
                                   "of 1953 onwards; the following " +
                                   "records are not official"})
    add_record (w10000, "niemczyk",   "22:46.4",  "1953-02-10", "zakopane")
    add_record (w10000, "donker",     "21:52.1",  "1972-01-27", "jaap eden")
    add_record (w10000, "pasveer",    "19:48.3",  "1980-03-04", "groningen")
    add_record (w10000, "swider",     "17:37.35", "1980-03-16", "savalen")

    add_record (w10000, "stam",       "17:20.0",  "1984-03-11", "alkmaar")
    add_record (w10000, "kooiman",    "16:56.8",  "1984-03-16", "haarlem")
    add_record (w10000, "jensen",     "16:49.82", "1985-03-07", "savalen")
    add_record (w10000, "mitscherlich",
                                        "16:27.8",  "1987-03-11", "kuchwald")
    add_record (w10000, "mulder_grietje",
                                        "15:56.81", "1988-03-16", "thialf")

    add_record (w10000, "gennip",     "15:25.25", "1988-03-19", "thialf")
    add_record (w10000, "niemann",    "14:22.60", "1994-03-27", "calgary")
    add_record (w10000, "sablikova",  "14:08.28", "2006-03-23", "calgary")
    add_record (w10000, "sablikova",  "13:48.33", "2007-03-15", "calgary")


    //
    // Women small combination
    //
    add_record (wSMALL, "mitscherlich","177.669", "1983-01-23", "thialf")
    add_record (wSMALL, "schonbrunn",  "174.710", "1984-01-15", "medeo")
    add_record (wSMALL, "mitscherlich","171.760", "1984-03-24", "medeo")
    add_record (wSMALL, "enke",        "168.271", "1986-03-22", "medeo")
    add_record (wSMALL, "niemann",     "167.282", "1994-01-09", "hamar", W3)

    add_record (wSMALL, "niemann",     "165.708", "1997-02-16", "nagano", W3)
    add_record (wSMALL, "niemann",     "163.020", "1998-03-15", "thialf", W3)
    add_record (wSMALL, "niemann",     "161.479", "1999-02-07", "hamar")
    add_record (wSMALL, "klassen",     "159.723", "2003-01-26",
                                                              "salt lake city")
    add_record (wSMALL, "klassen",     "159.605", "2005-01-09",
                                                              "salt lake city")

    add_record (wSMALL, "klassen",     "157.177", "2006-01-22", "calgary")
    add_record (wSMALL, "klassen",     "154.580", "2006-03-19", "calgary")


    //
    // Women mini combination
    //
    add_record (wMINI, "kondakova",   "207.484", "1956-02-05", "kvarnsveden")
    add_record (wMINI, "artamonova",  "206.016", "1956-02-06", "sverdlovsk")
    add_record (wMINI, "romanova",    "203.299", "1958-01-27", "medeo")
    add_record (wMINI, "haase",       "202.834", "1960-01-20", "davos")
    add_record (wMINI, "rylova",      "196.416", "1960-01-21", "medeo")

    add_record (wMINI, "voronina artamonova",
                                         "189.033", "1962-01-28", "medeo")
    add_record (wMINI, "kaiser",      "188.634", "1967-03-05", "inzell")
    add_record (wMINI, "schut",       "185.500", "1969-02-23", "inzell")
    add_record (wMINI, "statkevich",  "184.053", "1970-01-18", "medeo")
    add_record (wMINI, "kaiser",      "182.817", "1971-01-16", "davos")

    add_record (wMINI, "keulen deelstra",
                                         "182.805", "1972-01-16", "inzell")
    add_record (wMINI, "averina",     "180.090", "1974-04-02", "medeo")
    add_record (wMINI, "averina",     "176.930", "1975-03-12", "medeo")
    add_record (wMINI, "burka",       "176.468", "1976-03-13", "inzell")
    add_record (wMINI, "stepanskaya", "173.810", "1976-03-23", "medeo")

    add_record (wMINI, "petrusyova",  "173.434", "1980-03-27", "medeo")
    add_record (wMINI, "petrusyova",  "171.149", "1981-01-03", "medeo")
    add_record (wMINI, "petrusyova",  "168.387", "1981-03-28", "medeo")
    add_record (wMINI, "enke",        "168.271", "1982-02-14", "inzell")
    add_record (wMINI, "petrusyova",  "166.682", "1983-03-26", "medeo")

    add_record (wMINI, "hunyady",     "164.658", "1994-03-27", "calgary")
    add_record (wMINI, "thomas",      "163.901", "1996-03-23", "calgary")
    add_record (wMINI, "timmer",      "163.315", "1997-03-16", "calgary")
    add_record (wMINI, "tabata",      "162.731", "1998-08-16", "calgary")
    add_record (wMINI, "sundstrom",   "161.439", "1998-11-29", "calgary", W3)

    add_record (wMINI, "thomas",      "158.183", "1999-03-21", "calgary")
    add_record (wMINI, "klassen",     "155.576", "2001-03-17", "calgary", W3)
    add_record (wMINI, "klassen",     "155.456", "2006-12-30", "calgary", W3)
    add_record (wMINI, "nesbitt",     "153.856", "2007-11-11", "salt lake city",
                                                                   W3)
    add_record (wMINI, "beune",       "153.776", "2018-03-10", "salt lake city")


    //
    // Women, old small combination (500, 3000, 1000, and 5000 meters)
    //
    add_record (wO_SML, "kholshchevnikova",
                                       "212.890", "1949-02-13", "kongsberg")
    add_record (wO_SML, "kondakova",   "210.431", "1951-02-05", "medeo")
    add_record (wO_SML, "karelina",    "208.820", "1951-02-12", "medeo")
    add_record (wO_SML, "zhukova",     "208.750", "1952-01-22", "medeo")
    add_record (wO_SML, "zhukova",     "204.010", "1953-01-24", "medeo")
    add_record (wO_SML, "rylova",      "203.920", "1955-01-22", "medeo")
    add_record (wO_SML, "SUSPENDED",   undefined, "1955-04-01", "",
               {suspended_message: "Record suspended from the ISU Congress " +
                                   "of 1955 onwards"})
                 

    //
    // Women sprint combination
    //
    add_record (wSPRINT, "pflug",       "183.085", "1972-02-27", "eskilstuna")
    add_record (wSPRINT, "burka",       "175.050", "1973-01-14", "davos")
    add_record (wSPRINT, "young",       "173.450", "1973-01-20", "davos")
    add_record (wSPRINT, "averina",     "168.285", "1975-03-29", "medeo")
    add_record (wSPRINT, "young",       "166.210", "1976-03-13", "inzell")

    add_record (wSPRINT, "rothenburger","162.275", "1981-03-28", "medeo")
    add_record (wSPRINT, "rothenburger","161.120", "1983-03-26", "medeo")
    add_record (wSPRINT, "enke",        "160.060", "1986-02-23", "karuizawa")
    add_record (wSPRINT, "blair",       "159.435", "1989-02-26", "thialf")
    add_record (wSPRINT, "blair",       "159.390", "1992-01-19", "davos")

    add_record (wSPRINT, "blair",       "157.405", "1994-01-30", "calgary")
    add_record (wSPRINT, "blair",       "156.505", "1994-03-26", "calgary")
    add_record (wSPRINT, "blair",       "156.435", "1995-02-11", "calgary", W1)
    add_record (wSPRINT, "le may",      "151.690", "1997-11-23", "calgary")
    add_record (wSPRINT, "garbrecht",   "151.605", "1999-02-21", "calgary")

    add_record (wSPRINT, "le may",      "150.085", "2001-01-07", "calgary")
    add_record (wSPRINT, "volker",      "149.915", "2001-12-02",
                                                              "salt lake city")
    add_record (wSPRINT, "garbrecht",   "149.305", "2003-01-12",
                                                              "salt lake city")
    add_record (wSPRINT, "klassen",     "149.305", "2006-03-25", "calgary")
    add_record (wSPRINT, "jing",        "148.610", "2012-01-29", "calgary")

    add_record (wSPRINT, "richardson",  "147.735", "2013-01-20", "calgary")
    add_record (wSPRINT, "kodaira",     "146.390", "2017-02-26", "calgary")


    //
    // Women 2x500m
    //
    add_record (wD500, "le may",       "74.720", "2001-03-09", "salt lake city",
                       {times: ["0:37.43", "0:37.29"]})
    add_record (wD500, "wolf",         "74.420", "2007-03-10", "salt lake city",
                       {times: ["0:37.38", "0:37.04"]})
    add_record (wD500, "richardson",   "74.190", "2013-12-28", "salt lake city",
                       {times: ["0:37.10", "0:37.09"]})
                       // https://www.guinnessworldrecords.com/world-records/
                       // fastest-speed-skating-2-x-500-metres-(female)

    //
    // Women Team Pursuit
    //
    add_record (wTP,   "CAN",         "3:05.49", "2004-11-14", "hamar",
                       {members: ["groves", "hughes", "klassen"]})
    add_record (wTP,   "CAN",         "3:03.07", "2004-11-20", "berlin",
                       {members: ["groves", "hughes", "klassen"]})
    add_record (wTP,   "GER",         "2:56.04", "2005-11-13", "calgary",
                       {members: ["friesinger", "pechstein", "anschutz"]})
    add_record (wTP,   "CAN",         "2:55.79", "2009-12-06", "calgary",
                       {members: ["groves", "schussler", "nesbitt"]})
    add_record (wTP,   "JPN",         "2:55.77", "2017-11-10", "thialf",
                       {members: ["takagi_miho", "sato", "takagi_nana"]})
    add_record (wTP,   "JPN",         "2:53.88", "2017-12-02", "calgary",
                       {members: ["takagi_miho", "kikuchi", "takagi_nana"]})
    add_record (wTP,   "JPN",         "2:50.87", "2017-12-08", "salt lake city",
                       {members: ["takagi_miho", "sato", "takagi_nana"]})
    add_record (wTP,   "JPN",         "2:50.76", "2020-02-16", "salt lake city",
                       {members: ["takagi_miho", "sato", "takagi_nana"]})

    //
    // Women Team Sprint
    //
    add_record (wTS,   "RUS",         "1:24.84", "2017-12-01", "calgary")
    add_record (wTS,   "NED",         "1:24.02", "2020-02-13", "salt lake city")


    //
    // Mixed Relay
    //
    add_record (RELAY, "NED",         "2:55.53", "2023-11-12", "obihiro")


    //
    // Calculate the number of days each record stands. *Must* be calculated
    // *after* all the records have been added
    //
    for (let i = 0; i < __progression . length; i ++) {
        let end;
        let entry_i = __progression [i]
        for (j = i + 1; j < __progression . length; j ++) {
            const entry_j = __progression [j];
            if (!entry_i . event . equal (entry_j . event)) {
                    break
            }
            if (entry_j . y < entry_i . y) { // Better record
                end = entry_j . date
                break
            }
            if (entry_j . suspended) {
                end = entry_j . date
                break
            }
        }
        if (!end) {
            //
            // Use today, at noon
            //
            end = new Date ()
            end . setHours (12, 0, 0, 0)
            //
            // This also means it is the current record, but only if it's
            // not suspeneded
            //
            if (entry_i . skater != "SUSPENDED") {
                entry_i . current = 1
            }
        }
        else {
            //
            // End date, at noon
            //
            end = new Date (end + "T12:00:00")
        }
        begin = new Date (entry_i . date + "T12:00:00")
        entry_i . duration = Math . round ((end - begin) /
                                                 (24 * 60 * 60 * 1000))
    }
}



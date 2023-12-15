//
// sec2time
//
// Given a number of seconds, format them as a time
//
function sec2time (seconds) {
    const min = Math . floor (seconds / 60)
    const sec = seconds - min * 60
    return min + ":" + (sec < 10 ? "0" : "") + sec
}

//
// time2sec
//
// Given a time (in mm:ss.ss format), and return the number of seconds
//
function time2sec (time) {
    let [min, sec] = time . split (':') . map (x => +x)
    return 60 * min + sec
}

//
// date2value
//
// Given a date in YYYY-MM-DD, return the fractional year value.
// 
function date2value (yyyymmdd) {
    const date = new Date (yyyymmdd + "T12:00:00")  // Noon
    const year = date . getFullYear ()
    const jan1 = new Date (year, 0, 1, 12, 0, 0)
    const diy  = Math . round ((date - jan1) / (1000 * 60 * 60 * 24))

    const is_leap = year % 400 == 0 ? 1
                  : year % 100 == 0 ? 0
                  : year %   4 == 0 ? 1 : 0

    return year + diy / (365 + is_leap)
}

//
// format_rink (context)
//
// Given a tooltip context, format the rink
//
function format_rink (context) {
    const rink  = context . raw . rink
    const info  = rinks [rink]
    const name  = info . name
    const city  = info . city

    return name + " \u{2014} " + city
}

//
// format_record (context)
//
// Given a tooltip context, format the time and skater
//
function format_record (context) {
    const skater  = context . raw . skater
    const time    = context . raw . time
    const info    = skaters [skater]
    if (!info == undefined) {
        console . log (skater)
        return ""
    }
    const name    = info . name
    const nation  = info . nation

    return time + " " + name + ", " + nation
}


function point_style (context) {
    const rink  = context . raw . rink
    const info  = rinks [rink]
    const type  = info . type

    return type == NATURAL    ? 'rect' 
         : type == ARTIFICIAL ? 'triangle'
         : type == INDOOR     ? 'circle'
         :                      'star'
}


function point_colour (context) {
    const rink   = context . raw . rink
    const info   = rinks [rink]
    const height = info . height

    return height < 200 ? LOW_COLOUR
         : height < 500 ? MIDDLE_COLOUR
         :                HIGH_COLOUR
}


function make_config (gender, distance) {
    const my_progression = progression [gender] [distance]

    //
    // Get the data points
    //
    const time_data   = my_progression . map ((item) => {
        return {
            x:      date2value (item . date),
            y:      time2sec   (item . time),
            date:   item . date,
            time:   item . time,
            skater: item . skater,
            rink:   item . rink,
        }
    })

    //
    // Wrap this into a set
    //
    const time_data_set = {
        data:             time_data,
        type:            'scatter',
        pointStyle:       point_style,
        pointRadius:      5,
        backgroundColor:  point_colour,
        borderColor:      point_colour,
    }

    //
    // Create the configuration
    //
    const wr_config = {
        type: 'scatter',
        data: {
            datasets: [time_data_set]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value
                        }
                    },
                    min: 1890,
                    max: 2025,
                },
                y: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, ticks) {
                            return sec2time (value)
                        },
                        stepSize: 30,
                        autoSkip: false,
                    },
                    min: 12 * 60,
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text:   "Men 10000m",
                    font: {
                        size: 16
                    },
                },
                tooltip: {
                    usePointStyle: true,
                    bodyFont: {
                        size: 14,
                    },
                    callbacks: {
                        beforeLabel: function (context) {
                            const raw = context . raw
                            return raw . date
                        },
                        label:      format_record,
                        afterLabel: format_rink,
                    }
                }
            }
        }
    }

    return wr_config
}

window . addEventListener ("load", function () {
    const chart = new Chart (
        document . getElementById ('men_10000'),
        make_config ("M", 10000)
    );
})

//window . addEventListener ("load", function () {
//    console . log (window . skaters)
//    console . log (window . rinks)
//    console . log (window . progression)
//})

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

function make_config (gender, distance) {
    const progression = window . progression [gender] [distance]

    //
    // Get the data points
    //
    const time_data   = progression . map ((item) => {
        return {
            x: date2value (item . date),
            y: time2sec   (item . time)
        }
    })

    //
    // Wrap this into a set
    //
    const time_data_set = {
        data:    time_data,
        stepped: 1,
        type:   'line',
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
                },
                y: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, ticks) {
                            return sec2time (value)
                        }
                    }
                },
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

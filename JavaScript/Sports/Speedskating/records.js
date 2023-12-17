const config_config = {
    men: {
        10000: {
            stepSize:         30,
            scale_y_min: 12 * 60,
        },
         5000: {
            stepSize:         15,
            scale_y_min:  6 * 60,
         },
         3000: {
            stepSize:         10,
            scale_y_min:  3 * 60 + 30,
         },
    }
}

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
    const  rink = Rink . rink (context . raw . rink)
    return rink . name () + " \u{2014} " + rink . city ()
}

//
// format_record (context)
//
// Given a tooltip context, format the time and skater
//
function format_record (context) {
    const skater  = Skater . skater (context . raw . skater)
    const time    = context . raw . time

    return time + " " + skater . name () + ", " + skater . nationality ()
}


function point_style (context) {
    return Rink . rink (context . raw . rink) . point_style ()
}


function point_colour (context) {
    return Rink . rink (context . raw . rink) . point_colour ()
}


function make_config (gender, distance, start_year = 0) {
    const my_progression = progression [gender] [distance]

    //
    // Get the data points
    //
    const time_data = my_progression . map ((item) => {
        let [year, month, day] = item . date . split ("-") . map (x => +x)
        return {
            x:      date2value (item . date),
            y:      time2sec   (item . time),
            date:   item . date,
            year:   year,
            time:   item . time,
            skater: item . skater,
            rink:   item . rink,
        }
    }) . filter (item => item . year >= start_year)

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
    // Calculate the first and last years
    //
    const years = time_data . map (item => item . year)
    let first_year  = Math . min (... years)
        first_year -= first_year % 5
    let last_year   = Math . max (... years)
        last_year  -= last_year  % 5
        last_year  += 5
        
    //
    // Create the configuration
    //
    const my_config_config = config_config [gender] [distance]

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
                    min: first_year,
                    max: last_year,
                },
                y: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, ticks) {
                            return sec2time (value)
                        },
                        stepSize: my_config_config . stepSize,
                        autoSkip: false,
                    },
                    min: my_config_config . scale_y_min,
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    nt: {
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

//
// Given a record, return the HTML table row representing it
//
function item_to_row (item) {
    const time   = item . time
    const date   = item . date
    const skater = Skater . skater (item . skater)
    const rink   = Rink   . rink   (item . rink)

    return "<tr>" +
           "<td class = 'date'>"    + date                    + "</td>" +
           "<td class = 'time'>"    + time                    + "</td>" +
           "<td class = 'name'>"    + skater . name        () + "</td>" +
           "<td class = 'nation'>"  + skater . nationality () + "</td>" +
           "<td class = 'city'>"    + rink   . city        () + "</td>" +
           "<td class = 'stadion'>" + rink   . name        () + "</td>" +
          "</tr>"
}


function build_table (sex, distance) {
    const my_progression = progression [sex] [distance]
    console . log (my_progression)
    const table = "<table id = 'records'>" +
                    my_progression . map  (item => item_to_row (item))
                                   . join ("\n") +
                  "</table>";

    $("#record_table") . html (table)
}



window . addEventListener ("load", function () {
    const params   = new URLSearchParams (window . location . search)
    const sex      = params . get ('sex')
    const distance = params . get ('distance')
    let   title    = sex + " " + distance + "m"
          title    = title [0] . toUpperCase () + title . slice (1)

    $("h1") . html (title)

    build_table (sex, distance)

    const chart_config = make_config (sex, distance)
    chart_config . options . plugins . title . text = title

    const chart = new Chart (
        document . getElementById ('record_chart'),
        chart_config
    );
})

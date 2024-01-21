//
// Return the config for the config
//
function config_config () {
    const config = {
        [Event . MEN]: {
            [Event . M500]:     {step_size:  1,    scale_y_min:      33,     },
            [Event . M1000]:    {step_size:  3,    scale_y_min:  1 * 60 +  3,},
            [Event . M1500]:    {step_size:  5,    scale_y_min:  1 * 60 + 35,},
            [Event . M3000]:    {step_size: 10,    scale_y_min:  3 * 60 + 30,},
            [Event . M5000]:    {step_size: 15,    scale_y_min:  6 * 60,     },
            [Event . M10000]:   {step_size: 30,    scale_y_min: 12 * 60,     },
            [Event . BIG]:      {step_size:  5,    scale_y_min:     140      },
            [Event . SMALL]:    {step_size:  5,    scale_y_min:     140      },
            [Event . SPRINT]:   {step_size:  5,    scale_y_min:     135      },
            [Event . D500]:     {step_size:  0.25, scale_y_min:      68      },
            [Event . TEAM_PURSUIT]:
                                {step_size:  1,    scale_y_min:  3 * 60 + 30,},
            [Event . TEAM_SPRINT]:
                                {step_size:  1,    scale_y_min:  1 * 60 + 15,},
        },
        [Event . WOMEN]: {
            [Event . M500]:     {step_size:  1,    scale_y_min:      36,     },
            [Event . M1000]:    {step_size:  3,    scale_y_min:  1 * 60 +  9,},
            [Event . M1500]:    {step_size:  5,    scale_y_min:  1 * 60 + 40,},
            [Event . M3000]:    {step_size: 10,    scale_y_min:  3 * 60 + 40,},
            [Event . M5000]:    {step_size: 15,    scale_y_min:  6 * 60 + 30,},
            [Event . M10000]:   {step_size: 30,    scale_y_min: 13 * 60 + 30,},
            [Event . SMALL]:    {step_size:  5,    scale_y_min:     150      },
            [Event . OLD_SMALL]:{step_size:  2,    scale_y_min:     202      },
            [Event . MINI]:     {step_size:  5,    scale_y_min:     150      },
            [Event . SPRINT]:   {step_size:  5,    scale_y_min:     140      },
            [Event . D500]:     {step_size:  0.25, scale_y_min:      74      },
            [Event . TEAM_PURSUIT]:
                                {step_size:  1,    scale_y_min:  2 * 60 + 50,},
            [Event . TEAM_SPRINT]:
                                {step_size:  1,    scale_y_min:  1 * 60 + 20,},
        },
        [Event . MIXED]: {
            [Event . RELAY]:    {step_size:  1,    scale_y_min:  2 * 60 + 50,},
        }
    }
    return config
}

//
// sec2time
//
// Given a number of seconds, format them as a time
//
function sec2time (seconds, precision = 0) {
    const min = Math . floor (seconds / 60)
    let   sec = seconds - min * 60
    if (precision) {
        sec = sec . toFixed (precision)
    }

    return min + ":" + (sec < 10 ? "0" : "") + sec
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
    const date    = context . raw . date

    return time + " " + skater . name        (date) + ", "
                      + skater . nationality (date)
}

//
// format_point_value (value)
//
// Format a value to show 3 decimals
//
function format_point_value (value) {
    let out     = value . toString ()
    const index = out . indexOf (".")
    if (index < 0) {
        return out + ".000"
    }
    while (out . length <= index + 3) {
        out += "0"
    }
    return out
}



function point_style (context) {
    const date = context . raw . date
    const rink = context . raw . rink
    return Rink . rink (rink) . point_style (date)
}


function point_colour (context) {
    return Rink . rink (context . raw . rink) . point_colour ()
}


function make_config (event, season = 0) {
    const my_progression = progression ({event:  event,
                                         season: season})
    if (!my_progression . length) {
        return
    }

    //
    // Wrap this into a set
    //
    const time_data_set = {
        data:             my_progression,
        type:            'scatter',
        pointStyle:       point_style,
        pointRadius:      5,
        backgroundColor:  point_colour,
        borderColor:      point_colour,
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

    const line_data_set = {
        data:             my_progression . concat ([{
                              x: date2value (),   // Today
                              y: my_progression [my_progression . length - 1]
                                                . y
                          }]),
        type:            'line',
        stepped:          1,
        borderColor:     'black',
        borderWidth:      1,
        tooltip: {
            enabled: 1,
            callbacks: {
                label: "",
            }
        }
    }

    //
    // Calculate the first and last years
    //
    const years    = my_progression . map (item => item . year)
    let first_year = Math . min (... years) - 1
    let last_year  = new Date () . getFullYear () + 1
        
    //
    // Create the configuration
    //
    const my_config_config       = config_config () [event . gender ()]
                                                    [event . type   ()]
    const scale_title_font_size  = 16;
    const legend_title_font_size = 16;

    const wr_config = {
        type: 'scatter',
        data: {
            datasets: [time_data_set, line_data_set]
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
                    title: {
                        text: "Year",
                        display: true,
                        font: {
                            size: scale_title_font_size,
                        },
                    },
                },
                y: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, ticks) {
                            return event . is_combination ()
                                                ? format_point_value (value)
                                                : sec2time (value)
                        },
                        stepSize: my_config_config . step_size,
                        autoSkip: false,
                    },
                    min: my_config_config . scale_y_min,
                    title: {
                        text: event . is_combination ()  ? "Points" : "Time",
                        display: true,
                        font: {
                            size: scale_title_font_size,
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    font: {
                        size: legend_title_font_size,
                    },
                },
            }
        }
    }

    return wr_config
}


//
// Create the td content of the rink type column. This includes a
// tooltip with info about the rink.
//
function rink_type_td (rink, date) {
    const rink_symbol = rink . is_natural    (date) ? "\u{25A0}"
                      : rink . is_artificial (date) ? "\u{25B2}"
                      : rink . is_indoor     (date) ? "\u{25CF}"
                      :                               ""
    const rink_span   = "<span style = 'color: " + rink . point_colour () +
                        "'>" + rink_symbol + "</span>"

    const type = rink . is_natural    (date) ? "Natural"
               : rink . is_artificial (date) ? "Artificial"
               : rink . is_indoor     (date) ? "Indoor" : "???"

    const flag = Flags . img (rink . country (date), date)

    const alt  = rink . is_lowland       () ? "LL"
               : rink . is_high_altitude () ? "HA" : ""

    const td = "<div class = 'tooltip'>" + rink_span +
               "<div class = 'tooltiptext rink_info'>" +
               "<table class = 'rink_info'>" +
                  `<tr><th>City</th>`                                  +
                      `<td>${rink . city ()}</td>`                     +
                      `<td class = 'flag'>${flag}</td></tr>`           +
                  `<tr><th>Name</th>`                                  + 
                      `<td colspan = '2'>${rink . name ()}</td></tr>`  +
                  `<tr><th>Ice Type</th>`                              + 
                      `<td colspan = '2'>${type}</td></tr>`            +
                  `<tr><th>Elevation</th>`                             + 
                      `<td>${rink . elevation ()}m</td>`               +
                      `<td>${alt}</td></tr>`                           +
               "</table></div></div>"

    return td
}

//
// function pad (time)
//
// Take a time value, and add an invisible '0' if the time only has a single
// digit after the decimal dot. This makes sure times will be lined up
// nicely when right aligned.
//
function pad (time) {
    const pad = "<span style = 'visibility: hidden'>0</span>"
    return time . match (/\.[0-9]$/) ? time + pad : time
}

//
// format_time_td
//
function format_time_td (item) {
    const event = item . event
    const time  = item . time
    let td      = pad (time)

    const distances = event . distances ()
    if (distances && item . times) {
        const name = distances . length == 4 ? "times" : "times2"
        td = `<div class = 'tooltip'>${td}` +
             `<div class = 'tooltiptext ${name}'>` +
             `<table class = 'times'>` +
             item . times . map ((item, i) => {
                return `<tr><th>${distances [i]}m</th>` +
                           `<td>${pad (item)}</td></tr>` 
             }) . join ("") +
             `</table></div></div>`
    }
    return td
}

//
// Given a record, return the HTML table row representing it
//
function item_to_row (item) {
    //
    // Special case for suspended records
    //
    if (item . skater == "SUSPENDED") {
        return `<tr><td class = 'suspended' colspan = '9'>` +
                 item . suspended_message + `</td></tr>`
    }

    let   time     = item . time
    const date     = item . date
    let   duration = item . duration
    const skater   = Skater . skater (item . skater)
    const rink     = Rink   . rink   (item . rink)
    const event    = item   . event

    let nationality = skater . nationality (date)
    let img = Flags . img (nationality, date)

    if (item . current) {
        duration = `<span class = 'current'>${duration}</span>`
    }
    const improvement =
          item  . improvement 
       ?  event . is_combination ()
               ?           item . improvement . toFixed (item . precision)
               : sec2time (item . improvement,           item . precision)
       : ""

    let name = skater . name (date)
    if (event . is_team () && item . members) {
        const members = item . members . map ((skater) => {
            return Skater . skater (skater) . name (date)
        })
        name = "<div class = 'tooltip'>" + 
               "<div class = 'tooltiptext team-members'>" +
               "<table class = 'team-members'>" +
                   members . map (item => `<tr><td>${item}</td></tr>`)
                           . join ("") +
               "</table></div>" + name + "</div>"
    }

    const rink_td = rink_type_td (rink, date)
    const time_td = format_time_td (item)

    return "<tr>" +
           "<td class = 'date'>"        + date             + "</td>" +
           "<td class = 'time'>"        + time_td          + "</td>" +
           "<td class = 'improvement'>" + improvement      + "</td>" +
           "<td class = 'name'>"        + name             + "</td>" +
           "<td class = 'nation'>"      + img              + "</td>" +
           "<td class = 'city'>"        + rink   . city () + "</td>" +
           "<td class = 'rinktype'>"    + rink_td          + "</td>" +
           "<td class = 'duration'>"    + duration         + "</td>" +
          "</tr>"
}

//
// function count_records
//
// Count the number of records by skater, and rink
//
function count_records (progression) {
    let skater_count      = {}
    let rink_count        = {}
    let country_count     = {}
    let duration_count    = {}
    let improvement_count = {}
    let current           = {}
    let last_record       = {}

    progression . forEach ((item) => {
        if (item . skater == "SUSPENDED") {
            return;
        }
        const country = Skater . skater      (item . skater)
                               . nationality (item . date)

        if (!skater_count [item . skater]) {
            skater_count [item . skater] = 0
        }
        if (!rink_count [item . rink]) {
            rink_count [item . rink] = 0
        }
        if (!country_count [country]) {
            country_count [country] = 0
        }
        if (!duration_count [item . skater]) {
            duration_count [item . skater] = 0
        }
        if (!last_record [item . skater]) {
            last_record [item . skater] = "0000-00-00"
        }
        if (item . current) {
            current [item . skater] = 1
        }

        skater_count      [item . skater] ++
        rink_count        [item . rink]   ++
        country_count     [country]       ++
        duration_count    [item . skater] += item . duration
        if (item . date > last_record [item . skater]) {
            last_record [item . skater] = item . date
        }
        
        if (item . improvement) {
            if (!improvement_count [item . skater]) {
                improvement_count [item . skater] = 0
            }
            //
            // Some trickery to make sure we will classify the
            // improvements into the same bucket if they only
            // differ in floating point roundoffs.
            //
            improvement_count [item . skater] +=
                              +item . improvement . toFixed (3)
        }
    })

    return [skater_count, rink_count, country_count, duration_count,
            improvement_count, current, last_record]
}

//
// function make_count_table 
//
// Given a list of skater or rinks with their number of records, 
// create a table showing them.
//
function make_count_table (type, count, event, current, last) {
    let table = `<table id = '${type}s' class = 'count'>`

    let count_count = {}
    Object . values (count) . map ((count) => {
        if (!count_count [count]) {
            count_count [count] = 0
        }
        count_count [count] ++
    })

    const list = Object . keys (count) .
                          sort ((a, b) => count [b] - count [a])

    for (let i = 0; i < list . length; i ++) {
        table += "<tr>";
        if (i == 0 || count [list [i]] != count [list [i - 1]]) {
            let value = count [list [i]]
            if (type == "duration") {
                if (current [list [i]]) {
                    value = `<span class = 'current'>${value}</span>`
                }
            }
            if (type == "improvement") {
                if (event . is_combination ()) {
                    value = value . toFixed (3)
                }
                else {
                    value = sec2time (value, 2)
                }
            }
            table += `<td rowspan = '${count_count [count [list [i]]]}' ` +
                      "class = 'count'>" + value + "</td>"
        }
        if (type == "skater" || type == "duration" || type == "improvement") {
            const skater = Skater . skater (list [i])
            const date   = last [list [i]]
            const img    = Flags . img (skater . nationality (date), date)
            table += "<td class = 'name'>"   + skater . name (date) + "</td>"
                  +  "<td class = 'nation'>" + img                  + "</td>"
        }
        else if (type == "rink") {
            const rink = Rink . rink (list [i])
            table += "<td class = 'city'>"    + rink . city () + "</td>"
                  +  "<td class = 'stadion'>" + rink . name () + "</td>"
        }
        else if (type == "country") {
            const name = Country . name (list [i])
            const img  = Flags . img (list [i], "last")
            table += "<td class = 'country'>" + name + "</td>"
                  +  "<td class = 'nation'>"  + img  + "</td>"
        }
        table += "</tr>"
    }
    table += "</table>"

    const class_name = `${type}_count`
    $("#" + class_name) . html (table)
}

//
// Build the tables with records
//
function build_tables (event, season = 0) {
    const my_progression = progression ({event:    event,
                                         season:   season})

    const type = event . is_combination () ? "Points" : "Time"
    const [skater_count, rink_count, country_count, duration_count,
           improvement_count, current, last] =
           count_records (my_progression)

    const what = event . is_team () ? "Team" : "Skater"

    const table = "<table id = 'records'>" +
                  "<tr><th colspan = '3'>Record</th>"  +
                      `<th colspan = '2'>${what}</th>` +
                      "<th colspan = '2'>Rink</th>"    +
                      "<th rowspan = '2'>Duration<br>(Days)</th></tr>"
                                                       +

                  "<tr><th>Date</th>"                  +
                      `<th>${type}</th>`               +
                      "<th>Diff.</th>"                 +
                      "<th>Name</th>"                  +
                      "<th>Nat</th>"                   +
                      "<th>City</th>"                  +
                      "<th>Type</th></tr>"             +

                    my_progression . map  (item => item_to_row (item))
                                   . join ("\n") +
                  "</table>";

    $("#record_table") . html (table)

    make_count_table ("skater",      skater_count,      event, current, last)
    make_count_table ("duration",    duration_count,    event, current, last)
    make_count_table ("improvement", improvement_count, event, current, last)
    make_count_table ("rink",        rink_count,        event, current, last)
    make_count_table ("country",     country_count,     event, current, last)
}


//
// Build the navigation table
//
function build_navigation (page_event) {
    let table_str = "<table id = 'nav_bar'>";
    Event . genders . forEach ((gender) => {
        table_str += "<tr><th>" + Event . gender_name (gender) + "</th>"
        Event . events . forEach ((type) => {
            if (gender == Event . WOMEN && type == Event . RELAY) {
                return
            }
            const event = new Event (type == Event . RELAY ? Event . MIXED
                                                           : gender, type)
            let   td    = ""
            if (event . is_valid ()) {
                const name = event . name ()
                if (event . equal (page_event)) {
                    td = "<b>" + name + "</b>"
                }
                else {
                    td = "<a href = 'records.html?gender=" +
                             event . gender () +
                          "&distance=" + event . type () + "'>" +
                          name + "</a>"
                }
            }
            const rowspan = type == Event . RELAY ? 2 : 1
            table_str += `<td rowspan = '${rowspan}'>${td}</td>`
        })
        table_str += "</tr>"
    })
    table_str += "</table>"

    $("div#navigation") . html (table_str)
}

            



function build_chart (event, title, start_year = 0) {
    const chart_config = make_config (event, start_year)

    if (!chart_config) {
        return
    }

    chart_config . options . plugins . title . text = title

    if (start_year) {
        chart_config . options . plugins . title . text +=
                                         ` since ${start_year}`
    }

    if (window . __private . chart) {
        window . __private . chart . destroy ()
    }

    const chart = new Chart (
        document . getElementById ('record_chart'),
        chart_config
    );
    
    window . __private . chart = chart
}

function load_chart () {
    const start_year = + $("#start_year") . val ();
    const title      = window . __private . title
    const event      = window . __private . event
    build_chart  (event, title, start_year)
    build_tables (event, start_year)
}


window . addEventListener ("load", function () {
    const params   = new URLSearchParams (window . location . search)
    const gender   = params . get ('gender')
    const distance = params . get ('distance')

    const page_event = new Event (+gender, +distance)

    const title = page_event . full_name ()

    window . __private = {title: title, event: page_event}

    $("h1") . html (title)

    build_navigation (page_event)
    build_tables     (page_event)
    build_chart      (page_event, title)

    $("#start_year_span") . html (`<input id = 'start_year' type = 'number' ` +
                                  `value = '1960' size = '5'>`)
                                  

    if (page_event . is_team ()) {
        $("section.by-country") . css ({display: "none"})
        $("section.by-skater h4") . html ("By Team")
    }

    $("div#description") . html (page_event . description ())
})

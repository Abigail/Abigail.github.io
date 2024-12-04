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
    const  rink = context . raw . rink
    const  date = context . raw . date
    return rink . name () + " \u{2014} " + rink . city (date)
}

//
// format_record (context)
//
// Given a tooltip context, format the time and skater
//
function format_record (context) {
    const skater  = context . raw . skater
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
    return rink . point_style (date)
}


function point_colour (context) {
    return context . raw . rink . point_colour ()
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

    const flag = rink . flag_img (date)

    const alt  = rink . is_lowland       () ? "LL"
               : rink . is_high_altitude () ? "HA" : ""

    const td = "<div class = 'tooltip'>" + rink_span +
               "<div class = 'tooltiptext rink_info'>" +
               "<table class = 'rink_info'>" +
                  `<tr><th>City</th>`                                  +
                      `<td>${rink . city (date)}</td>`                 +
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
    if (!time) {
        return "?"
    }
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
    if (item . suspended) {
        return `<tr><td class = 'suspended' colspan = '9'>` +
                 item . suspended_message + `</td></tr>`
    }

    let   time     = item . time
    const date     = item . date
    let   duration = item . duration
    const skater   = item . skater
    const rink     = item . rink
    const event    = item . event
    const img      = skater . flag_img (date)

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
        const m_names = item . members . map (skater => skater . name (date))
        const c_name  = `team-members-${m_names . length}`
        name = "<div class = 'tooltip'>" + 
               `<div class = 'tooltiptext team-members ${c_name}'>` +
               "<table class = 'team-members'>" +
                   m_names . map (item => `<tr><td>${item}</td></tr>`)
                           . join ("") +
               "</table></div>" + name + "</div>"
    }

    const rink_td = rink_type_td (rink, date)
    const time_td = format_time_td (item)
    const city    = rink . city (date)

    return "<tr>" +
           "<td class = 'date'>"        + date        + "</td>" +
           "<td class = 'time'>"        + time_td     + "</td>" +
           "<td class = 'improvement'>" + improvement + "</td>" +
           "<td class = 'name'>"        + name        + "</td>" +
           "<td class = 'nation'>"      + img         + "</td>" +
           "<td class = 'city'>"        + city        + "</td>" +
           "<td class = 'rinktype'>"    + rink_td     + "</td>" +
           "<td class = 'duration'>"    + duration    + "</td>" +
          "</tr>"
}

//
// function count_records
//
// Count the number of records by skater, and rink
//
function count_records2 (progression) {
    let skater_count      = {}
    let rink_count        = {}
    let country_count     = {}
    let duration_count    = {}
    let improvement_count = {}
    let current           = {}
    let last_record       = {}

    progression . forEach ((item) => {
        if (item . suspended) {
            return;
        }
        const country = item . skater . nationality (item . date)

        const skater_key = item . skater . key ()
        const rink_key   = item . rink   . key ()

        if (!skater_count [skater_key]) {
            skater_count [skater_key] = 0
        }
        if (!rink_count [rink_key]) {
            rink_count [rink_key] = 0
        }
        if (!country_count [country]) {
            country_count [country] = 0
        }
        if (!duration_count [skater_key]) {
            duration_count [skater_key] = 0
        }
        if (!last_record [skater_key]) {
            last_record [skater_key] = "0000-00-00"
        }
        if (item . current) {
            current [skater_key] = 1
        }

        skater_count      [skater_key] ++
        rink_count        [rink_key]   ++
        country_count     [country]    ++
        duration_count    [skater_key] += item . duration
        if (item . date > last_record [skater_key]) {
            last_record [skater_key] = item . date
        }
        
        if (!item . no_improvement) {
            if (!improvement_count [skater_key]) {
                improvement_count [skater_key] = 0
            }
            //
            // Some trickery to make sure we will classify the
            // improvements into the same bucket if they only
            // differ in floating point roundoffs.
            //
            improvement_count [skater_key] += +item . improvement . toFixed (3)
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
            const skater = Athlete . athlete (list [i])
            const date   = last [list [i]]
            const img    = skater . flag_img (date)
            table += "<td class = 'name'>"   + skater . name (date) + "</td>"
                  +  "<td class = 'nation'>" + img                  + "</td>"
        }
        else if (type == "rink") {
            const rink = Venue . venue (list [i])
            table += "<td class = 'city'>"    + rink . city ("now") + "</td>"
                  +  "<td class = 'stadion'>" + rink . name ()      + "</td>"
        }
        else if (type == "country") {
            const country = new Country (list [i])
            const name    = country . name ()
            const img     = country . flag_img ("last")
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
           count_records2 (my_progression)

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
                      "<th>N</th>"                     +
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




//
// New functions appear below
//

//
// Create a tooltip
//
function make_tooltip (args) {
    let content       = args . content       // Main content
    let tooltip       = args . tooltip       // Content of tooltip
    let tooltip_class = args . tooltip_class // Additional classes

    return `<div class = 'tooltip'>${content}` +
           `<div class = 'tooltiptext ${tooltip_class}'>${tooltip}</div></div>`
}


//
// Make the td content which displays the result. Sometimes, this
// includes a tooltip.
//
function result_td (entry) {
    let record = entry . record ()

    //
    // If the result is time, we want to pad times which one decimal;
    // it's padded with an invisible '0', this causes the results to
    // line up correctly.
    //
    let result = entry . time_in_sec () ? pad (entry . result ())
                                        :      entry . result ()

    //
    // Do we need a tooltip? We do if the record is a combination, we
    // know the distances, and we have the times for each of the distances.
    //
    if (record . distances () && entry . times ()
                              && entry . times () . length) {
        let distances = record . distances ()
        let times     = entry  . times     ()
        let c_name    = distances . length == 4 ? "times" : "times2"
        let tooltip   = `<table class = 'times'>` +
                            times . map ((time, i) => {
                               return `<tr><th>${distances [i]}</th>` +
                                          `<td>${pad (time)}</td></tr>`
                            }) . join ("") + `</table>`
        result = make_tooltip ({content:       result,
                                tooltip:       tooltip,
                                tooltip_class: c_name})
    }
    return result
}

//
// Return the td content showing the athlete or team. If it's a team, and
// the members are known, we display a tooltip.
//
function athlete_td (entry) {
    let athlete = entry   . athlete_or_team ()
    let date    = entry   . date            ()
    let record  = entry   . record          ()
    let td      = athlete . name (date)

    if (record . is_team () && entry . members ()
                            && entry . members () . length) {
        let members = entry . members ()
        let c_name  = `team-members team-members-${members . length}`
        let tooltip = `<table class = 'team-members'>` +
                           members . map (item => `<tr><td>` +
                                       `${item . name (date)}</td></tr>`)
                                   . join ("")         +
                     `</table>`

        td = make_tooltip ({content:       td,
                            tooltip:       tooltip,
                            tooltip_class: c_name})
    }
    return td
}

//
// Given a record, return the table row ('tr') for this record
//
function entry_to_row (entry) {
    if (entry . is_suspension ()) {
        return "<tr><td colspan = '8' class = 'suspended'>" + 
                entry . message () + "</td></tr>"
    }
    record = entry . record ()

    let result       = result_td (entry)
    let date         = entry . date   ()
    let duration     = entry . duration ()
    let athlete      = entry . athlete_or_team ()
    let venue        = entry . venue ()
    let improvement  = entry . improvement_formatted () || ""
    let city         = venue . city (date)
    let name         = athlete_td (entry)
    let flag         = athlete . flag_img (date)
    let rink_type_td = venue . rink_type_td (date)

    //
    // Highlight the duration of current records
    //
    if (entry . is_current ()) {
        duration = `<span class = 'current'>${duration}</span>`
    }

    return  "<tr>" 
         +  "<td class = 'date'>"        + date         + "</td>"
         +  "<td class = 'time'>"        + result       + "</td>"
         +  "<td class = 'improvement'>" + improvement  + "</td>"
         +  "<td class = 'name'>"        + name         + "</td>"
         +  "<td class = 'nation'>"      + flag         + "</td>"
         +  "<td class = 'city'>"        + city         + "</td>"
         +  "<td class = 'rinktype'>"    + rink_type_td + "</td>"
         +  "<td class = 'duration'>"    + duration     + "</td>"
         + "</tr>"
}

function build_main_table (record) {
    let who   = record . is_team ()        ? "Team"   : "Skater"
    let what  = record . is_combination () ? "Points" : "Time"
    let table = "<table id = 'records'>" +
                "<tr><th colspan = '3'>Record</th>"                   +
                    `<th colspan = '2'>${who}</th>`                   +
                    "<th colspan = '2'>Rink</th>"                     +
                    "<th rowspan = '2'>Duration<br>(Days)</th></tr>"  +
                "<tr><th>Date</th>"                                   +
                    `<th>${what}</th>`                                +
                    "<th>Diff.</th>"                                  +
                    "<th>Name</th>"                                   +
                    "<th>N</th>"                                      +
                    "<th>City</th>"                                   +
                    "<th>Type</th></tr>"                              +
                record . progression () 
                       . map (entry => entry_to_row (entry))
                       . join ("\n")                                  +
                "</table>"

    $("#record_table") . html (table)
}

//
// Given the records, build by skater/duration/improvement/country/rink buckets
//
function count_records (record) {
    let athlete_bucket = {}
    let country_bucket = {}
    let venue_bucket   = {}

    const COUNT          = 0
    const DURATION       = 1
    const IMPROVEMENT    = 2
    const LAST_DATE      = 3
    const IS_IMPROVEMENT = 4

    const C_COUNT        = 0
    const C_LAST_DATE    = 1

    const V_COUNT        = 0
    const V_LAST_DATE    = 1

    record . progression () . forEach ((entry) => {
        if (entry . is_suspension ()) {
            return
        }
        let athlete = entry   . athlete_or_team ()
        let date    = entry   . date  ()
        let venue   = entry   . venue () . key ()
        let country = athlete . country (date) . key ()
        let key     = athlete . key ()
        if (!athlete_bucket [key]) {athlete_bucket [key] = [0, 0, 0, "", false]}
        athlete_bucket [key] [COUNT]       ++
        athlete_bucket [key] [DURATION]    +=  entry . duration    ()
        athlete_bucket [key] [IMPROVEMENT] += +entry . improvement () || 0
        athlete_bucket [key] [LAST_DATE]    =  date
        if (entry . improvement () != null) {
            athlete_bucket [key] [IS_IMPROVEMENT] = true
        }

        if (!country_bucket [country]) {
             country_bucket [country] = [0, ""]
        }
        country_bucket [country] [C_COUNT] ++
        country_bucket [country] [C_LAST_DATE] = date

        if (!venue_bucket [venue]) {
             venue_bucket [venue] = [0, ""]
        }
        venue_bucket [venue] [V_COUNT] ++
        venue_bucket [venue] [V_LAST_DATE] = date
    })

    //
    // Fix the precision
    //
    let prec = record . is_combination () ? 3 : 2
    for (const key in athlete_bucket) {
        athlete_bucket [key] [IMPROVEMENT] =
             athlete_bucket [key] [IMPROVEMENT] . toFixed (prec)
    }

    //
    // Reverse the entries, so we have "value" -> [athletes]
    //
    let by_count       = {}
    let by_duration    = {}
    let by_improvement = {}
    let by_country     = {}
    let by_venue       = {}
    let last_date      = {}   // Used for athletes, countries and venues
    let first_date     = {}   // Used for athletes, countries and venues
    for (const key in athlete_bucket) {
        let [count, duration, improvement, date, is_improvement] =
                              athlete_bucket [key]
        if (!by_count       [count])       {by_count       [count]       = []}
        if (!by_duration    [duration])    {by_duration    [duration]    = []}
        by_count       [count]       . push (key)
        by_duration    [duration]    . push (key)

        //
        // By improvement is slightly different. We don't classify skaters
        // whose only record(s) are the first one, or right after a suspension
        //
        // But we need to consider that skaters *can* have a zero improvement
        // yet still be classified; this happens for skaters equalling an
        // existing record.
        //
        if (is_improvement) {
            if (!by_improvement [improvement]) {
                by_improvement [improvement] = []
            }
            by_improvement [improvement] . push (key)
        }
        last_date [key] = date
        if (!first_date [key]) {
             first_date [key] = date
        }
    }
    for (const key in country_bucket) {
        let [count, date] = country_bucket [key]
        if (!by_country [count]) {by_country [count] = []}
        by_country [count] . push (key)
        last_date [key] = date
        if (!first_date [key]) {
             first_date [key] = date
        }
    }
    for (const key in venue_bucket) {
        let [count, date] = venue_bucket [key]
        if (!by_venue [count]) {by_venue [count] = []}
        by_venue [count] . push (key)
        last_date [key] = date
        if (!first_date [key]) {
             first_date [key] = date
        }
    }

    //
    // Sort the lists by date of first record
    //
    [by_count, by_duration, by_improvement, by_country, by_venue] .
        forEach ((bucket) => {
            Object . values (bucket) 
                   . forEach (list => list . sort ((a, b) => {
                        if (first_date [a] < first_date [b]) {return -1}
                        if (first_date [a] > first_date [b]) {return  1}
                        return 0
                     }))
    })

    return [by_count, by_duration, by_improvement, by_country, by_venue,
            last_date]
}

//
// Build the "by XXX" tables
//
function build_by_xxx_table (args) {
    let buckets    = args . buckets
    let type       = args . type
    let id         = args . id
    let element    = args . element
    let last_dates = args . last_dates

    let table = `<table id = '${id}' class = 'count'>`

    Object . keys (buckets)
           . sort ((a, b) => b - a)
           . forEach ((key) => {
        let list = buckets [key]
        table += "<tr>"
        table += `<td rowspan = '${list . length}' class = 'count'>` +
                                `${key}</td>`

        for (let i = 0; i < list . length; i ++) {
            let item   = list [i]
            let thingy = type == "athlete" ? Athlete . athlete (item)
                       : type == "country" ? Country . country (item)
                       : type == "venue"   ? Venue   . venue   (item)
                       : null
            let last_date = last_dates [item]
            if (i > 0) {
                table += "<tr>"
            }
            if (type == "venue") {
                table += `<td class = 'city'>${thingy . city (last_date)}</td>`
            }
            table += `<td class = 'name'>  ${thingy . name    (last_date)}</td>`
                  +  `<td class = 'nation'>${thingy . flag_img(last_date)}</td>`
        }
        table += "</tr>"
    })
    table += "</table>"

    if (type == "venue") {
        console . log (table)
    }

    element . html (table)

}


window . addEventListener ("load", function () {
    Country_Data . init ()
    Rinks        . init ()
    Skaters      . init ()
    Event        . init ()
    Record       . init ()

    const params     = new URLSearchParams (window . location . search)
    const sport      = params . get ('sport')
    const discipline = params . get ('discipline')
    const gender     = params . get ('gender')
    const age        = params . get ('age')
    const type       = params . get ('type')

    let args = {
        sport:      sport,
        discipline: discipline,
        gender:     gender,
        age:        age,
        type:       type
    }

    const record = Record . exists (args)

    if (!record) {
        alert ("No record exist!")
        return
    }

//  window . __private = {title: title, event: page_event}

    $("h1") . html (Utils . uc_first (gender) + ", " + record . name ())

    Navigation . build2 (args)

    build_main_table (record)

    let [by_count, by_duration, by_improvement, by_country, by_venue,
         last_dates] = count_records (record)
    build_by_xxx_table ({buckets:    by_count,
                         type:      'athlete',
                         id:        'skaters',
                         element:   $("#skater_count"),
                         last_dates: last_dates})
    build_by_xxx_table ({buckets:    by_duration,
                         type:      'athlete',
                         id:        'durations',
                         element:   $("#duration_count"),
                         last_dates: last_dates})
    build_by_xxx_table ({buckets:    by_improvement,
                         type:      'athlete',
                         id:        'improvements',
                         element:   $("#improvement_count"),
                         last_dates: last_dates})
    build_by_xxx_table ({buckets:    by_country,
                         type:      'country',
                         id:        'countrys',
                         element:   $("#country_count"),
                         last_dates: last_dates})
    build_by_xxx_table ({buckets:    by_venue,
                         type:      'venue',
                         id:        'rinks',
                         element:   $("#rink_count"),
                         last_dates: last_dates})

 // build_tables       (page_event)
 // build_chart        (page_event, title)

 // $("#start_year_span") . html (`<input id = 'start_year' type = 'number' ` +
 //                               `value = '1960' size = '5'>`)
                                  

    if (record . is_team ()) {
        $("section.by-country") . css ({display: "none"})
        $("section.by-skater h4") . html ("By Team")
    }

 // $("div#description") . html (page_event . description ())
})

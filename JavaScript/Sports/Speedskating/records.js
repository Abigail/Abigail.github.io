const DAWN   = "0000-00-00"
const MODERN = "1960-08-01"


//
// format_rink (context)
//
// Given a tooltip context, format the rink
//
function format_rink (context) {
    const  venue = context . raw . __venue
    const  date = context . raw . __date
    return venue . name (date) + " \u{2014} " + venue . city (date)
}

//
// format_record (context)
//
// Given a tooltip context, format the time and skater
//
function format_record (context) {
    const skater  = context . raw . __athlete
    const result  = context . raw . __result
    const date    = context . raw . __date

    return result + " " + skater . name        (date) + ", "
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
    const date  = context . raw . __date
    const venue = context . raw . __venue
    return venue ? venue . point_style (date) : ""
}


function point_colour (context) {
    const venue = context . raw . __venue
    return venue ? venue . point_colour () : ""
}




function make_config (args = {}) {
    const record         = args   . record
    const start_date     = args   . start_date || DAWN
    const my_progression = record . progression ({start_date: DAWN})
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
                    return raw . __date
                },
                label:      format_record,
                afterLabel: format_rink,
            }
        }
    }

    const line_data_set = {
        data:             my_progression . concat ([{
                              x: Utils . today2value (),   // Today
                              y: my_progression [my_progression . length - 1]
                                                . y
                          }]),
        type:            'line',
        stepped:          1,
        borderColor:     'black',
        borderWidth:      1,
        tooltip: {
            enabled: false,
            callbacks: {
                label: function () {return ""},
            }
        }
    }

    //
    // Calculate the first and last years
    //
    const years    = my_progression . filter (item => !item . is_suspension ())
                                    . map    (item =>  item . year ())
    let first_year = Math . min (... years) - 1
    let last_year  = new Date () . getFullYear () + 1
    if (start_date != DAWN) {
        first_year = + start_date . substring (0, 4)
    }

    //
    // Create the configuration
    //
    const my_config_config       = record . config ()
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
                            return record . is_combination ()
                                                ? format_point_value (value)
                                                : Utils . sec2time (value)
                        },
                        stepSize: my_config_config . step_size,
                        autoSkip: false,
                    },
                    min: my_config_config . scale_y_min,
                    title: {
                        text: record . is_combination ()  ? "Points" : "Time",
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


function load_chart () {
    const title      = window . __private . title
    const record     = window . __private . record
    const start_date = window . __private . start_date == DAWN ? MODERN : DAWN
    build_chart  ({record: record, title: title, start_date: start_date})
}



//
// build_chart: Build the chart
//
function build_chart (args = {}) {
    const chart_config = make_config (args)
    if (!chart_config) {
        return
    }

    chart_config . options . plugins . title . text = args . title || "Title"

    if (window . __private . chart) {
        window . __private . chart . destroy ()
    }

    const chart = new Chart (
        document . getElementById ('record_chart'),
        chart_config
    );

    $("#toggle") . html (
        args . start_date == DAWN ? "Toggle to modern era"
                                  : "Toggle to all"
    )
    
    window . __private . start_date = args . start_date
    window . __private . chart      = chart
}




//
// Given a record, return the HTML table row representing it
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
    let result = entry . time_in_sec () ? Utils . pad (entry . result ())
                                        :              entry . result ()

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
                                          `<td>${Utils . pad (time)}</td></tr>`
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

    element . html (table)

}


window . addEventListener ("load", function () {
    Country_Data . init ()
    Rinks        . init ()
    Skaters      . init ()
    Event        . init ()
    Record       . init ()

    if (!window . __private) {
        window . __private = {}
    }

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

    const title = Utils . uc_first (gender) + ", " + record . name ()
    $("h1") . html (title)

    window . __private . record     =  record
    window . __private . start_date =  DAWN
    window . __private . title      =  title

    //
    // Build the navigation
    //
    Navigation . build2 (args)

    //
    // Build the tables
    //
    $("div#description") . html (record . summary ())
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


    if (record . is_team ()) {
        $("section.by-country") . css ({display: "none"})
        $("section.by-skater h4") . html ("By Team")
    }

    //
    // Build the chart
    //
    load_chart ()

    //
    // If the first record is in the modern era, do not allow toggling
    //
    const progression = record . progression ()
    if (progression [0]                        . date () > MODERN ||
        progression [progression . length - 1] . date () < MODERN) {
        $("#toggle") . remove ()
    }
})

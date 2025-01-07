const DAWN   = "0000-00-00"
const MODERN = "1960-08-01"


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


//
// Build the main table, listing all the records
//
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
    window . __private . start_date =  MODERN
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


    //
    // Since teams are always country teams, there is no need for
    // a "by country" tables for team events
    //
    if (record . is_team ()) {
        $("section.by-country") . css ({display: "none"})
        $("section.by-skater h4") . html ("By Team")
    }

    //
    // Build the chart
    //
    Graph . load_chart ()

    //
    // If the first record is in the modern era, do not allow toggling
    // Nor if the last record isn't in the modern era
    //
    const progression = record . progression ()
    if (progression [0]                        . date () > MODERN ||
        progression [progression . length - 1] . date () < MODERN) {
        $("#toggle") . remove ()
    }
})

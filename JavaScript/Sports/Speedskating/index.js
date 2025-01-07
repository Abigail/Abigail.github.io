window . addEventListener ("load", function () {
    Country_Data . init ()
    Rinks        . init ()
    Skaters      . init ()
    Record       . init ()

    //
    // Get rid of the hands at the bottom
    //
    $("p.next") . html ("")
    $("p.prev") . html ("")

    //
    // Build the navigation bar
    //
    Navigation . build2 ({sport: 'speedskating', type: 'world', age: 'senior'})

    //
    // Build the table with the current records
    //
    build_current_records ()
})


//
// Build the table showing the current records
//
function build_current_records () {
    let table_str = ""
    table_str += "<table class = 'current'>"
    table_str += "<tr><th>Event</th>"  +
                     "<th>Record</th>" +
                     "<th>Date</th>"   +
                     "<th colspan = '2'>Skater</th>" +
                     "<th>Rink</th></tr>"

    Record . genders () . forEach ((gender) => {
        table_str += `<tr><th colspan = '6'>${Utils . uc_first (gender)}` +
                     `</th></tr>`

        Record . disciplines ('speedskating') . forEach ((discipline) => {
            let progression = Record . exists ({sport:     "speedskating",
                                                discipline: discipline,
                                                gender:     gender})
            if (!progression) {
                return
            }
            let current = progression . current ()
            if (!current || !current . length) {
                return
            }
            let rows = current . length
            table_str += "<tr>";
            table_str += `<th class = 'event' rowspan = '${rows}'>` +
                         `${progression . name ()}</th>`
            table_str += `<td class = 'record' rowspan = '${rows}'>` +
                         `${current [0] . result ()}</td>`
            current . forEach ((entry, index) => {
                let date = entry . date    ()
                let name = entry . athlete_or_team () . name     (date)
                let flag = entry . athlete_or_team () . flag_img (date)
                let city = entry . venue           () . city     (date)
                if (index > 0) {
                    table_str += `<tr>`
                }
                table_str += `<td class = 'date'>${date}</td>`
                          +  `<td class = 'name'>${name}</td>`
                          +  `<td class = 'flag'>${flag}</td>`
                          +  `<td class = 'city'>${city}</td>`
                table_str += `</tr>`
            })
        })
    })

    table_str += "</table>"

    $("div#current") . html (table_str)
}

window . addEventListener ("load", function () {
    Country_Data . init ()
    Rinks        . init ()
    Skaters      . init ()
    Event        . init ()
    init_progression ()

    //
    // Get rid of the hands at the bottom
    //
    $("p.next") . html ("")
    $("p.prev") . html ("")

    //
    // Build the navigation bar
    //
    Navigation . build ()

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
                     "<th>Date</th>"   +
                     "<th>Record</th>" +
                     "<th colspan = '2'>Skater</th>" +
                     "<th>Rink</th></tr>"

    Event . all_genders . forEach ((gender) => {
        const gender_name = Event . gender_name (gender)
        table_str += `<tr><th colspan = '6'>${gender_name}</th></tr>`
        const events = Event . events ({gender:    gender,
                                        suspended: 0,
                                        record:    1})
        events . forEach ((event) => {
            const current_records = progression ({current: 1,
                                                  suspended: 0,
                                                  event: event})
            const amount = current_records . length
            table_str += `<tr><th rowspan = '${amount}' class = 'event'>` +
                              `${event . full_name (0)}</th>`
            current_records . forEach ((item, index) => {
                if (index > 1) {
                    table_str += `<tr>`
                }
                const date = item . date
                table_str += `<td class = 'date'>${item . date}</td>` 
                table_str += `<td class = 'record'>${item . time}</td>`
                const skater = item   . skater
                const name   = skater . name (date)
                const img    = skater . flag_img (date)
                const city   = item   . rink . city (date)
                table_str += `<td class = 'name'>${name}</td>`
                table_str += `<td class = 'flag'>${img}</td>`
                table_str += `<td class = 'city'>${city}</td>`
                table_str += `</tr>`
            })
        })
    })
    table_str += "</table>"

    $("div#current") . html (table_str)
}

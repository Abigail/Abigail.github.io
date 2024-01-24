window . addEventListener ("load", function () {
    Rink . init ()
    init_skaters     ()
    init_progression ()
    //
    // Get rid of the hands at the bottom
    //
    $("p.next") . html ("")
    $("p.prev") . html ("")

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
        Event . events . forEach ((e) => {
            const event = new Event (gender, e)
            if (!event . is_valid () || event . is_suspended ()) {
                return
            }
            const current_records = progression ({current: 1,
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
                const skater = Skater . skater (item . skater)
                const name   = skater . name (date)
                const img    = Flags  . img (skater . nationality (date), date)
                table_str += `<td class = 'name'>${name}</td>`
                table_str += `<td class = 'flag'>${img}</td>`
                table_str += `<td class = 'city'>${item . rink . city ()}</td>`
                table_str += `</tr>`
            })
        })
    })
    table_str += "</table>"

    $("div#current") . html (table_str)
}

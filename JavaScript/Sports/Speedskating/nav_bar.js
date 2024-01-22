//
// Build the navigation table
//
function build_navigation (page_event = 0) {
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
                if (page_event && event . equal (page_event)) {
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


window . addEventListener ("load", function () {
    build_navigation ()
})

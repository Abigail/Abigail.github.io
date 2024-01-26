//
// Build the navigation table
//
class Navigation {
    static build (page_event = 0) {
        let table_str = "<table id = 'nav_bar'>";
        table_str += "<tr class = 'top-line'><th></th>"
        table_str += "<th colspan = '6'>Individual Distances</th>"
        table_str += "<th colspan = '6'>Combinations</th>"
        table_str += "<th colspan = '3'>Team Events</th></tr>"
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
                    const name = event . short_name ()
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
}

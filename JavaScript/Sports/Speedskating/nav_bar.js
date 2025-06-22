//
// Build the navigation table
//
class Navigation {
    static td_content (record, args) {
        if (!record) {return ""}
        let name = record . name (1)
        if (args . sport      == record . sport      () &&
            args . discipline == record . discipline () &&
            args . gender     == record . gender     () &&
            args . age        == record . age        () &&
            args . type       == record . type       ()) {
            return `<b>${name}</b>`
        }
        //
        // Create the link
        //
        let link = "records.html"
                 + "?sport="      + record . sport      ()
                 + "&discipline=" + record . discipline ()
                 + "&gender="     + record . gender     ()
                 + "&age="        + record . age        ()
                 + "&type="       + record . type       ()
        return `<a href = '${link}'>${name}</a>`
    }

    static build (args) {
        let sport      = args . sport
        let gender     = args . gender      || ""
        let discipline = args . discipline  || ""
        let age        = args . arg         || "senior"
        let type       = args . type        || "world"

        let top_tr     = "<tr class = 'top-line'>"
        let men_tr     = "<tr class = 'men'><th>Men</th>"
        let women_tr   = "<tr class = 'women'><th>Women</th>"

        top_tr += "<th></th>"
        top_tr += "<th colspan = '6'>Individual Distances</th>"
        top_tr += "<th colspan = '6'>Combinations</th>"
        top_tr += "<th colspan = '3'>Team Events</th>"

        Record . disciplines (sport) . forEach ((discipline) => {
            let men_args   = {... args, discipline: discipline, gender: 'men'}
            let women_args = {... args, discipline: discipline, gender: 'women'}
            let mixed_args = {... args, discipline: discipline, gender: 'mixed'}
            let men_r      = Record . exists (men_args)
            let women_r    = Record . exists (women_args)
            let mixed_r    = Record . exists (mixed_args)

            if (mixed_r) {
                let content = Navigation . td_content (mixed_r, args)
                men_tr += `<td rowspan = 2>${content}</td>`
            }
            else {
                let men_content   = Navigation . td_content (men_r,   args)
                let women_content = Navigation . td_content (women_r, args)
                men_tr   += `<td>${men_content}</td>`
                women_tr += `<td>${women_content}</td>`
            }
        })

        top_tr   += "</tr>"
        men_tr   += "</tr>"
        women_tr += "</tr>"

        let table = "<table id = 'nav_bar'>" + top_tr
                                             + men_tr
                                             + women_tr + "</table>"
        $("div#navigation") . html (table)
    }
}

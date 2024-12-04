//
// Build the navigation table
//
class Navigation {
    static event_to_td (event, page_event, rowspan = 1) {
        let td = `<td rowspan = '${rowspan}'>`
        const name = event . short_name ()
        if (event . equal (page_event)) {
            td += `<b>${name}</b>`
        }
        else {
            td += `<a href = 'records.html?gender=${event . gender ()}` +
                  `&distance=${event . type ()}'>${name}</a>`
        }
        return td
    }

    static tds (men_events, women_events, page_event) {
        let men_tds     = []
        let women_tds   = []

        while (men_events . length || women_events . length) {
            if (!women_events . length ||
                 men_events   . length && men_events   [0] . type () <
                                          women_events [0] . type ()) {
                men_tds    . push (Navigation . event_to_td (men_events [0],
                                                             page_event))
                women_tds  . push ("<td></td>")
                men_events . shift ()
            }
            else if (!men_events   . length ||
                      women_events . length && women_events [0] . type () <
                                               men_events   [0] . type ()) {
                women_tds    . push (Navigation . event_to_td (women_events [0],
                                                               page_event))
                men_tds      . push ("<td></td>")
                women_events . shift ()
            }
            else {
                men_tds      . push (Navigation . event_to_td (men_events   [0],
                                                               page_event))
                women_tds    . push (Navigation . event_to_td (women_events [0],
                                                               page_event))
                men_events   . shift ()
                women_events . shift ()
            }
        }

        return [men_tds, women_tds]
    }
                 
    static build (page_event = new Event (0, 0)) {
        let men_tr    = `<tr class = 'men'><th>Men</th>`;
        let women_tr  = `<tr class = 'women'><th>Women</th>`;
        let header_tr = `<tr class = 'top-line'><th></th>`;

        const headers = ["Individual Distances", "Combinations", "Team Events"];

        ["distance", "combination", "team"] . forEach ((type, i) => {
            const m_events = Event . events ({gender: Event . MEN,
                                             [type]:  1,
                                              record: 1})
            const w_events = Event . events ({gender: Event . WOMEN,
                                             [type]:  1,
                                              record: 1})

            let [men_tds, women_tds] = Navigation . tds (m_events, w_events,
                                                         page_event)

            if (type == "team") {
                const mgr = Event . events ({gender: Event . MIXED,
                                             team:   1,
                                             record: 1})
                mgr . forEach ((event) => {
                    men_tds . push (Navigation . event_to_td (event,
                                                              page_event, 2))
                })
            }

            header_tr += `<th colspan = '${men_tds . length}'>` +
                         `${headers [i]}</th>`
            men_tr   += men_tds   . join ("")
            women_tr += women_tds . join ("")
        })
        header_tr += "</tr>"
        men_tr    += "</tr>"
        women_tr  += "</tr>"

        const table_str = "<table id = 'nav_bar'>" + header_tr
                                                   + men_tr
                                                   + women_tr + "</table>"
        $("div#navigation") . html (table_str)
    }

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
        let link = "records2.html"
                 + "?sport="      + record . sport      ()
                 + "&discipline=" + record . discipline ()
                 + "&gender="     + record . gender     ()
                 + "&age="        + record . age        ()
                 + "&type="       + record . type       ()
        return `<a href = '${link}'>${name}</a>`
    }

    static build2 (args) {
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
        $("div#navigation2") . html (table)
    }
}

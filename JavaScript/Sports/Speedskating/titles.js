window . addEventListener ("load", function () {
    Rink   . init ()
    Skater . init ()
    Event  . init ()
    Championship . init ()

    const params   = new URLSearchParams (window . location . search)
    const gender   = params . get ('gender')
    const distance = params . get ('type')

    const page_event = new Event (+gender, +distance)

    const title = page_event . full_name ()

    window . __private = {title: title, event: page_event}

    $("h1") . html (title)

    Navigation . build (page_event)
    build_tables       (page_event)
    build_chart        (page_event, title)

    $("#start_year_span") . html (`<input id = 'start_year' type = 'number' ` +
                                  `value = '1960' size = '5'>`)
                                  

    if (page_event . is_team ()) {
        $("section.by-country") . css ({display: "none"})
        $("section.by-skater h4") . html ("By Team")
    }

    $("div#description") . html (page_event . description ())
})

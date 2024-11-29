//
// For now, this is geared towards Ice rinks. We may later want to subclass
// this if we're going to take different types of venues into account.
// Things like ice type are not relevant to other types of venues, and
// elevation only to some.
//
class Venue {
    // #name
    // #city
    // #country
    // #type
    // #elevation

    static NO_RINK_COLOUR = 'red'
    static HIGH_COLOUR    = '#832A0D'  // Smokey topaz
    static MIDDLE_COLOUR  = '#DAA06D'  // Buff
    static LOW_COLOUR     = '#EDC9AF'  // Desert sand

    static NATURAL        = 1    //  Outdoor - Natural
    static ARTIFICIAL     = 2    //  Outdoor - Artificial
    static INDOOR         = 3    //  Indoor  - Artificial

    static venues = {}

    constructor (args) {
        this . __key        = args . key
        this . __name       = args . name
        this . __city       = args . city
        this . __country    = args . country
        this . __type       = args . type
        this . __elevation  = args . elevation
    }

    //
    // Simple getters
    //
    key       ()     {return                this . __key}
    name      (date) {return value_by_date (this . __name,      date)}
    city      (date) {return value_by_date (this . __city,      date)}
    country   (date) {return value_by_date (this . __country,   date)}
    elevation (date) {return value_by_date (this . __elevation, date)}
    type      (date) {return value_by_date (this . __type,      date)}

    is_natural       (date) {return this . type (date) == Venue . NATURAL}
    is_artificial    (date) {return this . type (date) == Venue . ARTIFICIAL}
    is_indoor        (date) {return this . type (date) == Venue . INDOOR}
    is_lowland       (date) {return this . elevation (date) <   300}
    is_high_altitude (date) {return this . elevation (date) >  1000}

    flag_img (date) {
        return new Country (this . country (date)) . flag_img (date)
    }

    //
    // Derived values
    //
    point_colour () {
        return this . city             () == ""  ? Venue . NO_RINK_COLOUR
             : this . is_lowland       ()        ? Venue . LOW_COLOUR
             : this . is_high_altitude ()        ? Venue . HIGH_COLOUR
             :                                     Venue . MIDDLE_COLOUR
    }

    point_style (date) {
        return this . city          (date) == ""  ? 'star'
             : this . is_natural    (date)        ? 'rect' 
             : this . is_artificial (date)        ? 'triangle'
             : this . is_indoor     (date)        ? 'circle'
             :                                      'star'
    }

    //
    // Given a key, return the corresponding object.
    // If no venue with the given key exists, return 
    // an object with the name set to the key, and
    // anything else to "" or 0.
    //
    static venue (venue_key) {
        return Venue . venues [venue_key] ||
           new Venue ({key: venue_key,
                       name:       "",
                       city:       "",
                       country:    "",
                       type:        0,
                       elevation:   0})
    }

    static add_venue (args) {
        Venue . venues [args . key] = new Venue (args)
    }

    //
    // Create the td content of the rink type column. This includes a
    // tooltip with info about the rink.
    //
    // Once we venture outside of Ice Rinks, we'll probably put this
    // into a subclass
    //
    rink_type_td (date) {
        const rink_symbol = this . is_natural    (date) ? "\u{25A0}"
                          : this . is_artificial (date) ? "\u{25B2}"
                          : this . is_indoor     (date) ? "\u{25CF}"
                          :                               ""
        const rink_span   = "<span style = 'color: " + this . point_colour () +
                            "'>" + rink_symbol + "</span>"

        const type = this . is_natural    (date) ? "Natural"
                   : this . is_artificial (date) ? "Artificial"
                   : this . is_indoor     (date) ? "Indoor" : "???"

        const flag = this . flag_img (date)

        const alt  = this . is_lowland       () ? "LL"
                   : this . is_high_altitude () ? "HA" : ""

        const td = "<div class = 'tooltip'>" + rink_span +
                   "<div class = 'tooltiptext rink_info'>" +
                   "<table class = 'rink_info'>" +
                      `<tr><th>City</th>`                                     +
                          `<td>${this . city (date)}</td>`                    +
                          `<td class = 'flag'>${flag}</td></tr>`              +
                      `<tr><th>Name</th>`                                     +
                          `<td colspan = '2'>${this . name (date)}</td></tr>` +
                      `<tr><th>Ice Type</th>`                                 + 
                          `<td colspan = '2'>${type}</td></tr>`               +
                      `<tr><th>Elevation</th>`                                + 
                          `<td>${this . elevation (date)}m</td>`              +
                          `<td>${alt}</td></tr>`                              +
                   "</table></div></div>"

        if (rink_symbol == "") {
            console . log (this)
            console . log (`this . is_indoor (${date}) = ${this . is_indoor (date)}`)
            console . log (`Type on date ${date} is ${this . type (date)}`)
        }

        return td
    }
}

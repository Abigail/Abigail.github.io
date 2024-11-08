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
    name      ()     {return                this . __name}
    city      (date) {return value_by_date (this . __city,    date)}
    country   (date) {return value_by_date (this . __country, date)}
    elevation ()     {return                this . __elevation}
    type      (date) {return value_by_date (this . __type,    date)}

    is_natural       (date) {return this . type (date) == Venue . NATURAL}
    is_artificial    (date) {return this . type (date) == Venue . ARTIFICIAL}
    is_indoor        (date) {return this . type (date) == Venue . INDOOR}
    is_lowland       ()     {return this . __elevation <   300}
    is_high_altitude ()     {return this . __elevation >  1000}

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
        return this . city          () == ""  ? 'star'
             : this . is_natural    (date)    ? 'rect' 
             : this . is_artificial (date)    ? 'triangle'
             : this . is_indoor     (date)    ? 'circle'
             :                                  'star'
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
}

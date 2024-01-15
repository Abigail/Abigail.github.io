class Event {
    static M500      = 1
    static M1000     = 1 + Event . M500
    static M1500     = 1 + Event . M1000
    static M3000     = 1 + Event . M1500
    static M5000     = 1 + Event . M3000
    static M10000    = 1 + Event . M5000
    static BIG       = 1 + Event . M10000
    static SMALL     = 1 + Event . BIG
    static OLD_SMALL = 1 + Event . SMALL
    static MINI      = 1 + Event . OLD_SMALL
    static SPRINT    = 1 + Event . MINI
    static D500      = 1 + Event . SPRINT
    static PURSUIT   = 1 + Event . D500
    static T_SPRINT  = 1 + Event . PURSUIT

    static MEN       = 1
    static WOMEN     = 1 + Event . MEN

    static event_names = {
        [Event . M500]     : "500m",
        [Event . M1000]    : "1000m",
        [Event . M1500]    : "1500m",
        [Event . M3000]    : "3000m",
        [Event . M5000]    : "5000m",
        [Event . M10000]   : "10000m",
        [Event . BIG]      : "Big",
        [Event . SMALL]    : "Small",
        [Event . OLD_SMALL]: "Old Small",
        [Event . MINI]     : "Mini",
        [Event . SPRINT]   : "Sprint",
        [Event . D500]     : "2 x 500m",
        [Event . PURSUIT]  : "Team Pursuit",
        [Event . T_SPRINT] : "Team Sprint",
    }

    static gender_names = {
        [Event . MEN]      : "Men",
        [Event . WOMEN]    : "Women",
    }

    static distance = {
        [Event . M500]     : 500,
        [Event . M1000]    : 1000,
        [Event . M1500]    : 1500,
        [Event . M3000]    : 3000,
        [Event . M5000]    : 5000,
        [Event . M10000]   : 10000,
    }

    static genders = [Event . MEN,   Event . WOMEN]
    static events  = [Event . M500,  Event . M1000,  Event . M1500,
                      Event . M3000, Event . M5000,  Event . M10000,
                      Event . BIG,   Event . SMALL,  Event . OLD_SMALL,
                      Event . MINI,  Event . SPRINT, Event . D500]

    constructor (gender, event) {
        this . __gender = gender
        this . __event  = event
    }

    static name (type) {
        return Event . event_names [type]
    }

    name () {
        return Event . name (this . __event)
    }

    static gender_name (gender) {
        return Event . gender_names [gender]
    }

    gender_name () {
        return Event . gender_name (this . __gender)
    }

    full_name () {
        return this . gender_name ()  + ", " +
              (this . is_distance () ? this . distance () + "m"
                                     : this . name ()     + " Combination")
    }

    gender () {
        return this . __gender
    }

    distance () {
        return Event . distance [this . __event] || 0
    }

    is_distance () {
        return this . __event >= Event . M500    &&
               this . __event <= Event . M10000
    }

    is_combination () {
        return this . __event >= Event . BIG     &&
               this . __event <= Event . D500
    }

    is_team () {
        return this . __event >= Event . PURSUIT &&
               this . __event <= Event . T_SPRINT
    }

    type () {
        return this . __event 
    }

    is_valid () {
        return this . gender () == Event . MEN 
             ? this . type   () != Event . OLD_SMALL &&
               this . type   () != Event . MINI
             : this . type   () != Event . BIG
    }

    equal (other_event) {
        return this . __gender == other_event . gender () &&
               this . __event  == other_event . type   ()
    }
}

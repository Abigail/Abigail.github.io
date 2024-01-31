class Event {
    static M500         = 1
    static M1000        = 1 + Event . M500
    static M1500        = 1 + Event . M1000
    static M3000        = 1 + Event . M1500
    static M5000        = 1 + Event . M3000
    static M10000       = 1 + Event . M5000
    static BIG          = 1 + Event . M10000
    static SMALL        = 1 + Event . BIG
    static OLD_SMALL    = 1 + Event . SMALL
    static MINI         = 1 + Event . OLD_SMALL
    static SPRINT       = 1 + Event . MINI
    static D500         = 1 + Event . SPRINT
    static TEAM_PURSUIT = 1 + Event . D500
    static TEAM_SPRINT  = 1 + Event . TEAM_PURSUIT
    static RELAY        = 1 + Event . TEAM_SPRINT
    static ALLROUND     = 1 + Event . RELAY

    static MEN          = 1
    static WOMEN        = 1 + Event . MEN
    static MIXED        = 1 + Event . WOMEN

    static all_events   = []

    static event_names = {
        [Event . M500]        : "500m",
        [Event . M1000]       : "1000m",
        [Event . M1500]       : "1500m",
        [Event . M3000]       : "3000m",
        [Event . M5000]       : "5000m",
        [Event . M10000]      : "10000m",
        [Event . BIG]         : "Big",
        [Event . SMALL]       : "Small",
        [Event . OLD_SMALL]   : "Old Small",
        [Event . MINI]        : "Mini",
        [Event . SPRINT]      : "Sprint",
        [Event . D500]        : "2 x 500m",
        [Event . TEAM_PURSUIT]: "Team Pursuit",
        [Event . TEAM_SPRINT] : "Team Sprint",
        [Event . RELAY]       : "Mixed Gender Relay",
        [Event . ALLROUND]    : "Allround",
    }

    static gender_names = {
        [Event . MEN]      : "Men",
        [Event . WOMEN]    : "Women",
        [Event . MIXED]    : "Mixed",
    }

    static distance = {
        [Event . M500]     : 500,
        [Event . M1000]    : 1000,
        [Event . M1500]    : 1500,
        [Event . M3000]    : 3000,
        [Event . M5000]    : 5000,
        [Event . M10000]   : 10000,
    }

    static distances = {
        [Event . BIG]:       [500, 5000, 1500, 10000],
        [Event . SMALL]:     [500, 3000, 1500,  5000],
        [Event . OLD_SMALL]: [500, 3000, 1000,  5000],
        [Event . MINI]:      [500, 1500, 1000,  3000],
        [Event . SPRINT]:    [500, 1000,  500,  1000],
        [Event . D500]:      [500,  500],
    }

    static genders     = [Event . MEN, Event . WOMEN]
    static all_genders = [Event . MEN, Event . WOMEN, Event . MIXED]

    //
    // Return a list of events, depending on some filters
    //
    static events (filters) {
        let out = Event . all_events
        Object . keys (filters) . forEach ((key) => {
            if (key == "gender") {
                out = out . filter (item => item . gender () == filters [key])
            }
            else if (key == "distance") {
                out = out . filter (item =>
                            filters [key] ?  item . is_distance ()
                                          : !item . is_distance ()
                )
            }
            else if (key == "combination") {
                out = out . filter (item =>
                            filters [key] ?  item . is_combination ()
                                          : !item . is_combination ()
                )
            }
            else if (key == "team") {
                out = out . filter (item =>
                            filters [key] ?  item . is_team ()
                                          : !item . is_team ()
                )
            }
            else if (key == "suspended") {
                out = out . filter (item =>
                            filters [key] ?  item . is_suspended ()
                                          : !item . is_suspended ()
                )
            }
            else if (key == "record") {
                out = out . filter (item =>
                            filters [key] ?  item . record ()
                                          : !item . record ()
                )
            }
        })
        return out
    }

    constructor (gender, event, args = {}) {
        this . __gender = gender
        this . __event  = event
        this . __record = args . record || 0
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

    full_name (use_gender = 1) {
        return this . gender () == Event . MIXED ? this . name ()
             : (use_gender ? (this . gender_name ()  + ", ") : "") +
              (this . is_distance    () ? this . distance () + " meter"
             : this . is_combination () ? this . name     () + " Combination"
             :                            this . name     ())
    }

    short_name () {
        return this . __event == Event . RELAY        ? "Relay"
             : this . __event == Event . TEAM_PURSUIT ? "Pursuit"
             : this . __event == Event . TEAM_SPRINT  ? "Sprint"
             : this . name ()
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
        return this . __event >= Event . TEAM_PURSUIT &&
               this . __event <= Event . RELAY
    }

    type () {
        return this . __event 
    }

    is_valid () {
        return this . gender () == Event . MIXED
             ? this . type   () == Event . RELAY
             : this . type   () != Event . RELAY &&
              (this . gender () == Event . MEN
                 ? this . type   () != Event . OLD_SMALL &&
                   this . type   () != Event . MINI
                 : this . type   () != Event . BIG)
    }

    is_suspended () {
        return this . type () == Event . OLD_SMALL
    }

    //
    // Return true if this is an event which has a record
    //
    record () {
        return this . __record
    }

    equal (other_event) {
        return this . gender () == other_event . gender () &&
               this . type   () == other_event . type   () &&
               this . record () == other_event . record ()
    }

    //
    // If the event is a combination, and has times, return a list
    // of tuples, mapping distance to time per distance
    //
    distances () {
        return Event . distances [this . type ()]
    }

    //
    // (HTML) description of the event
    //
    description () {
        let text = "Here we are showing the record progression for the "
        const gender = this . gender_name ()
        if (this . is_distance ()) {
            const dist = this . distance ()
            text += `${gender}'s ${dist} meter. `
            if (this . gender () == Event . WOMEN) {
                if (dist == 5000) {
                    text += `This record was suspended between the ISU ` +
                            `congresses of 1955 and 1982.`
                }
                if (dist == 10000) {
                    text += `This record was suspended at the ISU congress ` +
                            `of 1953. All records listed since are unofficial.`
                }
            }
        }
        else if (this . type () == Event . BIG) {
            text += `${gender}'s Big Combination. The Big Combination `       +
                    `consists of combined results of the 500m, 5000m, `       +
                    `1500m and 10000m, achieved in the same tournament.`
        }
        else if (this . type () == Event . SMALL) {
            text += `${gender}'s Small Combination. The Small Combination `   +
                    `consists of combined results of the 500m, 3000m, `       +
                    `1500m and 5000m, achieved in the same tournament.`
        }
        else if (this . type () == Event . OLD_SMALL) {
            text += `${gender}'s old Small Combination. The old Small `       +
                    `Combination consists of combined results of the `        +
                    `500m, 3000m, 1000m and 5000m, achieved in the `          +
                    `same tournament. This record has been suspended `        +
                    `since the ISU congress of 1955.`
        }
        else if (this . type () == Event . MINI) {
            text += `${gender}'s Mini Combination. The Mini Combination `     +
                    `consists of combined results of the 500m, 1500m, `       +
                    `1000m and 3000m, achieved in the same tournament.`
        }
        else if (this . type () == Event . SPRINT) {
            text += `${gender}'s Sprint Combination. The Sprint Combination ` +
                    `consists of combined results of the 500m, 1000m, `       +
                    `500m and 1000m, achieved in the same tournament.`
        }
        else if (this . type () == Event . D500) {
            text += `${gender}'s 2 x 500 meter. This is the combined `        +
                    `result of skating twice a 500m in the same event; `      +
                    `only results achieved in events where the final `        +
                    `result is determined by the total time after two `       +
                    `races qualify.` 
        }
        else if (this . type () == Event . TEAM_PURSUIT) {
            const laps = this . gender () == Event . MEN ? 8 : 6
            text += `${gender}'s Team Pursuit. The Team Pursuit is skated `   +
                    `by a team of three, over ${laps} (inner) laps. `         +
                    `The time of the third skater crossing the line `         +
                    `counts.`
        }
        else if (this . type () == Event . TEAM_SPRINT) {
            text += `${gender}'s Team Sprint. In the Team Sprint, a team `    +
                    `of three skaters skates three laps, dropping one rider ` +
                    `each lap. The time is the time of the final skater `     +
                    `finishing their last lap.`
        }
        else if (this . type () == Event . RELAY) {
            text += `Mixed Gender Relay. A team of two skaters, one male `    +
                    `and one female skate skate six laps. Skaters skate `     +
                    `one or two laps, then they exchange.`
        }
        return text
    }

    //
    // Initialize all events
    //
    static init () {
        //
        // Events with records
        //

        //
        // Individual distances
        //
        [Event . M500,  Event .  M1000,
         Event . M1500, Event .  M3000,
         Event . M5000, Event . M10000] . forEach ((distance) => {
            Event . all_events . push (
                new Event (Event . MEN,   distance, {record: 1}),
                new Event (Event . WOMEN, distance, {record: 1})
            )
        })

        //
        // Combinations
        //
        ;[Event . BIG, Event . SMALL, Event . SPRINT, Event . D500] .
            forEach ((type) => {
                Event . all_events . push (
                    new Event (Event . MEN,   type, {record: 1}),
                )
            })

        ;[Event . SMALL,  Event . OLD_SMALL, Event . MINI,
         Event . SPRINT, Event . D500] .
            forEach ((type) => {
                Event . all_events . push (
                    new Event (Event . WOMEN, type, {record: 1}),
                )
            })

        //
        // Team events
        //
        ;[Event . TEAM_PURSUIT, Event . TEAM_SPRINT] . forEach ((type) => {
            Event . all_events . push (
                new Event (Event . MEN,   type, {record: 1}),
                new Event (Event . WOMEN, type, {record: 1})
            )
        })
        Event . all_events . push (new Event (Event . MIXED, Event . RELAY,
                                             {record: 1}))
    }
}


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

    static MEN          = 1
    static WOMEN        = 1 + Event . MEN

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

    static distances = {
        [Event . BIG]:       [500, 5000, 1500, 10000],
        [Event . SMALL]:     [500, 3000, 1500,  5000],
        [Event . OLD_SMALL]: [500, 3000, 1000,  5000],
        [Event . MINI]:      [500, 1500, 1000,  3000],
        [Event . SPRINT]:    [500, 1000,  500,  1000],
        [Event . D500]:      [500,  500],
    }

    static genders = [Event . MEN,   Event . WOMEN]
    static events  = [Event . M500,  Event . M1000,  Event . M1500,
                      Event . M3000, Event . M5000,  Event . M10000,
                      Event . BIG,   Event . SMALL,  Event . OLD_SMALL,
                      Event . MINI,  Event . SPRINT, Event . D500,
                      Event . TEAM_PURSUIT]

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
              (this . is_distance    () ? this . distance () + "m"
             : this . is_combination () ? this . name     () + " Combination"
             :                            this . name     ())
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
               this . __event <= Event . TEAM_SPRINT
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
                    `result of skating twice a 500m in the same event `       +
                    `on the same day.`
        }
        else if (this . type () == Event . TEAM_PURSUIT) {
            const laps = this . gender () == Event . MEN ? 8 : 6
            text += `${gender}'s Team Pursuit. The Team Pursuit is skated `   +
                    `by a team of three, over ${laps} (inner) laps. `         +
                    `The time of the third skater crossing the line `         +
                    `counts.`
        }
        return text
    }
}

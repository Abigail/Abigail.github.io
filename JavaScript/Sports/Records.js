let genders      = ['men', 'women', 'mixed']
let ages         = ['senior']
let types        = ['world']
let disciplines  = {
    speedskating: ['500', '1000', '1500', '3000', '5000', '10000',
                   'big', 'small', 'old_small', 'mini', 'sprint', '2x500',
                   'pursuit', 'team_sprint', 'relay'],
}
let names        = {
    speedskating: {
       '500':        ["500 meter",                "500m"],
       '1000':       ["1000 meter",               "1000m"],
       '1500':       ["1500 meter",               "1500m"],
       '3000':       ["3000 meter",               "3000m"],
       '5000':       ["5000 meter",               "5000m"],
       '10000':      ["10000 meter",              "10000m"],
        big:         ["Big Combination",          "Big"],
        small:       ["Small Combination",        "Small"],
        old_small:   ["Old Small Combination",    "Old Small"],
        mini:        ["Mini Combination",         "Mini"],
        sprint:      ["Sprint Combination",       "Sprint"],
       '2x500':      ["2 x 500m Combination",     "2 x 500m"],
        pursuit:     ["Team Pursuit",             "Pursuit"],
        team_sprint: ["Team Sprint",              "Sprint"],
        relay:       ["Team Relay",               "Relay"],
    }
}
class Record {
    static records = []

    constructor (args) {
        this . __sport       = args . sport
        this . __discipline  = args . discipline
        this . __gender      = args . gender
        this . __type        = args . type
        this . __age         = args . age
        this . __progression = []
    }

    static genders () {
        return genders
    }

    static disciplines (sport) {
        return disciplines [sport]
    }

    //
    // Return the event with the given parameters, or create a
    // new one, and return that one.
    //
    static event (args = {}) {
        //
        // Defaults
        //
        if (!args . age)  {args . age  = 'senior'}
        if (!args . type) {args . type = 'world'}

        let gender      = args . gender      || ""
        let sport       = args . sport       || ""
        let discipline  = args . discipline  || ""
        let age         = args . age
        let type        = args . type
        let exists      = args . exists

        if (!genders . includes (gender)) {
            console . log (`${gender} is not a gender`)
            return
        }
        if (!ages . includes (age)) {
            console . log (`${age} is not a valid age category`)
            return
        }
        if (!types . includes (type)) {
            console . log (`${type} is not a valid record type`)
            return
        }
        if (!disciplines [sport]) {
            console . log (`${sport} is not a valid sport`)
            return
        }
        if (!disciplines [sport] . includes (discipline)) {
            console . log (`${discipline} is not a valid ` +
                            `discipline for ${sport}`)
            return
        }

        if (!Record . records [sport]) {
            if (exists) {return undefined}
            Record . records [sport] = []
        }
        if (!Record . records [sport] [discipline]) {
            if (exists) {return undefined}
            Record . records [sport] [discipline] = []
        }
        if (!Record . records [sport] [discipline] [gender]) {
            if (exists) {return undefined}
            Record . records [sport] [discipline] [gender] = []
        }
        if (!Record . records [sport] [discipline] [gender] [type]) {
            if (exists) {return undefined}
            Record . records [sport] [discipline] [gender] [type] = []
        }
        if (!Record . records [sport] [discipline] [gender] [type] [age]) {
            if (exists) {return undefined}
            Record . records [sport] [discipline] [gender] [type] [age] = 
                new Record (args)
        }

        return Record . records [sport] [discipline] [gender] [type] [age]
    }

    //
    // Returns the event with the given parameters, or undefined
    // if it doesn't exist
    //
    static exists (args = {}) {
        args . exists = 1
        return this . event (args)
    }

    //
    // Getters
    //
    sport      () {return this . __sport}
    discipline () {return this . __discipline}
    gender     () {return this . __gender}
    type       () {return this . __type}
    age        () {return this . __age}

    //
    // Return the current record
    //
    current () {
        return this . __progression . filter ((entry) => {
            return !entry . is_suspension () &&
                    entry . is_current    ()
        })
    }

    //
    // Add a record/suspension; it is assumed records are added in order
    //
    add_record (args) {
        let new_entry = new Record_Entry ({...args, record: this})
        this . __progression . push (new_entry)
        return this
    }
    add_suspension (args) {
        let new_entry = new Suspension ({... args, record: this})
        this . __progression . push (new_entry)
        return this
    }

    //
    // Full name of the discipline
    //
    name (short = false) {
        let index = short ? 1 : 0
        return names [this . sport ()] [this . discipline ()] [index]
    }
}


class Record_Entry {
    constructor (args) {
        this . __record       =                    args . record
        this . __venue        = Venue   . venue   (args . venue)
        this . __result       =                    args . result
        this . __date         =                    args . date
        this . __first_date   =                    args . first_date
        this . __current      = args . current ? true : false
        if (args . improvement) {
            this . __improvement  =                args . improvement
        }
        if (args . time_in_sec) {
            this . __time_in_sec  =                args . time_in_sec
        }
        if (args . athlete) {
            this . __athlete  = Athlete . athlete (args . athlete)
        }
        if (args . country) {
            this . __country  = Country . country (args . country)
        }
        if (args . times) {
            this . __times    =                    args . times
        }
        if (args . members) {
            this . __members  =  args . members . map ((ath) =>
                                     Athlete . athlete (ath))
        }

        //
        // Set the duration, or calculate it.
        //
        if (args . duration != null) {
            this . __duration =                    args . duration
        }
        else {
            this . __duration = Math . round (
                    (new Date ()              . setHours (12) -
                     new Date (this . __date) . setHours (12)) /
                    (24 * 3600 * 1000))
        }
    }

    //
    // Getters
    //
    athlete         () {return this . __athlete}
    country         () {return this . __country}
    venue           () {return this . __venue}
    result          () {return this . __result}
    date            () {return this . __date}
    first_date      () {return this . __first_date}
    time_in_sec     () {return this . __time_in_sec}
    improvement     () {return this . __improvement}
    times           () {return this . __times || []}
    members         () {return this . __members}
    duration        () {return this . __duration}
    is_current      () {return this . __current}

    athlete_or_team () {return this . __athlete ||
                               this . __country}

    is_suspension () {return false}
}



class Suspension {
    constructor (args) {
        this . __date    = args . date
        this . __message = args . message
        this . __record  = args . record
    }

    is_suspension () {return true}

    date    () {return this . __date}
    message () {return this . __message}
}

function value_by_date (value, date = "0000-00-00") {
    if (typeof (value) === "object") {
        if (date == "now" || date == "today") {
            return value [value . length - 1]  // Most recent value
        }
        for (let i = value . length - 2; i >= 0; i -= 2) {
            if (value [i] <= date) {
                return value [i + 1]
            }
        }
        return "???"
    }
    return value
}

class Athlete {
    // #name
    // #nationality

    static GERMAN_REUNIFICATION_DATE = "1990-10-03"

    static athletes = {}

    constructor (key, name, nationality) {
        this . __key         = key
        this . __name        = name
        this . __nationality = nationality
    }

    name (date = 0) {
        return value_by_date (this . __name, date)
    }

    key () {
        return this . __key
    }

    nationality (date = 0) {
        const nat = value_by_date (this . __nationality, date)

        //
        // Special case GDR & FRG
        //
        if ((nat == "GDR" || nat == "FRG") &&
             date >= Athlete . GERMAN_REUNIFICATION_DATE) {
            return "GER"
        }

        return nat
    }

    country (date = 0) {
        const nat = this . nationality (date)
        return new Country (nat)
    }

    flag_img (date = 0) {
        return this . country (date) . flag_img (date)
    }

    static add_athlete (keys) {
        const key         = keys . key
        const name        = keys . name
        const nationality = keys . nationality
        Athlete . athletes [key] = new Athlete (key, name, nationality)
    }

    static athlete (key) {
        return Athlete . athletes [key] ||
               Country . country (key)  ||
               new Athlete (key, "")
    }
}

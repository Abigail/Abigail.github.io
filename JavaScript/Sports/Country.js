//
// https://en.wikipedia.org/wiki/List_of_IOC_country_codes
//
class Country {
    static name (code) {
        return Country . name_info [code] || code
    }

    constructor (code) {
        this . __code  = code
        this . __name  = Country . name_info [code]
        this . __flags = Country . flag_info [code]
    }

    key () {
        return this . __code
    }

    nationality () {
        return this . __code
    }

    name () {
        return this . __name
    }

    country (date) {
        return this
    }

    static country (code) {
        if (Country . name_info [code]) {
            return new Country (code)
        }
        return undefined
    }

    flag_img (date) {
        let flag = undefined
        if (this . __flags) {
            let flags = this . __flags

            for (let i = 0; i < flags . length; i += 2) {
                if (date == "last" && flags [i + 1] ||
                    date != "last" && date >= flags [i]) {
                    flag = flags [i + 1]
                }
            }
        }
        if (flag) {
            const title = this . name ()
            return `<img src = '../../../Images/Flags/${flag}' ` +
                        `title = '${title}'>`
        }
        return this . key ()
    }
}

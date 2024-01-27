//
// https://en.wikipedia.org/wiki/List_of_IOC_country_codes
//
class Country {
    static nation_names = {
        AUT:     "Austria",
        BEL:     "Belgium",
        CAN:     "Canada",
        CHN:     "China",
        CZE:     "Czech Republic",
        FIN:     "Finland",
        FRG:     "West-Germany",
        GDR:     "East-Germany",
        GER:     "Germany",
        HUN:     "Hungary",
        ITA:     "Italy",
        JPN:     "Japan",
        KOR:     "Korea",
        NED:     "Netherlands",
        NOR:     "Norway",
        POL:     "Poland",
        RU1:     "Russian Empire",
        RUS:     "Russia",
        SWE:     "Sweden",
        URS:     "Soviet Union",
        USA:     "United States",
    }

    static name (code) {
        return Country . nation_names [code] || code
    }

    constructor (code) {
        this . __code = code
        this . __name = Country . nation_names [code]
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

    static country (code) {
        if (Country . nation_names [code]) {
            return new Country (code)
        }
        return undefined
    }
}

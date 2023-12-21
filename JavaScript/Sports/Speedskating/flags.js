class Flags {
    static info = {
        NED: [
            "0",          "netherlands.svg",
        ],
        NOR: [
            "1844",       "norway-1844.svg",
            "1900",       "norway-1900.svg",
        ],
        SWE: [
            "1844",       "sweden-1844.svg",
            "1905-11-01", "sweden-1905.svg",
            "1906-06-22", "sweden-1906.svg",
        ],
    }
    static img (nation, date) {
        let flag = undefined
        if (Flags . info [nation]) {
            for (let i = 0; i < Flags . info [nation] . length; i += 2) {
                if (date >= Flags . info [nation] [i]) {
                    flag = Flags . info [nation] [i + 1]
                }
            }
        }
        if (flag) {
            return `<img src = '../../../Images/Flags/${flag}' ` +
                        `title = '${nation}'>`
        }
        return nation
    }
}

//
// Flags . info is defined in flags-data.js
//
class Flags {
    static img (nation, date) {
        let flag = undefined
        if (Flags . info [nation]) {
            for (let i = 0; i < Flags . info [nation] . length; i += 2) {
                if (date == "last") {
                    if (Flags . info [nation] [i + 1]) {
                        flag = Flags . info [nation] [i + 1]
                    }
                }
                else if (date >= Flags . info [nation] [i]) {
                    flag = Flags . info [nation] [i + 1]
                }
            }
        }
        if (flag) {
            const title = Country . name (nation)
            return `<img src = '../../../Images/Flags/${flag}' ` +
                        `title = '${title}'>`
        }
        return nation
    }
}

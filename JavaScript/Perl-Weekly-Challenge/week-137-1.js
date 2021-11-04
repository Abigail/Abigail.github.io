//
// Given a year, return its "Doomsday" value.
// 0 -> Sunday, 6 -> Saturday
//

let SUNDAY    = 0
let MONDAY    = 1
let TUESDAY   = 2
let WEDNESDAY = 3
let THURSDAY  = 4
let FRIDAY    = 5
let SATURDAY  = 6

let weekdays  = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"]

function doomsday (year) {
    let anchor   = [TUESDAY, SUNDAY, FRIDAY, WEDNESDAY]
                   [Math . floor (year / 100) % 4]
    let y        = year % 100
    let doomsday = ((Math . floor  (y / 12) + (y % 12) +
                     Math . floor ((y % 12) / 4)) + anchor) % 7
    return (doomsday)
}

//
// Given a year, return whether it's a leap year or not
//
function is_leap (year) {
    return ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
}


function is_long_year () {
    let result = ""
    let year   = +$("input#year") . val ()
    if (year > 0) {
        let dec_31 = (doomsday (year) + 31 - 12) % 7
        result = `December 31, ${year} is a ${weekdays [dec_31]}.`
        if (dec_31 == THURSDAY) {
            result += ` This makes ${year} a Long Year.`
        }
        else {
            if (dec_31 == FRIDAY) {
                if (is_leap (year)) {
                    result += ` Since ${year} is a leap year, this makes` +
                              ` ${year} a Long Year.`
                }
                else {
                    result += ` Since ${year} is not a leap year,` +
                              ` ${year} is not a Long Year.`
                }
            }
            else {
                result += ` Hence, ${year} is not a Long Year.`
            }
        }
    }

    $("span#result") . text (result)
}

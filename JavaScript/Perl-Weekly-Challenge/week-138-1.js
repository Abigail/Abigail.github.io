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

//
// Lookup table for the number of workdays
//
let lookup    = [
    [261, 260, 260, 261, 261, 261, 261],
    [262, 261, 260, 261, 262, 262, 262],
]


function work_days () {
    let result = ""
    let year   = +$("input#year") . val ()
    if (year > 0) {
        let dday  = doomsday (year)
        let leap  = is_leap  (year) ? 1 : 0
        let jan_1 = (dday + 7 - 2 - is_leap (year)) % 7
        result = `The doomsday value of the year ${year} is `               +
                 `${dday}. ${year} is ${leap == 1 ? "a" : "not a"} `        +
                 `leap year, so the year starts on a ${weekdays [jan_1]}. ` +
                 `Hence, the ${year} has ${lookup [leap] [dday]} work days.`
    }

    $("span#result") . text (result)
}

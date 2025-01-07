class Utils {
    //
    // Given a time in 'MM:SS.ss' format, return the number of seconds.
    //
    // TODO: Allow hours as well.
    //
    static time2sec (time) {
        if (!time) {
            return undefined
        }
        let [min, sec] = time . split (':') . map (x => +x)
        return 60 * min + sec
    }

    //
    // sec2time
    //
    // Given a number of seconds, format them as a time
    //
    static sec2time (seconds, precision = 0) {
        const min = Math . floor (seconds / 60)
        let   sec = seconds - min * 60
        if (precision) {
            sec = sec . toFixed (precision)
        }

        return min + ":" + (sec < 10 ? "0" : "") + sec
    }

    //
    // today2value
    //
    // Give today as a fractional year value.
    // 
    static today2value () {
        const date = new Date ()
        const year = date . getFullYear ()
        const jan1 = new Date (year, 0, 1, 12, 0, 0)
        const diy  = Math . round ((date - jan1) / (1000 * 60 * 60 * 24))

        const is_leap = year % 400 == 0 ? 1
                      : year % 100 == 0 ? 0
                      : year %   4 == 0 ? 1 : 0

        return year + diy / (365 + is_leap)
    }

    //
    // function pad (time)
    //
    // Take a time value, and add an invisible '0' if the time only has a single
    // digit after the decimal dot. This makes sure times will be lined up
    // nicely when right aligned.
    //
    static pad (time) {
        const pad = "<span style = 'visibility: hidden'>0</span>"
        return time ? time . match (/\.[0-9]$/) ? time + pad : time : "?"
    }

    //
    // Upper case the first letter of a string
    static uc_first (str) {
        return str . charAt (0) . toUpperCase () + str . slice (1)
    }
}

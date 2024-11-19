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

}

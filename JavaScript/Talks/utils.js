//
// Some utily functions we may want to use in one or more pages.
//
class Utils {
    static subject_pattern (args = {}) {
        let name = args . class || "content"

        let element = $("." + name)
        let text = element . html ()
                           . replaceAll (/"([^"]+;)"/g,
                                          '"<span class = "subject">$1</span>"')
                           . replaceAll (/\/([^\/]+;)\//g,
                                          '/<span class = "pattern">$1</span>/')
        element . html (text)
    }
}

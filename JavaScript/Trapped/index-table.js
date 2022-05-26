$(document) . ready (() => {
    $("td.col-2,td.col-3,td.col-4") . each ((i, e) => {
        if ($(e) . text () . match (/^\s*T\//)) {
            $(e) . addClass ("trapped")
        } else
        if ($(e) . text () . match (/^\s*F\*/)) {
            $(e) . addClass ("interesting-fill")
        } else
        if ($(e) . text () . match (/^\s*F\b/)) {
            $(e) . addClass ("fill")
        } else
        if ($(e) . text () . match (/^\s*E\*/)) {
            $(e) . addClass ("interesting-escape")
        } else
        if ($(e) . text () . match (/^\s*E/)) {
            $(e) . addClass ("escape")
        } else 
        if ($(e) . text () . match (/^\s*(?:W|FC)/)) {
            $(e) . addClass ("boring")
        } else {
            $(e) . addClass ("unknown")
        }
    })
})

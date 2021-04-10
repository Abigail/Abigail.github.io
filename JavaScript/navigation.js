//
// Function to set the links for the prev/next links
//

let PWC = "Perl-Weekly-Challenge";

let pages = [
    ["week-106-1", "Maximum Gap"],
    ["week-106-2", "Decimal String"],
    ["week-107-1", "Self-descriptive Numbers"],
    ["week-107-2", "List Methods"],
]

pages . forEach (_ => _ [0] = PWC + "/" + _ [0] + ".html")

console . log (pages)

$(document) . ready (function () {
    let pagename = document . location . href
        pagename = pagename . substr (pagename . lastIndexOf ('/HTML/') + 6)

    //
    // Find the index
    //
    let index = -1
    for (i = 0; i < pages . length; i ++) {
        if (pages [i] [0] == pagename) {
            index = i
        }
    }

    if (index > 0) {
        $("a.prev") . attr ("href", "../" + pages [index - 1] [0])
        $("a.prev") . attr ("title",        pages [index - 1] [1])
    }
    else {
        $("p.prev") . css ("visibility", "hidden")
    }

    if (index >= 0 && index < pages . length - 1) {
        $("a.next") . attr ("href", "../" + pages [index + 1] [0])
        $("a.next") . attr ("title",        pages [index + 1] [1])
    }
    else {
        $("p.next") . css ("visibility", "hidden")
    }

});

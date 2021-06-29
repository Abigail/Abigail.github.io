//
// Function to set the links for the prev/next links
//

let PWC = "Perl-Weekly-Challenge";

let pages = [
    ["week-103-2", "What's playing?"],
    ["week-104-1", "FUCS Sequence"],
    ["week-104-2", "NIM Game"],
    ["week-105-1", "Nth root"],
    ["week-106-1", "Maximum Gap"],
    ["week-106-2", "Decimal String"],
    ["week-107-1", "Self-descriptive Numbers"],
    ["week-107-2", "List Methods"],
    ["week-108-1", "Locate Memory"],
    ["week-108-2", "Bell Numbers"],
    ["week-109-1", "Chowla Numbers"],
    ["week-109-2", "Four Squares Puzzle"],
    ["week-110-1", "Valid Phone Numbers"],
    ["week-110-2", "Transpose File"],
    ["week-111-1", "Search Matrix"],
    ["week-111-2", "Ordered Letters"],
    ["week-112-1", "Canonical Path"],
    ["week-112-2", "Climb Stairs"],
    ["week-113-1", "Represent Integer"],
    ["week-113-2", "Recreate Binary Tree"],
    ["week-114-1", "Next Palindrome Number"],
    ["week-114-2", "Higher Integer Set Bits"],
    ["week-115-1", "String Chain"],
    ["week-115-2", "Largest Multiple"],
    ["week-116-1", "Number Sequence"],
    ["week-116-2", "Sum of Squares"],
    ["week-117-1", "Missing Row"],
    ["week-117-2", "Find Possible Paths"],
    ["week-118-1", "Binary Palindrome"],
    ["week-118-2", "Adventure of Knight"],
]

pages . forEach (_ => _ [0] = PWC + "/" + _ [0] + ".html")

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

    $(document) . on ('keydown', event => {
        //
        // Press 'n' or 'N'
        //
        if ((event . which == 78 || event . which == 110) &&
                     index < pages . length - 1) {
            location . href = "../" + pages [index + 1] [0]
        }
        //
        // Press 'p' or 'P'
        //
        if ((event . which == 80 || event . which == 112) && index > 0) {
            location . href = "../" + pages [index - 1] [0]
        }
    })

});

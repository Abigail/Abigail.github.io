//
// Function to set the links for the prev/next links.
//

let PWC = "Perl-Weekly-Challenge";

let pwc_pages = [
    ["week-101-1", "Pack a Spiral"],
    ["week-101-2", "Origin-containing Triangle"],
    ["week-102-1", "Rare Numbers"],
    ["week-102-2", "Hash-counting String"],
    ["week-103-1", "Chinese Zodiac"],
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
    ["week-119-1", "Swap Nibbles"],
    ["week-119-2", "Sequence without 1-on-1"],
    ["week-120-1", "Swap Odd/Even Bits"],
    ["week-120-2", "Clock Angle"],
    ["week-121-1", "Invert Bit"],
    ["week-121-2", "The Travelling Salesman"],
    ["week-122-1", "Average of Stream"],
    ["week-122-2", "Basketball Points"],
    ["week-123-1", "Ugly Numbers"],
    ["week-123-2", "Square Points"],
    ["week-124-1", "Happy Women Day"],
    ["week-124-2", "Tug of War"],
    ["week-125-1", "Pythagorean Triples"],
    ["week-125-2", "Binary Tree Diameter"],
    ["week-126-1", "Count Numbers"],
    ["week-126-2", "Minesweeper Game"],
    ["week-127-1", "Disjoint Sets"],
    ["week-127-2", "Conflict Intervals"],
    ["week-128-1", "Maximum Sub-Matrix"],
    ["week-128-2", "Minimum Platforms"],
    ["week-129-1", "Root Distance"],
    ["week-129-2", "Add Linked Lists"],
    ["week-130-1", "Odd Number"],
    ["week-131-1", "Consecutive Arrays"],
    ["week-131-2", "Find Pairs"],
    ["week-132-1", "Mirror Dates"],
    ["week-132-2", "Hash Join"],
    ["week-133-1", "Integer Square Root"],
    ["week-133-2", "Smith Numbers"],
]

pwc_pages . forEach (_ => _ [0] = PWC + "/" + _ [0] + ".html")

$(document) . ready (function () {
    let pagename = document . location . href
        pagename = pagename . substr (pagename . lastIndexOf ('/HTML/') + 6)

    if (pagename . match (/^Perl-Weekly-Challenge/)) {
        navigation ("PWC", pagename, pwc_pages)
    }
})


//
// Create the navigational links: pointers at the bottom, and hotkeys
//
function navigation (type, pagename, pages) {
    //
    // Index is special
    //
    if (pagename . match ("/index.html$")) {
        make_index (type, pages)
        return
    }

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

        //
        // Press 'i' or 'I'
        //
        if (event . which == 73 || event . which == 105) {
            location . href = "index.html"
        }
    })

    //
    // If we click on the image (or rather, the entire div it is in),
    // go to the index.
    //
    $(".byline") . click (() => {
        location . href = "index.html"
    })

}


//
// Populate a list with links to the blogs.
//
function make_index (type, pages) {
    pages . reverse () . forEach (entry => {
        $("#index") . append ("<li><a href = '../" + entry [0] + "'>" +
                               entry [1] + "</a></li>\n")
    })
}

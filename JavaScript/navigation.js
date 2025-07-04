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
    ["week-134-1", "Pandigital Numbers"],
    ["week-134-2", "Distince Terms Count"],
    ["week-135-1", "Middle 3-digits"],
    ["week-135-2", "Validate SEDOL"],
    ["week-136-1", "Two Friendly"],
    ["week-136-2", "Fibonacci Sequence"],
    ["week-137-1", "Long Year"],
    ["week-137-2", "Lychrel Number"],
    ["week-138-1", "Workdays"],
    ["week-138-2", "Split Number"],
    ["week-139-1", "JortSort"],
    ["week-139-2", "Long Primes"],
    ["week-140-1", "Add Binary"],
    ["week-140-2", "Multiplication Table"],
    ["week-141-1", "Number Divisors"],
    ["week-141-2", "Like Numbers"],
    ["week-142-1", "Divisor Last Digit"],
    ["week-142-2", "Sleep Sort"],
    ["week-145-1", "Dot Product"],
    ["week-145-2", "Palindromic Tree"],
    ["week-146-1", "10001st Prime Number"],
    ["week-146-2", "Curious Fraction Tree"],
    ["week-147-1", "Truncatable Prime"],
    ["week-147-2", "Pentagon Numbers"],
    ["week-148-1", "Eban Numbers"],
    ["week-148-2", "Cardano Triplets"],
    ["week-149-1", "Fibonacci Digit Sum"],
    ["week-149-2", "Largest Square"],
    ["week-150-1", "Fibonacci Words"],
    ["week-150-2", "Square-free Integer"],
]

pwc_pages . forEach (_ => _ [0] = PWC + "/" + _ [0] + ".html")

$(document) . ready (function () {
    let pagename = document . location . href
        pagename = pagename . substr (pagename . lastIndexOf ('/HTML/') + 6)

    if (pagename . match (/^Perl-Weekly-Challenge/)) {
        navigation ("PWC", pagename, pwc_pages)
    }
    else {
        navigation (window . type, pagename, window . pages)
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

    if (!pages) {return}

    let up = type == "ADV" ? "../../" : "../"

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
        $("a.prev") . attr ("href", up + pages [index - 1] [0])
        $("a.prev") . attr ("title",     pages [index - 1] [1])
    }
    else {
        $("p.prev") . css ("visibility", "hidden")
    }

    if (index >= 0 && index < pages . length - 1) {
        $("a.next") . attr ("href", up + pages [index + 1] [0])
        $("a.next") . attr ("title",     pages [index + 1] [1])
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
            location . href = up + pages [index + 1] [0]
        }

        //
        // Press 'p' or 'P'
        //
        if ((event . which == 80 || event . which == 112) && index > 0) {
            location . href = up + pages [index - 1] [0]
        }

        //
        // Press 'i' or 'I'
        //
        if (event . which == 73 || event . which == 105) {
            location . href = "index.html"
        }
    })

    //
    // Sometimes, we don't get the binding. Let's try with a delay
    //
    setTimeout (function () {
        //
        // If we click on the image (or rather, the entire div it is in),
        // go to the index.
        //
        $(".byline") . click (() => {
            location . href = "index.html"
        })

        $(".byline") . attr ("title", "Go to index")
    }, 100)

}


//
// Populate a list with links to the blogs.
//
function make_index (type, pages) {
    let up = type == "ADV" ? "../.." : ".."
    let list = pages
    if (!list) {return}
    if (type != "Trapped") {
        list = list . reverse ()
    }
    list . forEach (entry => {
        $("#index") . append ("<li><a href = '" + up + "/" + entry [0] + "'>" +
                               entry [1] + "</a></li>\n")
    })
}

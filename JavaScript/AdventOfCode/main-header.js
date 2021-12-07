//
// Replace each non-space character in the header with a span,
// with that character as content.
//
$(document) . ready (function () {
    var h1 = $("h1:contains('Advent Of Code')")
    h1 . html (h1 . text () . replace (/\S/g, (match) => {
        return "<span class = 'colour-flip'>" + match + "</span>"
    }))
    set_colours (1)
})

//
// Set the css property of an element, picking a random Christmas
// colour: the red and green used by the Advent of Code calendar.
//
function set_css (element) {
    var colours = ["#3C8D0D", "#941F1F"]   // Green & Red
    var index   =  Math . floor (2 * Math . random ())
    var colour  =  colours [index]
    $(element) . css ("color",                    colour)
    $(element) . css ("text-shadow", "4px 4px " + colour + "44")
}

//
// Set the css of all characters (if all == 1), or of a randomly
// selected character. Then call the function again, with a
// 0.25 to 0.75 second delay.
//
function set_colours (all) {
    var spans = $(".colour-flip")
    if (all) {
        spans . each (function () {
            set_css (this)
        })
    }
    else {
        set_css (spans [Math . floor (spans . length * Math . random ())])
    }

    setTimeout (set_colours, 250 + 500 * Math . random (), 0)
}

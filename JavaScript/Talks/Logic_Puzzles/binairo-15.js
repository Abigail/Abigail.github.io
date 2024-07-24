$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide (4)
    add_todo (() => unhide ())
    add_todo (() => ascii ())
    add_todo (() => replace ())
})

function ascii () {
    $("span.stroke") . css ({"text-decoration": "line-through"})
    $("span.ascii")  . css ({"visibility":      "visible"})
}


function replace () {
    $("span.replace") . css ({"visibility":      "visible"})
}

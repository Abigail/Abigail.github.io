$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 2)
    add_todo (() => unhide (2))

})



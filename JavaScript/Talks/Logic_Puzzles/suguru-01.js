$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 1)
    add_todo (() => reveal ())
})

function reveal () {
    $("span.solution") . css ({visibility: "visible"})
}

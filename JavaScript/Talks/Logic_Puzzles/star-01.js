$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 1)
    add_todo (() => reveal ())
})

let star = "&#x2735;"

function reveal () {
    $(".cell-0-3") . html (star)
    $(".cell-1-5") . html (star)
    $(".cell-2-1") . html (star)
    $(".cell-3-4") . html (star)
    $(".cell-4-2") . html (star)
    $(".cell-5-0") . html (star)
}

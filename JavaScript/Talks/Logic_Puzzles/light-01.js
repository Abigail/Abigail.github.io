$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 3)
    add_todo (() => reveal ())
})

let lamp = "<small>&#x1F4A1;</small>"

function reveal () {
    $(".cell-0-0") . html (lamp)
    $(".cell-0-6") . html (lamp)
    $(".cell-1-3") . html (lamp)
    $(".cell-2-2") . html (lamp)
    $(".cell-2-4") . html (lamp)
    $(".cell-3-3") . html (lamp)
    $(".cell-3-5") . html (lamp)
    $(".cell-4-0") . html (lamp)
    $(".cell-4-4") . html (lamp)
    $(".cell-5-2") . html (lamp)
    $(".cell-6-1") . html (lamp)
    $(".cell-6-3") . html (lamp)
}

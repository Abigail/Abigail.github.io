$(document) . ready (function () {
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 1)
    add_todo (() => reveal ())
})

function reveal () {
    $(".cell-0-0") . html ("4")
    $(".cell-0-1") . html ("2")
    $(".cell-0-2") . html ("1")
    $(".cell-0-3") . html ("3")
    $(".cell-0-4") . html ("2")

    $(".cell-1-0") . html ("1")
    $(".cell-1-1") . html ("3")
//  $(".cell-1-2") . html ("4")
    $(".cell-1-3") . html ("5")
    $(".cell-1-4") . html ("1")

    $(".cell-2-0") . html ("2")
    $(".cell-2-1") . html ("5")
    $(".cell-2-2") . html ("1")
    $(".cell-2-3") . html ("3")
    $(".cell-2-4") . html ("2")

    $(".cell-3-0") . html ("1")
    $(".cell-3-1") . html ("3")
    $(".cell-3-2") . html ("2")
    $(".cell-3-3") . html ("4")
    $(".cell-3-4") . html ("1")

//  $(".cell-4-0") . html ("4")
    $(".cell-4-1") . html ("5")
    $(".cell-4-2") . html ("1")
    $(".cell-4-3") . html ("3")
    $(".cell-4-4") . html ("2")
}

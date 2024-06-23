$(document) . ready (function () {
    $("li") . addClass ("hidden")
    reveal ()
    add_todo (() => reveal (), 4)
})

function reveal () {
    unhide ()
    setTimeout (() => {$("li:not(.hidden) code") . addClass ("wavy")}, 2000)
}

$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "suguru"}) . build ()
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 1)
    add_todo (() => puzzle . reveal ())
})

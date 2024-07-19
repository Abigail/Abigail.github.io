$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "light-up"}) . build ()
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 3)
    add_todo (() => puzzle . reveal ())
})

$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "binairo"})
        puzzle . build ()
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 3)
    add_todo (() => puzzle . reveal ())
})


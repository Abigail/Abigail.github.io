$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "binairo"}) . build ()
    add_todo (() => puzzle . reveal ({delay: 20}))
})


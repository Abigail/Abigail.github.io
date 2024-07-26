$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "binairo"}) . build ()
    add_todo (() => puzzle . playback ({delay: 100}))
})

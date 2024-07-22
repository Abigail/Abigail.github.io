$(document) . ready (function () {
    let puzzle = new LogicPuzzle ({id: "suguru"}) . build ()
    add_todo (() => puzzle . playback ({delay: 100}))
})

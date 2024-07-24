$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll ("%%WHITE%%", "&#x25CB;")
        text = text . replaceAll ("%%BLACK%%", "&#x25CF;")
    element . html (text)

    let puzzle = new LogicPuzzle ({id: "binairo"}) . build ()
    $("li") . addClass ("hidden")
    unhide ()
    add_todo (() => unhide (), 3)
    add_todo (() => puzzle . reveal ())
})


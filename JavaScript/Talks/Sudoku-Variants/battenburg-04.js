$(document) . ready (function () {
    $("code") . html (
        "<span class = 'subject'>22426284464866882</span>" +
        "<span class = 'focus'>0</span>" +
        "<span class = 'subject'>11315171933537395575977991;</span>" +
        "\n\n" +
        "<span class = 'pattern'>[0-9]*\\g{cell1}\\g{cell2}[0-9]*;</span>"
    )
    $(".focus")   . css ({visibility: "hidden"})
    $(".pattern") . css ({visibility: "hidden"})

    add_todo (() => $(".focus")   . css ({visibility: "visible"}))
    add_todo (() => $(".pattern") . css ({visibility: "visible"}))
})

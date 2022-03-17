$(document) . ready (function () {
    $("code") . html (
        "<span class = 'subject'>22426284464866882</span>" +
        "<span class = 'focus'>0</span>" +
        "<span class = 'subject'>11315171933537395575977991;</span>" +
        "\n\n" +
        "<span class = 'pattern'>[0-9]*\\g{cell1}\\g{cell2}[0-9]*;" +
        "\n\n\n\n</span>"
    )

    add_todo (() => {
        $(".focus") . addClass ("subject")
        $(".focus") . removeClass ("focus")
        $(".pattern") . html (
            "[0-9]*<span class = 'focus'>(?:\\g{cell1}\\g{cell2}|\n" +
            "         \\g{cell2}\\g{cell3}|\n" +
            "         \\g{cell3}\\g{cell4}|\n" +
            "         \\g{cell4}\\g{cell1})</span>[0-9]*;")
    })
})

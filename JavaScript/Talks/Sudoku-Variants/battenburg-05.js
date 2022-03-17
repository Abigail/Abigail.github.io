$(document) . ready (function () {
    let subject  = "21232527294143454749616365676981838587892" 
                 . replaceAll (/[2468]/g,  `<span class = 'even'>$&</span>`)
                 . replaceAll (/[13579]/g, `<span class = 'odd'>$&</span>`)
    let subject2 = subject . replaceAll (/[13579]/g, " ") + "\n" +
                   subject . replaceAll (/[2468]/g,  " ")
    let pattern = "[1-9]*\\g{cell1}\\g{cell2}[1-9]*"
    $("code") . html (
        "<span class = 'subject'>" + subject2 + "</span>" +
        "<span class = 'semi'>;</span>" +
        "\n\n" +
        "<span class = 'pattern'>" + pattern + ";</span>"
    )

    $(".odd")     . css ({color: "powderblue"})
    $(".even")    . css ({color: "rosybrown"})
    $(".pattern") . css ({visibility: "hidden"})
    $(".semi")    . css ({visibility: "hidden"})

    add_todo (() => {
        $(".subject") . html ("\n" + subject)
        console . log (subject)
        $(".odd")     . css ({color: "powderblue"})
        $(".even")    . css ({color: "rosybrown"})
    })
    add_todo (() => {
        $(".odd")     . css ({color:      "yellow"})
        $(".even")    . css ({color:      "yellow"})
        $(".semi")    . css ({color:      "yellow"})
        $(".semi")    . css ({visibility: "visible"})
        $(".pattern") . css ({visibility: "visible"})
    })
})

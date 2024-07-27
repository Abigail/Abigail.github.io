$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
                       . replaceAll (/^[01]+;/gm,
                                "<span class = 'subject'>$&</span>")
                       . replaceAll (/[(\\[]\S+/gm,
                                "<span class = 'pattern'>$&</span>")
                       . replaceAll ("R1", "RR")
                       . replaceAll ("C1", "CC")
                       . replaceAll ("0", "&#x25CB;")
                       . replaceAll ("1", "&#x25CF;")
                       . replaceAll ("RR", "R1")
                       . replaceAll ("CC", "C1")
    element . html (text)

    add_todo (() => optimize ())
})

function optimize () {
    let element = $(".content")
    let text = element . html ()
                       . replaceAll (/:/g, "<span class = 'focus'>&gt;</span>")
    element . html (text)
}

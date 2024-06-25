$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll ("%%STAR%%", "&#x2735;")
    element . html (text)

})


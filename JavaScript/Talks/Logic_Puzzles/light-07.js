$(document) . ready (function () {
    $("code") . addClass ("subject")
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll ("%%LAMP%%", "&#x1F4A1;")
    element . html (text)
})

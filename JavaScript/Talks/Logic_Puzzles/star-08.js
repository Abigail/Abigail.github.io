$(document) . ready (function () {
    $("code") . addClass ("subject")
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll ("%%STAR%%", "&#x2735;")
    element . html (text)
})

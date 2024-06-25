$(document) . ready (function () {
    $("code") . addClass ("pattern")
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll ("%%STAR%%", "&#x2735;")
    element . html (text)
})

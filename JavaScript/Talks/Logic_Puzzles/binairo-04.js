$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
                       . replaceAll ("%%WHITE%%", "&#x25CB;")
                       . replaceAll ("%%BLACK%%", "&#x25CF;")
    element . html (text)
})

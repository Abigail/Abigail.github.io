$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
                       . replaceAll ("0", "&#x25CB;")
                       . replaceAll ("1", "&#x25CF;")
    element . html (text)
})

$(document) . ready (function () {
    $("code") . addClass ("pattern")
    let element = $(".content")
    let text = element . html ()
                       . replaceAll ("%%WHITE%%", "&#x25CB;")
                       . replaceAll ("%%BLACK%%", "&#x25CF;")
                       . replace ("<pre>", "<p>")
                       . replace ("</pre>", "</p>")
    element . html (text)
})

$(document) . ready (function () {
    $("code") . addClass ("pattern")
    let element = $(".content")
    let text = element . html ()
        text = text . replace ("<pre>", "<p>")
        text = text . replace ("</pre>", "</p>")
        element . html (text)
})

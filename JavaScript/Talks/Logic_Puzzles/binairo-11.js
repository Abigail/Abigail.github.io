$(document) . ready (function () {
    $("code") . addClass ("subject")
    let element = $(".content")
    let text = element . html ()
        text = text . replace ("<pre>", "<p>")
        text = text . replace ("</pre>", "</p>")
})

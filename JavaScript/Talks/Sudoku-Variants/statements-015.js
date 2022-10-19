$(document) . ready (function () {
    let text = $("code") . html () . replaceAll (/\^/g, "\u21F3")
    $("code") . html (text)
})

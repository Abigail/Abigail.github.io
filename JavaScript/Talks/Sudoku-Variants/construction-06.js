function font_fiddle (selection) {
    let element  = document . querySelector (selection)

    let fontSize = element . clientHeight

    if (!element . innerHTML . length) {
        return;
    }

 // element . style . visibility = "hidden"
    element . style . fontSize = fontSize + 'px';
    while (element . scrollHeight > element . clientHeight && fontSize > 0) {
        element . style . fontSize  = -- fontSize + 'px';
    }
 // element . style . visibility = "visible"
}


$(document) . ready (function () {
    let element = $(".content")
    element . css ({visibility: "hidden"})
    let text = element . html ()
        text = text . replace ('"', '"' + "<span class = 'subject'>")
        text = text . replace ('"=~/', '</span>"=~/<span class = "pattern">')
        text = text . replace ("$/", "$</span>/")
    element . html (text)
    font_fiddle (".content")
    element . css ({visibility: "visible"})
})

$(window) . resize (() => {
    $(".content") . css ({visibility: "hidden"})
    font_fiddle (".content")
})

function font_fiddle (selection) {
    let element  = document . querySelector (selection)

    let fontSize = element . clientHeight

    if (!element . innerHTML . length) {
        return;
    }

    element . style . fontSize = fontSize + 'px';
    while (element . scrollHeight > element . clientHeight && fontSize > 0) {
        element . style . fontSize  = -- fontSize + 'px';
    }
}


$(document) . ready (function () {
    font_fiddle (".content")
})

$(window) . resize (() => {
    font_fiddle (".content")
})

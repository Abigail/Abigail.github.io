function font_fiddle (selection) {
    let element  = document . querySelector (selection)

    let fontSize = element . clientHeight

    if (!element . innerHTML . length) {
        return;
    }

    $(selection) . css ({visibility: "hidden"})

    element . style . fontSize = fontSize + 'px';
    while (element . scrollHeight > element . clientHeight && fontSize > 0) {
        element . style . fontSize  = -- fontSize + 'px';
    }

    $(selection) . css ({visibility: "visible"})
}

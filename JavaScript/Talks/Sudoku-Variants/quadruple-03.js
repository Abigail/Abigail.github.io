$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
        text = text . replaceAll (/\/(.*?;)\//g,
                                  "/" + "<span class = 'pattern'>$1</span>" +
                                  "/")
                    . replaceAll (/"(\d+;)"/g,
                                  '"' + "<span class = 'subject'>$1</span>" +
                                  '"')
    element . html (text)
 // font_fiddle (".content")
})

$(window) . resize (() => {
    font_fiddle (".content")
})

$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
        text = text . replace ('"', '"' + "<span class = 'subject'>")
        text = text . replace (';"', ';</span>"')
        text = text . replace ('/\\', '/<span class = "pattern">\\')
        text = text . replace (';/', ";</span>/")
    element . html (text)
})
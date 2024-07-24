$(document) . ready (function () {
    let element = $(".content")
    let text = element . html ()
                       . replaceAll ("%%WHITE%%", "&#x25CB;")
                       . replaceAll ("%%BLACK%%", "&#x25CF;")
                       . replaceAll (/((?:^|<code>)")/gm,
                                     "$1<span class = 'subject'>")
                       . replaceAll (/;"/g, ';</span>"')
                       . replaceAll (/(\s\/)/g, '$1<span class = "pattern">')
                       . replaceAll (/;\//g, ";</span>/")
    element . html (text)
})

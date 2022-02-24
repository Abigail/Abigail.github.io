$(document) . ready (function () {
    let element = $("code")
    let text = element . html ()
    let subject = text . replace (/\n=~\n.*/, "")
    let pattern = text . replace (/^.*\n=~\n/, "")
    console . log (pattern)
    //  text = '"' + "<span class = 'subject'>" + text;
    //  text = text . replace ("\n=~\n", '</span>"' + "\n=~\n/" +
    //                                    "<span class = 'pattern'>")
    //  text = text . replace ("$", "$</span>/")
    //  element . html (text)
    element . html ('"' + "<span class = 'subject'>" + subject + 
                         "</span>" + '"' + " =~ " +
                    "/<span class = 'pattern'>" + pattern +
                    "</span>/")
//  font_fiddle (".content")
})

// $(window) . resize (() => {
//     font_fiddle (".content")
// })

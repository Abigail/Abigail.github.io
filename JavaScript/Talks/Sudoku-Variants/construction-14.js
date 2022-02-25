$(document) . ready (function () {
    let element = $("code")
    let text    = element . html ()
    let subject = text . replace (/\n=~\n.*/,  "")
    let pattern = text . replace (/^.*\n=~\n/, "")
    //  text = '"' + "<span class = 'subject'>" + text;
    //  text = text . replace ("\n=~\n", '</span>"' + "\n=~\n/" +
    //                                    "<span class = 'pattern'>")
    //  text = text . replace ("$", "$</span>/")
    //  element . html (text)
    element . html ('"' + "<span class = 'subject'>" + subject + 
                         "</span>" + '"' + " =~ " +
                    "/<span class = 'pattern'>" + pattern +
                    "</span>/")

    add_todo (() => {scroll (element, subject, "subject")})
})

function scroll (element, content, class_name, offset = 0) {
    element . css ("font-size", "5vw")
    element . html ("<span class = '" + class_name + "'>" +
                     content . substring (offset, offset + 100) + 
                   "</span>")
    setTimeout (() => {scroll, content . substring (offset, offset + 200)
                       setTimeout (() => {scroll (element, content,
                                                  class_name, 1 + offset)}, 100)
                                                 }, 100)
    return
}



// $(window) . resize (() => {
//     font_fiddle (".content")
// })

$(document) . ready (function () {
    let subject = $(".subject")

    add_todo (() => {
        let html = subject . html ()
        html  = html . replace ("1", "<span class = 'f1 focus'>1</span>")
        html += "<span class = 'f1 focus'>1</span>"
        subject . html (html)
        setTimeout (() => {
            $(".f1") . removeClass ("focus")
        }, 2000)
    })

    add_todo (() => {
        let html = subject . html ()
        html = html . replace ("<span[^>]+>", "")
                    . replace ("</span>", "")
                    . replaceAll
                     (/([1-9])\1/g, "<span class = 'double focus'>$&</span>")
        subject . html (html)
    })

    add_todo (() => {
        let html = subject . html ()
        html = html . replaceAll (/([1-9])\1/g, "$1 ")
        subject . html (html)
        setTimeout (() => {
            let html = subject . html ()
            html = html . replaceAll (/([1-9]) /g, "$1")
            subject . html (html)
        }, 2000)
        setTimeout (() => {
            $(".double") . removeClass ("focus")
        }, 4000)
    })

    add_todo (() => {
        $(".pattern") . css ("visibility", "visible")
        setTimeout (() => {
            $(".subject") . html ($(".subject") . html () +
                                    "<span class = 'focus'>;</span>")
            $(".pattern") . html ($(".pattern") . html () +
                                    "<span class = 'focus'>;</span>")
        }, 2000)
        setTimeout (() => {
            $(".focus") . removeClass ("focus")
        }, 4000)
    })
})

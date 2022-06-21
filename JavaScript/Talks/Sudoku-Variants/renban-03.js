let pattern = "(?:[1-9][1-9])*\\g{cell1}\\g{cell2}[1-9]*;"

$(document) . ready (function () {
    let text = "<span class = 'subject'>";
    for (let r = 1; r <= 9; r ++) {
      for (let c = 1; c <= 9; c ++) {
          if (c > 1) {
              text = text + " "
          }
          text = text + `<span class = "pair-${r}${c}">${r}${c}</span>`
      }
      text = text + "\n"
    }
    text = text + "</span>";
    $("code") . html (text)

    add_todo (() => remove_duplicate ())
    add_todo (() => remove_too_wide  ())
    add_todo (() => squash           ())
    add_todo (() => display_pattern  ())
})


function remove_duplicate () {
    for (let r = 1; r <= 9; r ++) {
        $(`.pair-${r}${r}`) . addClass ("go-away")
        setTimeout (() => {$(`.pair-${r}${r}`) . addClass ("focus")}, r * 200)
    }
}


function remove_too_wide () {
    let count = 0
    for (let r = 1; r <= 9; r ++) {
        for (let c = 1; c <= 9; c ++) {
            if (Math . abs (r - c) >= 4) {
                $(`.pair-${r}${c}`) . addClass ("go-away")
                count ++
                setTimeout (() => {$(`.pair-${r}${c}`) . addClass ("focus")},
                            count * 100)
            }
        }
    }
}



function squash () {
    $(".go-away") .html ("  ")
    setTimeout (() => squash2 (), 3000)
}



function squash2 () {
    let text = $(".subject") . html ()
    text = text . replaceAll (" ", "")
    $(".subject") . html (text)
    setTimeout (() => {squash3 ()}, 3000)
}



function squash3 () {
    let text = $(".subject") . html ()
    text = text . replaceAll (/<[^>]*>/g, "")
    text = text . replaceAll ("\n", "")
    text = text . replaceAll (/.{38}/g, "$&\n")
    text = text + "<span class = 'focus'>;</span>"
    $(".subject") . html (text)
    let code_text = $("code") . html ()
    code_text = code_text +
                "\n\n\n<span class = 'pattern'>" + pattern + "</span>\n"
    $("code") . html (code_text)
    setTimeout (() => {$(".focus") . removeClass ("focus")}, 2000)
}


function display_pattern () {
    $(".pattern") . css ({visibility: "visible"})
}

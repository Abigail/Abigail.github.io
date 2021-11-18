//
// Replace certain elements with a long division using MathJax
//

window . addEventListener ("load", all_long_division)

//
// Helper function to add spacing. 
//
function spacing (width) {
    space = "\\:\\text{ }";
    for (i = 0; i < width; i ++) {
        space += "\\text{ }\\text{ }\\!\\,"  // Space tweaking...
    }
    return space
}

//
// Perform long division. The dividend may exceed the maximum 
// integer value. Replace the text of the element with the
// long division.
//
function long_division (element) {
    dividend = $(element) . attr ("data-dividend")
    divisor  = $(element) . attr ("data-divisor")

    digits   = dividend . split ("")

    text     = `${divisor} & \\overline{\\big)${dividend}} \\\\`

    num      = +digits [0]
    quotient = ""
    digits . forEach ((digit, i) => {
        prod      = num - (num % divisor)
        rest      = num % divisor
        quotient += Math . floor (num / divisor) . toString ()
        pad       = ""
        if (i == digits . length - 1) {
            next   = rest
            offset = -1
        }
        else {
            next   = 10 * rest + +digits [i + 1]
            offset = 0
            if (rest == 0) {
                pad = "0"
                offset = -1
            }
        }
        space1 = spacing (i + 1 - prod . toString () . length)
        space2 = spacing (i + 2 - next . toString () . length + offset)
        text  += `&${space1}\\underline{${prod}} \\\\`  +
                 `&${space2}${pad}${next} \\\\`
        num    = next
    })

    text = `\\[`                                        +
           `\\begin{align*}`                            +
           ` & \\text{ }\\text{ }${quotient} \\\\`      +
           text                                         +
           `\\end{align*} \\]`

    $(element) . text (text)
}

//
// Perform long division to all elements of the class "long_division".
// Typeset them using MathJax afterwards.
//
function all_long_division () {
    $(".long_division") . each ((i, e) => {long_division (e)})
    MathJax . typeset ()
}

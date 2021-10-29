function gcd (a, b) {
    if (b >  a) {return gcd (b, a)}
    if (b == 0) {return a}
                 return gcd (b, a % b)
}

function power_of_2 (number, n) {
    if (number <  1) {return -1}
    if (number == 1) {return  0}
    if (number %  n) {return -1}
    let r = power_of_2 (number / 2)
    return r < 0 ? r : 1 + r
}


function two_friendly () {
    let first  = +$("input#first")  . val ()
    let second = +$("input#second") . val ()
    let text     =   ""
    if (first > 0 && second > 0) {
        let r = gcd (first, second)
        text = `The greatest common divisor of ${first} and ${second} ` +
               `is ${r}. `
        if (r == 1) {
            text = text + `This means ${first} and ${second} are ` +
                          `relative prime. Hence, ${first} and ${second} ` +
                          "are not two-friendly."
        }
        else {
            let p = power_of_2 (r)
            if (p < 0) {
                text = text + `${r} is not a power of 2, so ${first} and ` +
                              `${second} are not two-friendly.`
            }
            else {
                text = text + `\\\(${r} = 2^${p}\\), so ${first} and ` +
                              `${second} are two-friendly.`
            }
        }
    }
    if (first < 0 || second < 0) {
        text = "Please use positive integers only."
    }
    $("span#result") . text (text)
    MathJax . typeset ()
}

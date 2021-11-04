function reverse (num) {
    let rev = 0n
    while (num > 0n) {
        rev *= 10n
        rev += num % 10n
        num /= 10n
    }
    return (rev)
}

function ly (num, i, max_iter, cut_off) {
    if (num >= cut_off)       {return [1, num, i]}
    if (i   >= max_iter)      {return [2, num, i]}
    if (num == reverse (num)) {return [0, num, i]}
    return ly (num + reverse (num), i + 1, max_iter, cut_off)
}

function lychrel () {
    let num      = BigInt ($("input#num")      . val ())
    let max_iter = BigInt ($("input#max_iter") . val ())
    let cut_off  = BigInt ($("input#cut_off")  . val ())
    let [result, max, iterations] = ly (num, 0, max_iter, cut_off)

    max        = max        . toLocaleString ('en-US')
    max_iter   = max_iter   . toLocaleString ('en-US')
    iterations = iterations . toLocaleString ('en-US')
    cut_off    = cut_off    . toLocaleString ('en-US')

    let text = ""
    if (result == 0) {
        text += `We reached the palindrome ${max} after ` +
                `${iterations} iterations.`
    }
    if (result == 1) {
        text += `We reached ${max} after ${iterations} iterations, ` +
                `which exceeds the cut-off of ${cut_off}.`
    }
    if (result == 2) {
        text += `We reached ${max} after ${iterations} iterations, ` +
                `which is the set limit.`
    }

    $("span#result") . text (text)
}


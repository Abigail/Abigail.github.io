let BASE = 10

function is_long (number) {
    let seen = Array (number) . fill (0)
    let rest = 0
    for (let i = 2; i <= number; i ++) {
        rest = (rest * BASE + BASE - 1) % number
        if (seen [rest] == 1) {
            return 0
        }
        seen [rest] = 1
    }
    return 1
}


function long_prime () {
    let result = ""
    let number = +$("input#long_prime_input") . val ()
    if (number > 0 && Math . floor (number) == number) {
        if (number > 1 && BASE % number != 0 && is_long (number)) {
            result = `${number} is a long prime.`
        }
        else {
            result = `${number} is not a long prime.`
        }
    }

    $("span#result") . text (result)
}


//
// Clear starting from the "Solutions" header
//
window . addEventListener ("load", function () {
    $("h2") . each ((i, e) => {
        if ($(e) . text () == "Solution") {
            $(e) . css  ("clear", "both")
        }
    })
})

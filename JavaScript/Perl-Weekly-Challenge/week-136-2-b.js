let cache = {}
let call_count          = 0
let call_no_cache_count = 0

function count (target, this_fib, prev_fib) {
    if (!this_fib) {this_fib = 1}
    if (!prev_fib) {prev_fib = 1}
    let key = target + ";" + this_fib
    call_count ++
    if (!(key in cache)) {
        cache [key] = target <  this_fib ? 0
                    : target == this_fib ? 1
                    : count (target - this_fib, this_fib + prev_fib, this_fib) +
                      count (target,            this_fib + prev_fib, this_fib)
    }
    return cache [key]
}
function no_cache_count (target, this_fib, prev_fib) {
    if (!this_fib) {this_fib = 1}
    if (!prev_fib) {prev_fib = 1}
    call_no_cache_count ++
    return target <  this_fib ? 0
         : target == this_fib ? 1
         : no_cache_count (target - this_fib, this_fib + prev_fib, this_fib) +
           no_cache_count (target,            this_fib + prev_fib, this_fib)
}


function handle_count () {
    let target   = +$("input#input")    . val ()
    let uncached =  $("input#no_cache") . is (":checked")
    let text     =   ""
    if (target > 0) {
        cache = {}
        call_count = 0
        let result = count (target)
        text = `${target} can be written as a sum of distinct Fibonacci ` +
               `numbers in ${result} different ways. `                    +
               `To calculate this, we made ${call_count} recursive calls`

        if (uncached) {
            call_no_cache_count = 0
            no_cache_count (target)
            text = text + ` using caching; without caching, we made ` +
                          `${call_no_cache_count} recursive calls`
        }
    }
    else {
        text = "Please use positive integers only"
    }
    $("span#output") . text (text + ".")
}

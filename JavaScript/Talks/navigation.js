//
// Handle navigation stuff. In particular, keypresses
//

//
// Find the index of the current page.
//
let todo = []
let urls = {}

function add_todo (f, amount = 1) {
    for (let i = 1; i <= amount; i ++) {
        todo . push (f)
    }
}

function handle_space () {
    //
    // Execute the first queued action, if any
    //
    if (todo . length) {
        todo . shift () ()
        return (1)
    }
    if (unhide ()) {
        return (1)
    }

    return (0)
}

function navigation (pagename, pages) {
    let index = -1

    for (let i = 0; i < pages . length; i ++) {
        if (pages [i] [0] . toLowerCase () == pagename . toLowerCase ()) {
            index = i
        }
    }

    let up = "../../"

    if (index > 0) {
        $("a.prev") . attr ("href", up + pages [index - 1] [0])
        $("a.prev") . attr ("title",     pages [index - 1] [1])
        urls ["p"] =  up + pages [index - 1] [0]
    }
    else {
        $("p.prev") . css ("visibility", "hidden")
    }

    if (index >= 0 && index < pages . length - 1) {
        $("a.next") . attr ("href", up + pages [index + 1] [0])
        $("a.next") . attr ("title",     pages [index + 1] [1])
        urls ["n"] =  up + pages [index + 1] [0]
    }
    else {
        $("p.next") . css ("visibility", "hidden")
    }
}



//
// Handle a keypress
//
function do_keypress (event) {
    let char = String . fromCharCode (event . which);
    let href;

    //
    // Space is the default action. Do whatever is 'next'. 
    // If nothing is queued, assume it's the same as 'n'.
    //
    if (char == ' ') {
        if (handle_space ()) {
            return;
        }
        char = 'n';
    }

    //
    // Navigate to the next/previous page (if exist), 
    //
    if (urls [char]) {
        location . href = urls [char]
    }
}


//
// Unhide 1 (or more) elements 
//
function unhide (amount = 1) {
    if ($(".hidden") . length == 0) {
        return (0);
    }
    while (amount -- > 0) {
        $(".hidden") . first () . removeClass ("hidden")
    }
    return (1);
}

$(document) . ready (function () {
    let pagename = document . location . href
        pagename = pagename . substr (pagename . lastIndexOf ('/HTML/') + 6)
    navigation (pagename, window . pages)
})


$(document) . on ("keypress", function (event) {
    do_keypress (event);
});

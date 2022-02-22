$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    $("li") . addClass ("hidden")

    sudoku . draw ()

    add_todo (() => {
        unhide ()
        $("#R5C6") . css ({fill: "red"})
        sudoku . draw_set ({set:   {R5C6: 3},
                            class: "clue"})
    })

    add_todo (() => {
        unhide ()
        $("#R5C1, #R5C2, #R5C3, #R5C4") . addClass ("highlight")
        $("#R5C5, #R5C7, #R5C8, #R5C9") . addClass ("highlight")
        sudoku . draw_set ({set:  {R5C1: "!3", R5C2: "!3", R5C3: "!3",
                                   R5C4: "!3", R5C5: "!3",
                                   R5C7: "!3", R5C8: "!3", R5C9: "!3"},
                            class: "clue highlight",
                            delay:  150})
    })


    add_todo (() => {
        unhide ()
        $("#R1C6, #R2C6, #R3C6, #R4C6") . addClass ("highlight")
        $("#R6C6, #R7C6, #R8C6, #R9C6") . addClass ("highlight")
        sudoku . draw_set ({set:  {R1C6: "!3", R2C6: "!3", R3C6: "!3",
                                   R4C6: "!3", R6C6: "!3",
                                   R7C6: "!3", R8C6: "!3", R9C6: "!3"},
                            class: "clue highlight",
                            delay:  150})
    })


    add_todo (() => {
        unhide ()
        $("#R4C4, #R4C5, #R6C4, #R6C5") . addClass ("highlight")
        sudoku . draw_set ({set:  {R4C4: "!3", R4C5: "!3",
                                   R6C4: "!3", R6C5: "!3"},
                            class: "clue highlight",
                            delay:  150})
    })

})


$(document) . ready (function () {
    let sudoku = new Sudoku ({})

    sudoku . draw ()

    setTimeout (() => {sudoku . highlight_house ({selector: ".R5"})}, 2000)
    setTimeout (() => {sudoku . highlight_house ({selector: ".C6"})}, 4000)
    setTimeout (() => {sudoku . highlight_house ({selector: ".B7"})}, 6000)

    reveal (sudoku)

})

function reveal (sudoku) {
    // Row
    setTimeout (() => {
        sudoku . draw_set ({set:  {R5C1: 4, R5C2: 2, R5C3: 6,
                                   R5C4: 8, R5C5: 5, R5C6: 3,
                                   R5C7: 7, R5C8: 9, R5C9: 1},
                            class: "clue",
                            delay:  100})}, 8000)

    // Column
    setTimeout (() => {
        sudoku . draw_set ({set:  {R1C6: 8, R2C6: 5, R3C6: 2,
                                   R4C6: 1, R5C6: 3, R6C6: 4,
                                   R7C6: 7, R8C6: 9, R9C6: 6},
                            class: "clue",
                            delay:  100})}, 10000)

    // Box
    setTimeout (() => {
        sudoku . draw_set ({set:  {R7C1: 9, R7C2: 6, R7C3: 1,
                                   R8C1: 2, R8C2: 8, R8C3: 7,
                                   R9C1: 3, R9C2: 4, R9C3: 5},
                            class: "clue",
                            delay:  100})}, 12000)
}


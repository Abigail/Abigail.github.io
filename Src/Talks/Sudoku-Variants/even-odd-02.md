# Variant: Even/Odd

<!-- %% svg-grid: code -->
<!-- %% class: focus \b[eo]\b -->

~~~~
my $s = Regexp::Sudoku:: -> new -> init
        -> set_clues (<<~ '--')
           . . o  . . 3  . . 9
           . o .  o . .  . 8 .
           o . 1  . o .  7 . .

           . o .  o . 6  . . .
           9 . o  . 5 .  e . 8
           . . .  4 . e  . e .

           . . 3  . e .  6 . e
           . 2 .  . . e  . e .
           1 . .  7 . .  e . .
           --
~~~~

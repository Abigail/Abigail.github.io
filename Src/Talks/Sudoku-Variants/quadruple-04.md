# Variant: Quadruple

<!-- %% svg-grid: code              -->
<!-- %% class: focus set_quadruples -->

~~~~
my $s = Regexp::Sudoku:: -> new -> init
        -> set_quadruples (R1C6 => [2],
                           R1C8 => [1, 2, 8, 9],
                           R2C3 => [3, 4],
                           R2C4 => [4, 5, 6],
                           R2C8 => [4, 5, 6],
                           R3C8 => [6, 7, 8],
                           ...)
~~~~

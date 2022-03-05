# Variant: 4 x 4

<!-- %% svg-grid: none -->
<!-- %% class: focus size =&gt; 4 -->

~~~~
my $s = Regexp::Sudoku:: -> new
        -> init      (size => 4)
        -> set_clues (<<~ '--')
           . .  1 .
           . 2  . .

           3 .  . 1
           . .  4 .
           --
~~~~

# Variant: NRC

<!-- %% svg-grid: none -->
<!-- %% focus: houses =&gt; \$NRC -->

~~~~
use Regexp::Sudoku::Constants qw [:All];
my $s = Regexp::Sudoku:: -> new
        -> init (houses => $NRC,
                 clues  => <<~ '--')
           ...
           --
~~~~

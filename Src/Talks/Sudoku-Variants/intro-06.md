# Regexp::Sudoku

<!-- %% svg-grid: none -->

~~~~
my $string  = $s -> string;
my $pattern = $s -> pattern;

$string =~ /$pattern/;

foreach my $r (1 .. 9) {
    foreach my $c (1 .. 9) {
        print $+ {"R$rC$c"}, " ";
    }
    print "\n";
}
~~~~

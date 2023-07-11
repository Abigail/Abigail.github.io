# Regexp::N_Queens

<!-- %% svg-grid: code -->

~~~~
if ($subject =~ $pattern) {
    foreach my $x (1 .. $N) {
        foreach my $y (1 .. $N) {
            print $+ {"Q_${x}_${y}"} ? "Q" : ".";
        }
        print "\n";
    }
}
else {
    say "No solution"
}
~~~~

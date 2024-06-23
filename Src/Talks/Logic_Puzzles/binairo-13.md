# Binairo: Putting it all together

<!-- %% svg-grid: code -->

~~~~
"subject" =~ /pattern/;
foreach my $r (0 .. 7) {
    foreach my $c (0 .. 5) {
        print $+ {"R${r}C${c}"}
    }
    print "\n";
}
~~~~

# Binairo: Putting it all together

<!-- %% svg-grid: code -->

~~~~
"subject" =~ /pattern/;
foreach my $r (1 .. 6) {
    foreach my $c (1 .. 6) {
        print $+ {"R${r}C${c}"}
    }
    print "\n";
}
~~~~

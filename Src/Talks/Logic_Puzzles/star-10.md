# Star Battle: Putting it all together

<!-- %% svg-grid: code -->

~~~~
"subject" =~ /pattern/;
foreach my $r (0 .. 6) {
    foreach my $c (0 .. 6) {
        print $+ {"R${r}C${c}"} // "."
    }
    print "\n";
}
~~~~

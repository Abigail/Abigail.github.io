# Print the result

<!-- %% svg-grid: code -->

<pre><code>
if ($subject =~ $pattern) {
    foreach my $x (1 .. 8) {
        foreach my $y (1 .. 8) {
            print $+ {"Q_${x}_${y}"} ? "%%WQ%%" : ".";
        }
        print "\n";
    }
}
else {
    say "No solution"
}
</code></pre>

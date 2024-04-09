# Count the number solutions

<!-- %% svg-grid: code -->

~~~~
$count = 0;
$subject =~ /$pattern(?{$count ++})(*FAIL)/;
say "There are $count solutions";
~~~~

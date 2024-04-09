# Regexp::N_Queens

<!-- %% svg-grid: code -->

~~~~
my $s =  Regexp::N_Queens::
      -> new
      -> init (size => 8);

my $subject = $s -> subject;
my $pattern = $s -> pattern;

$subject =~ /$pattern/;
~~~~

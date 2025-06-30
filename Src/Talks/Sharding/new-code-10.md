# AUTOLOAD

<!-- %% svg-grid: code -->

~~~~
sub AUTOLOAD {
    our $AUTOLOAD;
    my $method = $AUTOLOAD;
    log_error (...);
    $method =~ s/db_inventory/db_inventory_classic/;
    goto &$method;
}
~~~~

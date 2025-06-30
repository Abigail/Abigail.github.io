# Database Access

<!-- %% svg-grid: code -->

~~~~
use db_inventory;

my $result = db_inventory:: ->
                search_where (...);

db_inventory:: -> fetch_hash (\%hash, SQL);

my $dbh_ro = db_inventory:: -> db_Main_ro;
my $dbh_rw = db_inventory:: -> db_Main_rw;
~~~~

# Database Access

<!-- %% svg-grid: code -->

~~~~
use db_inventory;

my @room_ids = ...;
my $dbh = db_inventory:: -> db_Main_ro;

local $" = ", ";
my $sql = "... WHERE room_id IN (@{[("?") x @room_ids]})";
my $r = $dbh -> selectall_arrayref ($sql, undef, @room_ids);

~~~~

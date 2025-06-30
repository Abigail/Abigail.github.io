# Database Access

<!-- %% svg-grid: code -->

~~~~
use db_inventory;

my $dbh = db_inventory:: -> shard (...)
                         -> db_Main_ro;

my $r = $dbh -> selectall_arrayref (<<'--');
    SELECT *
      FROM table
     WHERE room_id = ?
--
~~~~

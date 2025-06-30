# Database Access

<!-- %% svg-grid: code -->

~~~~
use db_inventory;

my @in_room_ids = ...;
my $ids_by_shard = db_inventory:: ->
                      ids_by_shard (room_ids => \@in_room_ids);
foreach my $shard (keys %$ids_by_shard) {
    my @sh_room_ids = @{$$ids_by_shard {$shard}};
    my $dbh = $shard -> db_Main_ro;

    local $" = ", ";
    my $sql = "... WHERE room_id IN (@{[("?") x @sh_room_ids]})";
    my $r = $dbh -> selectall_arrayref ($sql, undef, @sh_room_ids);
}

~~~~

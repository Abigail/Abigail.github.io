# shard ()

<!-- %% svg-grid: none -->

* Add property to hotel: `is_sharded`

* If this property is false, `shard ()` returns `"db_inventory_classic"`

* Else, `shard ()` returns `"db_inventory_0" . (1 + hotel_id % 4)`

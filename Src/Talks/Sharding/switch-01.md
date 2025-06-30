# Splitting off

<!-- %% svg-grid: none -->
<!-- %% li-hides: 5    -->

* Lock out all users on `master-01` (aka `master-05`)
* Break replication between `master-01` and intermediate master
* Point `master-05` to new master
* Re-enable the `master-01` users on `master-01`
* Enable the `master-05` users on `master-05`
* Running time: ca 30 seconds

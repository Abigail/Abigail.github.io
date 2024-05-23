# Pig General

<div class = "movement">
. . . . . . . . . . .
. L . . . . . . . L .
. . * . . . . . * . .
. . . * . . . * . . .
. . . . * . * . . . .
. . . . . S . . . . .
. . . . . * . . . . .
. . . . . L . . . . .
. . . . . . . . . . .
Shogi: 1
</div>

The **Pig General** slides up to four unoccupied squares
diagonally forward (like a limited forward %%BISHOP%%),
or slides up to two unoccupied squares orthogonally
backward (like a very limited backward %%ROOK%%).

|====
%%PIECE_INFO%%
  **Pig General**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Pig General** gets trapped quickly, after
36 steps.

#### Diamond

On the Diamond Spiral, the **Pig General** uses an eight step
loop to move four squares forward, for an escape velocity of %%HALF%%.
Only squares in two files will be visited.

### Wedge

#### Folded

On the Folded Wedge, the **Pig General** uses a six step loop to
move two squares diagonally forward, giving it an escape velocity
of %%SQRT_2_OVER_3%%. The three most squares on each row will be
visited.

#### Flat

On the Flat Wedge, the **Pig General** escapes with a velocity
of %%SQRT_2%% by visiting the right most square on each row.

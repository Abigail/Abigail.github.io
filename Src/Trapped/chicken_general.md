# Chicken General

<div class = "movement">
. . . . .
. . L . .
. . * . .
. . * . .
. . * . .
. . S . .
. * . * .
. . . . .
Shogi: 1
</div>

The **Chicken General** either slides up to four unoccupied
squares orthogonally forward (like a limited forward %%ROOK%%),
or steps one square diagonally backward
(like a backward %%FERZ%%).

|====
%%PIECE_INFO%%
  **Chicken General**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

The **Chicken General** gets trapped quickly; it's trapped after 44 steps.

#### Diamond

On the Diamond Spiral, the **Chicken General** uses an eight step loop
to move four squares downward, giving it an escape velocity of %%HALF%%.
No more than two files will be visited.

### Wedge

#### Folded

On the Folded Wedge, the **Chicken General** uses a three step loop
to move one square diagonally forward, giving it an escape
velocity of %%SQRT_2_OVER_3%%.

#### Flat

On the Flat Wedge, the **Chicken General** uses a three step loop
to move one square diagonally forward, giving it an escape
velocity of %%SQRT_2_OVER_3%%. Its movement is a mirror image
of how the piece moves on the Folded Wedge.

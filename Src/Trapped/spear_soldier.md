# Spear Soldier

<div class = "movement">
. . A . .
. . * . .
. . * . .
. . * . .
. * S * .
. . * . .
. . . . .
Shogi: 1
</div>

The **Spear Soldier** either steps one square orthogonally sideways
or backwards (like a horizontal-backward %%WAZIR%%), or slides an
unlimited amount of unoccupied squares orthogonally forward (like
a forward %%ROOK%%).

|====
%%PIECE_INFO%%
  **Spear Soldier**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Spear Soldier** moves like the %%WAZIR%%,
hence, it visits all squares in order.

#### Diamond

On the Diamond Spiral, the **Spear Soldier** follows a square, clockwise
spiral, skipping half the squares on the lower left quadrant. As such
it visits \(87.5\%) of the squares.

### Wedge

#### Folded

On the Folded Wedge the **Spear Soldier** gets trapped after 6 steps,
like the %%WAZIR%%.

#### Flat

On the Flat Wedge, the **Spear Soldier** uses a two step loop to move
one square diagonally forward, giving it an escape velocity of
of %%SQRT_2_OVER_2%%. The two right most square of every row are
visited.

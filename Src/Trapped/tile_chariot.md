# Tile Chariot

<div class = "movement">
. . A . .
. . * . .
. . * . .
. . * * .
. . S . .
. * * . .
. . * . .
. . * . .
. . A . .
Shogi: 1
</div>

The **Tile Chariot** either steps one square diagonally forward to
the right, steps one square diagonally backward to the left (like
a limited %%FERZ%%), or slides an unlimited amount of unoccupied squares
orthogonally forward or backward (like a vertical %%ROOK%%).

This mirrors how the [*Wood Chariot*](wood_chariot.html) moves.

|====
%%PIECE_INFO%%
  **Tile Chariot**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Tile Chariot** visits all the squares
in the two wedged forward and backward of the starting square, alternating
adding a row to them. \(50\%\) of the board will be filled that way.

This is similar to the [*Side Wolf*](side_wolf.html), which fills
wedges right and backward from the starting square.

#### Diamond

On the Diamond Spiral, the **Tile Chariot** follows a skewed anti-clockwise
spiral, visiting all squares on the board.

### Wedge

#### Folded

On the Folded Wedge the **Tile Chariot** uses an four step loop to
move two squares diagonally forward. Its escape velocity is %%SQRT_2_OVER_2%%.

#### Flat

On the Flat Wedge, the **Tile Chariot** visits every rightmost square
on every row, giving it an escape velocity of %%SQRT_2%%.

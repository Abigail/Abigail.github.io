# Side Wolf

<div class = "movement">
. . . . . . . . .
. . . * . . . . .
A * * * S * * * A
. . . . . * . . .
. . . . . . . . .
Shogi: 1
</div>

The **Side Wolf** either slides an unlimited amount of unoccupied
squares to the right of left (like a sideways %%ROOK%%),
or steps one square diagonally forward to the left, or diagonally
backward to the right (like a limited %%FERZ%%).

Compare with the [*Side Ox*](side_ox.html) whose movements
are mirrored, and the [*Tile Chariot*](tile_chariot.html) which
moves in the same way, but rotated by 90&deg;.

|====
%%PIECE_INFO%%
  **Side Wolf**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Side Wolf** visits all the squares
in the two wedged right and left of the starting square, alternating
adding a column to them. \(50\%\) of the board will be filled that way.

This is similar to the [*Tile Chariot*](tile_chariot.html), which fills
wedges forward and backward from the starting square.

#### Diamond

On the Diamond Spiral, the **Side Wolf** follows a skewed anti-clockwise
spiral, visiting all squares on the board.

### Wedge

#### Folded

On the Folded Wedge, the **Side Wolf** will visit all the squares
on the board.

#### Flat

On the Flat Wedge, the **Side Wolf** visits all the squares on
the right half of each row, plus the square directly left of
the middle. This results in visiting \(50\%\) of the squares.

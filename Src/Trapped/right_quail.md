# Right Quail

<div class = "movement">
. . . . A . .
. . . . * . .
. . . . * . .
. . . . * . .
. . . . S . .
. . . * . * .
. . * . . . .
. * . . . . .
A . . . . . .
Shogi: 1
</div>

The **Right Quail** either slides an unlimited amount of unoccupied squares 
orthogonally forward (like a forward %%ROOK%%), or slides an unlimited
amount of unoccupied squares diagonally left-backward (like a left-backward
%%BISHOP%%), or steps one square right-backward (like a right-backward
%%FERZ%%).

This mirrors how the [*Left Quail*](left_quail.html) moves.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TORI_SHOGI%%
& {cs = 1}  **Right Quail** & &#x9d89;
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Right Quail** visits 25% of the squares on the
board. If we draw two diagonals through the origin, dividing the
board into four quadrants, the **Right Quail** visits all the 
squares in the left quadrant. This is different from the **Left Quail**,
which gets trapped after 146 steps.

#### Diamond

On the Diamond Spiral, the **Right Quail** uses an eight step loop, bouncing
between two files, to move four squares backward. This gives it an
escape velocity of \(\frac{1}{2}\). This is exactly how the
[*Left Quail*](left_quail.html) moves on the Diamond Spiral.

### Wedge

#### Folded

On the Folded Wedge, the **Right Quail** will only visit the three
left most squares of each row (except the bottom two), escaping
to infinity by sticking to the left side of the board. This is
exactly the same pattern the [*Left Quail*](left_quail.html) leaves
behind. The escape velocity is \(\frac{\sqrt{2}}{3}\).

#### Flat

The movement of the **Right Quail** on the Flat Wedge is a mirror
image of the movement on the Folded Wedge: the three right most
squares of each row are visited while the **Left Quail** escapes
to infinity. This is exactly the same pattern the
[*Left Quail*](left_quail.html) leaves behind.
The escape velocity is \(\frac{\sqrt{2}}{3}\).

# Left Quail

<div class = "movement">
. . A . . . .
. . * . . . .
. . * . . . .
. . * . . . .
. . S . . . .
. * . * . . .
. . . . * . .
. . . . . * .
. . . . . . A
Shogi: 1
</div>

The **Left Quail** either slides an unlimited amount of unoccupied squares 
orthogonally forward (like a forward %%ROOK%%), or slides an unlimited
amount of unoccupied squares diagonally right-backward (like a 
right-backward %%BISHOP%%), or steps one square left-backward
(like a left-backward %%FERZ%%).

This piece is a mirror image of the [*Right Quail*](right_quail.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TORI_SHOGI%%
& {cs = 1}  **Left Quail** & &#x9d89;
&           \\
====|

### Spiral

#### Square

Initially, on the Square Spiral, the **Left Quail** gives the impression its
movement pattern is regular, but then it gets trapped after only 146 steps!

#### Diamond

On the Diamond Spiral, the **Left Quail** uses an eight step loop, bouncing
between two files, to move four squares backward. This gives it an
escape velocity of \(\frac{1}{2}\). This is exactly how the
[*Right Quail*](right_quail.html) moves on the Diamond Spiral.

### Wedge

#### Folded

On the Folded Wedge, the **Left Quail** will only visit the three
left most squares of each row (except the bottom two), escaping
to infinity by sticking to the left side of the board. This is
exactly the same pattern the [*Right Quail*](right_quail.html) leaves
behind. The escape velocity is \(\frac{\sqrt{2}}{3}\).

#### Flat

The movement of the **Left Quail** on the Flat Wedge is a mirror
image of the movement on the Folded Wedge: the three right most
squares of each row are visited while the %%PIECE%% escapes
to infinity. This is exactly the same pattern the
[*Right Quail*](right_quail.html) leaves behind.
The escape velocity is \(\frac{\sqrt{2}}{3}\).

# Wagon

<div class = "movement">
. . . . A . . . .
. . . . * . . . .
. . . . * . . . .
. . . . u . . . .
A * * u S u * * A
. . . . u . . . .
. . . . * . . . .
. . . . * . . . .
. . . . A . . . .
</div>

The **Wagon** slides an unlimited amout of unoccupied squares
in any orthogonal direction, but it may not land on a square
next to the starting square (but the square must be unoccupied
if the **Wagon** wants to move in that direction). That is, the
**Wagon** moves like the %%ROOK%%, but may not end its move on
the square next to its starting square.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2}  **Wagon**
&           %%PROMOTES_TO%% [*Spider*](spider.html) \\
====|

### Spiral

#### Square

On the Square Spiral, the **Wagon** moves in the same way as
the [*Dabbaba*](dabbaba.html), visiting only those
squares which are both on even rows and even files.
This follows the Spiral, blown up by a factor of two,
visiting 25% of the board.

#### Diamond

On the Diamond Spiral, the **Wagon** gets trapped remarkably
quickly, after no more than 32 steps. 

### Wedge

On both the Folded Wedge and Flat Wedge, on each even row the **Wagon**
visits the third square from the right, and the right most square,
before jumping up two rows, escaping to infinity. This two step loop
brings the piece to a square which is two forward and two to the right,
giving in an escape velocity of \(\sqrt{2}\).

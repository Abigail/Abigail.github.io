# Hunter

<div class = "movement">
. . . . A . . . .
. . . . * . . . .
. . . . * . . . .
. . . . * . . . .
. . . . S . . . .
. . . * . * . . .
. . * . . . * . .
. * . . . . . * .
A . . . . . . . A
</div>

The **Hunter** either slides an unlimited amount of unoccupied squares
orthogonally forward (like a forward %%ROOK%%) or an unlimited
amount of unoccupied squares diagonally backward (like the
backward %%BISHOP%%).

This mirrors the movements of the [*Falcon*](falcon.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%WHALE_SHOGI%%
& {cs = 2}  **Grey Whale**
&           \\
  {th = 1}  %%FALCON_HUNTER%%
& {cs = 2}  **Hunter**
&           \\
====|

### Spiral

#### Square

On the Spiral, the **Hunter** gets trapped surprisingly fast, after 146 steps.
Compare this with the [*Falcon*](falcon.html) which will visit \(25\%\)
of the squares on the board.

#### Diamond

On the Diamond Spiral, the **Hunter** uses an eight step loop to move 
four squares down, giving it an escape velocity of \(\frac{1}{2}\).
It moves mirrorred as the [*Falcon*](falcon.html) moves.

### Wedge

#### Folded

On the Folded Wedge, the **Hunter** visits the three left most
squares of each row, moving one square to the upper left every
three steps. This gives it an escape velocity of 
\(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the **Hunter** visits the three right most
squares of each row, moving one square to the upper right every
three steps. This gives it an escape velocity of 
\(\frac{\sqrt{2}}{3}\).

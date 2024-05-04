# Gryphon

<div class = "movement">
A . . . . . . . A
. * . . . . . * .
. . * . . . * . .
. . . * * * . . .
. . . . S . . . .
. . . * . * . . .
. . * . . . * . .
. * . . . . . * .
A . . . . . . . A
</div>

The **Gryphon** either slides over an unlimited number of unoccupied
squares diagonally (like the %%BISHOP%%), or one step forward
(like the %%PAWN%%).

|====
%%PIECE_HEADERS%%
  {th = 1}  Problemists
& {cs = 2}  **Gryphon**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Gryphon** gets trapped quickly,
after a mere 67 steps.

#### Diamond

On the Diamond Spiral, the **Gryphon** remains mobile for a little
longer than on the Square Spiral, but it does get trapped after 157 steps.

### Wedge

#### Folded

On the Folded Wedge, the **Gryphon** uses a four step loop to move
two squares to the upper right, visiting two squares on each row.
This gives it an escape velocity of \(\frac{\sqrt{2}}{2}\).

#### Flat

On the Flat Wedge, the **Gryphon** only visits the right most square
of each row, escaping with a velocity of \(\sqrt{2}\).

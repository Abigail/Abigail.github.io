# Tile General

<div class = "movement">
. . . . .
. . * . .
. . S . .
. * . * .
. . . . .
Shogi: 1
</div>

The **Tile General** either moves one square orthogonally forward
(like a forward %%WAZIR%%),
or one square diagonally backward (like a backward %%FERZ%%).

This mirrors the movement of the [*Strutting Crow*](strutting_crow.html).

|====
%%PIECE_INFO%%
  **Sword Soldier**
& %%TAIKYOKU%%
& \\

  **Tile General**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Tile General** circles the origin once,
then escapes to bottom right, using a three step loop to
move one square to the bottom right. This gives it an 
escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Diamond

On the Diamond Spiral, the **Tile General** escapes upward,
using a eight step loop to move four squares upwards. Giving it
an escape velocity of \(\frac{1}{2}\).

### Wedge

#### Folded Wedge

On the Folded Wedge, the **Tile General** visits the three right
most squares of each row, escaping to infinity to the upper
right. It uses a six step loop to move two squares to the
upper right, giving it an escape velocity of
\(\frac{\sqrt{2}}{3}\).

#### Flat Wedge

On the Flat Wedge, the **Tile General** visits the right most
square of the each row, giving it an escape velocity of
\(\sqrt{2}\).

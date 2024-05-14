# Ghost Warrior

<div class = "movement">
. . A . .
. . * . .
. . * . .
. . * . .
. . S . .
. * . * .
. . . . .
</div>

The **Ghost Warrior** either moves an unlimited number of unoccupied
squares forward (like the [*Lance*](lance.html)), or a one square
diagonally backward.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Ghost Warrior**
&           %%PROMOTES_TO%% [*Free Boar*](free_boar.html)\\
====|

### Spiral

#### Square

On the Spiral, the **Ghost Warrior** visits all the squares in
the left quadrant of the board, when divided along the diagonals.
THus, the **Ghost Warrior** visits \(25\%\) of the squares on the board.

#### Diamond

On the Diamond Square, the **Ghost Warrior** uses an eight step loop
to move four square straight down, giving it an escape velocity of
\(\frac{1}{2}\). Only two files will be visited, and all but
two of the visited squares are below the origin.

### Wedge

#### Folded

On the Folded Wedge, the **Ghost Warrior** escapes to infinity
by visiting only the three left most squares of each row.
In a three step loop, the **Ghost Warrior** moves one square
upwards and to the left, giving it an escape velocity
of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the **Ghost Warrior** escapes to infinity
by visiting only the three right most squares of each row.
In a three step loop, the **Ghost Warrior** moves one square
upwards and to the right, giving it an escape velocity
of \(\frac{\sqrt{2}}{3}\).

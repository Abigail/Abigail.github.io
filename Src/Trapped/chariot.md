# Chariot

<div class = "movement">
. . . . . . . . . . .
. . . . . L . . . . .
. . . . . * . . . . .
. . . . . * . . . . .
. . . . . * . . . . .
. L * * * S * * * L .
. . . . . * . . . . .
. . . . . * . . . . .
. . . . . * . . . . .
. . . . . L . . . . .
. . . . . . . . . . .
</div>

The **Chariot** is a *short rook*: a piece which moves like
a [*Rook*](rook.html), but with a limited range. The %%PIECE%%
slides up to four unoccupied squares in any orthogonal direction.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2}  **Chariot**
&           %%PROMOTES_TO%% [*Octopus*](octopus.html)
====|

### Spiral

#### Square

On the Square Spiral, the **Chariot** can move as the [*Wazir*](wazir.html),
hence it fills the board by following the spiral.

#### Diamond

On the Diamond Spiral, the movements of the **Chariot** start out in the
same way as the [*Rook*](rook.html) moves on the Diamond Spiral, until
the point where the [*Rook*](rook.html) slides more than four squares
-- which the **Chariot** cannot for. From that point on, the **Chariot**
makes a wrong turn, and gets trapped a few steps later. From the beginning,
it takes 112 steps for the **Chariot** to get trapped.

### Wedge

#### Folded

Just like the [*Rook*](rook.html), the **Chariot** gets trapped after
six steps.

#### Flat

On the Flat Wedge, the **Chariot** escapes. It visits the two right
most squares of each row; the travel pattern for the %%PIECE%%
is the same as for the [*Rook*](rook.html). This gives an escape
velocity of \(\frac{\sqrt{2}}{2}\).

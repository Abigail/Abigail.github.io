# Banner

<div class = "movement">
. . . . .
. . * . .
. * S * .
. . . . .
</div>

The **Banner** moves like a forward and sideways [*Wazir*](wazir.html).
That is, the **Banner** can move one square to its right or left, or
one square forward.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Banner**
&           %%PROMOTES_TO%% [*Raven*](modern_elephant.html?piece=raven) \\
  {th = 1}  %%JANGGI%%
& {cs = 2; rs = 2}
            **Soldier**
& \\
  {th = 1}  %%XIANGQI%%
&           Only after crossing the river; before crossing the river,
            it moves like the [*Pawn*](pawn.html?piece=soldier) \\
====|

### Spiral

#### Square

On the Spiral, the **Banner** moves over those rows of the Spiral,
where the numbers increase from right to left, going to the next
row where the Spiral turns downward (or comes up from below). If
you view the Spiral as a set of concentric squares, it **Banner**
moves of the top edge of each square.

This makes the **Banner** cover 25% of the board.

#### Diamond

On the Diamond Spiral, the **Banner** escapes in the straight
line to the right, moving one square each step. So, it's 
escape speed is 1.

### Wedge

#### Folded

On the Folded Wedge, the **Banner** moves in practical the same
pattern as on the Spiral, visiting all squares but one of each
row. This makes that, in the limit, the **Banner** visits 100%
of the board.

#### Flat

On the Flat Wedge, the **Banner** visits the two right most squares
on each row, escaping to infinity in a step-wise pattern. It uses
a two step loop to move one square to the upper right, giving
an escape speed of \(\frac{\sqrt{2}}{2}\).

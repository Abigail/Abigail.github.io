# Cuckoo

<div class = "movement">
. . . . .
. . * . .
. . . . .
. * S * .
. . . . .
</div>

The **Cuckoo** either moves one square sideways (like a sideways
[*Wazir*](wazir.html)), or two squares
orthogonally forward (like a forward [*Dabbaba*](dabbaba.html)).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Cuckoo**
&           %%PROMOTES_TO%% [*Longleaper*](queen.html?piece=longleaper);
            %%ABILITIES%%\\
====|

### Spiral

#### Square

On the Square Spiral, the **Cuckoo** visits every second row going forward
from the origin. It will visits that part where the numbers on the
Spiral are consecutive (so, from where the spiral turns left on to
the row, till where it the spiral turns left again). As such, it will
visit 12.5% of the board.

#### Diamond

On the Diamond Spiral, the **Cuckoo** moves in a straight line to
the right, one square at the time, for an escape velocity of 1.

### Wedge

On both the Folded Wedge and the Flat Wedge, the **Cuckoo** will visit
the three right most squares of every second row, escaping to infinity
that way. It's a three step loop to move to a square which is two
away to the upper left.
This results in an escape velocity of \(\frac{2 \sqrt{2}}{3}\).

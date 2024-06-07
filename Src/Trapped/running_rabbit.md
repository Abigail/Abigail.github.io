# Running Rabbit

<div class = "movement">
. . A . .
. . * . .
. . * . .
. * * * .
. . S . .
. * * * .
. . . . .
Shogi: 1
</div>

The **Running Rabbit** either moves one square diagonally (like a
[*Ferz*](ferz.html)), one square orthogonally backward
(like a backward [*Wazir*](wazir.html)), or slides an unlimited amount
of unoccupied squares orthogonally forward (like a forward
[*Rook*](rook.html)).

|====
%%PIECE_INFO%%
  **Running Rabbit**
& %%WA_SHOGI%%
& This is a different piece than the
  [*Running Rabbit*](running_rabbit_taik.html) from %%TAIKYOKU%%.
====|

### Spiral

#### Square

On the Square Spiral, the **Running Rabbit** visits every square on the board
using a pattern which vaguely resembles a Pacman.

#### Diamond

The **Running Rabbit** slowly spirals outward, visiting all squares
on the board.  On each revolution, the **Running Rabbit** moves
only %%FERZ%% moves, except for a single %%WAZIR%% move, moving the
piece one step outward.

### Wedge

#### Folded

On the Folded Wedge, the **Running Rabbit** escapes to the upper right
by visiting the three right most squares on each row. A six step
loop moves the piece two squares forward and to the right, resulting
in an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the **Running Rabbit** escapes to the upper right by
visiting the right most square on each row. This gives an escape
velocity of \(\sqrt{2}\).

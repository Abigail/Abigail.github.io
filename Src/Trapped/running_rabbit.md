# %%PIECE%%

The %%PIECE%% either moves one square diagonally (like a
[*Ferz*](ferz.html)), one square orthogonally backward
(like a backward [*Wazir*](wazir.html)), or slides an unlimited amount
of unoccupied squares orthogonally forward (like a forward
[*Rook*](rook.html)).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%WA_SHOGI%%
&           **Running Rabbit** & &#x8D70;&#x514E;
&           %%PROMOTES_TO%% [*Treacherous Fox*](treacherous_fox.html) \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% visits every square on the board
using a pattern which vaguely resembles a Pacman.

#### Diamond

The %%PIECE%% slowly spirals outward, visiting all squares on the board.
On each revolution, the %%PIECE%% moves only %%FERZ%% moves, except for
a single %%WAZIR%% move, moving the piece one step outward.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% escapes to the upper right
by visiting the three right most squares on each row. A six step
loop moves the piece two squares forward and to the right, resulting
in an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the %%PIECE%% escapes to the upper right by
visiting the right most square on each row. This gives an escape
velocity of \(\sqrt{2}\).

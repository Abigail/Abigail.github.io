# %%PIECE%%

The %%PIECE%% moves either a one square forward (either diagonally,
or orthogonally), or slides an unlimited amount of unoccupied
squares orthogonally backward.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%YARI_SHOGI%%
& {cs = 2}  **Yari Silver**
&           %%PROMOTED%% [*Pawn*](pawn.html) \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% fills 25% of the squares: a wedge to
the right of the origin, with mostly vertical movements.

#### Diamond

On the Diamond Spiral, the %%PIECE%% moves straight forward, one square
per step. This gives an escape velocity of \(1\).

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% visits the three right most
squares of each row, escaping to the upper right. A six step loop
moves the pieces two squares forward and to the right. The escape
velocity is \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the %%PIECE%% escapes by visiting the right most
square of each row, with an escape velocity of \(\sqrt{2}\).

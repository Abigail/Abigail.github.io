# %%PIECE%%

The %%PIECE%% moves like a [*Rook*](rook.html), except backwards.
That is, it may slide an unlimited number of squares sideways or forward.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%YARI_SHOGI%%
& {cs = 2}  **Yari Rook**
&           %%PROMOTES_TO%% [*Rook*](rook.html) \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% escapes to the forward right, by
visiting four squares on each row forward from the origin. A five step
loop moves the piece one square forward and to the right, resulting
in an escape velocity of \(\frac{\sqrt{2}}{5}\).

#### Diamond

On the Diamond Spiral, the %%PIECE%% steps one square to the right
on each step, escaping in the straight line with an escape velocity
of \(1\).

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% visits about half the squares on
each row, alternating the right most and left most half of each row.

#### Flat

On the Flat Wedge, the %%PIECE%% escapes to the upper right, using
a step wise pattern to visit the two right most squares on each row.
The escape velocity is \(\frac{\sqrt{2}}{2}\).

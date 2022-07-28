# %%PIECE%%

The %%PIECE%% either moves an unlimited number of unoccupied
squares forward (like the forward [*Rook*](rook.html)), or to a square
which is two backwards and one sideward, or one backward and two
sideways (so, like a backward [*Knight*](knight.html)).

|====
%%PIECE_HEADERS%%
  {th = 1} %%TYPHOON%%
& {cs = 2} **Fire Horse**
&          %%PROMOTES_TO%% [*Flying Ox*](flying_ox.html)
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% gets trapped quickly, after 45 steps.

#### Diamond

On the Diamond Spiral, after bouncing around for 14 moves, the
%%PIECE%% escapes downwards, visiting all the squares on the
lines right and left of the line downward from the origin. It uses
an eight step cycle to go four squares down, giving it an escape
velocity of \(\frac{1}{2}\).

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% escapes to infinity by visiting
the four left most squares of each row. The pattern consist of repeating
the following four moves (starting from a right most square of a row):
three times a step forward, then a Knight's move backward (to a square
two back, and one to the right). This lands the piece on the right most
square of the row one ahead of the starting row, so the pattern can
repeat. This four step cycle lepas to an escape velocity of
\(\frac{\sqrt{2}}{4}\).

#### Flat

On the Flat Wedge, the %%PIECE%% travels using the same pattern
as it does on the Folded Wedge, but mirrored along the vertical axis.
Not many other pieces have this mirror like behaviour.

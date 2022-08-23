# %%PIECE%%

The %%PIECE%% either moves one square diagonally, or one
square orthogonally backward.

The %%PIECE%% moves mirror those of the 
[*Silver General*](silver_general.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%WHALE_SHOGI%%
& {cs = 2}  **Humpback**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% first circles the origin a few times,
then escapes to the bottom left. It uses a three step loop to
move to a square one away down and to the left, for an escape
velocity of \(\frac{\sqrt{2}}{3}\).

#### Diamond

On the Diamond Spiral, the %%PIECE%% visits all the squares. It does so
by alternating going clockwise and counterclockwise for a full resolution,
before going backwards for one step, then alternating the direction.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% escapes to the upper right by
visiting the three right most squares of each row. It's using a 
six step loop to move to a square two away to the upper right,
for an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wegde, the %%PIECE%% escapes the the upper right by
sticking to the right most square of each row. This results into
an escape velocity of \(\sqrt{2}\).

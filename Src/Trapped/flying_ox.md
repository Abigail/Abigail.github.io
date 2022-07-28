# %%PIECE%%

The %%PIECE%% moves an unlimited amount of unoccupied squares
diagonally (like the [*Bishop*](bishop.html), or orthogonally
forward or backward (like the forward/backward [*Rook*](rook.html)).

Compare with the [*Free Boar*](free_boar.html) which has the same
movements, rotated 90&deg;.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Flying Ox**
&           %%PROMOTED%% [*Fire Horse*](fire_horse.html) \\
  {th = 1}  %%CHU_SHOGI%%
&           **Flying Ox** & &#x98DB;&#x725B;
&           %%PROMOTED%% [*Vertical Mover*](vertical_mover.html) \\
====|

### Spiral

#### Square

Despite the [*Bishop*](bishop.html) and the forward/backward 
[*Rook*](rook.html) not getting trapped, nor the [*Queen*](queen.html)
(which combines the [*Bishop*](bishop.html) and full [*Rook*](rook.html)),
the %%PIECE%% does get trapped, after 540 steps.

#### Diamond

On the Diamond Spiral. the %%PIECE%% escapes to the four orthogonal
directions. After bouncing around for 300 moves in an almost regular
pattern, %%PIECE%% enters a 10 step cycle, where it visits one square
below the origin, one square to the left of the origin, one square
above the origin, and seven squares to the right. In each cycle, it
expands one square outward, giving it an escape velocity of 
\(\frac{1}{10}\). 

### Wedge

#### Folded Wedge

On the Folded Wedge, the %%PIECE%% escapes, visiting the three
right most squares on each row. It uses a six step cycle to move
two squares to the upper right, for an escape velocity of
\(\frac{\sqrt{2}}{3}\).

#### Flat Wedge

On the Folded Wedge, the %%PIECE%% escapes, visiting the
right most square on each row. The escape velocity is 
\(\sqrt{2}\).

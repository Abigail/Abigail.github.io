# %%PIECE%%

The %%PIECE%% alternates its moves. On its first move, it may slide
an unlimited number of unoccupied squares orthogonally forward
or backward (like a vertical %%ROOK%%);
on its second move, it may slide an unlimited number of unoccupied
squares diagonally: either forward-right, or backward-left (like a
%%BISHOP%% limited to one diagonal); on its third move, it may slide
an unlimited number of unoccupied squares diagonally: either
forward-left, or backward-right (like a %%BISHOP%% limited to the
other diagonal). This set of three moves repeat forever.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%GANYMEDE%%
& {cs = 2}  **Spearman**
&           %%PROMOTES_TO%% [*Pikeman*](flying_ox.html?piece=pikeman) \\
====|

### Spiral

#### Square

The %%PIECE%% uses a six step loop to move two squares backward-right.
This gives it an escape velocity of \(\frac{\sqrt{2}}{3}\). It will
never slide more than one square in a step.

#### Diamond

The %%PIECE%% gets trapped rapidly, it's trapped after 18 steps.

### Wedge

#### Folded

The %%PIECE%% visits three of the four left most squares of
each row. A six step loop moves it two squares forward-left.
The escape velocity is \(\frac{\sqrt{2}}{3}\).
It will never slide more than one square in a step.


#### Flat

The %%PIECE%% follows the same path as it does on the Folded Wedge,
so its escape velocity is \(\frac{\sqrt{2}}{3}\).
It will never slide more than one square in a step.

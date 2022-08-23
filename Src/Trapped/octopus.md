# %%PIECE%%

The %%PIECE%% first steps one square diagonally (like the
[*Ferz*](ferz.html), then slides zero or more squares 
orthogonally outward (like the [*Rook*](rook.html)).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SCIROCCO%%
& {cs = 2}  **Octopus**
&           %%PROMOTED%% [*Chariot*](chariot.html) \\
====|

### Spiral

#### Square

After bouncing around for the first couple of steps, all 
squares the %%PIECE%% vists on the two main diagonals.
This makes it an escaping piece, but one which escapes 
in multiple directions; a feat not many pieces share.
The %%PIECE%% uses a 20 step loop (5 revolutions around
the origin) to move 7 squares diagonally outward (on all
diagonals). This means an escape velocity of 
\(\frac{7 \sqrt{2}}{20}\).

#### Diamond

On the Diamond Spiral, the %%PIECE%% gets trapped after 52 steps.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% gets trapped on step 7!

#### Flat

On the Flat Wedge, the %%PIECE%% only visits the right most
square of each row, escaping by sticking to the boundary.
The escape velocity is \(\sqrt{2}\).

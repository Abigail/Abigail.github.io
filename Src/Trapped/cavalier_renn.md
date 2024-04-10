# %%PIECE%%

The %%PIECE%% moves one square diagonally, then slides over any
zero number of squares orthogonally outward. It may not land next
to its starting square (so, it needs to slide at least one square
orthogonally). That is, it makes a step like a %%FERZ%%, followed 
by a %%ROOK%% move, whether the latter moves away from the starting square.
The %%ROOK%% moves must happen, the %%PIECE%% cannot finish its move
on the %%FERZ%% move.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%RENN_CHESS%%
& {cs = 2}  **Cavelier**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% is trapped after 102 moves.

#### Diamond

On the Diamond Spiral, the %%PIECE%% is trapped after 56 moves.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% is trapped after a mere 12 moves.

#### Flat

On the Flat Wedge, the %%PIECE%% escapes, hugging the left hand side
of the wedge, using a zigzag pattern to up one step diagonally every
second move, giving it an escape velocity of \(\frac{\sqrt{2}}{2}\).

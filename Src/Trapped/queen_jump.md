# %%PIECE%%

The %%PIECE%% either slides an unlimited amount of unoccupied squares
in any of the eight main directions, while it can, optionally, jump
over at most one occupied square (it can of course not land on this
square). Other than the jumping over an occupied square, the %%PIECE%%
follows the same movement as the [Chess Queen](queen.md).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%QUANTUM%%
& {cs = 2}  **Queen**
&           %%CAPTURE%% \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% can move as the %%WAZIR%% so it will
visit all squares.

#### Diamond

On the Diamond Spiral, the %%PIECE%% can move as the %%BM%% so it will
visit all squares.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% can move as the %%FC%% so it will
visit all squares.

#### Flat

On the Flat Wedge, the %%PIECE%% will visit all the squares; it will
visit all the squares of a row before moving to the next one. While
the [Chess Queen](queen.md) also visits all the squares, a different
pattern is followed.

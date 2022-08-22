# %%PIECE%%

The %%PIECE%% either slides an unlimited amount of unoccupied squares
diagonally forward (like a forward %%BISHOP%%), or an unlimited
amount of unoccupied squares orthogonally backward (like a 
backward %%ROOK%%).

This mirrors the movements of the [*Hunter*](hunter.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%FALCON_HUNTER%%
& {cs = 2}  **Falcon**
&           %%TORI_SHOGI%% also has a piece name 
            [*Falcon*](drunk_elephant.html?piece=tori_falcon), with
            a different movement. \\
====|

### Spiral

#### Square

The %%PIECE%% visits almost all the squares in a wedge to the right
of origin in a somewhat interesting pattern. \(25\%\) of the squares
on the board will be visited. Its mirror image, the [*Hunter*](hunter.html)
however, will get trapped (after 146 steps).

#### Diamond

On the Diamond Spiral, the %%PIECE%% uses an eight step loop to move
four square upward, for an escape velocity of \(\frac{1}{2}\). Only
squares on two files will be visited, all but two of them above the
origin.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% uses a six step loop to move
two squares to the upper right. The three right most squares of
each row are visited, for an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the %%PIECE%% visits the right most square
of each row, for an escape velocity of \(\sqrt{2}\).


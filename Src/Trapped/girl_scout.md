# Girl Scout

<div class = "movement">
. . . . . . . . . . .
. * * . . . . . * * .
. * * * . . . * * * .
. . * * * . * * * . .
. . . * * * * * . . .
. . . . * S * . . . .
. . . * * * * * . . .
. . * * * . * * * . .
. * * * . . . * * * .
. * * . . . . . * * .
. . . . . . . . . . .
Arrow: 5,5 4,5 4,4 3,4 3,3 2,3 2,2 1,2 1,1  0,1;   stroke = red
Arrow: 5,5 5,4 4,4 4,3 3,3 3,2 2,2 2,1 1,1  1,0
Arrow: 5,5 4,5 4,6 3,6 3,7 2,7 2,8 1,8 1,9  0,9;   stroke = red
Arrow: 5,5 5,6 4,6 4,7 3,7 3,8 2,8 2,9 1,9  1,10
Arrow: 5,5 5,4 6,4 6,3 7,3 7,2 8,2 8,1 9,1  9,0
Arrow: 5,5 6,5 6,4 7,4 7,3 8,3 8,2 9,2 9,1 10,1;   stroke = red
Arrow: 5,5 5,6 6,6 6,7 7,7 7,8 8,8 8,9 9,9  9,10
Arrow: 5,5 6,5 6,6 7,6 7,7 8,7 8,8 9,8 9,9 10,9;   stroke = red
</div>

The %%PIECE%% moves like a %%ROOK%%, except that it turns 90&deg; at every
step. It always goes outward, so it alternates turning clockwise and
counterclockwise.


|====
%%PIECE_HEADERS%%
  {th = 1}  
& {cs = 2}  **Crooked Rook**
&           \\
  {th = 1}  
& {cs = 2}  **Girl Scout**
&           \\
====|
      
Links: [%%CHESS_V%%](#piece:crookedbishop)

### Spiral

#### Square

The **Girl Scout** can move like the %%WAZIR%%, so on the Square Spiral, it
follows the spiral and visits all the squares.

#### Diamond

On the Diamond Spiral, the **Girl Scout** visits the same squares in the
same order as the %%BM%% does, so it follows the spiral and visits
all the squares. Note that the **Girl Scout** doesn't quite move in the
same way as the %%BM%%, as it can only move one step diagonally if
one of the neigbouring squares is unoccupied.

### Wedge

#### Folded

On the Folded Wedge, the **Girl Scout** visits all the squares in order,
making the same moves as the %%FC%% does. Due to the **Girl Scout** only
being able to make a diagonal step if one of the neighbouring squares
is unoccupied, we cannot say the **Girl Scout** can move in the same way
as the %%FC%% can.

#### Flat

On the Flat Wedge, the **Girl Scout** visits all the squares, using a
very simple pattern.

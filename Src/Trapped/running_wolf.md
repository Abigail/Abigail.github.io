# Running Wolf

<div class = "movement">
A . . . . . . . A
. * . . . . . * .
. . * . . . * . .
. . . * * * . . .
A * * * S * * * A
. . . . . . . . .
Shogi: 1
</div>

The **Running Wolf** either slides an unlimited amount of unoccupied
squares diagonally forward (like a forward %%BISHOP%%), slides an
unlimited amount of unoccupied squares orthogonally sideways
(like a horizontal %%ROOK%%), or steps one square orthogonal forward
(like a forward %%WAZIR%%).

|====
%%PIECE_INFO%%
  **Running Wolf**
& %%TAIKYOKU%%
& \\
====|


### Spiral

#### Square

The **Running Wolf** visits half the squares in the wedge forward
of the orgin, meaning \(12.5\%\) of the squares on the board will
be visited.

#### Diamond

On the Diamond Spiral, the **Running Wolf** uses a two step
loop to move one square forward, giving in an escape velocity of %%HALF%%.

### Wedge

#### Folded

On the Folded Wedge, the **Running Wolf** moves like the %%FC%%,
visiting all the squares on the board.

#### Flat

On the Flat Wedge, the **Running Wolf** visits \(50\%\) of the
squares on the board, using a path very similar to the path
it uses on the Square Spiral.

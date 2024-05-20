# Poisonous Snake

<div class = "movement">
. . . . . . .
. . . L . . .
. . * * * . .
. L * S * L .
. . . * . . .
. . . . . . .
Shogi: 1
</div>

The **Poisonous Snake** either slides up to two unoccupied squares
orthogonally sideward or forward (like a very limited horizontal and
forward %%ROOK%%),
or steps one square diagonally forward (like a forward %%FERZ%%),
or one square orthogonally backward (like a backward %%WAZIR%%).

It turns out that on all the boards we're looking at, that the
**Poisonous Snake** visits the same squares, using the same
patterns, as the [*Northern Barbarian*](northern_barbarian.html).

|====
%%PIECE_INFO%%
  **Poisonous Snake**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Poisonous Snake** can move like the
%%WAZIR%%, so it just follows the Spiral, and visits all the squares
on the board.

#### Diamond

On the Diamond Square, the **Poisonous Snake** uses a two step
loop to move one square forward. The escape velocity is %%HALF%%.
Only squares in two files will be visited.

### Wedge

#### Folded

The **Poisonous Snake** can move like the %%FC%%, so it visits all the
squares of the Folded Wedge in order.

#### Flat

On the Flat Wedge, the **Poisonous Snake** visits the all the squares.

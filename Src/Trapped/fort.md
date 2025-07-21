# Fort

<div class = "movement">
. . . . A . . . .
. * . . * . . * .
. . . . * . . . .
. . . * * * . . .
A * * * S * * * A
. . . * * * . . .
. . . . * . . . .
. * . . * . . * .
. . . . A . . . .
</div>

The **Fort** either slides an unlimited number of unoccupied squares
orthogonally (like a %%ROOK%%) or jumps one or three squares
diagonally (like a %%FERZ%% or a [*Tripper*](tripper.html)).

|====
%%PIECE_INFO%%
  **Fort**
& %%GANYMEDE%%
& %%PROMOTED%% %%ROOK%% \\
====|

### Spiral

#### Square

<!-- @@ Wazir Fort/FGWW Square_Spiral -->

#### Diamond

<!-- @@ Blind_Monkey Fort/FGWW Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Flying_Cock Fort/FGWW Folded_Wedge -->

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l FGWW 
% Box: [-1, 1] [-1, 5]
+------+------+------+------+------+------+------+
|    . |    . | 1731 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
| 5027 |   *  |   28 |   28 | 1564 |   27 |   27 |
+------+------+------+------+------+------+------+
| 1568 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

The **Fort** uses a simple pattern with a strong bias to the right
hand side, to visit all the squares on the board.

The heatmap on the left shows that the **Fort** mostly makes 
orthogonal sideways moves, at most one square to the left,
and up to five squares to the right. The **Fort** also makes
one square diagonal moves: forward-right and backward-left. 

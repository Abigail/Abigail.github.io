# Acme

<div class = "movement">
A . . . A . . . A
. * . * * * . * .
. . * . * . * . .
. * . * * * . * .
A * * * S * * * A
. * . * * * . * .
. . * . * . * . .
. * . * * * . * .
A . . . A . . . A
</div>

The **Acme** combines the movements of the
%%QUEEN%%, and the %%CAMEL%%. That is, 
the **Acme** can either slide an unlimited number of unoccupied
squares in each of the eight main directions (orthogonal and
diagonal), or leap to a square which is three squares away in
one orthogonal direction, and one square away in the other.

|====
%%PIECE_INFO%%
  **Acme**
& %%OVERKILL%%
& \\
====|


### Spiral

#### Square

<!-- @@ Wazir Acme/CFFWW Square_Spiral -->

#### Diamond

<!-- @@ Blind_Monkey Acme/CFFWW Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Flying_Cock Acme/CFFWW Folded_Wedge -->

#### Flat

<div class = 'heatmap left'>
% ./trapped -h -m 10k -l w_fl --div l CFFWW 
% Box: [-1, 1] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |   76 |    . | 1982 |
+------+------+------+------+------+------+------+
|    . |    . | 4061 |   *  |    . | 1931 |    . |
+------+------+------+------+------+------+------+
| 1925 |    . |    . |   25 |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

The **Acme** fills the Flat Wedge using a simple pattern, with a
bias to the right hand side.

On the Flat Wedge, the **Acme** uses only 6 different moves: two 
%%CAMEL%% moves, one one-square %%BISHOP%% move, and three different
%%ROOK%% moves: two one square, and one two square moves.

# Cardinal

<div class = "movement">
A . . . . . . . A
. * . . * . . * .
. . * . . . * . .
. . . * * * . . .
. * . * S * . * .
. . . * * * . . .
. . * . . . * . .
. * . . * . . * .
A . . . . . . . A
</div>

The **Cardinal** either slides an unlimited number of unoccupied squares
diagonally (like a [*Bishop*](bishop.html)), or jumps one or three
squares orthogonally (like a %%WAZIR%% or [*Threeleaper*](threeleaper.html)).

|====
%%PIECE_INFO%%
  **Cardinal**
& %%GANYMEDE%%
& %%PROMOTED%% %%BISHOP%% \\
====|

### Spiral

#### Square

<!-- @@ Wazir Cardinal/FFHW Square_Spiral -->

#### Diamond

<!-- @@ Blind_Monkey Cardinal/FFHW Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Flying_Cock Cardinal/FFHW Folded_Wedge -->

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l -z 5 FFHW 
% Box: [-1, 0] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |  100 |    . |    . |
+------+------+------+------+------+------+------+
| 3267 |    . | 1716 |   *  | 1716 |    . | 3201 |
+------+------+------+------+------+------+------+
</div>

The **Cardinal** uses a simple pattern, visiting all the squares in a 
row before moving to the next one. This is the same pattern as the
[*Frog*](frog_wfh.html) makes.

As can be seen from the heatmap on the left, most of the moves the
**Cardinal** makes are one and three square orthogonally sideways
moves, with single square diagonally moves to go the next "row"
of the layout.

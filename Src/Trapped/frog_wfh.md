# Frog

<div class = "movement">
. . . . . . . . .
. . . . * . . . .
. . . . . . . . .
. . . * * * . . .
. * . * S * . * .
. . . * * * . . .
. . . . . . . . .
. . . . * . . . .
. . . . . . . . .
</div>

The **Frog** either moves one square orthogonally or diagonally
(like a %%KING%%) or jumps to a square three away orthogonally
(like a [*Threeleaper*](threeleaper.html)).

|====
%%PIECE_INFO%%
  **Frog**
& %%GANYMEDE%%
& %%PROMOTED%% %%PAWN%% \\
====|

### Spiral

#### Square

<!-- @@ Wazir Frog/FHW Square_Spiral -->

#### Diamond

<!-- @@ Blind_Monkey Frog/FHW Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Flying_Cock Frog/FHW Folded_Wedge -->

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l FHW 
% Box: [-1, 0] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |  100 |    . |    . |
+------+------+------+------+------+------+------+
| 3267 |    . | 1716 |   *  | 1716 |    . | 3201 |
+------+------+------+------+------+------+------+
</div>

The **Frog** uses a simple pattern, visiting all the squares in a 
row before moving to the next one. This is the same pattern as the
[*Cardinal*](cardinal_bwh.html) makes.

As can be seen from the heatmap on the left, most of the moves the
**Frog** makes are one and three square orthogonally sideways
moves, with single square diagonally moves to go the next "row"
of the layout.

# Silver General

<div class = "movement">
. . . . .
. * * * .
. . S . .
. * . * .
. . . . .
</div>

The **Silver General** either moves one square diagonally, or one square
orthogonally forward.

The [*Humpback*](humpback.html) mirrors the movement of the **Silver General**.

Pieces moving like the **Silver General** appear in several games,
under different names.

|====
%%PIECE_INFO%%
  **Bishop**
& %%MAKRUK%%
& Not to be confused with the Chess [*Bishop*](bishop.html) \\

  **Silver General**
& %%SHOGI%%; %%CHU_SHOGI%%; %%MICRO_SHOGI%%; %%TAIKYOKU%%; %%TYPHOON%%
& %%PROMOTES_TO%% [*Vulture*](dragon_horse.html?piece=vulture) \\

  **Violent Stag**
& %%TAIKYOKU%%; %%WA_SHOGI%%
& \\
====|

Link: [%%CHESS_V%%](#piece:silvergeneral)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 10k -l s_sq --div r FfW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 1104 | 1199 | 2738 |
+------+------+------+
|    . |   *  |    . |
+------+------+------+
| 3251 |    . | 1708 |
+------+------+------+
</div>

The **Silver General** visits all the squares of the Square Spiral, in
a unique pattern, with a strong bias to the upper right.

As can be seen from the heatmap on the right, the **Silver General** will
make use off all its possible moves, with the majority of the moves on the
right-forward/left-backward diagonal. It has slightly more forward than
backward moves, and slightly more rightward than leftward moves.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10k -l s_d --div l FfW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 2485 |   71 | 2474 |
+------+------+------+
|    . |   *  |    . |
+------+------+------+
| 2485 |    . | 2485 |
+------+------+------+
</div>

On the Diamond Spiral, the **Silver General** circles the origin counter
clockwise in a simple pattern. All squares on the board will
be visited.

It makes each of the four diagonal steps in roughly equal amounts, with
one forward step for each "layer" of the spiral it makes.

### Wedge

#### Folded

<!-- @@ Ferz Silver_General Folded_Wedge -->

<!--
On the Folded Wedge, the **Silver General** follows the same pattern
as the [*Ferz*](ferz.html), visiting two squares on each row.
It escapes to the upper right, using a three step loop to 
move one square to the upper right. Its escape velocity is
\(\frac{\sqrt{2}}{3}\).
-->

#### Flat

<!-- @@ Ferz Silver_General Flat_Wedge -->

<!--
On the Flat Wedge, the **Silver General** visits the right most
square of each row, and no other squares. This gives it
an escape velocity of \(\sqrt{2}\).
-->

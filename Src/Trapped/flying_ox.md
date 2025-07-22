# Flying Ox

<div class = "movement">
A . . . A . . . A
. * . . * . . * .
. . * . * . * . .
. . . * * * . . .
. . . . S . . . .
. . . * * * . . .
. . * . * . * . .
. * . . * . . * .
A . . . A . . . A
Shogi: 1
</div>

The **Flying Ox** moves either has a %%BISHOP%%, or a vertical %%ROOK%%.
The **Flying Ox** moves an unlimited amount of unoccupied squares
diagonally, or orthogonally forward or backward.

Compare with the [*Free Boar*](free_boar.html) which has the same
movements, rotated 90&deg;.

|====
%%PIECE_INFO%%
  **Flying Ox**
& %%CHU_SHOGI%%; %%TAIKYOKU%%; %%TYPHOON%%
& \\

  **Free Bear**
& {rs = 3} %%TAIKYOKU%%
& \\

  **Free Leopard**
& \\

  **Great Whale**
& \\

  **Pikeman**
& %%GANYMEDE%%
& \\

  **Treacherous Fox**
& %%TAIKYOKU%%
& There are conflicting rules on how the **Treacherous Fox** moves. 
  See the [alternative way](treacherous_fox_taik.html) this piece
  may move. %%WA_SHOGI%% also has a [*Treacherous Fox*](treacherous.html),
  but that moves differently. \\
====|

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -D -l s_sq --div r FFvWW 
% Box: [-11*, 11*] [-4, 4]
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  5 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  1 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  3 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  1 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  2 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  1 |  . |  . |  . |  3 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  4 |  . |  . |  1 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  3 |  . |  3 |  . |  1 |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . | 67 | 87 | 98 |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  * |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . | 95 | 83 | 44 |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  1 |  . |  2 |  . |  6 |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  7 |  . |  . |  9 |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  2 |  . |  . |  . |  1 |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  2 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  1 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  . |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
|  . |  . |  . |  . |  7 |  . |  . |  . |  . |
+----+----+----+----+----+----+----+----+----+
</div>

Despite the %%BISHOP%% and the forward/backward 
%%ROOK%% not getting trapped, nor the %%QUEEN%%
(which combines the %%BISHOP%% and full %%ROOK%%),
the **Flying Ox** does get trapped, after 540 steps.

Most of the moves the **Flying Ox** makes are single square
moves, either orthogonally forward or backward, or in any of the
four diagonally directions. %%BISHOP%% moves do not exceed
more than four squares. But the **Flying Ox** does make longer
%%ROOK%% moves; up to 19 squares.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10k -h -l s_d --div l -z 5 FFvWW 
% Box: [-6*, 6*] [-6*, 6*]
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|  981 |    . |    . |    . |    . |    . |    1 |    . |    . |    . |    . |    . |  981 |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    1 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    2 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    1 |    . |    . |    . |    . |    . |    1 |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    4 |    . |    1 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |   29 |   27 |   37 |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |   *  |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . | 2969 | 2952 |   40 |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    2 |    . |    1 |    . |    3 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    2 |    . |    . |    . |    . |    . |    1 |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    1 |    . |    . |    . |    2 |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    1 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
|  978 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |  980 |
+------+------+------+------+------+------+------+------+------+------+------+------+------+
</div>

On the Diamond Spiral. the **Flying Ox** escapes to the four orthogonal
directions. After bouncing around for 300 moves in an almost regular
pattern, **Flying Ox** enters a 10 step cycle, where it visits one square
below the origin, one square to the left of the origin, one square
above the origin, and seven squares to the right. In each cycle, it
expands one square outward, giving it an escape velocity of 
\(\frac{1}{10}\). 

Once the **Flying Ox** settles into its rythm, it makes one step moves
orthogonally backward and diagonally left-backward, and increasing larger
diagonal moves in each direction.

### Wedge

#### Folded Wedge

<div class = 'heatmap right'>
% ./trapped -m 10k -D -l w_fo --div r -z 5 FFvWW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 1667 |    . | 5000 |
+------+------+------+
|    . |   *  |    . |
+------+------+------+
|    . | 3333 |    . |
+------+------+------+
</div>

<div class = 'path left'>
0 0 -1 -1 -1 1 1 0 -1 1 1 0 -1 1
</div>

On the Folded Wedge, the **Flying Ox** escapes, visiting the three
right most squares on each row. It uses a six step cycle to move
two squares to the upper right, for an escape velocity of
\(\frac{\sqrt{2}}{3}\).

The **Flying Ox** uses only three different moves on the Folded Wedge:
one square diagonally forward (both right and left), and one square
orthogonally backward.

#### Flat Wedge

<!-- @@ Ferz Flying_Ox/FFvWW Flat_Wedge -->

# Acropolis

<div class = "movement">
. . . . A . . . .
. . . * * * . . .
. . . * * * . . .
. * * . * . * * .
A * * * S * * * A
. * * . * . * * .
. . . * * * . . .
. . . * * * . . .
. . . . A . . . .
</div>

The **Acropolis** combines the movements of the
[*Rook*](rook.html), and the [*Gnu*](gnu.html). (The [*Gnu*](gnu.html) combines
the movements of the [*Knight*](knight.html) and [*Camel*](camel.html).)

|====
%%PIECE_INFO%%
  **Acropolis**
& %%OVERKILL%%
& \\
====|

### Spiral

#### Square

<!-- @@ Wazir Acropolis/CNWW Square_Spiral -->

#### Diamond

<div class = 'heatmap left'>
% ./trapped -D -l s_d --div l CNWW 
% Box: [-5, 6] [-5, 6]
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |      . |      9 |      . |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |      . |    727 |      . |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |  89695 |  14499 |   2480 |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . | 141990 |   6976 | 664748 |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |   3273 | 680145 |      . | 182657 |      . | 116634 | 154359 |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|     47 |   1027 |  10469 |   6160 | 180907 |    *   | 174679 |   4990 |   8293 |   1060 |     26 |      2 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . | 158190 | 146737 |      . | 187716 |      . | 670214 |   2472 |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . | 592103 |   4726 | 112678 |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |   3001 |   8533 | 154490 |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |      . |   1160 |      . |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |      . |     53 |      . |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
|      . |      . |      . |      . |      . |      3 |      . |      . |      . |      . |      . |      . |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+
</div>

It takes a long time, but the **Acropolis** does get trapped on the
Diamond Spiral. After 4,487,928 steps.

Looking that the heatmap on the left, we can see that the **Acropolis**
makes use of all its possible %%KNIGHT%% and %%CAMEL%% moves, but over
half of its moves are used by four of its %%KNIGHT%% moves. It also makes
use of all the 20 possible %%ROOK%% moves of up to five squares. It does
not make any longer %%ROOK%% moves.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 10k -h -l w_fo --div r CNWW 
% Box: [-1, 1] [-3, 3]
+------+------+------+------+------+------+------+
| 1198 | 1224 |    . |    3 |    . | 1105 | 1323 |
+------+------+------+------+------+------+------+
|    . |    . |  252 |   *  |  141 |    . |    . |
+------+------+------+------+------+------+------+
| 1105 |   46 |    . | 2428 |    . |   46 | 1129 |
+------+------+------+------+------+------+------+
</div>

The **Acropolis** fills the entire Folded Wedge, in an interesting pattern,
going from one side to another, bouncing back and forth between
three rows at a time.

On the Folded Wedge, the **Acropolis** only makes use of half its
%%KNIGHT%% and %%CAMEL%% moves: only those which move one row forward
or backward. It also makes use of %%ROOK%% moves, but none where it
moves more than one square.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -h -l w_fl --div l CNWW 
% Box: [-1, 1] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |  128 |    . |   25 | 1957 |
+------+------+------+------+------+------+------+
|    . |    . | 3982 |   *  |   51 | 1855 |    . |
+------+------+------+------+------+------+------+
| 1875 |   77 |    . |    . |    . |   25 |   25 |
+------+------+------+------+------+------+------+
</div>

The **Acropolis** also fills the entire Flat Wedge, using a different,
but also interesting, pattern. It has a bias the right hand side of
the Wedge.

The **Acropolis** on the Flat Wedge uses only three of its possible
eight %%KNIGHT%% moves, three of its possible eight %%CAMEL%% moves,
and only four %%ROOK%% moves: three moves which move one square, and
one move which moves two squares.

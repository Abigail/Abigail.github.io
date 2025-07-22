# Abbot

<div class = "movement">
. . . . . . . . . . .
. L . . . . . . . L .
. . * . . . . . * . .
. . . * * . * * . . .
. . . * * . * * . . .
. . . . . S . . . . .
. . . * * . * * . . .
. . . * * . * * . . .
. . * . . . . . * . .
. L . . . . . . . L .
. . . . . . . . . . .
</div>

The **Abbot**
moves as either a %%KNIGHT%%, or as a 
%%BISHOP%%, but then not more than four squares.
That is, the **Abbot** jumps to a square which is two away in
one orthogonal direction, and one away in the other, or which
slides up to four unoccupied squares in a diagonal direction.

This makes the **Abbot** a limited range [*Archbishop*](archbishop.html).


|====
%%PIECE_INFO%%
  **Abbot**
& %%TYPHOON%%; %%SCIROCCO%%
& \\
====|


### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -D -l s_sq --div r F4N 
% Box: [-4, 4] [-4, 4]
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   7 |   . |   . |   . |   . |   . |   . |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   7 |   . |   . |   . |   . |   . |  13 |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   . |  73 | 993 |   . | 336 |  68 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   . | 407 | 196 |   . | 177 | 899 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   . |   . |   . |  *  |   . |   . |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   . | 881 | 164 |   . | 229 | 397 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |   . |  59 | 369 |   . | 956 |  75 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   . |  14 |   . |   . |   . |   . |   . |   7 |   . |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   6 |   . |   . |   . |   . |   . |   . |   . |   1 |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+
</div>

On the Spiral Square, the **Abbot** gets trapped after 6,334 steps. This is 
only slightly sooner than the  [*Archbishop*](archbishop.html), which
gets trapped after 6,386 steps.

As can be seen from the heatmap on the right, the **Abbott** mostly makes
%%KNIGHT%% moves. Longer %%BISHOP%% moves are even less frequent that
one square %%BISHOP%% moves.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -D -l s_d --div l F4N 
% Box: [-4, 4] [-4, 4]
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|  979432 |       . |       . |       . |       . |       . |       . |       . |  979821 |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |  247666 |       . |       . |       . |       . |       . |  248095 |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |       . |  954896 | 3137804 |       . | 3554125 |  961251 |       . |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |       . | 3548005 | 3293463 |       . | 3294061 | 3137195 |       . |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |       . |       . |       . |    *    |       . |       . |       . |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |       . | 3138629 | 3294281 |       . | 3286270 | 3554521 |       . |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |       . |  960374 | 3560942 |       . | 3133776 |  959268 |       . |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|       . |  248837 |       . |       . |       . |       . |       . |  248018 |       . |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
|  978072 |       . |       . |       . |       . |       . |       . |       . |  976558 |
+---------+---------+---------+---------+---------+---------+---------+---------+---------+
</div>

It takes much longer for the **Abbot** to get trapped on the Diamond Square,
but eventually it does get trapped -- after 48,675,360 steps.

As can be seen from the heatmap on the left, on the Diamond Spiral,
the **Abbot** mostly makes %%KNIGHT%% moves, and %%BISHOP%% moves 
of one square. But it uses all of its possible moves. It is interesting
to see it uses the four square %%BISHOP%% move more often than its
three square move.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -D -m 10k -l w_fo --div r F4N 
% Box: [-2, 1] [-2, 2]
+------+------+------+------+------+
|    . |   25 |    . |   25 |    . |
+------+------+------+------+------+
| 1925 |  555 |    . |  554 | 1941 |
+------+------+------+------+------+
|    . |    . |   *  |    . |    . |
+------+------+------+------+------+
|  602 | 1886 |    . | 1885 |  602 |
+------+------+------+------+------+
</div>

On the Folded Wedge, the **Abbot** fills the entire board, using
a complicated unique pattern.

As can be seen from the heatmap, the **Abbott** uses 6 out of its 8
possible %%KNIGHT%% moves, the left and right most far more frequently
than the forward most. It never makes a %%BISHOP%% move of more than
one square.

#### Flat

<div class = 'heatmap left'>
% ./trapped -h -m 10k -l w_fl --div l F4N 
% Box: [-2, 3] [-3, 2]
+------+------+------+------+------+------+
|    . |    . |    . |    . |    5 |    . |
+------+------+------+------+------+------+
|    . |  186 |  811 |    . | 1303 | 2797 |
+------+------+------+------+------+------+
|    . |    . |    . |   *  |    . |    . |
+------+------+------+------+------+------+
|    . | 2547 | 1577 |    . |  297 |  396 |
+------+------+------+------+------+------+
|    . |   32 |    1 |    . |   13 |    7 |
+------+------+------+------+------+------+
|   28 |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+
</div>

On the Flat Wedge, the **Abbot** fills the entire board, using
a complicated and unique pattern (but different from the Folded Wedge), with a
strong bias to the right hand side of the board.

From the heatmap on the left, we see that the **Abbott** uses only 7 of it 8
possible %%KNIGHT%% moves. And only 7 of its 16 possible %%BISHOP%% moves.
It doesn't use a four square move.

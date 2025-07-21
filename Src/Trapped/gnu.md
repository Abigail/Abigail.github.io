# Gnu

<div class = "movement">
. . . . . . . . .
. . . * . * . . .
. . . * . * . . .
. * * . . . * * .
. . . . S . . . .
. * * . . . * * .
. . . * . * . . .
. . . * . * . . .
. . . . . . . . .
</div>

The **Gnu** moves either as the [*Knight*](knight.html) or
the %%CAMEL%%, making it both a *Knighted Piece*
and a %%COMPOUND_LEAPER%%. The **Gnu** jumps to a square which
is one away in one orthogonal direction, and two or three in the
other orthogonal direction.

|====
%%PIECE_INFO%%
  {rs = 2}
  **Gnu**
& %%GANYMEDE%%
& %%PROMOTED%% %%KNIGHT%% \\

  %%OVERKILL%%; Problemists
& \\

  {rs = 2}
  **Wildebeest**
& %%SCIROCCO%%; %%TYPHOON%%
& %%PROMOTED%% [*Commoner*](king.html?piece=commoner) \\

  %%WILDEBEEST%%
& The **Wildebeest** is one of the two pieces a %%PAWN%% may promote to. \\
====|

Link: [%%CHESS_V%%](#piece:gnus)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 3G -l s_sq --div r CN 
% Box: [-3, 3] [-3, 3]
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . | 415587842 |         . | 201498282 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |  41985864 |         . |  90955236 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 201929090 |  90916449 |         . |         . |         . |  41776673 | 415618656 |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |         . |     *     |         . |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 415492435 |  41723681 |         . |         . |         . |  90926916 | 201344126 |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |  91042675 |         . |  41769935 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . | 200885484 |         . | 416546656 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
</div>

On the Square Spiral, the **Gnu** circles the origin clockwise, in an
irregular pattern. It doesn't get trapped in the three billion
steps, but it is not clear whether it will never get trapped.

The heatmap on the right shows that the **Gnu** uses all of its 16 possible
moves, but makes far more %%CAMEL%% than %%KNIGHT%% moves.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 3G -l s_d --div l CN 
% Box: [-3, 3] [-3, 3]
+----------+----------+----------+----------+----------+----------+----------+
|        . |        . |  3693251 |        . |  2593560 |        . |        . |
+----------+----------+----------+----------+----------+----------+----------+
|        . |        . |  4155054 |        . | 22337100 |        . |        . |
+----------+----------+----------+----------+----------+----------+----------+
|  3431861 | 23182388 |        . |        . |        . |  4044082 |  5081066 |
+----------+----------+----------+----------+----------+----------+----------+
|        . |        . |        . |     *    |        . |        . |        . |
+----------+----------+----------+----------+----------+----------+----------+
|  5766682 |  4257918 |        . |        . |        . | 22387571 |  3517724 |
+----------+----------+----------+----------+----------+----------+----------+
|        . |        . | 19011544 |        . |  4062638 |        . |        . |
+----------+----------+----------+----------+----------+----------+----------+
|        . |        . |  3407835 |        . |  5091809 |        . |        . |
+----------+----------+----------+----------+----------+----------+----------+
</div>

On the Diamond Square, it takes a long time for the **Gnu** to
get trapped, but it does so on step 136,022,083.

As shown by the heatmap on the left, the **Gnu** makes use of all its
16 possible moves, but does most moves with 4 out of its 8 possible
%%KNIGHT%% moves.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 3G -l w_fo --div r CN 
% Box: [-2, 3] [-3, 3]
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |    727739 |         . |    728881 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 684229107 | 141944170 |         . |         . |         . |  93955339 | 634380901 |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |         . |     *     |         . |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
| 144731179 | 485870262 |         . |         . |         . | 535738451 | 193347827 |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |  27680006 |         . |  27677771 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
|         . |         . |  14510348 |         . |  14478019 |         . |         . |
+-----------+-----------+-----------+-----------+-----------+-----------+-----------+
</div>

On the Folded Wedge, the travelling pattern of the **Gnu** is less
irregular than the pattern on the Spiral, but it doesn't seem to
complete stabalize into something regular. The **Gnu** does not
get trapped for its first billion steps.

In the first three billion steps, the **Gnu** never makes a forward
%%CAMEL%% move, and hardly any vertical %%CAMEL%% or %%KNIGHT%% moves --
most of its moves are sideways.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l CN 
% Box: [-2, 2] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    2 |    . |    . |
+------+------+------+------+------+------+------+
|   17 |   24 |    . |    . |    . | 1671 | 3338 |
+------+------+------+------+------+------+------+
|    . |    . |    . |   *  |    . |    . |    . |
+------+------+------+------+------+------+------+
| 3578 | 1315 |    . |    . |    . |   17 |   19 |
+------+------+------+------+------+------+------+
|    . |    . |   19 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

On the Flat Wedge, the **Gnu** will fill the entire board. It quickly
travels in a regular pattern, filling the board with a bias to the
right hand side.

On the Flat Wedge, the **Gnu** only uses 10 out of its possible 16 moves,
and the majority of them are split between 4 of them; two sideways %%KNIGHT%%
moves, and two sideways %%CAMEL%% moves.

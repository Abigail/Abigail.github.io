# Alibaba

<div class = "movement">
. . . . . . .
. * . * . * .
. . . . . . .
. * . S . * .
. . . . . . .
. * . * . * .
. . . . . . .
</div>

The **Alibaba** combines the movements of the [*Alfil*](alfil.html) and
[*Dabbaba*](dabbaba.html). This makes it a %%COMPOUND_LEAPER%%, as it
combines the movements of two or more %%BASIC_LEAPERS%%.

The **Alibaba** jumps to a square two squares away from its starting
point, either orthogonally, or diagonally. It may jump over occupied squares. 
This makes the **Alibaba** not only %%COLOUR_BOUND%%, it also means the
**Alibaba** can only reach the squares which are both on an even row
and an even column. Only \(25\%\) of the squares are reachable.

If one would remove all the odd rows and odd files (none of them 
reachable by the **Alibaba**) the **Alibaba** moves like the 
[*King*](king.html).

There are several pieces which move this way:

|====
%%PIECE_INFO%%
  **Alibaba**
& %%COMPOUND_LEAPERS%%
&           \\

  **Dervish**
& %%SCIROCCO%%; %%TYPHOON%%
& %%OTHER_MOVES%% \\

  **Spider**
& %%INTERDEPENDENT%%
& %%OTHER_MOVES%% \\
====|

Link: [%%CHESS_V%%](#piece:alibaba)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 10k -l s_sq --div r AD 
% Box: [-2, 2] [-2, 2]
+------+------+------+------+------+
|    . |    . | 2500 |    . |    . |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
| 2550 |    . |   *  |    . | 2500 |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
|    . |    . | 2450 |    . |    . |
+------+------+------+------+------+
</div>

On the Spiral, the **Alibaba** follows the Spiral, but then with
its path blown up by a factor of two. Hence, it visits \(25\%\)
of the squares on the board.

The **Alibaba** only makes orthogonal, %%DABBABA%% moves, roughly the
same amount in each direction.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10k -l s_d --div l AD 
% Box: [-2, 2] [-2, 2]
+------+------+------+------+------+
| 2485 |    . |    . |    . | 2474 |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
|    . |    . |   *  |    . |   71 |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
| 2485 |    . |    . |    . | 2485 |
+------+------+------+------+------+
</div>

On the Diamond, the **Alibaba** follows same path the 
[*Blind Monkey*](blind_monkey.html) does, but then with
its path blown up by a factor of two. Hence, it visits \(25\%\)
of the squares on the board.

The **Alibaba** makes mostly %%ALFIL%% moves on the Diamond Spiral;
and relative few rightward %%DABBABA%% moves.

### Wedge

<div class = 'heatmap right'>
% ./trapped -m 10k -l w_fo --div r AD 
% Box: [-2, 2] [-2, 2]
+------+------+------+------+------+
|    . |    . |    . |    . |  149 |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
| 5000 |    . |   *  |    . | 4802 |
+------+------+------+------+------+
|    . |    . |    . |    . |    . |
+------+------+------+------+------+
|   49 |    . |    . |    . |    . |
+------+------+------+------+------+
</div>

The **Alibaba** visits the same squares on both the Flat and Folded
Wedge, visiting the squares in the same order. It visits every other
square of ever other rows. Mostly going right to left, and left to
right, but with a small sidestep before reaching the left end of a row.
Hence, \(25\%\) of the squares on the board will be visited.

The **Alibaba** uses half of its possible moves. Mostly sideways 
%%DABBABA%% moves, and relative few %%ALFIL%% moves on one diagonal.

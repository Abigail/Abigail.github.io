# Rook

<div class = "movement">
. . . . A . . . .
. . . . * . . . .
. . . . * . . . .
. . . . * . . . .
A * * * S * * * A
. . . . * . . . .
. . . . * . . . .
. . . . * . . . .
. . . . A . . . .
</div>

The **Rook** can slide an unlimited number of squares in all
four orthogonal directions, as long as it does not slide over an
occupied square.

The **Rook** extends the movements of the %%WAZIR%%, making it a
*Wazirrider*.

Many games have pieces which move like the **Rook**, using various
names.

|====
%%PIECE_INFO%%
  **Cannon**
& %%GRAND_CAVALIER%%; %%XIANGQI%%
& %%OTHER_MOVES%% \\

  **Chariot**
& %%JANGGI%%; %%XIANGQI%%
& %%OTHER_MOVES%%; Also known as *Rook* \\

  **Der**
& %%SENTEREJ%%
& *Der* means *Castle* \\

  **Gliding Swallow**
& %%TAIKYOKU%%; %%WA_SHOGI%%
& \\

  {rs = 3}
  **Rook**
& %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%; %%RENN_CHESS%%;
  %%WILDEBEEST%%; %%WOLF%%; Other Chess variants
& \\

  %%GANYMEDE%%; %%MAKRUK%%; %%SCIROCCO%%; %%TYPHOON%%
& \\

  %%SHOGI%%; %%CHU_SHOGI%%; %%EURO_SHOGI%%; %%MICRO_SHOGI%%;
  %%TAIKYOKU%%; %%YARI_SHOGI%%
& \\

  **Running Chariot**
& %%TAIKYOKU%%
& \\

  **Soldier**
& %%TAIKYOKU%%
& \\

  **Square Mover**
& %%TAIKYOKU%%
& \\

  **Terge** 
& %%SHATAR%%
& \\

  **Tereg** 
& %%HIASHATAR%%
& \\

  **Wazirrider**
& %%RIDERS%%
& Moves likes [*Wazir*](wazir.html), without a limit on the number
  of squares it moves over, as long as the squares are unoccupied \\
====|
      
Links: [%%WIKI%%](#wiki:Rook_(chess)),
       [%%CHESS_V%%](#piece:rook)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 5000 -l s_sq --div r WW 
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
</div>

Since the **Rook** movement is a superset of the movement of the
[*Wazir*](wazir.html), it follows the Spiral, visiting all squares
on the board.

As can be seen from the heatmap on the right, it uses a roughly equal number
of single steps in each orthogonal direction.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -l s_d -m 10000 --div l -z 6 WW 
% Box: [-7*, 7*] [-2, 7*]
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |   46 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . | 2724 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|   52 | 2777 |   *  | 1484 |    1 |    1 |    1 |    1 |    1 |   46 |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . | 2810 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
|    . |    . |   46 |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+
</div>

On the Diamond Spiral, the **Rook** uses a regular pattern to fill
\(\frac{5}{8} = 62.5\%\) of the board. This pattern is similar, but
rotated 45&deg; of the pattern the [*Bishop*](bishop.html) uses on
the Square Spiral.

Most of the moves of the **Rook** on the Diamond Spiral will be one
step, orthogonal, moves. It will also make slide 2 or more squares 
orthogonally forward, backward, and to the right. But it will do each
distance at most once. So, it only once moves two squares forward, once
three squares forward, once four squares forward, etc. It does so for
each of the three in equal amounts. It does the same amount of multi-square
steps orthogonally to the left, but then it steps just two squares.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 1000 -l w_fo --div r WW 
% Box: [-1, 1] [-1, 3]
+---+---+---+---+---+
| . | 2 | . | . | . |
+---+---+---+---+---+
| 2 | * | . | . | 1 |
+---+---+---+---+---+
| . | 1 | . | . | . |
+---+---+---+---+---+
</div>

On the Folded Wedge, the **Rook** gets trapped very quickly, after 6 moves.
This is the same number of moves that the [*Wazir*](wazir.html) takes before
it gets trapped, but there is a slight difference in which squares
are visited.

All but one of its moves is a single orthogonal step.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 5000 -l w_fl --div l WW 
% Box: [-1, 0] [0, 1]
+------+------+
| 2500 |    . |
+------+------+
|   *  | 2500 |
+------+------+
</div>

On the Flat Wedge the **Rook** quickly escapes to infinity by alternating make 
a step forward, and a step to the right. This gives it an escape
velocity of \(\frac{\sqrt{2}}{2}\) .

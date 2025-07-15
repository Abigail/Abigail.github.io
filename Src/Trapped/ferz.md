# Ferz

<div class = "movement">
. . . . .
. * . * .
. . S . .
. * . * .
. . . . .
</div>

The **Ferz** is a [*(1,1)-leaper*](leapers.html#basic_leapers).
It's a very old piece, appearing
in very early chess variants. It may step one square in each of the
four diagonal directions. This makes the **Ferz** %%COLOUR_BOUND%%.

Many games have a piece which moves like the **Ferz**.

|====
%%PIECE_INFO%%
  **Advisor**
& %%XIANGQI%%
& In the game, the piece is restricted to 5 squares of the
  3x3 palace. Alternative names: *Assistant*, *Counsellor*,
  *Guard*, *Mandarin*, *Minister*, *Officer*, *Scholar*, *Warrior* \\

  **Cat Sword**
& %%TAIKYOKU%%
& \\

  **Elephant**
& %%DOBUTSU%%
& \\

  **Fers**
& %%SENTEREJ%%
& \\

  **Ferz**
& %%LEAPERS%%
& \\

  **Firzan**
& %%SCIROCCO%%; %%TYPHOON%%
& \\

  **Guardian**
& %%INTERDEPENDENT%%
& \\

  **Queen**
& %%MAKRUK%%
& Not to be confused with the Chess [*Queen*](queen.html) \\
====|

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 10k -l s_sq --div r F 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 2450 |    . | 2500 |
+------+------+------+
|    . |   *  |    . |
+------+------+------+
| 2550 |    . | 2500 |
+------+------+------+
</div>

On the Square Spiral the **Ferz** will not get trapped.
It follows a regular path around
the origin, creating spiral in the opposite direction of the 
Spiral, and rotated 45&deg;. It will visited all the odd
valued squares, so \(50\%\) of the squares on the board.

The **Ferz** makes diagonal steps, one square per move, in all
of the four directions, in roughly equal amounts.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10k -l s_d --div r F 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 2550 |    . | 2500 |
+------+------+------+
|    . |   *  |    . |
+------+------+------+
| 2450 |    . | 2500 |
+------+------+------+
</div>

On the Diamond Square, the **Ferz** follows the same regular
path around the origin as the Square Spiral, except that it
rotates the other way around. Hence, the pieces visits
\(50\%\) of the squares on the board.

The **Ferz** makes diagonal steps, one square per move, in all
of the four directions, in roughly equal amounts.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 1k -l w_fo --div r F 
% Box: [-1, 1] [-1, 1]
+-----+-----+-----+
| 250 |   . | 500 |
+-----+-----+-----+
|   . |  *  |   . |
+-----+-----+-----+
|   . |   . | 250 |
+-----+-----+-----+
</div>

<div class = 'escape-loop left'>
0 0 -1 -1 -1 1 1 1 -1 1
</div>

On the Folded Wedge, the **Ferz** quickly escapes to infinity, using
a zig-zag pattern on the right hand side of the Wedge. It takes
four steps to move two squares diagonally upward, giving it an 
escape velocity of \(\frac{\sqrt{2}}{2}\).

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 1k -l w_fl --div l F 
% Box: [-1, 0] [0, 1]
+------+------+
|    . | 1000 |
+------+------+
|   *  |    . |
+------+------+
</div>

<div class = 'escape-loop right'>
0 0 -1 1
</div>

On the Flat Wedge, the **Ferz** sticks the the right hand side
edge of the board, escaping to infinity, moving one square forward
right on each move. The escape velocity is \(\sqrt{2}\).

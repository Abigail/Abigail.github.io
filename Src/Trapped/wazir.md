# Wazir

<div class = "movement">
. . . . .
. . * . .
. * S * .
. . * . .
. . . . .
</div>

The **Wazir** is a [*(0,1)-leaper*](leapers.html#basic_leapers).
It's a very old piece, appearing
in very early chess variants. It may step one square in each of the
four orthogonal directions. Many games have a piece which moves as
the **Wazir**.

The [*Knight-Bishop compound*](archbishop.html) is sometimes called a
**Wazir** as well.

|====
%%PIECE_INFO%%
  **Fox**
& %%RENN_CHESS%%
& \\

  **General**
& %%XIANGQI%%
& This piece is normally limited to a 3 x 3 box, but we ignore this \\

  **Giraffe**
& %%DOBUTSU%%
& Not to be confused with the (4,1)-leaper [*Giraffe*](giraffe.html), or the
  [Queen + Knight compound](amazon.html?piece=giraffe) also named *Giraffe*. \\

  **Guard**
& %%SCIROCCO%%; %%TYPHOON%%
& %%OTHER_MOVES%% \\

  **Reclining Dragon**
& %%TAIKYOKU%%
& \\

  **Steward**
& %%INTERDEPENDENT%%
& %%OTHER_MOVES%% \\

  **Wazir**
& %%BASIC_LEAPERS%%; %%SCIROCCO%%; %%TYPHOON%%
& \\
====|

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 5k -l s_sq --div r $betza
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
</div>

Because the **Wazir** can always make a step in each of the four orthogonal
directions, it can follow the Spiral, visiting all the squares in order.
As such, if will fill the entire board in a boring pattern.

It also means that any piece which can move as the **Wazir** (even when
it has more moves available, like the Chess [*King*](king.html)), will
follow the Spiral and fill the entire board.

The **Wazir** takes single square steps in all four orthogonal directions;
a roughly equal amount in each direction.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 5k -l s_d --div l W 
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
</div>

The pattern the **Wazir** moves on the Diamond Spiral it the mirror
image of the pattern the **Wazir** moves on the Square Spiral. Hence,
it visits all the squares on the board. However, not all pieces whose
movements are a superset of the movements of the **Wazir** will 
follow this pattern on the Diamond Spiral.

The **Wazir** takes single square steps in all four orthogonal directions;
a roughly equal amount in each direction.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 5k -l w_fo --div r W 
% Box: [-1, 1] [-1, 1]
+---+---+---+
| . | 2 | . |
+---+---+---+
| 1 | * | 2 |
+---+---+---+
| . | 1 | . |
+---+---+---+
</div>

On the Folded Wedge, the **Wazir** gets trapped after no more than 6 steps!
This is the same number of steps the [*Rook*](rook.html) takes, and the
**Wazir** and the [*Rook*](rook.html) get trapped on the same square,
but they follow sligtly different paths.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 5k -l w_fl --div l W 
% Box: [-1, 0] [0, 1]
+------+------+
| 2500 |    . |
+------+------+
|   *  | 2500 |
+------+------+
</div>

On the Flat Wedge, the **Wazir** escapes to infinity, following a zigzag
pattern on the right edge of the Flat Wedge. This gives it an 
escape velocity of \(\frac{\sqrt{2}}{2}\).

The **Wazir** steps one square orthogonally forward,
followed by one square orthogonally to the right. Then it repeats the
pattern.


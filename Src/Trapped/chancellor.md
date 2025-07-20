# Chancellor

<div class = "movement">
. . . . A . . . .
. . . . * . . . .
. . . * * * . . .
. . * . * . * . .
A * * * S * * * A
. . * . * . * . .
. . . * * * . . .
. . . . * . . . .
. . . . A . . . .
</div>

The **Chancellor** either slides an unlimited number of unoccupied
squares in any of the four orthogonal directions (like a 
[*Rook*](rook.html)), or leaps to a square which is two away in
one orthogonal direction, and one in the other (like a
[*Knight*](knight.html)).

The **Chancellor** is a common Fairy Piece, and has a long history.
It's known under many names, of which **Chancellor**, **Empress**
and **Marshal(l)** are the most frequently used.

|====
%%PIECE_INFO%%
  **Champion**
& Carrera's Chess
& \\

  **Chancellor**
& [Capablanca Chess](#wiki); %%CAGLIOSTRO%%;
  [Chancellor Chess](#wiki)
& \\

  **Crown Prince**
& %%QUANTUM%%
& %%CAPTURE%% \\

  **Dabbabah** or
& {rs = 2}
  [Turkish Great Chess](#chess-v:historic.dir/indiangr1.html)
& Not to be confused with the [*Dabbaba*](dabbaba.html) \\

  **War Machine**
& The [Wazir - Dabbaba compound](war_machine.html) is also named *War Machine*
  \\

  **Empress**
& Problemists
& \\

  **Marquis**
& %%QUANTUM%%
& \\

  **Marshal**
& %%OVERKILL%%
& \\

  **Marshal(l)**
& The Sultan's Game
& \\

  **Marshall**
& %%GRAND_CAVALIER%%
& \\

  **Nobleman**
& %%RENN_CHESS%%
& \\

  **Wolf**
& %%WOLF%%
& \\
====|

Less frequently used names for this piece include:
*Admiral*, *Cannon*, *Colonel*, *Concubine*, *Count*,
*Dabbaba* (a name which is more commonly used for the
           [(2,0)-leaper](dabbaba.html)),
*Duke*, *Elephant* (in *Seirawan Chess*), *Guard*,
*Lambeth*, *Lord Chancellor*,
*Princess* (a name which is more commonly used for the
            [Bishop + Knight compound](archbishop.html?piece=princess)),
*Samurai*, *Superrook*, *Tank*, and *Visier*.

Links: [%%WIKI%%](#wiki:Empress_(chess)), [%%CHESS_V%%](#piece:rook-knight)

### Spiral

#### Square

<!-- @@ Wazir Chancellor Square_Spiral -->

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 100k -l s_d --div l -z 5 NWW 
% Box: [-2, 2] [-2, 2]
+-----+-----+-----+-----+-----+
|   . | 151 |  12 | 207 |   . |
+-----+-----+-----+-----+-----+
| 186 |   . |  40 |   . | 124 |
+-----+-----+-----+-----+-----+
|  11 |  45 |  *  |  58 |  11 |
+-----+-----+-----+-----+-----+
| 111 |   . |  45 |   . | 192 |
+-----+-----+-----+-----+-----+
|   . | 223 |   9 | 138 |   . |
+-----+-----+-----+-----+-----+
</div>

On the Diamond Spiral, the **Chancellor** doesn't move in a regular way, and
gets trapped after 1,563 steps.

As can be seen from the heatmap on the left, on the Diamond Spiral,
the **Chancellor** will make mostly [*Knight*](knight.html) moves,
and all possible [*Knight*](knight.html) moves are made. It also makes
all eight different one and two square [*Rook*](rook.html) moves,
and does not make a longer [*Rook*](rook.html) move.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 10k -l w_fo --div r -z 5 NWW 
% Box: [-1, 1] [-2, 2]
+------+------+------+------+------+
|   99 |    . | 4802 |    . |   99 |
+------+------+------+------+------+
|    . |   50 |   *  |   49 |    . |
+------+------+------+------+------+
| 2401 |    . |   99 |    . | 2401 |
+------+------+------+------+------+
</div>

On the Folded Wedge, the **Chancellor** fills the complete board, following
a simple pattern.

Only eight different moves are used. Nearly half the moves move the
**Chancellor** one square orthogonally forward. Nearly a quarter of
the moves are a [*Knight*](knight.html)'s move two squares to the right
and one square back, and a similar amount of moves move two squares
to the left and one square back. 


#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l -z 5 NWW 
% Box: [-1, 1] [-2, 2]
+------+------+------+------+------+
| 2401 |    . |  149 |    . | 2450 |
+------+------+------+------+------+
|    . |    . |   *  |   99 |    . |
+------+------+------+------+------+
| 2451 |    . |   49 |    . | 2401 |
+------+------+------+------+------+
</div>

On the Flat Wedge, the **Chancellor** fills the complete board, following
a similar pattern. The **Chancellor** is unusual in the fact the travel
patterns on both the Folded and Flat Wedge look somewhat similar.

As can be seen from the heatmap on the left, most of the moves of
the **Chancellor** on the Flat Wedge are [*Knight*](knight.html)
moves -- but only the four most sideways [*Knight*](knight.html)
moves are used. No more than three [*Rook*](rook.html) moves are
used, all of them moving the **Chancellor** just one square.

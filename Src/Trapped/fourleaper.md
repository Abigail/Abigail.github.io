# Fourleaper

<div class = "movement">
. . . . . . . . . . .
. . . . . * . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. * . . . S . . . * .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . . . . . . .
. . . . . * . . . . .
. . . . . . . . . . .
</div>

The **Fourleaper** is a (4,0)-%%LEAPER%% jumping to a square which
is four squares away in any orthogonal direction. It can jump over
any occupied intermediate square. 

This makes the **Fourleaper** not only %%COLOUR_BOUND%%, it also means
the **Fourleaper** can only reach squares \((4 * x, 4 * y)\), for
integers \(x\) and \(y\), assuming it starts from square \((0, 0)\). This
means the **Fourleaper** can only reach \(6.25\%\) of the squares on
a chessboard.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%LEAPERS%%
& {cs = 2}  **Fourleaper**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Fourleaper** moves in the same manner as
the %%WAZIR%%, but blown up by a factor of four. It visits \(6.25\%\)
of the squares.

#### Diamond

Just like on the Square Spiral, the **Fourleaper** moves in the same manner as 
the %%WAZIR%%, but blown up by a factor of four. It visits \(6.25\%\)
of the squares.

### Wedge

On both the Folded Wedge, and the Flat Wedge, the **Fourleaper** only
visits two squares of each fourth row, escaping to infinity using
a step-wise pattern. Since it takes two steps to move four squares
to the upper right, the escape velocity is \(2 \sqrt{2}\).


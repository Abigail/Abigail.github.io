# Tripper Rider

<div class = "movement">
A . . . . . . . . . . . . . . . . . . . . . . . A
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . . . . . . . . . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . * . . . . . . . . . . . * . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . S . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . * . . . . . . . . . . . * . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . . . . . . . . . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . .
A . . . . . . . . . . . . . . . . . . . . . . . A
</div>

On each move the **Tripper Rider** moves one or more steps the
[*Tripper*](tripper.html) makes, provided it doesn't turn
and each square it moves over is unoccupied. (So, it can
move six squares diagonally if the third square is unoccupied,
but the first, second, fourth or fifth square may be occupied).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%RIDERS%%
& {cs = 2}  **Tripper Rider**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Tripper Rider** moves in a similar way as the
[*Bishop*](bishop.html) does, but its path "blown up" by a factor
of three. As such, it will visit
\(\frac{1}{18} \cdot (\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{5}{144} = 3.47\overline{2}\%\)
of the squares on the board.

#### Diamond

On the Diamond Spiral, the **Tripper Rider** moves as the
[*Tripper*](tripper.html), visiting
\(\frac{1}{2} \cdot \frac{1}{3^2} = \frac{1}{18} = 5.\overline{5}\%\)
of the squares.

### Wedge

#### Folded

On the Folded Wedge, the **Tripper Rider** escapes to infinity, using
a zigzag pattern on the right hand side of the Wedge.
The escape velocity is \(\frac{3 \sqrt{2}}{2}\).

#### Flat

On Flat Wedge, the **Tripper Rider** escapes
to infinity in a straight line, hugging the right side of the Wedge.
The escape velocity is \(3 \sqrt{2}\).

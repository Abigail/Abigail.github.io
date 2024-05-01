# Tripper

<div class = "movement">
. . . . . . . . .
. * . . . . . * .
. . . . . . . . .
. . . . . . . . .
. . . . S . . . .
. . . . . . . . .
. . . . . . . . .
. * . . . . . * .
. . . . . . . . .
</div>

The **Tripper** is a (3,3)-leaper; that is, the **Tripper** jumps
to a square which is three away on a diagonal. It can jump over
occupied squares.

Because the **Tripper** moves only diagonally, it is 
[colourbound](#wiki:Glossary_of_chess#Colorbound); that is, if it
starts on a dark square, it will always remain on a dark square,
and if it starts on a light square, it will always stay on a light square.

The **Tripper** is more limited than just being
[colourbound](#wiki:Glossary_of_chess#Colorbound). If we give its
starting square the coordinates \((0, 0)\), then the only squares
it can reach are the squares \((3x, 3y)\), for integer \(x\) and
\(y\), and \(x + y\) is even. As such, a **Tripper** can only
reach \(5.\overline{5}\%\) of all the squares on a board.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%LEAPERS%%
& {cs = 2}  **Tripper**
&           \\
====|

### Spiral

#### Square

The **Tripper** follows the same path as the [*Ferz*](ferz.html),
except blown up by a factor of three. As such, it visits 
\(\frac{1}{2} \cdot \frac{1}{3^2} = \frac{1}{18} = 5.\overline{5}\%\)
of the squares.

#### Diamond

The **Tripper** follows the same path as the [*Ferz*](ferz.html),
except blown up by a factor of three. As such, it visits 
\(\frac{1}{2} \cdot \frac{1}{3^2} = \frac{1}{18} = 5.\overline{5}\%\)
of the squares. This is a mirror image of the path the piece
follows on the Square Spiral.

### Wedge

#### Folded

On the Folded Wedge, the **Tripper** follows a stepwise pattern, visiting
only two squares on each third row: the right most square, and the
sixth square from the right. It's a four step pattern moving the 
**Tripper** six squares diagonally upward. The escape velocity is
\(\frac{3 \sqrt{2}}{2}\).

#### Flat

On the Flat Wedge, the **Tripper** follows a path along the right edge
of the Wedge, visiting the right most square of each third row.
The escape velocity is \(3 \sqrt{2}\).

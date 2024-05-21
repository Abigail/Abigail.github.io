# Elephant

<div class = "movement">
. . . . . . .
. L . . . L .
. . * . * . .
. . . S . . .
. . * . * . .
. L . . . L .
. . . . . . .
Line: 3,3 1,1
Line: 3,3 5,1
Line: 3,3 1,5
Line: 3,3 5,5
</div>

The **Elephant** moves one or two unoccupied squares orthogonally
or diagonally. This makes the **Elephant** %%COLOUR_BOUND%%.

This is the **Elephant** from %%XIANGQI%%. There are pieces named
*Elephant* in other games, but they move differently:
[D&#x14d;butsu Sh&#x14d;gi](ferz.html), [Janggi](elephant_janggi.html), and
[Wolf Chess](amazon_rider.html).

There is also a piece called [*Elephant Prince*](king.html) in
%%TYPHOON%%. The [*Alfil*](alfil.html) is sometimes called *Elephant*,
as it's derived from the Persian word for elephant.

%%CLEAR%%
Pieces moving like the **Elephant**:

|====
%%PIECE_INFO%%
  **Elphant**
& %%XIANGQI%%
& In the game, this piece cannot cross the river, restricting
  it to 7 squares on the board (but we do not have a river here);
  Also known as *Bishop* \\

  **Flying Horse**
& %%TAIKYOKU%%
& \\

  **Missionary**
& %%TYPHOON%%
& \\
====|

### Spiral

#### Square

On the Spiral the **Elephant** follows a pattern similar to the
[*Bishop*](bishop.html), except for the parts the [*Bishop*](bishop.html)
skips; the **Elephant** will visit every second square on such parts.
The **Elephant** will visit
\(\frac{1}{2} \cdot
((\frac{1}{2} + \frac{1}{4}) \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{1}{2} \cdot (\frac{9}{16} + \frac{1}{4}) =
  \frac{1}{2} \cdot \frac{13}{16} = \frac{13}{32} = 40.625\%\)
of the squares.

#### Diamond

On the Diamond Spiral, the **Elephant** moves in the same way as the
%%FERZ%% does, visiting half the squares of the board.

### Wedge

#### Folded

On the Folded Wedge, the **Elephant** will escape using a stepwise pattern, 
visiting the right most square, and the square two to the left of the
rightmost square of every row. This is a four step loop to move two
square to the upper right, giving it an escape velocity of
\(\frac{\sqrt{2}}{2}\).

#### Flat

On the Flat Wedge, the **Elephant** stays to the far right, escaping
along the edge of the Wedge. This means an escape velocity of
\(\sqrt{2}\).

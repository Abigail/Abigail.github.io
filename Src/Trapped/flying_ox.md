# Flying Ox

<div class = "movement">
A . . . A . . . A
. * . . * . . * .
. . * . * . * . .
. . . * * * . . .
. . . . S . . . .
. . . * * * . . .
. . * . * . * . .
. * . . * . . * .
A . . . A . . . A
Shogi: 1
</div>

The **Flying Ox** moves either has a %%BISHOP%%, or a vertical %%ROOK%%.
The **Flying Ox** moves an unlimited amount of unoccupied squares
diagonally, or orthogonally forward or backward.

Compare with the [*Free Boar*](free_boar.html) which has the same
movements, rotated 90&deg;.

|====
%%PIECE_INFO%%
  **Flying Ox**
& %%CHU_SHOGI%%; %%TAIKYOKU%%; %%TYPHOON%%
& \\

  **Free Bear**
& {rs = 3} %%TAIKYOKU%%;
& \\

  **Free Leopard**
& \\

  **Great Whale**
& \\

  **Pikeman**
& %%GANYMEDE%%
& \\
====|

### Spiral

#### Square

Despite the [*Bishop*](bishop.html) and the forward/backward 
[*Rook*](rook.html) not getting trapped, nor the [*Queen*](queen.html)
(which combines the [*Bishop*](bishop.html) and full [*Rook*](rook.html)),
the **Flying Ox** does get trapped, after 540 steps.

#### Diamond

On the Diamond Spiral. the **Flying Ox** escapes to the four orthogonal
directions. After bouncing around for 300 moves in an almost regular
pattern, **Flying Ox** enters a 10 step cycle, where it visits one square
below the origin, one square to the left of the origin, one square
above the origin, and seven squares to the right. In each cycle, it
expands one square outward, giving it an escape velocity of 
\(\frac{1}{10}\). 

### Wedge

#### Folded Wedge

On the Folded Wedge, the **Flying Ox** escapes, visiting the three
right most squares on each row. It uses a six step cycle to move
two squares to the upper right, for an escape velocity of
\(\frac{\sqrt{2}}{3}\).

#### Flat Wedge

On the Folded Wedge, the **Flying Ox** escapes, visiting the
right most square on each row. The escape velocity is 
\(\sqrt{2}\).

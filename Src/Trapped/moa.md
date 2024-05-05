# Moa

<div class = "movement">
. . . . . . .
. . * . * . .
. * u . u * .
. . . S . . .
. * u . u * .
. . * . * . .
. . . . . . .
Line: 3,3 2,2 2,1
Line: 3,3 2,2 1,2
Line: 3,3 2,4 1,4
Line: 3,3 2,4 2,5
Line: 3,3 4,2 4,1
Line: 3,3 4,2 5,2
Line: 3,3 4,4 5,4
Line: 3,3 4,4 4,5
</div>

The **Moa** moves as the [*Knight*](knight.html), but it
may not jump. It moves one square diagonally (which must
be unoccupied), then one square orthogonally outward.

Compare this to the [*Mao*](mao.html) which reaches the same
squares, but first moves orthogonally, then diagonally.

|====
%%PIECE_HEADERS%%
  {th = 1}  Problemists
& {cs = 2}  **Moa**
&           \\
====|

Link: [%%CHESS_V%%](#piece:moa)

### Spiral

#### Square

The **Moa** gets trapped quickly, after no more than 21 steps.

#### Diamond

The **Moa** gets trapped quickly, after 35 steps.

### Wedge

#### Folded

The **Moa** uses the two step loop to move one square forward
and to the right, for an escape velocity of \(\sqrt{2}\).

#### Flat

On the Flat Wedge, the **Moa** moves exactly as it does on the
Folded Wedge. So, it escapes with an escape velocity of \(\sqrt{2}\).

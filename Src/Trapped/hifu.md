# Hifu

<div class = "movement" data-piece = "pawn">
. . .
. . .
. . .
. * .
. S .
. . .
. . .
. . .
. . .
Caption: Odd Moves
</div>

<div class = "movement" data-piece = "rook">
. . . . A . . . .
. . . . * . . . .
. . . . * . . . .
. . . . * . . . .
A * * * S * * * A
. . . . * . . . .
. . . . * . . . .
. . . . * . . . .
. . . . A . . . .
Caption: Even Moves
</div>

The **Hifu** alternates between moving like a [*Pawn*](pawn.html)
and a [*Rook*](rook.html), starting with the [*Pawn*](pawn.html).
This means, on odd moves, the **Hifu** moves one square forward,
while on even moves, the **Hifu** slides over an unlimited squares
orthogonally.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%KYOTO_SHOGI%%
& {cs = 2}  **Hifu**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Hifu** escapes to the upper right, using
a stepwise pattern: a two step loop which moves the piece one square
to the upper right, for an escape velocity of \(\frac{\sqrt{2}}{2}\).

#### Diamond

On the Diamond Spiral, the **Hifu** escapes upward, using a four step
loop to move two squares up, for an escape velocity of \(\frac{1}{2}\).

### Wedge

#### Folded

On the Folded Wedge, the **Hifu** visits two squares on each row, 
either the left most square, and second square from the right, or the right
most square and the second square from the left (and it alternates
this between rows). This makes that the %%PIECE%% visits, in the limit,
0% of the squares, but travels over 100% of them.

This makes the pieces sit somewhere between an escaper and a filler.

Its escape velocity is \(\frac{\sqrt{2}}{2}\) as it uses a four
step loop to move two squares up and either to the left or right.

#### Flat

On the Flat Wedge, the **Hifu** visits the two right most squares
of each row, escaping to the upper right. It uses a two step loop
to move one square to the upper right, for an escape velocity
of \(\frac{\sqrt{2}}{2}\).

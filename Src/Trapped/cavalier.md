# Cavalier

<div class = "movement">
. . . . . . . . . . .
. . . . * . * . . . .
. . . . * . * . . . .
. . . . * . * . . . .
. * * * u . u * * * .
. . . . . S . . . . .
. * * * u . u * * * .
. . . . * . * . . . .
. . . . * . * . . . .
. . . . * . * . . . .
. . . . . . . . . . .
Arrow: 5,5 4,4  4,0
Arrow: 5,5 4,4  0,4
Arrow: 5,5 6,4  6,0
Arrow: 5,5 6,4 10,4
Arrow: 5,5 6,6 10,6
Arrow: 5,5 6,6  6,10
Arrow: 5,5 4,6  0,6
Arrow: 5,5 4,6  4,10
</div>

The **Cavalier** moves one square diagonally, then slides over any
zero number of squares orthogonally outward. It may not land next
to its starting square (so, it needs to slide at least one square
orthogonally). That is, it makes a step like a %%FERZ%%, followed 
by a %%ROOK%% move, whether the latter moves away from the starting square.
The %%ROOK%% moves must happen, the **Cavalier** cannot finish its move
on the %%FERZ%% move.

Compare with the [*Octopus*](octopus.html), which moves in the
same way as the **Cavalier**, except that it may finish its
move next to its starting square.

|====
%%PIECE_INFO%%
  **Cavalier**
& %%RENN_CHESS%%
& This is a different piece than the [*Cavalier*](strong_chariot.html)
  from %%TAIKYOKU%%. The [*Mao*](mao.html) goes by the name of *Cavalier*
  as well.
====|

### Spiral

#### Square

On the Square Spiral, the **Cavalier** is trapped after 102 steps.

#### Diamond

On the Diamond Spiral, the **Cavalier** is trapped after 56 steps.

### Wedge

#### Folded

On the Folded Wedge, the **Cavalier** is trapped after a mere 12 steps.

#### Flat

On the Flat Wedge, the **Cavalier** escapes, hugging the left hand side
of the wedge, using a zigzag pattern to up one step diagonally every
second move, giving it an escape velocity of \(\frac{\sqrt{2}}{2}\).

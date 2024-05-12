# Octopus

<div class = "movement">
. . . . . . . . . . .
. . . . * . * . . . .
. . . . * . * . . . .
. . . . * . * . . . .
. * * * * . * * * * .
. . . . . S . . . . .
. * * * * . * * * * .
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

The **Octopus** first steps one square diagonally (like the
[*Ferz*](ferz.html)), then slides zero or more squares 
orthogonally outward (like the [*Rook*](rook.html)).

Compare with the [*Cavalier*](cavalier.html), which moves in the
same way as the **Octopus**, except that it may not finish its
move next to its starting square.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%GANYMEDE%%
& {cs = 2}  **Griffon**
&           %%PROMOTES_TO%% [*Roc*](roc.html) \\
  {th = 1}  %%SCIROCCO%%
& {cs = 2}  **Octopus**
&           %%PROMOTED%% [*Chariot*](chariot.html) \\
====|

### Spiral

#### Square

After bouncing around for the first couple of steps, all 
squares the **Octopus** vists are on the two main diagonals.
This makes it an escaping piece, but one which escapes 
in multiple directions; a feat not many pieces share.
The **Octopus** uses a 20 step loop (5 revolutions around
the origin) to move 7 squares diagonally outward (on all
diagonals). This means an escape velocity of 
\(\frac{7 \sqrt{2}}{20}\).

#### Diamond

On the Diamond Spiral, the **Octopus** gets trapped after 52 steps.

### Wedge

#### Folded

On the Folded Wedge, the **Octopus** gets trapped on step 7!

#### Flat

On the Flat Wedge, the **Octopus** only visits the right most
square of each row, escaping by sticking to the boundary.
The escape velocity is \(\sqrt{2}\).

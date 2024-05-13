# Spider

<div class = "movement">
. . . . . . . . . . .
. . * . . . . . * . .
. * . * . . . * . * .
. . * . * . * . * . .
. . . * . * . * . . .
. . . . * S * . . . .
. . . * . * . * . . .
. . * . * . * . * . .
. * . * . . . * . * .
. . * . . . . . * . .
. . . . . . . . . . .
Arrow: 5,5 4,5  0,1
Arrow: 5,5 4,5  0,9
Arrow: 5,5 5,4  9,0
Arrow: 5,5 5,4  1,0
Arrow: 5,5 6,5 10,1
Arrow: 5,5 6,5 10,9
Arrow: 5,5 5,6  9,10
Arrow: 5,5 5,6  1,10
</div>

The **Spider** first moves one square orthogonally (like the
[*Wazir*](wazir.html)), then zero or more squares diagonally
outwards (like the [*Bishop*](bishop.html)).

Compare with the [*Duke*](duke_renn.html), which moves in a
similar way, except it cannot finish its move on a square
next to the square the piece starts from.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2}  **Spider**
&           %%PROMOTED%% [*Wagon*](wagon.html) \\
====|

### Spiral

#### Square

The **Spider** can move like the [*Wazir*](wazir.html), so
it just follows to Spiral.

#### Diamond

On the Diamond Spiral, the **Spider** follows a unique pattern
to eventually visit \(100\%\) of the squares on the board, but
it has a strong bias on which squares to visit first.

### Wedge

#### Folded

The **Spider** gets trapped after no more than 10 steps!

#### Flat

On the Flat Wedge, the **Spider** escapes to infinity by
visiting the two right most squares on each row, with
as escape velocity of \(\frac{\sqrt{2}}{2}\).

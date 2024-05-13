# Roc

<div class = "movement">
. . . . . . . . A . . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . * * * . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . * * * . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . * * * . . . . . . .
. * * * * * * * . * * * * * * * .
A . * . * . * . S . * . * . * . A
. * * * * * * * . * * * * * * * .
. . . . . . . * * * . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . * * * . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . * * * . . . . . . .
. . . . . . . * . * . . . . . . .
. . . . . . . . A . . . . . . . .
Arrow: 8,8 7,7  7,0
Arrow: 8,8 7,7  0,7
Arrow: 8,8 7,9  7,16
Arrow: 8,8 7,9  0,9
Arrow: 8,8 9,9  9,16
Arrow: 8,8 9,9 16,9
Arrow: 8,8 9,7 16,7
Arrow: 8,8 9,7  9,0
</div>

The **Roc** either moves as the [*Octopus*](octopus.html)
or as a [*Dabbabarider*](dabbabarider.html). That is, it either moves
one square diagonally (like a %%FERZ%%) followed by sliding zero or
more unoccupied squares orthogonally outward (like a %%ROOK%%), or
it moves an even number of squares orthogonally, where the even squares
is moves over must be unoccupied (but the odd squares may be occupied).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%GANYMEDE%%
& {cs = 2}  **Roc**
&           %%PROMOTED%% [*Griffon*](octopus.html?piece=griffon) \\
====|

### Spiral

#### Square

The **Roc** uses a simple square spiralling pattern to visit half
the squares on each row and file.

#### Diamond

The **Roc** uses a simple pattern in the form of a dented diamond,
spiralling outward to visit every square on the board. For each
revolution, all steps made are %%FERZ%% moves, except one.

### Wedge

#### Folded

The **Roc** visits all odd squares on each row. The board is
travelled on row by row. Half the squares on the board will be
visited.

#### Flat

The **Roc** visits all odd squares on each row. The board is
travelled on row by row. Half the squares on the board will be
visited. The pattern of visited squares is different from the
pattern used on the Folded Wedge.

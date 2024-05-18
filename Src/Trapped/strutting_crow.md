# Strutting Crow

<div class = "movement">
. . . . .
. . * . .
. . S . .
. * . * .
. . . . .
Shogi: 1
</div>

The **Strutting Crow** either moves one square orthogonally forward
(like a forward %%WAZIR%%), or
one square diagonally backward (like a backward %%FERZ%%).

This mirrors the movement of the [*Tile General*](tile_general.html).

|====
%%PIECE_INFO%%
  **Old Rat**
& %%TAIKYOKU%%
& \\

  **Strutting Crow**
& %%TAIKYOKU%%; %%WA_SHOGI%%
& \\
  
  **Swooping Owl**
& %%TAIKYOKU%%; %%WA_SHOGI%%
& \\
====|

### Spiral

#### Square

The **Strutting Crow** circles around the origin once, then escapes to the
upper left by visiting three squares of reach row and column. This
three step loop to move one square to the upper left implies an
escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Diamond

On the Diamond Spiral, the **Strutting Crow** uses an eight step loop
(two four step parts which are mirror images of each other), to
move four squares downward. Only visited squares are restricted
to two files, and only the two visited squares to lie below the origin.
The escape velocity is \(\frac{1}{2}\).

### Wedge

#### Folded

The **Strutting Crow** escapes to the upper left by visiting three
squares of reach row and column. It uses the same three step loop
as it uses on the Square Spiral, with an escape velocity of
\(\frac{\sqrt{2}}{3}\).

#### Flat

The **Strutting Crow** escapes to the upper right by visiting three
squares of reach row and column. This is a mirror image of how
%%PIECE%% moves on the Folded Wedge -- hence the escape velocity
is also \(\frac{\sqrt{2}}{3}\).

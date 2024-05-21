# Deva

<div class = "movement">
. . . . .
. * * . .
. * S * .
. * * * .
. . . . .
Shogi: 1
</div>

The **Deva** moves one square in any direction, except diagonally
right forward.

The **Deva** moves mirror the moves of the [*Dark Spirit*](dark_spirit.html).

|====
%%PIECE_INFO%%
  **Deva**
& %%TAIKYOKU%%
& \\
====|
     
### Spiral

#### Square

The **Deva** can move like the %%WAZIR%%, hence it visits every square
by just following the Spiral.

#### Diamond

The **Deva** visits every square on the board. The path it follows
never intersects itself, and alternates between going clockwise
and counter clockwise.

### Wedge

#### Folded

The **Deva** visits every square on the board following a path
which never intersects itself.

#### Flat

The **Deva** escapes with a velocity of %%SQRT_2_OVER_2%%. The two
right most squares of every row are visited.

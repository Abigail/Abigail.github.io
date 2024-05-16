# Stag Rose

<div class = "movement">
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . * . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . * . . . . . . . * . . . . . . . * . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . * . . . . . . . . . . . * . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . . . * . . . * . . . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. * . . . * . . . . . . . S . . . . . . . * . . . * .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . . . * . . . * . . . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . * . . . . . . . . . . . * . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . * . . . . . . . * . . . . . . . * . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . * . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . .
Line: 13,13 17,15 19,19 17,23 13,25  9,23  7,19  9,15 13,13
Line: 13,13 15,17 13,21  9,23  5,21  3,17  5,13  9,11 13,13
Line: 13,13 11,17  7,19  3,17  1,13  3,9   7,7  11,9  13,13
Line: 13,13  9,15  5,13  3,9   5,5   9,3  13,5  15,9  13,13
Line: 13,13  9,11  7,7   9,3  13,1  17,3  19,7  17,11 13,13
Line: 13,13 11,9  13,5  17,3  21,5  23,9  21,13 17,15 13,13
Line: 13,13 15,9  19,7  23,9  25,13 23,17 19,19 15,17 13,13
Line: 13,13 17,11 21,13 23,17 21,21 17,23 13,21 11,17 13,13
</div>


The **Stag Rose** makes repeated [*Stag*](stag.html) steps, but unlike the 
[*Stag Rider*](stag_rider.html), the **Stag Rose** turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the **Stag Rose** can reach 32 different squares, assuming
all squares are unoccupied. It needs a board with sizes at least 25x25 
to be able to reach all the squares.

Just like the [*Stag*](stag.html), the
**Stag Rose** is %%COLOUR_BOUND%%, and will only visit squares of the
same colour as the square it starts on.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Stag Rose**
&           \\
====|
      
### Spiral

#### Square

On the Square Spiral, the **Stag Rose** moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

#### Diamond

On the Diamond Spiral, the **Stag Rose** moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

### Wedge

#### Folded

The **Stag Rose** fills the Folded Wedge for 50%, working on just
a few rows at the time.

#### Flat

The **Stag Rose** fills the Flat Wedge for 50%, working on just
a few rows at the time.

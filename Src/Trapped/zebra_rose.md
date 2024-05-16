# Zebra Rose

<div class = "movement">
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . * . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . * . . . . . * . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . * . . . . . * . . . . . * . . . . .
. . . . . . * . . . . . . . . . * . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . * . . . * . . . . . * . . .
. . . . . . . . * . . . . . * . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. * . . . * . . . . . S . . . . . * . . . * .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . * . . . . . * . . . . . . . .
. . . * . . . . . * . . . * . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . * . . . . . . . . . * . . . . . .
. . . . . * . . . . . * . . . . . * . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . * . . . . . * . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . * . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
Line: 11,11 14,13 16,16 14,19 11,21  8,19  6,16  8,13 11,11
Line: 11,11 13,14 11,17  8,19  5,17  3,14  5,11  8,9  11,11
Line: 11,11  9,14  6,16  3,14  1,11  3,8   6,6   9,8  11,11
Line: 11,11  8,13  5,11  3,8   5,5   8,3  11,5  13,8  11,11
Line: 11,11  8,9   6,6   8,3  11,1  14,3  16,6  14,9  11,11
Line: 11,11  9,8  11,5  14,3  17,5  19,8  17,11 14,13 11,11
Line: 11,11 13,8  16,6  19,8  21,11 19,14 16,16 13,14 11,11
Line: 11,11 14,9  17,11 19,14 17,17 14,19 11,17  9,14 11,11
</div>

The **Zebra Rose** makes repeated [*Zebra*](zebra.html) steps, but unlike the 
[*Zebra Rider*](zebrarider.html), the **Zebra Rose** turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the **Zebra Rose** can reach 32 different squares, assuming
all squares are unoccupied. It needs to board sized at least 21x21
to be able to reach 32 different squares.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Zebra Rose**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Zebra Rose** moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

#### Diamond

On the Diamond Spiral, the **Zebra Rose** moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

### Wedge

#### Folded

The **Zebra Rose** seems to fill the Folded Wedge completely, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

The **Zebra Rose** get trapped after a mere 86 steps.


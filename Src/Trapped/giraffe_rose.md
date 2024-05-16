# Giraffe Rose

<div class = "movement">
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . * . . . . . . . . . . .
. . . . . . . * . . . . . . . * . . . . . . .
. . . * . . . . . . . * . . . . . . . * . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . * . . . . . . . . . * . . . . . .
. . * . . . . . . . * . * . . . . . . . * . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . * . . . . . . . * . . . . . . .
. * . * . . . . . . . S . . . . . . . * . * .
. . . . . . . * . . . . . . . * . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . * . . . . . . . * . * . . . . . . . * . .
. . . . . . * . . . . . . . . . * . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
. . . * . . . . . . . * . . . . . . . * . . .
. . . . . . . * . . . . . . . * . . . . . . .
. . . . . . . . . . . * . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . .
Line: 11,11 15,12 16,16 15,20 11,21  7,20  6,16  7,12 11,11
Line: 11,11 12,15 11,19  7,20  3,19  2,15  3,11  7,10 11,11
Line: 11,11 10,15  6,16  2,15  1,11  2,7   6,6  10,7  11,11
Line: 11,11  7,12  3,11  2,7   3,3   7,2  11,3  12,7  11,11
Line: 11,11  7,10  6,6   7,2  11,1  15,2  16,6  15,10 11,11
Line: 11,11 10,7  11,3  15,2  19,3  20,7  19,11 15,12 11,11
Line: 11,11 12,7  16,6  20,7  21,11 20,15 16,16 12,15 11,11
Line: 11,11 15,10 19,11 20,15 19,19 15,20 11,19 10,15 11,11
</div>

The **Giraffe Rose** makes repeated [*Giraffe*](giraffe.html) steps,
but unlike the [*Giraffe Rider*](giraffe_rider.html), the **Giraffe
Rose** turns on each step (the minimum turn possible). After 8 such
steps, it is back at the square it started on. Given that it start
in 8 directions, and move either clockwise or counter-clockwise,
it can reach quite a number of squares in one move. (Each square
of its in between steps need to be unoccupied though). On a large
enough board, away from any borders, the **Giraffe Rose** can reach
32 different squares, assuming all squares are unoccupied. It needs
a board sized at least 19x19 to reach its full potential.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Giraffe Rose**
&           \\
====|
      
### Spiral

#### Square

On the Square Spiral, the **Giraffe Rose** moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

#### Diamond

On the Diamond Spiral, the **Giraffe Rose** moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

### Wedge

#### Folded

The **Giraffe Rose** seems to fill the Folded Wedge completely, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

The **Giraffe Rose** seems to fill the Folded Wedge completely, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.


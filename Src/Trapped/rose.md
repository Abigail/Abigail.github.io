# Rose

<div class = "movement">
. . . . . . . . . . . . . . .
. . . . . . . * . . . . . . .
. . . . . * . . . * . . . . .
. . . * . . . * . . . * . . .
. . . . * . . . . . * . . . .
. . * . . . * . * . . . * . .
. . . . . * . . . * . . . . .
. * . * . . . S . . . * . * .
. . . . . * . . . * . . . . .
. . * . . . * . * . . . * . .
. . . . * . . . . . * . . . .
. . . * . . . * . . . * . . .
. . . . . * . . . * . . . . .
. . . . . . . * . . . . . . .
. . . . . . . . . . . . . . .
Line:  7,7  6,9  4,10   2,9   1,7   2,5   4,4  6,5   7,7
Line:  7,7  5,8  3,7    2,5   3,3   5,2   7,3  8,5   7,7
Line:  7,7  5,6  4,4    5,2   7,1   9,2  10,4  9,6   7,7
Line:  7,7  6,5  7,3    9,2  11,3  12,5  11,7  9,8   7,7
Line:  7,7  8,5 10,4   12,5  13,7  12,9  10,10 8,9   7,7
Line:  7,7  9,6 11,7   12,9  11,11  9,12  7,11 6,9   7,7
Line:  7,7  9,8 10,10   9,12  7,13  5,12  4,10 5,8   7,7
Line:  7,7  8,9  7,11   5,12  3,11  2,9   3,7  5,6   7,7
</div>


The **Rose** makes repeated %%KNIGHT%% steps, but unlike the 
[*Nightrider*](nightrider.html), the **Rose** turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the **Rose** can reach 32 different squares, assuming
all squares are unoccupied.

It needs a board of size at least 13x13 to be able to reach 32
different squares.

|====
%%PIECE_HEADERS%%
  {th = 1}  Problemists
& {rs = 2; cs = 2}
            **Rose**
&           \\
  {th = 1}  [Chess on a Really Big Board](https://www.chessvariants.com/d.betza/chessvar/16x16.html)
&           \\

====|
      
Link: [%%CHESS_V%%](#piece:rose)

### Spiral

#### Square

On the Square Spiral, the **Rose** moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

#### Diamond

On the Diamond Spiral, the **Rose** moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

### Wedge

#### Folded

The **Rose** seems to fill the Folded Wedge completely, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

Suprisingly, on the Flat Wedge, the **Rose** gets trapped after no
more than 39 steps.

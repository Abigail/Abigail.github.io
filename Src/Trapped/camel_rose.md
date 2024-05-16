# Camel Rose

<div class = "movement">
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . * . . . . . . . . .
. . . . . . * . . . . . * . . . . . .
. . . * . . . . . * . . . . . * . . .
. . . . . . . . . . . . . . . . . . .
. . . . . * . . . . . . . * . . . . .
. . * . . . . . * . * . . . . . * . .
. . . . . . . . . . . . . . . . . . .
. . . . . . * . . . . . * . . . . . .
. * . * . . . . . S . . . . . * . * .
. . . . . . * . . . . . * . . . . . .
. . . . . . . . . . . . . . . . . . .
. . * . . . . . * . * . . . . . * . .
. . . . . * . . . . . . . * . . . . .
. . . . . . . . . . . . . . . . . . .
. . . * . . . . . * . . . . . * . . .
. . . . . . * . . . . . * . . . . . .
. . . . . . . . . * . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
Line: 9,9 12,10 13,13 12,16  9,17  6,16  5,13  6,10  9,9 
Line: 9,9 10,12  9,15  6,16  3,15  2,12  3,9   6,8   9,9 
Line: 9,9  8,12  5,13  2,12  1,9   2,6   5,5   8,6   9,9 
Line: 9,9  6,10  3,9   2,6   3,3   6,2   9,3  10,6   9,9 
Line: 9,9  6,8   5,5   6,2   9,1  12,2  13,5  12,8   9,9 
Line: 9,9  8,6   9,3  12,2  15,3  16,6  15,9  12,10  9,9 
Line: 9,9 10,6  13,5  16,6  17,9  16,12 13,13 10,12  9,9 
Line: 9,9 12,8  15,9  16,12 15,15 12,16  9,15  8,12  9,9
</div>

The **Camel Rose** makes repeated [*Camel*](camel.html) steps, but unlike the 
[*Camel Rider*](camel_rider.html), the **Camel Rose** turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the **Camel Rose** can reach 32 different squares, assuming
all squares are unoccupied. It needs a board of size at least 17x17
to be able to reach 32 different squares.

Just like the [*Camel*](camel.html), the
**Camel Rose** is %%COLOUR_BOUND%%, and will only visit squares of the
same colour as the square it starts on.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Camel Rose**
&           \\
====|
      
### Spiral

#### Square

On the Square Spiral, the **Camel Rose** moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

#### Diamond

On the Diamond Spiral, the **Camel Rose** moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

### Wedge

#### Folded

The **Camel Rose** seems to fill the Folded Wedge for 50%, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

The **Camel Rose** seems to fill the Flat Wedge for 50%, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.


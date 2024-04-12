# %%PIECE%%

The %%PIECE%% makes repeated *Camel*](camel.html) steps, but unlike the 
[*Camel Rider*](camel_rider.html), the %%PIECE%% turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the %%PIECE%% can reach 32 different squares, assuming
all squares are unoccupied. Just like the [*Camel*](camel.html), the
%%PIECE%% is %%COLOUR_BOUND%%, and will only visit squares of the
same colour as the square it starts on.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Camel Rose**
&           \\
====|
      
See also the [*Rose*](rose.html).

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

#### Diamond

On the Diamond Spiral, the %%PIECE%% moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.
It appears to visit 50% of the squares.

### Wedge

#### Folded

The %%PIECE%% seems to fill the Folded Wedge for 50%, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

The %%PIECE%% seems to fill the Flat Wedge for 50%, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.


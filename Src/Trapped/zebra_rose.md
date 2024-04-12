# %%PIECE%%

The %%PIECE%% makes repeated [*Zebra*](zebra.html) steps, but unlike the 
[*Zebra Rider*](zebra_rider.html), the %%PIECE%% turns on each step
(the minimum turn possible). After 8 such steps, it is back at
the square it started on. Given that it start in 8 directions,
and move either clockwise or counter-clockwise, it can reach
quite a number of squares in one move. (Each square of its in between
steps need to be unoccupied though). On a large enough board, away from 
any borders, the %%PIECE%% can reach 32 different squares, assuming
all squares are unoccupied.

|====
%%PIECE_HEADERS%%
  {th = 1}
& {rs = 1; cs = 2}
            **Zebra Rose**
&           \\
====|
      
See also the [*Rose*](rose.html).

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% moves outward, keeping always a 
near square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

#### Diamond

On the Diamond Spiral, the %%PIECE%% moves outward, keeping always a 
near, rotated, square as the boundary of squares visited. It probably won't
get trapped, and certainly doesn't do in its first 10,000 steps.

### Wedge

#### Folded

The %%PIECE%% seems to fill the Folded Wedge completely, working on just
a few rows at the time. It probably won't get trapped, and it certainly
doesn't do so in its first 10,000 steps.

#### Flat

The %%PIECE%% get trapped after a mere 86 steps.


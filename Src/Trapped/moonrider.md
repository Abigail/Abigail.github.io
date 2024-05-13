# %%PIECE%%

<div class = "movement">
. . . . A . . . . . . . A . . . .
. . . . . . . . . . . . . . . . .
. . . . . * . . . . . * . . . . .
. . . . . . . . . . . . . . . . .
A . . . . . * . . . * . . . . . A
. . * . . . * . . . * . . . * . .
. . . . * * . * . * . * * . . . .
. . . . . . * . . . * . . . . . .
. . . . . . . . S . . . . . . . .
. . . . . . * . . . * . . . . . .
. . . . * * . * . * . * * . . . .
. . * . . . * . . . * . . . * . .
A . . . . . * . . . * . . . . . A
. . . . . . . . . . . . . . . . .
. . . . . * . . . . . * . . . . .
. . . . . . . . . . . . . . . . .
. . . . A . . . . . . . A . . . .
</div>

The %%PIECE%% either moves as the [*Zebra*](zebra.html), or as
the [*Nightrider*](nightrider.html). That is, it either jumps
to a square which is two away in one orthogonal direction,
and three in the other, or it makes one or more %%KNIGHT%% jumps,
provided they are all in the same direction, and each intermediate
jump lands on an unoccupied square.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%GANYMEDE%%
& {cs = 2}  **Moonrider**
&           %%PROMOTED%% [*Nightrider*](nightrider.html) \\
====|

### Spiral

#### Square

The %%PIECE%% bounces around for some time, only to get trapped
on step 26,637.

#### Diamond

On the Diamond Spiral, it takes longer for the %%PIECE%% to get
trapped -- it does get trapped on step 44,236.

### Wedge

#### Folded

The %%PIECE%% does not get trapped on its first billion moves,
but it's not clear whether it remain free for ever.

#### Flat

It takes a long time for %%PIECE%% to get trapped, but eventually
it does, on step 21,401,163.

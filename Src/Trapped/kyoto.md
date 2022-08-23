# %%PIECE%%

The %%PIECE%% alternates moving as the
[*Tokin*](gold_general.html?piece=tokin) and
the [*Lance*](lance.html), starting with the former.
This means, on odd moves, the %%PIECE%% moves one square 
orthogonally, or one square diagonally forward, and on
even moves, the %%PIECE%% slides an unlimited number of
squares orthogonally forward.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%KYOTO_SHOGI%%
& {cs = 2}  **Ky&#x014D;to**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% escapes to the upper right using
a step wise pattern. Its using a two step loop to move to a square
one away to the upper right. Which results in an escape velocity
of \(\frac{2}{2}\).

#### Diamond

On the Diamond Spiral, the %%PIECE%% escapes upward, using a four
step loop to move two square upward. This means an escape velocity 
of \(\frac{1}{2}\).

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% escape upwards, byt visiting
all the squares (but one) of the file the origin is on, and
the file just left of it. It uses a block like pattern to do so.
This results in an escape velocity of \(\frac{1}{2}\).

#### Flat

On the Flat Wedge, the %%PIECE%% escapes to the upper right
by visiting the two right most squares of each row (except
the first two). This is an escape velocity of \(\frac{\sqrt{2}}{2}\).

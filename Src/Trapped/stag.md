# %%PIECE%%

The %%PIECE%% is a (4,2)-%%LEAPER%%; that is, on each move it moves
to a square which is four away in one orthogonal direction, and
two away in the other. (It moves in the same directions as the
[*Knight*](knight.html), but twice as far).

This makes the %%PIECE%% not only %%COLOUR_BOUND%%, it means it can
only reach squares which are both on even row, and an even file.
Hence, it can only reach 11.1% of the squares on the board.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%LEAPERS%%
& {cs = 2}  **Stag**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% moves exactly as the %%KNIGHT%%,
but with the path blown up by a factor of two. It gets trapped on
step 2,015.

#### Diamond

Just like the %%KNIGHT%%, the %%PIECE%% gets trapped after 3,722 steps.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% bounces around for a couple of
moves before it falls into a pattern where it visits four out of
the last seven squares of each second row. It uses a four step loop
to move two square forward and to the right. This gives it an
escape velocity of \(\frac{\sqrt{2}}{2}\).

#### Flat

On the Flat Wedge, the %%PIECE%% moves in exactly the same was as
on the Folded Wedge -- which isn't very surprising as the %%PIECE%%
only visits the even rows, and the even rows on the Flat Wedge are
the same as on the Folded Wedge. Hence the escape velocity is
\(\frac{\sqrt{2}}{2}\).

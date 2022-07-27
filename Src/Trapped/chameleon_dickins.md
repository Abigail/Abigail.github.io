# %%PIECE%%

The %%PIECE%% changes the way it move on each step. Its first step,
it moves like a [*Knight*](knight.html), then like a 
[*Bishop*](bishop.html), then like a [*Rook*](rook.html), and
finally like a [*Queen*](queen.html), before starting the cycle again.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%DICKENS%%
& {cs = 2}  **Chameleon**
&
====|

### Spiral

#### Square

The %%PIECE%% gets trapped quickly on the Square Spiral -- after a 
mere 62 steps, it's trapped. This is dispite three of its four
different moves don't trap a piece.

#### Diamond

On the Diamond Spiral, the %%PIECE%% isn't free for much longer; it
gets trapped after 98 steps.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% does not take more than 16 steps
before it gets trapped.

#### Flat

On the Flat Wedge, the %%PIECE%% uses an 8 step loop to move to
a square which lies two to the upper right from where it started
the loop, giving an escape velocity of \(\frac{\sqrt{2}}{4}\).
While escaping to the upper right, if visits the four
right most squares of each row.

# %%PIECE%%

The %%PIECE%% either jumps to a square two away on a forward
diagonal (like a forward [*Alfil*](alfil.html), or to a square
two orthogonally backwards (like a backward [*Dabbaba*](dabbaba.html).
This makes the %%PIECE%% %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TORI_SHOGI%%
& {cs = 1}  **Goose** & &#x9d08;
&           %%PROMOTED%% [*Swallow*](pawn.html?piece=swallow);
            The **Goose** does not appear in the starting array. \\
====|

### Spiral

#### Square

The first 30 steps, the %%PIECE%% bounces around, and then
gets into a pattern where it visits three squares (with one
unvisited square in between) every second row. Following this
pattern, the %%PIECE%% escapes to the lower right. It uses a 
three step loop to move two squares down and to the right,
giving it an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Diamond

The %%PIECE%% uses an eight step loop to move eight squares upward,
visiting squares in only two files. This gives it an escape speed
of \(1\).

### Wedge

On both the Folded and Flat Wedge, the %%PIECE%% visits the right most
square on each second row, and no other squares. It escapes hugging the
right edge of the Wedge, with an escape speed of 
\(2 \sqrt{2}\).

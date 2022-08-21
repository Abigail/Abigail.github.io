# %%PIECE%%

The %%PIECE%% is a (2,0)-leaper. That is, the %%PIECE%% jumps
two squares orthogonally. It can jump over an unoccupied square.
This makes the %%PIECE%% %%COLOUR_BOUND%%.
It also keeps parity in both its row and file.
This means, if it starts on an even row (or file), it will remain
on an even row (of file). And if it starts on an odd row (of file),
it will remain on an odd row (or file).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%LEAPERS%%
& {cs = 2;rs = 3}  **Dabbaba**
&           \\
  {th = 1}  %%SCIROCCO%%
&           %%PROMOTES_TO%% [*Genie*](genie.html) \\
  {th = 1}  %%TYPHOON%%
&           %%PROMOTES_TO%%
             [*Dragon Kite*](dragon_king.html?piece=dragon_kite) \\
====|

The name is infrequently used for the [Rook + Knight compound](chancellor.md).

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% acts like a [*Wazir*](wazir.html), except
that it skips all odd rows and odd files. Hence, it fills 25% of
the board.

#### Diamond

Just like on the Square Spiral, on the Diamond Spiral, the %%PIECE%%
acts like a [*Wazir*](wazir.html), except that it skips all odd rows
and odd files. The path traced is a mirror image of the path traced
on the Square Spiral. 25% of all the squares on the board will be visited.

### Wedge

On both the Folded and Flat Wedge, the %%PIECE%% escapes using
a stepwise pattern: it visits the right most, and third square
from the right, of each second row, with an escape velocity of
\(\sqrt{2}\).

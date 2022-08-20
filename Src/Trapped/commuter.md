# %%PIECE%%

The %%PIECE%% is a [(4,4)-leaper](leapers.html#basic_leapers).
That is, it jumps to a square
which is 4 squares away in any diagonal direction. Since it only
moves on diagonals, the %%PIECE%% is %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%BASIC_LEAPERS%%
& {cs = 2}  **Commuter**
&           \\
====|


### Spiral

#### Square

The %%PIECE%% follows the same path as the [*Ferz*](ferz.html),
except blown up by a factor of three. As such, it visits 
\(\frac{1}{2} \cdot \frac{1}{4^2} = \frac{1}{32} = 3.125\%\)
of the squares.

#### Diamond

On the Diamond Spiral, the %%PIECE%% also follows the same path
the [*Ferz*](ferz.html), and blown up by a factor of three. This
path is the mirror image of the path followed on the Square Spiral.
Hence, \(3.125\%\) of the squares will be visited.

### Wedge

On both the Folded and Flat Wedge, the %%PIECE%% follows a path along the
right edge of the Wedge, visiting the right most square of each fourth row.
This gives an escape velocity of \(4 \sqrt{2}\).

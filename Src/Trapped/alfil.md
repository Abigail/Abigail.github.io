# Alfil

<div class = "movement">
. . . . . . .
. * . . . * .
. . . . . . .
. . . S . . .
. . . . . . .
. * . . . * .
. . . . . . .
</div>

The **Alfil** is a [*(2,2)-leaper*](leapers.html#basic_leapers).
On each step, it jumps to a square
which is two away diagonally. It can jump over an occupied square.
This makes the **Alfil** %%COLOUR_BOUND%%.

The **Alfil** is more limited than just being
%%COLOUR_BOUND%%. If we give its
starting square the coordinates \((0, 0)\), then the only squares
it can reach are the squares \((x, y)\) such that \(x\) is even,
\(y\) is even, and \(x + y\) is a multiple of \(4\).

The name **Alfil** is derived from the Persian word for *Elephant*,
and the piece appeared in the game of [Shatranj](#wiki) as the
*Elephant*. Hence the depiction of the **Alfil** as an elephant.
The proposed Unicode symbol for the **Alfil** looks like an elephant.

There are several pieces which move like the **Alfil**. 

|====
%%PIECE_HEADERS%%
  {th = 1}  %%BASIC_LEAPERS%%
& {cs = 2; rs = 3}  **Alfil**
&           \\
  {th = 1}  %%SCIROCCO%%
&           %%PROMOTES_TO%% [*Bishop*](bishop.html) \\
  {th = 1}  %%TYPHOON%%
&           %%PROMOTES_TO%% [*Scirocco*](scirocco.html) \\
  {th = 1}  %%SENTEREJ%%
& {cs = 2}  **Saba**
&           *Saba* meaning *Elephant* \\
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2}  **Stork** 
&           %%PROMOTES_TO%% [*Queen*](queen.html); %%CAPTURE%% \\
====|

Link: [%%CHESS_V%%](#chess-v:alfil)

### Spiral

#### Square

On the Square Spiral, the **Alfil** moves in a similar fashion as the
[*Ferz*](ferz.html), except that it's path is blown up by a factor two.
It will visit all the squares of the board which satisfy the condition
above. As such, the **Alfil** visits \(12.5\%\) of the board.

#### Diamond

On the Diamond Spiral, the **Alfil** moves in the same way as on the
Square Spiral, visiting \(12.5\%\) of the board.

### Wedge

On both the Folded and Flat Wedge, the **Alfil** escapes to infinity
by visiting the right most square of each second row. This means an
escape velocity of \(2 \sqrt{2}\).

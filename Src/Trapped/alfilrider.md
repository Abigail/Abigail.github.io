# %%PIECE%%

The %%PIECE%% moves like a [*Bishop*](bishop.html), except that
it skips every other square. This means, on each move, it can
move an unlimited, *even* number of squares in each of the four
diagonal directions, under the condition each each second square
is empty (it can jump over occupied squares which are an odd
number of squares away from the starting position). The
%%PIECE%% is %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%RIDERS%%
& {cs = 2}  **Alfilrider** 
&           \\
====|

### Spiral

#### Square

On both the Square Spiral, the %%PIECE%% moves in a similar
way as the [*Bishop*](bishop.html) does, but its path "blown up" by a factor
of two. As such, it will visit
\(\frac{1}{8} \cdot (\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{5}{64} = 7.8125 \%\)
of the squares on the board.

#### Diamond

On the Diamond Spiral the %%PIECE%% moves in the same way as the
[*Alfil*](alfil.html), visiting \(12.5\%\) of the squares on the board.

### Wedge

On both the Folded Wedge and the Flat Wedge, the %%PIECE%% escapes
to infinity in a straight line, hugging the right side of the Wedge,
visiting the right most square of every second row. This gives an
escape velocity of \(2 \sqrt{2}\).


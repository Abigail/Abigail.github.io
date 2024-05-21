# Alfilrider

<div class = "movement">
A . . . . . . . . . . . . . A
. * . . . . . . . . . . . * .
. . . . . . . . . . . . . . .
. . . * . . . . . . . * . . .
. . . . . . . . . . . . . . .
. . . . . * . . . * . . . . .
. . . . . . . . . . . . . . .
. . . . . . . S . . . . . . .
. . . . . . . . . . . . . . .
. . . . . * . . . * . . . . .
. . . . . . . . . . . . . . .
. . . * . . . . . . . * . . .
. . . . . . . . . . . . . . .
. * . . . . . . . . . . . * .
A . . . . . . . . . . . . . A
</div>

The **Alfilrider** moves like a [*Bishop*](bishop.html), except that
it skips every other square. This means, on each move, it can
move an unlimited, *even* number of squares in each of the four
diagonal directions, under the condition each each second square
is empty (it can jump over occupied squares which are an odd
number of squares away from the starting position). The
**Alfilrider** is %%COLOUR_BOUND%%.

|====
%%PIECE_INFO%%
  **Alfilrider** 
& %%RIDERS%%
& \\
====|

### Spiral

#### Square

On the Square Spiral, the **Alfilrider** moves in a similar
way as the [*Bishop*](bishop.html) does, but its path "blown up" by a factor
of two. As such, it will visit
\(\frac{1}{8} \cdot (\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{5}{64} = 7.8125 \%\)
of the squares on the board.

#### Diamond

On the Diamond Spiral the **Alfilrider** moves in the same way as the
[*Alfil*](alfil.html), visiting \(12.5\%\) of the squares on the board.

### Wedge

On both the Folded Wedge and the Flat Wedge, the **Alfilrider** escapes
to infinity in a straight line, hugging the right side of the Wedge,
visiting the right most square of every second row. This gives an
escape velocity of \(2 \sqrt{2}\).


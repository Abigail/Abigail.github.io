# Alfil

The **Alfil** is a (2,2)-leaper. On each step, it jumps to a square
which is two away diagonally. It can jump over an occupied square.
This makes the **Alfil**
[colourbound](#wiki:Glossary_of_chess#Colorbound) -- that is,
if it starts on a black square, it will always be on a black
square and if it starts on a white square, it will always be on
a white square.

The **Alfil** is more limited than just being
[colourbound](#wiki:Glossary_of_chess#Colorbound). If we give its
starting square the coordinates \((0, 0)\), then the only squares
it can reach are the squares \((x, y)\) such that \(x\) is even,
\(y\) is even, and \(x + y\) is a multiple of \(4\).

The **Alfil** is a piece in [Scirocco](#chess-v:rules/scirocco),
and promotes to the [*Bishop*](bishop.html). Scirocco also has
the *Stork*, which moves like the **Alfil**, and captures like
the [*Wazir*](wazir.html) (but we ignore capture moves). The
*Stork* promotes to the [*Queen*](queen.html). The **Alfil**
is also appears in [*Typhoon*](#chess-v:rules/typhoon-revised),
where it promotes to the [*Scirocco*](scirocco.html).

### Spiral

On the Spiral, the **Alfil** moves in a similar fashion as the
[*Ferz*](ferz.html), except that it's path is blown up by a factor two.
It will visit all the squares of the board which satisfy the condition
above. As such, the **Alfil** visits \(12.5\%\) of the board.

### Wedge

On both the Folded and Flat Wedge, the **Alfil** escapes to infinity
by visiting the right most square of each second row.
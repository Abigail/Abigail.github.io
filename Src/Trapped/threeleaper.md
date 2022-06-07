# Threeleaper

The **Threeleaper** is a (3,0)-leaper, that is, it can jump
to a square which is three away in an orthogonal direction.
It can jump over occupied squares.

The **Threeleaper** can only reach a small subset of the square
on a chessboard. If the starting square of the **Threeleaper**
is the square \((0, 0)\), then the only squares is can reach
are the squares \((3x, 3y)\), some some integers \(x, y\). Hence,
the **Threeleaper** can only reach \(11.1\%\) of the board.

### Spiral

On the Spiral, the **Threeleaper** visits all the squares which
satisfy the considition above. (So, \(11.1\%\) of the board).
The pattern is the same as the [*Wazir*](wazir.html), except
blown up by a factor of 3.

### Wedge

#### Folded

Just like the [*Wazir*](wazir.html) and [*Rook*](rook.html),
the **Threeleaper** gets trapped after 6 step.s

#### Flat

On the Flat Wedge, the **Threeleaper** vists two squares on
every third row, and hence, quickly escapes to infinity.


<div class = 'trapped' data-piece = 'threeleaper'></div>
<div class = 'boxset'  data-sets  = 'basic_leapers'></div>

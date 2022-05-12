# Bishop &#x2657;

Other than the [Knight](knight.html), of the traditional Chess pieces,
the Bishop
is the only one which is mildly interesting. The Bishop is a 
(1, 1)-slider. This means the Bishop can move an unlimited number
of squares in any diagonal direction -- but it cannot slide over
an occupied square. Because of its diagonal movement, a Bishop can
only cover half of a chess board: the square it starts a move from
has the same colour as the square is lands on. It's a *colour bound*
piece.

If we look at the squares the Bishop moves over under our rules,
it will circle around the starting position in the opposite direction
of the spiral, in a very regular fashion. But while the possible
moves of a Bishop are symmetric, the resulting visited squares aren't:
the bottom right hand side has more visited squares than the other
three quarters.

If we take the limit, we see that the Bishop will visit
\(\frac{7}{32} = 21.875 \%\) of the squares.

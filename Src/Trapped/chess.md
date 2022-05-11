# Chess

Chess has six different pieces: King, Queen, Rook, Bishop, Knight and Pawn.

### Knight &#x2658; 

This is the piece it all started with.

A Knight is a (1, 2)-leaper. That is, a Knight moves from a square
to a square which is 1 unit away in one direction, and 2 units away
in a direction orthogonally to the first direction. The move cannot
be blocked.

Of the traditional Chess pieces, this is the only piece which gets
trapped. Circling the starting point in an irregular way in the
opposite direction as the spiral, the Knight gets trapped after 2015 steps.

### Bishop &#x2657;

Other than the Knight, of the traditional Chess pieces, the Bishop
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

### King &#x2654;

The King can step one square away in all eight directions. This means
the King can always step the unvisited square with the lowest value:
the King simply follows the spiral. Hence, it never gets trapped, and
eventually, will visit all squares.

### Rook &#x2656;

The Rook can slide an unlimited number of squares in all four orthogonal
directions, as long as it does not slide over an occupied square. But
this means that it can, just like the King, follow the spiral one square
at a time. It will trace exactly the same path as the King does.

### Queen &#x2655;

The Queen can slide an unlimited number of squares in all eight 
directions: four orthogonal directions and four diagonal directions.
It cannot slide over occupied squares. That means, it can move like
a King, and hence, will follow the spiral, filling the complete board.

### Pawn &#x2659;

The Pawns movement is very limited. It can only move one square forward
(except the first move, where it has the option to move two squares
forward). Since we won't have other pieces on the board, it cannot move
diagonally to capture. Hence, the Pawn will always move forward, never
getting trapped.

<div class            = "trapped"
     data-name        = "chess"
     data-piece-names = "knight,bishop,king,queen,rook,pawn"> 
</div>  


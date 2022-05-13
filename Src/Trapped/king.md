# King

The Chess King (&#x2654;) can step one square away in all eight directions.
[Shogi (&#x5c06;&#x68cb;)](#wiki:Shogi) has Kings as well,
the King General (&#x738b;&#x5c07;) and Jeweled General (&#x7389;&#x5c07;),
which moves in exactly the same way. (King General and Jeweled General
are names for the same piece, but of opposite sides).

A *Mann* is a piece which moves in exactly the same way, but a Mann
is not *royal*. (Royal pieces are pieces which need lead to a loss
of the game when they are captured). Royalness however, does not
matter in our investigation.

Since the King can step in all four orthogonal directions, it can move
just like the [Wazir](wazir.html), and hence, the
the King can always step to the unvisited square with the lowest value:
the King simply follows the spiral. Hence, it never gets trapped, and
eventually, will visit all squares.

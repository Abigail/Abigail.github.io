# Free Wolf

<div class = "movement">
A . . . A . . . A
. * . . * . . * .
. . * . * . * . .
. . . * * * . . .
A * * * S * * * A
. . . . . . . . .
Shogi: 1
</div>

The **Free Wolf** can slide an unlimited number of squares in
each of the two forward diagonal directions (like a forward %%BISHOP%%),
or slide an unlimited number of squares orthogonally forward or
sideways (like a forward/horizontal %%ROOK%%).

|====
%%PIECE_INFO%%
  **Free Wolf**
& {rs = 2} %%TAIKYOKU%%
& \\

  **Running Leopard**
& \\
====|


### Spiral

#### Square

On the Spiral, the **Free Wolf** moves in an interesting and regular pattern.
Half the squares in the wedge forward of the starting square are visited,
with the number of squares visited on each row decreasing, until it reaches
a minimum, after which is visits all square of the next row (but still only
the squares inside the wedge). This means, \(12.5\%\) of the squares are
visited.

#### Diamond

On the Diamond Spiral, the **Free Wolf** uses a two step loop to advance
one square forward, giving it an escape velocity of %%HALF%%.

### Wedge

#### Folded

On the Folded Wedge, the **Free Wolf** can move like the %%FC%%,
and hence, visits all the squares on the board.

#### Flat

On the Flat Wedge, the **Free Wolf** moves very similar to how it moves
on the Spiral Square: visiting all the squares on a row, then one less on each
subsequent row until two squares on a row are visited, after it visits all
the squares on the next row, restarting the sequence. Which means the
**Free Wolf** visits \(50\%\) of the squares.

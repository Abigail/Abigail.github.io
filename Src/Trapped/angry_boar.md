# Angry Boar

<div class = "movement">
. . . . . . .
. L . . . L .
. . * * * . .
. . * S * . .
. . . . . . .
Shogi: 1
</div>

The **Angry Boar** either slides up to two unoccupied squares
diagonally forward (like a very limited forward %%BISHOP%%),
or steps one square orthogonally forward or sideward.

It turns that on the boards we're investigating, the **Angry Boar**
moves exactly as the [*Evil Wolf*](evil_wolf.html) does.

|====
%%PIECE_INFO%%
  **Angry Boar**
& %%TAIKYOKU%%
& \\

  **Violent Bear**
& %%TAIKYOKU%%
& This is one of the version of the **Violent Bear** which exist. 
  See [*Violent Bear*](violent_bear.html) for the other one.\\
====|

### Spiral

#### Square

On the Square Spiral, the **Angry Boar** visits a quarter of the squares:
the squares in the wedge in front of the starting square; row by row.

#### Diamond

On the Diamond Square, the **Angry Boar** uses a two step loop to move
one square forward. Only squares in two files will be visited. The
escape velocity is \(\frac{1}{2}\).

### Wedge

#### Folded

The **Angry Boar** can move like the %%FC%%, so it visits all the
squares of the Folded Wedge in order.

#### Flat

On the Flat Wedge, the **Angry Boar** visits the same squares as on
the Square Spiral, using the same pattern. As such, it visits all
the squares, except the two left most squares every second row.
Hence, it visits \(100\%\) of the squares.

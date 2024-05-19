# Evil Wolf

<div class = "movement">
. . . . .
. * * * .
. * S * .
. . . . .
Shogi: 1
</div>

The **Evil Wolf** either moves one square side ways, or one square
forward, either orthogonally or diagonally. The **Evil Wolf** 
combines the movements of the forward %%FERZ%% and the
forward-sideward %%WAZIR%%.

|====
%%PIECE_INFO%%
  **Evil Wolf**
& %%TAIKYOKU%%
& \\
====|
     
### Spiral

#### Square

On the Square Spiral, the **Evil Wolf** visits a quarter of the squares:
the squares in the wedge in front of the starting square; row by row.

#### Diamond

On the Diamond Square, the **Evil Wolf** uses a two step loop to move
one square forward. Only squares in two files will be visited. The
escape velocity is \(\frac{1}{2}\).

### Wedge

#### Folded

The **Evil Wolf** can move like the %%FC%%, so it visits all the
squares of the Folded Wedge in order.

#### Flat

On the Flat Wedge, the **Evil Wolf** visits the same squares as on
the Square Spiral, using the same pattern. As such, it visits all
the squares, except the two left most squares every second row.
Hence, it visits \(100\%\) of the squares.

# Side Mover

<div class = "movement">
. . . . . . . . .
. . . . * . . . .
A * * * S * * * A
. . . . * . . . .
. . . . . . . . .
</div>

The **Side Mover** either slides an unlimited amount of unoccupied
squares to the right of left (like a sideways [*Rook*](rook.html)),
or steps one square orthogonally forward or backward (like a
vertical [*Wazir*](wazir.html)).

Compare with the [*Vertical Mover*](vertical_mover.html) which moves
the same way, but rotated by 90&deg;.

|====
%%PIECE_INFO%%
  **Side Mover**
& %%CHU_SHOGI%%; %%TAIKYOKU%%
& \\

  **Swallow's Wings**
& %%WA_SHOGI%%
& This is a different piece than the [*Swallow's Wings*](swallows_wings.html)
  from %%TAIKYOKU%%. \\
====|

### Spiral

#### Square

On the Square Spiral, the **Side Mover** moves as the [*Wazir*](wazir.html),
and hence, will follow the Spiral, visiting all the squares.

#### Diamond

On the Diamond Spiral, the **Side Mover** will visit all the squares,
except the squares of half a quadrant. Hence \(87.5\%\) of the
squares will be visited.

### Wedge

#### Folded

On the Folded Wedge, the **Side Mover** gets trapped after 6 steps,
as quickly has the [*Wazir*](wazir.html) and [*Rook*](rook.html).

#### Flat

On the Flat Wedge, the **Side Mover** escapes to the upper right,
using a step wise pattern. It uses a two-step loop to move
one square forward and to the right; hence, an escape velocity
of \(\frac{\sqrt{2}}{2}\).

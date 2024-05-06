# Swallow's Wings

<div class = "movement">
. . . . . . . . .
. . . . * . . . .
A * * * S * * * A
. . . . * . . . .
. . . . . . . . .
Shogi: 1
</div>

The **Swallow's Wing** either slides an unlimited amount of unoccupied
squares to the right of left (like a sideways [*Rook*](rook.html)),
or steps one square orthogonally forward or backward (like a
vertical [*Wazir*](wazir.html)).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%CHU_SHOGI%%
&           **Side Mover** & &#x6A2A;&#x884C;
&           %%PROMOTED%% [*Copper General*](copper_general.html);
            %%PROMOTES_TO%% [*Free Boar*](free_boar.html);
            A promoted [*Copper General*](copper_general.html) will 
            not promote again \\
  {th = 1}  %%WA_SHOGI%%
&           **Swallow's Wings** & &#x71D5;&#x7FBD;
&           %%PROMOTED%%
            [*Flying Goose*](copper_general.html?piece=flying_goose);
            %%PROMOTES_TO%%
            [*Gliding Swallow*](rook.html?piece=gliding_swallow);
            A promoted [*Flying Goose*](copper_general.html?piece=flying_goose)
            will not promote again. \\
====|

### Spiral

#### Square

On the Square Spiral, the **Swallow's Wing** moves as the [*Wazir*](wazir.html),
and hence, will follow the Spiral, visiting all the squares.

#### Diamond

On the Diamond Spiral, the **Swallow's Wing** will visit all the squares,
except the squares of half a quadrant. Hence \(87.5\%\) of the
squares will be visited.

### Wedge

#### Folded

On the Folded Wedge, the **Swallow's Wing** gets trapped after 6 steps,
as quickly has the [*Wazir*](wazir.html) and [*Rook*](rook.html).

#### Flat

On the Flat Wedge, the **Swallow's Wing** escapes to the upper right,
using a step wise pattern. It uses a two-step loop to move
one square forward and to the right; hence, an escape velocity
of \(\frac{\sqrt{2}}{2}\).

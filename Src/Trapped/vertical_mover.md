# %%PIECE%%

The %%PIECE%% either moves one square to the right or left
(like a sideways [*Wazir*](wazir.html)) or slides an unlimited
amount of unoccupied squares orthogonally forward or backward
(like a vertical [*Rook*](rook.html)).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%CHU_SHOGI%%
&           **Vertical Mover** & &#x7AEA;&#x884C;
&           %%PROMOTED%% [*Silver General*](silver_general.html);
            %%PROMOTES_TO%% [*Flying Ox*](flying_ox.html);
            A promoted [*Silver General*](silver_general.html) will
            not promote again \\
====|

### Spiral

#### Square

The %%PIECE%% can move as the [*Wazir*](wazir.html) so it visits
all the squares by following the Spiral.

#### Diamond

The %%PIECE%% follows a clockwise square spiral, skipping half the
square on each vertical leg. This means \(\frac{3}{4} = 75\%\) of
the squares on the board are visited.

### Wedge

#### Folded

Like the [*Wazir*](wazir.html), the %%PIECE%% gets trapped 
on the Folded Wedge after 6 steps.

#### Flat

On the Flat Wedge, the %%PIECE%% escapes to the upper right 
using a step wise pattern. In a two step loop, the piece
moves one square forward and to the right, for an escape velocity
of \(\sqrt{2}\).

# Caliph

<div class = "movement">
. . . . . . .
. * . . . * .
. . . * . . .
. . * S * . .
. . . * . . .
. * . . . * .
. . . . . . .
</div>

The **Caliph** either moves one square orthogonally (like the
[*Wazir*](wazir.html)) or jumps to a square which is two
away diagonally (like the [*Alfil*](alfil.html)).
As such, it's a %%COMPOUND_LEAPER%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  Problemists; %%COMPOUND_LEAPERS%%
& {cs = 2}  **Caliph**
&           This is a different piece than the [*Caliph*](oec_caliph.html)
            from %%OVERKILL%% \\
  {th = 1}  %%CHU_SHOGI%%
&           **Phoenix** & &#x9CF3;&#x51F0;
&           %%PROMOTES_TO%% [*Queen*](queen.html); This is a different
            piece than the [*Phoenix*](king.html?piece=phoenix_tori) from
            %%TORI_SHOGI%% \\
====|

Link: [%%CHESS_V%%](#piece:caliph)

### Spiral

#### Square

On the Square Spiral, the **Caliph** moves like the [*Wazir*](wazir.html),
following the Spiral, visiting all the squares on the board.

#### Diamond

On the Diamond Spiral, it is not clear whether **Caliph** gets trapped
or not. It does not get trapped for its first billion steps.

### Wedge

#### Folded

On the Folded Wedge, the **Caliph** visits all the squares, using
an interesting pattern. The pattern is remarkable in the sense it
has a bias to the left side of the wedge. Most filling pieces
either do not have a bias, or have one on the right hand side of
the Wedge.

#### Flat

On the Flat Wedge, the **Caliph** follows a step wise pattern
on the right edge of the Wedge, escaping to infinity, visiting
only the two right most squares of each row. This gives it an
escape velocity of \(\frac{\sqrt{2}}{2}\).

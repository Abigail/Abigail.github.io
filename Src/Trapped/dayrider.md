# Dayrider

<div class = "movement">
. . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . .
. . * . . . . . * . . . . . * . .
. . . . . . . . . . . . . . . . .
. . . . * . . . * . . . * . . . .
. . . . . . . . . . . . . . . . .
. . . . . . * . * . * . . . . . .
. . . . . . . * * * . . . . . . .
. . * . * . * * S * * . * . * . .
. . . . . . . * * * . . . . . . .
. . . . . . * . * . * . . . . . .
. . . . . . . . . . . . . . . . .
. . . . * . . . * . . . * . . . .
. . . . . . . . . . . . . . . . .
. . * . . . . . * . . . . . * . .
. . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . .
Arrow:  6,6   0,0
Arrow:  6,8   0,8
Arrow:  6,10  0,16
Arrow:  8,6   8,0
Arrow:  8,10  8,16
Arrow: 10,6  16,0
Arrow: 10,8  16,8
Arrow: 10,10 16,16
</div>

The **Dayrider** either moves one square in any direction (like a
[*King*](king.html)), or an even number of squares in any orthogonal
or diagonal direction, under the condition every second square it
moves over is unoccupied. So, the **Dayrider** combines the moves
of the [*King*](king.html), the [*Dabbabarider*](dabbabarider.html)
and the [*Alfilrider*](alfilrider.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Dayrider**
&           %%PROMOTED%% [*Undertaker*](king.html?piece=undertaker) \\
====|

### Spiral

#### Square

The **Dayrider** can move as the [*Wazir*](wazir.html), so it
will just follow the Square Spiral.

#### Diamond

The **Dayrider** can move as the [*Blind Monkey*](blind_monkey.html), so it
will just follow the Diamond Spiral.

### Wedge

#### Folded

The **Dayrider** can move as the [*Flying Cock*](flying_cock.html),
so it will follow the Folded Wedge.

#### Flat

On the Flat Wedge, the **Dayrider** visits each row one by one by first
visiting the third square from the left, then the right most square, after
which if visits all the squares one by one from right to left. After visiting
the left most square, having visited all the squares on the row, it jumps
to the next row, repeating the process.

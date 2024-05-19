# Donkey

<div class = "movement">
. . . . . . .
. . . L . . .
. . . * . . .
. L * S * L .
. . . * . . .
. . . L . . .
. . . . . . .
Shogi: 1
</div>

The **Donkey** slides up two unoccupied squared in any of the four
orthogonal directions. Like a very limited %%ROOK%%.

|====
%%PIECE_INFO%%
  **Donkey**
& %%TAIKYOKU%%
& \\

  **Enchanted Badger**
& %%TAIKYOKU%%
& \\
====|

### Spiral

#### Square

The **Donkey** can move like the %%WAZIR%%, so the **Donkey** follows
the Spiral, visiting all the squares.

#### Diamond

The **Donkey** spirals outward, skipping ever second square in half
of three quadrants. It visits
\(1 - \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{1}{2} = 81.25\%\)
of the squares.

### Wedge

#### Folded

On the Folded Wedge, the **Donkey** gets trapped after no more than 5 steps.
Which is one less than the %%WAZIR%%.

#### Flat

On the Flat Wedge, the **Donkey** escapes to infinity, following a zigzag
pattern on the right edge of the Flat Wedge. This gives it an 
escape velocity of \(\frac{\sqrt{2}}{2}\).



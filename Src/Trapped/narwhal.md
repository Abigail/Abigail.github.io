# Narwhal

<div class = "movement">
. . . . .
. . * . .
. . . . .
. * S * .
. . * . .
. . . . .
</div>

The **Narwhal** may move to a square one way orthogonally sidewards
or backwards (like a sidewards/backwards [*Wazir*](wazir.html)), or
two steps forward (like a forward [*Dabbaba*](dabbaba.html)).

Pieces which can move like the **Narwhal** can be found in
several games:

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Hummingbird**
&           %%PROMOTES_TO%% [*Immobilizer*](queen.html?piece=immobilizer) \\
  {th = 1}  %%WHALE_SHOGI%%
& {cs = 2}  **Narwhal**
&           \\
====|

### Spiral

#### Square

On the Square Spiral, the **Narwhal** gets trapped after 172 steps.

#### Diamond

After 13 steps, the **Narwhal** escapes to the left, moving one
square each step, for an escape velocity of \(1\).

### Wedge

#### Folded

On the Folded Wedge, the **Narwhal** escapes to infinity by repeating
a three step pattern: two squares forward, one square backwards, and
one square to the left. This way, the three left most squares of each
row will be visited. This three step loop to move one square to the
upper left means an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the **Narwhal** follows the same pattern as on
the Folded Wedge, but mirrorred along the vertical axis. So, its
escape velocity will also be \(\frac{\sqrt{2}}{3}\).

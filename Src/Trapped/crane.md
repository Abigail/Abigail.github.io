# Crane

<div class = "movement">
. . . . .
. * * * .
. . S . .
. * * * .
. . . . .
Shogi: 1
</div>

The **Crane** either steps one square forward, either diagonally,
or straight ahead, or one square backwards, either diagonally
or straight backwards, combining the moves of the 
[*Ferz*](ferz.html) and a vertical [*Wazir*](wazir.html).

|====
%%PIECE_HEADERS%%
  {th = 1}  %%TORI_SHOGI%%
&           **Crane** & &#x9db4;
&           \\
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Ferocious Leopard**
&           %%PROMOTES_TO%% [*Diving Osprey*](diving_osprey.html) \\
  {th = 1}  %%CHU_SHOGI%%
&           **Ferocious Leopard** & &#x731B;&#x8C79;
&           %%PROMOTES_TO%% [*Bishop*](bishop.html) \\
====|

### Spiral

#### Square

The **Crane** visits all the squares on the Spiral. The squares visited
form an expanding hexagon, which is kind of unusual.

#### Diamond

On the Diamond Spiral, the **Crane** circles the origin in a direction
opposite ot the direction of the Spiral, visiting all squares, and
tracing a path which does not intersect itself.

### Wedge

#### Folded

On the Folded Wedge, the **Crane** visits the right most three squares
of each row, escaping to infinity. It uses a six step loop to move
two squares to the upper left, giving it an escape speed of
\(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the **Crane** only visits the right most square
of each row, escaping to infinity quickly. Its escape speed is
\(\sqrt{2}\).

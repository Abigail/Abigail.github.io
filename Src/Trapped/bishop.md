# Bishop

<div class = "movement">
A . . . . . . . A
. * . . . . . * .
. . * . . . * . .
. . . * . * . . .
. . . . S . . . .
. . . * . * . . .
. . * . . . * . .
. * . . . . . * .
A . . . . . . . A
</div>

The **Bishop** can slide an unlimited number of squares in
each of the four diagonal directions, as long as the squares it
slides over are not occupied.

Due to its diagonal movement, the **Bishop** is %%COLOUR_BOUND%%.

The **Bishop** appears in many Chess and Sh&#x14d;gi variants,
sometimes under a different name.

|====
%%PIECE_INFO%%
  {rs = 2}
  **Bishop**
& %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%;
  %%GANYMEDE%%; %%RENN_CHESS%%; %%SCIROCCO%%; %%TYPHOON%%; 
  %%WILDEBEEST%%; %%WOLF%%; Other Chess variants;
& \\
  %%SHOGI%%; %%CHU_SHOGI%%; %%EURO_SHOGI%%; %%MICRO_SHOGI%%;
  %%TAIKYOKU%%
& \\

  **Ferz Rider**
& %%RIDERS%%
& Moves likes [*Ferz*](ferz.html), without a limit on the number
  of squares it moves over, as long as the squares are unoccupied. \\

  **Teme**
& %%SHATAR%%; %%HIASHATAR%%
& \\
====|

Links: [%%WIKI%%](#wiki:Bishop_(chess)),
       [%%CHESS_V%%](#piece:bishop)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 10000 -l s_sq --div r -z 6 FF 
% Box: [-7*, 7*] [-7*, 7*]
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|   46 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |   46 |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    1 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    1 |    . |    . |    . |    . |    . |    . |    . |    1 |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    1 |    . |    . |    . |    . |    . |    1 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    1 |    . |    . |    . |    1 |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . | 2724 |    . | 1484 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |   *  |    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . | 2777 |    . | 2810 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |   52 |    . |    . |    . |    1 |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    1 |    . |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |    . |   46 |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
</div>


On the Spiral, the **Bishop** moves in a regular pattern. However, 
despite the possible moves of the **Bishop** being four fold symmetric,
the resulting pattern isn't, making the **Bishop** slightly interesting.

If we take the limit, we see that the **Bishop** will visit
\(\frac{1}{2} \cdot (\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{5}{16} = 31.25 \%\) of the squares on the board.

The movement of **Bishop** on the Square Spiral is similar, but rotated
45&deg; of the [*Rook*](rook.html) on the Diamond Spiral.

Most of the moves of the **Bishop** on the Square Spiral will be one
step, diagonal, moves. It will also make slide 2 or more squares 
diagonal forward (right and left), or backward right. But it will do each
distance at most once. So, it only once moves two squares forward, once
three squares forward, once four squares forward, etc. It does so for
each of the three in equal amounts. It does the same amount of multi-square
steps diagonally backward left, but then it steps just two squares.

#### Diamond

<!-- @@ Ferz Bishop Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Ferz Bishop Folded_Wedge -->

#### Flat

<!-- @@ Ferz Bishop Flat_Wedge -->


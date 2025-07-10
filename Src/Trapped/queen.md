# Queen

<div class = "movement">
A . . . A . . . A
. * . . * . . * .
. . * . * . * . .
. . . * * * . . .
A * * * S * * * A
. . . * * * . . .
. . * . * . * . .
. * . . * . . * .
A . . . A . . . A
</div>

The **Queen** can slide an unlimited number of squares in all eight 
directions: four orthogonal directions and four diagonal directions.
It cannot slide over occupied squares. The **Queen** combines the
movements of the [*Rook*](rook.html) and [*Bishop*](bishop.html).

It's common in many Chess variant, using different names:

|====
%%PIECE_INFO%%
  **Advancer** <sup>[%%CHESS_V%%](#piece:advancer)</sup>
& %%ROCOCO%%
& %%OTHER_MOVES%% \\

  **Bers**
& %%HIASHATAR%%
& \\

  **Chameleon**
& %%ROCOCO%%
& %%OTHER_MOVES%% \\

  **Duke**
& %%QUANTUM%%
& Not to be confused with the [*Duke*](centaur.html?piece=duke_cobra)
  from [Cobra Chess](#chess-v:large.dir/cobra.html),
  or the [*Duke*](duke.html) from %%SCIROCCO%%. \\

  **Free&nbsp;Stag**
& %%TAIKYOKU%%
& \\

  **Immobilizer**
& {rs = 2} %%ROCOCO%%; %%TYPHOON%%
& %%OTHER_MOVES%% \\

  **Longleaper**
& %%OTHER_MOVES%% \\

  {rs = 3} **Queen**
& %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%; %%RENN_CHESS%%;
  %%WOLF%%; Other chess variants 
& \\
  %%GANYMEDE%%; %%SCIROCCO%%; %%TYPHOON%%; %%WILDEBEEST%%
& \\
  %%CHU_SHOGI%%; %%TAIKYOKU%%
& &#x5954;&#x738B;, which means *Free King* \\

  **Strong&nbsp;Eagle**
& %%TAIKYOKU%%
& \\

  **Swapper**
& {rs = 2} %%ROCOCO%%
& {rs = 2} %%OTHER_MOVES%% \\

  **Withdrawer** \\
====|
      
Links: [%%WIKI%%](#wiki:Queen_(chess)),
       [%%CHESS_V%%](#piece:queen)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 5000 -l s_sq --div r FFWW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
</div>

The **Queen** can move like a [*Wazir*](wazir.html), and a *Wazir* 
can follow the Spiral. Hence, the **Queen** will fill the entire board,
and not get trapped.

As can be seen from the heatmap to the right, the **Queen** makes about
the same number of steps in each of the four orthogonal directions.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10000 -l s_d --div l FFWW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 2485 |    . | 2474 |
+------+------+------+
|    . |   *  |   71 |
+------+------+------+
| 2485 |    . | 2485 |
+------+------+------+
</div>

The **Queen** can move like a [*Blind Monkey*](blind_monkey.html),
and a *Blind Monkey* can follow the Spiral. Hence, the **Queen**
will fill the entire board, and not get trapped.

The **Queen** will make mostly diagonal moves, roughly the same in each of
the four diagonal directions, and a single step to the right for each
"layer" of the spiral. She will never slide more than one square.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 10000 -l w_fo --div r FFWW 
% Box: [-1, 0] [-1, 1]
+------+------+------+
|   50 |    . |   50 |
+------+------+------+
| 4900 |   *  | 5000 |
+------+------+------+
</div>

The **Queen** can move like the [*Flying Cock*](flying_cock.html), and
hence will follow the Wedge, filling the entire board.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10000 -l w_fl --div l FFWW 
% Box: [-1, 1] [-1, 5]
+------+------+------+------+------+------+------+
|    . |    . | 1731 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
| 5027 |   *  |   28 |   28 | 1564 |   27 |   27 |
+------+------+------+------+------+------+------+
| 1568 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

The **Queen** will fill the entire board, but in doing so, it has a 
strong bias on the right hand side of the board. 

As can be seen from the heatmap, about half the moves the **Queen**
makes on the Flat Wedge make one step to the left. And about one sixth
of the moves step one square right diagonally forward, left diagonally
backward, or step three squares orthogonally to the right. And a tiny
fraction of the moves step one, two, four or five squares orthogonally
to the right, in equal amount.

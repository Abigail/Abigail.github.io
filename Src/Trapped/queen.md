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

<!-- @@ Trapped::wazir        (piece => "Queen") -->

#### Diamond

<!-- @@ Trapped::blind_monkey (piece => "Queen") -->

### Wedge

#### Folded

<!-- @@ Trapped::flying_cock  (piece => "Queen") -->

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

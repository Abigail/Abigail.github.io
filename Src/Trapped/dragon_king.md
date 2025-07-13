# Dragon King

<div class = "movement">
. . . . A . . . .
. . . . * . . . .
. . . . * . . . .
. . . * * * . . .
A * * * S * * * A
. . . * * * . . .
. . . . * . . . .
. . . . * . . . .
. . . . A . . . .
</div>

The **Dragon King** combines the movements of
the [*Ferz*](ferz.html) and [*Rook*](rook.html). That is, it steps
either one square diagonally, or slides an unlimited number of 
unoccupied squares orthogonally.

Pieces which can move like the **Dragon King** can be found in
several games:

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SHATAR%%
&           **Baras** or **Berse** &
            <span class = "mongolian">&#x182A;&#x1820;&#x1837;&#x1830;</span>
&           In modern rules, the **Baras** moves like the
            Chess [*Queen*](queen.html); *Baras* meaning *Tiger*. \\
  {th = 1}  [The Duke of Rutland's Chess](#chess-v:historic.dir/rutland.html)
& {cs = 2}  **Crowned Rook**
&           \\
  {th = 1}  [Fusion Chess](#chess-v:other.dir/fusion.html)
& {rs = 2; cs = 2}
            **Dragon King**
&           %%ROYAL%%; Appears when the [*Rook*](rook.html) and
            [*King*](king.html) move to the same square \\
  {th = 1}  [Bedlam](#chess-v:other.dir/fusion.html);
            [Thunder Chess](#chess-v:difftaking.dir/thunder.html)
&           %%ROYAL%%; Appears when the [*King*](king.html) moves into
            the same square as the [*Rook*](rook.html); demotes to
            [*King*](king.html) when capturing \\
  {th = 1}  %%SHOGI%%
& {rs = 2}  **Dragon King** & {rs = 2} &#x9f8d;&#x738b;
&           %%PROMOTED%% [*Rook*](rook.html)  \\
  {th = 1}  %%CHU_SHOGI%%
&           %%PROMOTED%% [*Rook*](rook.html);
            %%PROMOTES_TO%% [*Soaring Eagle*](soaring_eagle.html);
            A promoted [*Rook*](rook.html) will not promote again \\
  {th = 1; rs = 2}
            %%TYPHOON%%
& {cs = 2}  **Dragon Kite**
&           %%PROMOTED%% [*Dabbaba*](dabbaba.html) \\
  {cs = 2}  **Ibis**
&           %%PROMOTED%% [*Copper General*](copper_general.html); %%CAPTURE%% \\
  {th = 1}  %%WHALE_SHOGI%%
& {cs = 2}  **Killer Whale** 
&           Captured enemy [*Porpoise*](porpoise.html) \\
  {th = 1}  %%EURO_SHOGI%%
& {cs = 2}  **Promoted Rook**
&           \\
====|

Link: [%%CHESS_V%%](#piece:dragonking)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 5k -l s_sq --div r FWW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
</div>

The **Dragon King** can move as a [*Wazir*](wazir.html). Hence, it will not
get stuck, filling the entire board by just following the spiral.

As can be seen from the heatmap to the right, the **Dragon King** makes about
the same number of steps in each of the four orthogonal directions.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 5k -l s_d --div l FWW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 1275 |    . | 1225 |
+------+------+------+
|    . |   *  |   50 |
+------+------+------+
| 1225 |    . | 1225 |
+------+------+------+
</div>

The **Dragon King** can move as the [*Blind Monkey*](blind_monkey.html).
Hence, it will follow the spiral and visit all the squares on the board.

The **Dragon King** will make mostly diagonal moves, roughly the
same in each of the four diagonal directions, and a single step to
the right for each "layer" of the spiral.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 5k -l w_fo --div r FWW 
% Box: [-1, 0] [-1, 1]
+------+------+------+
|   35 |    . |   35 |
+------+------+------+
| 2480 |   *  | 2450 |
+------+------+------+
</div>

Since the **Dragon King** can move as the [*Flying Cock*](flying_cock.html),
it will do so, filling the entire board visiting all squares in value order.

The **Dragon King** will mostly move sideways, and make one step
diagonally forward when reaching the edge of the board.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l FWW 
% Box: [-1, 1] [-1, 5]
+------+------+------+------+------+------+------+
|    . |    . | 1731 |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
| 5027 |   *  |   28 |   28 | 1564 |   27 |   27 |
+------+------+------+------+------+------+------+
| 1568 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

The **Dragon King** visits all the squares on the Flat Wedge, with a
preference to the right hand side of the board. The **Dragon King**
uses the same pattern as the **Queen** does.

As can be seen from the heatmap, about half the moves the **Dragon King**
makes on the Flat Wedge make one step to the left. And about one sixth
of the moves step one square right diagonally forward, left diagonally
backward, or step three squares orthogonally to the right. And a tiny
fraction of the moves step one, two, four or five squares orthogonally
to the right, in equal amount.

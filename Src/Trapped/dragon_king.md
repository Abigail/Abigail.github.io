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

<!-- Wazir Dragon_King Square_Spiral -->

#### Diamond

<!-- Blind_Monkey Dragon_King Diamond_Spiral -->

### Wedge

#### Folded

<!-- Flying_Cock Dragon_King Folded_Wedge -->

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

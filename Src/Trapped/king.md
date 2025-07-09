# King

<div class = "movement">
. . . . .
. * * * .
. * S * .
. * * * .
. . . . .
</div>

The **King** can step one square away in all eight directions.
Pieces which move this way appear in many games, using different names.
Many, but not all, of those pieces are *Royal*, which means that if
the piece is captured, the side owning the piece loses.
Of course, for our investigation, Royalness plays no part.

|====
%%PIECE_INFO%%
  **Bear's&nbsp;Eyes**
& %%TAIKYOKU%%; %%WA_SHOGI%%
& \\

  **Cannon&nbsp;Pawn**
& %%ROCOCO%%
& %%OTHER_MOVES%% \\

  **Cicada**
& %%TYPHOON%%
& %%OTHER_MOVES%% \\

  **Commoner**
& %%SCIROCCO%%; %%TYPHOON%%
& \\

  **Crane&nbsp;King**
& %%WA_SHOGI%%
& \\

  **Elephant&nbsp;Prince**
& %%TYPHOON%%
& %%OTHER_MOVES%% \\

  {rs = 2}
  **General**
& %%JANGGI%%
& In the game, the **General** is restricted to the 3x3 palace, and the
  **General** does not have all its moves available on every square of
  the palace \\
  %%YARI_SHOGI%%
& \\

  {rs = 2}
  **Guard**
& %%JANGGI%%
& In the game, the **Guard** is restricted to the 3x3 palace,
  and the **Guard** does not have all its moves available 
  on every square of the palace; Also known as *Assistant* or *Mandarin* \\
  %%RENN_CHESS%%
& \\

  {rs = 3}
  **King**
& %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%; %%MAKRUK%%;
  %%RENN_CHESS%%; %%ROCOCO%%; %%SCIROCCO%%; %%TYPHOON%%;
  %%WILDEBEEST%%; %%WOLF%%; Other chess variants
& \\
  %%INTERDEPENDENT%%
& %%OTHER_MOVES%% \\
  %%SHOGI%%; %%CHU_SHOGI%%; %%EURO_SHOGI%%; %%KYOTO_SHOGI%%;
  %%MICRO_SHOGI%%; %%TAIKYOKU%%
& In Sh&#x014d;gi and Sh&#x014d;gi variants, the **Kings** may also
  be refer to as *King General* and *Jeweled* or *Jade General*. \\

  **Left&nbsp;General**
& %%TAIKYOKU%%
& \\

  **Lion**
& %%DOBUTSU%%
& \\

  **Negus**
& %%SENTEREJ%%
& \\

  **Noyan** or **Noin** 
& %%SHATAR%%
& *Noyan* means *Lord* \\

  **Noyon** 
& %%HIASHATAR%%
& \\

  **Overtaker**
& %%TYPHOON%%
& %%OTHER_MOVES%% \\

  **Phoenix**
& %%TORI_SHOGI%%
& This is a different piece than the 
  [*Phoenix*](caliph.html) from %%CHU_SHOGI%% \\
  
  **Plodding&nbsp;Ox**
& %%WA_SHOGI%%
& This is a different piece than the [*Plodding Ox*](plodding_ox.html)
  from %%TAIKYOKU%%. \\

  **Prince**
& %%CHU_SHOGI%%; %%TAIKYOKU%%
& \\

  **Right&nbsp;General**
& %%TAIKYOKU%%
& \\

  **Salamander**
& {rs = 3} %%TYPHOON%%
& %%OTHER_MOVES%% \\
  
  **Tiger&nbsp;Prince**
& %%OTHER_MOVES%% \\

  **Undertaker**
& %%OTHER_MOVES%% \\

  **Venomous&nbsp;Wolf**
& %%TAIKYOKU%%
& \\

  **White&nbsp;Whale**
& %%WHALE_SHOGI%%
& \\
====|

Other names for pieces which move like the **King**
include *Mann* (not Royal).

Links: [%%WIKI%%](#wiki:King_(chess)),
       [%%CHESS_V%%](#piece:king)

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 5000 -l s_sq --div r FW
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . | 1225 |    . |
+------+------+------+
| 1260 |   *  | 1255 |
+------+------+------+
|    . | 1260 |    . |
+------+------+------+
</div>

The **King** can move as the [*Wazir*](wazir.html), and the
[*Wazir*](wazir.html)
will follow the Spiral. Hence, the **King** will visit all the squares on
the board.

As can be seen from the heatmap to the right, the **King** makes about
the same number of steps in each of the four orthogonal directions.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 10000 -l s_d --div l FW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
| 2485 |    . | 2474 |
+------+------+------+
|    . |   *  |   71 |
+------+------+------+
| 2485 |    . | 2485 |
+------+------+------+
</div>

The **King** can move as the [*Blind Monkey*](blind_monkey.html), and hence
it will follow the Spiral. The **King** will visit all the squares on
the board.

The **King** will make mostly diagonal moves, roughly the same in each of
the four diagonal directions, and a single step to the right for each
"layer" of the spiral.

### Wedge

#### Folded

<div class = 'heatmap right'>
% ./trapped -m 10000 -l w_fo --div r FW 
% Box: [-1, 0] [-1, 1]
+------+------+------+
|   50 |    . |   50 |
+------+------+------+
| 4900 |   *  | 5000 |
+------+------+------+
</div>

The **King** can move as the [*Flying Cock*](flying_cock.html),
and the [*Flying Cock*](flying_cock.html)
will follow the Folded Wedge. Hence, the %%PIECE%% will visit all the squares on
the board.

The **King** will mostly move sideways, and make one step diagonally forward
when reaching the edge of the board.

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10000 -l w_fl --div l FW 
% Box: [-1, 1] [-1, 1]
+------+------+------+
|    . |    . |  149 |
+------+------+------+
| 5000 |   *  | 4802 |
+------+------+------+
|   49 |    . |    . |
+------+------+------+
</div>


On the Flat Wedge, the **King** fills the board row by row, alternating going
with and against the numbers, with a small twist just before reaching
the left hand side of the Wedge.

The **King** will mostly move sideways, and make a few moves on one
diagonal, while not touching the other.


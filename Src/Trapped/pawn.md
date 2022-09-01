# %%PIECE%%

The **Pawn** appears in [Chess](#wiki), 
[Sh&#x14d;gi (&#x5c06;&#x68cb;)](#wiki:Shogi), and many of their
variants; it is known under different names.

It's usually a humble piece, appearing multiple times on the board.
It's movements are complicated, but most movements we can ignore
for our investigations:

* In [Chess](#wiki) and its variants, the **Pawn** captures differently
  than it moves. However we can ignore capture moves.
* [Chess](#wiki) and its variants also have *en passant* moves, special
  capture moves. We will ignore those as well.
* In [Chess](#wiki) and its variants, it is typically the only piece
  which promotes (to a piece selected by the player). In
  [Sh&#x14d;gi (&#x5c06;&#x68cb;)](#wiki:Shogi), and Sh&#x14d;gi
  variants, the **Pawn** is one of the pieces which may promote.
  We will, however, ignore all promotions.
* In [Chess](#wiki) and many of its variants, the **Pawn** may optionally
  take a double (and in larger variants, a triple) step on its first
  move. For none of the numbering systems we use, the **Pawn** will
  make use of this option, so we can ignore this as well.

This makes that the **Pawn** is left with only one possible move:
one square forward.

### Promoting and Names

**Pawns** often promote. In Chess, they promote to a piece of the
players choice, but in other games, the pawn promotes to a fixed piece.
In the table below, we list under which names the **Pawn** is known, 
and to which it promotes (if any). In Chess and many of its variants,
it's the players choice to which the **Pawn** promotes. The column
marked **MS** indicates whether the pawn has the option to move more than
one square on its first move. The column **Cap** is marked if the pawn
captures differently than it moves.

|====
{class = 'promotion'}
{th = 1; cs = 2} Piece &
{th = 1} Game  &
{th = 1} Promotes to &
{th = 1} MS &
{th = 1} Cap. \\
{rs = 4} **Pawn** & {rs = 4} &#x2659;
             &  %%CHESS%%; many Chess variants
             &  Player's choice
             &  %%YES%% 
             &  %%YES%%                                                      \\

                %%GANYMEDE%%
             &  [*Frog*](frog_wfh.html)
             &  %%YES%% 
             &  %%YES%%                                                      \\

                %%WILDEBEEST%%
             &  [*Queen*](queen.html) or
                [*Wildebeest*](gnu.html?piece=wildebeest)
             &  %%YES%% 
             &  %%YES%%                                                      \\

                %%WOLF%%
             &  Player's choice, including the
                [*Elephant*](amazon_rider.html?piece=elephant_wolf)
             &  %%YES%% 
             &  %%YES%%                                                      \\
{rs = 2} **Pawn** & {rs = 2} &#x6B69;&#x5175;
             &  %%SHOGI%%; %%CHU_SHOGI%%
             &  [*Tokin*](gold_general.html?piece=tokin) (Gold General)
             &  %%NO%%  
             &  %%NO%%                                                       \\

                %%MICRO_SHOGI%%
             &  [*Knight*](shogi_knight.html) (when capturing, there is
                no promotion in Micro Sh&#x14d;gi)
             &  %%NO%%  
             &  %%NO%%                                                       \\
{rs = 2; cs = 2} **Pawn**
             &  %%YARI_SHOGI%%
             &  [*Yari Silver*](yari_silver.html)
             &  %%NO%%  
             &  %%NO%%                                                       \\

                %%SCIROCCO%%; %%TYPHOON%%
             &  [*Tadpole*](tadpole.html)
             &  %%NO%%  
             &  %%YES%%                                                      \\
**Pawn** & &#x0E1A;
             &  %%MAKRUK%%
             &  [*Queen*](ferz.html?piece=queen) (Ferz)
             &  %%NO%%  
             &  %%YES%%                                                      \\
{cs = 2} **Chick**    &  %%DOBUTSU%%
             &  [*Hen*](gold_general.html?piece=dobutsu_hen) (Gold General)
             &  %%NO%%  
             &  %%NO%%                                                       \\
{cs = 2} **Dolphin**  &  %%WHALE_SHOGI%%
             &
             &  %%NO%%  
             &  %%NO%%                                                       \\
{rs = 2; cs = 2} **Fu**
             &  %%HIASHATAR%%
             &  [*Bers*](queen.html?piece=pers)
             &  %%YES%%
             &  %%NO%%                                                       \\

                %%TYPHOON%%
             &  [*Zebra*](zebra.html)
             &  %%NO%%  
             &  %%NO%%                                                       \\
**K&#x00FC;&#x00FC;** or **Chu**
             &  <span class = "mongolian">&#x182C;&#x1826;&#x1826;</span>
             &  %%SHATAR%%
             &  [*Baras*](dragon_king.html?piece=baras)
             &  %%NO%%<sup>1</sup>
             &  %%YES%%                                                      \\
{cs = 2} **Medeq**
             &  %%SENTEREJ%%
             &  Player's choice of captured pieces
             &  %%NO%%  
             &  %%YES%%                                                      \\
{cs = 2} **Soldier**<sup>2</sup>
             &  %%XIANGQI%%
             &
             &  %%NO%%  
             &  %%NO%%                                                       \\
**Sparrow Pawn** & &#x8411;&#x6B69;
             &  %%WA_SHOGI%%
             &  [*Golden Bird*](gold_general.html?piece=golden_bird)
             &  %%NO%%  
             &  %%NO%%                                                       \\
{cs = 2} **Swallow**
             &  %%TORI_SHOGI%%
             &  [*Goose*](goose.html)
             &  %%NO%%  
             &  %%NO%%                                                       \\
====|

<sup>1</sup> Except for the one in front of the
             [*Baras*](dragon_king.html?piece=baras); each game starts
             with 1. d2-d4, d7-d5.<br>
<sup>2</sup> In %%XIANGQI%%, once the **Soldier** crosses the river,
             in addition to moving one square forward, it may also
             move one square sideways. This makes it move like the
             [*Banner*](banner.html).

### Spiral and Wedge

On the Square and Diamond Spiral and both the Folded and Flat Wedge,
the %%PIECE%% escapes to infinity in a straight line forward. Its
escape velocity is \(1\) on all the boards.

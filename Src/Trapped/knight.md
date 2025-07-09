# Knight

<div class = "movement">
. . . . . . .
. . * . * . .
. * . . . * .
. . . S . . .
. * . . . * .
. . * . * . .
. . . . . . .
</div>

This is the piece it all started with.

A **Knight** is a [*(1,2)-leaper*](leapers.html#basic_leapers).
That is, a **Knight** moves from a square
to a square which is one square away in one direction, and two squares away
in a direction orthogonally to the first direction. The move cannot
be blocked.

See also the [*Nightrider*](nightrider.html), a piece which moves
one or more squares in the same direction as the **Knight**.

*Cavalry Chess* also has a piece called a *Knight*, but that moves 
like the [*Buffalo*](buffalo.html); it also has a piece called
*Knight King* which moves like a [*Centaur*](centaur.html).
%%SHOGI%% also have a piece
called [*Knight*](shogi_knight.html), and there is also a 
[*Knight*](knight_euro.html) in %%EURO_SHOGI%%. Both pieces move
differently than the **Knight**.

|====
 %%PIECE_INFO%%
  **Ferese**
& %%SENTEREJ%%
& *Ferese* means *Horse*. \\

  **Horse**
& %%RENN_CHESS%%; %%SCIROCCO%%; %%TYPHOON%%
& The [*Mao*](mao.html) is also called a *Horse*. \\

  {rs = 2} **Knight**
& %%CHESS%%; %%BASIC_LEAPERS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%;
  %%GANYMEDE%%;<br>
  %%MAKRUK%%; %%QUANTUM%%; %%SCIROCCO%%; %%TYPHOON%%; %%WILDEBEEST%%;
& \\
  %%INTERDEPENDENT%%
& %%OTHER_MOVES%% \\

  **Mori**
& %%HIASHATAR%%; %%SHATAR%%
& \\

  **Squire**
& %%QUANTUM%%
& %%OTHER_MOVES%%; This is a different piece than the
  [*Squire*](squire.html) from %%RENN_CHESS%%. \\
====|

Links: [%%WIKI%%](#wiki:Knight_(chess)),
       [%%CHESS_V%%](#piece:knight)

### Spiral

#### Square

<div class = 'heatmap right'>
. 320 . 172 . 
96 . . . 399 
. . * . . 
437 . . . 163 
. 164 . 264 . 
</div>

Of the traditional Chess pieces, this is the only piece which gets
trapped on the Square Spiral. Circling the starting point in an irregular
way in the opposite direction as the spiral, the **Knight** gets
trapped after 2,015 steps.

As you can see from the heatmap on the right, all eight possible movements
of the **Knight** are used, but some more than others.

#### Diamond

<div class = 'heatmap left'>
. 355 . 652 . 
538 . . . 295 
. . * . . 
416 . . . 531 
. 494 . 441 . 
</div>

On the Diamond Spiral, the **Knight** remains free for almost twice
as long as it stays free on the Square Spiral, but it does get
trapped after 3,722 steps.

All eight movements are used, in a more balanced way than the **Knight**
moves on the Square Spiral.

### Wedge

#### Folded

<div class = 'heatmap right'>
. 3 . 3 . 
11 . . . 13 
. . * . . 
4 . . . 5 
. 9 . 2 .
</div>

On the Folded Wedge, the **Knight** gets trapped quickly, after 50 steps. 

#### Flat

<div class = 'heatmap left'>
. . . 6 . 
2497 . . . 4992 
. . * . . 
6 . . . 1 
. 2493 . 5 .
</div>

On the Flat Wedge, the **Knight** bounces around for the first 30 steps,
then, making triangular shaped turns, escapes to infinity. It uses
a four step cycle to move one square to the upper right, giving it
an escape velocity of \(\frac{\sqrt{2}}{4}\).


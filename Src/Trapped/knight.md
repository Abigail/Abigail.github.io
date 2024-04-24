# %%PIECE%%

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

A %%PIECE%% is a [*(1,2)-leaper*](leapers.html#basic_leapers).
That is, a %%PIECE%% moves from a square
to a square which is one square away in one direction, and two squares away
in a direction orthogonally to the first direction. The move cannot
be blocked.

See also the [*Nightrider*](nightrider.html), a piece which moves
one or more squares in the same direction as the %%PIECE%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%SENTEREJ%%
& {cs = 2}  **Ferese**
&           *Ferese* meaning *Horse* \\
  {th = 1}  %%RENN_CHESS%%
& {cs = 2}  **Horse**
&           \\
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2; rs = 2}
            **Knight**
&           %%PROMOTES_TO%% [*Rook*](rook.html) \\
  {th = 1; rs = 2}
            %%QUANTUM%%
&           <span style = "visibility: hidden">I</span> \\
  {cs = 2}  **Squire**
&           %%CAPTURE%% \\
  {th = 1}  %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%; %%WILDEBEEST%%;
            %%BASIC_LEAPERS%%
& {rs = 3}  **Knight** & {rs = 3} &#x2658;
&           \\
  {th = 1}  %%INTERDEPENDENT%%
&           %%CAPTURE%%  \\
  {th = 1}  %%GANYMEDE%%
&           %%PROMOTES_TO%% [*Gnu*](gnu.html) \\
  {th = 1}  %%MAKRUK%%
&           **Knight** & &#x0E21;
&           \\
  {th = 1}  %%HIASHATAR%%
& {cs = 2}  **Mori**
&           \\
  {th = 1}  %%SHATAR%%
&           **Mori**  & <span class =
                        "mongolian">&#x182E;&#x1823;&#x1837;&#x1822;</span>
&           May not deliver mate \\
====|
      
Links: [%%WIKI%%](#wiki:Knight_(chess)),
       [%%CHESS_V%%](#piece:knight)

### Spiral

#### Square

Of the traditional Chess pieces, this is the only piece which gets
trapped on the Square Spiral. Circling the starting point in an irregular
way in the opposite direction as the spiral, the %%PIECE%% gets
trapped after 2,015 steps.

#### Diamond

On the Diamond Spiral, the %%PIECE%% remains free for almost twice
as long as it stays free on the Square Spiral, but it does get
trapped after 3,722 steps.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% gets trapped quickly, after 50 steps. 

#### Flat

On the Flat Wedge, the %%PIECE%% bounces around for the first 30 steps,
then, making triangular shaped turns, escapes to infinity. It uses
a four step cycle to move one square to the upper right, giving it
an escape velocity of \(\frac{\sqrt{2}}{4}\).

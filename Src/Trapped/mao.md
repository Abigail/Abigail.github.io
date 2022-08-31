# %%PIECE%%

The %%PIECE%% moves as the [*Knight*](knight.html), but it
may not jump. It moves one square orthogonally (which must
be unoccupied), then one square diagonally outward.

Compare this to the [*Moa*](moa.html) which reaches the same
squares, but first moves diagonally, then orthogonally.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%GRAND_CAVALIER%%
& {cs = 2}  **Cavalier**
&           %%PROMOTES_TO%% Varies \\
  {th = 1}  %%JANGGI%%
&           **Horse** & &#xB9C8;
&           \\
  {th = 1}  %%XIANGQI%%
&           **Horse** & &#x99AC;/&#x508C;
&           Sometimes called *Knight* (not to be confused with the
            Chess [*Knight*](knight.html)) \\
  {th = 1}  Problemists
&           **Mao**
&           \\
====|

Link: [%%CHESS_V%%](#piece:mao)

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% gets trapped quickly, after
no more than 28 steps.

#### Diamond

On the Diamond Spiral, the %%PIECE%% gets trapped quickly as well;
this time after 64 steps.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% uses a six step loop
to move two squares to the upper left. It escapes to
infinity by repeating this loop forever, giving it an 
escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the %%PIECE%% gets trapped even sooner
than on the Square Spiral. 12 steps, and it is trapped.

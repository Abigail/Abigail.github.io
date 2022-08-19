# %%PIECE%%

The %%PIECE%% can slide an unlimited number of squares in
each of the four diagonal directions, as long as the squares it
slides over are not occupied.

Due to its diagonal movement, the %%PIECE%% is %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%MICRO_SHOGI%%
& {rs = 3; cs = 2}
            **Bishop**
&           Becomes a [*Tokin*](gold_general.html?piece=tokin) when capturing \\
  {th = 1}  %%SCIROCCO%%
&           %%PROMOTED%% [*Alfil*](alfil.html) \\
  {th = 1}  %%TYPHOON%%
&           %%PROMOTED%% [*Guard*](guard.html) \\
  {th = 1}  %%CHESS%%; %%CAGLIOSTRO%%; %%FALCON_HUNTER%%;
            %%WILDEBEEST%%; %%WOLF%%; Other Chess variants
&           **Bishop**  & &#x2657;
&           \\
  {th = 1}  %%SHOGI%%; %%CHU_SHOGI%%
&           **Bishop**  & &#x89D2;&#x884C;
&           &#x89D2;&#x884C; meaning *Angle Mover*;
            %%PROMOTES_TO%% [*Dragon Horse*](dragon_horse.html) \\
  {th = 1}  %%RIDERS%%
& {cs = 2}  **Ferzrider**
&           Moves likes [*Ferz*](ferz.html), without a limit on the number
            of squares it moves over, as long as the squares are unoccupied \\
  {th = 1}  %%SHATAR%%; %%HIASHATAR%%
& {cs = 2}  **Teme**
&           \\
====|
      
Links: [%%WIKI%%](#wiki:Bishop_(chess)),
       [%%CHESS_V%%](#piece:bishop)

### Spiral

#### Square

On the Spiral, the %%PIECE%% moves in a regular pattern. However, 
despite the possible moves of the %%PIECE%% being four fold symmetric,
the resulting pattern isn't, making the %%PIECE%% slightly interesting.

If we take the limit, we see that the %%PIECE%% will visit
\(\frac{1}{2} \cdot (\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{5}{16} = 31.25 \%\) of the squares on the board.

The movement of %%PIECE%% on the Square Spiral is similar, but rotated
45&deg; of the [*Rook*](rook.html) on the Diamond Spiral.

#### Diamond

On the Diamond Spiral, the %%PIECE%% moves in the same way as
the [*Ferz*](ferz.html), visiting \(50\%\) of the squares
on the board.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% escapes to infinity, using a 
three step loop to move one square to the upper right. This gives
the %%PIECE%% an escape velocity of \(\frac{\sqrt{2}}{3}\).

#### Flat

On the Flat Wedge, the %%PIECE%% escapes as well, keep to the right
edge of the Wedge, moving one square to the upper right in each step.
This means an escape velocity of \(\sqrt{2}\).

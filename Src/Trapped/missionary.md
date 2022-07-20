# %%PIECE%%

The %%PIECE%% moves one or two unoccupied squares orthogonally
or diagonally. This makes the %%PIECE%% %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%XIANGQI%%
&           **Elphant** & &#x8C61;/&#x76F8;
&           In the game, this piece cannot cross the river, restricting
            it to 7 squares on the board (but we do not have a river here);
            Also known as *Bishop* \\
  {th = 1}  %%TYPHOON%%
& {cs = 2}  **Missionary**
&           %%PROMOTES_TO%% [*Otter*](otter.html) \\
====|

### Spiral

On the Spiral the %%PIECE%% follows a pattern similar to the
[*Bishop*](bishop.html), except for the parts the [*Bishop*](bishop.html)
skips; the %%PIECE%% will visit every second square on such parts.
The %%PIECE%% will visit
\(\frac{1}{2} \cdot
((\frac{1}{2} + \frac{1}{4}) \cdot \frac{3}{4} + \frac{1}{4}) =
  \frac{1}{2} \cdot (\frac{9}{16} + \frac{1}{4}) =
  \frac{1}{2} \cdot \frac{13}{16} = \frac{13}{32} = 40.625\%\)
of the squares.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% will escape using a stepwise pattern, 
visiting the right most square, and the square two to the left of the
rightmost square of every row.

#### Flat

On the Flat Wedge, the %%PIECE%% stays to the far right, escaping
along the edge of the Wedge.

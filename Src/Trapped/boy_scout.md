# Boy Scout

<div class = "movement">
. . . . . . . . . . . . . . .
. . . . . . . * . . . . . . .
. . . . . . * . * . . . . . .
. . . . . . . * . . . . . . .
. . . . . . * . * . . . . . .
. . . . . . . * . . . . . . .
. . * . * . * . * . * . * . .
. * . * . * . S . * . * . * .
. . * . * . * . * . * . * . .
. . . . . . . * . . . . . . .
. . . . . . * . * . . . . . .
. . . . . . . * . . . . . . .
. . . . . . * . * . . . . . .
. . . . . . . * . . . . . . .
. . . . . . . . . . . . . . .
Arrow: 7,7 8,8  9,7 10,8 11,7 12,8 13,7 14,8
Arrow: 7,7 8,6  9,7 10,6 11,7 12,6 13,7 14,6;  stroke = red
Arrow: 7,7 6,8  5,7  4,8  3,7  2,8  1,7  0,8;  stroke = red
Arrow: 7,7 6,6  5,7  4,6  3,7  2,6  1,7  0,6
Arrow: 7,7 6,6  7,5  6,4  7,3  6,2  7,1  6,0
Arrow: 7,7 8,6  7,5  8,4  7,3  8,2  7,1  8,0;  stroke = red
Arrow: 7,7 6,8  7,9  6,10 7,11 6,12 7,13 6,14; stroke = red
Arrow: 7,7 8,8  7,9  8,10 7,11 8,12 7,13 8,14
</div>

The **Boy Scout** moves like a %%BISHOP%%, except that it makes a 90&deg;
turn at every step, always moving outwards. So, it alternates turning
clockwise and counterclockwise.

Due to its diagonal movement, the **Boy Scout** is %%COLOUR_BOUND%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  
& {cs = 2}  **Boy Scout**
&           \\
  {th = 1}  
& {cs = 2}  **Crooked Bishop**
&           \\
====|
      
Links: [%%CHESS_V%%](#piece:crookedbishop)

### Spiral

#### Square

On the Square Spiral, the **Boy Scout** follows the spiral, skipping all
the even numbers. Hence, it visits \(50\%\) of the squares. This is more
than the **Boy Scout** does, which only visits \(\frac{5}{16} = 31.25\%\)
of the squares.

#### Diamond

On the Diamond Spiral, the **Boy Scout** visits the same squares as
the %%BISHOP%% does. \(50\%\) of the squares are visited 
using a simple spiral pattern.

### Wedge

#### Folded

The **Boy Scout** follows the Folded Wedge, skipping over the squares
with a colour opposite of its starting square. So, \(50\%\) of the
squares are are visited. This is unlike the %%BISHOP%%, which escapes.

#### Flat

The **Boy Scout** follows a wavy pattern on the Flat Wedge, visiting all
the squares of the same colour as its starting square. Hence, it visits
\(50\%\) of the squares. This is unlike the %%BISHOP%%, which escapes.

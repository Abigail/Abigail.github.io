# %%PIECE%%

The %%PIECE%% moves like a [*Nightrider*](nightrider.html), except that
it alternates between two different %%KIGHT%% moves on each step.
It will always move outwards, and every second move is either on diagonally
three squares away, or orthogonally four squares away.

|====
%%PIECE_HEADERS%%
  {th = 1}  
& {cs = 2}  **Crooked Nightrider**
&           \\
====|
      
### Spiral

#### Square

On the Square Spiral, the %%PIECE%% follows the spiral, skipping all
the even numbers. Hence, it visits \(50\%\) of the squares. This is more
than the %%BISHOP%% does, which only visits \(\frac{5}{16} = 31.25\%\)
of the squares.

#### Diamond

On the Diamond Spiral, the %%PIECE%% visits the same squares as
the %%BISHOP%% does. \(50\%\) of the squares are visited 
using a simple spiral pattern.

### Wedge

#### Folded

The %%PIECE%% follows the Folded Wedge, skipping over the squares
with a colour opposite of its starting square. So, \(50\%\) of the
squares are are visited. This is unlike the %%BISHOP%%, which escapes.

#### Flat

The %%PIECE%% follows a wavy pattern on the Flat Wedge, visiting all
the squares of the same colour as its starting square. Hence, it visits
\(50\%\) of the squares. This is unlike the %%BISHOP%%, which escapes.

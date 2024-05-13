# %%PIECE%%

<div class = "movement">
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . * . . . . . . . . . . . * . . . . . . . . . . . * . .
. . . . * . . . . . . . . . . . . . . . . . . . * . . . .
. . . * . . . . . . . . . * . * . . . . . . . . . * . . .
. . . . . * . . . . . . . . . . . . . . . . . * . . . . .
. . . . . . . * . . . . . . * . . . . . . * . . . . . . .
. . . . . . * . . . . . . . . . . . . . . . * . . . . . .
. . . . . . . . * . . . . * . * . . . . * . . . . . . . .
. . . . . . . . . . * . . . . . . . * . . . . . . . . . .
. . . . . . . . . * . . . . * . . . . * . . . . . . . . .
. . . . . . . . . . . * . . . . . * . . . . . . . . . . .
. . . . . . . . . . . . . * . * . . . . . . . . . . . . .
. . . . * . . . * . . . * . . . * . . . * . . . * . . . .
. . * . . . * . . . * . . . S . . . * . . . * . . . * . .
. . . . * . . . * . . . * . . . * . . . * . . . * . . . .
. . . . . . . . . . . . . * . * . . . . . . . . . . . . .
. . . . . . . . . . . * . . . . . * . . . . . . . . . . .
. . . . . . . . . * . . . . * . . . . * . . . . . . . . .
. . . . . . . . . . * . . . . . . . * . . . . . . . . . .
. . . . . . . . * . . . . * . * . . . . * . . . . . . . .
. . . . . . * . . . . . . . . . . . . . . . * . . . . . .
. . . . . . . * . . . . . . * . . . . . . * . . . . . . .
. . . . . * . . . . . . . . . . . . . . . . . * . . . . .
. . . * . . . . . . . . . * . * . . . . . . . . . * . . .
. . . . * . . . . . . . . . . . . . . . . . . . * . . . .
. . * . . . . . . . . . . . * . . . . . . . . . . . * . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
Arrow: 14,14 12,13 10,14  8,13  6,14  4,13  2,14  0,13;             stroke = red
Arrow: 14,14 12,15 10,14  8,15  6,14  4,15  2,14  0,15
Arrow: 14,14 16,13 18,14 20,13 22,14 24,13 26,14 28,13
Arrow: 14,14 16,15 18,14 20,15 22,14 24,15 26,14 28,15;             stroke = red
Arrow: 14,14 13,12 14,10 13,8  14,6  13,4  14,2  13,0
Arrow: 14,14 15,12 14,10 15,8  14,6  15,4  14,2  15,0;              stroke = red
Arrow: 14,14 13,16 14,18 13,20 14,22 13,24 14,26 13,28;             stroke = red
Arrow: 14,14 15,16 14,18 15,20 14,22 15,24 14,26 15,28
Arrow: 14,14 12,15 11,17  9,18  8,20  6,21  5,23  3,24  2,26  0,27
Arrow: 14,14 13,16 11,17 10,19  8,20  7,22  5,23  4,25  2,26  1,28; stroke = red
Arrow: 14,14 12,13 11,11  9,10  8,8   6,7   5,5   3,4   2,2   0,1;  stroke = red
Arrow: 14,14 13,12 11,11 10,9   8,8   7,6   5,5   4,3   2,2   1,0
Arrow: 14,14 16,13 17,11 19,10 20,8  22,7  23,5  25,4  26,2  28,1
Arrow: 14,14 15,12 17,11 18,9  20,8  21,6  23,5  24,3  26,2  27,0;  stroke = red
Arrow: 14,14 16,15 17,17 19,18 20,20 22,21 23,23 25,24 26,26 28,27; stroke = red
Arrow: 14,14 15,16 17,17 18,19 20,20 21,22 23,23 24,25 26,26 27,28
</div>

The %%PIECE%% moves like a [*Nightrider*](nightrider.html), except that
it alternates between two different %%KNIGHT%% moves on each step.
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

On the Square Spiral, the %%PIECE%% does not get trapped in the
first 10,000 steps. It's unlikely it will later on.

#### Diamond

On the Diamond Spiral, the %%PIECE%% does not get trapped in the
first 10,000 steps. It's unlikely it will later on.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% does not get trapped in the
first 10,000 steps. It's unlikely it will later on.


#### Flat

The %%PIECE%% does get trapped on the Flat Wedge, after no more
than 21 steps.

# %%PIECE%%

The %%PIECE%% alternates between moving like a [*Pawn*](pawn.html)
and a [*Rook*](rook.html), starting with the [*Pawn*](pawn.html).
This means, on odd moves, the %%PIECE%% moves one square forward,
while on even moves, the %%PIECE%% slides over an unlimited squares
orthogonally.

|====
%%PIECE_HEADERS%%
{th = 1}  %%KYOTO_SHOGI%%
       &  **Hifu**
       &  \\
====|

### Spiral

On the Spiral, the %%PIECE%% escapes to the upper right, using
a stepwise pattern.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% visits two squares on each row, 
either the left most square, and second square from the right, or the right
most square and the second square from the left (and it alternates
this between rows). This makes that the %%PIECE%% visits, in the limit,
0% of the squares, but travels over 100% of them.

This makes the pieces sit somewhere between an escaper and a filler.

#### Flat

On the Flat Wedge, the %%PIECE%% visits the two right most squares
of each row, escaping to the upper right.

# Actress

<div class = "movement">
A . . . A . . . A
. * . * * * . * .
. . * * * * * . .
. * * * * * * * .
A * * * S * * * A
. * * * * * * * .
. . * * * * * . .
. * . * * * . * .
A . . . A . . . A
</div>

The **Actress** combines the movements of the
[*Queen*](queen.html), and the [*Gnu*](gnu.html).
(The [*Gnu*](gnu.html) combines
the movements of the [*Knight*](knight.html) and [*Camel*](camel.html).)

|====
%%PIECE_INFO%%
  **Actress** 
& %%OVERKILL%%
& \\
====|

### Spiral

#### Square

<!-- @@ Wazir Actress/CFFNWW Square_Spiral -->

#### Diamond

<!-- @@ Blind_Monkey Actress/CFFNWW Diamond_Spiral -->

### Wedge

#### Folded

<!-- @@ Flying_Cock Actress/CFFNWW Folded_Wedge -->

#### Flat

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fl --div l CFFNWW 
% Box: [-1, 1] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |   26 |   25 | 1982 |
+------+------+------+------+------+------+------+
|    . |    . | 4086 |   *  |   25 | 1931 |    . |
+------+------+------+------+------+------+------+
| 1925 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

On the Flat Wedge, the **Actress** fills the entire board in a not
very interesting pattern.

The **Actress** makes use of a limited set of moves on the Flat Wedge.
Only left-backwards %%CAMEL%% moves are made to move the **Actress**
backward. To move the **Actess** forward, only right-forward
%%CAMEL%%, %%KNIGHT%% or single-square %%BISHOP%% moves are made.
Furthermore, the **Actress** moves sideways using one and two square
%%ROOK%% moves.

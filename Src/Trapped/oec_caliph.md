# Caliph

<div class = "movement">
A . . . . . . . A
. * . * . * . * .
. . * . . . * . .
. * . * . * . * .
. . . . S . . . .
. * . * . * . * .
. . * . . . * . .
. * . * . * . * .
A . . . . . . . A
</div>

The **Caliph** either slides a unlimited number of unoccupied
squares diagonally (like the [*Bishop*](bishop.html)), or jumps
to a square which is three away in one orthogonal direction,
one away in the other (a [*Camel*](camel.html) jump).
This makes the **Caliph** %%COLOUR_BOUND%%.

|====
%%PIECE_INFO%%
  **Caliph**
& %%OVERKILL%%
& The [*Wazir*](wazir.html)-[*Alfil*](alfil.html) compound
  is also called [*Caliph*](caliph.html) \\
  **Flying Dragon**
& %%GANYMEDE%%
& %%PROMOTED%% [*Dragon*](dragon_a2c.html) \\
====|

### Spiral

#### Square

<div class = 'heatmap left'>
% ./trapped -m G -l s_sq --div l -z 5 CFF 
% Box: [-3, 3] [-3, 3]
+-----+-----+-----+-----+-----+-----+-----+
|   . |   . | 207 |   . | 124 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+
|   . |  12 |   . |   . |   . |  11 |   . |
+-----+-----+-----+-----+-----+-----+-----+
| 151 |   . |  40 |   . |  58 |   . | 192 |
+-----+-----+-----+-----+-----+-----+-----+
|   . |   . |   . |  *  |   . |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+
| 186 |   . |  45 |   . |  45 |   . | 138 |
+-----+-----+-----+-----+-----+-----+-----+
|   . |  11 |   . |   . |   . |   9 |   . |
+-----+-----+-----+-----+-----+-----+-----+
|   . |   . | 111 |   . | 223 |   . |   . |
+-----+-----+-----+-----+-----+-----+-----+
</div>

On the Square Spiral, the **Caliph** gets trapped after 1,563 steps.

As can be seen from the heatmap on the left, on the Square Spiral,
the **Caliph** makes use of all its 8 possible %%CAMEL%% moves,
and 8 of the possible %%BISHOP%% moves: only one and two square
moves are made. It makes far more %%CAMEL%% moves than %%BISHOP%%
moves.

#### Diamond

<!-- @@ Ferz Caliph/CFF Diamond_Spiral -->

### Wedge

#### Folded

<div class = 'heatmap left'>
% ./trapped -m 10k -l w_fo --div l -z 5 CFF 
% Box: [-3, 3] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |  435 |    . |  450 |    . |    . |
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
| 1610 |    . |  436 |    . |  450 |    . | 1606 |
+------+------+------+------+------+------+------+
|    . |    . |    . |   *  |    . |    . |    . |
+------+------+------+------+------+------+------+
|  957 |    . | 1171 |    . | 1156 |    . |  926 |
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
|    . |    . |  397 |    . |  406 |    . |    . |
+------+------+------+------+------+------+------+
</div>

Using a simple, but pretty, pattern, the **Caliph** fills 50% 
(due to it being colourbound) of the Folded Wedge.

As can be seen from the heatmap on the left, on the Folded Wedge,
the **Caliph** makes use of all its 8 %%CAMEL%% moves, but it only
makes %%BISHOP%% moves of one square.

#### Flat

<div class = 'heatmap right'>
% ./trapped -m 10k -l w_fl --div r -z 5 CFF 
% Box: [-1, 1] [-3, 3]
+------+------+------+------+------+------+------+
|    . |    . |    . |    . |  199 |    . | 4851 |
+------+------+------+------+------+------+------+
|    . |    . |    . |   *  |    . |    . |    . |
+------+------+------+------+------+------+------+
| 4950 |    . |    . |    . |    . |    . |    . |
+------+------+------+------+------+------+------+
</div>

Using a very simple pattern, the **Caliph** fills 50% (due to it
being colourbound) of the Flat Wedge. While simple, the travel pattern
is interesting in the sense that the path the **Caliph** traces
does not intersect itself. For the Flat Wedge, that's pretty rare
for a piece which fills the Wedge.

As can been seen from the heatmap on the right, on the Flat Wedge
the **Caliph** makes use of only three different moves: two
%%CAMEL%% moves, and one, one square, %%BISHOP%% move.

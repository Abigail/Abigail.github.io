# Knight (Sh&#x14d;gi)

<div class = "movement">
. . . . .
. * . * .
. . . . .
. . S . .
. . . . .
</div>

The (Sh&#x14d;gi) **Knight** jumps to a square which is two squares ahead,
and one square sideways. These are the two most forward moves the
%%KNIGHT%% from (Western) Chess has.

The %%KNIGHT%% from Western Chess moves differently.
*Cavalry Chess* also has a piece called a *Knight*, but that moves 
like the [*Buffalo*](buffalo.html); this game also has a piece called
*Knight King* which moves like a [*Centaur*](centaur.html).
The [*Knight*](knight_euro.html) in %%EURO_SHOGI%% also moves
differently.

|====
%%PIECE_INFO%%
  **Knight**
& %%SHOGI%%; %%MICRO_SHOGI%%
& \\
====|

### Spiral

#### Square

<div class = 'heatmap right'>
% ./trapped -m 100 -l s_sq --div r fN 
% Box: [-2, 0] [0, 1]
+-----+-----+
|   . | 100 |
+-----+-----+
|   . |   . |
+-----+-----+
|  *  |   . |
+-----+-----+
</div>

<div class = 'path left'>
0 0 -2 1
</div>

The **Knight** escapes in a straight, slanted, line to infinity, with
an escape velocity of \(\sqrt{5}\).

As can be seen from the heatmap on the right, the **Knight** will only
make its forward right movement.

#### Diamond

<div class = 'heatmap left'>
% ./trapped -m 100 -l s_d --div l fN 
% Box: [-2, 0] [-1, 1]
+----+----+----+
| 50 |  . | 50 |
+----+----+----+
|  . |  . |  . |
+----+----+----+
|  . |  * |  . |
+----+----+----+
</div>

<div class = 'path right'>
0 0 -2 1 -2 -1
</div>

The **Knight** escapes straight ahead, bouncing between two files.
In two steps, it moves four squares ahead, for an escape velocity of \(2\).

As can be seen from the heatmap on the left, it makes an equal amount
of both its possible movements.

### Wedge

<div class = 'heatmap right'>
% ./trapped -m 100 -l w_fo --div r fN 
% Box: [-2, 0] [0, 1]
+-----+-----+
|   . | 100 |
+-----+-----+
|   . |   . |
+-----+-----+
|  *  |   . |
+-----+-----+
</div>

<div class = 'path left'>
0 0 -2 1
</div>

On both the Folded and the Flat Wedge, the **Knight**
escapes to infinity using the same line as on the Square Spiral.
The escape velocity is \(\sqrt{5}\).

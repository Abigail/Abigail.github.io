# %%PIECE%%

The %%PIECE%% moves either like the [*Dabbaba*](dabbaba.html), 
the [*Knight*](knight.html) or the [*Alfil*](alfil.html). That is,
the **Squirrel** jumps to a square which is two away in one orthogonal
direction, and no more than two in the other.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%RENN_CHESS%%
& {cs = 2}  **Castle**
&           \\
  {th = 1}  %%COMPOUND_LEAPERS%%
& {cs = 2; rs = 2}
            **Squirrel**
&           \\
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
&           %%PROMOTED%% [*Camel*](camel.html) \\
====|


### Spiral

#### Square

On the Square Spiral, the %%PIECE%% doesn't get trapped in
the first billion steps. It may get trapped later, or remain free.

#### Diamond

On the Diamond Spiral, the %%PIECE%% uses a unique pattern: instead
of circling the origin, just before it completes a revolution, it
reverses direction. A few other pieces show this behaviour, but they
reverse below the origin. The %%PIECE%% reverses direction forward
and to the left of the origin.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% does not get trapped, and it visit every
square of the Wedge in an interesting pattern.

#### Flat

On the Flat Wedge, the %%PIECE%% doesn't get trapped in
the first billion steps. It may get trapped later, or remain free.

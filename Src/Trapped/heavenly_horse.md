# %%PIECE%%

The %%PIECE%% leaps to a square which is two squares away forward or
backward, and one away to the right or left. This is equivalent to
half the moves of the %%KNIGHT%%.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%WA_SHOGI%%
&           **Heavenly Horse** & &#x5929;&#x99AC;
&           %%PROMOTED%% [*Liberated Horse*](liberated_horse.html) \\
====|

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% visits \(25\%\) of the squares, in a 
diamond shaped pattern. The path it traces never intersects itself.

#### Diamond

On the Diamond Spiral, the %%PIECE%% traces the same path as on the
Square Spiral, but flipped horizontally. \(25\%\) of the squares
will be visited.

### Wedge

On both the Folded and Flat Wedge, the %%PIECE%% quickly escapes
to the upper right. It uses a four step loop to move four squares
to the upper right, giving it an escape velocity of 
\(\sqrt{2}\). This is somewhat remarkable, as all the steps the
%%PIECE%% takes move to a square \(\sqrt{5}\) away.

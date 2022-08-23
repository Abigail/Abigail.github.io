# %%PIECE%%

The %%PIECE%% moves either as the [*Knight*](knight.html) or
the [*Camel*](camel.html), making it both a *Knighted Piece*
and a %%COMPOUND_LEAPER%%. The %%PIECE%% jumps to a square which
is one away in one orthogonal direction, and two or three in the
other orthogonal direction.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%OVERKILL%%; Problemists
& {cs = 2}  **Gnu**
&           \\
  {th = 1}  %%SCIROCCO%%; %%TYPHOON%%
& {cs = 2; rs = 2}
            **Wildebeest**
&           %%PROMOTED%% [*Commoner*](king.html?piece=commoner) \\
  {th = 1}  %%WILDEBEEST%%
&           The *Wildebeest* is one of the two pieces a
            [*Pawn*](pawn.html) may promote to. \\
====|

Link: [%%CHESS_V%%](#piece:gnus)

### Spiral

#### Square

On the Square Spiral, the %%PIECE%% circles the origin clockwise, in an
irregular pattern. It doesn't get trapped in the first billion
steps, but it is not clear whether it will never get trapped.

#### Diamond

On the Diamond Square, it takes a long time for the %%PIECE%% to
get trapped, but it does so on step 136,022,083.

### Wedge

#### Folded

On the Folded Wedge, the travelling pattern of the %%PIECE%% is less
irregular than the pattern on the Spiral, but it doesn't seem to
complete stabalize into something regular. The %%PIECE%% does not
get trapped for its first billion steps.

#### Flat

On the Flat Wedge, the %%PIECE%% will fill the entire board. It quickly
travels in a regular pattern, filling the board with a bias to the
right hand side.

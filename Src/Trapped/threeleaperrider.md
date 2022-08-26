# %%PIECE%%

At each move, the %%PIECE%% makes one or more steps as the
[*Threeleaperr*](threeleaper.html) does, provided all the steps are
in the same direction, and all squares it steps over are unoccupied.

That is, it moves 3, 6, 9, 12, etc squares in an orthogonal direction,
as long as each 3<sup>rd</sup> square is unoccupied. (It may leap
over any other occupied squares).

The %%PIECE%% moves in a similar way as the [Rook](rook.html),
except the path is blown up by a factor of 3.

|====
%%PIECE_HEADERS%%
  {th = 1}  %%RIDERS%%
& {cs = 2}  **Threeleaperrider**
&           \\
====|

### Spiral

#### Square

On the Spiral, the %%PIECE%% spirals outward, visiting
\(\frac{1}{9} = 11.\overline{1} \%\) of the squares.

#### Diamond

On the Diamond Spiral, the %%PIECE%% uses a regular pattern to fill
\(\frac{5}{8 * 9} = 6.9\overline{4}\%\) of the board.
This is the same pattern the %%ROOK%% uses, but blown up by a factor
of three.

### Wedge

#### Folded

On the Folded Wedge, the %%PIECE%% gets trapped after 6 steps.

#### Flat

On the Flat Wedge, the %%PIECE%% vists two squares on
every third row, and hence, quickly escapes to infinity, with
an escape velocity of \(\frac{3 \sqrt{2}}{2}\).

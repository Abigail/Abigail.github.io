# Trapped Chess Pieces

## Introduction

## Spiral

## Wedge

### List of pieces

Below we list the pieces we have examined to see how they are moving
on the chess board using the rules explained above. They are grouped
from the game(s) they come from. Pieces can be listed multiple times.

Each piece is classified to be one of:

<dl markdown="1">
<dt class = 'trapped'>T/NNNN</dt>
<dd>This indicates the piece gets trapped after NNNN steps.
<dt class = 'unknown'>?/NNNN</dt>
<dd>A piece which doesn't get trapped for at least NNNN steps, but
    for which it isn't clear it will get trapped or not.
<dt class = 'boring'>W, BM, FC</dt>
<dd>This indicates the piece has the necessary movement options to follow
    all the squares in the same order as the values placed on the square.
    This results in a very boring pattern. <br>
    For the Square Spiral, this happens if the piece can move as the
    [Wazir](wazir.html) (being able to step one square in an orthogonal
    direction). For the Diamond Square, this happens if the piece can
    move like the [*Blind Monkey*](blind_monkey.html).
    For the Folded Wedge, this happens if the piece can
    move as the [Flying Cock](flying_cock.html) (being able to step one
    square in sideways, or one square diagonally forward).<br>
    The piece may have additional move options available, but they will
    not be used.<br>
    There is no equivalence for the Flat Wedge.
<dt class = 'fill'>F/XX.XX%</dt>
<dd>This is a piece which won't get trapped, and which will eventually
    fill XX.XX% of the board, in a regular fashion, where XX.XX% > 0</dd>
<dt class = 'interesting-fill'>F*/XX.XX%</dt>
<dd>As above, this is a piece which won't get trapped, and which will
    fill XX.XX% of the board, but the way it does is somewhat
    interesting.
<dt class = 'escape'>E</dt>
<dd>This is a piece which escapes to infinity without filling a significant
    percentage of the board.</dd>
<dt class = 'interesting-escape'>E*</dt>
<dd>This is a piece which escapes to infinity without filling a significant
    percentage of the board, but does it in way which is interesting
    or unique.</dd>
</dl>

<div class = "index"></div>

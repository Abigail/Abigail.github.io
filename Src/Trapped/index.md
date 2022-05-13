# Trapped Chess Pieces

## Introduction

## Spiral

### List of pieces

Below we list the pieces we have examined to see how they are moving
on the chess board using the rules explained above. They are grouped
from the game(s) they come from. Pieces can be listed multiple times.

Each piece is classified to be one of:

<dl markdown="1">
<dt>(T/`NNNN`)</dt>
<dd>This indicates the piece gets trapped after `NNNN` steps. We will
    mark those pieces in ***bold italics***.</dd>
<dt>(F/`XX.XX%`)</dt>
<dd>This is a piece which won't get trapped, and which will eventually
    fill `XX.XX%` of the board, in a regular fashion, where `XX.XX% > 0`</dd>
<dt>(F*/`XX.XX%`)</dt>
<dd>As above, this is a piece which won't get trapped, and which will
    fill `XX.XX%` of the board, but the way it does is somewhat
    interesting. We will mark those pieces in *italics*.</dd>
<dt>(E)</dt>
<dd>This is a piece which escapes to infinity without filling a significant
    percentage of the board.</dd>
</dl>

#### Trapped Pieces

Since the trapped pieces are the most interesting, they deserve to be
listed in their own category, in order of the number of steps it takes
before the piece gets trapped:
[***Knight***](knight.html) (T/2015),
[***Camel***](camel.html) (T/3722),
[***Zebra***](zebra.html) (T/4633), and
[***Archbishop***](archbishop.html) (T/6386).

#### Interesting Filling Pieces

Most pieces will not get trapped, and visit a non-zero percentage
of the squares. And most of them do so in a boring fashion.

A few pieces fill the board in a more interesting way:

* [*Bishop*](bishop.html) (F*/31.25%), and
* [*Silver General/&#x9280;&#x5c07;*](silver_general.html), (F*/100%)

#### Chess

[Chess](#wiki) has six pieces:
[King](king.html) (F/100%),
[Queen](queen.html) (F/100%),
[Rook](rook.html) (F/100%),
[*Bishop*](bishop.html) (F*/31.25%),
[***Knight***](knight.html) (T/2015), and
[Pawn](pawn.html) (E).

#### Basic Leapers

The basic leapers are chess pieces which can leap (that is, they cannot
be blocked by another piece) up to three squares away (in either direction).
The moves of most other pieces can be described as a combination of
moves of the basic leapers.

We recognize the following basic leapers:
[Wazir](wazir.html) (F/100%),
[Ferz](ferz.html) (F/50%),
[Dabbaba](dabbaba.html) (F/25%),
[***Knight***](knight.html) (T/2015),
[Alfil](alfil.html) (F/11.1%),
[Threeleaper](threeleaper.html) (F/11.1%),
[***Camel***](camel.html) (T/3722),
[***Zebra***](zebra.html) (T/4633), and
[Tripper](tripper.html) (F/6.25%).

#### Knighted Pieces

A Knighted piece is a *compound* piece which combines the movement 
of one or more pieces with the movement of a [Knight](knight.html).

We have the following Knighted pieces:
[***Archbishop***](archbishop.html) =
[Bishop](bishop.html) + [Knight](knight.html) (T/6386),
Chancellor =
[Rook](rook.html) + [Knight](knight.html) (F/100%), and
Amazon =
[Queen](queen.html) + [Knight](knight.html) (F/100%),

#### Shogi

While [Shogi (&#x5c06;&#x68cb;)](#wiki:Shogi) at first sight looks
very different from Chess or any of its variants, it still
is a form of Chess (sometimes called Japanese Chess), and
we can investigate how their pieces moves. In fact, some of
its pieces move the same as in Chess, or as one of the other
pieces mentioned above.

We have the following pieces in Shogi:

* [King General/&#x738b;&#x5c07; and
   Jeweled General/&#x7389;&#x5c07;](king.html) (King) (F/100%),
* [Flying Chariot/&#x98db;&#x8eca;](rook.html) (Rook) (F/100%)
* Dragon King/&#x9f8d;&#x738b; (Promoted Rook), (F/100%)
* [*Angle Mover/&#x89d2;&#x884c;*](bishop.html) (Bishop) (F/31.25%),
* Dragon Horse/&#x9f8d;&#x99ac;, (Promoted Bishop) (F/100%)
* [Gold General/&#x91d1;&#x5c07;](gold_general.html) (F/100%),
* [*Silver General/&#x9280;&#x5c07;*](silver_general.html), (F*/100%)
* [Promoted Silver/&#x6210;&#x9280;](gold_general.html) (F/100%),
* Katsure Horse/&#x6842;&#x99ac; (Knight), (E)
* [Promoted Katsura/&#x6210;&#x6842;](gold_general.html)
  (Promoted Knight) (F/100%),
* Incense Chariot/&#x9999;&#x8eca; (Lance) (E),
* [Promote Incense/&#x6210;&#x9999;](gold_general.html)
  (Promoted Lance) (F/100%),
* [Foot Soldier/&#x6b69;&#x5175;](pawn.html) (Pawn) (E), and
* [Reaches Gold/&#x3068;&#x91d1;](gold_general.html) (Promoted Pawn) (F/100%).

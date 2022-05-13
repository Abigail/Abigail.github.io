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

* [***Hunter***](hunter.html) (T/146),
* [***Antelope***](antelope.html) (T/1887),
* [***Knight***](knight.html) (T/2015),
* [***Stag***](stag.html) (T/2015),
* [***Camel***](camel.html) (T/3722),
* [***Zebra***](zebra.html) (T/4633),
* [***Archbishop***](archbishop.html) (T/6386), and
* [***Giraffe***](giraffe.html) (T/13102).

#### Interesting Filling Pieces

Most pieces will not get trapped, and visit a non-zero percentage
of the squares. And most of them do so in a boring fashion.

A few pieces fill the board in a more interesting way:

* [*Bishop*](bishop.html) (F*/31.25%),
* [*Silver General/&#x9280;&#x5c07;*](silver_general.html), (F*/100%), and
* [*Falcon*](falcon.html) (F*/25%).

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
be blocked by another piece) up to four squares away (in either direction).
The moves of most other pieces can be described as a combination of
moves of the basic leapers.

We recognize the following basic leapers:

* [Wazir](wazir.html) (F/100%),
* [Ferz](ferz.html) (F/50%),
* [Dabbaba](dabbaba.html) (F/25%),
* [***Knight***](knight.html) (T/2015),
* [Alfil](alfil.html) (F/12.5%),
* [Threeleaper](threeleaper.html) (F/11.1%),
* [***Camel***](camel.html) (T/3722),
* [***Zebra***](zebra.html) (T/4633),
* [Tripper](tripper.html) (F/5.56%),
* [Fourleaper](fourleaper.html) (F/6.25%),
* [***Giraffe***](giraffe.html) (T/13102),
* [***Stag***](stag.html) (T/2015),
* [***Antelope***](antelope.html) (T/1887), and
* [Commuter](commuter.html) (F/3.125%).

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

* [King General/&#x738b;&#x5c07;](king.html?piece=king_general) and
  [Jeweled General/&#x7389;&#x5c07;](king.html?piece=jeweled_general)
  (King) (F/100%),
* [Flying Chariot/&#x98db;&#x8eca;](rook.html?piece=flying_chariot)
  (Rook) (F/100%)
* [Dragon King/&#x9f8d;&#x738b;](dragon_king.html) (Promoted Rook), (F/100%)
* [*Angle Mover/&#x89d2;&#x884c;*](bishop.html?piece=angle_mover)
  (Bishop) (F/31.25%),
* [Dragon Horse/&#x9f8d;&#x99ac;](dragon_horse.html), (Promoted Bishop) (F/100%)
* [Gold General/&#x91d1;&#x5c07;](gold_general.html) (F/100%),
* [*Silver General/&#x9280;&#x5c07;*](silver_general.html), (F*/100%)
* [Promoted Silver/&#x6210;&#x9280;](gold_general.html?piece=promoted_silver)
  (F/100%),
* [Katsura Horse/&#x6842;&#x99ac;](katsura_horse.html) (Knight) (E),
* [Promoted Katsura/&#x6210;&#x6842;](gold_general.html?piece=promoted_katsura)
  (Promoted Knight) (F/100%),
* [Incense Chariot/&#x9999;&#x8eca;](incense_chariot.html) (Lance) (E),
* [Promoted Incense/&#x6210;&#x9999;](gold_general.html?piece=promoted_incense)
  (Promoted Lance) (F/100%),
* [Foot Soldier/&#x6b69;&#x5175;](pawn.html?piece=foot_soldier) (Pawn) (E), and
* [Reaches Gold/&#x3068;&#x91d1;](gold_general.html?piece=promoted_pawn)
  (Promoted Pawn) (F/100%).


#### Falcon-Hunter Chess

[Falcon-Hunter Chess](#wiki:Falcon-hunter_chess) is a chess variant
invented by Karl Schultz in 1943.

It introduces two new pieces:

* [***Hunter***](hunter.html) (T/146), and
* [*Falcon*](falcon.html) (F*/25%).
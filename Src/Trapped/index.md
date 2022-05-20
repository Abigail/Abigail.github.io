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
<dt class = 'unknown'>?</dt>
<dd>A piece which doesn't get trapped for at least 20,000 steps, but
    for which it isn't clear it will get trapped or not.
<dt class = 'boring'>W, GG</dt>
<dd>A piece which can move at least as the [Wazir](wazir.html) (on the Spiral)
    or the [Gold General](gold_general.html) (on the Wedge). The Gold
    General moves as either the [Wazir](wazir.html) or the forward
    [Ferz](ferz.html). (The piece may have additional movement possibilities).
    This results in a very
    boring movement, where the piece visits each square of the
    board, in the order of the values.
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

|====
{th = 1} Piece  &
{th = 1} From   &
{th = 1} Spiral &
{th = 1} Wedge  \\
[King](king.html)                  & {rs = 6} Chess
                                   & W         & GG       \\
[Queen](queen.html)                & W         & GG       \\
[Rook](rook.html)                  & W         & T/6      \\
[Bishop](bishop.html)              & F*/31.25% & E        \\
[Knight](knight.html)              & T/2015    & T/50     \\
[Pawn](pawn.html)                  & E         & E        \\

[Wazir](wazir.html)                & {rs = 15} Basic Leapers
                                   & W         & T/6      \\
[Ferz](ferz.html)                  & F/50%     & E        \\
[Dabbaba](dabbaba.html)            & F/25%     & E        \\
[Knight](knight.html)              & T/2015    & T/50     \\
[Alfil](alfil.html)                & F/12.5%   & E        \\
[Threeleaper](threeleaper.html)    & F/11.1%   & T/6      \\
[Camel](camel.html)                & T/3722    & T/342    \\
[Zebra](zebra.html)                & T/4633    & T/80     \\
[Tripper](tripper.html)            & F/5.56%   & E        \\
[Fourleaper](fourleaper.html)      & F/6.25%   & E        \\
[Giraffe](giraffe.html)            & T/13102   & T/114    \\
[Stag](stag.html)                  & T/2015    & E*       \\
[Antelope](antelope.html)          & T/1887    & T/128    \\
[Commuter](commuter.html)          & F/3.125%  & E        \\
[Flamingo](flamingo.html)          & ?         & T/90     \\

[King](king.html) = [Wazir](wazir.html) + [Ferz](ferz.html)
                                   & {rs = 12} Combined Leapers
                                   & W         & GG       \\
[Squirrel](squirrel.html) = [Dabbaba](dabbaba.html) + [Knight](knight.html) +
                            [Alfil](alfil.html) 
                                   & ?         & F*/100%  \\
[Caliph](caliph.html) = [Wazir](wazir.html) + [Alfil](alfil.html)
                                   & W         & F*/100%  \\
[Hawk](hawk.html) = [Alfil](alfil.html) + [Dabbaba](dabbaba.html) +
                    [Threeleaper](threeleaper.html) + [Tripper](tripper.html)
                                   & F*/100%   & F*/100%  \\
[Champion](champion.html) = [Wazir](wazir.html) + [Dabbaba](dabbaba.html) +
                            [Alfil](alfil.html)
                                   & W         & F/100%   \\
[Wizard](wizard.html) = [Ferz](ferz.html) + [Camel](camel.html)
                                   & ?         & F*/50%   \\
[Gnu](gnu.html) = [Knight](knight.html) + [Camel](camel.html)
                                   & ?         & ?        \\
[Bison](bison.html) = [Camel](camel.html) + [Zebra](zebra.html)
                                   & ?         & ?        \\
[Okapi](okapi.html) = [Knight](knight.html) + [Zebra](zebra.html)
                                   & ?         & ?        \\
[Zebu](zebu.html) = [Camel](camel.html) + [Giraffe](giraffe.html)
                                   & ?         & ?        \\
[Root 25 Leaper](root_25_leaper.html) = [Antelope](antelope.html) +
                                        (5,0)-leaper
                                   & ?         & ?        \\
[Root 50 Leaper](root_50_leaper.html) = (5,5)-leaper + (7,1)-leaper
                                   & ?         & ?        \\

[Dragon](dragon.html) = [Pawn](pawn.html) + [Knight](knight.html)
                                   & {rs = 6} Knighted Pieces
                                   & ?         & T/42     \\
[Archbishop](archbishop.html)/[Princess](archbishop.html?piece=princess)
                             = [Bishop](bishop.html) + [Knight](knight.html)
                                   & T/6386    & F/100%   \\
[Chancellor](chancellor.html)/[Empress](chancellor.html?piece=empress)
                             = [Rook](rook.html) + [Knight](knight.html)
                                   & W         & F/100%   \\
[Amazon](amazon.html) =  [Queen](queen.html) + [Knight](knight.html)
                                   & W         & GG       \\
[Gnu](gnu.html) = [Camel](camel.html) + [Knight](knight.html)
                                   & ?         & ?        \\
[Okapi](okapi.html) = [Zebra](zebra.html) + [Knight](knight.html)
                                   & ?         & ?        \\

[Dragon](dragon.html) = [Knight](knight.html) + [Pawn](pawn.html)
                                   & {rs = 2} Pawned Pieces
                                   & ?         & T/42     \\
[Gryphon](gryphon.html) = [Bishop](bishop.html) + [Pawn](pawn.html)
                                   & T/67      & E        \\

[King General/&#x738b;&#x5c07;](king.html?piece=king_general)
                                   & {rs = 15}
                                     [Shogi (&#x5c06;&#x68cb;)](#wiki:Shogi)
                                   & {rs = 2} W  & {rs = 2} GG \\
[Jeweled General/&#x7389;&#x5c07;](king.html?piece=jeweled_general) \\
[Flying Chariot/&#x98db;&#x8eca;](rook.html?piece=flying_chariot) (Rook)
                                   & W      & T/6 \\
[Dragon King/&#x9f8d;&#x738b;](dragon_king.html) (Promoted Rook)
                                   & W      & GG     \\
[Angle Mover/&#x89d2;&#x884c;](bishop.html?piece=angle_mover) (Bishop)
                                   & F*/31.25% & E \\
[Dragon Horse/&#x9f8d;&#x99ac;](dragon_horse.html), (Promoted Bishop)
                                   & W      & GG     \\
[Gold General/&#x91d1;&#x5c07;](gold_general.html)
                                   & W      & GG     \\
[Silver General/&#x9280;&#x5c07;](silver_general.html)
                                   & F*/100% & E \\
[Promoted Silver/&#x6210;&#x9280;](gold_general.html?piece=promoted_silver)
                                   & W      & GG     \\
[Katsura Horse/&#x6842;&#x99ac;](katsura_horse.html) (Knight)
                                   & E & E \\
[Promoted Katsura/&#x6210;&#x6842;](gold_general.html?piece=promoted_katsura)
  (Promoted Knight)                & W      & GG     \\
[Incense Chariot/&#x9999;&#x8eca;](incense_chariot.html) (Lance)
                                   & E & E \\
[Promoted Incense/&#x6210;&#x9999;](gold_general.html?piece=promoted_incense)
  (Promoted Lance)                 & W      & GG     \\
[Foot Soldier/&#x6b69;&#x5175;](pawn.html?piece=foot_soldier) (Pawn)
                                   & E & E \\
[Reaches Gold/&#x3068;&#x91d1;](gold_general.html?piece=reaches_gold)
  (Promoted Pawn)                  & W      & GG     \\

[Hunter](hunter.html)              & {rs = 2} [Falcon-Hunter
                                               Chess](#wiki:Falcon-hunter_chess)
                                   & T/146     & E        \\
[Falcon](falcon.html)              & F*/25%    & E        \\
[Champion](champion.html)          & {rs = 2} [Omega Chess](#wiki) 
                                   & W         & F/100%   \\
[Wizard](wizard.html)              & ?         & F*/50%   \\

====|


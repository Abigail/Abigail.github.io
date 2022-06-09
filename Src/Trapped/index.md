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
<dt class = 'boring'>W, FC</dt>
<dd>This indicates the piece has the necessary movement options to follow
    all the squares in the same order as the values placed on the square.
    This results in a very boring pattern. <br>
    For the Spiral, this happens if the piece can move as the
    [Wazir](wazir.html) (being able to step one square in an orthogonal
    direction). For the Folded Wedge, this happens if the piece can
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

|====
{th = 1; rs = 2} Piece  &
{th = 1; rs = 2} From   &
{th = 1; rs = 2} Spiral &
{th = 1; cs = 2} Wedge  \\
{th = 1} Folded & {th = 1} Flat \\
[King](king.html)
        & {rs = 6} Chess
        & W
        & FC
        & F/100%
        \\
[Queen](queen.html)
        & W
        & FC
        & F/100%
        \\
[Rook](rook.html)
        & W
        & T/6
        & E
        \\
[Bishop](bishop.html)
        & F*/31.25%
        & E
        & E
        \\
[Knight](knight.html)
        & T/2015
        & T/50
        & E*
        \\
[Pawn](pawn.html)
        & E
        & E
        & E
        \\



[Wazir](wazir.html)
        & {rs = 15} Basic Leapers
        & W
        & T/6
        & E
        \\
[Ferz](ferz.html)                 
        & F/50%
        & E
        & E
        \\
[Dabbaba](dabbaba.html)
        & F/25%
        & E
        & E
        \\
[Knight](knight.html)
        & T/2015
        & T/50
        & E*
        \\
[Alfil](alfil.html)
        & F/12.5%
        & E
        & E
        \\
[Threeleaper](threeleaper.html)
        & F/11.1%
        & T/6
        & E
        \\
[Camel](camel.html)
        & T/3722
        & T/342
        & T/2401
        \\
[Zebra](zebra.html)
        & T/4633
        & T/80
        & T/286
        \\
[Tripper](tripper.html)
        & F/5.56%
        & E
        & E
        \\
[Fourleaper](fourleaper.html)
        & F/6.25%
        & E
        \\
[Giraffe](giraffe.html)
        & T/13102
        & T/114
        \\
[Stag](stag.html)
        & T/2015
        & E*
        \\
[Antelope](antelope.html)
        & T/1887
        & T/128
        \\
[Commuter](commuter.html)
        & F/3.125%
        & E
        \\
[Flamingo](flamingo.html)
        & ?
        & T/90
        \\

[King](king.html) = [Wazir](wazir.html) + [Ferz](ferz.html)
        & {rs = 12} Combined Leapers
        & W
        & FC
        \\
[Squirrel](squirrel.html) = [Dabbaba](dabbaba.html) + [Knight](knight.html) +
                            [Alfil](alfil.html) 
        & ?
        & F*/100%
        \\
[Caliph](caliph.html) = [Wazir](wazir.html) + [Alfil](alfil.html)
        & W
        & F*/100%
        & E
        \\
[Hawk](hawk.html) = [Alfil](alfil.html) + [Dabbaba](dabbaba.html) +
                    [Threeleaper](threeleaper.html) + [Tripper](tripper.html)
        & F*/100%
        & F*/100% 
        \\
[Champion](champion.html) = [Wazir](wazir.html) + [Dabbaba](dabbaba.html) +
                            [Alfil](alfil.html)
        & W
        & F/100%
        & F/100%
        \\
[Wizard](wizard.html) = [Ferz](ferz.html) + [Camel](camel.html)
        & ?
        & F*/50%
        & F/50%
        \\
[Gnu](gnu.html) = [Knight](knight.html) + [Camel](camel.html)
        & ?
        & ?
        & F*/100%
        \\
[Bison](bison.html) = [Camel](camel.html) + [Zebra](zebra.html)
        & ?
        & ?
        \\
[Okapi](okapi.html) = [Knight](knight.html) + [Zebra](zebra.html)
        & ?
        & ?
        \\
[Zebu](zebu.html) = [Camel](camel.html) + [Giraffe](giraffe.html)
        & ?
        & ?
        \\
[Root 25 Leaper](root_25_leaper.html) = [Antelope](antelope.html) +
                                        (5,0)-leaper
        & ?
        & ?
        \\
[Root 50 Leaper](root_50_leaper.html) = (5,5)-leaper + (7,1)-leaper
        & ?
        & ?
        \\



[Wazirrider](rook.html) ([Rook](rook.html))
        & {rs = 9} Riders
        & W
        & T/6
        & E
        \\
[Ferzrider](bishop.html) ([Bishop](bishop.html))
        & F*/31.25%
        & E
        & E
        \\
[Dabbabarider](dabbabarider.html)
        & F/25%
        & E
        & E
        \\
[Knightrider](knightrider.html)
        & T/509
        & T/60
        & T/22
        \\
[Alfilrider](alfilrider.html)
        & F*/7.8125%
        & E
        & E
        \\
[Threeleaperrider](threeleaperrider.html)
        & F/11.1&#x0305;%
        & T/6
        & E
        \\
[Camelrider](camelrider.html)
        & T/1697
        & T/90
        & T/482
        \\
[Zebrarider](zebrarider.html)
        & T/266
        & T/72
        & T/57
        \\
[Tripperrider](tripperrider.html)
        & F*/3.472&#x0305;%
        & E
        & E
        \\



[Dragon](dragon.html) = [Pawn](pawn.html) + [Knight](knight.html)
        & {rs = 6} Knighted Pieces
        & ?
        & T/42     \\
[Archbishop](archbishop.html)/[Princess](archbishop.html?piece=princess)
                             = [Bishop](bishop.html) + [Knight](knight.html)
        & T/6386
        & F*/100%
        & F*/100%   \\
[Chancellor](chancellor.html)/[Empress](chancellor.html?piece=empress)
                             = [Rook](rook.html) + [Knight](knight.html)
        & W
        & F/100%
        & F/100%   \\
[Amazon](amazon.html) =  [Queen](queen.html) + [Knight](knight.html)
        & W
        & FC
        & F/100%       \\
[Gnu](gnu.html) = [Camel](camel.html) + [Knight](knight.html)
        & ?
        & ?
        & F*/100%
        \\
[Okapi](okapi.html) = [Zebra](zebra.html) + [Knight](knight.html)
        & ?
        & ?
        &
        \\


[Dragon King](dragon_king.html) = [Rook](rook.html) + [King](king.html)
        & {rs = 2} Crowned Pieces
        & W
        & FC
        & F/100%
        \\
[Dragon Horse](dragon_horse.html) = [Bishop](bishop.html) + [King](king.html)
        & W
        & FC
        & F/100%
        \\


[Dragon](dragon.html) = [Knight](knight.html) + [Pawn](pawn.html)
        & {rs = 2} Pawned Pieces
        & ?
        & T/42
        \\
[Gryphon](gryphon.html) = [Bishop](bishop.html) + [Pawn](pawn.html)
        & T/67
        & E
        \\

[King/&#x738b;&#x5c07;/&#x7389;&#x5c07;](king.html)
        & {rs = 10} [Sh&#x14d;gi (&#x5c06;&#x68cb;)](#wiki:Shogi)
        & W
        & FC
        & F/100% \\
[Rook/&#x98db;&#x8eca;](rook.html)
        & W 
        & T/6
        & E
        \\
[Dragon King/&#x9f8d;&#x738b;](dragon_king.html) (Promoted Rook)
        & W
        & FC
        & F/100%
        \\
[Bishop/&#x89d2;&#x884c;](bishop.html)
        & F*/31.25%
        & E
        & E
        \\
[Dragon Horse/&#x9f8d;&#x99ac;](dragon_horse.html) (Promoted Bishop)
        & W
        & FC
        & F/100%
        \\
[Gold General/&#x91d1;&#x5c07;](gold_general.html)
        & W
        & FC
        & F/100%
        \\
[Silver General/&#x9280;&#x5c07;](silver_general.html)
        & F*/100%
        & E
        & E
        \\
[Knight/&#x6842;&#x99ac;](shogi_knight.html)
        & E
        & E
        & E
        \\
[Lance/&#x9999;&#x8eca;](lance.html)
        & E
        & E
        & E
        \\
[Pawn/&#x6b69;&#x5175;](pawn.html)
        & E
        & E
        & E
        \\

[Hunter](hunter.html)
        & {rs = 2} [Falcon-Hunter Chess](#wiki:Falcon-hunter_chess)
        & T/146
        & E
        \\
[Falcon](falcon.html)
        & F*/25%
        & E 
        \\

[Champion](champion.html)
        & {rs = 2} [Omega Chess](#wiki) 
        & W
        & F/100%
        & F/100%
        \\
[Wizard](wizard.html)
        & ?
        & F*/50%
        & F/50%
        \\


[Blind Monkey/&#x76f2;&#x733f;](blind_monkey.html)
        & {rs = 2} Sh&#x14d;gi variants
        & F*/100%
        & FC
        & F/100%
        \\
[Flying Cock/&#x9d8f;&#x98db;](flying_cock.html)
        & E*
        & FC
        & F*/100%
        \\

[Abbot](abbot.html)
        & {rs = 1} [*Typhoon Chess*](#chess-v:rules/typhoon-revised),
                   [*Scirocco Chess*](#chess-v:invention/scirocco)
        & T/6334
        & F*/100%
        & F*/100%
        \\

[Ace](amazon.html?piece=ace)
        & {rs = 12} [*Overkill Ecumenical
                     Chess*](#chess-v:rules/overkill-ecumenical-chess)
        & W
        & FC
        & F/100%
        \\
[Acme](acme.html)
        & W
        & FC
        & F*/100%
        \\
[Acropolis](acropolis.html)
        & W
        & F*/100%
        & F*/100%
        \\
[Actor](actor.html)
        & ?
        & F*/100%
        & F*/100%
        \\
[Actress](actress.html)
        & W
        & FC
        & F/100%
        \\
[Caliph](oec_caliph.html)
        & T/1563
        & F*/50%
        & F*/50%
        \\
[Canvasser](canvasser.html)
        & W
        & F*/100%
        & F*/100%
        \\
[Cardinal](archbishop.html?piece=cardinal)
        & T/6386
        & F*/100%
        & F*/100%
        \\
[Gnu](gnu.html)
        & ?
        & ?
        & F*/100%
        \\
[Marshal](chancellor.html?piece=marshal)
        & W
        & F/100%
        & F/100%
        \\
[Pawn](pawn.html)
        & E
        & E
        & E
        \\
[Queen](queen.html)
        & W
        & FC
        & F/100%
        \\


[Frog](frog.html)
        & {rs = 1} Fairy Chess
        & ?
        & F*/100%
        & F*/100%
        \\

[Phoenix/&#x9d6c;](king.html?piece=phoenix)
        & {rs = 8}
          [Tori Sh&#x14d;gi (&#x79bd;&#x5c06;&#x68cb;)](#wiki:Tori_Shogi)
        & W
        & FC
        & F/100%
        \\
[Eagle/&#x9d70;](eagle.html)
        & W
        & FC
        & F/100%
        \\
[Falcon/&#x9df9;](drunk_elephant.html?piece=tori_falcon)
        & F*/100%
        & FC
        & F/100%
        \\
[Crane/&#x9db4;](crane.html)
        & F*/100%
        & E*
        & E
        \\
[Pheasant/&#x96c9;](pheasant.html)
        & E
        & E
        & E
        \\
[Left Quail/&#x9d89;](left_quail.html)
        & T/146
        & E
        & E
        \\
[Right Quail/&#x9d89;](right_quail.html)
        & F*/25% 
        & E
        & E
        \\
[Swallow/&#x71d5;](pawn.html?piece=swallow) (Pawn)
        & F*/25% 
        & E
        & E
        \\
[Goose/&#x9d08;](goose.html)
        & E*
        & E
        & E
        \\


====|


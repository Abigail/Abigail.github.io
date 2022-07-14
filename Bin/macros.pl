package main;

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

my $WIKI_TOKEN    = "&#x1F146;";
my $CHESS_V_TOKEN = "C&#x2C7D;";

my sub tooltip ($text, $tooltiptext, @classes) {
    my $classes = join " ", "tooltip", @classes;
    sprintf "<span class = '%s'>%s<span class = '%s'>%s</span></span>" =>
            $classes, $text, "tooltiptext", $tooltiptext
}

our %MACROS = (
    our $TYPE_TRAPPED => {
        CHESS          =>  '[Chess](#wiki)',
        GRAND_CAVALIER =>  '[Grand Cavalier Chess]' .
                           '(#chess-v:large.dir/grandcavalier.html)',
        DOBUTSU        =>  '[D&#x14d;butsu sh&#x14d;gi](#wiki:Dobutsu_shogi)',
        JANGGI         =>  '[Janggi (&#xC7A5;&#xAE30;)](#wiki:Janggi)',
        HIASHATAR      =>  '[Hiashatar](#wiki)',
        MAKRUK         =>  '[Makruk](#wiki)',
        MICRO_SHOGI    =>  '[Micro Sh&#x14d;gi](#wiki:Micro_shogi)',
        OVERKILL       =>  '[Overkill Ecumenical Chess]' .
                           '(#chess-v:rules/overkill-ecumenical-chess)',
        SCIROCCO       =>  '[Scirocco](#chess-v:rules/scirocco)',
        SENTEREJ       =>  "[Senterej](#wiki) [[$CHESS_V_TOKEN](#chess-v:" .
                           'historic.dir/HistoricalChessVariants.pdf)]',
        SHATAR         =>  "[Shatar](#wiki) [[$CHESS_V_TOKEN](#chess-v:" .
                           'oriental.dir/shatar.html)]',
        SHOGI          =>  '[Sh&#x14d;gi (&#x5c06;&#x68cb;)](#wiki:Shogi)',
        TYPHOON        =>  '[Typhoon](#chess-v:rules/typhoon-revised)',
        TORI_SHOGI     =>  '[Tori Sh&#x14d;gi](#wiki:Tori_Shogi)',
        WHALE_SHOGI    =>  '[Whale Sh&#x14d;gi (&#x9be8;&#x5c06;&#x68cb;)]' .
                           '(#chess-v:shogivariants.dir/whale.html)',
        WILDEBEEST     =>  "[Wildebeest Chess](#wiki) [[$CHESS_V_TOKEN]" .
                           "(#chess-v:large.dir/wildebeest.html)]",
        WOLF           =>  '[Wolf Chess](#chess-v:large.dir/wolf.html) ' .
                           "[[$WIKI_TOKEN](#wiki:Wolf_chess)]",
        XIANGQI        =>  '[Xiangqi (&#x8C61;&#x68CB;)](#wiki:xiangqi)',

        LEAPER         =>  '[*Leaper*](#wiki:Fairy_chess_piece#Leapers)',
        LEAPERS        =>  '[*Leapers*](#wiki:Fairy_chess_piece#Leapers)',
        RIDER          =>  '[*Rider*](#wiki:Fairy_chess_piece#Riders)',
        RIDERS         =>  '[*Riders*](#wiki:Fairy_chess_piece#Riders)',

        PIECE_HEADERS  =>  "{class = piece_list}\n"            .
                           "{th = 1} Game & {th = 1} Piece & " .
                           "{th = 1} Info \\\\",
        ROYAL          =>  tooltip ("&#x265A;", "This piece is *Royal*; if "  .
                                                "all Royal pieces have been " .
                                                "captured, the game is lost"),
        MORE_MOVES     =>  tooltip ("&rlarr;",  "This piece has additional "  .
                                                "moves,<br>which are not "    .
                                                "relevant here"),
        CAPTURE        =>  tooltip ("&#x238B;", "This piece has additional "  .
                                                "capture moves,<br>"          .
                                                "which we can ignore here"),
        ABILITIES      =>  tooltip ("&#x1F3A9;", "This piece has additional " .
                                                 "abilities,<br>which we "    .
                                                 "can ignore here"),
        HOPPER         =>  tooltip ("&#x1F407;", "This piece has additional " .
                                                 "hopping moves or "          .
                                                 "captures, which we "        .
                                                 "can ignore here"),
        PROMOTES_TO    =>  tooltip ("&#x260A;",  "Promotes to"),
        PROMOTED       =>  tooltip ("&#x260B;",  "Is promoted"),
        COLOUR_BOUND   =>  tooltip ("colourbound", 
                                    "A colourbound piece will always stay "   .
                                    "on a square of the same colour: if it "  .
                                    "starts on a black square, it will "      .
                                    "always remain on a black square; if "    .
                                    "it starts on a white square, it will "   .
                                    "always remain on a white square",
                                    "underline"),

        YES            =>  '<span class = "yes">&#x2713;</span>',
        NO             =>  '<span class =  "no">&#x2717;</span>',

        WIKI           =>  $WIKI_TOKEN,
        CHESS_V        =>  $CHESS_V_TOKEN,
    },
);

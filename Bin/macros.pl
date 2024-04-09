package main;

use 5.028;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

my $WIKI_TOKEN    = "<span class = 'wiki_token'>&#x1F146;</span>";
my $CHESS_V_TOKEN = "<span class = 'chess_v_token'>C&#x2C7D;</span>";

my sub tooltip ($text, $tooltiptext, @classes) {
    my $classes = join " ", "tooltip", @classes;
    sprintf "<span class = '%s'>%s<span class = '%s'>%s</span></span>" =>
            $classes, $text, "tooltiptext", $tooltiptext
}

my sub uni_name ($text) {
    sprintf "(<span class = 'uni_name'>%s</span>)" => $text
}

our %MACROS = (
    our $TYPE_TRAPPED => {
        #
        # Chess Variants
        #
        CHESS          =>  '[Chess](#wiki)',
        CAGLIOSTRO     =>  "[Cagliostro's Chess]" .
                           '(#chess-v:large.dir/cagliostro.html)',
        CHU_SHOGI      =>  '[Chu&nbsp;Sh&#x014d;gi ' .
                           '(&#x4E2D;&#x5C06;&#x68CB;)](#wiki:chu_shogi)',
        GANYMEDE       =>  '[Ganymede Chess](#chess-v:large.dir/ganymede.html)',
        GRAND_CAVALIER =>  '[Grand&nbsp;Cavalier&nbsp;Chess]' .
                           '(#chess-v:large.dir/grandcavalier.html)',
        DICKENS        =>   tooltip ("*A Guide To Fairy Chess*",
                                     "Anothy Dickens, 1969",
                                     "underline"),
        DIFFERENT      =>  '[Chess with different armies](#wiki)',
        DOBUTSU        =>  '[D&#x14d;butsu sh&#x14d;gi](#wiki:Dobutsu_shogi)',
        FALCON_HUNTER  =>  '[Falcon-Hunter Chess](#wiki:Falcon-hunter_chess)',
        INTERDEPENDENT =>  '[Interdependent Chess]' .
                           '(#chess-v:42.dir/interdependent/)',
        JANGGI         =>  '[Janggi (&#xC7A5;&#xAE30;)](#wiki:Janggi)',
        HIASHATAR      =>  '[Hiashatar](#wiki)',
        KYOTO_SHOGI    =>  '[Ky&#x014D;to Sh&#x014D;gi](#wiki:Kyoto_shogi)',
        MAKRUK         =>  '[Makruk](#wiki)',
        MICRO_SHOGI    =>  '[Micro&nbsp;Sh&#x14d;gi](#wiki:Micro_shogi)',
        OVERKILL       =>  '[Overkill&nbsp;Ecumenical&nbsp;Chess]' .
                           '(#chess-v:rules/overkill-ecumenical-chess)',
        QUANTUM        =>  '[Quantum Chess](https://web.archive.org/web/' .
                           '20090602051546/http://www.quantumchess.com/)',
        RENN_CHESS     =>  '[Renniassance Chess]' .
                               '(#chess-v:large.dir/renaiss.html)',
        ROCOCO         =>  '[Rococo](#chess-v:other.dir/rococo.html)',
        SCIROCCO       =>  '[Scirocco](#chess-v:rules/scirocco)',
        SENTEREJ       =>  "[Senterej](#wiki) [[$CHESS_V_TOKEN](#chess-v:" .
                           'historic.dir/HistoricalChessVariants.pdf)]',
        SHATAR         =>  "[Shatar](#wiki) [[$CHESS_V_TOKEN](#chess-v:" .
                           'oriental.dir/shatar.html)]',
        SHOGI          =>  '[Sh&#x14d;gi (&#x5c06;&#x68cb;)](#wiki:Shogi)',
        TYPHOON        =>  '[Typhoon](#chess-v:rules/typhoon-revised)',
        TORI_SHOGI     =>  '[Tori&nbsp;Sh&#x14d;gi](#wiki:Tori_Shogi)',
        WA_SHOGI       =>  '[Wa&nbsp;Sh&#x14d;gi (&#x548C;&#x5C06;&#x68CB;)]' . 
                           '(#wiki:Wa_shogi)',
        WHALE_SHOGI    =>  '[Whale&nbsp;Sh&#x14d;gi ' .
                           '(&#x9be8;&#x5c06;&#x68cb;)]' .
                           '(#chess-v:shogivariants.dir/whale.html)',
        WILDEBEEST     =>  "[Wildebeest&nbsp;Chess](#wiki) [[$CHESS_V_TOKEN]" .
                           "(#chess-v:large.dir/wildebeest.html)]",
        WOLF           =>  '[Wolf&nbsp;Chess](#chess-v:large.dir/wolf.html) ' .
                           "[[$WIKI_TOKEN](#wiki:Wolf_chess)]",
        XIANGQI        =>  '[Xiangqi (&#x8C61;&#x68CB;)](#wiki:xiangqi)',
        YARI_SHOGI     =>  '[Yari&nbsp;Sh&#x14d;gi](#wiki:Yari_shogi)',

        #
        # Move classes
        #
        BASIC_LEAPERS  =>  '[*Basic Leapers*](leapers.html#basic_leapers)',
        COMPOUND_LEAPER
                       =>  '[*Compound Leaper*]' .
                           '(leapers.html#compound_leapers)',
        COMPOUND_LEAPERS
                       =>  '[*Compound Leapers*]' .
                           '(leapers.html#compound_leapers)',
        LEAPER         =>  '[*Leaper*](leapers.html)',
        LEAPERS        =>  '[*Leapers*](leapers.html)',
        RIDER          =>  '[*Rider*](#wiki:Fairy_chess_piece#Riders)',
        RIDERS         =>  '[*Riders*](#wiki:Fairy_chess_piece#Riders)',

        #
        # Common referred to pieces
        #
        BISHOP         =>  "[*Bishop*](bishop.html)",
        BM             =>  "[*Blind Monkey*](blind_monkey.html)",
        FC             =>  "[*Flying Cock*](flying_cock.html)",
        FERZ           =>  "[*Ferz*](ferz.html)",
        KING           =>  "[*King*](king.html)",
        KNIGHT         =>  "[*Knight*](knight.html)",
        PAWN           =>  "[*Pawn*](pawn.html)",
        QUEEN          =>  "[*Queen*](queen.html)",
        ROOK           =>  "[*Rook*](rook.html)",
        WAZIR          =>  "[*Wazir*](wazir.html)",

        #
        # Piece name table
        #
        PIECE_HEADERS  =>  "{class = piece_list}\n"            .
                           "{th = 1} Game & {th = 1; cs = 2} Piece & " .
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

        #
        # Other
        #
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

    our $TYPE_TALK => {
        WQ             => "&#x2655;",
        BQ             => "&#x265B;",
    },

);

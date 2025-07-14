package Trapped;

use 5.038;

use strict;
use warnings;
no  warnings 'syntax';

my %piece2betza = (
    "Dragon Horse"    =>  "FFW",
    "Dragon King"     =>  "FWW",
    "Gold General"    =>  "fFW",
    "King"            =>  "FW",
    "Queen"           =>  "FFWW",
    "Rook"            =>  "WW",
);

#
# Description for pieces which move like the Wazir on the Square Spiral.
#
sub wazir (%args) {
    my $piece = $args {piece};
    my $betza = $piece2betza {$piece};
    <<~ "--" =~ s/^\h+//gmr;
        <div class = 'heatmap right'>
        % ./trapped -m 5k -l s_sq --div r $betza
        % Box: [-1, 1] [-1, 1]
        +------+------+------+
        |    . | 1225 |    . |
        +------+------+------+
        | 1260 |   *  | 1255 |
        +------+------+------+
        |    . | 1260 |    . |
        +------+------+------+
        </div>
         
        The **${piece}** can move as a [*Wazir*](wazir.html). Hence, it will
        not get stuck, filling the entire board by just following the spiral.
     
        As can be seen from the heatmap to the right, the **${piece}** makes
        about the same number of steps in each of the four orthogonal
        directions.
    --
}


#
# Description for pieces which move like the Blind Monkey on the Diamond Spiral.
#
sub blind_monkey (%args) {
    my $piece = $args {piece};
    my $betza = $piece2betza {$piece};
    <<~ "--" =~ s/^\h+//gmr;
        <div class = 'heatmap left'>
        % ./trapped -m 5k -l s_d --div l FWW
        % Box: [-1, 1] [-1, 1]
        +------+------+------+
        | 1275 |    . | 1225 |
        +------+------+------+      
        |    . |   *  |   50 |
        +------+------+------+
        | 1225 |    . | 1225 |
        +------+------+------+
        </div>

        The **${piece}** can move as the [*Blind Monkey*](blind_monkey.html).
        Hence, it will follow the spiral and visit all the squares on the board.

        The **${piece}** will make mostly diagonal moves, roughly the
        same in each of the four diagonal directions, and a single step to
        the right for each "layer" of the spiral.
    --
}


#
# Description for pieces which move like the Flying Cock on the Diamond Spiral.
#
sub flying_cock (%args) {
    my $piece = $args {piece};
    my $betza = $piece2betza {$piece};
    <<~ "--" =~ s/^\h+//gmr;
        <div class = 'heatmap right'>
        % ./trapped -m 5k -l w_fo --div r ${betza}
        % Box: [-1, 0] [-1, 1]
        +------+------+------+
        |   35 |    . |   35 |
        +------+------+------+
        | 2480 |   *  | 2450 |
        +------+------+------+
        </div>

        Since the **${piece}** can move as the
        [*Flying Cock*](flying_cock.html), it will do so, filling the
        entire board visiting all squares in value order.

        The **${piece}** will mostly move sideways, and make one step
        diagonally forward when reaching the edge of the board.
    --
}


#
# Description for pieces which move like the King on the Flat Wedge
#
sub king_flat_wedge (%args) {
    my $piece = $args {piece};
    my $betza = $piece2betza {$piece};
    my $text  = <<~ "--" =~ s/^\h+//gmr;
        <div class = 'heatmap left'>
        % ./trapped -m 10000 -l w_fl --div l ${betza}
        % Box: [-1, 1] [-1, 1]
        +------+------+------+
        |    . |    . |  149 |
        +------+------+------+
        | 5000 |   *  | 4802 |
        +------+------+------+
        |   49 |    . |    . |
        +------+------+------+
        </div>

        Just like the [*King*](king.html), on the Flat Wedge, the
        **${piece}** fills the board row by row, with single step moves,
        alternating going with and against the numbers, with a small twist
        just before reaching the left hand side of the Wedge.

        The **${piece}** will mostly move sideways, and makes a few moves
        on one diagonal, while not touching the other diagonal.
    --

    $text =~ s/^Just[^,]+, on/On/m if $piece eq "King";

    $text;
}



1;

__END__

# Advent Of Code 2021, Day 4: Giant Squid

## [Challenge](https://adventofcode.com/2021/day/4)

Today, we are going to play bingo. We're given a sequence of balls
to be drawn, and a series of bingo cards, like this:

~~~~
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
~~~~

A card wins if it has a row or column of which all numbers are drawn.
(Diagonals do not count).

#### Part One

Determine the first card to win. Of the winning card, calculate the
sum of all numbers not drawn yet, and multiply that with the ball
which causes the win.

#### Part Two

The same as Part One, except we want to determine the last card to win.
Again, we need to multiply the sum of the undrawn numbers by the ball
which causes the win.

## Solutions

### Perl

We start of by defining a class for a bingo card. For each card, we
track the following: the numbers on the card (as a 2-dimensional array),
the size (kind of overkill, as all boards are `5x5`), and whether
the card is finished (there was a bingo).

First some boilerplate:

~~~~
package BingoCard {
    use Hash::Util::FieldHash qw [fieldhash];
    fieldhash my %card;
    fieldhash my %size;
    fieldhash my %finished;

    sub new ($class) {bless do {\my $var} => $class}
~~~~

We're using
[fieldhashes](https://metacpan.org/pod/Hash::Util::FieldHash#DESCRIPTION)
to store our instance data.

The method `new` returns a fresh instance of the class `BingoCard`
(note: `new` is not a constructor. Despite what many Perl programmers
claim, Perl never has had a constructor `new`. Perl has only one
constructor, and it's called `bless`.)

We now have to initialize a bingo card, using a method `init`. Beside
the instance object itself (`$self`), it takes the appropriate chunck
of the input as argument (`$input`). We will [`split`](#) this on
newlines, giving us the numbers on each row (as strings). We then
[`map`](#) over these strings, extracting numbers from them.
The result is a 2-dimensional array, which we store in `$card {$self}`,
and set the size of the card in `$size {$self}`:

~~~~
sub init ($self, $input) {
    $card {$self} = [map {[/[0-9]+/g]} split /\n/ => $input];
    $size {$self} = @{$card {$self}};
    $self
}
~~~~

Next, we define a method `play`, which takes a number which was
drawn. It searches the 2-dimensional array for a match, and if
there is a match, it replaces the number on the card with `-1`:

~~~~
sub play ($self, $number) {
    foreach my $row (@{$card {$self}}) {
        foreach my $i (keys @$row) {
            $$row [$i] = -1 if $$row [$i] == $number;
        }
    }
    $self
}
~~~~

Now we need a method which returns a true value if the card has
a bingo, and false otherwise. We'll just scan each row and column,
if it finds a column where all the numbers are negative, we have 
a bingo. Else, we do not:

~~~~
sub bingo ($self) {
    my $card = $card {$self};
    my $size = $size {$self};
    foreach my $r (0 .. $size - 1) {
        return 1 unless grep {$_ >= 0} @{$$card [$r]};
    }
    foreach my $c (0 .. $size - 1) {
        return 1 unless grep {$_ >= 0}
                         map {$$card [$_] [$c]} 0 .. $size - 1;
    }
    return 0;
}
~~~~

We also need a method which sums all the numbers not drawn:

~~~~
sub left ($self) {
    my $sum = 0;
    foreach my $row (@{$card {$self}}) {
        foreach my $num (@$row) {
            $sum += $num if $num >= 0;
        }
    }
    $sum
}
~~~~

Finally, a method to set a flag to indicate we're finished with
the card, and a method to retrieve that setting:

~~~~
sub set_finished ($self) {
    $finished {$self} = 1
}
sub finished ($self) {
    $finished {$self}
}
~~~~

Now, we read the input. The bingo cards are separated by blank lines,
and there is also a blank line between the set of numbers and
the bingo cards. Which means we have an ideal situation for reading
in [*paragraph mode*](https://perldoc.perl.org/variables/$%2F): instead
of getting the input line by line, we get the input paragraph by
paragraph.

First paragraph is the set of numbers to be drawn. The rest are the
bingo cards, which we will immediately turn into objects:

~~~~
@ARGV = "input" unless @ARGV;
$/ = "";  # Paragraph mode

my @numbers = <> =~ /[0-9]+/g;

my @cards = map {BingoCard:: -> new -> init ($_)} <>;
~~~~

We can now play the game. For each number, we iterate over all the cards,
skipping cards which are finished. We play the number on the card, and
check whether the card now has a bingo. If so, we calculate the score,
and keep track of the first and last scores. We also mark the card
finished.

~~~~
foreach my $number (@numbers) {
    foreach my $i (keys @cards) {
        my $card = $cards [$i];
        next if $card -> finished;
        if ($card -> play ($number) -> bingo) {
            $first_win //= $number * $card -> left;
            $last_win    = $number * $card -> left;
            $card -> set_finished;
        }
    }
}
~~~~

Now, this isn't the most optimal solution, but considering the input
is small (100 balls, 100 cards with 25 numbers each), the running
time is dominated by fetching the data from disk, so we aren't overly
concerned about efficiency.

FULL_PROGRAM

### Python

In our Python solution, we also make an object of each card, but
we keep track of different things. We will store each number on
the card in a
[dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
(`numbers`).
The dictionary will map numbers to 2-element
[tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)
holding the row and column indices of where the number
appears.

We also keep two
[lists](https://docs.python.org/3/tutorial/introduction.html#lists):
one list (`rows`) to keep track how many undrawn numbers there are in each row,
and one list (`cols`) to keep track how many undrawn numbers there are in each
column. (So, initially, these lists have `5` elements, all being `5`).

There are two more pieces of data we keep track off: a boolean
value (`bingo`) to indicate whether the card has a bingo, and
`total` which is the sum of the undrawn numbers on the card.

We initialize the object with the same data as Perl's `init` method
above:

~~~~
class BingoCard:

    def __init__ (self, card):
        num_dict = {}
        row_list = []
        col_list = []
        sum      =  0
        lines = card . rstrip () . split ("\n")
        rc = -1
        for line in lines:
            rc = rc + 1
            row_list . append (0)
            nums = line . strip () . split ()
            cc = -1
            for num in nums:
                cc = cc + 1
                if rc == 0:
                    col_list . append (0)
                num = int (num)
                num_dict [num] = rc, cc
                row_list [rc]  = row_list [rc] + 1
                col_list [cc]  = col_list [cc] + 1
                sum            = sum + num

        self . numbers = num_dict
        self . rows    = row_list
        self . cols    = col_list
        self . bingo   = 0
        self . total   = sum
~~~~

Now we need a method which is called when a number is drawn.
If the number is on the card, we find the row and column it
appears on the card, and update the corresponding value in
the `rows` and `cols` lists. If one (or both) numbers drop
to `0`, the card has a bingo. We also subtract the number
for the sum of undrawn numbers.

~~~~
def play (self, number):
    if not self . bingo:
        if number in self . numbers:
            rc, cc = self . numbers [number]  
            self . rows [rc] = self . rows [rc] - 1
            self . cols [cc] = self . cols [cc] - 1
            if self . rows [rc] == 0 or self . cols [cc] == 0:
                self . bingo = True
            self . total = self . total - number
~~~~


We can now read in the input. We read all, then split on `"\n\n"`. First
entry is the set of balls, the rest are the bingo cards:

~~~~
input = open ("input", mode = 'r') . read () . split ("\n\n")
balls = map (lambda b: int (b), input [0] . split (","))
cards = map (lambda sheet: BingoCard (sheet), input [1:])
~~~~


Then we iterate over `balls`. For each drawn ball, we iterate
over the cards in `cards`. If playing a ball on a card result
in a bingo, we calculate its score, while keeping track of the
first and last winners. We also remove cards with a bingo
from the list of cards:

~~~~
first_score = -1
last_score  = -1
for ball in balls:
    for card in cards:
        card . play (ball)
        if card . bingo:
            if first_score < 0:
                first_score = ball * card . total
            last_score = ball * card . total
    cards = filter (lambda card: card . bingo == 0, cards)
~~~~

All what is left, is to print the results:

~~~~
print ("Solution 1: %d" %(first_score))
print ("Solution 2: %d" %(last_score))
~~~~

FULL_PROGRAM

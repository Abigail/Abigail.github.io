# Advent Of Code 2023, Day 7: Camel Cards

## [Challenge](https://adventofcode.com/2023/day/7)

Today we are going to play a game of Camel Cards, which looks
like a simplified version of [Poker](#:wiki).

Our main task will be ordering a set of hands, based on their
strength. Hands consists of five cards, each one of `A`, `K`, `Q`, `J`, `T`,
`9`, `8`, `7`, `6`, `5`, `4`, `3`, or `2`, where `A` is the strongest,
and `2` the weakest.

Each hand is of a specific type. The types are, from strongest to
weakest:

* *Five of a Kind*: All cards are the same.
* *Four of a Kind*: Four cards are the same; the fifths is different.
* *Full House*: Three cards are the same. The other two are identical,
  but different from the first three.
* *Three of a Kind*: Three cards are the same. The other two are different
  from the other cards in the hand.
* *Two Pair*: Two cards are the same. Two other cards are also the
  same (and different from the first pair). The fifth card is different
  from all the others.
* *One Pair*: Two cars are the same, the remaining three are all different
  from all other cards.
* *High Card*: All cards are different.

This is the same order hands in [Poker](#:wiki) are ordered, except that
we do not consider flushes and straights.

When comparing two hands, we first compare their types. If they are different,
the hand with the strongest type "wins". If they are equal, we compare
their cards, *in the order they are given*, until we get a pair of cards
which are different: the hand with the highest card wins.

Some examples:
* The hand `KK677` wins from hand `32T3K`, as the
  former is of type *Two pair*, and the latter *One Pair*.
* The hand `KK677` wins from `KTJJT`. They are both of type
  *Two Pair*. Their first card (`K`) is equal, but the former
  hand has a better second card than the latter (`K` vs `T`).
* The hand `QQQJA` wins from hand `T55J5`. They are both *Three of a Kind*,
  but the `Q` wins over the `T`.

Our input consists of hands and their bids, like this:

~~~~
32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
~~~~


#### Part 1

In part 1, we are asked to rank the cards based on their strength. This gives
each hand a rank, starting from `1` for the weakest hand, counting upwards.
The score of each hand is product of their rank, and their bid. The
solution to the excercise is the sum of these products.

For the example above, the hands are ranked as:

1. `32T3K`, for a score of `1 * 765 ==  765`.
2. `KTJJT`, for a score of `2 * 220 ==  440`.
3. `KK677`, for a score of `3 *  28 ==   84`.
4. `T55J5`, for a score of `4 * 684 == 2736`.
5. `QQQJA`, for a score of `5 * 483 == 2415`.

The answer is then
`765 + 440 + 84 + 2736 + 2415 ==` <span class = 'answer'>6440</span>.

#### Part 2

In part 2, we need to do more or less the same, except that Jacks
(the cards `J`) act as jokers: for determining their type, a `J`
can be substituted for anything.

When comparing cards though, a `J` is weaker than any other card.

This changes a few things:

* `32T3K` remains the weakest card. It doesn't contain any jokers.
* The hand `KK677` no longer wins from `KTJJT`. The former is still of
  type *Two Pair*, but the latter is now of type *Four of a Kind*.
* `KTJJT` is now the strongest hand. All of `T55J5`, `KK677` and `QQQJA`
  are *Four of a Kind*, but `KK677` has the highest first card.

The hands are now ranked as:

1. `32T3K`, for a score of `1 * 765 ==  765`.
2. `KK677`, for a score of `2 *  28 ==   56`.
3. `T55J5`, for a score of `3 * 684 == 2052`.
4. `QQQJA`, for a score of `4 * 483 == 1932`.
5. `KTJJT`, for a score of `5 * 220 == 1100`.

This leads to a score of <span class = 'answer'>5905</span>.

## Solution

We start off with defining a subroutine which classifies a hand.
We define a bunch of constants to be returned:

~~~~
my $HIGH_CARD       = 0;
my $ONE_PAIR        = $HIGH_CARD       + 1;
my $TWO_PAIR        = $ONE_PAIR        + 1;
my $THREE_OF_A_KIND = $TWO_PAIR        + 1;
my $FULL_HOUSE      = $THREE_OF_A_KIND + 1;
my $FOUR_OF_A_KIND  = $FULL_HOUSE      + 1;
my $FIVE_OF_A_KIND  = $FOUR_OF_A_KIND  + 1;
~~~~

The classification sub takes two parameters, a hand to be classified,
and a wild card option. If the latter parameter is true, we consider
the `J` cards to be jokers.

~~~~
sub classify ($hand, $wild = 0) {
    my %cards;
    $cards {$_} ++ for split // => $hand;

    my $jokers = $wild && $cards {J} ? delete $cards {J} : 0;

    my @count = sort {$b <=> $a} values %cards;
    
    #
    # Add jokers to the cards appearing most frequently
    #
    $count [0] += $jokers;

    return $FIVE_OF_A_KIND  if $count [0] == 5;
    return $FOUR_OF_A_KIND  if $count [0] == 4;
    return $FULL_HOUSE      if $count [0] == 3 && $count [1] == 2;
    return $THREE_OF_A_KIND if $count [0] == 3 && $count [1] == 1;
    return $TWO_PAIR        if $count [0] == 2 && $count [1] == 2;
    return $ONE_PAIR        if $count [0] == 2 && $count [1] == 1;
    return $HIGH_CARD       if $count [0] == 1;
    die "Huh? ($hand)";
}
~~~~

We count the occurrences of each card. If we need to consider any
jokers, we set aside the jokers. We sort the number of occurrences,
then add the number of jokers to the most frequent occurring card.
We can then classify the type of the based purely based on how often
the most and second most frequently occurring cards appear.

To break ties when comparing hands, we want to quickly compare
them. To do this, we replace `A`, `K`, `Q`, `J`, and `T` with characters
which sort in the order we need. For part 1, this will be `E`, `D`, `C`,
`B` and `A` (they all sort before the digits). For part 2, this will 
be `E`, `D`, `C`, `*`, and `A`. `*` sorts before any capital letter or
digit. This way, ties can be broken by just comparing hands with 
`cmp`.

We are now going to read in the input. For each hand, we store its
bid, the classification with and without jokers, and with the two
replacements mentioned above:

~~~~
my %hands;
while (<>) {
    my ($hand, $bid) = split;
    $hands {$hand} = [$bid, classify ($hand, 0), $hand =~ y/AKQJT/EDCBA/r,
                            classify ($hand, 1), $hand =~ y/AKQJT/EDC*A/r];
}
~~~~

For instance, the example input would result in:

~~~~
%hands = (
    32T3K => [765, $ONE_PAIR,        "32A3D", $ONE_PAIR,       "32A3D"],
    T55J5 => [684, $THREE_OF_A_KIND, "A55B5", $FOUR_OF_A_KIND, "A55*5"],
    KK677 => [ 28, $TWO_PAIR,        "DD677", $TWO_PAIR,       "DD677"],
    KTJJT => [220, $TWO_PAIR,        "DABBA", $FOUR_OF_A_KIND, "DA**A"],
    QQQJA => [483, $THREE_OF_A_KIND, "CCCBE", $FOUR_OF_A_KIND, "CCC*E"],
);
~~~~

We can now easily sort the hands, for part 1 and part 2:

~~~~
my @hands_1 = sort {$hands {$a} [1] <=> $hands {$b} [1] ||
                    $hands {$a} [2] cmp $hands {$b} [2]}
              keys %hands;
my @hands_2 = sort {$hands {$a} [3] <=> $hands {$b} [3] ||
                    $hands {$a} [4] cmp $hands {$b} [4]}
              keys %hands;
~~~~

And calculate the score:

~~~~
while (my ($index, $hand) = each @hands_1) {
    $solution_1 += ($index + 1) * $hands {$hand} [0];
}
while (my ($index, $hand) = each @hands_2) {
    $solution_2 += ($index + 1) * $hands {$hand} [0];
}
~~~~

Or, to not repeat ourselves, we can combine this as:

~~~~
foreach my ($solution => $offset) ($solution_1 => 1, $solution_2 => 3) {
    my @hands = sort {$hands {$a} [$offset]     <=> $hands {$b} [$offset] ||
                      $hands {$a} [$offset + 1] cmp $hands {$b} [$offset + 1]}
                keys %hands;

    while (my ($index, $hand) = each @hands) {
        $solution += ($index + 1) * $hands {$hand} [0];
    }
}
~~~~


All that is left to do is to print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

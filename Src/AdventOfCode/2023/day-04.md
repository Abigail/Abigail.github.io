# Advent Of Code 2023, Day 4: Scratchcards

## [Challenge](https://adventofcode.com/2023/day/4)

In this challenge, we given scratchcards, and drawings for those
scratchcard, in a format like this:

~~~~
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
~~~~

Here, the first set of numbers of each game indicate which numbers
have been drawn for that game. The second set of numbers are the 
numbers of on the card.

For instance, for first card, the drawn numbers are 
`41`, `48`, `83`, `86`, and `17`. The numbers of the card are
`83`, `86`, `6`, `31`, `17`, `9`, `48`, and `53`.


#### Part 1

For the first part, we are interested in how many draw numbers
appear on the cards. We score points for that: for the first
drawn number which is on the card, we score `1` point, and we
double the score for each subsequent drawn number on the card.
So, we'd score `2` for two correct numbers, `4` for three correct
numbers etc.

We then need to sum the scores for all the cards.

For instance, for the first card, the numbers `48`, `83`, `86` and
`17` appear on the card, for a score of `1 * 2 * 2 * 2 = 8`. 
Card 2 has two matches, for a score of `2`. The other cards score
`2`, `1`, `0`, and `0`. The total score will
be <span class = "answer">13</span>.

#### Part 2

In part 2, we need to deal with a new rule. For each card, we check
how many drawn numbers match. Then we get a copy of the next cards --
as many cards as there are matches.

For instance, for the example above, the first card has four matches.
We then get additional copies of cards 2, 3, 4, and 5. So,
we now have two instances (one original, and one for the matches on the
first card) of the second card. We have two matches on each instances of
the second card, so we get two additional copies of cards 3 and 4.
We then have four instances of card 3 (the original one, one earned 
from card 1, and two earned from card 2). The two matches gives
us `4` additional copies of both card 4 and card 5.

Playing this out till the end will leave use with `1` instance of card 1, 
`2` instances of card 2, `4` instances of card 3, `8` instances of card 4,
`14` instances of card 5, and `1` instance of 6.

The wanted answer will be the total number of cards we will end up
with. In this example this will be `1 + 2 + 4 + 8 + 14 + 1` for a
total of <span class = "answer">30</span>.

For the challenge, we may assume we should never copy cards not
in the input. (So, for instance, we will never have winning
numbers on the last card).


## Solution

We can solve this by a single pass over the input. The input contains
some redundant information -- we will not the use the card number.

For part 1, we can just determine the score of each game, and keep
a running score. 

For part 2, we keep an array of the number of instances of the next
cards we have already collected. And we keep a running total of 
instances of cards we already have processed. We can do this, because
we only get copies of cards we have not processed; never of cards
we aleady processed.

We start off with a couple of initializations:

~~~~
my $solution_1 = 0;
my $solution_2 = 0;
my @cards;
~~~~

`$solution_1` and `$solution_2` are some accumulators where we collect
the scores for both parts. `@cards` will be an array were we track
how may instances of the next cards we have.

We then loop over the input. In the loop, we start with parsing a
line of input:

~~~~
(undef, my ($drawn, $card)) = split /[:|]/;
my %drawn = map {$_ => 1}      $drawn =~ /[0-9]+/g;
my $match = grep {$drawn {$_}} $card  =~ /[0-9]+/g;
~~~~

We [`split`](#) the input into three parts, and do the following:

* We ditch the part before the colon, as it does not contain
  information we need.
* We extract the numbers between the colon and semi-colon, and
  put those numbers (which are the drawn numbers) in a hash
  (`%drawn`) so we can quickly check whether a number was drawn.
* We extract the numbers from the part of the line after the
  vertical bar (these numbers are the numbers on the card), and
  count how many of those numbers were drawn. `$match` will be
  the number of numbers on the card which were drawn.

We can now update our bookkeeping.

~~~~
$solution_2 += my $instances = 1 + (shift (@cards) // 0);

if ($match) {
    $solution_1 += 2 ** ($match - 1);
    $cards [$_] += $instances for 0 .. $match - 1;
}
~~~~

First, we get the number of previous collected copies of the current 
card. This is the first item in `@cards`, so we can just [`shift`](#)
this number out of the array. (If the array is empty, we use `0` here).
We add one, and we get the number of instances of the current card.
We add this amount of `$solution_2`.

If the current card didn't have matches, we're done (for this card).
Else, we calculate the score for part 1, and create copies of the
next cards for part 2.

Once we have processed all the cards, all that is left to do is to
print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

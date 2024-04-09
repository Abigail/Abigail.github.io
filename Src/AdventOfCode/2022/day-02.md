# Advent Of Code 2022, Day 2: Rock Paper Scissors

## [Challenge](https://adventofcode.com/2022/day/2)

Today, we are going to play [Rock, Paper, Scissors](#wiki). In this
two player game, both players pick one of Rock, Paper or Scissors
simultaneously. If both players pick the same shape, the game is a
draw. Else, a player who picks a Rock wins if the other player picks
Scissors, but loses if the other player picks Paper. A player who picks
Paper wins if the other player picks Rock, but loses if the other player
picks Scissors. And if the player picks Scissors, that player wins if
the other player picks Paper, but loses if the other player picks Rock.

In table form, this looks like:

|====
{th = 1} Player A & {th = 1} Player B & {th = 1} Outcome       \\
         Rock     &          Rock     &          Draw          \\
         Rock     &          Paper    &          Player B wins \\
         Rock     &          Scissors &          Player A wins \\
         Paper    &          Rock     &          Player A wins \\
         Paper    &          Paper    &          Draw          \\
         Paper    &          Scissors &          Player B wins \\
         Scissors &          Rock     &          Player B wins \\
         Scissors &          Paper    &          Player A wins \\
         Scissors &          Scissors &          Draw          \\
====|

Each game has a score, consisting of the sum of two parts:

* Points for the outcome of the game. A win gives 6 points. A draw 
  gives 3 points, while no points are scored for a draw.
* Points given depending on the shape picked: 1 point if you picked
  Rock, 2 points if you picked Paper, and 3 points if you picked
  Scissors.

So, the minimum score you can get is 1, if you picked Rock, and your
opponent picked Paper (0 points for the outcome (lost), 1 for the shape).
The maximum score you can get is 9, if you picked Scissors and your
opponent picked Paper (6 points for the outcome (win), 3 for the shape).


Our input consists of a file which looks like:

~~~~
A Y
B X
C Z
~~~~

That is, each line consists of two characters separated by a space.
The first character is one of `A`, `B`, and `C`. The last character
is one of `X`, `Y` and `Z`. So the file has at most 9 different
lines.

Each line is an encoded round of a game of Rock Paper Scissors, where the first
column (with `A`, `B`, and `C`) the throw of an Elf, and the second
column (with `X`, `Y`, and `Z`) our throw.


#### Part 1

In Part 1, the encoding is as follows:

|====
{th = 1} Throw & {th = 1} Meaning             \\
         A     &          Elf throws Rock     \\
         B     &          Elf throws Paper    \\
         C     &          Elf throws Scissors \\
         X     &          You throw Rock      \\
         Y     &          You throw Paper     \\
         Z     &          You throw Scissors  \\
====|

We're asked to calculate the score of all the rounds and sum them.

For the example file, this means the following:

1. In the first round, the Elf throws Rock, while you throw Paper.
   You win the round, scoring `6` for the win, `2` for throwing Paper,
   for a total of `8`.
2. In the second round, the Elf throws Paper, while you throw Rock.
   You lose the game, scoring `0` for the outcome, and score `1`
   for throwing Rock. The score for this round is `1`.
3. In the third round, both you and the Elf throw Scissors, making
   this round a draw. The score is `3` for the draw, and `3` for
   throwing Scissors, for a total of `6`.

Summing the score of all the rounds gives <span class = "answer">15</span>
points in total.

#### Part 2

In part 2, the letters `X`, `Y`, and `Z` aren't just a straightforward
encoding of what we should throw, instead, they encode what the outcome
of the round should be:

|====
{th = 1} Throw & {th = 1} Meaning                   \\
         A     &          Elf throws Rock           \\
         B     &          Elf throws Paper          \\
         C     &          Elf throws Scissors       \\
         X     &          You should lose           \\
         Y     &          The game should be a draw \\
         Z     &          You should win            \\
====|

For the example file, this means:

1. In the first round, the Elf throws Rock. You should draw this
   game, so you throw Rock as well. You score `3` (draw) plus
   `1` (throwing Rock) for a total of `4`.
2. In the second round, the Elf throws Paper. You should lose, so
   you throw Rock, scoring `0` (a loss) plus `1` (throwing Rock),
   for a total of `1`.
3. In the third round, the Elf throws Scissors. You should win this
   round, so you throw Rock. This scores `6` (for the win) plus
   `1` (for throwing Rock), which gives a total of `7`.

The total score of the entire game is <span class = "answer">12</span>.

## Solution

We first point out there are only nine possibilities for each round:
the Elf throws one of Rock, Paper, or Scissors, and so do you. Hence,
the input consists of at most nine different lines.

So, what we do is precalculate the score of each possible round, and
put them into a lookup table. We can then take each line of input and
just look up the score without having to further parse the input, or
do any calculations.

The lookup tables:

~~~~
my ($ELF_ROCK, $ELF_PAPER, $ELF_SCISSORS) = qw [A B C];
my ( $ME_ROCK,  $ME_PAPER,  $ME_SCISSORS) = qw [X Y Z];
my ( $TO_LOSE,  $TO_DRAW,        $TO_WIN) = qw [X Y Z];
my ( $SH_ROCK,  $SH_PAPER,  $SH_SCISSORS) = qw [1 2 3];
my (     $WIN,      $DRAW,         $LOSS) = qw [6 3 0];


my %score1 = (
    "$ELF_ROCK $ME_ROCK"          => $DRAW + $SH_ROCK,
    "$ELF_ROCK $ME_PAPER"         => $WIN  + $SH_PAPER,
    "$ELF_ROCK $ME_SCISSORS"      => $LOSS + $SH_SCISSORS,
    "$ELF_PAPER $ME_ROCK"         => $LOSS + $SH_ROCK,
    "$ELF_PAPER $ME_PAPER"        => $DRAW + $SH_PAPER,
    "$ELF_PAPER $ME_SCISSORS"     => $WIN  + $SH_SCISSORS,
    "$ELF_SCISSORS $ME_ROCK"      => $WIN  + $SH_ROCK,
    "$ELF_SCISSORS $ME_PAPER"     => $LOSS + $SH_PAPER,
    "$ELF_SCISSORS $ME_SCISSORS"  => $DRAW + $SH_SCISSORS,
);

my %score2 = (
    "$ELF_ROCK $TO_DRAW"          => $DRAW + $SH_ROCK,
    "$ELF_ROCK $TO_WIN"           => $WIN  + $SH_PAPER,
    "$ELF_ROCK $TO_LOSE"          => $LOSS + $SH_SCISSORS,
    "$ELF_PAPER $TO_LOSE"         => $LOSS + $SH_ROCK,
    "$ELF_PAPER $TO_DRAW"         => $DRAW + $SH_PAPER,
    "$ELF_PAPER $TO_WIN"          => $WIN  + $SH_SCISSORS,
    "$ELF_SCISSORS $TO_WIN"       => $WIN  + $SH_ROCK,
    "$ELF_SCISSORS $TO_LOSE"      => $LOSS + $SH_PAPER,
    "$ELF_SCISSORS $TO_DRAW"      => $DRAW + $SH_SCISSORS,
);
~~~~

If we were to dump out `%score1` using [`YAML`](#meta:YAML), we get:

~~~~
A X: 4
A Y: 8
A Z: 3
B X: 1
B Y: 5
B Z: 9
C X: 7
C Y: 2
C Z: 6
~~~~

And the dump of `%score2`:

~~~~
A X: 3
A Y: 4
A Z: 8
B X: 1
B Y: 5
B Z: 9
C X: 2
C Y: 6
C Z: 7
~~~~

Processing the input and printing out the results is now simple:

~~~~
chomp (my @input = <>);

say "Solution 1: ", sum map {$score1 {$_}} @input;
say "Solution 2: ", sum map {$score2 {$_}} @input;
~~~~

`sum` is imported from [`List::Util`](#).



FULL_PROGRAM

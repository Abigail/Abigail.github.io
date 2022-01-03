# Advent Of Code 2021, Day 21: Dirac Dice

## [Challenge](https://adventofcode.com/2021/day/21)

In todays challenge, we are going to play a game. We have two
players, and a circular track with 10 positions, marked `1` to `10`.
Since the track is circular, `1` follows `10`.
Each player has a pawn, starting at a random location (which will
be our input), and a score of `0`.
Players take turns (starting with player 1). During each turn, a
player rolls a die three times, advances their pawn as many
positions as the sum of those rolls, and adds the score their pawn
finishes up on to their score.

So, if a player stands on position `7` and rolls `6`, `4`, `5`, she
advances to position `2`, adding `2` to her score.

#### Part One

For the first game, we are going to use a deterministic `100` sided die.
The die will roll `1` on the first roll, `2` on the second, `3` on the third,
etc. Once it has rolled `100` times, it starts over again with a roll of `1`.

The game ends once a player has a score of `1000` or more.

We are asked to calculate the product of the number of rolls until
the game ends, and the score of the *losing* player.

With starting positions of `4` and `8` for player 1 and player 2,
the game ends on turn `331`, with player 1 having a score of `1000`.
The die has been rolled `993` times, and player 2 has a score of `745`.
So, the answer would then be <span class = "answer">739785</span>.

#### Part Two

In the second game, we swap the deterministic die with a three sided
*Dirac die*. Rolling a Dirac die causes the universe to split into
multiple copies: one for each possible outcome of the die (so, in this
case, the universe splits into three different universes on each roll).

The game now ends when a player reaches a score of `21`. We're asked to
find the player which wins in the most universes, and report in how
many universes that player wins.

With the starting positions of `4` and `8`, player 1 wins in
`444356092776315` universes, and player 2 wins in `341960390180808`
universes. So, we would report <span class = "answer">444356092776315</span>.

## Solution

### Perl

Reading the input is trivial, it's just two lines where we need the
number at the end of each line:

~~~~
my @start = map {/([0-9]+)$/} <>;
~~~~

`$start [0]` will be the starting position of the first player, and
`$start [1]` will be the starting position of the second player.

We start off with a helper method, `move`. It gets the following arguments:

* `$positions`: an arrayref with the current positions of the two players.
* `$scores`: an arrayref with the current scores of the two players.
* `$player`: the player whose turn it is (either `0` for the first player,
   or `1` for the second player)
* `@rolls` a list of die rolls made in this turn.

The method will update the position and score:

~~~~
sub move ($positions, $scores, $player, @rolls) {
    $$positions [$player]  += $_ for @rolls;
    $$positions [$player]  %= 10;
    $$positions [$player] ||= 10;
    $$scores    [$player]  += $$positions [$player];
}
~~~~

#### Part One

To calculate the result of Part One, we use a method `part_one`, which
as argument gets the list of starting positions of the two players.

We start off with some initializations:

~~~~
sub part_one (@position) {
    my @score  = (0, 0);       # Scores of each player
    my @rolls  = (1 .. 100);   # Initial set of rolls
    my $rolls  = 0;            # Roll count

    my $player = 0;            # Player whose turn it is
~~~~

We then start a bare block, which we will use as an infinite loop (due to
a `redo` at the bottom of the loop):

~~~~
    {
        ... loop body ...

        redo;
    }
~~~~

In the loop body, we first move the current player, and adjust their
score. For that, we need
the next three rolls from `@rolls`, which we will [`splice`](#) off.
We will also adjust the roll count:

~~~~
move \@position, \@score, $player, splice @rolls => 0, 3;
$rolls += 3;
~~~~

If the current player now has a score of at least `1000`, the game ends,
and we exit the loop:

~~~~
last if $score [$player] >= 1000;
~~~~

If we have less than three rolls left in `@rolls`, we add another 100:

~~~~
push @rolls => (1 .. 100) if @rolls < 3;
~~~~

As last action in the body of the loop, we make the other player the
current player:

~~~~
$player = 1 - $player;
~~~~

Once we have exited the loop (due to the game ending), we can calculate
the required results. `$player` is the winning player, so the losing
player is `$player - 1`. Which gives the following return statement:

~~~~
return $score [1 - $player] * $rolls;
~~~~

Calling the method, and printing the result:

~~~~
say "Solution 1: ", part_one @start;
~~~~


#### Part Two

For Part Two, we will first investigate the possible results of rolling
three `3` sided dice, and how frequent the result occurs:

|====
{th=1} Roll & {th=1} Frequency & {th=1} Possible rolls \\
3 & 1 & `(1, 1, 1)`                \\
4 & 3 & `(2, 1, 1)`                \\
5 & 6 & `(3, 1, 1)`, `(2, 2, 1)`   \\
6 & 7 & `(3, 2, 1)`, `(2, 2, 2)`   \\
7 & 6 & `(3, 3, 1)`, `(3, 2, 2)`   \\
8 & 3 & `(3, 3, 2)`                \\
9 & 1 & `(3, 3, 3)`                \\
====|

Part two, we will solve with a recursive subroutine. This gets five
arguments:

* `$position0`, `$position1`, the current positions of the players.
* `$score0`, `$score1`, the current scores of the players. If not given,
   the scores are assumed to be `0`.
* `$player`, the player whose turn it is. 

The subroutine will return a 2 element array, with the first element
the number of universes in which the first player wins, and the
second element the number of universes the second player wins.

We will cache results, so we won't repeatedly calculate the same results:

~~~~
sub part_two ($position0, $position1, $score0 = 0, $score1 = 0, $player = 0) {
    state $cache;
    $$cache {$position0, $position1, $score0, $score1, $player} //= do {
        my $out;
        ... body ...
        $out;
    }
}
~~~~

In the section marked `body`, we first check if either player has won:

~~~~
        $out = [1, 0] if $score0 >= 21;
        $out = [0, 1] if $score1 >= 21;
~~~~

If not, we will recurse with each possible outcome of the three die rolls,
multiply the result with the frequency of each of the rolls, and summing
all the results:

~~~~
        if (!$out) {
            $out = [0, 0];
            foreach my $roll ([3, 1], [4, 3], [5, 6], [6, 7],
                              [7, 6], [8, 3], [9, 1]) {
                my ($roll, $frequency)  = @$roll;

                #
                # Move the current player according to the roll
                #
                my @position = ($position0, $position1);
                my @score    = ($score0,    $score1);
                move \@position, \@score, $player, $roll;

                #
                # And recurse
                #
                my $results = part_two (@position, @score, 1 - $player);

                #
                # Sum results
                #
                $$out [$_] += $$results [$_] * $frequency for 0, 1;
            }
        } 
~~~~


We can now call the subroutine, and report the maximum of the two
returned values:

~~~~
use List::Util qw [max];

say "Solution 2: ", max @{part_two @start};
~~~~

FULL_PROGRAM

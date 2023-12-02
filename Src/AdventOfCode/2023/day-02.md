# Advent Of Code 2023, Day 2: Cube Conundrum

## [Challenge](https://adventofcode.com/2023/day/2)

For this challenge, we are repeatedly playing a game. For each game, 
a bag containing an unknown number of red, green and blue cubes is
used (different games use different bags with different amount of cubes).

In each game, an elf randomly draws a number of cubes, and shows them
to you. The elf repeats this zero or more times, returning the cubes to
the bag before each draw.

Our input contains the results of each game, one game per line. For
example:

~~~~
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
~~~~

For each game, the draws are separated by a semi-colon (`";"`); for each
draw we get a list of how many cubes of each colour we are shown.

For instance, for the first game, the first draw shows 3 blue and 4 red
cubes. The second draw 1 red, 2 green and 6 blue cubes, and the third and
final draw shows 2 cubes.

We now need to answer two questions.

#### Part 1

For part 1, we need to know which games could result in the shown draws
if the bag contains at exactly 12 red cubes, 13 green cubes, and 14 blue
cubes. For the example above, games 1, 2 and 5 would be possible, but
games 3 and 4 not, as they contain draws showing 20 red and 15 blue cubes.

We need to sum the game numbers of the games which would be possible.
For the example given, the answer would be `1 + 2 + 5` for a total of
<span class = 'answer'>8</span>.

#### Part 2

For part 2, for each game we need to determine what the minimum number
of cubes of each colour must be in the bag to make the draws possible.
For game 1 above, the minimum number of red cubes in the bag must be 4;
the minimum number of green cubes must be 2; and there must be at least
6 blue cubes in the bag.

To get the final answer, for each game we multiply the three minimum
numbers, then sum the totals of each game. So, the result for the
first game is `4 * 2 * 6 == 48`. For the other games above, the results
are `12`, `1560`, `630`, and `36`. So, the answer would be
`48 + 12 + 1560 + 630 + 36`, resulting in the answer
<span class = 'answer'>2286</span>.

## Solution

The key to our solution is the observation that for each game, all
we need to know is the maximum number of red, green, and blue cubes
shown in any of the draws. We don't need to know the breakdown in
different draws. That is, it makes no difference if whether
`5` red cubes, `7` green cubes and `9` blue cubes were drawn all together,
or in three separate draws.

First, we start with some initializations:

~~~~
my $MAX_RED    = 12;
my $MAX_GREEN  = 13;
my $MAX_BLUE   = 14;

my $solution_1 = 0;
my $solution_2 = 0;
~~~~

This just makes constants for the Part 1 requirement, and initializes 
the counters for the two solutions.

We then loop over the input (using [`while (<>)`](#syn:Compound-Statements)).
Inside the loop, we first extract the game number. This is the first number
of the line:

~~~~
my ($game) = /([0-9]+)/;
~~~~

We could have used a counter, but we aren't given that the games appear
in a specific order (for the given input they do, but why assume?).

We can now extract the three maximums:

~~~~
my  $max_red   = max (/([0-9]+)\s+red/g)   || 0;
my  $max_green = max (/([0-9]+)\s+green/g) || 0;
my  $max_blue  = max (/([0-9]+)\s+blue/g)  || 0;
~~~~

using the [`max`](#meta:List::Util#max) function we imported from
[`List::Util`](#).
We use the `|| 0` to avoid warnings if there is a game where one of the
colours isn't drawn. In that case, the `$max_colour` variable will be
`undef`. Undefined values used in numeric context are treated as `0`
by `perl`, so we'd still calculate the same values, but it would warn,
and we don't want that.

We can now add the game number to `$solution_1`, if the maxima do not
exceed the given constraints:

~~~~
$solution_1 += $game if   $max_red   <= $MAX_RED   &&
                          $max_green <= $MAX_GREEN &&
                          $max_blue  <= $MAX_BLUE;
~~~~

For part 2, there is no conditional, we just always add the product
of the three maxima:

~~~~
$solution_2 += $max_red * $max_green * $max_blue;
~~~~

All that is left to do is to print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

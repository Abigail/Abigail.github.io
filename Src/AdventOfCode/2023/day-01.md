# Advent Of Code 2023, Day 1: Trebuchet?!

## [Challenge](https://adventofcode.com/2023/day/1)

We are given a file, containing *calibration values*; one on each 
line of the input. We're tasked to find the sum of all the calibration
values.

#### Part 1

For part 1, the calibration value can be found by combining
the first and last digit on each line. For this example input:

~~~~
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
~~~~

we can extract the calibration values `12`, `38`, `15`, and `77`, 
for a total of <span class = 'answer'>142</span>.

#### Part 2

In the second part, we need to take a closer look. It turns out, some
digits are written as words: `one`, `two`, `three`, `four`, `five`, `six`,
`seven`, `eight`, and `nine` should be considered digits.

Given this example:

~~~~
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
~~~~

we get the calibration values: `29`, `83`, `13`, `24`, `42`, `14`, and `76`,
which sums up to <span class = 'answer'>281</span>.

## Solution

There are three things to consider when extracting the first and last digit.

* A line may contain just a single digit, like the last line of the first
  example. In this case, the digit counts both as the first and last digit
  of the line.
* Spelled out digits can overlap. For instance `twone` should be considered
  a `2` if it's the first digit on a line, but a `1` if it is the last digit.
  A trivial replacement of each spelled out digit with its numerical
  representation can go wrong: if you just replace `two` with `2`, you
  are left with `2ne`, and you'll miss the `one`.
* Zero is not defined as a possible spelled out digits. In my input,
  `zero` does not occur, but it's cleaner if the solution doesn't
  consider a spelled out `zero`.

We will use simple regexes to find the first and last digits on each line,
using a leading `/.*/` to force a match as late as possible.

First, we start off with some initialization:

~~~~
my $solution_1 = 0;
my $solution_2 = 0;

my @words      = qw [one two three four five six seven eight nine];
my %value      = do {my $i = 0; map {$_ => ++ $i} @words};
   $value {$_} = $_ for 0 .. 9;
~~~~

We set two counters to `0`, and create an array with the spelled out
digits. We then use a [`map`](#) and a counter (`$i`) to create a hash
(`%value`) which maps the spelled out digit to its numeric value.

We can then iterate over the input, and extract the digits:

~~~~
while (<>) {
    local $" = "|";
    my ($first_digit) = /   ([0-9])         /x;
    my ($last_digit)  = /.* ([0-9])         /x;
    my ($first_word)  = /   ([0-9] | @words)/x;
    my ($last_word)   = /.* ([0-9] | @words)/x;
~~~~

`/([0-9])/` finds the first digit of the line, and places it in `$first_digit`.
`/.*([0-9])/` finds the last digit, due to the `/.*/` which first tries to
match as much characters as possible, before trying to match the rest.
(Note the use of the `/x` modifiers, which ignore the whitespace in the
regular expression).

To find the match for part two, we use `/([0-9] | @words)/`. This interpolates
the array `@words`, with its elements separated by the contain of the
variable `$"`. This is by default a space, but we set it to `|`. In
effect, it turns the regular expression into:

    /([0-9] | one | two | three | four | five | six | seven | eight | nine)/x

so this will find the first digit in a line, whether it is used numerically
or spelled out. And we find the last one by prepending the pattern with
a `/.*/`, just like we did for part one.

We can then sum towards the solutions:

~~~~
    $solution_1      += 10 *         $first_digit +         $last_digit;
    $solution_2      += 10 * $value {$first_word} + $value {$last_word};
}
~~~~

we take 10 times the value of the first digit, and just the second digit.
For the second part, where we consider spelled out digits, we use the
hash `%value` to map any found digit to its numeric value.

All that is left to do is to print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

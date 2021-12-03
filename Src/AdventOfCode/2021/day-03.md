# Advent Of Code 2021, Day 3: Binary Diagnostic

## [Challenge](https://adventofcode.com/2021/day/3)

We are given a diagnostic report, with binary numbers like:

~~~~
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
~~~~

#### Part One

For Part One, we first have to calculate the *gamma rate* and
the *epsilon rate*. For the gamma rate, we have to find the
most common bit on each position. For the epsilone rate, we
have to find the least common bit on each position.

So, for the example file above, the *gamma rate* is `10110`,
or `22` in decimal while the *epsilon rate* is `01001`, or
`9` in decimal.

The wanted result is the produce of both numbers, so
<span class = "answer">198</span>.

#### Part Two

In Part Two, we need to calculate the *oxygen generator rating*,
and the *CO<sub>2</sub> scrubber rating*.

The ratings don't need to be calculated -- they need to be found
in the list. We do this repeatedly as follows:

* Start with the current position being the first bit.
* Find the most common bit and least common bit in the current 
  position.
* For the *oxygen generator rating*, keep the values where the
  bit in the current position equals the most common bit in that
  position.
* For the *CO<sub>2</sub> scrubber rating*, keep the values
  where the bit in the current position equals the least common
  bit in that position.
* Stop filtering when there is one value left.
* Increment the current position.

If `1` and `0` occur equally often, we break the tie by considering
`1` to be the most frequent bit.

For the example file above, the *oxygen generator rating*
is `10111`, or `23` in decimal. The *CO<sub>2</sub> scrubber rating* 
is `01010`, or `10` in decimal.

The wanted result is the product of the two numbers, so
<span class = "answer">230</span>.

## Solution

!observation
If the most occuring bit in a column is `b`, then the least occuring
bit is `1 - b`.
!/observation

### Perl

First, we need to read the input, and put it into a datastructure.
We'll use a 2-dimensional array: each value of the input we split
into individual characters (hence, bits):

~~~~
my $input   = [map {chomp; [split //]} <>];
~~~~

[`<>`](#op:I/O-Operators) reads in the data; since it's in list
context, it splits the input, returning a list of strings, each
string a line of input. Each string is fed into the [`map`](#).
[`chomp`](#) removes the newline, and then we [`split`](#) the string
into indivual characters, storing them into an array.
So, the `map` returns a list of array(refs), making `$input` a reference
to a two-dimensional array.

All input values have the same number of bits, so we can get the
number of bits by just looking at the first entry:

~~~~
my $nr_bits = @{$$input [0]};
~~~~

Evaluating an array in scalar context gives use the number of elements
in the array.

Next, we define a subroutine taking two arguments, a position and
a reference to an array. It will return which bit (`1` or `0`) occurs
most frequently on the given position. We find out which bit is used
most often by summing the values of each of the bits (using
[`sum0`](#meta:List::Util#sum0) from [`List::Util`](#).
This sum equals the number of `1` bits.
If the sum equals or exceeds half the size 
of the input array, the most frequent bit is `1`, else it is `0`. 
If there is a tie, `1` will be returned.

~~~~
sub most_used ($pos, $list) {
    my $ones = sum0 map {$$_ [$pos]} @$list;
    $ones >= @$list / 2 ? 1 : 0
}
~~~~

We can now calculate the bits for the *gamma rate* of Part One: we just
find out which bit is used most frequently on each position:

~~~~
my @max = map {most_used $_, $input} 0 .. $nr_bits - 1;
~~~~

For the bits of the *epsilon rate*, we just flip the bits:

~~~~
my @min = map {1 - $_} @max;
~~~~

To turn those arrays of bits into integers, we use string interpolation
and [`oct`](#):

~~~~
local $" = "";
my $gamma   = oct "0b@max";
my $epsilon = oct "0b@min";
~~~~

For Part Two, we copy the input array, then repeatedly find the
most/least used bit on a particular position, and filter out the values
with those bits, until we are left with just one value:

~~~~
my @oxygen    = @$input;
my @co2       = @$input;
for (my $pos  = 0; $pos < $nr_bits; $pos ++) {
    my $o_bit =     most_used $pos, \@oxygen;
    my $c_bit = 1 - most_used $pos, \@co2;
    @oxygen   = grep {$$_ [$pos] == $o_bit} @oxygen if @oxygen > 1;
    @co2      = grep {$$_ [$pos] == $c_bit} @co2    if @co2    > 1;
}
~~~~

Now, `@oxygen` and `@co2` will contain exactly one element (each element
an array of bits). We can turn those into integers in the same way
as we did above:

~~~~
local $" = "";
my $oxygen  = oct "0b@{$oxygen [0]}";
my $co2     = oct "0b@{$co2    [0]}";
~~~~

All that is left is to print the answers:

~~~~
say "Solution 1: ", $gamma  * $epsilon;
say "Solution 2: ", $oxygen * $co2;
~~~~

FULL_PROGRAM

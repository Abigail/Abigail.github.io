# Advent Of Code 2021, Day 8: Seven Segment Search

<!-- %%% font: LCD -->

## [Challenge](https://adventofcode.com/2021/day/8)

A seven-segment display looks like:

~~~~
   0       1       2       3       4       5       6      7        8       9
 aaaa    ....    aaaa    aaaa    ....    aaaa    aaaa    aaaa    aaaa    aaaa
b    c  .    c  .    c  .    c  b    c  b    .  b    .  .    c  b    c  b    c
b    c  .    c  .    c  .    c  b    c  b    .  b    .  .    c  b    c  b    c
 ....    ....    dddd    dddd    dddd    dddd    dddd    ....    dddd    dddd
e    f  .    f  e    .  .    f  .    f  .    f  e    f  .    f  e    f  .    f
e    f  .    f  e    .  .    f  .    f  .    f  e    f  .    f  e    f  .    f
 gggg    ....    gggg    gggg    ....    gggg    gggg    ....    gggg    gggg
~~~~

To light up a number, say `1`, segments `c` and `f` are turned on.

However, we have to deal with a situation where the segments are wired
randomly. Our task is to figure out what is going on.

We will be given a file with entries like this:

~~~~
acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf
~~~~

The first ten entries, before the `|`, are ten different signals. They
correspond to the signals send to light up the digits `0` to `9`, in
some order. The four entries after the `|` are signals send to a 
particular display.

Each line of input corresponds to a different, four digit display.
On each line, we first have 10 different signals, followed by a
`|`, followed by the signals send to a display. While the segments
are wired identical for each digit in a display, they are wired
differently between displays.

#### Part One

Take this example input:

~~~~
be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce
~~~~

For Part One, we are asked to determine how many `1`s, `4`s, `7`s and `8`s
are shown on all displays. These digits have a unique amount of segments
(two, four, three and seven) and can be fairly easily deduced. For the
given example input, the answer would be <span class = "answer">26</span>.

#### Part Two

For Part Two, we have to deduce all the digits in all the displays. 
For each display, we have to find the four digit number, and then
we have to sum all those numbers. This sum will be the answer.

For the given example input, the answer to Part Two will be
<span class = "answer">61229</span>.


## Solution

|====
  & # & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
0 & 6 &   & 2 & 4 & 4 & 3 & 4 & 5 & 3 & 6 & 5 \\
1 & 2 & 2 &   & 1 & 2 & 2 & 1 & 1 & 2 & 2 & 2 \\
2 & 5 & 4 & 1 &   & 4 & 2 & 3 & 4 & 2 & 5 & 4 \\
3 & 5 & 4 & 2 & 4 &   & 3 & 4 & 4 & 3 & 5 & 5 \\
4 & 4 & 3 & 2 & 2 & 3 &   & 3 & 3 & 2 & 4 & 4 \\
5 & 5 & 4 & 1 & 3 & 4 & 3 &   & 5 & 2 & 5 & 5 \\
6 & 6 & 5 & 1 & 4 & 4 & 3 & 5 &   & 2 & 6 & 5 \\
7 & 3 & 3 & 2 & 2 & 3 & 2 & 2 & 2 &   & 3 & 3 \\
8 & 7 & 6 & 2 & 5 & 5 & 4 & 5 & 6 & 3 &   & 6 \\
9 & 6 & 5 & 2 & 4 & 5 & 4 & 5 & 5 & 3 & 6 &   \\
====|

The key to the solution is to determine what is unique about
the signals for each number.

Take a look at the table on the right. The first column has
the ten digits. The second column, marked with a #, indicates
how many segments the digit uses. The next ten columns show
how many segments the digit shares with the other nine digits.

We can see that four digits have a unique number of segments:
<span class = "segment7">1</span> uses two segments,
<span class = "segment7">4</span> uses four segments,
<span class = "segment7">7</span> uses three segments, and
<span class = "segment7">8</span> uses seven segments.

The other digits can be grouped into two groups:
<span class = "segment7">0</span>,
<span class = "segment7">6</span>, and
<span class = "segment7">9</span> all use six segments,
while
<span class = "segment7">2</span>,
<span class = "segment7">3</span>, and
<span class = "segment7">5</span> all use five segments.
We can distinguish between those digits to look at the
number of segments they share with digits we have already
identified.

Looking at the table, of the group
<span class = "segment7">0</span>,
<span class = "segment7">6</span>, and
<span class = "segment7">9</span> one of them
(<span class = "segment7">6</span>) shares
exactly one segment with
<span class = "segment7">1</span>, while the other
two share two segments. Having identified <span class = "segment7">6</span>,
we can distinguish between
<span class = "segment7">0</span>, and
<span class = "segment7">9</span> by comparing them with
<span class = "segment7">4</span>: <span class = "segment7">0</span>
shares three segments with <span class = "segment7">4</span>,
while <span class = "segment7">9</span> shares four segments.

Which leaves use the group of
<span class = "segment7">2</span>,
<span class = "segment7">3</span>, and
<span class = "segment7">5</span>. When we compare those numbers
with <span class = "segment7">1</span>, then
<span class = "segment7">3</span> has two segments in common,
while the other two digits have one segment in common. To
distinguish between <span class = "segment7">2</span>,
and <span class = "segment7">5</span>, we compare them with
<span class = "segment7">9</span>. If they have five segments
in common, the digit is a <span class = "segment7">5</span>,
else, it's a <span class = "segment7">2</span>.

### Perl

First thing we do is read a line of input. We will sort the segments
in the signals -- that way each digit has always the same representation.
That is, an <span class = "segment7">8</span> will always be representated
as `abcdefg` (all seven segments are on), instead of `bdecagf` or
`gfedcba`. And if for <span class = "segment7">7</span>, the segments
`b`, `d` and `f` are used, we always represent that as `bdf`.

~~~~
chomp;
my ($input, $output) = split /\s*\|\s*/;

my @input  = map {join "" => sort split //} split ' ' => $input;
my @output = map {join "" => sort split //} split ' ' => $output;
~~~~

Now, `@input` contains the first ten signals, and `@output` the
signals for the display.

Next, we will group the input signals by their length:

~~~~
my @buckets;
foreach my $i (@input) {
    push @{$buckets [length $i]} => $i;
}
~~~~

Since some of the lengths are unique for some digits, we can
fill in some digits. `@digits` maps digits to their signal:

~~~~
my @digits;
$digits [1] = $buckets [2] [0];
$digits [4] = $buckets [4] [0];
$digits [7] = $buckets [3] [0];
$digits [8] = $buckets [7] [0];
~~~~

We will create a helper function. Given the signals of two digits,
it will return how many segments they have in common:

~~~~
sub shares ($f, $s) {
    grep {$s =~ /$_/} split // => $f;
}
~~~~

We can now distinguish between `0`, `6`, and `9`, and between
`2`, `3`, and `5` by comparing the number of shared segments
to known digits:

~~~~
foreach my $try (@{$buckets [6]}) {
    $digits [shares ($try, $digits [1]) == 1 ? 6
           : shares ($try, $digits [4]) == 3 ? 0
           :                                   9] = $try;
}

foreach my $try (@{$buckets [5]}) {
    $digits [shares ($try, $digits [1]) == 2 ? 3
           : shares ($try, $digits [9]) == 5 ? 5
           :                                   2] = $try;
}
~~~~

We now know the signals for each of the digits. So, we create
a lookup table which maps the signals to the digits:

~~~~
my %display;
$display {$digits [$_]} = $_ for keys @digits;
~~~~

Now it's just a matter of counting and adding:

~~~~
$count1 += grep {$display {$_} == 1 ||
                 $display {$_} == 4 ||
                 $display {$_} == 7 ||
                 $display {$_} == 8}      @output;

$count2 += join "" => map {$display {$_}} @output;
~~~~

And we print the results:

~~~~
say "Solution 1: ", $count1;
say "Solution 2: ", $count2;
~~~~

FULL_PROGRAM

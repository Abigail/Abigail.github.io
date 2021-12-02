# Advent Of Code 2021, Day 2: Dive!

## [Challenge](https://adventofcode.com/2021/day/2)

We're given an [input file](https://adventofcode.com/2021/day/2/input)
with instructions of moving a submarine. The file looks like this:

~~~~
forward 5
down 5
forward 8
up 3
down 8
forward 2
~~~~

#### Part One

In Part One, we keep track of two variables: the *horizontal position*
(the direction the submarine has travelled in the forward
direction), and the *depth* (how deep the submarine has dived):

The instructions are to be interpreted as:

* `forward X` increases the horizontal position by `X` units.
* `down X` increases the depth by `X` units.
* `up X` decreases the depth by `X` units.

To get the answer, we have to process all the instructions from the
input, and then multiply the final horizontal position with the final depth.

For the example file above, the answer would be 
<span class = "answer">150</span>.

#### Part Two

In Part Two, we introduce an additional parameter to track: *aim*.

Now, the instructions are to be interpreted as:

*   `down X` increases your aim by `X` units.
*   `up X` decreases your aim by `X` units.
*   `forward X` does two things:
    *   It increases your horizontal position by `X` units.
    *   It increases your depth by your aim multiplied by `X`.

Again, to get the answer, we process all the instructions, then
multiply the final horizontal position, and final depth.

For the example file above, the answer would be
<span class = "answer">900</span>.

## Solutions

!observation
For both parts, the final horizontal position will be the same.
!/observation

!observation
The value of the depth in part one, is equal to the value of aim in part two.
!/observation

### Perl

For our Perl solution, we use three variable to keep track:

* `$forward`: the horizontal position of the submarine.
* `$depth1`: the depth of the submarine in part one, and the value 
             of the aim in part two.
* `$depth2`: the depth of the submarine in part two.

First, we initialize the variables:

~~~~
my $forward = 0;
my $depth1  = 0;
my $depth2  = 0;
~~~~

Then we loop over the input, updating the appropriate variables
depending on the command:

~~~~
while (<>) {
    my ($cmd, $amount) = split;
    if ($cmd =~ /^f/) {$forward += $amount; $depth2 += $amount * $depth1}
    if ($cmd =~ /^d/) {$depth1  += $amount}
    if ($cmd =~ /^u/) {$depth1  -= $amount}
}
~~~~

Then we can print the solutions:

~~~~
say "Solution 1: ", $forward * $depth1;
say "Solution 2: ", $forward * $depth2;
~~~~

FULL_PROGRAM

### Bash

Remarkably, our Bash solution is very similar to the Perl solution.
We don't need to bother initializing our variables, so we go straight
to the loop:

~~~~
while read cmd amount
do  case $cmd in
        f*) ((forward += amount))
            ((depth2  += amount * depth1)) ;;     
        d*) ((depth1  += amount))          ;;     
        u*) ((depth1  -= amount))          ;;     
    esac
done
~~~~

Instead of three `if` statements, we have a single `case` statement,
but the effect is the same. In either case, exactly one of the options
will be executed.

After the loop, we print the results:

~~~~
echo Solution 1: $((forward * depth1))
echo Solution 2: $((forward * depth2))
~~~~

FULL_PROGRAM

### Evil Perl

Inspired by a [solution](https://pastebin.com/XrQMnVGR) from
[musifter](https://www.reddit.com/user/musifter/), we can
write the main loop also as:

~~~~
while (<>) {
    my ($cmd, $amount) = split;
    $forward += !('forward' cmp $cmd) * $amount;
    $depth1  +=  ('forward' cmp $cmd) * $amount;
    $depth2  += !('forward' cmp $cmd) * $amount * $depth1;
}
~~~~

Note the absense of an `if` statement in the loop.

How does this work? They key lies in the value of `'forward' cmp $cmd`.
[`cmp`](#op:Equality-Operators). It compares two strings, and returns
`-1`, `0`, or `1` depending if the first string is (string-wise) less,
equal or greater than the second.

`forward` lies in between `down` and `up`. So, we get the
following table:

|====
`$cmd`      & `('forward' cmp $cmd)` & `!('forward' cmp $cmd)` \\
`"down"`    &  `1` & `0` \\
`"forward"` &  `0` & `1` \\
`"up"`      & `-1` & `0` \\
====|

The result is that if the command is `forward`, we increment 
`$forward` and `$depth2`, but we leave `$depth1` unmodified.
If the command is `down`, we increment `$depth1` by `$amount`,
leaving `$forward` and `$depth2` unmodified. And if the command
is `up`, we decrement `$depth1` by `$amount` (because
`('forward' cmp $cmd)` is `-1`), leaving `$forward` and `$depth2` unmodified.

This is exactly the same as we did in the regular Perl solution.

FULL_PROGRAM;part_nr=2

### Very Evil Perl

We also have a very evil Perl solution (works only for Part One):

~~~~
perl -pale'${$F[0]}+=$F[1]}{$_=$forward*($down-$up)' input
~~~~

This abuses symbolic references, and exploits the ways how `perl`
(the program, not the language), modifies the source of the program
it's about to compile when seeing a `-p` or `-n` command line switch,
by using the
[Eskimo greeting](https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod#Eskimo-greeting).

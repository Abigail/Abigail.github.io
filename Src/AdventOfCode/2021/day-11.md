# Advent Of Code 2021, Day 11: Dumbo Octopus

## [Challenge](https://adventofcode.com/2021/day/11)

Today, we have to deal with 100 octopusses. 

The octopusses are organized in a 10 x 10 grid, each having a specific
energy level (a single digit non-negative integer). Their energy level
slowly increases over time, and if they reach a critical level, the
octopusses flash, draining their energy. When they flash, they can
pass some of their energy to neigbouring octopusses, which cause them
to flash.

To raising of energy, and the flashes, happen in *steps*. During a step,
the following occurs (quoting from the challenge):

>>>>
* First, the energy level of each octopus increases by 1.
* Then, any octopus with an energy level greater than 9 flashes. This
  increases the energy level of all adjacent octopuses by 1, including
  octopuses that are diagonally adjacent. If this causes an octopus
  to have an energy level greater than 9, it also flashes. This process
  continues as long as new octopuses keep having their energy level
  increased beyond 9. (An octopus can only flash at most once per
  step.)
* Finally, any octopus that flashed during this step has its energy
  level set to 0, as it used all of its energy to flash.
<<<<

Take this example input:

~~~~
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
~~~~

Each digit represets the energy level of an octopus. After the first step,
the energy of each octopus has raised by 1, causing none of the 
octopusses to flash:

~~~~
6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637
~~~~

In the next step, 35 octopusses flash:

<pre markdown = 1><code>88<span class = "flash">0</span>7476555
5<span class = "flash">0</span>89<span class = "flash">0</span>87<span class = "flash">0</span>54
85978896<span class = "flash">0</span>8
84857696<span class = "flash">00</span>
87<span class = "flash">00</span>9<span class = "flash">0</span>88<span class = "flash">00</span>
66<span class = "flash">000</span>88989
68<span class = "flash">0000</span>5943
<span class = "flash">000000</span>7456
9<span class = "flash">000000</span>876
87<span class = "flash">0000</span>6848</code></pre>


#### Part One

We have to find out how many flashes happen in 100 steps.
For the example input, there will be <span class = "answer">1656</span>
flashes in 100 steps.

#### Part Two

Eventually, the octopusses all flash at the same time (this may not
happen with a random input, but it will for the given input). We
have to find out the first time this happens.
For the example input, this first happens on
step <span class = "answer">195</span>.

## Solution

### Perl

Just like in [day 09](day-09.html), we will wrap the field on a torus,
using a seam of numbers which cannot influence the result -- in this
case, large negatives numbers (`-~0 == -18446744073709551615`).
This means, we can always look at the neighbours of an octopus by
adding `-1` and `1` to the coordinates of an octopus, without having
to worry about boundaries:

~~~~
my $MIN  = -~0;
my @octopusses = map {[/[0-9]/g, $MIN]} <>;
my $SIZE = @octopusses;
push @octopusses => [($MIN) x ($SIZE + 1)];
~~~~

Next, we will define a subroutine which takes the field of 
octopusses, and calculates the result of a step, returning the
number of octopusses which flash.

~~~~
my $LIMIT = 9;
sub step ($octopusses) {
    my %flashed;
    my @todo;
~~~~

We will use `%flashes` to keep track of which octopusses have flashed
in this step. `@todo` will be a list of octopusses which will flash this
step, but we haven't processed their effects yet.

First step is to increase the energy level of each octopus, and putting
the ones which are about to flash in the `@todo` array:

~~~~
foreach my $x (0 .. ($SIZE - 1)) {
    foreach my $y (0 .. ($SIZE - 1)) {
        if (++ $$octopusses [$x] [$y] > $LIMIT) {
            push @todo => [$x, $y];
            $$octopusses [$x] [$y] = 0;
        }
    }
}
~~~~

We can now flash the octopusses. For each flashing octopus, we increment
the energy level of all its neighbours (taking care of not incrementing
the level of an octopus which has already flashed in this step -- such an
octopus has energy level `0`). If this pushes the energy level of an
octopus over the limit, we add it to the `@todo` array (at this moment,
we don't care whether it's already in the array). If we are about to
flash an octopus, but it has already flashed this step, we don't do
anything. After flashing, we set the energy level of the octopus to `0`:

~~~~
while (@todo) {
    my ($x, $y) = @{shift @todo};
    next if $flashed {$x, $y} ++;
    foreach my $dx (-1 .. 1) {
        foreach my $dy (-1 .. 1) {
            next if $dx == 0 && 0 == $dy;
            if (   $$octopusses [$x + $dx] [$y + $dy] &&
                ++ $$octopusses [$x + $dx] [$y + $dy] > $LIMIT) {
                push @todo => [$x + $dx, $y + $dy];
            }
        }
    }
    $$octopusses [$x] [$y] = 0;
}
~~~~

Now, `%flashes` contains all octopusses which has flashed this step
(and no octopusses which did not flash), so we can just return the
number of octopusses in this hash:

~~~~
return scalar keys %flashed
~~~~

Now, it's just a matter of stepping until the octopusses synchronize,
counting the number of flashes in the first 100 steps. Note that if
the octopusses synchronize, the number of flashing octopusses in a step
is the maximum number of flashes: the number of octopusses.

~~~~
my $first_step = 0;
my $flashes     = 0;
{
    state $steps = 0;
    $steps ++;
    my $step_flashes = step \@octopusses;
    if ($step_flashes == $SIZE * $SIZE) {
        $first_step = $steps;
    }
    $flashes += $step_flashes if $steps <= $STEPS;
    redo unless $first_step && $steps >= $STEPS;
}


say "Solution 1: ", $flashes;
say "Solution 2: ", $first_step;
~~~~

FULL_PROGRAM

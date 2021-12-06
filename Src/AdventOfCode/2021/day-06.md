# Advent Of Code 2021, Day 6: Lanternfish

## [Challenge](https://adventofcode.com/2021/day/6)

We have to deal with fast spawning fish, and we have to model
their growth rate.

We know a new lantarnfish creates a new lanternfish every 7 days.
With the exception of freshly spawned lantarnfish -- they
spawn their first new fish after 9 days (and then a new fish
every 7 days).

But not all fish are on the part of their cycle: while one
lantarnfish may have 4 days left before it spawns another
fish, another lantarnfish may spawn one 2 days from now.

What we are given is a list of numbers, each number is the
number of days left for a particular fish before it spawns
another one.

For instance, suppose we are given the following list:

~~~~
3,4,3,1,2
~~~~

This means we start with five fish. The first and third fish will spawn
three days from now; the second fish four days from now, the fourth
fish tomorrow, and the fifth fish two days from now.

Simulating this over the next 18 days, we get:

~~~~
Initial state: 3,4,3,1,2
After  1 day:  2,3,2,0,1
After  2 days: 1,2,1,6,0,8
After  3 days: 0,1,0,5,6,7,8
After  4 days: 6,0,6,4,5,6,7,8,8
After  5 days: 5,6,5,3,4,5,6,7,7,8
After  6 days: 4,5,4,2,3,4,5,6,6,7
After  7 days: 3,4,3,1,2,3,4,5,5,6
After  8 days: 2,3,2,0,1,2,3,4,4,5
After  9 days: 1,2,1,6,0,1,2,3,3,4,8
After 10 days: 0,1,0,5,6,0,1,2,2,3,7,8
After 11 days: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8
After 12 days: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8
After 13 days: 4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8
After 14 days: 3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8
After 15 days: 2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7
After 16 days: 1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8
After 17 days: 0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8
After 18 days: 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8
~~~~

Given this list, after 18 days we have 26 fish; after 80 days,
we will have <span class = "answer">5934</span> fish, and
after 256 days, we have <span class = "answer">26984457539</span>
fish.

#### Part One
Given the input, calculate the number of fish on day 80.

#### Part Two
Given the input, calculate the number of fish on day 256.

## Solution

It should be obvious both parts are basically the same thing, just with
a larger number. Part One could be solved by modelling each fish
separately, but Advent of Code veterans would see Part Two coming,
where you certainly cannot do this.

What we should realize that each fish only has at most 9 different states.
Either is spawns today, or in one of the next 8 days. And if two fish
are in the same state on a certain day, they will be in the same state
on any subsequent day (the reverse is not true!).

This means, we can group the fish in equivalence classes (based on their
internal timer), and calculate what happens with each class. For that,
we create a vector \(f\):

\[
    f = \left(\begin{array}{c}t_0 \\\\ t_1 \\\\ t_2 \\\\ t_3 \\\\ t_4 \\\\
                              t_5 \\\\ t_6 \\\\ t_7 \\\\ t_8
              \end{array}\right)
\]

where \(c_n\) is the number of fish which will spawn \(n\) days from
now.

We can now define the following sequence:

\[
    f_{g+1} = \left(\begin{array}{c}
                  t^g_1 \\\\
                  t^g_2 \\\\
                  t^g_3 \\\\
                  t^g_4 \\\\
                  t^g_5 \\\\
                  t^g_6 \\\\
                  t^g_7 + t^g_0 \\\\
                  t^g_8 \\\\
                  t^g_0 \end{array}\right), \; g > 0,
     \qquad\qquad f_0 = 
              \left(\begin{array}{c}
                  t^0_0 \\\\
                  t^0_1 \\\\
                  t^0_2 \\\\
                  t^0_3 \\\\
                  t^0_4 \\\\
                  t^0_5 \\\\
                  t^0_6 \\\\
                  t^0_7 \\\\
                  t^0_8 \end{array}\right)
\]

where \(f^g_i\) is element \(i\) from \(f_g\).


We can also write this as a matrix transformation:

\[
    f_{g+1} = \left(
        \begin{array}{ccccccccc}
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\\\
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
        \end{array}\right) = A \cdot f_g
\]

#### Iteration

Starting with \(f_0\), we can do the transformation the appropriate
number of times, then sum the values in \(f_{80}\) and \(f_{256}\).

#### Matrix exponentiation

We have \(f_g = A^g \cdot f_0\). So, we can just raise the matrix \(A\)
to the power \(g\), and apply that to \(f_0\).

### Perl

We start off with some initialization, and reading of the input:

~~~~
my $GENERATIONS1 =  80;
my $GENERATIONS2 = 256;
my $TIMERS       =   9;

my @fish = (0) x $TIMERS;
   $fish [$_] ++ foreach split /,/ => <>;
~~~~

Now `$fish [$i]` will contain the number of which which will spawn 
`$i` days from now.

#### Iteration

Iterating over the sequence is easy:

~~~~
for (1 .. $GENERATIONS2) {
    @fish      = @fish [1 .. $TIMERS - 1, 0];
    $fish [6] += $fish [$TIMERS - 1];
    say "Solution 1: ", sum @fish if $_ == $GENERATIONS1;
    say "Solution 2: ", sum @fish if $_ == $GENERATIONS2;
}
~~~~

#### Matrix exponentation

To do matrix exponentation, we have to turn the initial number 
of fish into a vector, and define the matrix (which was named \(A\)
above). So, after reading the data, we do:

~~~~
my $fish   = Math::Matrix:: -> new (map {[$_ || 0]} @fish);
my $matrix = Math::Matrix:: -> new ([0, 1, 0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 1, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 1, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 1, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 1, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 1, 0, 0],
                                    [1, 0, 0, 0, 0, 0, 0, 1, 0],
                                    [0, 0, 0, 0, 0, 0, 0, 0, 1],
                                    [1, 0, 0, 0, 0, 0, 0, 0, 0],);
~~~~

Now, we raise `$matrix` to the number of generations, and apply
it to the `$fish` vector. [`Math::Matrix`](#) objects are overloaded,
so we can just use `**` and `*`. It also has a `sum` method which
sums the elements of a matrix. The result of `sum` is another object,
which, if stringified, results in a number with `0`s after a 
decimal dot, and a newline. So, we remove this before printing.
Hence, we get:

~~~~
say "Solution 1: ", (($matrix ** $GENERATIONS1 * $fish) -> sum) =~ s/\..*//sr;
say "Solution 2: ", (($matrix ** $GENERATIONS2 * $fish) -> sum) =~ s/\..*//sr;
~~~~

#### Closed form solution

Given the matrix exponentation, we can easily create a closed form 
solution, by raising the matrix to the appropriate number of times,
and summing the columns. This would lead to (after reading in the data):

~~~~
say "Solution 1: ",
          1421 * $fish [0] +       1401 * $fish [1] +       1191 * $fish [2] +
          1154 * $fish [3] +       1034 * $fish [4] +        950 * $fish [5] +
           905 * $fish [6] +        779 * $fish [7] +        768 * $fish [8];

say "Solution 2: ",
    6703087164 * $fish [0] + 6206821033 * $fish [1] + 5617089148 * $fish [2] +
    5217223242 * $fish [3] + 4726100874 * $fish [4] + 4368232009 * $fish [5] +
    3989468462 * $fish [6] + 3649885552 * $fish [7] + 3369186778 * $fish [8];
~~~~

Find the [iterative solution](https://github.com/Abigail/AdventOfCode2021/blob/master/Day_06/solution.pl), the 
[matrix exponentation solution](https://github.com/Abigail/AdventOfCode2021/blob/master/Day_06/solution-2.pl) and the
[closed-form solution](https://github.com/Abigail/AdventOfCode2021/blob/master/Day_06/solution-3.pl) on [GitHub](https://github.com/).

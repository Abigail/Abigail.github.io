# Advent Of Code 2021, Day 7: The Treachery of Whales

## [Challenge](https://adventofcode.com/2021/day/7)

We are given a set \(\mathcal{S}\) of numbers:

~~~~
16,1,2,0,4,2,7,1,2,14
~~~~

We are looking for another number \(N\) (integer) which minimizes a
certain measurement: the sum of the *cost* between \(N\)
and each element of \(\mathcal{S}\).

#### Part One

For Part One, the *cost* between two numbers is just the
absolute value of their difference.

For the given example set, the answer will be <span class = "answer">37</span>.


#### Part Two

For part two, the *cost* is defined as:

* if the absolute difference is \(1\), then the cost is \(1\).
* if the absolute difference is \(2\), then the cost is \(1 + 2 = 3\).
* if the absolute difference is \(3\), then the cost is \(1 + 2 + 3 = 6\).
* etc.

That is, if the absolute difference is \(k\), the cost is the
\(k^{\text{th}}\) [*triangle number*](#wiki).

For the given example set, the answer will be <span class = "answer">168</span>.


## Solution

We will present two ways of solving the problem, a brute force one,
and one which uses statistics.

For triangle numbers, we have:

\[
    1 + 2 + \ldots + n = \sum_{k = 1}^n k = \frac{n * (n + 1)}{2}
\]

### Perl

First, we read in the data:

~~~~
my @nums = <> =~ /[0-9]+/g;
~~~~

Next, we define two functions to calculate costs. `cost1` calculates
the cost for part one, while `cost2` calculates the cost for part two.
Both functions take two arguments: a number (`$target`), and a reference
to an array with numbers (`$nums`). What they return is the sum of the
costs between `$target` and each of the elements of `$nums`:

~~~~
sub cost1 ($target, $nums) {
    sum map {abs ($target - $_)} @$nums;
}

sub cost2 ($target, $nums) {
    sum map {my $n = abs ($target - $_); $n * ($n + 1) / 2} @$nums;
}
~~~~

#### Brute Force

For the brute force approach, we calculate the sum of the costs
for every possible integer between the minimum and maximum values
of `@nums`, and report the minimum:

~~~~
say "Solution 1: ", min map {cost1 $_, \@nums} min (@nums) .. max (@nums);
say "Solution 2: ", min map {cost2 $_, \@nums} min (@nums) .. max (@nums);
~~~~

FULL_PROGRAM


#### Using Statistics

The sum of the costs of part one will be minimized for the [*median*](#wiki) of
\(\mathcal{S}\), while the sum of the costs for part two will be minimized
for the [*arithmetic mean*](#wiki) of \(\mathcal{S}\).

Now, both the *median* and the *mean* may be non-integers. But if
we look at the sum of the costs when going from the minimum value
of \(\mathcal{S}\) to the maximum value of \(\mathcal{S}\), the
sum of the costs will strictly decrease from the minimum value
of \(\mathcal{S}\) to the *median*/*mean*, and then strictly
increase till we have reached the maximum value of \(\mathcal{S}\).

So, we will be calculating the costs for the *median*/*mean* rounded
up, and rounded down: the minimum of those will be the answer.

Which leads to:

~~~~
my $median = median @nums;
my $mean   =   mean @nums;

say "Solution 1: ", min cost1 (floor ($median), \@nums),
                        cost1 ( ceil ($median), \@nums);
say "Solution 2: ", min cost2 (floor ($mean),   \@nums),
                        cost2 ( ceil ($mean),   \@nums);
~~~~

We are importing `min` and `sum` from [`List::Util`](#),
`median` and `mean` from [`Statistics::Basic`](#), and
`floor` and `ceil` from
[`POSIX`](https://metacpan.org/dist/perl/view/ext/POSIX/lib/POSIX.pod).

FULL_PROGRAM;part_nr=2

# Advent Of Code 2023, Day 9: Mirage Maintenance

## [Challenge](https://adventofcode.com/2023/day/9)

Today, we need to predict numbers given a sequence.

Our input will be sets of numbers, like this:

~~~~
0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45
~~~~

We are going to make predictions for each line.

Consider the following sequence of numbers (third line of the example):

~~~~
10 13 16 21 30 45
~~~~

We can calculate a next sequence by looking at the differences of
subsequent numbers:

~~~~
10  13  16  21  30  45
   3   3   5   9  15
~~~~

Repeat this until we reach only `0`s:

~~~~
10  13  16  21  30  45
   3   3   5   9  15
     0   2   4   6
       2   2   2
         0   0
~~~~


#### Part 1

For part 1, we add a `0` at the end of the bottom row, and work
backwards to the top, to see which value should be added there
to get a `0` at the bottom:

~~~~
10  13  16  21  30  45  %F%68%%
   3   3   5   9  15  %F%23%%
     0   2   4   6   %F%8%%
       2   2   2   %F%2%%
         0   0   %F%0%%
~~~~

The score for this row will the value at the end of the top row,
hence `68`. The solution for part 1 will be the sum of the scores
of each line of the input. For the example input, this will be
<span class = 'answer'>114</span>.

#### Part 2

For part 2, we do the same, except we want to predict a *previous*
number. So, we prepend a `0` before the last line, and calculate the
numbers up to the top:

~~~~
%F%5%%  10  13  16  21  30  45
  %F%5%%   3   3   5   9  15
   %F%-2%%   0   2   4   6
      %F%2%%   2   2   2
        %F%0%%   0   0
~~~~

The score for this line will the value in the top left, `5`.
Just like in part 1, we need to sum the scores of each line.
For the example input, the answer will be <span class = 'answer'>2</span>.

## Solution

It turns out that this is a really simple challenge. We don't need to
calculate all the intermediate predicted values. The predicted
value at the end of the top row will be the sum of the values of
the calculated rows. The predicted value at the beginning of the
top row can be found by alternating adding and subtracting the
first values of the calculated row.

Take this example again:

~~~~
10  13  16  21  30  45
   3   3   5   9  15
     0   2   4   6
       2   2   2
         0   0
~~~~

The sum of the last values is `45 + 15 + 6 + 2 + 0 == 68`, which
is what we calculated above. Alternating adding and subtracting
the first values gives us: `10 - 3 + 0 - 2 + 0 == 5`, also
the number we calculated.

We can just loop over the input, and for each line, split on white
space, so we have the set of numbers, repeatedly subtract subsequent
numbers until we reach all `0`s, and then adding/subtracting the
first and last values of each row:

~~~~
while (<>) {
    my @numbers  = split;
    my $sign     = 1;
    $solution_1 += $numbers [-1];
    $solution_2 += $numbers  [0] * $sign;  
    while (grep {$_} @numbers) {
        @numbers     = map {$numbers [$_] - $numbers [$_ - 1]} 1 .. $#numbers;
        $solution_1 += $numbers [-1];
        $solution_2 += $numbers  [0] * ($sign *= -1);  
    }
}
~~~~

Note that we assume enough numbers are given so reach all `0`s before running
out of numbers.

All that is left to do is to print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

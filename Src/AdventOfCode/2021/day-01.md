# Advent Of Code 2021, Day 1: Sonar Sweep

## [Challenge](https://adventofcode.com/2021/day/1)

You are given a file with depth measurements; one measurement
per line.

For example, we may have this file of measurements:

~~~~
199
200
208
210
200
207
240
269
260
263
~~~~

#### Part 1

For part 1, we have to report how many measurements are
larger than the previous measurement.

So, for the example file, these are the measurements
`200`, `208`, `210`, `207`, `240`, `269`, and `263`, 
seven measurements in total. The first measurement
isn't larger because there is no previous measurement.


#### Part 2

For part 2, we have to look at *three-measurement sliding windows*.
Taken the example above, we get:

~~~~
199  A      
200  A B    
208  A B C  
210    B C D
200      C D E
207        D E F
240          E F G  
269            F G H
260              G H
263                H
~~~~

The first measurement is marked `A` and equals `199 + 200 + 208 == 607`.
The second measurement is marked `B`, and equals
`200 + 208 + 210 == 618`, so this is an increase.

We do not consider any windows of size less than 3.

For the example file, we have `B > A`, `E > D`, `F > E`, `G > F`, and
`H > G`, for a total of five increases.

## Solution

First order of business is to read in the data, into an array:

~~~~
my @depths = <>;
~~~~

To get the answer to part 1, we just have to compare each pair of
successive elements, grep the ones where the second is larger than
the first, and count how many we got.

[`grep`](#) in scalar context returns a count of matches, so we can
do part 1 in just one line:

~~~~
my $count1 = grep {$depths [$_] > $depths [$_ - 1]} 1 .. $#depths;
~~~~

Now, for part 2, the sum of the ith window is
`$w [i] = $depths [$i] + $depths [$i + 1] + $depths [$i + 2]`, while
the sum of the next window is
`$w [i + 1] = $depths [$i + 1] + $depths [$i + 2] + $depths [$i + 3]`.
Now, we want cases where `$w [i + 1] < $w [i]`. If we work out
the details, we're left with `$depths [$i + 3] < $depths [$i]`.

Which means we can solve part 2 in the same way as part 1:

~~~~
my $count2 = grep {$depths [$_] > $depths [$_ - 3]} 3 .. $#depths;
~~~~


FULL_PROGRAM

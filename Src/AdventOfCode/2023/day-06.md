# Advent Of Code 2023, Day 6:

## [Challenge](https://adventofcode.com/2023/day/6)

Today, we are asked in how many ways we can beat a record
in a boat race. 

The race is simple. It will last for a certain amount of time. 
Boats have a button. When the race starts, you press the button
for \(X\) milliseconds, then when you release the button, the boat
will move \(X\) millimeters per millisecond till the race ends.
The boat which goes furthest wins.

As input, we're given a number of races; for each race, we're
given the duration of the race, and the record achieved for
that race:

~~~~
Time:      7  15   30
Distance:  9  40  200
~~~~

This indicates three races. The first race lasts 9 milliseconds, and
the record distance was 9 millimeters.
The second race lasts 15 milliseconds, and has a record of distance
of 40 millimeters. The final race lasts 30 milliseconds, and has a
record distance of 200 millimeters.

How far the boat travels depends on how long we press the button. If
the race lasts \(T\) milliseconds, we have \(T + 1\) options to play
the game, pressing the button \(0, 1, \ldots, T - 1, T\) times.

Consider the first race; we have the following options to play the race:

* Press the button for 0 milliseconds. The boat will then move
  0 millimeters per milliseconds, for 7 milliseconds. Thus,
  it will not move at all, covering a distance of 0 millimeters.
* Press the button for 1 millisecond. The boat will then move
  1 millimeters per milliseconds, for 6 milliseconds. 
  It will cover a distance of 6 millimeters.
* Press the button for 2 millisecond. The boat will then move
  2 millimeters per milliseconds, for 5 milliseconds. 
  It will cover a distance of 10 millimeters.
* Press the button for 3 millisecond. The boat will then move
  3 millimeters per milliseconds, for 4 milliseconds. 
  It will cover a distance of 12 millimeters.
* Press the button for 4 millisecond. The boat will then move
  4 millimeters per milliseconds, for 3 milliseconds. 
  It will cover a distance of 12 millimeters.
* Press the button for 5 millisecond. The boat will then move
  5 millimeters per milliseconds, for 2 milliseconds. 
  It will cover a distance of 10 millimeters.
* Press the button for 6 millisecond. The boat will then move
  6 millimeters per milliseconds, for 1 milliseconds. 
  It will cover a distance of 6 millimeters.
* Press the button for 7 milliseconds. The boat will then move
  7 millimeters per milliseconds, for 0 milliseconds. Thus,
  it will not move at all, covering a distance of 0 millimeters.

For the third race, we have plotted the distance the boat travels
compared to how long the button was pressed. The record it drawn
in purple. Green points indicate boats moving past the record,
while red points indicate boats not breaking the record.

<div id = 'race-3-wrapper'>
<canvas id = 'race-3'></canvas>
</div>

#### Part 1

For part 1, for each race, we want to know the number of ways 
to beat the record distance. That is, how many ways there are to
press the button for \(X\) milliseconds and beat the record distance.

So, holding the button for 2, 3, 4, or 5 milliseconds will beat
the record for the first race. Thus, there are 4 ways in total to do so.

The final answer will be the product of all the ways each of the
races can be won. As there are 8 ways to win the second race,
and 9 ways to win the final race, the answer will be
`4 * 8 * 9 == ` <span class = "answer">288</span>.


#### Part 2

In part 2, we have to consider just one race. We have to ignore the
spaces between the race time and record distances. So, for the
example, he have a race time of 71530 milliseconds, with a record
distances of 940200 millimeters. Pushing the button for at least
14 milliseconds, and at most 71516 milliseconds beats the record.
Hence, the answer is <span class = 'answer'>71503</span>.


## Solution

Our first observation is that the distances covered by the boat
is symmetric. That is, if the race lasts for \(T\) milliseconds,
and we push the button for \(X\) milliseconds, with
\(0 \leq X \leq T\), we cover as much distance as if we would
have pressed the button for \(T - X\) milliseconds.
Hence, under the assumption we are able to break the record,
we only do not break the record if we push the button not long
enough, or too long. Furthermore, the times were we break the
record are all continuous. (That is, we will not have times
\(T_1 < T_2 < T_3\) were pressing the button for \(T_1\) or
\(T_3\) milliseconds breaks the record, but pressing it for
\(T_2\) milliseconds does not.)

So, what we will do is start counting from \(0\) upwards, until we
find the shortest time that will break the record. For each time
we do not break the record, we subtract \(2\) from the number
of possible wins -- a number we initialized as one more than the
number of milliseconds the game lasts for.

We start off with reading in the input, and doing some
initializations:

~~~~
my $solution_1 = 1;
my $solution_2 = 0;

my @times     = <> =~ /\d+/ga;
my @distances = <> =~ /\d+/ga;

push @times     => join "" => @times;
push @distances => join "" => @distances;
~~~~

This just reads in the times into the array `@times`, and the distances
in the array `@distances`. We then push the values for part 2 to those
arrays -- we get the values by just [`join`](#)ing the other values
together.

Next step is a small helper sub to determine the distance the
boat moves, given a length of time we press its button, and the
race length:

~~~~
sub distance ($pressed, $race_length) {
    ($race_length - $pressed) * $pressed;
}
~~~~

Now, we just loop over the different races, iterate upwards from
\(0\) until we break the record, and do some bookkeeping to get
the wanted answers:

~~~~
foreach my $race (keys @times) {
    my $time     = $times     [$race];
    my $distance = $distances [$race];
    my $wins     = $time + 1;
    foreach my $t (0 .. $time) {
        $distance < distance ($t, $time) ? last : ($wins -= 2);
    }
    $solution_1 *= $wins if $race != $#times;
    $solution_2  = $wins if $race == $#times;
}
~~~~

All that is left to do is to print out the solution:

~~~~
say "Solution 1: $solution_1";
say "Solution 2: $solution_2";
~~~~

FULL_PROGRAM

### Binary Search

Had the race times be (much) longer, we would have used binary
search to find the flip over point between not breaking the record
and breaking the record. But this approach only takes 2 seconds to
run -- not worth implementing the binary search.


# Advent Of Code 2021, Day 5: Hydrothermal Venture

## [Challenge](https://adventofcode.com/2021/day/5)


We are given a file with line segments, like the following
example file:

~~~~
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
~~~~

Each line of input is a line segment, and we're given its begin
and end coordinates. We'll call the first set of coordinates
\(x_1, y_1\) and the second set of coordinates \(x_2, y_2\).

It's given that each line segment is either horizontal (\(y_1 = y_2\)),
vertical (\(x_1 = x_2\)) or diagonal on a 45&deg; angle
(\(|x_1 - x_2| = |y_1 - y_2|\)).

We are interested in the number of points (with integer coordinates)
which are covered by at least two lines.

#### Part One

In Part One, we will only be considering horizontal and vertical lines.

Drawing the horizontal and vertical lines in a grid gives use the
following diagram:

~~~~
.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....
~~~~

Here `.` indicates a point which is not covered by any line segments,
and points with a number show the number of lines covering that segment.
We have five points which are covered by at least two line segments,
so in the example, <span class = "answer">5</span> is going to be the
desired answer.

#### Part Two

For Part Two, we will be considering all line segments. Which, for the
example input, would lead to the following diagram:

~~~~
1.1....11.
.111...2..
..2.1.111.
...1.2.2..
.112313211
...1.2....
..1...1...
.1.....1..
1.......1.
222111....
~~~~

We have twelve points which are covered by at least two line segments,
so the desired answer is <span class = "answer">12</span>.

## Solution

### Perl

This is going to be quite easy. We will be keeping two hashes (one for
part one, one for part two) which maps coordinates to number of line segments
covering the point with those coordinates:

~~~~
my %vents1;
my %vents2;
~~~~

Iterating over the input line by line, we first extract the coordinates.
We could first split on `->`, then on `,`, but we won't. We will extract
the numbers directly (we know all coordinates are non-negative integers):

~~~~
my ($x1, $y1, $x2, $y2) = /[0-9]+/g;
~~~~

Now, we want the *slope* of the line segment, that is, if we're going 
to walk from \((x_1, y_1)\) to \((x_2, y_2)\) which steps do we take
in the \(x\) and \(y\) direction to get to the next point.
Each of the steps is going to be \(-1\), \(0\) or \(1\):

* For a horizontal line, the \(y\) coordinate is fixed, so the step
  value in the \(y\) dimension is \(0\); while the step value in the
  \(x\) dimension is \(-1\) (if \(x_1 > x_2\)), or \(1\) (if \(x_1 < x_2\)).
* For a vertical line, the \(x\) coordinate is fixed, so the step
  value in the \(x\) dimension is \(0\); while the step value in the
  \(y\) dimension is \(-1\) (if \(y_1 > y_2\)), or \(1\) (if \(y_1 < y_2\)).
* For diagonal lines, neither step value is \(0\). The step value 
  in the \(x\) dimension is \(-1\) (if \(x_1 > x_2\)),
  or \(1\) (if \(x_1 < x_2\)), while the step value in the
  \(y\) dimension is \(-1\) (if \(y_1 > y_2\)), or \(1\) (if \(y_1 < y_2\)).


If we call the step values \(d_x\) and \(d_y\), we have

\[
    d_x = \begin{cases}
                           -1 & \text{if } x_2 < x_1 \\\\
                 \phantom{-}0 & \text{if } x_2 = x_1 \\\\
                 \phantom{-}1 & \text{if } x_2 > x_1
          \end{cases} \qquad \text{and} \qquad
    d_y = \begin{cases}
                           -1 & \text{if } y_2 < y_1 \\\\
                 \phantom{-}0 & \text{if } y_2 = y_1 \\\\
                 \phantom{-}1 & \text{if } y_2 > y_1
          \end{cases}
\]

Comparing two numbers and returning `-1`, `0`, `1` depending
on the order of its arguments is exactly what the
[`<=>`](op:#Equality-Operators) operator does, so we can
translate the equation above to code easily:

~~~~
my ($dx, $dy) = ($x2 <=> $x1, $y2 <=> $y1);
~~~~

Next, we want the *distance* between the end-points, that is,
the number of steps we need to reach the other end. For horizontal
and diagonal lines, the absolute difference of the \(x\) coordinates
gives us the difference. For vertical lines, the difference between
the \(x\) coordinates is \(0\); in that case, the absolute difference
of the \(y\) coordinates gives us the number of steps.

Code wise, that leads to:

~~~~
my $dist = abs ($x1 - $x2) || abs ($y1 - $y2);
~~~~

Now, all the points on a line segment are of the form 
\((x_1 + k \cdot d_x, y_1 + k \cdot d_y),\; 0 \leq k \leq \text{dist}\).

This means, we're ready to mark all the points of all line
segments. For part one, we only need horizontal and vertical lines;
for horizontal lines, we have \(d_y = 0\), and for vertical lines,
we have \(d_x = 0\). So, for part one, we only consider cases
where `$dx * $dy == 0`:

~~~~
unless ($dx * $dy) {
    $vents1 {$x1 + $_ * $dx, $y1 + $_ * $dy} ++ for 0 .. $dist;
}
$vents2 {$x1 + $_ * $dx, $y1 + $_ * $dy} ++ for 0 .. $dist;
~~~~

All what is left is find out how many points we have which are
marked more than once:

~~~~
say "Solution 1: ", scalar grep {$_ > 1} values %vents1;
say "Solution 2: ", scalar grep {$_ > 1} values %vents2;
~~~~

FULL_PROGRAM

# Advent Of Code 2021, Day 9: Smoke Basin

## [Challenge](https://adventofcode.com/2021/day/9)


We are given a heightmap as follows:

~~~~
2199943210
3987894921
9856789892
8767896789
9899965678
~~~~

Each number (all single digits) corresponds to a height: `0` is
the lowest, and `9` is the heightest.

#### Part One

Part One asks us the find the *low points*: points which are
lower than any of its orthogonally adjacent locations. The *risk
level* of a point is its heigth plus one. We need to report
the sum of the risk levels of the low points.

For the given example, the answer is <span class = "answer">15</span>.

#### Part Two

Part Two defines basins:

>>>>
A basin is all locations that eventually flow downward to a single
low point. Therefore, every low point has a basin, although some
basins are very small. Locations of height 9 do not count as being
in any basin, and all other locations will always be part of exactly
one basin.
<<<<

That's a bit of a tricky definition. But it does mean that the input
is such that every basin has exactly one low point, and every basin
is either bounded by the edge of the input, or by `9`s.

The *size* of a basin is the number of points in a basin. For Part Two,
we are asked to find the three largests basins, and report the product
of their sizes.

For the example input, we get <span class = "answer">1134</span>
as answer, as the three largest basins have sizes `9`, `9`, and `14`,
and `1134` is the product of those three numbers.

## Solution

### Perl

We first read in the map. For that, we use a 2-dimensional array. 
At the end of each row, we add a `9`, and we add an additional
row with all `9`s. The advantage of that is, we can look at all
the neighbours of a point by adding/substracting 1 from its indices
without worrying about boundaries -- indexing by `-1` gives the last
element of an array.

~~~~
my @floor = map {[(/[0-9]/g), 9]} <>;
push @floor => [(9) x @{$floor [0]}];

my $X =   @floor      - 1;
my $Y = @{$floor [0]} - 1;
~~~~

We now create a method `basin_size` which takes three arguments:
`$x`, `$y` (the coordinates of a low point), and `$floor`, the
height map. Not only will it count the size of the basin, it
also sets the height of any point of the basin to `9`. This
not only prevents us from counting a point in the basin more
than once, it also has a very tiny speed up later on.

We're using a basic [breadth-first search](#wiki).

~~~~
sub basin_size ($x, $y, $floor) {
    my $size = 0;
    my @todo = ([$x, $y]);
    while (my $point = shift @todo) {
        my ($px, $py) = @$point;
        next if $$floor [$px] [$py] == 9;
        $$floor [$px] [$py] = 9;
        $size ++;
        push @todo =>  [$px - 1, $py],     [$px + 1, $py],
                       [$px,     $py - 1], [$px,     $py + 1];
    }
    $size;
}
~~~~

We can now scan the map, and if we have a low point, calculate the
size of the basin. We keep the basin sizes in an array:


~~~~
my @basins;

foreach my $x (0 .. $X - 1) {
    foreach my $y (0 .. $Y - 1) {
        if ($floor [$x] [$y] < $floor [$x - 1] [$y]     &&
            $floor [$x] [$y] < $floor [$x + 1] [$y]     &&
            $floor [$x] [$y] < $floor [$x]     [$y - 1] &&
            $floor [$x] [$y] < $floor [$x]     [$y + 1]) {
            $sum += $floor [$x] [$y] + 1;
            push @basins => basin_size $x, $y, \@floor;
        }
    }
}
~~~~

Given the basin sizes, it's easy to calculate the product of the
three largests:

~~~~
@basins = sort {$a <=> $b} @basins;

say "Solution 1: ", $sum;
say "Solution 2: ", $basins [-1] * $basins [-2] * $basins [-3];
~~~~

FULL_PROGRAM

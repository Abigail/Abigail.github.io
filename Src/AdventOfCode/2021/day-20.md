# Advent Of Code 2021, Day 20: Trench Map

## [Challenge](https://adventofcode.com/2021/day/20)

Today, we're going to play a variant of Life, to be specific,
a [*non-isotropic Life like cellular automaton with a range 1
Moore neigbhourhood*][life1]. Non-isotropic means that rule set
of the automaton is neither totalistic, nor isotropic. Totalistic
means the rule on whether a cell is born or survives only depends
on the number of neighbours, and its current state. Isotropic 
automatons have rules which are invariant under rotations and
reflections.

A range-1 Moore neigbhourhood means we are considering the current
cell, and all its eight neighbours, so a 3 x 3 block of cells. Since
each cell can be on or off, there are \(2^9 = 512\) possibilities
to consider.

[life1]: https://www.conwaylife.com/wiki/Non-isotropic_Life-like_cellular_automaton#Range-1_Moore_neighbourhood
[moore]: https://www.conwaylife.com/wiki/Moore_neighbourhood
[rule-integer]: https://www.conwaylife.com/wiki/Rule_integer


We are given an input consisting of two parts. First, we have a
[rule-integer][rule-integer] encoded as a string of 512 `.`s and
`#`s:

~~~~
..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..##
#..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###
.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#.
.#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#.....
.#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#..
...####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.....
..##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#
~~~~

This will be all on one line -- we only added line breaks here for
display purposes.

Second, we have a starting generation (generation 0), like this:

~~~~
#..#.
#....
##..#
..#..
..###
~~~~

where `.` indicates an OFF cell, and `#` an ON cell.

To generate the next generation, we apply the rules to all cells in
parallel. Consider the middle cell (red) and its neighbourhood (blue):

<pre><code>#..#.
#<span class = 'neighbour'>...</span>.
#<span class = 'neighbour'>#</span><span class = 'important'>.</span><span class = 'neighbour'>.</span>#
.<span class = 'neighbour'>.#.</span>.
..###
</code></pre>

Placing the 9 cells after each other, we get `...#...#.`. Replacing each
`.` with `0`, and each `#` with `1`, we get `000100010`. Interpreting
that as a binary number, we get `34`. Now, if we look at character `34`
in the rule integer above, it's a `#`. This means that the cell in the
middle will be an ON cell in the next generation.

If we apply the rule to each cell in the zeroth generation, we will
end up with this as the first generation:

~~~~
.##.##.
#..#.#.
##.#..#
####..#
.#..##.
..##..#
...#.#.
~~~~

Applying the rules on each cell again, we end up with the second generation:

~~~~
.......#.
.#..#.#..
#.#...###
#...##.#.
#.....#.#
.#.#####.
..#.#####
...##.##.
....###..
~~~~


#### Part One

For Part One, we have to calculate the number of ON cells two generations
after the starting generation. For the given example, this is
<span class = 'answer'>35</span> ON cells.

#### Part Two

For Part Two, we want the number of ON cells fifty generations after the
start generation. For the given example, this is
<span class = 'answer'>3351</span>.


## Discussion

We should realize that for Life-like automaton, the field is infinite.
The examples above only show the smallest bounding box which shows all
the ON cells, but in all directions, there are an infinite amount of
OFF cells.

And that really matters for the real input. There, the first character
of the rule integer is `#`, and the last character is `.`. This means
that an OFF cell which is surrounded by only OFF cells, will be ON in the
next generation. And an ON cell which is surrounded by only ON cells
will of OFF in the next generation. In other words, a starting universe
with no ON cells, will have the entire universe filled with ON cells in
the next generation, and will be completely dark in the following generation,
altenating between all ON and all OFF ever after.

### Perl

We will keep the *rule integer* as a reference to an array with
512 elements, each either `0` (an OFF cell) or `1` (an ON cell).
We can read the first line of input, and build this array in one
statement:

~~~~
my $rule_integer = [map {/#/ ? 1 : 0} split // => scalar <>];<>;
~~~~

The second `<>` read and discards an empty line.

We keep the *interesting* cells in a hashref `$universe`. We index in
the hash using the x and y coordinates of a cell. (We assign `(0, 0)`
as the coordinates of the top-left cell in the input -- during the
creation of the various generations, we'll end up with negative 
coordinates.) We'll have *three* different states:

* If the value of a cell is `1`, the cell is an ON cell.
* If the value of a cell is `0`, the cell is an OFF cell.
* If the value of a cell is undefined (which happens if it's not
  present), this cell is considered to be "too far out". The cell
  will be OFF on even generations, and ON on odd generations.

We intialize this as:

~~~~
my $universe;
my $x = 0;
while (<>) {
    my $y = 0;
    foreach my $cell (/[.#]/g) {
        $$universe {$x, $y} = 1 if $cell eq '#';
        $y ++;
    }
    $x ++;
}
~~~~

We then create a subroutine `next_gen` to calculate the next generation.
It gets three arguments:

* `$universe`: a hashref with the state of the universe, as described above.
* `$rule_integer`: a hashref with 512 `0`s and `1`s, as described above.
* `$generation`: the *current* generation.

For each ON cell in the universe, we calculate waht the state of each cell
in a 5 x 5 square around the ON cell will be in the next generation.
To calculate the next state of a particular cell, we look at all the
cells in a 3 x 3 square, mapping their ON and OFF values to a binary
number, and looking that to lookup the next state in `$rule_integer`.
If we want to know the ON/OFF state of a cell which isn't in the
`$universe` structure, we calculate it from `$generation` and the first
element of `$rule_integer`: if the first element is `0`, such a cell
is always OFF; else it's OFF in even generations, and ON in odd generations).

~~~~
sub next_gen ($universe, $rule_integer, $generation) {
    my $new_universe;
    my $seen;

    foreach my $cell (keys %$universe) {
        next unless $$universe {$cell};
        my ($X, $Y) = split $; => $cell;

        #
        # Calculate each cell in a 5 x 5 neighbourhood
        #
        foreach my $dX (-2 .. 2) {
            my $x = $X + $dX;
            foreach my $dY (-2 .. 2) {
                my $y = $Y + $dY;
                next if $$seen {$x, $y} ++;

                #
                # For each cell to inspect, we need the
                # cells in a 3 x 3 neighbourhood
                #
                my $bits = "0b";
                foreach my $dx (-1 .. 1) {
                    my $xp = $x + $dx;
                    foreach my $dy (-1 .. 1) {
                        my $yp = $y + $dy;
                        $bits .= $$universe {$xp, $yp} //
                                    ($$rule_integer [0] * ($generation % 2));
                    }
                }
                $$new_universe {$x, $y} = $$rule_integer [oct $bits];
            }
        }
    }
    $new_universe;
}
~~~~

Now we just call `next_gen` the right amount of times, and count
the number of ON cells:

~~~~
$universe = next_gen $universe, $rule_integer, $_ for 0 ..  1;
say "Solution 1: ", scalar grep {$_} values %$universe;
     
$universe = next_gen $universe, $rule_integer, $_ for 2 .. 49;
say "Solution 2: ", scalar grep {$_} values %$universe;
~~~~

FULL_PROGRAM

# Advent Of Code 2021, Day 15: Chiton

## [Challenge](https://adventofcode.com/2021/day/15)

We are given a risk map like this example:

~~~~
1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581
~~~~

Each position has a risk level. Restriction is limited to moving
horizontally or vertically.

#### Part One

For Part One, we are asked to find a path from the top left corner
to the bottom right corner which minimizes the sum of the risks values
of each point on the path. (We don't count the risk level of the
start point).

For the example, we have the following path which minimizes the
risk:

<pre><code><span class = "important">1</span>163751742
<span class = "important">1</span>381373672
<span class = "important">2</span><span class = "important">1</span><span class = "important">3</span><span class = "important">6</span><span class = "important">5</span><span class = "important">1</span><span class = "important">1</span>328
369493<span class = "important">1</span><span class = "important">5</span>69
7463417<span class = "important">1</span>11
1319128<span class = "important">1</span><span class = "important">3</span>7
13599124<span class = "important">2</span>1
31254216<span class = "important">3</span>9
12931385<span class = "important">2</span><span class = "important">1</span>
231194458<span class = "important">1</span>
</code></pre>

The total risk of this path is <span class = "answer">40</span>.

#### Part Two

In Part Two, we still need a map from top left to bottom right
which minimizes the risk, but the map is much larger: the original
map is tiled five times in each direction. (So, the resulting
map is 25 times as large as the original map). The risk values on
each of the tiles are the same as the original map, but we add
the [Manhattan distance](#wiki) of the tile to the original map.
And values exceeding 9 wrap around (skipping 0).

With the example input, total risk of path which minimizes the
risk is <span class = "answer">315</span>.

## Solution

We will be using a variation on [Dijkstra's algorithm](#wiki);
this will be equivalent of using a [Breadth-first search](#wiki).

### Perl

#### Heap

Before we dive into the main solve, we will first look at
implementing a [heap](#heap), as we will be using one.

Heaps are used to quickly insert values, and find/extract a minimum
value. The heap we will be using is a binary tree structure, with
the feature that the value in each node is less than the value of
each of its children. We call this feature the *heap condition*.
Our particular implementation will use an array to implement
a heap. The root of a heap will be at index \(0\). And for a node
on index \(i\), its children will be on indices \(2 \cdot i + 1\),
and \(2 \cdot i + 2\); if an index of a child exceeds the size
of the array, the node doesn't have that child.

We'll be using a single heap in our program, so we just have a
global variable for the heap. The elements in the heap will be
3-element array (see below) -- for the heap, we are only interested
in the value on index `2`. 

Initialization is as follows:

~~~~
my @heap;
sub init_heap () {
    @heap = ([0, 0, 0])
}
~~~~

That is, we initialize a heap with just one element: `[0, 0, 0]`.

Before we discussing adding or removing elements from the heap,
we need two rebalance functions. Adding or removing an element
leaves a datastructure which is almost a heap: it will have at
most one node which violates the *heap condition*.

The first rebalance function is one which we will call if a node
at the top of the heap violates the *heap condition*. In such a
case, we first find the smaller of its children, then compare the
child with the parent. If the parent is less than the child, the
heap condition is restored, and we're done. Else, we swap the 
values in the parent and the smaller of children. This restores
the heap condition in the parent, but now the heap condition in
the child may be violated; hence, we recurse:

~~~~
sub rebalance_d ($root = 0) {
    return unless 2 * $root + 1 < @heap;
    # 
    # Find smaller of the children.
    #
    my $smaller = 2 * $root + 1;
    if (2 * $root + 2 < @heap && $heap [2 * $root + 2] [2] <
                                 $heap [2 * $root + 1] [2]) {
        $smaller ++;
    }
    # 
    # If childer are larger, we're done.
    #
    return if $heap [$root] [2] < $heap [$smaller] [2];

    # 
    # Swap and recurse
    #
    @heap [$root, $smaller] = @heap [$smaller, $root];

    rebalance_d ($smaller);
}
~~~~

The other rebalance function we use if the heap condition is violated
near the bottom of the heap. We then compare the node with its parent.
If the value in the parent is less than the node, the heap condition
is restored (and we are done). Else, we swap the node with its parent,
and recurse with the parent:

~~~~
sub rebalance_u ($index = @heap - 1) {
    # 
    # If at root, we're rebalanced.
    #
    return unless $index;

    # 
    # If the element is larger than its parent, we're done.
    #
    my $parent = int (($index - 1) / 2);
    return unless $heap [$index] [2] < $heap [$parent] [2];

    # 
    # Else, swap and recurse.
    #
    @heap [$index, $parent] = @heap [$parent, $index];
    rebalance_u ($parent);
}
~~~~

We are now ready to add an element to the heap. We do so by just
pushing an element to the array. This may make the last element
of the heap violate the heap condition, so we call `rebalance_u`
to restore the heap condition:

~~~~
sub add_to_heap ($element) {
    push @heap => $element;  
    rebalance_u;
}
~~~~

Extracting the minimum value we do by removing the last element
of the heap (so, popping an element of the array), and putting
this element in the top of the heap. Since this may violate
the heap condition, we have to rebalance from the top. We will
also return the element which was at the top of the heap:

~~~~
sub extract () {
    my $min = $heap [0];
    $heap [0] = pop @heap;
    rebalance_d;
    $min;
}
~~~~

#### Main Solve

First, we are going to read in the data. We'll store the map (which in
the long description of the challenge is a cave, hence the variable
name) in a 2-dimensional array, `@cave`:

~~~~
my @cave   =  map {[/[0-9]/g]} <>;

my $SIZE_X =   @cave;
my $SIZE_Y = @{$cave [0]};
~~~~

To access the entries in the map, we could just do a direct lookup,
and, for part two, use a much larger 2-dimensional array, but instead,
we use a subroutine `cell` to return the risk value of a particular set of x/y
coordinates. It gets a third argument (`$factor`) indicating how many
times the base map has been tiled (so, for part one, this argument will
be `1`, and for part two, this will be `5`). We also have a hash `%seen`
which will contain the coordinates of the map we have already processed.
If `cell` is called with coordinates outside of the map, or coordinates
of a point we have already processed, `undef` is returned, otherwise, the
risk value.

~~~~
sub cell ($x, $y, $factor = 1) {
    return if $x < 0 || $x >= $factor * $SIZE_X ||
              $y < 0 || $y >= $factor * $SIZE_Y ||
              $seen {$x, $y};

    my $val = $cave [$x % $SIZE_X] [$y % $SIZE_Y] + int ($x / $SIZE_X) +
                                                    int ($y / $SIZE_Y);
    $val -= 9 if $val > 9;

    $val;
}
~~~~


Now, we are ready to solve the map, using a subroutine `solve`. It gets
an argument `$factor` with the same meaning as `cell` above.

We start off by clearing out `%seen`: we haven't visited any cells yet.
We also initialize the heap. In the heap, we store 3-element arrays,
the first two elements of this array are the x and y coordinates of
a cell; the third is the total risk accumulated to get to this cell.
(Each cell could appear at most four times in the heap: once for each
direction).

~~~~
sub solve ($factor = 1) {
    %seen = ();
    init_heap; # It's initialized with [0, 0, 0] (top-left, no-risk)
~~~~

We now loop as long as there are entries in the heap. We start off by
extracting the value with the lowest value from the heap, putting the
coordinates of the cell in `$x` and `$y`, and the accumulated risk
in `$risk`:

~~~~
    while (@heap) {
        my ($x, $y, $risk) = @{extract ()};
~~~~

First thing we now do is check if we have reached the bottom-right.
If so, we're done, and `$risk` contains the minimum accumulated risk
to reach this point. Which is why we return at this point:

~~~~
        if ($x == $SIZE_X * $factor - 1 && $y == $SIZE_Y * $factor - 1) {
            return $risk;
        }
~~~~

We now check whether we have visited this cell before. If so, we did
this with risk equal or less than `$risk`, so whatever we do now, it
cannot lead to a better path than we already have. Hence, we continue
with the next iteration of the loop. We also mark that we have visited
this cell:

~~~~
next if $seen {$x, $y} ++;
~~~~

We will now inspect all neigbhours of the current cell. If they are
unvisited, and within bounds, we add the new cell (with the total risk
to get there) to the heap:

~~~~
        for my $diff ([1, 0], [-1, 0], [0, 1], [0, -1]) {
            my $new_x = $x + $$diff [0];
            my $new_y = $y + $$diff [1];
           (my $cell  = cell ($new_x, $new_y, $factor)) // next;
            add_to_heap [$new_x, $new_y, $risk + $cell];
        }
~~~~

And that is the end of the loop, and the end of the subroutine.

All what is left now is call the solve method, and
print the result:

~~~~
say "Solution 1: ", solve 1;
say "Solution 2: ", solve 5;
~~~~

FULL_PROGRAM

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

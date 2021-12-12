# Advent Of Code 2021, Day 12: Passage Pathing

## [Challenge](https://adventofcode.com/2021/day/12)

Today, we are going to have to navigate a cave system. We have a
cave system of connected caves. There are two types of caves:
small caves and large caves. We also have a start and end cave.

Our input consists of a set of connection, each line represents a
connection between two caves. Large caves have their name in all
capitals, while small caves have their name in lower case. The
start and end cave are marked with obvious names:

~~~~
start-A
start-b
A-c
A-b
b-d
A-end
b-end
~~~~

This corresponds roughly to the following cave system:

~~~~
                            +---+
                            | c |
                            +-+-+
                              |
                           +--+--+
                           |     |
                       +---+  A  +---+
           +-------+   |   |     |   |   +-------+
           |       +---+   +--+--+   +---+       |
           | start |          |          |  end  |
           |       +---+      |      +---+       |
           +-------+   |    +-+-+    |   +-------+
                       +----+ b +----+
                            +-+-+
                              |
                            +-+-+
                            | d |
                            +---+
~~~~

Now, we are not interested in finding a path, we want to know
*all* paths from the start cave to the end cave, under certain
conditions.

#### Part One

For Part One, we want the number of paths from the start cave to the
end cave, where we do not visit a small cave more than once. For the
example input above, we have <span class = "answer">10</span> qualifying
paths:

~~~~
start,A,b,A,c,A,end
start,A,b,A,end
start,A,b,end
start,A,c,A,b,A,end
start,A,c,A,b,end
start,A,c,A,end
start,A,end
start,b,A,c,A,end
start,b,A,end
start,b,end
~~~~

#### Part Two

In Part Two, we still want to know the number of qualifying paths, but
now we are allowed to visit one (but not more than one) small cave twice.
We cannot revisit the start cave, nor leave the end cave. Under this
condition, we have <span class = "answer">36</span> qualifying paths:

~~~~
start,A,b,A,b,A,c,A,end
start,A,b,A,b,A,end
start,A,b,A,b,end
start,A,b,A,c,A,b,A,end
start,A,b,A,c,A,b,end
start,A,b,A,c,A,c,A,end
start,A,b,A,c,A,end
start,A,b,A,end
start,A,b,d,b,A,c,A,end
start,A,b,d,b,A,end
start,A,b,d,b,end
start,A,b,end
start,A,c,A,b,A,b,A,end
start,A,c,A,b,A,b,end
start,A,c,A,b,A,c,A,end
start,A,c,A,b,A,end
start,A,c,A,b,d,b,A,end
start,A,c,A,b,d,b,end
start,A,c,A,b,end
start,A,c,A,c,A,b,A,end
start,A,c,A,c,A,b,end
start,A,c,A,c,A,end
start,A,c,A,end
start,A,end
start,b,A,b,A,c,A,end
start,b,A,b,A,end
start,b,A,b,end
start,b,A,c,A,b,A,end
start,b,A,c,A,b,end
start,b,A,c,A,c,A,end
start,b,A,c,A,end
start,b,A,end
start,b,d,b,A,c,A,end
start,b,d,b,A,end
start,b,d,b,end
start,b,end
~~~~

## Solution

We will solve this using a [depth-first search](#wiki). (We could have
used a [breadth-first search](#wiki) as easily -- in our solution, the
difference is a `shift` vs a `pop`). We could have used recursion, but
we prefer a [stack](#wiki:Stack_(abstract_data_type))
(or [queue](#wiki:FIFO_(computing_and_electronics)) if we had opted for
a depth-first search).

### Perl

First we need to read in the data. We use a data structure `%caves` to
map the cave system. `%caves` is a multi-level hash. If two caves
`A` and `B` are connected, we have `$caves {A} {B} = 1` and
`$caves {B} {A} = 1`, with the exception of the caves `start` and `end`.
We won't have entries where `start` is the second key, nor will we
have entries where `end` is the first key.

~~~~
my $START = "start";
my $END   = "end";

my %caves;
while (<>) {
    my ($from, $to) = /[A-Z]+/gi;
    $caves {$from} {$to} = 1 unless $from eq $END   || $to eq $START;
    $caves {$to} {$from} = 1 unless $from eq $START || $to eq $END;
}
~~~~

During our search, we need a list of *states* we still need to process.
A state corresponds to a partial path starting from the start cave.
The path may reach a dead-end, reach the end, or branch into multiple
paths.

Each partial path consists of three items:

* The *next* cave we're about to process.
* A set indicating which caves we have visited on this path (we do not
  have to care about the order).
* A boolean indicating whether we have visited a small cave twice
  already.

We'll have a stack `@todo` with states we still need to process. We
start with a single state:

~~~~
my @todo = ([$START, {}, 0]);
~~~~

This means, we have an empty path so far, and the next cave we are
considering to enter is the start cave.

We will now loop until the stack is empty. To count paths, we
need two counters, one for each challenge part.

~~~~
my $paths1 = 0;
my $paths2 = 0;
while (@todo) {
    my ($next, $seen, $twice) = @{pop @todo};
~~~~

If the next cave is the end cave, we're done with this path,
and we count the path. If we have visited a small cave more
than once, we only count it for part two; else, it counts 
for both part one and part two.

~~~~
if ($next eq $END) {
    $paths1 ++ if !$twice;
    $paths2 ++;
    next;
}
~~~~

Next, we have to determine whether we can continue with this path.
We cannot if the next cave is small, we have been in this cave, and
we have been to a small twice:

~~~~
next if $next eq lc $next && $$seen {$next} && $twice ++;
~~~~

We can now continue with this path, and consider all the neighbours of
the next cave as possible continuations. We'll have to include the
cave we're now entering in the set of visited caves:

~~~~
push @todo => map {[$_, {%$seen, $next => 1}, $twice]} keys %{$caves {$next}};
~~~~

Once if we have exhausted all possible paths, we can print the results:

~~~~
say "Solution 1: ", $paths1;
say "Solution 2: ", $paths2;
~~~~

FULL_PROGRAM

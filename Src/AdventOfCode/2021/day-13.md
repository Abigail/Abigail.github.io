# Advent Of Code 2021, Day 13: Transparent Origami

## [Challenge](https://adventofcode.com/2021/day/12)

Today, we are going to fold transparent paper. We're given a large
sheet of paper, marked with dots on non-negative integer coordinates.
We're also give a set of folding instructions. Here's an example input:

~~~~
6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5
~~~~

The first part consists of coordinates of dots (top-left is `(0, 0)`).
The example input gives rise to the following sheet:

~~~~
   #  #  # 
    #      
           
#          
   #    # #
           
           
           
           
           
 #    # ## 
    #      
      #   #
#          
# #        
~~~~

Now, we are going to fold. Each fold will be either a horizontal
fold (folding along a line with a particular `y` coordinate), or
a vertical fold (folding along a line with a particular `x` 
coordinate).

Horizontal folds will fold the part below the fold line up, while
vertical folds will fold the part right of the fole line left.
We're given that the fold line will never contain a dot.

The first fold is a horizontal one, along the line `y = 7`:

<pre><code>#  #  #
    #

#  
   #    # #


<span class = 'fold'>-----------</span>


 #    # ##
    # 
      #   #
#
# #
</code></pre>

Folding this upwards, we get (we have marked the dots folded upwards):

<pre><code><span class = 'fold'>#</span> <span class = 'fold'>#</span>#  #
<span class = 'fold'>#</span>   #
      <span class = 'fold'>#</span>   <span class = 'fold'>#</span>
#   <span class = 'fold'>#</span>
 <span class = 'fold'>#</span> #  <span class = 'fold'>#</span> <span class = 'fold'>#</span><span class = 'fold'>#</span>#


</code></pre>

Note that its is very well possible that after a fold, some dots 
cover each other.

The next fold is vertical:

<pre><code># ## <span class = 'fold'>|</span>#  # 
#   #<span class = 'fold'>|</span>     
     <span class = 'fold'>|</span>#   #
#   #<span class = 'fold'>|</span>     
 # # <span class = 'fold'>|</span># ###
     <span class = 'fold'>|</span>     
     <span class = 'fold'>|</span>     
</code></pre>

After folding, we are left with:

<pre><code>#<span class = 'fold'>#</span>#<span class = 'fold'>##</span>
#   #
<span class = 'fold'>#</span>   <span class = 'fold'>#</span>
#   #
<span class = 'fold'>#</span>#<span class = 'fold'>###</span>


</code></pre>


#### Part One

For Part One, we do just the first fold, and report the number
of remaining dots (a dot covering another just counts as a single dot).
For the example input, this would be <span class = "answer">17</span>.

#### Part Two

For Part Two, we have to do all the folds. What remains spells out
eight capital letters, which we must report.


## Solution

### Perl

The key part of our solution is the datastructure we will use to
store the dots. A 2-dimensional array is an obvious datastructure,
but that makes run-time of the algorithm linear in the area of
the sheet. The area of the given input exceeds a million.

Instead, we will be using a hash, storing just the dots. And we
will be using a [hash subscripted with a
list](https://perldoc.perl.org/perldata#Multi-dimensional-array-emulation).
In particular, we will be using a 2-element list: the x and y coordinates
of the data we are storing.

If we have have something like `$hash {$x, $y}`, this is equivalent
to `$hash {join $;, $x, $y}`. [`$;`](https://perldoc.perl.org/perlvar#$SUBSEP)
is by default the
[*File separator*](https://www.lammertbies.nl/comm/info/ascii-characters#fs)
character, (ASCII code `28`), which nowadays is highly unlikely to be
used in anything but strings representing binary data. The advantage
of using multi-keys instead of a multi-level hash is that with the
latter we can iterate over all the dots in a simple loop, instead of
having nested loops.

We will first read in the data. Up to the blank line, it will be coordinates
of dots which we will store in `%paper`. The second part are the folds,
which will store in an array `@folds`. Each fold will be a two element
array, the first element indicating the direction of the fold
(`x` for a vertical fold; `y` for a horizontal fold). The second element
will be fixed coordinate of the fold line.

~~~~
my %dots;
while (<>) {
    last unless /\S/;
    /([0-9]+),([0-9]+)/ and $dots {$1, $2} = 1;
}

my @folds = map {[/ ([xy])=([0-9]+)/]} <>;
~~~~

We can now do the folds. We'll keep track of the maximum x and y coordinates
of the folded paper: these will be the last fold lines in each direction.
We also want to count the number of dots after the first fold.

~~~~
my $count1 = 0;
my ($max_x, $max_y);
foreach my $fold (@folds) {
    my ($dir, $coordinate) = @$fold;
    $max_x = $coordinate if $dir eq 'x';
    $max_y = $coordinate if $dir eq 'y';
~~~~

When doing a fold, we iterate over all the dot. If the dot is
above a horizontal fold, or left of a vertical fold, the dot won't
move, and we leave it as is:

~~~~
    foreach my $dot (keys %dots) {
        my ($x, $y) = split $; => $dots;
        next if $dir eq 'x' && $x <= $coordinate ||
                $dir eq 'y' && $y <= $coordinate;
~~~~

Note that we split the key we got from `%paper` on `$;` to get back 
the x and y coordinates of the dot we are looking at.

We now calculate the coordinates of where the dot gets folded to.
One coordinate will be unchanged:

~~~~
        my $new_x = $dir eq 'x' ? 2 * $coordinate - $x : $x;
        my $new_y = $dir eq 'y' ? 2 * $coordinate - $y : $y;
~~~~

We'll at the folded dot to the set of dots, and remove the unfolded dot.
This concludes the inner loop:

~~~~
        $dots {$new_x, $new_y} = 1; 
        delete $dots {$dot};   
    }
~~~~

We now count the number of dots after the first fold. `$count1` will be
`0` at the first fold, but once we have assigned something, no further
assignments happen. That also finishes the main loop:

~~~~
    $count1 ||= keys %dots; 
}
~~~~

We can now print the the solutions. For Part Two, we iteratate over
the coordinates of the complete folded paper, printing a `#` if
there is a dot on that set of coordinates, else we print a space:

~~~~
say "Solution 1: ", $count1;
print "Solution 2: ";

foreach my $y (0 .. $max_y - 1) {
    print "            " if $y;
    foreach my $x (0 .. $max_x - 1) {
        print $dots {$x, $y} ? "#" : " "; 
    }
    print "\n";
}
~~~~

The result will be something like:

~~~~
Solution 1: 592
Solution 2:   ##  ##   ##    ## #### #### #  # #  # 
               # #  # #  #    # #    #    # #  #  # 
               # #    #  #    # ###  ###  ##   #  # 
               # # ## ####    # #    #    # #  #  # 
            #  # #  # #  # #  # #    #    # #  #  # 
             ##   ### #  #  ##  #### #    #  #  ##  
~~~~

FULL_PROGRAM

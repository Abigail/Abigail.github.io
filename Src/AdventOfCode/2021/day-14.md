# Advent Of Code 2021, Day 14: Extended Polymerization

## [Challenge](https://adventofcode.com/2021/day/14)

In todays challenge, we are going to create a polymer. Polymers
consists of strings of elements, each element a capital letter.
We will be
given a *template* and a list of *pair insertion* rules. For
instance:

~~~~
NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
~~~~

Each rule of the form `AB -> C` means that if the polymer contains
a pair `AB`, a `C` gets inserted in the next generation.

For the given template, `NNCB`, we can calculate the polymer after
the first generation as follows:

* The pair `NN` matches the rule `NN -> C`, so a `C` gets inserted
  after the first `N`.
* The pair `NC` matches the rule `NC -> B`, so a `B` gets inserted
  after the second `N`.
* The pair `CB` matches the rule `CB -> H`, so an `H` gets inserted
  after the `C`.

All rules get applied simultaneously, so inserted elements don't
play a role until the next generation.

Starting the template `NNCB`, we get the following polymers in the first
couple of generations. Inserted elements in the given generation are
marked in red.

* After the first generation: <code>N<span class = "important">C</span>N<span class = "important">B</span>C<span class = "important">H</span>B</code>.
* After the second generation: <code>N<span class = "important">B</span>C<span class = "important">C</span>N<span class = "important">B</span>B<span class = "important">B</span>C<span class = "important">B</span>H<span class = "important">C</span>B</code>.
* After the third generation: <code>N<span class = "important">B</span>B<span class = "important">B</span>C<span class = "important">N</span>C<span class = "important">C</span>N<span class = "important">B</span>B<span class = "important">N</span>B<span class = "important">N</span>B<span class = "important">B</span>C<span class = "important">H</span>B<span class = "important">H</span>H<span class = "important">B</span>C<span class = "important">H</span>B</code>.
* After the fourth generation: <code>N<span class = "important">B</span>B<span class = "important">N</span>B<span class = "important">N</span>B<span class = "important">B</span>C<span class = "important">C</span>N<span class = "important">B</span>C<span class = "important">N</span>C<span class = "important">C</span>N<span class = "important">B</span>B<span class = "important">N</span>B<span class = "important">B</span>N<span class = "important">B</span>B<span class = "important">B</span>N<span class = "important">B</span>B<span class = "important">N</span>B<span class = "important">B</span>C<span class = "important">B</span>H<span class = "important">C</span>B<span class = "important">H</span>H<span class = "important">N</span>H<span class = "important">C</span>B<span class = "important">B</span>C<span class = "important">B</span>H<span class = "important">C</span>B</code>.

The polymer keeps rapidly growing in each generation. After 10 steps,
the polymer contains 3073 elements.

#### Part One

In generation 10, we look at the most frequently occuring element
in the polymer, and the least frequently occuring element. We
need to report the difference of their occurrences.

For the given example, after 10 generations, `B` occurs `1749` times,
`C` occurs `298` times, `H` occurs `161` times, and `N` occurs `865`
times. So, the difference between the most frequently occurring element 
and least frequently occurring element is
<code>1749 - 161 = <span class = 'answer'>1588</span></code>.

#### Part Two

We still want the difference of occurrences of the most frequently
occurring element, and the least frequently occuring element, but
now in generation 40. For the given example, the most frequently
occurring element is `B`, occurring `2192039569602` times, while `H`
appears the least frequently, `3849876073` occurrences. So, the result of
the given example input is <code>2192039569602 - 3849876073 =
<span class = "answer">2188189693529</span></code>.


## Solution

!observation
The input has 10 different elements, and 100 rules, so there is
a production rule for every pair of elements.
!/observation

!observation
The length of the polymer grows rapidly. If the template has length
\(l\), then the length of the polymer in generation \(G\) is
\(1 + (l - 1) \cdot 2^G\). Given the input length of \(20\), in generation
10, the polymer has length \(19457\), while in generation 40,
this has grown to a length of \(20890720927745\).
!/observation

!observation
In each generation, the first element and last element are the
same as the first and last element of the previous generation.
And hence, as the first and last element of the template.
!/observation

!observation
The production of a new element is only determined by the elements
surrouding it: the production rules are very localized.
!/observation

### Perl

The second observation should make it clear that generating the
entire polymer is out of the question (that will be workable for
Part One, but not Part Two). But since the production of one pair
is never influenced by the production of a different pair, whether
in the next generation, or any subsequent generation (observation 4),
instead of the tracking the entire polymer, we can just track how
often each pair of elements there are.

To start off, we read the template, and turn this into hash, mapping
pairs to their counts:

~~~~
chomp (my $template = <>);
my $pairs;
  $$pairs {"$1$2"} ++ while $template =~ /(.)(?=(.))/g;
~~~~

The pattern `/(.)(?=(.))/g` matches each element of the template (`(.)`),
which is followed by another element (`(?=(.))`). The matching element
is placed in `$1`, the following element is `$2`, meaning that 
`"$1$2"` is a pair of elements. Since the following element is matched
with a look-a-head (`(?=)`), the following element is not consumed in
the match, and we iterate over all overlapping pairs.

We now read in all the rules. We map each pair (left hand side of
the rule) to the *two* new pairs it generates. That is, if we
have a rule `AB -> C`, the new pairs which are generated by this
rule are `AC` and `CB`.

~~~~
my $rules;
while (<>) {
    /^([A-Z])([A-Z]) \s* -> \s* ([A-Z])/x or next;
    $$rules {"$1$2"} = ["$1$3", "$3$2"];
}
~~~~

We will wrap the calculation of a next generation into a subroutine.
The subroutine takes two arguments, the set of rules, and the set
of pairs and their counts:

~~~~
sub next_gen ($rules, $pairs) {
    my %new;
    while (my ($pair, $count) = each %$pairs) {
        $new {$_} += $count foreach @{$$rules {$pair}};
    }
    \%new;
}
~~~~

We will simply iterate over each pair, get the new pairs it creates
and add them as often as the original pair occurs to the new set
of pairs. When we've done all pairs, we return the result.

To get the differences of the most frequent and least frequent
occurrences, we have another subroutine:

~~~~
use List::Util qw [min max];
sub minmax ($pairs, $template) {
    my %count;
    $count {substr $_, 0, 1} += $$pairs {$_} for keys %$pairs;
    $count {substr $template, -1} ++;
    my $min = min values %count;
    my $max = max values %count;
    $max - $min;
}
~~~~

The subroutine gets the set of pairs and their counts, and the original
template. Since every element of a polymer, except the last, occurs
exactly once as the first element of a pair, we take the counts of
first elements of all the pairs. Then we add the last element of the
template, which is the same as the last element of the polymer 
(observation 3).

Once we have counted how frequent each element occurs, we take the
minimum and maximum of those values, and return the difference.

Now it's just a matter of calculating the right number of generations,
and report the right numbers:

~~~~
$pairs = next_gen $rules, $pairs for  1 .. 10;
say "Solution 1: ", minmax $pairs, $template;

$pairs = next_gen $rules, $pairs for 11 .. 40;
say "Solution 2: ", minmax $pairs, $template;
~~~~

FULL_PROGRAM

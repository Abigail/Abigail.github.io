# Advent Of Code 2022, Day 3: Rucksack Reorganization

## [Challenge](https://adventofcode.com/2022/day/3)

In todays puzzle, we need to organize rucksacks. Each Elf has a 
rucksack, with two compartments. Our input file contains the 
content of all the rucksacks, where each line contains the content
of a single rucksack. The content is represented by upper and lower
case (ASCII) letters. The first half of the characters represent
the content of the first compartment, while the second half of the
characters represent the content of the first compartment.

An example of an input file looks like:

~~~~
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
~~~~

The first rucksack contains `vJrwpWtwJgWrhcsFMMfFFhFp`, of which
`vJrwpWtwJgWr` is the content of the first compartment, and 
`hcsFMMfFFhFp` is the content of the second compartment.

Items also have a priority. Items `a` to `z` (the lowercase ASCII
letters) have priorities `1` to `26`. Items `A` to `Z` (the uppercase
ASCII letters) have priorities `27` to `52`.

#### Part 1

For part 1, we need to inspect each rucksack and locate the item
which is common to both compartments. We need to get the priority
of each common item, and sum those priorities.

For instance, the common item of the first rucksack is `p`, as it
appears in both compartments, and its priority is `16`.

##### Notes

* Each rucksack will have exactly one item which is common between
  both compartments.
* The common item may be appear more than once in a compartment though.

#### Part 2

For part 2, we have to group the rucksacks in groups of three (so, the
first three rucksacks are a group, the fourth to sixth rucksack form
the next group, etc), and locate the one common item between each rucksack
in a group. Just as in part 1, we need to take the priority of each 
common item, and sum those priorities.

In the example file, the content of the first three rucksacks (the
first group) is `vJrwpWtwJgWrhcsFMMfFFhFp`, `jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
and `PmmdzqPrVvPwwTWBwg`, and the common element between them is `r`,
with priority `18`.

##### Notes

* Each group of rucksacks will have exactly one item which is common between
  the rucksacks.
* The common item may be appear more than once in a particular rucksack.


## Solution

We start with defining a helper method which takes an item, and
return its priority:

~~~~
sub prio ($item) {
    $item =~ /\p{Ll}/ ?  1 + ord ($item) - ord ('a')
                      : 27 + ord ($item) - ord ('A');
}
~~~~

This one is pretty straightforward: if the item is a lower case
letter ([`/\p{Ll}/`](https://perldoc.perl.org/perluniprops)),
we return `1` plus the difference between its code point
([`ord`](#)) and the code point of the letter `a`. Otherwise,
the item item is an upper case letter, and we return `27` plus
the difference between its code point and the code point of
the letter `A`.

To process the rucksacks, we iterate over the input line by line,
using `while (<>) {...}`, which puts each line into the variable
`$_`. We start the block with a [`chomp`](#) which removes the newline.

For part 1, we split the line into two parts; the
first part, we split into characters and store those characters
in the hash `%first`:

~~~~
my %first = map {$_ => 1} split // => substr $_, 0, length ($_) / 2;
~~~~

Here, [`length ($_)`](#func:length) returns the length of the line.
[`substr ($_, 0, length ($_) / 2)`](#func:substr) returns the first
half of the line. Using [`split`](#) with an empty pattern (`//`),
splits this first half of the line into a list of characters.
We use a [`map`](#) to put the characters in the hash `%first`.

This means that an item `$x` is in the first compartment of the
rucksack if, and only if, `$first {$x}` is true.

The second half (that is, the second compartment of the rucksack),
we process as follows:

~~~~
my ($common) = grep {$first {$_}} split // => substr $_, length ($_) / 2;
~~~~

We use [`substr`](#) again to get the second half of the line of input,
and again, we [`split`](#) it into individual character. Then we use
[`grep`](#) to only keep those characters which are in `%first`. 
That is, only those items from the second compartment which are also
in the first compartment make it through the `grep`. This may be more
than one, but if that is the case, those items will be the same.
By assigning the result of `grep` to a list (of one element), we get
the common item in `$common`.

Now we can increment the score for part 1. We have initialized 
`$score1` to `0` outside of the main loop.

~~~~
$score1 += 1;
~~~~

For part 2, we count elves. And, we keep track of how often we see
an item, but for each rucksack, we remove duplicates. (So, if one
rucksack contains the item `$x` twice, we only count if for that
rucksack once). Once we have processed the rucksacks of three elves,
we look which item appear twice -- this is the common item of the
group. We then reset the elf count and item count.

Outside the loop, we have initialized `$elves = 0` and `%group = ()`.
The former counts elves, the latter counts items. Then, in the loop
we have:

~~~~
my %seen;
$group {$_} ++ for grep {!$seen {$_} ++} split //;
~~~~

We split the input line in characters ([`split //`](#func:split)),
then use the [`grep`](#) block to remove duplicates. The return
value of `grep` is a list of characters (representing items),
with duplicates removed. Foreach of those characters, we increment
its count in `%group` by one.

After having processed three rucksacks, we can search for the common
item:

~~~~
if (++ $elves == 3) {
    $score2 += prio grep {$group {$_} == 3} keys %group;

    %group = ();
    $elves = 0;
}
~~~~

We increment the elf count, and when it hits `3`, we get the list
of all the items which appear in the three rucksacks
([`keys %group`](#func:keys)). Using 
[`grep {$group {$_} == 3}`](#func:grep), we filter out the
items whose count is `3` -- these are the items common to all
three rucksacks. Due to the nature of the puzzle, this must be
a single item. We calculate its priority and add this to the score.
Finally, we reset the item and elf count.

Once we have processed the entire input, we can print out
the solution:

~~~~
say "Solution 1: ", $score1;
say "Solution 2: ", $score2;
~~~~

FULL_PROGRAM

### Regex Solution

We also have an alternative, regexp based solution. We use the same
`prio` function as above, and we also process the input line by line.
We do **not** remove the trailing newline.

For part 1, we first split the line into halves, then join them again
with a newline in between:

~~~~
my  $ruck = substr ($_, 0, length ($_) / 2) . "\n" .
            substr ($_,    length ($_) / 2);
~~~~

This is using the same [`split`s](#func:split) we used above to
split the line into two equal parts.

We can now use a regexp to find the common item between the two
halves:

~~~~
my ($c) = $ruck =~ /(.).*\n.*\1/;
$score1 += prio $c;
~~~~

The pattern selects a single non-newline character (`(.)`), skips
till the newline (`.*` -- remember that by default a dot matches
any character, except a newline), matches the newline, then tries
to find the same character after the newline (`/.*\1/`). This pattern
must succeed because it's given there's a common item.

`$c` will be that common item, so we gets its priority, and we
add the priority to the score.

To answer part 2, the join the input lines till we have joined
three lines:

~~~~
$group .= $_;
$elves ++;
~~~~

If we have joined three lines, we use a pattern to select the
common item between the three:

~~~~
if ($elves == 3) {
    my ($c) = $group =~ /(.).*\n.*\1.*\n.*\1/;
    $score2 += prio $c;
    $elves = 0;
    $group = "";
}
~~~~

The pattern we use is similar to the pattern we used above, except
a bit longer because we have three parts where we have to find a
common item.

After finding the common element and adding its priority to the
score, we reset the elf count (`$elves = 0`) and the set of
three lines (`$group = ""`).


FULL_PROGRAM;part_nr=2

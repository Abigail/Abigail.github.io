# Advent Of Code 2022, Day 1: Calorie Counting

## [Challenge](https://adventofcode.com/2022/day/1)

We are given a file, containing calories (of snacks) each Elf is
carrying. Calories from different elves are separated by a blank line.

An example file is:

~~~~
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
~~~~

This would be the list of calories carried by five different elves.

* The first elf carries three snacks, worth `1000`, `2000` and `3000`
  calories, for a total of `6000` calories.
* The second elf carries a single snack, worth `4000` calories.
* The third elf carries two snacks, with `5000` and `6000` calories.
  This totals `11000` calories.
* The fourth elf carries three snacks, with `7000`, `8000`, and `9000`
  calories, which sum to a total of `24000` calories.
* The fifth and final elf carries one snack, worth `10000` calories.

#### Part 1

For part 1, we have to find the elf carrying the most calories, 
and report the amount of calories it is carrying.

For the example above, this would be the fourth elf, which carries
<span class = "answer">24000</span> calories.


#### Part 2

In part 2, we need to find the top three elves (in amount of calories
carried) and sum their totals. For the example file, this would
be the fourth, third and fifth elf, carrying `24000`, `11000`
and `10000` calories, for a total of <span class = 'answer'>45000</span>
calories.

## Solution

Given this is the first day, the challenge is simple. The heart of
our solution is a one liner, once we tell Perl to go into 
[_paragraph_](#doc:perlvar#$/) mode, which we do with 

~~~~
$/ = "";
~~~~

This makes that if we read in input in list context, Perl won't split
the input into lines, but into paragraphs: sections separated by two
or more newlines.

The one-liner doing the work:

~~~~
my @calories = sort {$b <=> $a} map {sum split} <>;
~~~~

To understand this, it's best to work from left to right:

* `<>`: this reads the input, returning the input as a list of paragraphs.
        Each paragraphs contains the calories carred by a single elf.
* `map {sum split}`: this is called for each paragraph; inside the block,
        the paragraph is in `$_`. First, we call [`split`](#): it's called
        without arguments, which means it splits the content of `$_` on
        whitespace. `$_` contains the calories carried by an elf, separated
        by newlines (which is whitespace). So, out of `split` comes a list
        all the calories carried by a single elf. This list is then the
        input of `sum` which we have imported from [`List::Util`](#).
        `sum` just sums its list of arguments. So, the output of the
        `map` is a list of the sums of the calories of each elf.
* `sort {$b <=> $a}`: this [sorts](#func:sort) the list numerically,
         and in descending order. The _spaceship_ operator,
         [`<=>`](#op:Equality-Operators)
         makes the sort work numerically, having `$b` on the left hand
         side of the operator (and `$a` on the right hand side) makes
         it sort descending.

So, we end up with `@calories` containing a list of total calories each
elf is carrying, sorted from most to least. So, the answer of part 1
is just the first element of `@calories` and the answer of part 2
is the sum of the first three elements of `@calories`.

~~~~
say "Solution 1: ",     $calories [0];
say "Solution 2: ", sum @calories [0 .. 2];
~~~~

FULL_PROGRAM

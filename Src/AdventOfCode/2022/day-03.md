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


FULL_PROGRAM

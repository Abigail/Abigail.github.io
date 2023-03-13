# N Queens Problem

<!-- %%% include: chess_board -->

## Introduction

In this article we will solve the [N Queens](#wiki:Eight_queens_puzzle) puzzle
using a regular expression.

### The N Queens Puzzle

The [N Queens Puzzle](#wiki:Eight_queens_puzzle) asks you to place
*N* Queens on an *N x N* chess board such that no pair of Queens
attack each other. A Queen can move an unlimited number of squares
horizontally, vertically or disagonally. So, we're asked to place
*N* Queens on the board such that no rank (row), file (column), or 
diagonal contain more then one Queen. Since we have to place as many
Queens as there are ranks and files, any solution will have exactly
one Queen on each rank, and exactly one Queen on each file. But some
diagonals will not have a Queen.

It is known there is a solution for any board size, except for the
*2 x 2* and *3 x 3* boards. Other than the *1 x 1* board, solutions
are not unique, although if we disgard rotations and reflections,
the solutions for the *4 x 4* and *6 x 6* boards are unique.

For the standard *8 x 8* board, there are 96 different solutions,
12 different solutions if you disgard rotations and reflections.

Here is an example solution for an *8 x 8* board:

<div class    = "chess-board" date-size = 8 
     data-fen = "4Q3/1Q6/3Q4/6Q1/2Q5/7Q/5Q2/Q7 w - - 0 1">
</div>


### Solving it with a regular expression

What do we mean when we say *solve it with a regular expression*?
What we will do, given the input (the size of the chess board), is
create a string and a pattern, then match the pattern against the
string -- which we from now on, we will call the *subject*.
The pattern should match, if and only if, there is a solution
for a chess board of the size. Furthermore, we should be able to
find the solution from the captures made by the pattern.

We do have some restrictions:

* Both the subject and pattern should be small, for some value of small.
  To be precise, the size of both subject and pattern should should be
  at most polynomial in the size of the chess board (so we cannot just
  enumerate all possible placements of N Queens on the chess board, then
  use a pattern for a correct placement).

* No breaking out of the regex engine and have the main interpreter do
  work (so, no `(?{ })` or `(??{ })` constructs).

* In fact, no *modern* constructs. All constructs we use are from the
  [POSIX Extended Regular
   Expressions](#wiki:Regular_expression#POSIX_extended) (ERE)
  with the addition of backreferences, which are found in the
  [POSIX Basic Regular
   Expressions](#wiki:Regular_expression#POSIX_basic_and_extended) (BRE),
   but not in the ERE.

   We do however make use of named captures, as found in 
   [PCRE](Perl_Compatible_Regular_Expressions). This however does not
   add any functionality -- with a straightforward renaming, numbered
   backreferences can be used.

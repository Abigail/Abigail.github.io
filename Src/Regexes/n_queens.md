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

<div class = "chess-board">
. . . . Q . . .
. Q . . . . . .
. . . Q . . . .
. . . . . . Q .
. . Q . . . . .
. . . . . . . Q
. . . . . Q . .
Q . . . . . . .
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


## Building the Subject and Pattern

To create our solution, we will create the subject and pattern
piecewise. That is, we create little segments of the subject and
pair them with little segments of the pattern, in such a way that
the subject segment can only be matched by the corresponding 
pattern segment.

In order to get the right patterns segments to line up with the
subject segments, we do the following:

1. Each segment, both in the pattern and subject ends with a `;`. 
2. `;` does not appear elsewhere in any subject segment.
3. The pattern segments will not be able to match a `;`, other 
   than an exact match of that final `;`. (So, we will not have
   things like `.*` in our pattern).
4. The pattern segments appear in the same order as the corresponding
   subject segments.

Below, we will display subject segments like this: !!subject!!`subject`,
and pattern segments like this: !!pattern!!`pattern`.

### Constraints

We will need different types of segment pairs. We can look at the
N Queens problem, break it down in various *constraints*, and create
a segment pair for each constraint. If we break down the problem in
such a way that there is a solution if and only if all constraints
are satisfied, the problem will have a solution if and only if the
complete pattern matches the complete subject.

We will use the following constraints:

* Each square of the board contains either a Queen, or is empty.
* Each pair of squares which share a rank, file, or diagonal contain
  at most one Queen. (Otherwise, we would a pair of Queens which attack
  each other).
* We have exactly N Queens on the board.

We can rephrase the latter constraint a bit. We already know that in
a valid position, each rank will have exactly Queen. So, we can rephrase
the latter constraint as:

* Each row has exactly 1 Queen.

Now, the first two constraints already prevent having more than one Queen
on a row, but those contraints by themselves allow for empty rows, so
we do need the latter contraint.


#### Queen or Empty

In the first constraint, for each of the squares of the board,
we need to determine whether it contains a Queen or not. 

To make it easier to refer to a square, we give all the squares
coordinates; each square has coordinates \((x, y)\), with
\(1 \le x \le N\), and \(1 \le y \le N\). The square \((1, 1)\)
is the square in the bottom left (*a1* on a traditional *8 x 8*
chess board), and \((N, N)\) is the square at the top right
(*h8* on a traditional *8 x 8* chess board).

Since this is the constraint which sets the content of a square
(either a Queen or empty), we capture the content using a named
capture. For the square with coordinates `($x, $y)`, we use the
capture name `Q_${x}_${y}`.

We will use a subject segment of !!subject!!`Q;` and a pattern segment of
!!pattern!!`(?<Q_${x}_${y}>Q?)Q?;`. This means the pattern segment must
match exactly one `Q`, and there are only two ways to do this:
either the `Q` inside the capture matches, or the `Q` outside does.
In the former case, we treat this as if a Queen was placed on this
square, else we consider this to be an empty square. Hence, this pattern
segment results in the capture `Q_${x}_${y}` either being the empty
string (no Queen on the square), or being the string `Q` (a Queen on
the square).

Since we have such a segment pair for each square of the board, in
total we will have \(N^2\) such segments.

#### Non Attacking Pairs

For each pair of squares on the board where we can move between using
a Queens move, at most one of those squares can contain a Queen. That
is, pairs of squares which are either on the same rank, same file, or
same diagonal.

Assume we have two such squares, whose content are captured by
capture groups `Q_1` and `Q_2`. We will then have as subject segment
!!subject!!`Q;`, and as pattern segment !!pattern!!`\g{Q_1}\g{Q_2}Q?;`.

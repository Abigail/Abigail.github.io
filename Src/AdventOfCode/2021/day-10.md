# Advent Of Code 2021, Day 10: Syntax Scoring

## [Challenge](https://adventofcode.com/2021/day/10)


We are given a set of lines; each line consisting of strings
of nested balanced parenthesis, using the standard four sets of ASCII
parenthesis: `(`/`)`, `[`/`]`, `{`/`}`, and `<`/`>`.

Except that each line has an issue:

* Either the line is corrupted: this is when a set of parenthesis
  has a mismatch between the opening and closing parenthesis.
* Or the line is incomplete: it is missing one or more closing parenthesis.

If they are both, we consider the line to be corrupted.

Consider the following example file:

~~~~
[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]
~~~~

#### Part One

In Part One, we have to find the *corrupted* lines, and find the
first incorrect closing parenthesis. For the example file, we
have the following corrupted lines -- we've marked the first
wrong set of parenthesis:

<pre class = 'corrupted' markdown = 1>
<code>{([(<{}<span class = 'incorrect'>[</span><>[]<span class = 'incorrect'>}</span>>{[]{[(<()>
[[<<span class = 'incorrect'>[</span>([])<span class = 'incorrect'>)</span><([[{}[[()]]]
[{[{<span class = 'incorrect'>(</span>{}<span class = 'incorrect'>]</span>{}}([{[{{{}}([]
[<(<(<(<span class = 'incorrect'><</span>{}<span class = 'incorrect'>)</span>)><([]([]()
<{([(<span class = 'incorrect'>[</span>[(<>()){}]<span class = 'incorrect'>></span>(<<{<span>{</span>
</code></pre>


The incorrect closing parenthesis are `}`, `)`, `]`, `)`, and `>`.
Each of them has a score:

* `)` scores 3 points;
* `]` scores 57 points;
* `}` scores 1197 points;
* `>` scores 25137 points.

The answer for Part One is the sum of the scores of the first incorrect
closing parethesis of each corrupted line.

#### Part Two

Each line which is not corrupt, will be *incomplete*. We have to find
the incomplete lines, and for each of the lines, find the missing
closing parenthesis (in the correct order).

Below, we show the incomplete lines of example file, followed by
the sequence needed to complete them:

<pre class = 'corrupted' markdown = 1>
<code>[({(<(())[]>[[{[]{<()<>>     <span class = 'incorrect'>}}]])})]</span>
[(()[<>])]({[<{<<[]>>(       <span class = 'incorrect'>)}>]})</span>
(((({<>}<{<{<>}{[]{[]{}      <span class = 'incorrect'>}}>}>))))</span>
{<[[]]>}<{[{[{[]{()[[[]      <span class = 'incorrect'>]]}}]}]}></span>
<{([{{}}[<[[[<>{}]]]>[]]     <span class = 'incorrect'>])}</span>
</code></pre>

Incomplete lines have a score as well. Each missing closing parenthesis
has a score:

* `)` scores 1 point;
* `]` scores 2 points;
* `}` scores 3 points;
* `>` scores 4 points.

To calculate the score of an incomplete line, we start with a 
score of 0; then for each missing parenthesis, we multiply the
score by 5, and add the score of the missing parenthesis.

To calculate the answer of Part Two, we need to scores of all
the incomplete lines, sort them, and take the middle value
(it's a given that there are an odd number of incomplete lines).

## Solution

A traditional solution would be to use a stack. Iterate over the
characters of the string and then:

* If it's an opening parenthesis, push the character on the stack.
* Else the character has to be a closing parenthesis:
    * If it matches with the top of the stack, pop the stack.
    * Else, the string is corrupt and the current character is
      the first mismatched closing parenthesis.

If we reach the end of the sting, whatever is left on the stack
are characters without a closing delimiter.

### Perl

<!-- % no mathjax -->

In our Perl solution, we won't use a stack. Instead, we repeatedly
remove pairs of delimiters: `()`, `[]`, `{}`, `<>`. This will
remove all substrings which are correctly balanced. 

Therefore, if there is nothing left to be removed, if the remaining
string contains a closing parenthesis, the string is corrupt, and
the first closing parenthesis is the offending character.

Else, the remaining string contains opening parenthesis only, and 
the string is incomplete. 

First, we need some initialization:

~~~~
my %scores = qw ! ( 1 )     3 [ 2 ]    57 { 3 }  1197 < 4 > 25137 !;
my $score  = 0;
my @scores;
~~~~

Then for each line (which will be in `$_`), we remove perfectly
balanced substrings:

~~~~
1 while s/ \(\) | \[\] | <> | \{\} //xg;
~~~~

Now, if the remaining string contains a closing parenthesis, 
we can calculate the score for Part One:

~~~~
if (/[])}>]/) {
    $score += $scores {$&};
}
~~~~

Else, we calculate the score for Part Two:

~~~~
else {
    my $score = 0;
       $score = 5 * $score + $scores {$_} for reverse split //;
    push @scores => $score;
}
~~~~


Now we're ready to display the results:

~~~~
say "Solution 1: ", $score;
say "Solution 2: ", (sort {$a <=> $b} @scores) [@scores / 2];
~~~~

FULL_PROGRAM

#### Single Regexp

For Part One, we could use a single regular expression:

~~~~
my $pattern = << '--';
  (?(DEFINE)
      (?<balanced> (?: \( (?&balanced)* \)
                     | \[ (?&balanced)* \]
                     | \{ (?&balanced)* \}
                     |  < (?&balanced)* >)*)
  )
  (?| [[({] (?&balanced) (>)
    | [[(<] (?&balanced) (\})
    | [[{<] (?&balanced) (\))
    | [({<] (?&balanced) (\]))
--
~~~~

Now, if one matches `/$pattern/x` against a line, if matches if and
only if that line is corrupted -- and if it does, `$2` contains the
first non-matching closing parenthesis.

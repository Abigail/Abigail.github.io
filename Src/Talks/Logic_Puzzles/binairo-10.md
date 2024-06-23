# Statements: Unequal rows/columns

<!-- %% svg-grid: code -->

~~~~
"01;"
=~
/(?:\g{R0C0}\g{R1C0}|\g{R1C0}\g{R0C0}|
    \g{R0C1}\g{R1C1}|\g{R1C1}\g{R0C1}|
    \g{R0C2}\g{R1C2}|\g{R1C2}\g{R0C2}|
    \g{R0C3}\g{R1C3}|\g{R1C3}\g{R0C3}|
    \g{R0C4}\g{R1C4}|\g{R1C4}\g{R0C4}|
    \g{R0C5}\g{R1C5}|\g{R1C5}\g{R0C5});/x
~~~~

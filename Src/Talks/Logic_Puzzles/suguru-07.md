# Statement: Cells must differ

<!-- %% svg-grid: code -->

~~~~
# 'R2C1' is in a group of size 5
# 'R3C2' is in a group of size 3

"12 13 21 23 31 32 41 42 43 51 52 53;"

                =~

/(?:[1-5][1-3])*\g{R2C1}\g{R3C2}(?:[1-5][1-3])*;/x
~~~~

# Statements: Unequal rows/columns

<!-- %% svg-grid: code -->

~~~~
"%%WHITE%%%%BLACK%%;" =~ /(?:\g{R1C1}\g{R2C1}|\g{R2C1}\g{R1C1}|
             \g{R1C2}\g{R2C2}|\g{R2C2}\g{R1C2}|
             \g{R1C3}\g{R2C3}|\g{R2C3}\g{R1C3}|
             \g{R1C4}\g{R2C4}|\g{R2C4}\g{R1C4}|
             \g{R1C5}\g{R2C5}|\g{R2C5}\g{R1C5}|
             \g{R1C6}\g{R2C6}|\g{R2C6}\g{R1C6});/x
~~~~

# Binairo

<!-- %% svg-grid: code -->

~~~~
...
01;    (?:\g{R5C1}\g{R1C1}|\g{R1C1}\g{R5C1}|\g{R5C2}\g{R1C2}|\g{R1C2}\g{R5C2}|
          \g{R5C3}\g{R1C3}|\g{R1C3}\g{R5C3}|\g{R5C4}\g{R1C4}|\g{R1C4}\g{R5C4}|
          \g{R5C5}\g{R1C5}|\g{R1C5}\g{R5C5}|\g{R5C5}\g{R1C5}|\g{R1C5}\g{R5C5});
01;    (?:\g{R5C1}\g{R2C1}|\g{R2C1}\g{R5C1}|\g{R5C2}\g{R2C2}|\g{R2C2}\g{R5C2}|
          \g{R5C3}\g{R2C3}|\g{R2C3}\g{R5C3}|\g{R5C4}\g{R2C4}|\g{R2C4}\g{R5C4}|
          \g{R5C5}\g{R2C5}|\g{R2C5}\g{R5C5}|\g{R5C5}\g{R2C5}|\g{R2C5}\g{R5C5});
01;    (?:\g{R5C1}\g{R3C1}|\g{R3C1}\g{R5C1}|\g{R5C2}\g{R3C2}|\g{R3C2}\g{R5C2}|
          \g{R5C3}\g{R3C3}|\g{R3C3}\g{R5C3}|\g{R5C4}\g{R3C4}|\g{R3C4}\g{R5C4}|
          \g{R5C5}\g{R3C5}|\g{R3C5}\g{R5C5}|\g{R5C5}\g{R3C5}|\g{R3C5}\g{R5C5});
01;    (?:\g{R5C1}\g{R4C1}|\g{R4C1}\g{R5C1}|\g{R5C2}\g{R4C2}|\g{R4C2}\g{R5C2}|
          \g{R5C3}\g{R4C3}|\g{R4C3}\g{R5C3}|\g{R5C4}\g{R4C4}|\g{R4C4}\g{R5C4}|
          \g{R5C5}\g{R4C5}|\g{R4C5}\g{R5C5}|\g{R5C5}\g{R4C5}|\g{R4C5}\g{R5C5});
01;    [01]?(?<R6C1>[01])[01]?;
...
01;    [01]?(?<R6C2>[01])[01]?;
...
1;     (?<R6C3>1);
...
000;   (?:\g{R1C3}?\g{R2C3}?\g{R3C3}?\g{R4C3}?\g{R5C3}?\g{R6C3}?);
111;   (?:\g{R1C3}?\g{R2C3}?\g{R3C3}?\g{R4C3}?\g{R5C3}?\g{R6C3}?);
...
~~~~

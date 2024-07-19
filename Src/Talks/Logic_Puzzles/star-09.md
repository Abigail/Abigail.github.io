# Star Battle: Putting it together

<!-- %% svg-grid: code -->
<!-- %% pre-to-p       -->

~~~~
(?<R0C0>%%STAR%%?)%%STAR%%?;(?<R0C1>%%STAR%%?)%%STAR%%?;\g{R0C1}\g{R0C0}%%STAR%%?;(?<R0C2>%%STAR%%?)%%STAR%%?;\g{R0C2}\g{R0C1}%%STAR%%?;(?<R0C3>%%STAR%%?)%%STAR%%?;\g{R0C3}\g{R0C2}%%STAR%%?;(?<R0C4>%%STAR%%?)%%STAR%%?;\g{R0C4}\g{R0C3}%%STAR%%?;\g{R0C3}\g{R0C4};(?<R0C5>%%STAR%%?)%%STAR%%?;\g{R0C5}\g{R0C4}%%STAR%%?;\g{R0C0}\g{R0C1}\g{R0C2}\g{R0C3}\g{R0C4}\g{R0C5};(?<R1C0>%%STAR%%?)%%STAR%%?;\g{R1C0}\g{R0C0}%%STAR%%?;\g{R1C0}\g{R0C1}%%STAR%%?;(?<R1C1>%%STAR%%?)%%STAR%%?;\g{R1C1}\g{R0C0}%%STAR%%?;\g{R1C1}\g{R0C1}%%STAR%%?;\g{R1C1}\g{R0C2}%%STAR%%?;\g{R1C1}\g{R1C0}%%STAR%%?;(?<R1C2>%%STAR%%?)%%STAR%%?;\g{R1C2}\g{R0C1}%%STAR%%?;\g{R1C2}\g{R0C2}%%STAR%%?;\g{R1C2}\g{R0C3}%%STAR%%?;\g{R1C2}\g{R1C1}%%STAR%%?;(?<R1C3>%%STAR%%?)%%STAR%%?;\g{R1C3}\g{R0C2}%%STAR%%?;\g{R1C3}\g{R0C3}%%STAR%%?;\g{R1C3}\g{R0C4}%%STAR%%?;\g{R1C3}\g{R1C2}%%STAR%%?;(?<R1C4>%%STAR%%?)%%STAR%%?;\g{R1C4}\g{R0C3}%%STAR%%?;\g{R1C4}\g{R0C4}%%STAR%%?;\g{R1C4}\g{R0C5}%%STAR%%?;\g{R1C4}\g{R1C3}%%STAR%%?;(?<R1C5>%%STAR%%?)%%STAR%%?;\g{R1C5}\g{R0C4}%%STAR%%?;\g{R1C5}\g{R0C5}%%STAR%%?;\g{R1C5}\g{R1C4}%%STAR%%?;\g{R1C0}\g{R1C1}\g{R1C2}\g{R1C3}\g{R1C4}\g{R1C5};\g{R0C5}\g{R1C3}\g{R1C4}\g{R1C5};(?<R2C0>%%STAR%%?)%%STAR%%?;\g{R2C0}\g{R1C0}%%STAR%%?;\g{R2C0}\g{R1C1}%%STAR%%?;(?<R2C1>%%STAR%%?)%%STAR%%?;\g{R2C1}\g{R1C0}%%STAR%%?;\g{R2C1}\g{R1C1}%%STAR%%?;\g{R2C1}\g{R1C2}%%STAR%%?;\g{R2C1}\g{R2C0}%%STAR%%?;(?<R2C2>%%STAR%%?)%%STAR%%?;\g{R2C2}\g{R1C1}%%STAR%%?;\g{R2C2}\g{R1C2}%%STAR%%?;\g{R2C2}\g{R1C3}%%STAR%%?;\g{R2C2}\g{R2C1}%%STAR%%?;(?<R2C3>%%STAR%%?)%%STAR%%?;\g{R2C3}\g{R1C2}%%STAR%%?;\g{R2C3}\g{R1C3}%%STAR%%?;\g{R2C3}\g{R1C4}%%STAR%%?;\g{R2C3}\g{R2C2}%%STAR%%?;(?<R2C4>%%STAR%%?)%%STAR%%?;\g{R2C4}\g{R1C3}%%STAR%%?;\g{R2C4}\g{R1C4}%%STAR%%?;\g{R2C4}\g{R1C5}%%STAR%%?;\g{R2C4}\g{R2C3}%%STAR%%?;(?<R2C5>%%STAR%%?)%%STAR%%?;\g{R2C5}\g{R1C4}%%STAR%%?;\g{R2C5}\g{R1C5}%%STAR%%?;\g{R2C5}\g{R2C4}%%STAR%%?;\g{R2C0}\g{R2C1}\g{R2C2}\g{R2C3}\g{R2C4}\g{R2C5};(?<R3C0>%%STAR%%?)%%STAR%%?;\g{R3C0}\g{R2C0}%%STAR%%?;\g{R3C0}\g{R2C1}%%STAR%%?;(?<R3C1>%%STAR%%?)%%STAR%%?;\g{R3C1}\g{R2C0}%%STAR%%?;\g{R3C1}\g{R2C1}%%STAR%%?;\g{R3C1}\g{R2C2}%%STAR%%?;\g{R3C1}\g{R3C0}%%STAR%%?;\g{R0C0}\g{R0C1}\g{R0C2}\g{R1C0}\g{R1C1}\g{R1C2}\g{R2C0}\g{R2C1}\g{R2C2}\g{R3C0}\g{R3C1};(?<R3C2>%%STAR%%?)%%STAR%%?;\g{R3C2}\g{R2C1}%%STAR%%?;\g{R3C2}\g{R2C2}%%STAR%%?;\g{R3C2}\g{R2C3}%%STAR%%?;\g{R3C2}\g{R3C1}%%STAR%%?;(?<R3C3>%%STAR%%?)%%STAR%%?;\g{R3C3}\g{R2C2}%%STAR%%?;\g{R3C3}\g{R2C3}%%STAR%%?;\g{R3C3}\g{R2C4}%%STAR%%?;\g{R3C3}\g{R3C2}%%STAR%%?;(?<R3C4>%%STAR%%?)%%STAR%%?;\g{R3C4}\g{R2C3}%%STAR%%?;\g{R3C4}\g{R2C4}%%STAR%%?;\g{R3C4}\g{R2C5}%%STAR%%?;\g{R3C4}\g{R3C3}%%STAR%%?;(?<R3C5>%%STAR%%?)%%STAR%%?;\g{R3C5}\g{R2C4}%%STAR%%?;\g{R3C5}\g{R2C5}%%STAR%%?;\g{R3C5}\g{R3C4}%%STAR%%?;\g{R3C0}\g{R3C1}\g{R3C2}\g{R3C3}\g{R3C4}\g{R3C5};(?<R4C0>%%STAR%%?)%%STAR%%?;\g{R4C0}\g{R3C0}%%STAR%%?;\g{R4C0}\g{R3C1}%%STAR%%?;(?<R4C1>%%STAR%%?)%%STAR%%?;\g{R4C1}\g{R3C0}%%STAR%%?;\g{R4C1}\g{R3C1}%%STAR%%?;\g{R4C1}\g{R3C2}%%STAR%%?;\g{R4C1}\g{R4C0}%%STAR%%?;(?<R4C2>%%STAR%%?)%%STAR%%?;\g{R4C2}\g{R3C1}%%STAR%%?;\g{R4C2}\g{R3C2}%%STAR%%?;\g{R4C2}\g{R3C3}%%STAR%%?;\g{R4C2}\g{R4C1}%%STAR%%?;(?<R4C3>%%STAR%%?)%%STAR%%?;\g{R4C3}\g{R3C2}%%STAR%%?;\g{R4C3}\g{R3C3}%%STAR%%?;\g{R4C3}\g{R3C4}%%STAR%%?;\g{R4C3}\g{R4C2}%%STAR%%?;(?<R4C4>%%STAR%%?)%%STAR%%?;\g{R4C4}\g{R3C3}%%STAR%%?;\g{R4C4}\g{R3C4}%%STAR%%?;\g{R4C4}\g{R3C5}%%STAR%%?;\g{R4C4}\g{R4C3}%%STAR%%?;(?<R4C5>%%STAR%%?)%%STAR%%?;\g{R4C5}\g{R3C4}%%STAR%%?;\g{R4C5}\g{R3C5}%%STAR%%?;\g{R4C5}\g{R4C4}%%STAR%%?;\g{R4C0}\g{R4C1}\g{R4C2}\g{R4C3}\g{R4C4}\g{R4C5};(?<R5C0>%%STAR%%?)%%STAR%%?;\g{R5C0}\g{R4C0}%%STAR%%?;\g{R5C0}\g{R4C1}%%STAR%%?;\g{R0C0}\g{R1C0}\g{R2C0}\g{R3C0}\g{R4C0}\g{R5C0};(?<R5C1>%%STAR%%?)%%STAR%%?;\g{R5C1}\g{R4C0}%%STAR%%?;\g{R5C1}\g{R4C1}%%STAR%%?;\g{R5C1}\g{R4C2}%%STAR%%?;\g{R5C1}\g{R5C0}%%STAR%%?;\g{R0C1}\g{R1C1}\g{R2C1}\g{R3C1}\g{R4C1}\g{R5C1};(?<R5C2>%%STAR%%?)%%STAR%%?;\g{R5C2}\g{R4C1}%%STAR%%?;\g{R5C2}\g{R4C2}%%STAR%%?;\g{R5C2}\g{R4C3}%%STAR%%?;\g{R5C2}\g{R5C1}%%STAR%%?;\g{R0C2}\g{R1C2}\g{R2C2}\g{R3C2}\g{R4C2}\g{R5C2};\g{R4C0}\g{R4C1}\g{R5C0}\g{R5C1}\g{R5C2};(?<R5C3>%%STAR%%?)%%STAR%%?;\g{R5C3}\g{R4C2}%%STAR%%?;\g{R5C3}\g{R4C3}%%STAR%%?;\g{R5C3}\g{R4C4}%%STAR%%?;\g{R5C3}\g{R5C2}%%STAR%%?;\g{R0C3}\g{R1C3}\g{R2C3}\g{R3C3}\g{R4C3}\g{R5C3};(?<R5C4>%%STAR%%?)%%STAR%%?;\g{R5C4}\g{R4C3}%%STAR%%?;\g{R5C4}\g{R4C4}%%STAR%%?;\g{R5C4}\g{R4C5}%%STAR%%?;\g{R5C4}\g{R5C3}%%STAR%%?;\g{R0C4}\g{R1C4}\g{R2C4}\g{R3C4}\g{R4C4}\g{R5C4};\g{R2C3}\g{R3C2}\g{R3C3}\g{R4C2}\g{R4C3}\g{R4C4}\g{R5C3}\g{R5C4};(?<R5C5>%%STAR%%?)%%STAR%%?;\g{R5C5}\g{R4C4}%%STAR%%?;\g{R5C5}\g{R4C5}%%STAR%%?;\g{R5C5}\g{R5C4}%%STAR%%?;\g{R5C0}\g{R5C1}\g{R5C2}\g{R5C3}\g{R5C4}\g{R5C5};\g{R0C5}\g{R1C5}\g{R2C5}\g{R3C5}\g{R4C5}\g{R5C5};\g{R2C4}\g{R2C5}\g{R3C4}\g{R3C5}\g{R4C5}\g{R5C5};
~~~~
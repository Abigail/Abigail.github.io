# Booleans

## Introduction

In this article, we compare what different languages use as boolean
values. Some languages will have a boolean type. Other languages
will treat certain values as *true*, and other values as *false*.

In the table below, an entry in the column `Type` means the language
has a boolean type. The **False** and **True** columns indicate the
constants the language has for *false* and *true*. Values in the
**Falsy** and **Truthy** columns indicate values which evaluate
to *false* or *true* when used in a boolean context. If these latter
columns are marked N/A, using values other than the one in the
**False** and **True** column give a type error.

|====
{th=1} Language &
{th=1} Type &
{th=1} False &
{th=1} True &
{th=1} Falsy &
{th=1} Truthy &
{th=1} Remarks \\

<!-- AWK -->
{th=1; class=lang} AWK &
{cs=3; class=na} N/A  &
`0`, `""` &
Anything else & `"0"` is truthy (!) \\

<!-- Bash -->
{th=1; class=lang} Bash &
{cs=3; class=na} N/A  &
`0`, non-numeric strings &
Numbers other than `0` & This is for the `(( ))` construct \\

<!-- bc -->
{th=1; class=lang} bc &
{cs=3; class=na} N/A  &
`0` &
Anything else & \\

<!-- C -->
{th=1; class=lang} C &
[`bool`][stdbool] &
`false` &
`true` &
`0`, `NULL` &
Anything else &
`# include <stdbool.h>` for `bool`, `false`, and `true`. \\

<!-- Go -->
{th=1; class=lang} Go &
[`bool`][golang] &
`false` &
`true` &
{cs=2; class=na} N/A & \\

<!-- Java -->
{th=1; class=lang} Java &
[`boolean`][java] &
`false` &
`true` &
{cs=2; class=na} N/A & \\

<!-- Lua -->
{th=1; class=lang} Lua &
&
`false` &
`true` &
`nil` &
Anything else & `0` and `""` are truthy (!) \\

<!-- Node.js -->
{th=1; class=lang} Node.js &
`Boolean` &
`false` &
`true` &
`undefined`, `null`, `0`, `NaN`, `""`  &
Anything else & [`Boolean`][nodejs] is an object type. \\

<!-- Pascal -->
{th=1; class=lang} Pascal &
[`boolean`][pascal] &
`false` &
`true` &
{cs=2; class=na} N/A & \\

<!-- Perl -->
{th=1; class=lang} Perl &
{cs=3; class=na} N/A  &
`undef`, `0`, `"0"`, `""`, `()` &
Anything else & \\

<!-- Python -->
{th=1; class=lang} Python &
&
`False` &
`True` &
`None`, `0`, `""`, `()`, `[]`, `{}` &
Anything else & `"0"` is truthy (!) \\

<!-- R -->
{th=1; class=lang} R &
&
`FALSE` &
`TRUE` &
`F`, `0` &
`T`, any number other than `0` & `F` and `T` are predefined variables;
Strings give a type error \\

<!-- Ruby -->
{th=1; class=lang} Ruby &
&
`false` &
`true` &
`nil` &
Anything else & `0`, `"0"` and `""` are truthy (!) \\

<!-- Scheme -->
{th=1; class=lang} Scheme &
&
`#f`/`#false` &
`#t`/`#true` &
 &
Anything else & `0`, `"0"` and `""` are truthy (!) \\

<!-- Tcl -->
{th=1; class=lang} Tcl &
{cs=3; class=na} N/A  &
`0`, `false`, `no`, `off` &
`true`, `yes`, `on`, any number other than `0` &
Strings other than the ones in the **Falsy** and **Truthy** columns
give a type error \\

====|

[stdbool]: https://pubs.opengroup.org/onlinepubs/007904975/basedefs/stdbool.h.html
[golang]: https://golang.org/ref/spec#Boolean_types
[nodejs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[pascal]: https://wiki.freepascal.org/Boolean
[java]: https://www.w3schools.com/java/java_booleans.asp

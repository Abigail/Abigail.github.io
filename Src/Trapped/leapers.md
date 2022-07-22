# Leapers

<!-- %% no_piece: 1 -->

Leapers are chess pieces which *leap* from their starting square to
their destination square -- they cannot be blocked.

## Basic Leapers

A *basic leaper* or an \((m, n)\)-*leaper* is a chess piece which leaps
to the square which is \(m\) squares away in one orthogonal direction
(horizontal or vertical), and \(n\) in another. Either of \(m\) or 
\(n\) may be \(0\), but if \(m = n = 0\) we have a degenerated case:
a chess piece which does not move. Note that a \(m, n\)-leaper is also
an \(n, m\)-leaper. We generally take \(0 \leq m \leq n\).

The movements of basic leapers show an eigth fold symmetric pattern.
Note that if \(m = 0\), \(n = 0\), or \(m = n\), half of the symmetries
map to the other; in this case, there are only four destination fields
of the piece.

For small \(m\) and \(n\), the basic leapers have names:

|====
{class = 'leapers'}
  & 4 & 3 & 2 & 1 & 0 & 1 & 2 & 3 & 4 \\
4 & [**Commuter**](commuter.html)
  & [**Antelope**](antelope.html)
  & [**Stag**](stag.html)
  & [**Giraffe**](giraffe.html)
  & [**Fourleaper**](fourleaper.html)
  & [**Giraffe**](giraffe.html)
  & [**Stag**](stag.html)
  & [**Antelope**](antelope.html)
  & [**Commuter**](commuter.html)
    \\
3 & [**Antelope**](antelope.html)
  & [**Tripper**](tripper.html)
  & [**Zebra**](zebra.html)
  & [**Camel**](camel.html)
  & [**Threeleaper**](threeleaper.html)
  & [**Camel**](camel.html)
  & [**Zebra**](zebra.html)
  & [**Tripper**](tripper.html)
  & [**Antelope**](antelope.html)
    \\
2 & [**Stag**](stag.html)
  & [**Zebra**](zebra.html)
  & [**Alfil**](alfil.html)
  & [**Knight**](knight.html)
  & [**Dabbaba**](dabbaba.html)
  & [**Knight**](knight.html)
  & [**Alfil**](alfil.html)
  & [**Zebra**](zebra.html)
  & [**Stag**](stag.html)
    \\
1 & [**Giraffe**](giraffe.html)
  & [**Camel**](camel.html)
  & [**Knight**](knight.html)
  & [**Ferz**](ferz.html)
  & [**Wazir**](wazir.html)
  & [**Ferz**](ferz.html)
  & [**Knight**](knight.html)
  & [**Camel**](camel.html)
  & [**Giraffe**](giraffe.html)
    \\
0 & [**Fourleaper**](fourleaper.html)
  & [**Threeleaper**](threeleaper.html)
  & [**Dabbaba**](dabbaba.html)
  & [**Wazir**](wazir.html)
  &
  & [**Wazir**](wazir.html)
  & [**Dabbaba**](dabbaba.html)
  & [**Threeleaper**](threeleaper.html)
  & [**Fourleaper**](fourleaper.html)
    \\
1 & [**Giraffe**](giraffe.html)
  & [**Camel**](camel.html)
  & [**Knight**](knight.html)
  & [**Ferz**](ferz.html)
  & [**Wazir**](wazir.html)
  & [**Ferz**](ferz.html)
  & [**Knight**](knight.html)
  & [**Camel**](camel.html)
  & [**Giraffe**](giraffe.html)
    \\
2 & [**Stag**](stag.html)
  & [**Zebra**](zebra.html)
  & [**Alfil**](alfil.html)
  & [**Knight**](knight.html)
  & [**Dabbaba**](dabbaba.html)
  & [**Knight**](knight.html)
  & [**Alfil**](alfil.html)
  & [**Zebra**](zebra.html)
  & [**Stag**](stag.html)
    \\
3 & [**Antelope**](antelope.html)
  & [**Tripper**](tripper.html)
  & [**Zebra**](zebra.html)
  & [**Camel**](camel.html)
  & [**Threeleaper**](threeleaper.html)
  & [**Camel**](camel.html)
  & [**Zebra**](zebra.html)
  & [**Tripper**](tripper.html)
  & [**Antelope**](antelope.html)
    \\
4 & [**Commuter**](commuter.html)
  & [**Antelope**](antelope.html)
  & [**Stag**](stag.html)
  & [**Giraffe**](giraffe.html)
  & [**Fourleaper**](fourleaper.html)
  & [**Giraffe**](giraffe.html)
  & [**Stag**](stag.html)
  & [**Antelope**](antelope.html)
  & [**Commuter**](commuter.html)
    \\

====|

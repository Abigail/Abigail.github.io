# Statements: No Three in a Row

<!-- %% svg-grid: code -->

~~~~
"%%WHITE%%%%WHITE%%%%BLACK%% %%WHITE%%%%BLACK%%%%WHITE%% %%WHITE%%%%BLACK%%%%BLACK%% %%BLACK%%%%WHITE%%%%WHITE%% %%BLACK%%%%WHITE%%%%BLACK%% %%BLACK%%%%BLACK%%%%WHITE%%;"
            =~
/(?:[%%WHITE%%%%BLACK%%]{3})*
 \g{R1C1}\g{R1C2}\g{R1C3}
 (?:[%%WHITE%%%%BLACK%%]{3})*;/x
~~~~

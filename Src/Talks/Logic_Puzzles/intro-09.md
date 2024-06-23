# Regexp limitations

<!-- %% svg-grid: none -->
<!-- %% mathjax        -->

* No execution of code: `(?{code})`, `(??{code})`
* No look around: `(?= )`, `(?! )`, `(?<= )`, `(?<! )`
* No recursion: `(?&RULE)`, `(?R)`
* No if/then/else: `(?(con)pat|pat)`
* No control verbs: `(*PRUNE)`, `(*THEN)`, `(*COMMIT)`, ...
* Nothing which is not POSIX 1003.2 (Extended Regular Expression Syntax)
    * ... except for named captures
* Subject/pattern size should be \(\mathcal{O} (N^p)\)

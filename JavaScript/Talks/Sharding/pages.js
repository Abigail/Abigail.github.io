let dir = "Talks/Sharding"

let pages = [
    ["title",               "Title"],
 // ["abigail",             "Me"],
 // ["yapc",                "YAPC"],
    ["what-is",             "What is Sharding?"],
    ["warning",             "Warning"],

    ["prologue",            "Prologue"],
    ["database-01",         "Database"],
    ["database-02",         "Database"],
    ["database-07",         "Database"],
    ["database-03",         "Database"],
    ["database-04",         "Database"],
    ["database-05",         "Database Access"],
    ["database-06",         "Database Access"],
    ["chain-01",            "Replication chain"],

    ["act-1",               "Act I"],
    ["problems-01",         "Problems"],
    ["problems-02",         "Problems"],
    ["requirements-01",     "Requirements"],
    ["requirements-02",     "Requirements"],
    ["questions-01",        "Questions"],
    ["questions-02",        "Questions"],
    ["shard-key-01",        "Shard Key"],
    ["shard-key-02",        "Shard Key"],
    ["getting-there-01",    "How to get there"],
    ["new-package-01",      "New package"],
    ["new-package-02",      "New package"],
    ["new-package-03",      "New package"],
    ["new-package-04",      "New package"],
    ["new-package-classic", "New package"],
    ["new-code-01",         "New code"],
    ["new-code-02",         "New code"],
    ["shard-01",            "shard ()"],
    ["shard-02",            "shard ()"],
    ["new-code-03",         "New code"],
    ["new-code-04",         "New code"],
    ["new-code-05",         "New code"],
    ["new-code-06",         "New code"],
    ["skip-01",             "Skip Forward"],
    ["skip-02",             "Skip Forward"],
    ["new-code-07",         "New code"],
    ["new-code-08",         "New code"],
    ["new-code-09",         "New code"],
    ["new-code-10",         "New code"],
    ["data-move-01",        "Move data"],
    ["data-move-02",        "Move data"],
    ["data-move-03",        "Move data"],
    ["final-01",            "Final steps"],

    ["act-2",               "Act II"],
    ["problems-03",         "Problems"],
    ["solution-01",         "Solution"],
    ["scheme-01",           "Layout"],
    ["scheme-02",           "Layout"],
    ["shard-key-03",        "Shard Key"],
    ["shard-key-04",        "Shard Key"],
    ["scheme-03",           "Layout"],
    ["problems-04",         "A problem"],
    ["problem-code-01",     "A problem"],
    ["problem-code-02",     "A problem"],
    ["scheme-04",           "Layout"],
    ["scheme-05",           "Layout"],
    ["scheme-06",           "Layout"],
    ["scheme-07",           "Layout"],
    ["switch-01",           "Switch"],
    ["clean-up-01",         "Clean Up"],

    ["questions",           "Questions"],
];


pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

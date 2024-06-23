let dir = "Talks/Logic_Puzzles"

let pages = [
    ["title",             "Title"],
    ["abigail",           "Me"],
    ["yapc",              "YAPC"],
    ["ongoing",           "On Going Series"],
    ["intro-07",          "Introduction"],
    ["intro-09",          "Introduction"],
    ["binairo-01",        "Binairo"],
    ["statements-00",     "Statements"],
    ["statements-01",     "Statements"],
    ["statements-015",    "Statements"],
    ["statements-02",     "Statements"],
    ["binairo-02",        "Binairo"],
    ["binairo-03",        "Binairo"],
];


let bag = [
    ["intro-01",          "Introduction"],
    ["intro-02",          "Introduction"],
    ["intro-03",          "Introduction"],
    ["intro-04",          "Introduction"],
    ["intro-05",          "Introduction"],
    ["intro-06",          "Introduction"],
    ["statements-05",     "Statements"],
    ["statements-06",     "Statements"],
    ["statements-07",     "Statements"],
    ["statements-08",     "Print results"],
    ["statements-09",     "Print results"],
    ["size-01",           "Size"],
    ["size-02",           "Size"],
    ["size-03",           "Size"],
    ["size-04",           "Size"],
    ["size-05",           "Size"],
    ["size-06",           "Size"],
    ["size-07",           "Size"],
    ["size-08",           "Size"],
    ["size-09",           "Size"],
    ["size-10",           "Size"],
    ["size-105",          "Size"],
    ["size-11",           "Size"],
    ["size-12",           "Size"],
    ["size-13",           "Size"],
    ["size-14",           "Size"],
    ["regexp-00",         "By Regexp"],
    ["regexp-01",         "By Regexp"],
    ["regexp-03",         "By Regexp"],
    ["regexp-04",         "By Regexp"],
    ["count-01",          "Count"],
    ["count-02",          "Count"],
    ["count-03",          "Count"],
    ["demo",              "Demo"],
    ["stats-01",          "Statistics"],
    ["stats-03",          "Statistics"],
    ["toast-01",          "The Toast Problem"],
    ["toast-02",          "The Toast Problem"],
    ["toast-03",          "The Toast Problem"],
    ["toast-04",          "The Toast Problem"],
    ["toast-05",          "The Toast Problem"],
    ["toast-06",          "The Toast Problem"],
    ["demo2",             "Demo"],
    ["stats-02",          "Statistics"],
    ["questions",         "Questions"],
]

pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

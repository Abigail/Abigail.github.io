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
    ["binairo-04",        "Binairo"],
    ["binairo-05",        "Binairo"],
    ["binairo-06",        "Binairo"],
    ["binairo-08",        "Binairo"],
    ["binairo-09",        "Binairo"],
    ["binairo-10",        "Binairo"],
    ["binairo-11",        "Binairo"],
    ["binairo-12",        "Binairo"],
    ["binairo-13",        "Binairo"],
    ["binairo-14",        "Binairo"],
    ["binairo-15",        "Binairo"],
    ["suguru-01",         "Suguru"],
    ["suguru-02",         "Suguru"],
    ["suguru-03",         "Suguru"],
    ["suguru-04",         "Suguru"],
    ["suguru-05",         "Suguru"],
    ["suguru-06",         "Suguru"],
    ["suguru-07",         "Suguru"],
    ["suguru-08",         "Suguru"],
    ["suguru-09",         "Suguru"],
    ["suguru-10",         "Suguru"],
    ["suguru-11",         "Suguru"],
    ["suguru-12",         "Suguru"],
    ["suguru-12a",        "Suguru"],
    ["suguru-13",         "Suguru"],
    ["suguru-14",         "Suguru"],
    ["suguru-15",         "Suguru"],
    ["suguru-16",         "Suguru"],
    ["suguru-17",         "Suguru"],
    ["star-01",           "Star Battle"],
    ["star-02",           "Star Battle"],
    ["star-03",           "Star Battle"],
    ["star-04",           "Star Battle"],
    ["star-05",           "Star Battle"],
    ["star-06",           "Star Battle"],
    ["star-07",           "Star Battle"],
    ["star-08",           "Star Battle"],
    ["star-09",           "Star Battle"],
    ["star-10",           "Star Battle"],
    ["star-11",           "Star Battle"],
    ["star-12",           "Star Battle"],
    ["star-13",           "Star Battle"],
    ["star-14",           "Star Battle"],
    ["star-15",           "Star Battle"],
    ["star-16",           "Star Battle"],
    ["light-01",          "Light Up"],
    ["light-02",          "Light Up"],
    ["light-03",          "Light Up"],
    ["light-04",          "Light Up"],
    ["light-05",          "Light Up"],
    ["light-06",          "Light Up"],
    ["light-07",          "Light Up"],
    ["light-08",          "Light Up"],
    ["light-09",          "Light Up"],
    ["light-10",          "Light Up"],
    ["light-11",          "Light Up"],
    ["light-12",          "Light Up"],
    ["light-13",          "Light Up"],
    ["questions",         "Questions"],
];


pages . forEach (entry => {
    entry [0]  = dir + "/" + entry [0] + ".html"
})

window . pages = pages
window . dir   = dir

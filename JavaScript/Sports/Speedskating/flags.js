//
class Flags {
    static info = {
        AUT: [
            "1804-08-11", "AUT-1804.svg",  // Austrian Empire
            "1867-03-30", "AUT-1804.svg",  // Austria-Hungary
            "1918-11-12", "AUT-1918.svg",  // Republic of German-Austria
            "1919-09-10", "AUT-1918.svg",  // First Austrian Republic
            "1934-05-01", "AUT-1934.svg",  // Federal State of Austria
            "1938-03-13", "GER-1935.svg",  // Ansluss
            "1945-04-27", "AUT-1945.svg",  // Second Austrian Republic
        ],
        BEL: [
            "1830-10-04", "BEL-1830.svg",
            "1831-01-23", "BEL-1831.svg",
        ],
        CAN: [
            "1965-02-15", "CAN-1965.svg",
        ],
        CHN: [
            "1949-10-01", "CHN-1949.svg",
        ],
        CZE: [
            "1920-03-30", "CZE-1920.svg",
        ],
        FIN: [
            "1918-05-28", "FIN-1918.svg",
        ],
        GER: [
            "1867-04-16", "GER-1867.svg",
            "1919-07-03", "GER-1919.svg",
            "1933-03-12", "GER-1933.svg",
            "1935-09-15", "GER-1935.svg",
            "1945-05-09",  undefined,
            "1990-10-03", "GER-1949.svg",
        ],
        GDR: [
            "1949-10-07", "GER-1949.svg",
            "1959-10-01", "GER-1959.svg",
            "1990-10-03",  undefined,
        ],
        FRG: [
            "1949-05-23", "GER-1949.svg",
            "1990-10-03",  undefined,
        ],

        HUN: [
            "1804-08-11", "AUT-1804.svg",
            "1848-04-11", "HUN-1848.svg",
            "1849-04-00", "AUT-1804.svg",
            "1867-07-28", "HUN-1848.svg",
            "1869-00-00", "HUN-1869.svg",
            "1874-02-09", "HUN-1874.svg",
            "1896-01-12", "HUN-1896.svg",
            "1915-11-06", "HUN-1915.svg",
            "1918-11-29", "HUN-1918.svg",
            "1919-03-21", "HUN-1919.svg",
            "1919-08-02", "HUN-1918.svg",
            "1919-08-08", "HUN-1915.svg",
            "1946-09-00", "HUN-1946.svg",  // From mid-to-late 1946
            "1949-08-20", "HUN-1949.svg",
            "1956-11-12", "HUN-1946.svg",
            "1957-05-23", "HUN-1957.svg",
        ],
        ITA: [
            "1861-03-17", "ITA-1861.svg",
            "1946-06-18", "ITA-1946.svg",
        ],
        JPN: [
            "1870-02-27", "JPN-1870.svg",
            "1999-08-13", "JPN-1999.svg",
        ],
        KOR: [
            "1948-08-15", "KOR-1948.svg",
            "1949-10-15", "KOR-1949.svg",
            "1984-02-21", "KOR-1984.svg",
            "1997-10-15", "KOR-1997.svg",
            "2011-05-30", "KOR-2011.svg",
        ],
        NED: [
            "1570",       "NED-1570.svg",
            "1596",       "NED-1596.svg",
        ],
        NOR: [
            "1818",       "SWE-1818.svg",
            "1844",       "NOR-1844.svg",
            "1900",       "NOR-1900.svg",
        ],
        POL: [
            "1919-06-28", "POL-1919.svg",  // Date??, using Treaty of Versailles
            "1927-12-13", "POL-1927.svg",
            "1980-01-31", "POL-1980.svg",
        ],
        RUS: [
            "1696",       "RUS-1696.svg",
            "1858-06-23", "RUS-1858.svg",
            "1883-05-08", "RUS-1696.svg",
            "1922-12-30",  undefined,
            "1991-12-21", "RUS-1991.svg",
            "1993",       "RUS-1696.svg",
        ],

        SWE: [
            "1818",       "SWE-1818.svg",
            "1844",       "SWE-1844.svg",
            "1905-11-01", "SWE-1905.svg",
            "1906-06-22", "SWE-1906.svg",
        ],
        URS: [
            "1922-12-30", "URS-1922.svg",
            "1923-11-12", "URS-1923.svg",
            "1924-04-18", "URS-1924.svg",
            "1936-12-05", "URS-1936.svg",
            "1955-08-19", "URS-1955.svg",
            "1991-12-26",  undefined,
        ],
        USA: [
            "1877-07-04", "USA-1877.svg",
            "1890-07-04", "USA-1890.svg",
            "1891-07-04", "USA-1891.svg",
            "1896-07-04", "USA-1896.svg",
            "1908-07-04", "USA-1908.svg",
            "1912-07-04", "USA-1912.svg",
            "1959-07-04", "USA-1959.svg",
            "1960-07-04", "USA-1960.svg",
        ],
    }
    static img (nation, date) {
        let flag = undefined
        if (Flags . info [nation]) {
            for (let i = 0; i < Flags . info [nation] . length; i += 2) {
                if (date == "last") {
                    if (Flags . info [nation] [i + 1]) {
                        flag = Flags . info [nation] [i + 1]
                    }
                }
                else if (date >= Flags . info [nation] [i]) {
                    flag = Flags . info [nation] [i + 1]
                }
            }
        }
        if (flag) {
            return `<img src = '../../../Images/Flags/${flag}' ` +
                        `title = '${nation}'>`
        }
        return nation
    }
}



//
//
//
const url = "https://commons.wikimedia.org/w/index.php"
const attributions = {
    "AUT-1804.svg": `ThrashedParanoid, and Peregrine981. Public Domain. ` +
                    `${url}?curid=567872`,
    "AUT-1918.svg": `SpinnerLaserzthe2nd. Public Domain. ` +
                    `${url}?curid=128635281`,
    "AUT-1934.svg": `David Liuzzo. CC BY-SA 3.0. ${url}?curid=21198668`,
    "AUT-1945.svg": `Public Domain. ${url}?curid=342954`,

    "BEL-1830.svg": `Public Domain. ${url}?curid=867196`,
    "BEL-1831.svg": `Dbenbenn and others. Public Domain. ${url}?curid=342972`,

    "CAN-1965.svg": `Public Domain. ${url}?curid=32276527`,

    "CHN-1949.svg": `SKopp. Public Domain. ${url}?curid=436175`,

    "CZE-1920.svg": `-xfi-. Public Domain. ${url}?curid=432452`,
    
    "GER-1867.svg": `B1mbo, and Madden. Public Domain. ${url}?curid=503938`,
    "GER-1919.svg": `Mmxx. Public Domain. ${url}?curid=6250745`,
    "GER-1933.svg": `SeNeKa. Public Domain. ${url}?curid=4844163`,
    "GER-1935.svg": `Public Domain. ${url}?curid=4713270`,
    "GER-1949.svg": `Public Domain, ${url}?curid=33285421`,
    "GER-1959.svg": `Flaggenentwurf. Public Domain. ${url}?curid=535824671`,

    "FIN-1918.svg": `Sebastian Koppehel. Public Domain. $[url}?curid=343054`,

    "HUN-1848.svg": `Thommy. Public Domain. ${url}?curid=57905765`,
    "HUN-1869.svg": `Thommy. Public Domain. ${url}?curid=57905869`,
    "HUN-1874.svg": `Thommy. Public Domain. ${url}?curid=57905982`,
    "HUN-1896.svg": `Thommy. Public Domain. ${url}?curid=50882761`,
    "HUN-1915.svg": `Thommy. Public Domain. ${url}?curid=29968090`,
    "HUN-1918.svg": `Thommy. Public Domain. ${url}?curid=29943564`,
    "HUN-1919.svg": `Thommy. Public Domain. ${url}?curid=52443381`,
    "HUN-1946.svg": `Thommy. Public Domain. ${url}?curid=2960235`,
    "HUN-1949.svg": `Thommy. Public Domain. ${url}?curid=2039045`,
    "HUN-1957.svg": `Denelson83. Public Domain. ${url}?curid=580205`,

    "ITA-1861.svg": `F l a n k e r. CC BY-SA 2.5. ${url}?curid=1155686`,
    "ITA-1946.svg": `Public Domain. ${url}?curid=33285604`,

    "JPN-1870.svg": `Kahusi. Public Domain. ${url}?curid=7552269`,
    "JPN-1999.svg": `Public Domain. ${url}?curid=33285241`,

    "KOR-1948.svg": `Public Domain. ${url}?curid=38524597`,
    "KOR-1949.svg": `Xfigpower. Public Domain. ${url}?curid=75217531`,
    "KOR-1984.svg": `Public Domain. ${url}?curid=38525283`,
    "KOR-1997.svg": `Public Domain. ${url}?curid=611164141`,
    "KOR-2011.svg": `Various. Public Domain. ${url}?curid=343752`,

    "NED-1570.svg": `Miyamaki, Oren neu dag, Artem Karimov, Golradir. ` +
                    `Public Domain, ${url}?curid=816789`,
    "NED-1596.svg": `By Zscout370. Public Domain. ${url}?curid=363168`,


    "NOR-1844.svg": `-xfi-. Public Domain. ${url}?curid=533397`,
    "NOR-1900.svg": `Gutten p\u{E5} Hemsen. Public Domain. ${url}curid=388300`,

    "POL-1919.svg": `Arvedui89. Public Domain. ${url}?curid=27721509`,
    "POL-1927.svg": `Arvedui89. Public Domain. ${url}?curid=27721508`,
    "POL-1980.svg": `Arvedui89. Public Domain, ${url}?curid=27721508`,

    "RUS-1696.svg": `Zscout370. Public Domain. ${url}?curid=33285605`,
    "RUS-1858.svg": `Public Domain. ${url}?curid=480250`,
    "RUS-1991.svg": `Pianist. Public Domain. ${url}?curid=132537456`,

    "SWE-1818.svg": `Lokal_Profil. Public Domain. ${url}?curid=5838046`,
    "SWE-1844.svg": `Jeltz. Public Domain. ${url}?curid=486863`,
    "SWE-1905.svg": `Liggliluff, Jon Harald Søby and others .` +
                    `Public Domain. ${url}?curid=86776520`,
    "SWE-1906.svg": `Public Domain. ${url}?curid=33285365`,

    "URS-1922.svg": `Public Domain. ${url}?curid=19822358`,
    "URS-1923.svg": `Supreme Dragon. Public Domain. ${url}?curid=57069825`,
    "URS-1924.svg": `Supreme Dragon. Public Domain. ${url}?curid=57069822`,
    "URS-1936.svg": `Rotemliss. Public Domain. ${url}?curid=549904`,
    "URS-1955.svg": `СС. Public Domain. ${url}?curid=343687`,

    "USA-1877.svg": `Jacobolus. Public Domain. ${url}?curid=733566`,
    "USA-1890.svg": `Jacobolus. Public Domain. ${url}?curid=733567`,
    "USA-1891.svg": `Jacobolus. Public Domain, ${url}?curid=733569`,
    "USA-1896.svg": `Jacobolus. Public Domain, ${url}?curid=733570`,
    "USA-1908.svg": `Jacobolus. Public Domain, ${url}?curid=733571`,
    "USA-1912.svg": `Jacobolus. Public Domain, ${url}?curid=733572`,
    "USA-1959.svg": `Jacobolus. Public Domain. ${url}?curid=733573`,
    "USA-1960.svg": `Dbenbenn, Zscout370, Jacobolus, Indolences, and ` +
                    `Technion. Public Domain. ${url}?curid=11035750`,
}


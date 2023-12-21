//
class Flags {
    static info = {
        FIN: [
            "1918-05-28", "finland-1918.svg",
        ],
        NED: [
            "0",          "netherlands.svg",
        ],
        NOR: [
            "1818",       "sweden-1818.svg",
            "1844",       "norway-1844.svg",
            "1900",       "norway-1900.svg",
        ],
        RUS: [
            "1696",       "russia-1696.svg",
            "1858-06-23", "russia-1858.svg",
            "1883-05-08", "russia-1696.svg",
            "1922-12-30",  undefined,
            "1991-12-21", "russia-1991.svg",
            "1993",       "russia-1696.svg",
        ],

        SWE: [
            "1818",       "sweden-1818.svg",
            "1844",       "sweden-1844.svg",
            "1905-11-01", "sweden-1905.svg",
            "1906-06-22", "sweden-1906.svg",
        ],
        URS: [
            "1922-12-30", "ussr-1922.svg",
            "1923-11-12", "ussr-1923.svg",
            "1924-04-18", "ussr-1924.svg",
            "1936-12-05", "ussr-1936.svg",
            "1955-08-19", "ussr-1955.svg",
            "1991-12-26",  undefined,
        ],
    }
    static img (nation, date) {
        let flag = undefined
        if (Flags . info [nation]) {
            for (let i = 0; i < Flags . info [nation] . length; i += 2) {
                if (date >= Flags . info [nation] [i]) {
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
    "finland-1918.svg": `Sebastian Koppehel, Public Domain, ` +
                        `$[url}?curid=343054`,

    "netherlands.svg": `By Zscout370 - Own work, Public Domain, `        +
                       `${url}?curid=363168`,

    "norway-1844.svg": `By -xfi- - Own work, Public Domain, `            +
                       `${url}?curid=533397`,
    "norway-1900.svg": `By Gutten p\u{E5} Hemsen - Own work, Public Domain,` +
                       `${url}curid=388300`,

    "russia-1696.svg": `By Zscout370, Public Domain, ${url}?curid=33285605`,
    "russia-1858.svg": `Public Domain, ${url}?curid=480250`,
    "russia-1991.svg": `By Pianist, Public Domain, ${url}?curid=132537456`,

    "sweden-1818.svg": `By Lokal_Profil, Public Domain, ${url}?curid=5838046`,
    "sweden-1844.svg": `By Jeltz - Own work, Public Domain, ` +
                       `${url}?curid=486863`,
    "sweden-1905.svg": `By Liggliluff, Jon Harald Søby and others.` +
                       `Public Domain, ${url}?curid=86776520`,
    "sweden-1906.svg": `Public Domain, ${url}?curid=33285365`,

    "ussr-1922.svg":   `Public Domain, ${url}?curid=19822358`,
    "ussr-1923.svg":   `By Supreme Dragon - Own work, [2], Public Domain, ` +
                       `${url}?curid=57069825`,
    "ussr-1924.svg":   `By Supreme Dragon - Own work, [2], Public Domain, ` +
                       `${url}?curid=57069822`,
    "ussr-1936.svg":   `By created by rotemliss, Public Domain, ` +
                       `${url}?curid=549904`,
    "ussr-1955.svg":   `By СССР - http://pravo.levonevsky.or` +
                       `Public Domain, ${url}?curid=343687`,
}


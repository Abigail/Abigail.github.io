let PIECE_SVG = {
    knight: {
        svg: [{path:   "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 " +
                       "C 15,30 25,32.5 23,18",},

              {path:   "M 24,18 C 24.38,20.91 18.45,25.37 16,27 " +
                       "C 13,29 13.18,31.34 11,31 " +
                       "C 9.958,30.06 12.41,27.96 11,28 " +
                       "C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 " +
                       "C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 " +
                       "C 13.27,9.506 13.5,8.5 13.5,7.5 " +
                       "C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 " +
                       "C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"},

              {path:   "M 9.5 25.5 " +
                       "A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
               fill:   "black",},

              {path:   "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 " +
                       "A 0.5 1.5 0 1 1  15 15.5 z",
               transform: {a: 0.866, b: 0.5,   c: -0.5,
                           d: 0.866, e: 9.693, f: -5.173},
               fill:   "black",},
        ],
        url:    "https://commons.wikimedia.org/wiki/File:Chess_nlt45.svg",
        author: "https://commons.wikimedia.org/wiki/User:Cburnett",
    },

    wazir: {
        svg: '<g transform="translate(0,-8)">' +
                 '<path d="M 487.11262,1845.2434 H 1560.8875 ' +
                          'c -125.7574,-239.2033 -308.6887,-360.091 ' +
                          '-537.3024,-360.3389 -207.89956,-0.9538 ' +
                          '-394.72165,118.0517 -536.47248,360.3389 z"' +
                       'style="fill:#f9f9f9;fill-opacity:1;stroke:#000000;' +
                              'stroke-width:80.25;stroke-linecap:butt;' +
                              'stroke-linejoin:miter;stroke-miterlimit:4;' +
                              'stroke-dasharray:none;stroke-opacity:1"/>' +
   `<ellipse
       transform="matrix(1.2206726,0,0,1.4495264,-241.85826,89.825231)"
       style="fill:#f9f9f9;fill-opacity:1;stroke:#000000;stroke-width:60.32986832;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       cx="1037.017"
       cy="702.91528"
       rx="446.91525"
       ry="373.15256" />
    <g transform="matrix(1.07,0,0,1.07,-73.321389,-37.350307)">
      <path
         style="fill:none;stroke:#000000;stroke-width:75;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 1024.668,911.53802 V 1229.2479" />
      <path
         style="fill:none;stroke:#000000;stroke-width:75;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 863.94359,1071.6615 H 1181.654" />
    </g>
 </g>
`,
        scale: 45 / 2048
    },
}

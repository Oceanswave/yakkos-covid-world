import moment from 'moment';
import { Segment } from "./Segment";

export const segments: Segment[] = [
    {
        name: "Intro",
        text: `Yacko's Covid-19 World - ${moment().format('MMMM Do YYYY, h.mm.ss a')} EST`,
        fontSize: 124,
        x: '(main_w/2-text_w/2)',
        y: '(main_h-text_h)',
        frame: 45,
        endFrame: 185
    },
    {
        name: "United States",
        alt: "USA",
        frame: 304,
        rgb: "Asdf"
    },
    {
        name: "Canada",
        frame: 319
    },
    {
        name: "Mexico",
        frame: 332
    },
    {
        name: "Panama",
        frame: 346
    },
    {
        name: "Haiti",
        frame: 360
    },
    {
        name: "Jamaica",
        frame: 374
    },
    {
        name: "Peru",
        frame: 387,
        endFrame: 400
    },
    // Break
    {
        name: "Dominican Republic",
        frame: 414
    },
    {
        name: "Cuba",
        frame: 441
    },
    {
        name: "Caribbean",
        frame: 457
    },
    {
        name: "Greenland",
        frame: 470
    },
    {
        name: "El Salvador",
        frame: 484,
        endFrame: 500
    },
    // Break
    {
        name: "Puerto Rico",
        frame: 525
    },
    {
        name: "Colombia",
        frame: 539
    },
    {
        name: "Venezuela",
        frame: 553
    },
    {
        name: "Honduras",
        frame: 581
    },
    {
        name: "Guyana",
        frame: 595,
        endFrame: 610
    },
    // Break
    {
        name: "Guatemala",
        frame: 638
    },
    {
        name: "Bolivia",
        frame: 650
    },
    {
        name: "Argentina",
        frame: 664
    },
    {
        name: "Ecuador",
        frame: 690
    },
    {
        name: "Chile",
        frame: 704
    },
    {
        name: "Brazil",
        frame: 719,
        endFrame: 730
    },
    // Break
    {
        name: "Costa Rica",
        frame: 745
    },
    {
        name: "Belize",
        frame: 760
    },
    {
        name: "Nicaragua",
        frame: 774
    },
    {
        name: "Bermuda",
        frame: 788
    },
    {
        name: "Bahamas",
        frame: 803
    },
    {
        name: "Tobago",
        alt: "Trinidad and Tobago",
        frame: 815
    },
    {
        name: "San Juan",
        alt: "Puerto Rico",
        frame: 829,
        endFrame: 840
    },
    // Break
    {
        name: "Paraguay",
        frame: 857
    },
    {
        name: "Uruguay",
        frame: 872
    },
    {
        name: "Suriname",
        frame: 885
    },
    {
        name: "French Guiana",
        frame: 899
    },
    {
        name: "Barbados",
        frame: 928
    },
    {
        name: "Guam",
        frame: 943,
        endFrame: 955
    },
    // *******
    // Section Break
    // *******
    {
        name: "Norway",
        frame: 1048
    },
    {
        name: "Sweden",
        frame: 1061
    },
    {
        name: "Iceland",
        frame: 1074
    },
    {
        name: "Finland",
        frame: 1088
    },
    {
        name: "Germany",
        frame: 1101,
        endFrame: 1120
    },
    // Break
    {
        name: "Switzerland",
        frame: 1153
    },
    {
        name: "Austria",
        frame: 1166
    },
    {
        name: "Czechoslovakia",
        alt: "Czechia",
        frame: 1179
    },
    {
        name: "Italy",
        frame: 1206
    },
    {
        name: "Turkey",
        frame: 1219
    },
    {
        name: "Greece",
        frame: 1233,
        endFrame: 1245,
    },
    // Break
    {
        name: "Poland",
        frame: 1259
    },
    {
        name: "Romania",
        frame: 1272
    },
    {
        name: "Scotland",
        alt: "UK",
        frame: 1286
    },
    {
        name: "Albania",
        frame: 1300
    },
    {
        name: "Ireland",
        frame: 1313
    },
    {
        name: "Russia",
        frame: 1328
    },
    {
        name: "Oman",
        frame: 1340,
        endFrame: 1355
    },
    // Break
    {
        name: "Bulgaria",
        frame: 1366
    },
    {
        name: "Saudi Arabia",
        frame: 1380
    },
    {
        name: "Hungary",
        frame: 1406
    },
    {
        name: "Cyprus",
        frame: 1420
    },
    {
        name: "Iraq",
        frame: 1433
    },
    {
        name: "Iran",
        frame: 1446,
        endFrame: 1460
    },
    // Break
    {
        name: "Syria",
        frame: 1472
    },
    {
        name: "Lebanon",
        frame: 1486
    },
    {
        name: "Israel",
        frame: 1500
    },
    {
        name: "Jordan",
        frame: 1513
    },
    {
        name: "Yemen",
        alt: "Myanmar",
        frame: 1526
    },
    {
        name: "Kuwait",
        frame: 1540
    },
    {
        name: "Bahrain",
        frame: 1555,
        endFrame: 1570
    },
    // Break
    {
        name: "Netherlands",
        frame: 1580
    },
    {
        name: "Luxembourg",
        frame: 1594
    },
    {
        name: "Belgium",
        frame: 1605
    },
    {
        name: "Portugal",
        frame: 1619
    },
    {
        name: "France",
        frame: 1632
    },
    {
        name: "England",
        alt: "UK",
        frame: 1640
    },
    {
        name: "Denmark",
        frame: 1646
    },
    {
        name: "Spain",
        frame: 1659,
        endFrame: 1675,
    },
    // *******
    // Section Break
    // *******
    {
        name: "India",
        frame: 1765
    },
    {
        name: "Pakistan",
        frame: 1780
    },
    {
        name: "Burma",
        alt: "Myanmar",
        frame: 1793
    },
    {
        name: "Afghanistan",
        frame: 1805
    },
    {
        name: "Thailand",
        frame: 1819
    },
    {
        name: "Nepal",
        frame: 1831
    },
    {
        name: "Bhutan",
        frame: 1846,
        endFrame: 1860,
    },
    // Break
    {
        name: "Kampuchea",
        alt: "Cambodia",
        frame: 1874
    },
    {
        name: "Malaysia",
        frame: 1885
    },
    {
        name: "Bangladesh",
        frame: 1899
    },
    {
        name: "Asia",
        frame: 1918
    },
    {
        name: "China",
        frame: 1925
    },
    {
        name: "Korea",
        alt: "S. Korea",
        frame: 1939
    },
    {
        name: "Japan",
        frame: 1951,
        endFrame: 1965
    },
    // Break
    {
        name: "Mongolia",
        frame: 1979
    },
    {
        name: "Laos",
        frame: 1993
    },
    {
        name: "Tibet",
        frame: 2005
    },
    {
        name: "Indonesia",
        frame: 2019
    },
    {
        name: "Philippines",
        frame: 2032
    },
    {
        name: "Taiwan",
        frame: 2059,
        endFrame: 2072,
    },
    // Break
    {
        name: "Sri Lanka",
        frame: 2085
    },
    {
        name: "New Guinea",
        alt: "Papua New Guinea",
        frame: 2099
    },
    {
        name: "Sumatra",
        alt: "Indonesia",
        frame: 2113
    },
    {
        name: "New Zealand",
        frame: 2124
    },
    {
        name: "Borneo",
        alt: "Brunei",
        frame: 2138
    },
    {
        name: "Vietnam",
        frame: 2165,
        endFrame: 2180,
    },
    // Break
    {
        name: "Tunisia",
        frame: 2192
    },
    {
        name: "Morocco",
        frame: 2204
    },
    {
        name: "Uganda",
        frame: 2219
    },
    {
        name: "Angola",
        frame: 2233
    },
    {
        name: "Zimbabwe",
        frame: 2244
    },
    {
        name: "Djibouti",
        frame: 2260
    },
    {
        name: "Botswana",
        frame: 2270,
        endFrame: 2285,
    },
    // Break
    {
        name: "Mozambique",
        frame: 2299
    },
    {
        name: "Zambia",
        frame: 2313
    },
    {
        name: "Swaziland",
        alt: "Eswatini",
        frame: 2324
    },
    {
        name: "Gambia",
        frame: 2341
    },
    {
        name: "Guinea",
        frame: 2351
    },
    {
        name: "Algeria",
        frame: 2364
    },
    {
        name: "Ghana",
        frame: 2378,
        endFrame: 2416
    },
    // Break
    {
        name: "Burundi",
        frame: 2476
    },
    {
        name: "Lesotho",
        alt: "South Africa",
        frame: 2487
    },
    {
        name: "Malawi",
        frame: 2499
    },
    {
        name: "Togo",
        frame: 2509
    },
    {
        name: "The Spanish Sahara is gone",
        alt: "Morocco",
        frame: 2521,
        endFrame: 2550
    },
    // Break
    {
        name: "Niger",
        frame: 2571
    },
    {
        name: "Nigeria",
        frame: 2585
    },
    {
        name: "Chad",
        frame: 2595
    },
    {
        name: "Liberia",
        frame: 2606
    },
    {
        name: "Egypt",
        frame: 2620
    },
    {
        name: "Benin",
        frame: 2630
    },
    {
        name: "Gabon",
        frame: 2642
    },
    // Break
    {
        name: "Tanzania",
        frame: 2666
    },
    {
        name: "Somalia",
        frame: 2680
    },
    {
        name: "Kenya",
        frame: 2690
    },
    {
        name: "Mali",
        frame: 2702
    },
    {
        name: "Sierra Leone",
        frame: 2715
    },
    {
        name: "Algiers",
        alt: "Algeria",
        frame: 2740
    },
    // Break
    {
        name: "Dahomey",
        alt: "Benin",
        frame: 2762
    },
    {
        name: "Namibia",
        frame: 2773
    },
    {
        name: "Senegal",
        frame: 2786
    },
    {
        name: "Libya",
        frame: 2800
    },
    {
        name: "Cameroon",
        frame: 2810
    },
    {
        name: "Congo",
        frame: 2822
    },
    {
        name: "Zaire",
        alt: "Congo",
        frame: 2835,
        endFrame: 2845
    },
    // Break
    {
        name: "Ethiopia",
        frame: 2857
    },
    {
        name: "Guinea",
        frame: 2870
    },
    {
        name: "Madagascar",
        frame: 2894
    },
    {
        name: "Rwanda",
        frame: 2905
    },
    {
        name: "Maore",
        alt: "New Caledonia",
        frame: 2917
    },
    {
        name: "Cayman",
        alt: "Cayman Islands",
        frame: 2929,
        endFrame: 2942
    },
    // Break
    {
        name: "Hong Kong",
        frame: 2956
    },
    {
        name: "Abu Dhabi",
        alt: "UAE",
        frame: 2967
    },
    {
        name: "Qatar",
        frame: 2977
    },
    {
        name: "Yugoslavia",
        alt: "Croatia",
        frame: 2990,
        endFrame: 3004
    },
    // Break
    {
        name: "Crete",
        alt: "Greece",
        frame: 3015
    },
    {
        name: "Mauritania",
        frame: 3025,
        endFrame: 3035
    },
    {
        name: "Transylvania",
        alt: "Romania",
        frame: 3050
    },
    // Break
    {
        name: "Monaco",
        frame: 3061
    },
    {
        name: "Liechtenstein",
        frame: 3074
    },
    {
        name: "Malta",
        frame: 3085
    },
    {
        name: "Palestine",
        frame: 3097
    },
    {
        name: "Fiji",
        frame: 3110
    },
    {
        name: "Australia",
        frame: 3120
    },
    {
        name: "Sudan",
        frame: 3134,
        endFrame: 3155
    },
]
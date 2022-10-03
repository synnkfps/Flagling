window.onload = showRandom;
var countries = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BH', 'BS', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'];
var names = [
    ['Afghanistan'],
    ['Åland Islands', 'Aland Islands', 'Aland Island'],
    ['Albania'],
    ['Algeria'],
    ['American Samoa'],
    ['Andorra'],
    ['Angola'],
    ['Anguilla'],
    ['Antarctica', 'Antartica', 'Antartida'],
    ['Antigua and Barbuda', 'Barbuda', 'Antigua'],
    ['Argentina'],
    ['Armenia'],
    ['Aruba'],
    ['Australia'],
    ['Austria'],
    ['Azerbaijan'],
    ['Bahrain'],
    ['Bahamas'],
    ['Bangladesh'],
    ['Barbados'],
    ['Belarus'],
    ['Belgium'],
    ['Belize'],
    ['Benin'],
    ['Bermuda'],
    ['Bhutan', 'Buthan'],
    ['Bolivia'],
    ['Bonaire Sint Eustatius and Saba', 'Bonaire', 'Saba'],
    ['Bosnia and Herzegovina', 'Bosnia', 'Herzegovina'],
    ['Botswana'],
    ['Bouvet Island'],
    ['Brazil'],
    ['British Indian Ocean Territory'],
    ['Brunei Darussalam'],
    ['Bulgaria'],
    ['Burkina Faso'],
    ['Burundi'],
    ['Cambodia'],
    ['Cameroon'],
    ['Canada'],
    ['Cape Verde'],
    ['Cayman Islands'],
    ['Central African Republic'],
    ['Chad'],
    ['Chile'],
    ['China'],
    ['Christmas Island'],
    ['Cocos (Keeling) Islands', 'Cocos Islands', 'Cocos Island', 'Keeling'],
    ['Colombia'],
    ['Comoros'],
    ['Congo'],
    ['Democratic Republic of the Congo', 'Congo'],
    ['Cook Islands', 'Cook Island'],
    ['Costa Rica'],
    ["Côte d'Ivoire", 'Cote dIvoire', "Cote d'Ivoire", 'Ivory Coast'],
    ['Croatia'],
    ['Cuba'],
    ['Curaçao', 'Curacao'],
    ['Cyprus'],
    ['Czech Republic', 'Czech'],
    ['Denmark'],
    ['Djibouti'],
    ['Dominica'],
    ['Dominican Republic'],
    ['Ecuador'],
    ['Egypt'],
    ['El Salvador'],
    ['Equatorial Guinea'],
    ['Eritrea'],
    ['Estonia'],
    ['Ethiopia'],
    ['Falkland Islands (Malvinas)', "Malvinas", "Falkland Islands"],
    ['Faroe Islands'],
    ['Fiji'],
    ['Finland'],
    ['France'],
    ['French Guiana'],
    ['French Polynesia', 'Polynesia'],
    ['French Southern Territories'],
    ['Gabon'],
    ['Gambia'],
    ['Georgia'],
    ['Germany'],
    ['Ghana'],
    ['Gibraltar'],
    ['Greece'],
    ['Greenland'],
    ['Grenada'],
    ['Guadeloupe'],
    ['Guam'],
    ['Guatemala'],
    ['Guernsey'],
    ['Guinea'],
    ['Guinea-Bissau', "Guinea Bissau"],
    ['Guyana'],
    ['Haiti'],
    ['Heard Island and McDonald Islands', "Heard Island", "McDonald Island"],
    ['Holy See', 'Vatican', "Vatican City"],
    ['Honduras'],
    ['Hong Kong'],
    ['Hungary'],
    ['Iceland'],
    ['India'],
    ['Indonesia'],
    ['Iran'],
    ['Iraq'],
    ['Ireland'],
    ['Isle of Man'],
    ['Israel'],
    ['Italy'],
    ['Jamaica'],
    ['Japan'],
    ['Jersey'],
    ['Jordan'],
    ['Kazakhstan'],
    ['Kenya'],
    ['Kiribati'],
    ["Democratic People's Republic of Korea", 'North Korea'],
    ["Republic of Korea", "Korea", "South Korea"],
    ['Kuwait'],
    ['Kyrgyzstan'],
    ["Lao People's Democratic Republic", "Laos", "Lao"],
    ['Latvia'],
    ['Lebanon'],
    ['Lesotho'],
    ['Liberia'],
    ['Libya', 'Lybia', 'Libia'],
    ['Liechtenstein'],
    ['Lithuania'],
    ['Luxembourg'],
    ['Macao'],
    ["Macedonia"],
    ['Madagascar'],
    ['Malawi'],
    ['Malaysia'],
    ['Maldives'],
    ['Mali'],
    ['Malta'],
    ['Marshall Islands'],
    ['Martinique'],
    ['Mauritania'],
    ['Mauritius'],
    ['Mayotte'],
    ['Mexico'],
    ["Micronesia"],
    ["Moldova"],
    ['Monaco'],
    ['Mongolia'],
    ['Montenegro'],
    ['Montserrat'],
    ['Morocco'],
    ['Mozambique'],
    ['Myanmar'],
    ['Namibia'],
    ['Nauru'],
    ['Nepal'],
    ['Netherlands'],
    ['New Caledonia'],
    ['New Zealand'],
    ['Nicaragua'],
    ['Niger'],
    ['Nigeria'],
    ['Niue'],
    ['Norfolk Island'],
    ['Northern Mariana Islands'],
    ['Norway'],
    ['Oman'],
    ['Pakistan'],
    ['Palau'],
    ["Palestine"],
    ['Panama'],
    ['Papua New Guinea'],
    ['Paraguay'],
    ['Peru'],
    ['Philippines'],
    ['Pitcairn'],
    ['Poland'],
    ['Portugal'],
    ['Puerto Rico'],
    ['Qatar'],
    ['Réunion', 'Reunion'],
    ['Romania', 'Romenia'],
    ['Russian Federation', 'Russia'],
    ['Rwanda'],
    ['Saint Barthélemy', 'Saint Barthelemy'],
    ["Saint Helen"],
    ['Saint Kitts and Nevis'],
    ['Saint Lucia'],
    ['Saint Martin (French part)'],
    ['Saint Pierre and Miquelon'],
    ['Saint Vincent and the Grenadines'],
    ['Samoa'],
    ['San Marino'],
    ['Sao Tome and Principe'],
    ['Saudi Arabia'],
    ['Senegal'],
    ['Serbia'],
    ['Seychelles'],
    ['Sierra Leone'],
    ['Singapore'],
    ['Sint Maarten'],
    ['Slovakia'],
    ['Slovenia'],
    ['Solomon Islands'],
    ['Somalia'],
    ['South Africa'],
    ['South Georgia and the South Sandwich Islands', 'Sandwich', 'Sandwich Islands'],
    ['South Sudan'],
    ['Spain'],
    ['Sri Lanka'],
    ['Sudan'],
    ['Suriname'],
    ['Svalbard and Jan Mayen'],
    ['Swaziland'],
    ['Sweden'],
    ['Switzerland'],
    ['Syria'],
    ["Taiwan"],
    ['Tajikistan'],
    ["Tanzania"],
    ['Thailand'],
    ['Timor-Leste', 'Timor Leste'],
    ['Togo'],
    ['Tokelau'],
    ['Tonga'],
    ['Trinidad and Tobago'],
    ['Tunisia'],
    ['Turkey'],
    ['Turkmenistan'],
    ['Turks and Caicos Islands'],
    ['Tuvalu'],
    ['Uganda'],
    ['Ukraine'],
    ['United Arab Emirates'],
    ['United Kingdom'],
    ['United States'],
    ['United States Minor Outlying Islands', 'United States'],
    ['Uruguay'],
    ['Uzbekistan'],
    ['Vanuatu'],
    ["Venezuela"],
    ['Viet Nam'],
    ["Virgin Islands British"],
    ["Virgin Islands U.S.", "Virgin Islands U.S"],
    ['Wallis and Futuna'],
    ['Western Sahara'],
    ['Yemen'],
    ['Zambia'],
    ['Zimbabwe']
]

var num = Math.floor(Math.random() * countries.length)
var rand = countries[num];

var old_guess = '';

function look(string, to_compare) {
    var to_compare = names[num][0];
    var score, index;
    score = 0;

    for (let index = 0; index < string.length; index++) {
        const element = string[index];

        if (to_compare.toLowerCase()[index] === element) {
            score++;
        }
    }
    return score
}

function find(s, s2) {
    var found = false;
    for (let i = 0; i < names[num].length; i++) {
        if (names[num][i].toLowerCase() === s.toLowerCase()) {
            found = true;
            break;
        }
    }
    return found
}

function genRandom() {
    num = Math.floor(Math.random() * countries.length)
    rand = countries[num];
}

function checkKey(e) {
    if (e.keyCode === 13) {
        //alert(`${num} | ${countries[num]} | ${names[num]}`);
        let guess = document.getElementById('guess').value;
        old_guess = guess
        // guess.toLowerCase() === names[num].toLowerCase()
        // console.log(`Comparing ${guess} with ${names[num][names[num].length-1]} | Score: ${look(guess, names[num][names[num].length-1])} out of ${names[num][names[num].length-1].length} | Diference: ${names[num][names[num].length-1].length - look(guess, names[num][names[num].length-1])}`);
        let found = find(guess);
        if (found) {
            document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) + 1;
        } else {
            if (names[num][names[num].length - 1].length - look(guess, names[num][names[num].length - 1]) <= 2) {
                document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) + 1;
            } else {
                document.getElementById('score').textContent = '0';
            }
        }
        genRandom();
        showRandom();
        document.getElementById('guess').value = ''
    }
}

function showRandom() {
    document.getElementById('log').textContent = `Generated: ${countries[num]} | ${names[num].join(' or ')} \n${document.getElementById('log').textContent}`
    document.getElementById('flag').src = `https://countryflagsapi.com/png/` + rand;
    //document.getElementById('flag-name').textContent = rand + ' | ' + names[num] + ' | ' + num;
}

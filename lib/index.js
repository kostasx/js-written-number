/*global writtenNumber */

'use strict';
exports = module.exports = writtenNumber;

var baseCardinals = exports.baseCardinals = {
  en: {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  },
  fr: {
    0: "zéro",
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix",
    11: "onze",
    12: "douze",
    13: "treize",
    14: "quatorze",
    15: "quinze",
    16: "seize",
    17: "dix-sept",
    18: "dix-huit",
    19: "dix-neuf",
    20: "vingt",   
    30: "trente",
    40: "quarante",    
    50: "cinquante",
    60: "soixante",  
    70: "soixante-dix",
    80: "quatre-vingts",
    90: "quatre-vingt-dix"
  },
  el: {
    0: 'μηδέν',
    1: 'ένα',
    2: 'δύο',
    3: 'τρία',
    4: 'τέσσερα',
    5: 'πέντε',
    6: 'έξι',
    7: 'επτά',
    8: 'οκτώ',
    9: 'εννέα',
    10: 'δέκα',
    11: 'έντεκα',
    12: 'δώδεκα',
    13: 'δεκατρία',
    14: 'δεκατέσσερα',
    15: 'δεκαπέντε',
    16: 'δεκαέξι',
    17: 'δεκαεπτά',
    18: 'δεκαοκτώ',
    19: 'δεκαεννιά',
    20: 'είκοσι',
    30: 'τριάντα',
    40: 'σαράντα',
    50: 'πενήντα',
    60: 'εξήντα',
    70: 'εβδομήντα',
    80: 'ογδόντα',
    90: 'ενενήντα'
  }
};

var units = exports.units = {
  en: [
    'hundred',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion',
    'undecillion',
    'duodecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion'
  ],
  fr: [
    'hundred',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion',
    'undecillion',
    'duodecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion'
  ],
  el: [
    [
    'εκατό',
    'διακόσια',
    'τριακόσια',
    'τετρακόσια',
    'πεντακόσια',
    'εξακόσια',
    'επτακόσια',
    'οκτακόσια',
    'εννιακόσια'
    ],
    'χίλια',
    'εκατομμύρια',
    'δισεκατομμύρια',
    'τρίσεκατομμύρια',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion',
    'undecillion',
    'duodecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion'
  ]
};

var mults = function(lang){
  return units[lang].map(function(x, i){
    if(i === 0) return 100;
    else return Math.pow(1000, i);
  });
}

function extend( target, source ) {

  var merged = Object.create(target);
  Object.keys(source).map(function (prop) {  prop in merged && (merged[prop] = source[prop]);  });
  return merged;

};

function writtenNumber( n, options ) {

  var defaults = {
    lang: "en",
    noAnd: false
  }

  options = options || {};
  options = extend( defaults, options );

  if(n < 20) {
    console.log("options.lang",options.lang);
    return baseCardinals[options.lang][n];
  }

  if(n < 100) {
    var dec = Math.floor(n / 10) * 10;
    var unit = n - dec;
    if(unit) {
      return baseCardinals[options.lang][dec] + '-' + writtenNumber(unit,options);
    }
    return baseCardinals[options.lang][dec];
  }

  var m = n % 100;
  var ret = [];
  if ( m ) {

    if(!options.noAnd) {
      ret.push('and ' + writtenNumber(m));
    } else ret.push(writtenNumber(m));
    n -= m;

  } else { 

    ret = []; 

  }

  var _mults = mults(options.lang)

  for (var i = 0, len = units[options.lang].length; i < len; i++) {

    var r = Math.floor(n / _mults[i]); // WAS: multis[i]

    if ( i === 0 ) {

      r %= 10;

    } else { 

        r %= 1000; 

    }

    if ( r ) {

        if ( typeof units[options.lang][i] !== "string"  ){

            ret.push( units[options.lang][i][r-1] );

        } else {

            ret.push(writtenNumber(r, { noAnd: true }) + ' ' + units[options.lang][i]);

        }


    }

  }
  return ret.reverse().join(' ');
}

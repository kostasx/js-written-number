'use strict'; /* global describe, it */
var should = require('should');
var writtenNumber = require('..');

describe('written-number', function() {
  describe('writtenNumber(n)', function() {
    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('three');
      writtenNumber(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('thirteen');
      writtenNumber(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('twenty');
      writtenNumber(25).should.equal('twenty-five');
      writtenNumber(88).should.equal('eighty-eight');
      writtenNumber(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200).should.equal('two hundred');
      writtenNumber(1234).should.equal('one thousand two hundred and thirty-four');
      writtenNumber(4323).should.equal('four thousand three hundred and twenty-three');
      writtenNumber(242).should.equal('two hundred and forty-two');
      writtenNumber(4323000).should.equal('four million three hundred twenty-three thousand');
      writtenNumber(4323055).should.equal('four million three hundred twenty-three thousand and fifty-five');
    });

  });
});

/*** FRENCH LANGUAGE TEST ***/

describe('written-number in French', function() {
  describe('writtenNumber(n, { lang: "fr" })', function() {
    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3, { lang: "fr" }).should.equal('trois');
      writtenNumber(8, { lang: "fr" }).should.equal('huit');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13, { lang: "fr" }).should.equal('treize');
      writtenNumber(19, { lang: "fr" }).should.equal('dix-neuf');
    });

    // it('correctly converts numbers < 100', function() {
    //   writtenNumber(20, { lang: "fr" }).should.equal('vingt');
    //   writtenNumber(25, { lang: "fr" }).should.equal('vingt-cinq');
    //   writtenNumber(88, { lang: "fr" }).should.equal('quatre-vingt-huit');
    //   writtenNumber(73, { lang: "fr" }).should.equal('soixante-treize');
    // });

//     it('correctly converts numbers < 1000', function() {
//       writtenNumber(200, { lang: "fr" }).should.equal('διακόσια');
//       writtenNumber(1234, { lang: "fr" }).should.equal('χίλια διακόσια τριάντα-τέσσερα');
//       writtenNumber(4323, { lang: "fr" }).should.equal('τέσσερις χιλιάδες τριακόσια είκοσι-τρία');
//       writtenNumber(242, { lang: "fr" }).should.equal('διακόσια σαράντα δύο');
//       writtenNumber(4323000, { lang: "fr" }).should.equal('τέσσερα εκατομμύρια τριακόσιες είκοσι τρεις χιλιάδες');
//       writtenNumber(4323055, { lang: "fr" }).should.equal('τέσσερα εκατομμύρια τριακόσιες είκοσι τρεις χιλιάδες και πενήντα πέντε');
//     });

  });
});

/*** GREEK LANGUAGE TEST ***/

describe('written-number in Greek', function() {
  describe('writtenNumber(n, { lang: "el" })', function() {
    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3, { lang: "el" }).should.equal('τρία');
      writtenNumber(8, { lang: "el" }).should.equal('οκτώ');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13, { lang: "el" }).should.equal('δεκατρία');
      writtenNumber(19, { lang: "el" }).should.equal('δεκαεννιά');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20, { lang: "el" }).should.equal('είκοσι');
      writtenNumber(25, { lang: "el" }).should.equal('είκοσι-πέντε');
      writtenNumber(88, { lang: "el" }).should.equal('ογδόντα-οκτώ');
      writtenNumber(73, { lang: "el" }).should.equal('εβδομήντα-τρία');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200, { lang: "el" }).should.equal('διακόσια');
    //   writtenNumber(1234, { lang: "el" }).should.equal('χίλια διακόσια τριάντα-τέσσερα');
    //   writtenNumber(4323, { lang: "el" }).should.equal('τέσσερις χιλιάδες τριακόσια είκοσι-τρία');
    //   writtenNumber(242, { lang: "el" }).should.equal('διακόσια σαράντα δύο');
    //   writtenNumber(4323000, { lang: "el" }).should.equal('τέσσερα εκατομμύρια τριακόσιες είκοσι τρεις χιλιάδες');
    //   writtenNumber(4323055, { lang: "el" }).should.equal('τέσσερα εκατομμύρια τριακόσιες είκοσι τρεις χιλιάδες και πενήντα πέντε');
    });

  });
});

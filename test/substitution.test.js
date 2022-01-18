// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe(`substitution()`, () => {
  describe(`user input errors`, () => {
    it(`should return  false is no substitution key provided`, () => {
      const actual = substitution('forks');
      expect(actual).to.be.false;
    });
    it(`should return false if key is not exactly 26 characters`, () => {
      const actual = substitution('yup', '123');
      expect(actual).to.be.false;
    });
    it(`should return false if key is not 26 unique characters`, () => {
      const actual = substitution('yup', 'aaaaaaaaaiiiiiiillllllllll');
      expect(actual).to.be.false;
    });
  });
  describe(`while encoding`, () => {
    it(`should create a secret message using key provided`, () => {
      const actual = substitution('the brown fox jumps quickly', `zaqxswcdevfrbgtnhymjukilop`);
      const expected = `jds aytig wtl vubnm hueqfro`;
      expect(actual).to.equal(expected);
    });
    it(`should function with any key of 26 unique characters`, () => {
      const actual = substitution('the quick brown fox jumps quickly', `!@#$%^&*()_+|}{":?><=-[]/;`);
      const expected = `<*% :=(#_ @?{[} ^{] )=|"> :=(#_+/`;
      expect(actual).to.equal(expected);
    });
    it(`should maintain spaces`, () => {
      const actual = substitution('the brown fox jumps quickly', `!@#$%^&*()_+|}{":?><=-[]/;`);
      const expected = `<*% @?{[} ^{] )=|"> :=(#_+/`;
      expect(actual).to.equal(expected);
    });
    it(`should ignore capital letters`, () => {
      const actual = substitution('The Brown Fox Jumps Quickly', `!@#$%^&*()_+|}{":?><=-[]/;`);
      const expected = substitution('the brown fox jumps Quickly', `!@#$%^&*()_+|}{":?><=-[]/;`);
      expect(actual).to.equal(expected);
    });
  });
  describe(`while decoding`, () => {
    it(`should decode a secret message using key provided`, () => {
      const actual = substitution('jZQb AxRR eu AZx <3', `ZAQcxswdeVFRtgbNHYujmKIolP`, false);
      const expected = `taco bell is bae <3`;
      expect(actual).to.equal(expected);
    });
    it(`should function with any key of 26 unique characters`, () => {
      const actual = substitution('<*% @?{[} ^{] )=|"> :=(#_+/', `!@#$%^&*()_+|}{":?><=-[]/;`, false);
      const expected = `the brown fox jumps quickly`;
      expect(actual).to.equal(expected);
    });
    it(`should maintain spaces`, () => {
      const actual = substitution('jZQb AxRR eu AZx <3', `ZAQcxswdeVFRtgbNHYujmKIolP`, false);
      const expected = `taco bell is bae <3`;
      expect(actual).to.equal(expected);
    });
    it(`should work with capital letters`, () => {
      const actual = substitution('jZQb AxRR eu AZx <3', `ZAQcxswdeVFRtgbNHYujmKIolP`, false);
      const expected = `taco bell is bae <3`;
      expect(actual).to.equal(expected);
    });
  });

});
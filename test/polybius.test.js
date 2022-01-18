// Write your tests here!
const {expect} = require('chai');
const {polybius} = require('../src/polybius');
describe(`polybius()`, () => {
  describe(`while encoding`, () => {
    it(`should create a secret message by translating each letter to a number pair`, () => {
      const actual = polybius('welcome');
      const expected = '25511331432351';
      expect(actual).to.equal(expected);
    });
    it(`should encode both 'i' and 'j' as 42`, () => {
      const actual = polybius('ninja');
      const expected = '3342334211';
      expect(actual).to.equal(expected);
    });
    it('should maintain spaces and special characters', () => {
      const actual = polybius('new york!!');
      const expected = '335125 45432452!!';
      expect(actual).to.equal(expected);
    });
    it('should ignore capital letters', () => {
      const actual = polybius('NEW YORK');
      const expected = polybius('new york');
      expect(actual).to.equal(expected);
    });
  });
  describe(`while decoding`, () => {
    it(`should decode a secret message by translating numbers to letters`, () => {
      const actual = polybius('25511331432351', false);
      const expected = 'welcome';
      expect(actual).to.equal(expected);
    });
    it(`should decode 42 to "i/j"`, () => {
      const actual = polybius('3342334211', false);
      const expected = 'ni/jni/ja';
      expect(actual).to.equal(expected);
    });
    it(`should maintain spaces and special characters`, () => {
      const actual = polybius('335125 45432452!', false);
      const expected = 'new york!';
      expect(actual).to.equal(expected);
    });
    it(`should return false if input of numbers is odd`, () => {
      const actual = polybius('3', false);
      expect(actual).to.be.false
    });
  });
});
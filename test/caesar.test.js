// Write your tests here!
const {expect} = require('chai');
 const {caesar} = require('../src/caesar');

 describe('caesar()', () => {
   describe('user entered shift errors', () => {
     it('should return false if shift amount is 0', () => {
       const actual = caesar('taco bell for life', 0);
  
       expect(actual).to.be.false;
     });
     it('should return false if shift amount is greater than 25', () => {
      const actual = caesar('taco bell for life', 26);
  
       expect(actual).to.be.false;
     });
     it('should return false if shift amount is less than -25', () => {
      const actual = caesar('taco bell for life', -26);
  
       expect(actual).to.be.false;
     });
   });
   describe('while encoding', () => {
      it('should create a secret message by shifting alphabet.', () => {
        const actual = caesar('Taco Bell!!!', 15);
        const expected = 'iprd qtaa!!!';
        expect(actual).to.equal(expected);
    });
      it('should accept a negative shift.', () => {
        const actual = caesar('Taco Bell!!!', -15);
        const expected = 'elnz mpww!!!';
        expect(actual).to.equal(expected);
    });
      it('should correctly encode letters at the end of the alphabet', () => {
        const actual = caesar('ZooTopia', 3);
        const expected = 'crrwrsld';
        expect(actual).to.equal(expected);
    });
      it('should leave spaces and special characters as they are.', () => {
        const actual = caesar('taco bell!!!', 15);
        const expected = 'iprd qtaa!!!';
        expect(actual).to.equal(expected);
    });
      it('should ignore numbers.', () => {
        const actual = caesar('call 911', 17);
        const expected = 'trcc 911';
        expect(actual).to.equal(expected);
    });
      it('should ignore capitals.', () => {
        const actual = caesar('Taco Bell!!!', 15);
        const expected = 'iprd qtaa!!!';
        expect(actual).to.equal(expected);
    });
  });
   describe('while decoding', () => {
      it('should decode a message by shifting alphabet.', () => {
        const actual = caesar("ibq'p dl ql qeb jxii", 23, false);
        const expected = "let's go to the mall";
        expect(actual).to.equal(expected);
    });
      it('should accept a negative shift.', () => {
        const actual = caesar('bcjakdltb', -17, false);
        const expected = 'starbucks';
        expect(actual).to.equal(expected);
    });
      it('should correctly decode letters at the end of the alphabet', () => {
        const actual = caesar('tevaxfr', 19, false);
        const expected = 'alchemy';
        expect(actual).to.equal(expected);
    });
      it('should leave spaces and special characters as they are.', () => {
        const actual = caesar('taco bell!!!', 15);
        const expected = 'iprd qtaa!!!';
        expect(actual).to.equal(expected);
    });
      it('should ignore numbers.', () => {
        const actual = caesar('yhpxl ahzore 13', 13);
        const expected = 'lucky number 13';
        expect(actual).to.equal(expected);
    });
      it('should ignore capitals.', () => {
        const actual = caesar('Xpxphwzmn', 21, false);
        const expected = 'cucumbers';
        expect(actual).to.equal(expected);
    });
  });
 })
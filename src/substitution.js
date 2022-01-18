// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const plainABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 //check for duplicates in supplied characters.
  function _duplicateChecker(alphabet) {
    let duplicates = false
    for (const letter of alphabet) {
      // filters provided key for each character and returns false if any repeats
      if (alphabet.filter((index) => index === letter).length > 1) duplicates = true;
    }
    return duplicates;
  }
  
  function _cipher(input, key) {
    const outputted = [];
    // loop through characters of input
    for (const char of input) {
      if (char === ' ' || plainABC.indexOf(char) === -1) {
        outputted.push(char);
      } else {
        const x = plainABC.indexOf(char);
        outputted.push(key[x]);
      }
    }
    return outputted.join('');
  }

  function _decipher(input, key) {
    const outputted = [];
    // loop through characters of encoded input
    for (const char of input) {
      // preserves spaces/numbers/special characters
      if (char === ' ' || key.indexOf(char) === -1) {
        outputted.push(char);
      } else {
        const x = key.indexOf(char);
        outputted.push(plainABC[x]);
      }
    }
    return outputted.join('');
  }


  function substitution(input, alphabet = [], encode = true) {
    // returns false if-
    if (!alphabet || alphabet.length !== 26 || _duplicateChecker([...alphabet])) return false;
    // lowercase conversion to prevent matching errors while encoding
    const toEncode = [...input.toLowerCase()];
    const toDecode = [...input];
    const key = [...alphabet]
    if (encode) {
      return _cipher(toEncode, key);
    } else {
      return _decipher(toDecode, key);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

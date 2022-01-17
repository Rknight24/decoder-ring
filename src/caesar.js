const caesarModule = (function () {
  const plainABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  function _ciDecipher(char, shift){
    if (plainABC.indexOf(char) === -1) {
      return char;
    } else {
      let toShiftTo = plainABC.indexOf(char) + shift;
      if (toShiftTo >= 26) toShiftTo = toShiftTo - 26;
      if (toShiftTo < 0) toShiftTo = 26 + toShiftTo;
      return plainABC[toShiftTo];
    }
  };
  
  function caesar(input, shift, encode = true) {
    // returns false if shift is not up to standards
    if (shift < -25 || shift === 0 || shift > 25) return false;
    const output = [];
    // convert to lowercase to avoid matching errors
    const inputted = [...input.toLowerCase()];
    
    if (!encode) shift = -shift;
    // loops each character and returns shifted character
    for (const char of inputted) {
        output.push(_ciDecipher(char, shift))
    }
    return output.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

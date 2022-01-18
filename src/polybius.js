/// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const pSqr = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "i/j", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];
  
  const plainABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'1','2','3','4','5'];
  // encoding letter helper
  function _encodeLetters(pSqr, char) {
    //account for zero index
    let col = 1;
    let row = 1;
    if (char === "i" || char === "j") char = "i/j"; // solving issues with i and j individually not working
    // looping 'columns' of polybius square
    for (let i = 0; i < pSqr.length; i++) {
     
      if (pSqr[i].includes(char)) {
        col += i;
        row += pSqr[i].indexOf(char);
      }
    }
    
    return `${col}${row}`;
  }
  // decoding helper
  function _decodeNumbers(pSqr, input) {
    const decodeIn = input.split(" ");
    const decodeOut = [];
    // looping each string of user input
    for (const string of decodeIn) {
      let spec = null; 
      // returns false if a string has an odd amount of numbers
      if (string.length % 2 !== 0) {
        // check for special characters
        const test = [...string];
        const tester = test.pop();
        if (plainABC.indexOf(tester) === -1) spec = tester
        if (!spec) return false
      }
      let decodedChars;
      let pair = []; // accumulator for creating number pairs to be decoded
      // looping each character in current string to create pairs
      for (const char in string) {
        currentChar = string[char];
        if (pair.length < 2) pair.push(currentChar);
        if (pair.length === 2) {
          const x = pair[0] - 1;
          const y = pair[1] - 1;
          const alphaChar = pSqr[x][y];
          pair = []; 
          !decodedChars
            ? (decodedChars = alphaChar)
            : (decodedChars += alphaChar);
          // add each letter to the decoded string
        }
      }
      // push decoded string to output array preserving potential special characters
      if (spec) {
        decodedChars += spec;
        decodeOut.push(decodedChars);
      } else {
        decodeOut.push(decodedChars);
      }
    }
    // return decoded array of string joined with spaces
    return decodeOut.join(" ");
  }

  function polybius(input, encode = true) {
    // convert to lowercase to prevent matching errors
    input = input.toLowerCase();
    if (!input) return false; // exit if no input provided
    if (!encode) return _decodeNumbers(pSqr, input); 
    
    const encodeIn = [...input]; // split input to array
    const encodeOut = []; // encode return value
    // looping each letter of input array
    for (const char of encodeIn) {
      // preserve spaces and non alpha characters
      if (plainABC.indexOf(char) === -1 && typeof char !== "number") {
        encodeOut.push(char);
      } else {
        encodeOut.push(_encodeLetters(pSqr, char));
      }
    }
    // return array of encoded strings joined with spaces
    return encodeOut.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

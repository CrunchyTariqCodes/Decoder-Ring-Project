// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//   function polybius(input, encode = true) {
    // your solution code here
    //set up aplphabet
    //convert input toLowerCase() 
    //loop through input letters
    //make two variables, one corresponding to row and one corresponding to column
    //for each letter: math.floor 
    //convert each character to a corresponding code
    //map both row and column 
    //make coordinate system
    // group i + j together to start corresponding with the value 42
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  


 //hardcoded alphabet and cipher key:value pairs
const cipher = {
  11: "a",
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "(i/j)",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
};

const grid = Object.entries(cipher);
grid.push([42, "i"]);
grid.push([42, "j"]);

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase()
    const nonSpaceChars = input.split(' ').reduce((acc, ele) => acc += ele.length, 0)
    //declare return variable for encoding
    let encodedMsg = ''
    //if encode is false, input.length must be even
    if (!encode && nonSpaceChars % 2 != 0) {
      return false
    } else if (!encode) {
      let decodedMsg = ''
      //declare return variable for decoding
      for (const char of input) {
        //append spaces
        if (char === ' ') {
          encodedMsg += char
          //decode numbers
        } else if (decodedMsg.length > 0) {
          decodedMsg += char
          encodedMsg += cipher[parseInt(decodedMsg)]
          decodedMsg = ''
        } else {
          decodedMsg += char
        }
      }
      return encodedMsg
    } else {
      //encode letters
      for (char of input) {
        if (char === ' ') {
          encodedMsg += char
          //keep goin
          continue
        }
        const encoded = grid.filter(subArr => subArr.includes(char))[0]
        encodedMsg += encoded[0]
      }
      return encodedMsg
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

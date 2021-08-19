// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || isNaN(shift) || input.length<1 ) {
      return false;
    }
    if (!encode) {
      shift *= -1
    }
//push them to lower case
    input = input.toLowerCase();
//declare what we will return
    let returnString = "";
    let code = "";
    //loop through input letters
    for (let i = 0; i < input.length; i++) {
      let encoded = input[i];
      //validate if its a letter, if not just push it to the return variable
      if (encoded.match(/[a-z]/)) {
        //encode the letter
        code = input.charCodeAt(i);

//move the encoded value by the shift value unless the encoded value is negative, then it is just shift plus 26 to encode
        let codedValue = code + shift;
        if (codedValue < 97) {
          codedValue += 26;
        }
//decode the shifted number into a letter
        encoded = String.fromCharCode(((codedValue - 97) % 26) + 97);
//append the return string
        returnString += encoded;
      } else {
        returnString += input[i];
      }
  }
    return returnString;
}

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };



// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// your solution code here
    //create 2 variables: cipher object and accumulator string
    // *maybe* use a ternary to determine which alphabet to use in the conversion depending on whether we are decoding or encoding
    //toLowerCase input argument
    //alphabet argument length !== 26 characters returns false
    //return false whenever a character is duplicated in the alphabet parameter
    //bypass any spaces in input argument
    //for loop through input argument matching each character to a coresponding alphabet character
    //add each converted character to an accumulator string
            // if at any time, 2 adjacent elements
            // become equal, return false
            
//         }
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) { 
    const message = ""
    input = input.toLowerCase()
    if (!alphabet || alphabet.length != 26 || new Set(alphabet).size != 26 ){
      return false
    }
 let cipher = {
   "":"",
  a: alphabet[0],
  b: alphabet[1],
  c: alphabet[2],
  d: alphabet[3],
  e: alphabet[4],
  f: alphabet[5],
  g: alphabet[6],
  h: alphabet[7],
  i: alphabet[8],
  j: alphabet[9],
  k: alphabet[10],
  l: alphabet[11],
  m: alphabet[12],
  n: alphabet[13],
  o: alphabet[14],
  p: alphabet[15],
  q: alphabet[16],
  r: alphabet[17],
  s: alphabet[18],
  t: alphabet[19],
  u: alphabet[20],
  v: alphabet[21],
  w: alphabet[22],
  x: alphabet[23],
  y: alphabet[24],
  z: alphabet[25],
  ' ':' '
};

  

 //switch keys and values if decoding
if (!encode) {cipher = Object.keys(cipher).reduce((accum, key) => Object.assign({}, accum, {[cipher[key]]: key}))}

//iterating through the input, coding or decoding
let codedMessage = ""
for(let i = 0; i < input.length; i++) {
    if ((encode)  && !Object.keys(cipher).includes(input[i])) {
      codedMessage += input[i]
    } else if
      ((!encode)  && !Object.keys(cipher).includes(input[i])) {
        codedMessage += input[i]
    } else 
    codedMessage += ((cipher[input[i]]))
}
//return message    
return codedMessage
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

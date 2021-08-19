// Write your tests here!
//testing for if no string value is passed through, if its either encode or decode, if no shift value, if encode is not passed through, and happy path, 
//happyPath
// lowerCase
//     toLowerCase
// specialCharacters
//     maintain spaces, numbers, and punctuation.  Do not encode.
// ifNoString
// ifNoShift
// ifEncodeNotBoolean
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("Should maintain spaces and special characters", () => {
    const input = "b00ts! the c@t";
    const shift = 2;

    const expected = "d00vu! vjg e@v";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("return false is no string is passed through", () => {
    const input = "";
    const shift = 2;
    const expected = false;
    const actual = caesar(input ,shift);
    expect(actual).to.equal(expected);
  })
  it("return false is no shift is passed through", () => {
    const input = "Hi Mom";
    const shift = "" ;
    const expected = false;
    const actual = caesar(input);
    expect(actual).to.equal(expected);
  })
  it("return correctly if a negative shift is input", () => {
    const input = "abc";
    const shift = -1;
    const expected = 'zab';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  })
  it ("should correctly modulate around the 26 letters of the alphabet", () => {
    const input = "xyz";
    const shift = 5;
    const expected = "cde";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  })
  it ("input should not be case sensitive", () => {
    const input = "APpLeSaUcE";
    const shift = 1;
    const expected = "bqqmftbvdf";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  })
  it ("should decode a scrambled message", () => {
    const input = "bqqmftbvdf";
    const shift = 1;
    const expected = "applesauce";
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
  })
})


  

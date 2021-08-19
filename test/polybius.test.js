// Write your tests here!
const expect = require("chai").expect
const {polybius} = require("../src/polybius")

describe("polybius", () => {
  it("should encode each letter to corresponding number pair", () =>{
    const input = "bugs bunny";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
  it("should output a string", () =>{
    const input = "bugs bunny";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
  it("should decode accurately", () =>{
    const input = "21542234 2154333345";
    const encode = false;
    const actual = polybius(input, encode);
    const expected = "bugs bunny";
    expect(actual).to.eql(expected);
  })
  it("should ignore caps", () =>{
    const input = "BUGS BUNNY";
    const encode = true;
    const actual = polybius(input, encode);
    const expected = "21542234 2154333345";
    expect(actual).to.eql(expected);
  })
  it("should return false if string, excluding spaces, totals to an odd number", () => {
    const input = "43434"
    const encode = false
    const actual = polybius(input, encode)
    const expected = false
    expect(actual).to.eql(expected);
  })
   it("when encoding, both i and j should be converted to 42", () =>{
    const input = "i i j j i"
    const encode = true
    const expected = "42 42 42 42 42"
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  })
   it("when decoding, both i and j should be converted together from 42", () =>{
    const input = "42 42 42 42 42"
    const encode = false
    const expected = "(i/j) (i/j) (i/j) (i/j) (i/j)"
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  })
})
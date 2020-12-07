
const assert = require("chai").assert;
const countLetters = require("../../countLetters.js");

describe("#countLetters", () => {

  it("should returns true for 1,1", () => {
    assert.strictEqual(countLetters(1,1),true);
  });

  it("should returns false for 1,3", () => {
    assert.strictEqual(countLetters(1,3),false);
  });

  it("should returns 4 for 'Lighthouse Labs').h", () => {
    assert.strictEqual(countLetters('Lighthouse Labs', 'Bootcamp'),false);
  });

  it("should returns {l: 1, i: 2, g: 1,h: 4,  t: 2,  o: 2,  u: 2,  s: 2,  e: 3,  n: 1,} for 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters('lighthouse in the house',{l: 1, i: 2, g: 1,h: 4,  t: 2,  o: 2,  u: 2,  s: 2,  e: 3,  n: 1,}));
  });
});

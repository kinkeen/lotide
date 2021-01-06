const assert = require("chai").assert;
const eqArrays = require("../eqArrays.js");

describe("#eqArrays", () => {

  it("should returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });

  it("should returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
  });

  it("should returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']),true);
  });

  it("should returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]),false);
  });

  it("should returns true for ['Hello','Lighthouse','Labs'], ['Hello','Lighthouse','Labs']", () => {
    assert.strictEqual(eqArrays(['Hello','Lighthouse','Labs'], ['Hello','Lighthouse','Labs']),true);
  });

  it("should returns false for ['Hello','Lighthouse'], ['Hello','Lighthouse','Labs']", () => {
    assert.strictEqual(eqArrays(['Hello','Lighthouse'], ['Hello','Lighthouse','Labs']),false);
  });

});

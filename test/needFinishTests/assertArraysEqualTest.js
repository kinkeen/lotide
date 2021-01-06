
const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual.js");

describe("#assertArraysEqual", () => {

  it("should returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]),true);
  });

  it("should returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]),false);
  });

  it("should returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']),true);
  });

  it("should returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]),false);
  });

  it("should returns true for ['Hello','Lighthouse','Labs'], ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(assertArraysEqual(['Hello','Lighthouse','Labs'], ['Hello','Lighthouse','Labs']),true);
  });

  it("should returns false for ['Hello','Lighthouse'], ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(assertArraysEqual(['Hello','Lighthouse'], ['Hello','Lighthouse','Labs']),false);
  });

});

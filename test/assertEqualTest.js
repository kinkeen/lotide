
const assert = require("chai").assert;
const assertEqualTest = require("../assertEqual.js");

describe("#assertEqualTest", () => {

  it("should returns true for 1,1", () => {
    assert.strictEqual(assertEqualTest(1,1),true);
  });

  it("should returns false for 1,3", () => {
    assert.strictEqual(assertEqualTest(1,3),false);
  });

  it("should returns false for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert.strictEqual(assertEqualTest('Lighthouse Labs', 'Bootcamp'),false);
  });

  it("should returns true for 'Lighthouse Labs', 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqualTest('Lighthouse Labs', 'Lighthouse Labs'),true);
  });

});

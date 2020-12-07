const assert = require("chai").assert;
const head = require("../head.js");

describe("#head", () => {

  it("should returns [] for empty array ", () => {
    assert.strictEqual(head([]),);
  });
  it("should returns [5] for [5,6,7] ", () => {
    assert.strictEqual(head([5,6,7]),5);
  });
  it("should returns '9' for ['9']", () => {
    assert.strictEqual(head(['9']),'9');
  });
  it("should returns 'Hello' for ['Hello','Lighthouse','Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']),"Hello");
  });

});

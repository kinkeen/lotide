
const assert = require("chai").assert;
const takeUntil = require("../takeUntil.js");

describe("#takeUntil", () => {

  it("should returns [] for empty array ", () => {
    assert.deepEqual(takeUntil([]),[]);
  });
  it("should returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[ 1, 2, 5, 7, 2 ]);
  });
  it("should returns ['I've', 'been', 'to', 'Hollywood' ]  for ['I've', 'been', 'to', 'Hollywood' , ',', 'I've', 'been', 'to', 'Redwood'] x => x === ',", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });

});

const assert = require("chai").assert;
const letterPositions = require("../../letterPositions.js");

describe("#letterPositions", () => {

  it("should returns {h:[0], e:[1], l:[2,3],o:[4]} for 'hello'" , () => {
    assert.strictEqual(letterPositions("hello"),{h:[0], e:[1], l:[2,3],o:[4]});
  });

});

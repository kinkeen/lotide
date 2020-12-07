/**
This function should take in a collection of items and return counts for a specific subset of those items. 
It won't count everything. In order to decide what to count, 
it will also be given an idea of which items we care about and it will only count those, ignoring the others.*/

/*const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });*/

const assert = require("chai").assert;
const countOnly = require("../../countOnly.js");

describe("#countOnly", () => {

  it("should returns 1 for 'Jason'", () => {
    assert.strictEqual(countOnly('Jason', 1));
  });

  it("should returns undefined for Karima", () => {
    assert.strictEqual(countOnly('Karima',undefined));
  });

  it("should returns 2 for 'Fang'", () => {
    assert.strictEqual(countOnly('Jason', 1));
  });

  it("should returns undefined for Agouhanna", () => {
    assert.strictEqual(countOnly('Karima',undefined));
  });
});


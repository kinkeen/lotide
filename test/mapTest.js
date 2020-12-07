const assert = require("chai").assert;
const map = require("../map.js");

describe("#map", () => {

  it("should returns ['G','P'] for ['Gibraltar Point', 'Peggy Point'] word => word[0]", () => {
    assert.deepEqual(map(['Gibraltar Point', 'Peggy Point'], word => word[0]), ['G','P']);
  });

  it("should returns ['g','c','t','m','t'] for['ground', 'control', 'to', 'major', 'tom'], word => word[0]", ()=> {
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]), ['g','c','t','m','t']);
  });

});
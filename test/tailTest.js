const assert = require("chai").assert;
const tail = require("../tail.js");

describe("#tail", () => {

  it("should returns [] for []", () => {
    assert.deepEqual(tail(''),[]);
  });
  it("should returns [] for ''", () => {
    assert.deepEqual(tail([]),[]);
  });
  
  it("should returns [] for undefined", () => {
    assert.deepEqual(tail('Undefined'),[]);
  });

  it("should returns ['12','14','19'] for ['9','12','14','19']", () => {
    assert.deepEqual(tail(['9','12','14','19']),['12','14','19']);
  });

  it("should returns ['Lighthouse', 'Labs'] for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});


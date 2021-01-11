const assert = require("chai").assert;
const eqObjects = require("../eqObjects.js");
const assertObjectsEqual = require("../assertObjectsEqual.js");


 // TEST CODE
assertObjectsEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true) // => true
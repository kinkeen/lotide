// FUNCTION IMPLEMENTATION

/*const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if ((second[i] !== first[i])) {
      return false;
    }
  }
  return true;
};*/

const eqArrays = require('./eqArrays');

const assertArraysEqual = (first, second) => {
  let txt = "";
  if (eqArrays(first, second)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${first} !== ${second}`);
  }
  return assertArraysEqual;
};

module.exports = assertArraysEqual;


    
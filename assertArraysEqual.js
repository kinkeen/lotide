// FUNCTION IMPLEMENTATION
const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if ((second[i] !== first[i])) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = (first, second) => {
  let txt = "";
  if (eqArrays(first, second)) {
    txt = 'Assertion Passed: ' + first + " === " + second;
    console.log(txt);
  } else {
    txt = 'Assertion Failed: ' + first + " === " + second;
    console.log(txt);
  }
  return assertArraysEqual;
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
    
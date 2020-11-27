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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);


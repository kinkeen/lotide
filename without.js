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

const without = (source, itemsToRemove) => {
  let arr = source;
  for (let i = 0; i <= arr.length; i++) {
    for (let values of itemsToRemove) {
      if (source[i] === values) {
        let removedItem = arr.indexOf(values);
        arr.splice(removedItem,1);
      }
    }
  }
  return arr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"],["3"]), [2,3]);

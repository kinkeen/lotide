// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
  //let firstItem = arr.filter(x => typeof x !== undefined).shift();
  //return firstItem;
};

assertEqual(head([1]), 5);
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
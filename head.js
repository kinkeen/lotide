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
 return arr.pop();
}

assertEqual(head([5,6,7,9,40]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 3);
console.assert(1 === 1);
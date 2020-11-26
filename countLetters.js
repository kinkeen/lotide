// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};

const countLetters = function(str) {
  const results = {};
  for (const item of str) {
    console.log(item);
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
  
assertEqual(countLetters("lighthouse in the house").h, 4);
//assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1,h: 4,  t: 2,  o: 2,  u: 2,  s: 2,  e: 3,  n: 1,});
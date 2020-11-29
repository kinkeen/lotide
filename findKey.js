// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};

const findKey = function(objStars, callback) {
for (let key of Object.keys(objStars)) {
  if (callback(objStars[key].stars)) {
    return objStars[key].stars;
  } else break;
}
return undefined;
};

const objStars = {
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
};

// TEST CODE
//assertEqual(findKey(objStars, x => x.stars === 2), "noma"); 
assertEqual(findKey(objStars, x => x.stars === 2), "noma");  

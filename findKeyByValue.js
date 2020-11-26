// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + " === " + expected);
  } else {
    console.log('Assertion Failed:' + actual + " !== " + expected);
  }
  return assertEqual;
};
  
const findKeyByValue = function(bestTVShowsByGenre, value) {
  for (const key of Object.keys(bestTVShowsByGenre)) {
    if (bestTVShowsByGenre[key] === value) {
      return key;
    }
    /*for (const item in bestTVShowsByGenre) {
        if (bestTVShowsByGenre[item]===value){
          return item
        }
      }*/
  }
  return "undefined";
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse", //sci_fi show error ineslinit that says Identifier is not in camel case so I put it in apostrophes
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
// TEST CODE
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
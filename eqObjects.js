// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('Assertion Passed:' + actual + "===" + expected);
    } else {
      console.log('Assertion Failed:' + actual + "!==" + expected);
    }
    return assertEqual;
  };
 
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
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(first, second) {

  if (first.isArray && second.isArray) {
    eqArrays(first, second);
  } else { 
    if(Object.keys(first) !== Object.keys(second)){
        return false
    }else {
        for (const key of Object.keys(first)) {
            if (first[key]!==second[key]) {
                return false;
            }
        }
    }
    return true;
  }

};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true) // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false

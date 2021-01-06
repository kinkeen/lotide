
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
 
 const assertObjectsEqual = function(actual, expected) {
 
   const inspect = require('util').inspect; // <= add this line
   console.log(`Example label: ${inspect(actual)}`);
   
   let txt = "";
   if (eqObjects(actual, expected)) {
     txt = '✅✅✅  Assertion Passed: ' + actual + " === " + expected;
     console.log(txt);
   } else {
     txt = ' 🛑🛑🛑 Assertion Failed: ' + actual + " === " + expected;
     console.log(txt);
   }
   return assertObjectsEqual;
 };
 
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
 assertObjectsEqual(eqObjects(ab, ba), true) // => true
 
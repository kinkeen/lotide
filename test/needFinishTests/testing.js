
  
  // TEST CODE
/*  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual("Lighthouse Labs", "Lighthouse Labs");
  assertEqual(1, 1);
  assertEqual(1, 3);
  console.assert(1 === 1);*/

  /**
 * assertEqual(countLetters("lighthouse in the house").h, 4);
//assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1,h: 4,  t: 2,  o: 2,  u: 2,  s: 2,  e: 3,  n: 1,});
 * 
 * 
 */

// TEST CODE
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

/**
 * // TEST CODE
 * 
 * JS doesn't allow us to easily compare arrays. This made the test code for our function more cumbersome.
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
 * 
 */

 /*assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map(lighthouses, word => word[0]), ["G","P","C","D","C","P","K"]);*/


// TEST CODE
/*assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS*/

// TEST CODE

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };*/



//the function retrieve the first element from the array

//Here are some test assertions for you to implement and make pass:
/*
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head

assertEqual(head([1]), 5);
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

*/
/*
assertArraysEqual(letterPositions("hello").e, [1]);
*/




/*
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map(lighthouses, word => word[0]), ["G","P","C","D","C","P","K"]);*/



/*ssertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true*/

/*
ssertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"],["3"]), [2,3]);
function return which will return a subset of a given array, removing unwanted elements
Write a test case to make sure that the original array is not modified.*/

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

*/


/*
returns all the element in the array except the first element
The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.
1. An array with only one element should yield an empty array for its tail
2. An empty array should yield an empty array for its tail
*/

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//const result = tail([]);
//const result = tail("");
//console.log(result);
//console.log(tail(result));
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!





// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 3);
console.assert(1 === 1);*/

  
/*assertEqual(countLetters("lighthouse in the house").h, 4);
//assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1,h: 4,  t: 2,  o: 2,  u: 2,  s: 2,  e: 3,  n: 1,});*/

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};*/

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

  /*  for(var item in itemsToCount) {
  if (itemsToCount[item]){
    let j = 0;
    for (i=0; i<allItems.length; i++) {
        if (allItems[i] === item){
        j++;
        }
        results[item] = j;
    }
  }
}*/


/*const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(result1);*/

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};*/
    

// TEST CODE
/*console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS*/

// FUNCTION IMPLEMENTATION
/*const assertEqual = function(actual, expected) {
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
  };*/
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/*// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true) // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false*/

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};*/


/* const objStars = {
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
};

// TEST CODE
//assertEqual(findKey(objStars, x => x.stars === 2), "noma"); 
assertEqual(findKey(objStars, x => x.stars === 2), "noma");  */


/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + " === " + expected);
  } else {
    console.log('Assertion Failed:' + actual + " !== " + expected);
  }
  return assertEqual;
};*/

  /*for (const item in bestTVShowsByGenre) {
        if (bestTVShowsByGenre[item]===value){
          return item
        }
      }*/
  
      const bestTVShowsByGenre = { "sci_fi": "The Expanse",  comedy: "Brooklyn Nine-Nine", drama:  "The Wire"};


  
// TEST CODE
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Wire'), 'drama');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'Brooklyn Nine-Nine'), 'sci_fi');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'That 70s Show'), undefined);

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + "===" + expected);
  } else {
    console.log('Assertion Failed:' + actual + "!==" + expected);
  }
  return assertEqual;
};*/


/*assertEqual(head([1]), 5);
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");*/


/*const eqArrays = (first, second) => {
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
*/

/*console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2,3],o:[4]});*/


// TEST CODE
/*assertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true
*/
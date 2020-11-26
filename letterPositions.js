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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
        results[letter].push(index);
      } else {
        results[letter].push(index);
      }
    }
    index++;
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2,3],o:[4]});
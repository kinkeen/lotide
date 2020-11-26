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

const middle = (arr) => {
  const newArray = [];
  const isArrEven = arr.length % 2;
  const arrMiddle = Math.floor(arr.length / 2);

  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (isArrEven === 0) {  //even
    newArray.push(arr[arrMiddle - 1]);
    newArray.push(arr[arrMiddle]);
  } else {    //odd
    newArray.push(arr[arrMiddle]);
  }
  return newArray;
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true

//The middle function should return an array with only the middle element(s) of the provided array. 
//This means that the length of the returned elements could vary.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

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

module.exports = middle;

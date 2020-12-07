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

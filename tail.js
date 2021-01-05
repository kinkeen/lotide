// FUNCTION IMPLEMENTATION

// Returns all the elements of the array expect for first element.
// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail


const tail = function(arr) {
  console.log(typeof(arr));
  if (arr.length === 0 || arr.length === 1 || arr == 'Undefined') {
      return [];
  } else {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

module.exports = tail;








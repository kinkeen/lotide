// FUNCTION IMPLEMENTATION

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








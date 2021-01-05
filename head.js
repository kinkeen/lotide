// FUNCTION IMPLEMENTATION
//const assertEqual = require('./assertEqual');


// function that retrieve the first element from the array
//An array with only one element yield that one element as its head
//An empty array yield undefined as its head

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;
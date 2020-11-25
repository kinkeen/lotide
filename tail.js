// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('Assertion Passed:' + actual + "===" + expected);
    } else {
      console.log('Assertion Failed:' + actual + "!==" + expected);
    }
    return assertEqual;
  };
  
  const tail = function(arr) {
    if (arr.length === 0 || arr.length === 1 || typeof arr === 'undefined') {
      //return undefined;
      return [];
    } else {
      let newArr = [];
      for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      return newArr;
    }
  };
  
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
  
  
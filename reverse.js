var input = process.argv[2];

if (input) {
  console.log(reverse(input));
}
//The split() method is used to split a string into an array of substrings, and returns the new array.
//The reverse() method reverses the order of the elements in an array. //	return An Array, representing the array after it has been reversed

function reverse(original) {
  return original.split('').reverse().join('');
}
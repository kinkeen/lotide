// FUNCTION IMPLEMENTATION

const countLetters = function(str) {
  const results = {};
  for (const item of str) {
    console.log(item);
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countLetters;

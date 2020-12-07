// FUNCTION IMPLEMENTATION

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log(takeUntil(data1, x => x < 0));
console.log(takeUntil(data2, x => x === ','));

module.exports = takeUntil;

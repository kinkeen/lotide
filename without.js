const without = (source, itemsToRemove) => {
  let arr = source;
  for (let i = 0; i <= arr.length; i++) {
    for (let values of itemsToRemove) {
      if (source[i] === values) {
        let removedItem = arr.indexOf(values);
        arr.splice(removedItem,1);
      }
    }
  }
  return arr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"],["3"]));

module.exports = without;



const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, word => word[0]), ["g","c","t","m","t"]);
console.log(map(lighthouses, word => word[0]), ["G","P","C","D","C","P","K"]);

module.exports = map;


// FUNCTION IMPLEMENTATION
  
const findKeyByValue = function(bestTVShowsByGenre, value) {
  for (const key of Object.keys(bestTVShowsByGenre)) {
    if (bestTVShowsByGenre[key] === value) {
      return key;
    }
  }
  return "undefined";
};

module.exports = findKeyByValue;


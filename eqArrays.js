// FUNCTION IMPLEMENTATION
const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for(let i = 0; i < first.length; i++) {
    if ((second[i] !== first[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
 
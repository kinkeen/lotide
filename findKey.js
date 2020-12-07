// FUNCTION IMPLEMENTATION

const findKey = function(objStars, callback) {
for (let key of Object.keys(objStars)) {
  if (callback(objStars[key].stars)) {
    return objStars[key].stars;
  } else break;
}
return undefined;
};

module.exports = findKey;

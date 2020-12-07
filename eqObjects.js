const eqObjects = function(first, second) {

  if (first.isArray && second.isArray) {
    eqArrays(first, second);
  } else { 
    if(Object.keys(first) !== Object.keys(second)){
        return false
    }else {
        for (const key of Object.keys(first)) {
            if (first[key]!==second[key]) {
                return false;
            }
        }
    }
    return true;
  }

};

module.exports = eqObjects;

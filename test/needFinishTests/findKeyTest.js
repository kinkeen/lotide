
const objStars = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
    };
    
  const assert = require("chai").assert;
  const objStars = require("../objStars.js");
  
  describe("#objStars", () => {
  
    it("should returns 'drama' for 'The Wire'", () => { 
      assert.strictEqual(objStars("The Wire"),"drama");
    });
  
    it("should returns 'Brooklyn Nine-Nine' for sci_fi", () => {
      assert.strictEqual(objStars('sci_fi'),'Brooklyn Nine-Nine');
    });
  
    it("should returns 'undefined' for That '70s Show", () => {
      assert.strictEqual(objStars("That '70s Show"),undefined);
    });
  
  });
  
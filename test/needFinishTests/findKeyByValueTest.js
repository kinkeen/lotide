
const bestTVShowsByGenre = {
  'sci_fi': 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama:  'The Wire'
};


/*assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Wire'), 'drama');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'Brooklyn Nine-Nine'), 'sci_fi');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue({ 'sci_fi': 'The Expanse',  comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'That 70s Show'), undefined);*/


//bestTVShowsByGenre, 'The Wire'), 'drama')

const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue.js");

describe("#findKeyByValue", () => {

  it("should returns 'Brooklyn Nine-Nine' for sci_fi", () => {
    assert.strictEqual(findKeyByValue('sci_fi'),'Brooklyn Nine-Nine');
  });

  it("should returns 'undefined' for That '70s Show", () => {
    assert.strictEqual(findKeyByValue("That '70s Show"),undefined);
  });

});

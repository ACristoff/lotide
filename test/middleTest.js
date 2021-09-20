const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return [2, 3] when [1, 2, 3, 4] is input", () => {
    assert.deepEqual(middle([1, 2, 3, 4], ), [2, 3] )
})});

// //MIDDLE TEST CODE
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
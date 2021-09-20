// const eqArrays = require('../eqArrays')
// const assertArraysEqual = require('../assertArraysEqual')

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 'Alex' and 'Alex' with true", () => {
    assert.strictEqual(assertEqual("Alex", "Alex"), true);
  }),

  it("returns 1 and 1 with true", () => {
    assert.strictEqual(assertEqual(1, 1), true); 
  });
});

// //ARRAYS EQUALS TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// //ASSERT ARRAYS EQUALS TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

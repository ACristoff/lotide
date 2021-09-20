const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 1 for length for ['hello', 'alex']", () => {
    assert.strictEqual(tail(['hello', 'alex']).length, 1);
  })})

// //TAIL TEST CODE
// const example = ['hello', 'Alex']
// assertEqual(tail(example).length, 1);
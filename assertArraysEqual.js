const eqArrays = require('./eqArrays')

const assertArraysEqual = (arr1, arr2) => {
  result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log('✅✅✅Assertion Passed: Array 1 and 2 are equal')
  } else {
    console.log('🛑🛑🛑Assertion Failed: Array 1 and 2 are not equal')
  }
}


// // TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail

module.exports = assertArraysEqual;
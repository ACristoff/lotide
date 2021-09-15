const assertArraysEqual = (arr1, arr2) => {
  result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log('✅✅✅Assertion Passed: Array 1 and 2 are equal')
  } else {
    console.log('🛑🛑🛑Assertion Failed: Array 1 and 2 are not equal')
  }
}

// EQARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  let result = true;

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false
    }
  }

  //edge case
  if (arr1.length !== arr2.length) {
    result = false
  }

  return result
}

// // TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail
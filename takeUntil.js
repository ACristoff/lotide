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

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false
    }
  }

  //edge case
  if (arr1.length !== arr2.length) {
    result = false
  }

  return true
}

//TAKE UNTIL
const takeUntil = function(array, callback) {
  // ...
  const results = []
  for (let item of array) {
    if (!callback(item)) {
      results.push(item)
    } else {
      return results
    }
  }
  return results
}

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//OUTPUT
const results1Expected = [ 1, 2, 5, 7, 2 ]
// ---
const results2Expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ]


assertArraysEqual(results1, results1Expected)

assertArraysEqual(results2, results2Expected)


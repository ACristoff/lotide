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

//map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results1Expected = ['g', 'c', 't', 'm', 't']
assertArraysEqual(results1, results1Expected);

const results2 = map(words, word => word.length)
const results2Expected = [ 6, 7, 2, 5, 3 ]
assertArraysEqual(results2, results2Expected)

const results3 = map(words, word => 'the next word is ' + word )
console.log(results3)
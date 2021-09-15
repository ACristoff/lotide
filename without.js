//Without
const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let entries in source) {
    if (!itemsToRemove.includes(source[entries])) {
      newArr.push(source[entries]);
    }
  }
  return newArr;
};


//Assert arrays equal
const assertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log('✅✅✅Assertion Passed: Array 1 and 2 are equal');
  } else {
    console.log('🛑🛑🛑Assertion Failed: Array 1 and 2 are not equal');
  }
};

// EQARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  
  //edge case
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
};

//TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

without([1, 2, 3], [1]); // => [2, 3]
console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => []

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

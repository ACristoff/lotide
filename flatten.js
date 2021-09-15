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

const flatten = (nestedArray) => {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        newArray.push(nestedArray[i][j])
      }
  } else {
    newArray.push(nestedArray[i])
    }
  }
  return newArray
}


//test code
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

//Assert arrays equal
const assertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    return '✅✅✅Assertion Passed: Array 1 and 2 are equal';
  } else {
    return '🛑🛑🛑Assertion Failed: Array 1 and 2 are not equal';
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

  return true;
};

//count letters function
const countLetters = (stringParam) => {
  let newObj = {};
  for (let i = 0; i < stringParam.length; i++)  {
    if (newObj[stringParam[i]]) {
      newObj[stringParam[i]] += 1
    } else {
      newObj[stringParam[i]] = 1;
    }
  }
  return newObj;
};


const result1 = countLetters('hello');

//TEST CODE
console.log(assertArraysEqual(result1['l'], 2));


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

//Middle function
const middle = (paramArr) => {
  let newArr = [];
  let paramArrLengthHalf = paramArr.length / 2;
  if (!(paramArrLengthHalf > 1)) {
    return newArr;
  } else if (paramArrLengthHalf % 1 === 0) {
    newArr = paramArr.slice(paramArrLengthHalf - 1, paramArrLengthHalf + 1);
    return newArr;
  } else {
    paramArrLengthHalf = Math.ceil(paramArrLengthHalf)
    newArr = paramArr.slice(paramArrLengthHalf - 1, paramArrLengthHalf)
    return newArr;
  }
}


//TEST CODE
console.log(assertArraysEqual(middle([1]), [])) // => []
console.log(assertArraysEqual(middle([1, 2]), [])) // => []
// //.5's round up is middle
console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // => [3]
//whole numbers we want the middle and + 1 DONE
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]

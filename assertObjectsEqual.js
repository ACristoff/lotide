// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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

//Assert arrays equal
const assertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    return '✅✅✅Assertion Passed: Array 1 and 2 are equal';
  } else {
    return '🛑🛑🛑Assertion Failed: Array 1 and 2 are not equal';
  }
};

//FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objects1, objects2) {
  const keyList1 = Object.keys(objects1)
  const keyList2 = Object.keys(objects2)

  // console.log('keys are: ', keyList1)
  if (keyList1.length !== keyList2.length) {
    return false
  }
  for (entries of keyList1) {
    if (Array.isArray(objects1[entries])) {
      if (!(eqArrays(objects1[entries], objects2[entries]))) {
        return false
      }
    } else {
      if (objects1[entries] !== objects2[entries]) {
        return false
      }
    }
  }
  return true
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(inspect(actual));
  console.log(inspect(expected));
  let result = eqObjects(actual, expected);
  console.log(result)
  if (result === true) {
    return `✅✅✅Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are not equal`;
  }
};



//TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba)); // => true
//✅✅✅Assertion Passed: Object 1 and 2 are equal

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertObjectsEqual((ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual((cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual((cd, cd2))); // => false

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


// letter position
const letterPositions = function(sentence) {
  let newObj = {};
  for (let i = 0; i < sentence.length; i++)  {
    if (newObj[sentence[i]]) {
      newObj[sentence[i]].push(i);
    } else {
      newObj[sentence[i]] = [i];
    }
  }
  return newObj;
};

results1 = letterPositions("hello")

console.log(assertArraysEqual(results1['l'], [2,3]))


// results for "lighthouse in the house"
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

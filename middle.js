
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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


// //TEST CODE
// console.log(assertArraysEqual(middle([1]), [])) // => []
// console.log(assertArraysEqual(middle([1, 2]), [])) // => []
// // //.5's round up is middle
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // => [3]
// //whole numbers we want the middle and + 1 DONE
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]

module.exports = middle;
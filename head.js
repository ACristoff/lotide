// // ASSERT EQUAL FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require("./assertEqual");

// // // TEST CODE
// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual("Alex", "Alex");
// // assertEqual(1, 1);
// // assertEqual(1, 2);

//HEAD FUNCTION
const head = function(arrayArg) {
  let result = arrayArg[0];
  return result;
};


module.exports = head;
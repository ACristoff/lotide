// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Alex", "Alex");
// assertEqual(1, 1);
// assertEqual(1, 2);

//TAIL FUNCTION
const tail = function(arrayArg) {
  let newTail = [];
  for (let i = 1; i < arrayArg.length; i++) {
    newTail.push(arrayArg[i]);
  }
  return newTail;
};

//TEST CODE
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, 3);
console.log(tail(words));
const words2 = [1];
console.log(tail(words2));

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
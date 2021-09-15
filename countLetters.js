// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//count letters function
const countLetters = (stringParam) => {
  let newObj = {}
  for (const character of stringParam) {
    if (newObj[character]) {
      newObj[character] += 1;
    } else {
      newObj[character] = 1;
    }
  }

  return newObj;
}

const result1 = countLetters('hello')

//TEST CODE
assertEqual(result1['l'], 2 )

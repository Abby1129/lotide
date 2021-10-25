const assertArraysEqual = function (array, expected) {
  if (eqArrays(array === expected)) {
    console.log(`✅ Assertion Passed: ${array} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array} !== ${expected} `);
  }
};

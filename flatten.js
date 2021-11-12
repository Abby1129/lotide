const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (array) {
  resultsArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const number of item) {
        resultsArray.push(number);
      }
    } else {
      resultsArray.push(item);
    }
  }
  return resultsArray;
};

module.exports = flatten;

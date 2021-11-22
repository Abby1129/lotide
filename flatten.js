const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (array) {
  const resultsArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const data of item) {
        resultsArray.push(data);
      }
    } else {
      resultsArray.push(item);
    }
  }
  return resultsArray;
};

module.exports = flatten;

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function (sourceArr, itemsToRemoveArr) {
  resultsArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      resultsArr.push(sourceArr[i]);
    }
  }
  return resultsArr;
};

module.exports = without;

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr.slice(0, arr.indexOf(arr[i]));
    }
  }
};

// const cb = (item) => (item === "," ? true : false);
// console.log(takeUntil(data2, cb));

module.exports = takeUntil;

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];

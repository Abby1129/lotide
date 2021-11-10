const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual")

let test = [1, 2, 3, 4];
assertArraysEqual(eqArrays(test, test), true);
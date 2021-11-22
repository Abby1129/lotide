const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const eqObjects = function (object1, object2) {
  if (JSON.stringify(object1).length !== JSON.stringify(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (Array.isArray(object1[item])) {
      return eqArrays(object1[item], object2[item]);
    }
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

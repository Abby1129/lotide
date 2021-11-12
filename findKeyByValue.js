const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (value === object[key]) return key;
  }
};

module.exports = findKeyByValue;

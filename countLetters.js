const assertEqual = require("./assertEqual");

const countLetters = function (sentence) {
  const cleanString = sentence.split(" ").join("");
  const result = {};
  for (const letter of cleanString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

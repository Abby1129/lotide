const findKey = (array, cb) => {
  for (const item in array) {
    if (cb(array[item])) {
      return item;
    }
  }
};

module.exports = findKey;
// let data2 = {
//   "Blue Hill": { stars: 1 },
//   Akaleri: { stars: 3 },
//   noma: { stars: 2 },
//   elBulli: { stars: 3 },
//   Ora: { stars: 2 },
//   Akelarre: { stars: 3 },
// };

// let cb = (x) => x.stars === 2;

// console.log(findKey(data2, cb));

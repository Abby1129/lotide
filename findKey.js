function findKey(array, cb) {
  for (const item in array) {
    if (cb(array[item])) {
      return item;
    }
  }
}

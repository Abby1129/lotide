const takeUntil = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr.slice(0, arr.indexOf(arr[i]));
    }
  }
};

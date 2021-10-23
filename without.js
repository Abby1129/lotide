const without = function (sourceArr, itemsToRemoveArr) {
  resultsArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (itemsToRemoveArr.includes(sourceArr[i]) === false) {
      resultsArr.push(sourceArr[i]);
    }
  }
  return resultsArr;
};



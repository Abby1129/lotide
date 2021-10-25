const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// input are: array and object
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// declare a results object which is empty
// loop through all the items
// if the item is found in the itemsToCount object, increment count into the results object, else return 1

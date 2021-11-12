const tail = function(array) {
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;

const countLetters = function (sentence) {
  const cleanString = sentence.split(' ').join('');
  const result = {};
  for (let letter of cleanString) {
    if (result[letter]) {
      result[letter] += 1
    } else{
      result[letter] = 1
    }
  }
  return JSON.stringify(result)
}



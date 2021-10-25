const middle = function(array){
  if (array.length === 2 || array.length === 1){
    return []
  }
  if (array.length % 2 > 0){
    return array[Math.floor(array.length / 2)]
  }
  if(array.length % 2 === 0){
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]]
  }
}

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var finalArr = [];
  var secArr = [];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (counter !== size) {
      secArr[counter] = array[i];
      counter++;
      if (i == array.length - 1) {
        finalArr.push(secArr);
      }
    } else {
      finalArr.push(secArr);
      var anArr = [];
      anArr[0] = array[i];
      secArr = anArr;
      counter = 1;
      if (i == array.length - 1) {
        finalArr.push(secArr);
      }
    }
  }
  return finalArr;
}

module.exports = chunk;

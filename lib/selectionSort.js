var swap = require('./swap')

module.exports = function (arr) {
  // For each index of the array...
  for (var j = 0; j < arr.length - 1; j++) {
    // start by assuming the first element is the minimum remaining value.
    var iMin = j

    // Scan the rest of the array and overwrite the index of the minimum if you find something smaller.
    for (var i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[iMin]) {
        iMin = i
      }
    }

    // Pull the minimum value to the current location.
    if (iMin !== j) {
      swap(arr, iMin, j)
    }
  }

  return arr
}

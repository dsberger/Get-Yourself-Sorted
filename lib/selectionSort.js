var swap = require('./swap')

module.exports = function (arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    var iMin = j

    for (var i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[iMin]) {
        iMin = i
      }
    }

    if (iMin !== j) {
      swap(arr, iMin, j)
    }
  }

  return arr
}

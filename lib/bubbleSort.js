var swap = require('./swap')

module.exports = function (arr) {
  var sorted = false

  while (!sorted) {
    sorted = true
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false
        swap(arr, i, i + 1)
      }
    }
  }

  return arr
}

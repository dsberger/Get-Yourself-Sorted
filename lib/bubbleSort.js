var swap = require('./swap')

module.exports = function (arr) {
  // Assume the array is not sorted.
  var sorted = false

  // While it's not sorted...
  while (!sorted) {
    // on every pass, assume it's sorted until proven otherwise.
    sorted = true

    // Scan the array for adjacent pairs out of order.
    for (var i = 0; i < arr.length - 1; i++) {
      // If they're out of order, set the sorted flag to false and swap them
      if (arr[i] > arr[i + 1]) {
        sorted = false
        swap(arr, i, i + 1)
      }
    }
  }
  // Loop will exit after a complete pass with nothing out of order.

  return arr
}

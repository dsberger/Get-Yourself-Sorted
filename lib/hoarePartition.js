var swap = require('./swap')

module.exports = function (arr, lo, hi) {
  // Small arrays return 0 quickly.
  if (arr.length <= 1) { return 0 }

  // Set default lo and hi.
  lo = lo || 0
  hi = hi || arr.length - 1

  // Select lo index as the pivot value
  var pivotIndex = lo
  var pivot = arr[pivotIndex]

  // Start iterating at the hi end.
  var j = hi

  while (pivotIndex < j) {
    // If the value to the left of the pivot value is less than the pivot, swap them.
    if (arr[pivotIndex + 1] < pivot) {
      swap(arr, pivotIndex, pivotIndex + 1)
      pivotIndex++
    } else {
      // If not, swap it for the furthest value.
      swap(arr, pivotIndex + 1, j)
      j--
    }
  }
  // Loop exits when all values to the left of the pivot are less than the pivot, and all values to the right are greater.

  return pivotIndex
}

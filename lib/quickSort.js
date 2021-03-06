var hoarePartition = require('./hoarePartition')

function quickSort (arr, lo, hi) {
  // Recursion base case
  if (arr.length <= 1) { return arr }

  // Set default lo and hi
  lo = lo || 0
  hi = hi || arr.length - 1

  // Partition array
  var pivotIndex = hoarePartition(arr, lo, hi)

  // Recursive quickSort() calls on two halves of the array.
  var left = quickSort(arr.slice(0, pivotIndex))
  var right = quickSort(arr.slice(pivotIndex + 1))

  // Concatenate the results.
  return left.concat(arr[pivotIndex]).concat(right)
}

module.exports = quickSort

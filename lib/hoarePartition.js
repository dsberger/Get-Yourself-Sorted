module.exports = function (arr, lo, hi) {
  if (arr.length <= 1) { return 0 }

  lo = lo || 0
  hi = hi || arr.length - 1

  var pivotIndex = lo
  var pivot = arr[pivotIndex]

  var j = hi

  // If i < pivot, pivotIndex = i, swap i and pivotindex
  // If i > pivot, check J to see if it can be pulled down.

  while (pivotIndex < j) {
    if (arr[pivotIndex + 1] < pivot) {
      swap(arr, pivotIndex, pivotIndex + 1)
      pivotIndex++
    } else {
      swap(arr, pivotIndex + 1, j)
      j--
    }
  }

  return pivotIndex
}

function swap (arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

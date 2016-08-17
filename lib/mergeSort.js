function mergeSort (arr) {
  // Recursive base case returns the array if it contains zero or one elements.
  if (arr.length <= 1) { return arr }

  // The array is split into roughly equal halves.
  var left = arr.splice(0, arr.length / 2)
  var right = arr

  // Each half is sorted with a recursive mergeSort() call.
  var sortedLeft = mergeSort(left)
  var sortedRight = mergeSort(right)

  // The two halves are merged into a single, sorted array.
  return merge(sortedLeft, sortedRight)
}

// Merges two sorted arrays into one sorted array.
function merge (left, right) {
  var merged = []

  // While neither array is empty...
  while (left.length > 0 && right.length > 0) {
    // the smaller value is shifted off the array and into the result.
    if (left[0] < right[0]) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }

  // One input array is empty, the other contains sorted values greater than the sorted values of the merged array.
  return merged.concat(left).concat(right)
}

module.exports = mergeSort

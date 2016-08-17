module.exports = function (arr) {
  for (var i = 1; i < arr.length; i++) {
    // Value at I is plucked from unsorted section.
    var insertValue = arr[i]

    // J points to the index to the left of I
    var j = i - 1

    // While the value at J is greater than the value to be inserted...
    while (j >= 0 && arr[j] > insertValue) {
      // sorted values slide right along the array.
      arr[j + 1] = arr[j]
      j--
    }

    // The value formerly at index I is inserted to the sorted section of the array.
    arr[j + 1] = insertValue
  }

  return arr
}

module.exports = function (arr) {
  var sorted = false

  while (!sorted) {
    sorted = true
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false

        var temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  }

  return arr
}

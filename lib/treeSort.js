var Tree = require('./Tree')

module.exports = function (arr) {
  // Create a new Tree object with the first element as its root value.
  var tree = new Tree(arr[0])

  // Iterate over the array and insert every value into the Tree object.
  for (var i = 1; i < arr.length; i++) {
    tree.insert(arr[i])
  }

  // Print the tree using the object's built-in toArray function.
  return tree.toArray()
}

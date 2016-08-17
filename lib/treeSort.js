var Tree = require('./Tree')
module.exports = function (arr) {
  var tree = new Tree(arr[0])

  for (var i = 1; i < arr.length; i++) {
    tree.insert(arr[i])
  }

  return tree.toArray()
}

function Tree (value) {
  this.root = value
  this.leftSubTree
  this.rightSubTree

  this.insert = function (input) {
    if (input > this.root) {
      if (this.rightSubTree) {
        this.rightSubTree.insert(input)
      } else {
        this.rightSubTree = new Tree(input)
      }
    } else {
      if (this.leftSubTree) {
        this.leftSubTree.insert(input)
      } else {
        this.leftSubTree = new Tree(input)
      }
    }
  }

  this.toArray = function () {
    var arr = []

    // Recursively call toArray on the left side (values less tha), if any.
    if (this.leftSubTree) {
      arr = arr.concat(this.leftSubTree.toArray())
    }

    // Always add the tree's own root value.
    arr.push(this.root)

    // Recursively call toArray on the right side (values greater than), if any.
    if (this.rightSubTree) {
      arr = arr.concat(this.rightSubTree.toArray())
    }

    return arr
  }
}

module.exports = Tree

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

    if (this.leftSubTree) {
      arr = arr.concat(this.leftSubTree.toArray())
    }

    arr.push(this.root)

    if (this.rightSubTree) {
      arr = arr.concat(this.rightSubTree.toArray())
    }

    return arr
  }
}

module.exports = Tree

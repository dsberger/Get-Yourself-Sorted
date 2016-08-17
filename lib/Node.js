function Node (value) {
  this.value = value
  this.rightChild
  this.leftChild

  function attachOrCreate (child, input) {
    if (child) {
      child.attach(input)
    } else {
      child = new Node(input)
    }
    return child
  }

  this.attach = function (input) {
    if (input > this.value) {
      this.rightChild = attachOrCreate(this.rightChild, input)
    } else {
      this.leftChild = attachOrCreate(this.leftChild, input)
    }
  }

  this.toArray = function () {
    var arr = []

    if (this.leftChild) {
      arr = arr.concat(this.leftChild.toArray())
    }

    arr.push(this.value)

    if (this.rightChild) {
      arr = arr.concat(this.rightChild.toArray())
    }

    return arr
  }
}

module.exports = Node

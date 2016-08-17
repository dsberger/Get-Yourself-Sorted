var Node = require('./Node')

function Tree (rootValue) {
  this.root = new Node(rootValue)

  this.insert = function (value) {
    this.root.attach(value)
  }

  this.toArray = function () {
    return this.root.toArray()
  }
}

module.exports = Tree

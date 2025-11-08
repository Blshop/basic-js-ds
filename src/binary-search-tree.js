const { NotImplementedError } = require('../extensions/index.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_node
  }
  root() {
    if (this.root_node === undefined) return null
    else return this.root_node
    // remove line with error and write your code here
  }

  add(data) {
    if (this.root_node === undefined) {
      this.root_node = new Node(data)
    }
    else {
      let index = this.root_node
      while (true) {
        if (data < index.data) {
          if (index.left) {
            index = index.left
          }
          else {
            index.left = new Node(data)
            break
          }
        }
        else {
          if (index.right) {
            index = index.right
          }
          else {
            index.right = new Node(data)
            break
          }
        }
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    let index = this.root_node
    while (true) {
      if (index.data === data) return true
      if (data < index.data) {
        if (index.left) {
          index = index.left
        }
        else { return false }
      }
      else {
        if (index.right) {
          index = index.right
        }
        else { return false }
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    let index = this.root_node
    while (true) {
      if (index.data === data) return index
      if (data < index.data) {
        if (index.left) {
          index = index.left
        }
        else { return null }
      }
      else {
        if (index.right) {
          index = index.right
        }
        else { return null }
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    let index = this.root_node
    let tail = index
    while (true) {
      if (index.data === data) break
      if (data < index.data) {
        if (index.left) {
          tail = index
          index = index.left
        }
        else { return null }
      }
      else {
        if (index.right) {
          tail = index
          index = index.right
        }
        else { return null }
      }
    }
    let replacement = index
    if (!replacement.left && !replacement.right) {
      if (index.data < tail.data) tail.left = null
      else if (index.data > tail.data) tail.right = null
    }
    else if (!replacement.left) {
      if (index.data < tail.data) tail.left = replacement.right
      else if (index.data > tail.data) tail.right = replacement.right
      index.right = null
    }
    else if (!replacement.right) {
      if (index.data < tail.data) tail.left = replacement.left
      else if (index.data > tail.data) tail.right = replacement.left
      index.left = null
    }
    else {
      replacement = index.left
      tail = index
      while (true) {
        if (replacement.right) {
          tail = replacement
          replacement = replacement.right
        }
        else {
          index.data = replacement.data
          if (index.data < tail.data) tail.left = replacement.left
          else if (index.data > tail.data) tail.right = replacement.left
          break
        }
      }
    }
    // remove line with error and write your code here
  }

  min() {
    let index = this.root_node
    while (true) {
      if (index.left) index = index.left
      else return index.data
    }
    // remove line with error and write your code here
  }

  max() {
    let index = this.root_node
    while (true) {
      if (index.right) index = index.right
      else return index.data
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
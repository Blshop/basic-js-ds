const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
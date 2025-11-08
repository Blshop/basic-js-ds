const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js')
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }
  getUnderlyingList() {
    function recurr(node) {
      if (!node) return null
      return {
        value: node.value,
        next: recurr(node.next)
      }
    }
    return recurr(this.head)
  }


  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value)
      this.tail = this.head
    }
    else {
      let new_node = new ListNode(value)
      this.tail.next = new_node
      this.tail = new_node
    }
    // remove line with error and write your code here
  }

  dequeue() {
    if (!this.head) return undefined
    let node_list = this.head
    this.head = this.head.next
    if (!this.head) this.tail = null
    return node_list.value
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    this.head
    this.tail
  }
  getUnderlyingList() {
    return this.head
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.head === undefined) {
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
    let node_list = this.head
    this.head = this.head.next
    return node_list.value
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};

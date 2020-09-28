'use strict';

const Node = require('../linkedList/node.js');

// first in first out
class Queues {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    // adds new node with value to back fo the queue
    // O(1) time performance
  }

  dequeue() {
    // removes node from front of queue
    // returns node's value
    // raise exception when called on empty queue
  }

  peek() {
    // returns value of node at the front of the queue
  }

  isEmpty() {
    // returns boolean if empty
  }
}

module.exports = Queues;

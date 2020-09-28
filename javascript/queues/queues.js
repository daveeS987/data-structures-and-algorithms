'use strict';

const Node = require('../linkedList/node.js');

// First in First Out
class Queues {

  constructor() {
    this.front = null;
  }

  enqueue(value) {
    if(this.front === null) {
      this.front = new Node(value);
    } else {
      let current = this.front;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  dequeue() {
    if(this.front === null) {
      throw new Error('THERE IS NOTHING TO DEQUEUE');
    }
    let dequeueItem = this.front;
    this.front = this.front.next;
    return dequeueItem;
  }

  peek() {
    if(this.front === null) {
      throw new Error('QUEUE IS EMPTY');
    }
    return this.front;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queues;
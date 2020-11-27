'use strict';

const Node = require('../linkedList/node.js');

// First in First Out
class Queues {

  constructor() {
    this.front = null;
  }

  enqueue(value) {

    let node = new Node(value);
    if(!this.front) {
      this.front = node;
    } else {
      let current = this.front;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    if(!this.front) {
      console.error('ERROR: THERE IS NOTHING TO DEQUEUE');
    } else {
      let dequeueItem = this.front;
      this.front = this.front.next;
      return dequeueItem;
    }
  }

  peek() {
    if(!this.front) {
      console.error('ERROR: QUEUE IS EMPTY');
    }
    return this.front;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queues;

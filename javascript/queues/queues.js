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
    return this;
  }

  dequeue() {
    if(!this.front) {
      console.error('ERROR: THERE IS NOTHING TO DEQUEUE');
    } else {
      let dequeueItem = this.front;
      this.front = this.front.next;
      return dequeueItem.value;
    }
  }

  peek() {
    if(!this.front) {
      console.error('ERROR: QUEUE IS EMPTY');
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queues;

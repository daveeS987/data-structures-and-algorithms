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
      console.error('ERROR: THERE IS NOTHING TO DEQUEUE');
    } else {
      let dequeueItem = this.front.value;
      this.front = this.front.next;
      return dequeueItem;
    }
  }

  peek() {
    if(this.front === null) {
      console.error('ERROR: QUEUE IS EMPTY');
    }
    return this.front;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queues;

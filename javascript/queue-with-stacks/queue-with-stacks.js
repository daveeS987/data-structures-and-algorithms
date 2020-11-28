'use strict';

const Node = require('../linkedList/node.js');
const Stack = require('../stacks/stacks.js');

class PseuodoQueue {
  constructor() {
    this.front = new Stack();
    this.stackContainer = new Stack();
  }

  enqueue(value) {
    this.stackContainer.push(value);
  }

  dequeue() {
    if(this.front.top !== null) {
      let popped = this.front.pop();
      return popped;
    }
    if(this.stackContainer.top === null) {
      console.error('ERROR: There is nothing to Dequeue');
      return;
    }

    while(this.stackContainer.peek()) {
      let popped = this.stackContainer.pop();
      this.front.push(popped);
    }

    let dequeueItem = this.front.pop();
    return dequeueItem;
  }
}


module.exports = PseuodoQueue;

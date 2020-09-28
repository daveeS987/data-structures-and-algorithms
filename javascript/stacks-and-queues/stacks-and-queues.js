'use strict';

const Node = require('../linkedList/node.js');

// last in first out
class Stacks {
  constructor () {
    this.top = null;
  }

  push(value) {
    // adds a new node with the value to the top of the stack
    // O(1) Time performance
    if(!this.top) {
      this.top = new Node(value);
    } else {
      let current = this.top;
      this.top = new Node(value);
      current.next = this.top;
    }
  }

  pop() {
    // removes the node from top of stack
    // return nodes value
    // raise exception when called on empty stack
  }

  peek(){
    // returns value of node at the top of stack
    // raise exception when called on empty stack
  }

  isEmpty() {
    // returns boolean wheter or not stack is empty
  }
}

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

module.exports = {Stacks, Queues};

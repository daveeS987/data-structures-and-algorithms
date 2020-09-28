'use strict';

const Node = require('../linkedList/node.js');

// last in first out
class Stacks {
  constructor () {
    this.top = null;
  }

  push(value) {

    if(this.top === null) {
      this.top = new Node(value);
    } else {
      let originalTop = this.top;
      this.top = new Node(value);
      this.top.next = originalTop;
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



module.exports = Stacks;
